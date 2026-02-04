import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { DoctorService } from '../core/services/doctor.service';
import { AppointmentService, Appointment } from '../core/services/appointment.service';
import { PrescriptionService, PrescriptionDto } from '../core/services/prescription.service';
import { StorageService } from '../core/services/storage.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  activeTab: 'appointments' | 'profile' | 'performance' | 'completed' = 'appointments';
  appointments: Appointment[] = [];
  completedAppointments: any[] = [];
  doctorInfo: any = null;
  loading = false;
  error?: string;
  profileForm!: FormGroup;
  remarksForm!: FormGroup;

  prescriptionForm!: FormGroup;
  selectedAppointment: Appointment | null = null;
  showPrescriptionForm = false;
  showUpdatePrescriptionForm = false;
  showRemarksForm = false;
  showRescheduleForm = false;
  rescheduleDate: string = '';
  rescheduleReason: string = '';
  selectedSlot: any = null;
  loadingSlots = false;
  availableSlots: any[] = [];
  editMode = false;
  minDate: string = '';

  // Add method to handle tab changes
  setActiveTab(tab: 'appointments' | 'profile' | 'performance' | 'completed') {
    this.activeTab = tab;
    this.closeAllModals();
  }

  closeAllModals() {
    this.showPrescriptionForm = false;
    this.showRemarksForm = false;
    this.showRescheduleForm = false;
    this.selectedAppointment = null;
    this.prescriptionForm?.reset();
  }



  // Performance stats
  performanceStats: any = null;

  // Patient history
  showPatientHistory = false;
  patientHistory: any = null;

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private prescriptionService: PrescriptionService,
    private fb: FormBuilder,
    private storage: StorageService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('DOCTOR DASHBOARD INITIALIZED');
    console.log('='.repeat(50));
    console.log('Loading all doctor dashboard data...');
    this.setMinDate();
    this.initForms();
    this.loadAppointments();
    this.loadDoctorInfo();
    this.loadPerformanceStats();
    this.loadCompletedAppointments();
    console.log('='.repeat(50));
  }

  setMinDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minDate = tomorrow.toISOString().split('T')[0];
  }

  initForms() {
    this.profileForm = this.fb.group({
      fullName: [''],
      phoneNumber: ['', [Validators.pattern('^[0-9]{10}$')]],
      faceToFaceFee: ['', [Validators.required, Validators.min(0)]],
      telemedicineFee: ['', [Validators.required, Validators.min(0)]],
      experienceYears: ['', [Validators.required, Validators.min(0)]],
      specialization: ['', Validators.required],
      qualification: ['', Validators.required],
      profilePictureUrl: ['']
    });

    this.remarksForm = this.fb.group({
      remarks: ['', Validators.required]
    });

    this.prescriptionForm = this.fb.group({
      medications: ['', Validators.required],
      diagnosis: [''],
      instructions: [''],
      notes: ['']
    });
  }

  loadAppointments() {
    let doctorId = this.storage.getDoctorId();
    
    if (!doctorId) {
      doctorId = this.storage.getUserId();
    }
    
    if (!doctorId) {
      this.error = 'Doctor ID not found';
      return;
    }

    console.log('API Call: Loading doctor appointments...');
    console.log(`Doctor ID: ${doctorId}`);
    this.loading = true;
    this.appointmentService.getAppointmentsByDoctor(doctorId).subscribe({
      next: (data) => {
        this.appointments = data.map(appointment => this.normalizeAppointment(appointment));
        console.log('Doctor Appointments Data:', data);
        console.log(`Total Appointments: ${this.appointments.length}`);
        this.appointments.forEach((apt: any, index: number) => {
          console.log(`Appointment ${index + 1}: ${apt.patientName} - ${apt.appointmentDate} ${apt.timeSlotDisplay} - Status: ${apt.statusText}`);
        });
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load appointments:', err);
        this.error = 'Failed to load appointments';
        this.loading = false;
      }
    });
  }



  approveAppointment(appointment: any) {
    this.loading = true;
    
    fetch(`http://localhost:5000/api/doctor/appointment/${appointment.appointmentId}/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify({ remarks: 'Appointment approved by doctor' })
    })
    .then(response => {
      if (response.ok) {
        this.alertService.show('Appointment approved and patient notified via email!', 'Success');
        this.loadAppointments();
      } else {
        this.error = 'Failed to approve appointment';
      }
      this.loading = false;
    })
    .catch(() => {
      this.error = 'Failed to approve appointment';
      this.loading = false;
    });
  }

  disapproveAppointment(appointment: any) {
    const reason = prompt('Please provide a reason for disapproval:');
    if (!reason) return;
    
    this.loading = true;
    
    fetch(`http://localhost:5000/api/doctor/appointment/${appointment.appointmentId}/disapprove`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify({ 
        remarks: reason,
        sendEmail: true,
        emailMessage: `Dear ${appointment.patientName}, your appointment has been disapproved. Reason: ${reason}. Please contact us for further assistance.` 
      })
    })
    .then(response => {
      if (response.ok) {
        this.alertService.show('Appointment disapproved and patient notified via email!', 'Success');
        this.loadAppointments();
      } else {
        this.error = 'Failed to disapprove appointment';
      }
      this.loading = false;
    })
    .catch(() => {
      this.error = 'Failed to disapprove appointment';
      this.loading = false;
    });
  }

  rescheduleAppointment(appointment: any) {
    this.selectedAppointment = appointment;
    this.showRescheduleForm = true;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.rescheduleDate = tomorrow.toISOString().split('T')[0];
    this.rescheduleReason = '';
    this.selectedSlot = null;
    this.availableSlots = [];
    this.loadAvailableSlotsForReschedule(this.rescheduleDate);
  }

  loadAvailableSlotsForReschedule(date: string) {
    if (!this.selectedAppointment || !date) return;

    this.loadingSlots = true;
    this.selectedSlot = null;
    this.availableSlots = [];
    
    console.log(`Loading slots for appointment ${this.selectedAppointment.appointmentId} on ${date}`);
    
    fetch(`http://localhost:5000/api/doctor/appointment/${this.selectedAppointment.appointmentId}/patient-slots?date=${date}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      }
    })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(slots => {
      console.log('Received slots:', slots);
      this.availableSlots = slots.map((slot: any) => ({
        startTime: slot.startTime,
        endTime: slot.endTime,
        display: this.formatTimeSlot(slot.startTime, slot.endTime)
      }));
      console.log('Formatted slots:', this.availableSlots);
      this.loadingSlots = false;
    })
    .catch(error => {
      console.error('Error loading slots:', error);
      this.error = 'Failed to load available slots';
      this.loadingSlots = false;
    });
  }

  formatTimeSlot(startTime: string, endTime: string): string {
    const formatTime = (time: string) => {
      if (time.includes(':')) {
        const parts = time.split(':');
        return `${parts[0]}:${parts[1]}`;
      }
      return time;
    };
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  }

  updateAppointmentStatus(appointmentId: number, status: number) {
    this.loading = true;
    
    fetch(`http://localhost:5000/api/doctor/appointment/${appointmentId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify({ status })
    })
    .then(response => {
      if (response.ok) {
        const statusText = ['', 'Pending', 'Confirmed', 'Rejected', 'Rescheduled', 'Completed'][status];
        this.alertService.show(`Appointment ${statusText.toLowerCase()} successfully!`, 'Success');
        this.loadAppointments();
      } else {
        this.error = 'Failed to update appointment status';
      }
      this.loading = false;
    })
    .catch(() => {
      this.error = 'Failed to update appointment status';
      this.loading = false;
    });
  }



  openPrescriptionForm(appointment: any) {
    this.selectedAppointment = appointment;
    this.showPrescriptionForm = true;
    this.prescriptionForm.reset();
  }

  cancelPrescription() {
    console.log('Canceling prescription form');
    this.showPrescriptionForm = false;
    this.selectedAppointment = null;
    this.prescriptionForm.reset();
    this.cdr.detectChanges();
  }

  addPrescription() {
    if (this.prescriptionForm.invalid || !this.selectedAppointment) return;

    const prescriptionData = {
      appointmentId: this.selectedAppointment.appointmentId,
      medications: this.prescriptionForm.value.medications,
      diagnosis: this.prescriptionForm.value.diagnosis,
      instructions: this.prescriptionForm.value.instructions,
      notes: this.prescriptionForm.value.notes
    };

    this.loading = true;
    
    // First, add prescription
    fetch('http://localhost:5000/api/prescription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify(prescriptionData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log('Prescription added:', result);
      // Then mark appointment as completed
      return fetch(`http://localhost:5000/api/doctor/appointment/${this.selectedAppointment!.appointmentId}/complete`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify({ remarks: 'Appointment completed with prescription' })
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      this.alertService.show('Prescription added and appointment marked as completed!', 'Success');
      this.cancelPrescription();
      this.loadAppointments();
      this.loading = false;
    })
    .catch((error) => {
      console.error('Prescription error:', error);
      this.error = 'Failed to add prescription';
      this.loading = false;
    });
  }

  confirmReschedule() {
    if (!this.selectedAppointment || !this.selectedSlot || !this.rescheduleReason) {
      this.error = 'Please select a slot and provide a reason';
      return;
    }
    
    this.loading = true;
    this.error = undefined;
    
    const rescheduleData = {
      newDate: this.rescheduleDate,
      newSlotTime: this.selectedSlot.startTime,
      reason: this.rescheduleReason
    };
    
    console.log('Rescheduling with data:', rescheduleData);
    
    fetch(`http://localhost:5000/api/doctor/appointment/${this.selectedAppointment.appointmentId}/reschedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify(rescheduleData)
    })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(() => {
      this.alertService.show('Appointment rescheduled successfully! Patient has been notified.', 'Success');
      this.cancelReschedule();
      this.loadAppointments();
      this.loading = false;
    })
    .catch(error => {
      console.error('Reschedule error:', error);
      this.error = 'Failed to reschedule appointment';
      this.loading = false;
    });
  }

  cancelReschedule() {
    this.showRescheduleForm = false;
    this.selectedAppointment = null;
    this.rescheduleDate = '';
    this.rescheduleReason = '';
    this.selectedSlot = null;
    this.availableSlots = [];
  }

  loadDoctorInfo() {
    let doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      doctorId = this.storage.getUserId();
    }
    if (!doctorId) return;

    console.log('API Call: Loading doctor profile...');
    console.log(`Doctor ID: ${doctorId}`);
    this.doctorService.getDoctorById(doctorId).subscribe({
      next: (data) => {
        this.doctorInfo = data;
        console.log('Doctor Profile Data:', data);
        console.log(`Doctor: ${data.fullName}`);
        console.log(`Hospital: ${data.hospitalName || 'N/A'}`);
        console.log(`Specialization: ${data.specialization}`);
        console.log(`Face-to-Face Fee: Rs.${data.faceToFaceFee}`);
        console.log(`Telemedicine Fee: Rs.${data.telemedicineFee}`);
        this.profileForm.patchValue({
          fullName: data.fullName,
          phoneNumber: data.phone || data.phoneNumber,
          faceToFaceFee: data.faceToFaceFee,
          telemedicineFee: data.telemedicineFee,
          experienceYears: data.experienceYears,
          specialization: data.specialization,
          qualification: data.qualification,
          profilePictureUrl: data.profilePictureUrl
        });
      },
      error: (err) => {
        console.error('Failed to load doctor info:', err);
        this.error = 'Failed to load doctor info';
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileForm.patchValue({
          profilePictureUrl: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  updateProfile() {
    if (this.profileForm.invalid) return;

    const doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      this.error = 'Doctor ID not found';
      return;
    }

    const payload = this.profileForm.getRawValue();

    this.loading = true;
    this.doctorService.updateDoctor(doctorId, payload).subscribe({
      next: (data) => {
        this.doctorInfo = data;
        this.error = undefined;
        this.editMode = false;
        this.alertService.show('Profile updated successfully!', 'Success');
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to update profile';
        this.loading = false;
      }
    });
  }

  openRemarksForm(appointment: Appointment) {
    this.selectedAppointment = appointment;
    this.showRemarksForm = true;
    this.remarksForm.reset();
  }

  addRemarks() {
    if (this.remarksForm.invalid || !this.selectedAppointment) return;

    const doctorId = this.storage.getDoctorId() || this.storage.getUserId();
    if (!doctorId) {
      this.error = 'Doctor ID not found';
      return;
    }

    this.loading = true;
    
    // Mark appointment as completed (status 5)
    fetch(`http://localhost:5000/api/doctor/appointment/${this.selectedAppointment.appointmentId}/complete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify({ remarks: this.remarksForm.value.remarks })
    })
    .then(response => {
      if (response.ok) {
        this.alertService.show('Appointment marked as completed!', 'Success');
        this.loadAppointments();
        this.cancelRemarks();
      } else {
        this.error = 'Failed to mark appointment as completed';
      }
      this.loading = false;
    })
    .catch(() => {
      this.error = 'Failed to mark appointment as completed';
      this.loading = false;
    });
  }

  cancelRemarks() {
    this.selectedAppointment = null;
    this.showRemarksForm = false;
    this.remarksForm.reset();
  }

  private normalizeAppointment(appointment: Appointment): Appointment {
    const slot = this.normalizeSlot(appointment.timeSlot || appointment.slotTime);
    const timeSlotDisplay = appointment.timeSlotDisplay || this.formatSlotWindow(slot);
    const statusText = appointment.statusText ?? appointment.status;
    return {
      ...appointment,
      timeSlot: slot,
      timeSlotDisplay,
      statusText: typeof statusText === 'number' ? this.getStatusText(statusText) : statusText
    };
  }

  private normalizeSlot(slot?: string): string {
    if (!slot) return '';
    const parts = slot.split(':');
    const hours = (parts[0] ?? '').padStart(2, '0');
    const minutes = (parts[1] ?? '00').padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  private formatSlotWindow(slot: string): string {
    if (!slot) return '';
    const [h, m] = slot.split(':');
    const hours = Number(h);
    const minutes = Number(m);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return slot;
    const start = `${this.toTwoDigits(hours)}:${this.toTwoDigits(minutes)}`;
    const endMinutes = hours * 60 + minutes + 30;
    const endHours = Math.floor(endMinutes / 60);
    const mins = endMinutes % 60;
    return `${start} - ${this.toTwoDigits(endHours)}:${this.toTwoDigits(mins)}`;
  }

  private toTwoDigits(value: number): string {
    return value.toString().padStart(2, '0');
  }

  getStatusColor(status?: string): string {
    if (!status) return '#6C757D';
    const statusColorMap: { [key: string]: string } = {
      'Pending': '#FFC107',
      'Approved': '#17A2B8',
      'Completed': '#28A745',
      'Rejected': '#DC3545'
    };
    return statusColorMap[status] || '#6C757D';
  }

  getStatusClass(status?: string): string {
    if (!status) return '';
    return status.toLowerCase();
  }

  getStatusText(status: number | string | undefined): string {
    if (!status) return 'Pending';
    if (typeof status === 'string') return status;
    const statusMap: any = {
      1: 'Pending',
      2: 'Confirmed',
      3: 'Rejected', 
      4: 'Completed',
      5: 'Done',
      6: 'Cancelled',
      7: 'Rescheduled'
    };
    return statusMap[status] || 'Pending';
  }

  isPaidAppointment(appointment: Appointment): boolean {
    return (appointment as any).isPaid === true;
  }



  loadPerformanceStats() {
    console.log('API Call: Loading performance statistics...');
    this.doctorService.getPerformanceStats().subscribe({
      next: (data) => {
        this.performanceStats = data;
        console.log('Performance Stats Data:', data);
        console.log(`Performance metrics loaded for doctor`);
      },
      error: (err) => {
        console.error('Failed to load performance stats:', err);
      }
    });
  }

  viewPatientHistory(patientId: number) {
    this.loading = true;
    this.doctorService.getPatientHistory(patientId).subscribe({
      next: (data) => {
        this.patientHistory = data;
        this.showPatientHistory = true;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load patient history';
        this.loading = false;
      }
    });
  }

  closePatientHistory() {
    this.showPatientHistory = false;
    this.patientHistory = null;
  }

  loadCompletedAppointments() {
    let doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      doctorId = this.storage.getUserId();
    }
    if (!doctorId) {
      console.error('No doctor ID found');
      return;
    }

    console.log(`Loading completed appointments for doctor ID: ${doctorId}`);
    this.loading = true;
    this.appointmentService.getCompletedAppointmentsByDoctor(doctorId).subscribe({
      next: (data) => {
        console.log('Raw completed appointments data:', data);
        this.completedAppointments = data.map(apt => ({
          ...apt,
          prescription: apt.prescriptions && apt.prescriptions.length > 0 ? apt.prescriptions[0] : null
        }));
        console.log('Processed completed appointments:', this.completedAppointments);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load completed appointments:', err);
        this.error = 'Failed to load completed appointments';
        this.loading = false;
      }
    });
  }

  updatePrescription(appointment: any) {
    console.log('=== UPDATE PRESCRIPTION CALLED ===');
    console.log('Update prescription clicked for:', appointment);
    console.log('Current activeTab:', this.activeTab);
    
    // Close all other modals first
    this.showRemarksForm = false;
    this.showRescheduleForm = false;
    this.showPatientHistory = false;
    
    this.selectedAppointment = appointment;
    console.log('Selected appointment set to:', this.selectedAppointment);
    
    const prescriptionData = appointment.prescription || appointment.prescriptions?.[0];
    console.log('Prescription data:', prescriptionData);
    
    this.prescriptionForm.patchValue({
      medications: prescriptionData?.medications || '',
      diagnosis: prescriptionData?.diagnosis || '',
      instructions: prescriptionData?.instructions || '',
      notes: prescriptionData?.notes || ''
    });
    
    this.showPrescriptionForm = true;
    console.log('showPrescriptionForm set to:', this.showPrescriptionForm);
    console.log('All modal states:', {
      showPrescriptionForm: this.showPrescriptionForm,
      showRemarksForm: this.showRemarksForm,
      showRescheduleForm: this.showRescheduleForm,
      showPatientHistory: this.showPatientHistory
    });
    
    // Force change detection
    setTimeout(() => {
      this.cdr.detectChanges();
      console.log('Change detection triggered');
    }, 0);
  }

  openUpdatePrescriptionModal(appointment: any) {
    console.log('Opening update prescription modal for:', appointment.patientName);
    this.selectedAppointment = appointment;
    const prescriptionData = appointment.prescription || appointment.prescriptions?.[0];
    
    this.prescriptionForm.patchValue({
      medications: prescriptionData?.medications || '',
      diagnosis: prescriptionData?.diagnosis || '',
      instructions: prescriptionData?.instructions || '',
      notes: prescriptionData?.notes || ''
    });
    
    this.showUpdatePrescriptionForm = true;
    this.cdr.detectChanges();
  }

  savePrescriptionUpdate() {
    if (this.prescriptionForm.invalid || !this.selectedAppointment) return;

    const prescriptionData: PrescriptionDto = {
      medications: this.prescriptionForm.value.medications,
      diagnosis: this.prescriptionForm.value.diagnosis,
      instructions: this.prescriptionForm.value.instructions,
      notes: this.prescriptionForm.value.notes
    };

    this.loading = true;
    this.prescriptionService.updatePrescription(this.selectedAppointment.appointmentId, prescriptionData).subscribe({
      next: (result) => {
        this.showUpdatePrescriptionForm = false;
        this.selectedAppointment = null;
        this.prescriptionForm.reset();
        this.alertService.show('Prescription updated successfully! Patient has been notified via email.', 'Success');
        this.loadCompletedAppointments();
        this.loading = false;
      },
      error: (error) => {
        console.error('Prescription update error:', error);
        this.error = 'Failed to update prescription';
        this.loading = false;
      }
    });
  }

  isUpdatingPrescription(): boolean {
    return !!this.selectedAppointment && 
           this.completedAppointments.some(apt => apt.appointmentId === this.selectedAppointment?.appointmentId);
  }
}
