import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService, Doctor } from '../core/services/doctor.service';
import { AppointmentService, AvailableSlot, Appointment, AppointmentStatus } from '../core/services/appointment.service';
import { Bill, BillService } from '../core/services/bill.service';
import { StorageService } from '../core/services/storage.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  activeTab: 'doctors' | 'appointments' | 'profile' = 'doctors';
  doctors: Doctor[] = [];
  appointments: Appointment[] = [];
  bills: Bill[] = [];
  loading = false;
  error?: string;
  bookingForm!: FormGroup;
  selectedDoctor: Doctor | null = null;
  availableSlots: AvailableSlot[] = [];
  slotsLoading = false;
  slotsLoaded = false;
  selectedAppointment: Appointment | null = null;
  minDate: string = '';
  availabilityAlerts: Map<number, string> = new Map();
  profileForm!: FormGroup;
  userProfile: any = null;
  editMode = false;

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private billService: BillService,
    private fb: FormBuilder,
    private storage: StorageService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.setMinDate();
    this.initForm();
    this.loadDoctors();
    this.loadAppointments();
    this.loadBills();
    this.loadUserProfile();
  }

  setMinDate() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  initForm() {
    this.bookingForm = this.fb.group({
      doctorId: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      timeSlot: [{ value: '', disabled: true }, Validators.required]
    });

    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['']
    });
  }

  loadDoctors() {
    this.loading = true;
    this.error = undefined;
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
        this.loading = false;
        this.checkDoctorAvailability();
      },
      error: () => {
        this.error = 'Failed to load doctors';
        this.loading = false;
      }
    });
  }

  doctorName(doctor: Doctor | null) {
    if (!doctor) return 'Doctor';
    return doctor.user?.fullName || doctor.fullName || doctor.name || `Doctor ${doctor.doctorId}`;
  }

  startBooking() {
    this.activeTab = 'doctors';
    this.selectedDoctor = null;
    this.availableSlots = [];
    this.slotsLoaded = false;
    this.selectedAppointment = null;
    this.error = undefined;
    this.bookingForm.reset({
      doctorId: '',
      appointmentDate: '',
      timeSlot: ''
    });
    this.bookingForm.get('timeSlot')?.disable();
  }

  viewAppointmentDetails(appointment: Appointment) {
    this.selectedAppointment = this.appointments.find(a => a.appointmentId === appointment.appointmentId) ?? appointment;
  }

  closeAppointmentDetails() {
    this.selectedAppointment = null;
  }

  loadAppointments() {
    const userId = this.storage.getUserId();
    if (!userId) return;

    this.appointmentService.getAppointmentsByPatient(userId).subscribe({
      next: (data: any[]) => {
        console.log('Raw API Response:', JSON.stringify(data, null, 2));
        
        // Map status numbers to text
        const statusMap: any = { 1: 'Pending', 2: 'Approved', 3: 'Rejected', 4: 'Completed', 5: 'Done' };
        
        // Normalize data to handle both camelCase and PascalCase
        this.appointments = data.map(apt => {
          const statusValue = apt.status || apt.Status;
          const statusText = typeof statusValue === 'number' ? statusMap[statusValue] : (apt.statusText || apt.StatusText || statusValue || 'Pending');
          
          const timeSlotDisplay = apt.timeSlotDisplay || apt.TimeSlotDisplay || apt.timeSlot || apt.TimeSlot || 'Not Set';
          const timeSlot = apt.timeSlot || apt.TimeSlot || '';
          
          console.log(`Appointment ${apt.appointmentId || apt.AppointmentId}: timeSlot='${timeSlot}', timeSlotDisplay='${timeSlotDisplay}'`);
          
          return {
            appointmentId: apt.appointmentId || apt.AppointmentId,
            patientId: apt.patientId || apt.PatientId,
            doctorId: apt.doctorId || apt.DoctorId,
            patientName: apt.patientName || apt.PatientName || '',
            doctorName: apt.doctorName || apt.DoctorName || '',
            appointmentDate: apt.appointmentDate || apt.AppointmentDate,
            slotTime: apt.slotTime || apt.SlotTime || '',
            timeSlot: timeSlot,
            timeSlotDisplay: timeSlotDisplay,
            status: statusText,
            statusText: statusText,
            symptoms: apt.symptoms || apt.Symptoms,
            remarks: apt.remarks || apt.Remarks
          };
        });
        
        console.log('Normalized appointments:', this.appointments);
        
        if (this.selectedAppointment) {
          const updated = this.appointments.find(a => a.appointmentId === this.selectedAppointment?.appointmentId);
          this.selectedAppointment = updated ?? null;
        }
        
        this.checkDoctorAvailability();
      },
      error: (err) => {
        console.error('Error loading appointments:', err);
        this.error = 'Failed to load appointments';
      }
    });
  }



  onDoctorSelected(doctor: Doctor) {
    this.selectedDoctor = doctor;
    this.availableSlots = [];
    this.slotsLoaded = false;
    this.error = undefined;
    this.bookingForm.patchValue({
      doctorId: String(doctor.doctorId),
      appointmentDate: '',
      timeSlot: ''
    });
    this.bookingForm.get('timeSlot')?.disable();
  }

  onDateChanged(date: string) {
    if (this.bookingForm) {
      this.bookingForm.patchValue({ timeSlot: '' });
      this.bookingForm.get('timeSlot')?.disable();
    }
    if (this.selectedDoctor && date) {
      this.slotsLoading = true;
      this.slotsLoaded = false;
      this.availableSlots = [];
      this.appointmentService.getAvailableSlots(this.selectedDoctor.doctorId, date).subscribe({
        next: (slots) => {
          // Remove booked ones: only keep Available
          let filteredSlots = slots.filter(slot => slot.isAvailable);
          
          // If date is today, also remove past times
          const selectedDate = new Date(date);
          const today = new Date();
          if (selectedDate.toDateString() === today.toDateString()) {
            const currentHour = today.getHours();
            const currentMinute = today.getMinutes();
            const currentTimeInMinutes = currentHour * 60 + currentMinute;
            
            filteredSlots = filteredSlots.filter(slot => {
              const [hours, minutes] = slot.startTime.split(':').map(Number);
              const slotTimeInMinutes = hours * 60 + minutes;
              return slotTimeInMinutes > currentTimeInMinutes;
            });
          }
          
          this.availableSlots = filteredSlots;
          this.slotsLoading = false;
          this.slotsLoaded = true;
          if (this.availableSlots.length > 0) {
            this.bookingForm.get('timeSlot')?.enable();
          }
        },
        error: () => {
          this.error = 'Failed to load available slots';
          this.slotsLoading = false;
          this.slotsLoaded = true;
          this.bookingForm.get('timeSlot')?.disable();
        }
      });
    } else {
      this.availableSlots = [];
      this.slotsLoaded = false;
      this.bookingForm.get('timeSlot')?.disable();
    }
  }

  bookAppointment() {
    if (this.bookingForm.invalid) return;

    const userId = this.storage.getUserId();
    if (!userId) {
      this.error = 'User not found';
      return;
    }

    const { doctorId, appointmentDate, timeSlot } = this.bookingForm.value;
    if (!doctorId || !appointmentDate || !timeSlot) return;

    // Parse timeSlot string to create TimeSpan format
    const [hours, minutes] = timeSlot.split(':').map(Number);
    const slotTimeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    
    const appointment = {
      patientId: userId,
      doctorId: Number(doctorId),
      appointmentDate: new Date(appointmentDate),
      slotTime: slotTimeString
    };
    
    console.log('Booking appointment with data:', appointment);

    this.loading = true;
    this.error = undefined;
    this.appointmentService.createAppointment(appointment).subscribe({
      next: (response) => {
        console.log('Appointment created successfully:', response);
        this.alertService.show('Appointment Booked Successfully, You will get Notify in your account', 'Success');
        this.bookingForm.reset({
          doctorId: '',
          appointmentDate: '',
          timeSlot: ''
        });
        this.bookingForm.get('timeSlot')?.disable();
        this.selectedDoctor = null;
        this.availableSlots = [];
        this.slotsLoaded = false;
        this.selectedAppointment = null;
        this.activeTab = 'appointments';
        // Reload appointments to show the new one
        setTimeout(() => this.loadAppointments(), 500);
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to book appointment';
        this.loading = false;
      }
    });
  }

  statusLabel(appointment: any): string {
    if (!appointment) return '';
    return appointment.statusText || '';
  }

  statusClass(appointment: any): string {
    const status = appointment?.statusText || '';
    return status ? status.toLowerCase() : '';
  }

  loadBills() {
    const userId = this.storage.getUserId();
    if (!userId) return;

    this.billService.getMyBills().subscribe({
      next: (data) => {
        this.bills = data;
      },
      error: () => {
        console.error('Failed to load bills');
      }
    });
  }

  billFor(appointmentId: number): Bill | null {
    return this.bills.find(b => b.appointmentId === appointmentId) ?? null;
  }

  isCompleted(appointment: any): boolean {
    return appointment?.statusText === 'Completed' || appointment?.status === 'Completed';
  }

  downloadBill(appointmentId: number) {
    this.billService.downloadBill(appointmentId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Bill_${appointmentId}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => {
        this.error = 'Failed to download bill';
      }
    });
  }

  getDoctorFee(doctorId: number): number | null {
    const doctor = this.doctors.find(d => d.doctorId === doctorId);
    return doctor?.consultationFee ?? null;
  }

  checkDoctorAvailability() {
    this.availabilityAlerts.clear();
    const upcomingAppointments = this.appointments.filter(apt => 
      apt.statusText === 'Pending' || apt.statusText === 'Approved'
    );

    upcomingAppointments.forEach(apt => {
      const doctor = this.doctors.find(d => d.doctorId === apt.doctorId);
      if (doctor && doctor.availability && doctor.availability !== 'Available') {
        this.availabilityAlerts.set(apt.appointmentId, doctor.availability);
      }
    });
  }

  getAvailabilityAlert(appointmentId: number): string | null {
    return this.availabilityAlerts.get(appointmentId) || null;
  }

  loadUserProfile() {
    const userId = this.storage.getUserId();
    if (!userId) return;

    this.storage.getUser().subscribe({
      next: (user) => {
        this.userProfile = user;
        this.profileForm.patchValue({
          fullName: user.fullName || '',
          phoneNumber: user.phoneNumber || ''
        });
      },
      error: () => {
        this.error = 'Failed to load profile';
      }
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.loadUserProfile();
    }
  }

  updateProfile() {
    if (this.profileForm.invalid) {
      this.error = 'Please fill all required fields';
      return;
    }

    const userId = this.storage.getUserId();
    if (!userId) {
      this.error = 'User ID not found';
      return;
    }

    const updateData = {
      fullName: this.profileForm.get('fullName')?.value || null,
      phoneNumber: this.profileForm.get('phoneNumber')?.value || null
    };

    this.loading = true;
    this.error = undefined;
    
    this.storage.updateUser(userId, updateData).subscribe({
      next: (response) => {
        console.log('Update Response:', response);
        this.userProfile = response;
        this.editMode = false;
        this.alertService.show('Profile updated successfully!', 'Success');
        this.loading = false;
      },
      error: (err) => {
        console.error('Update Error:', err);
        const errorMsg = err?.error?.message || err?.message || 'Failed to update profile';
        this.error = errorMsg;
        this.alertService.show('Error: ' + errorMsg, 'Error');
        this.loading = false;
      }
    });
  }

}
