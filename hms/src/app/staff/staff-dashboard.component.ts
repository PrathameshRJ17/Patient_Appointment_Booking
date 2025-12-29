import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../core/services/staff.service';
import { AppointmentService, Appointment } from '../core/services/appointment.service';
import { DoctorService } from '../core/services/doctor.service';
import { StorageService } from '../core/services/storage.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {
  activeTab: 'appointments' | 'doctors' | 'profile' = 'appointments';
  appointments: Appointment[] = [];
  doctors: any[] = [];
  staffInfo: any = null;
  loading = false;
  error?: string;
  profileForm!: FormGroup;
  selectedAppointment: Appointment | null = null;
  statusForm!: FormGroup;
  availabilityForm!: FormGroup;
  selectedDoctor: any = null;
  editMode = false;

  constructor(
    private staffService: StaffService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private storage: StorageService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.initForms();
    this.loadAppointments();
    this.loadDoctors();
    this.loadStaffInfo();
  }

  initForms() {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });

    this.statusForm = this.fb.group({
      status: [''],
      remarks: ['']
    });

    this.availabilityForm = this.fb.group({
      availability: ['', Validators.required],
      delayHours: [0]
    });
  }

  loadAppointments() {
    this.loading = true;
    this.appointmentService.getAllAppointments().subscribe({
      next: (data) => {
        console.log('All appointments from API:', data);
        data.forEach(apt => {
          console.log(`Appointment ${apt.appointmentId}: status=${apt.status}, statusText=${apt.statusText}`);
        });
        
        const normalized = data.map(appointment => this.normalizeAppointment(appointment));
        
        console.log('Normalized appointments:', normalized);
        
        this.appointments = normalized.filter(apt => {
          const status = apt.statusText || apt.status || '';
          const statusStr = typeof status === 'string' ? status : String(status);
          console.log('Checking appointment:', apt.appointmentId, 'Status:', statusStr);
          return statusStr !== 'Completed' && statusStr !== 'Rejected';
        });
        
        console.log('Filtered appointments:', this.appointments);
        console.log('Done count:', this.getDoneAppointmentsCount());
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading appointments:', err);
        this.error = 'Failed to load appointments';
        this.loading = false;
      }
    });
  }

  loadDoctors() {
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        console.log('Doctors data:', data);
        this.doctors = data;
      },
      error: (err) => {
        this.error = 'Failed to load doctors';
      }
    });
  }

  loadStaffInfo() {
    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      console.warn('Staff ID not found');
      return;
    }

    this.staffService.getStaffById(staffId).subscribe({
      next: (data) => {
        this.staffInfo = data;
        this.profileForm.patchValue({
          fullName: data.fullName || data.user?.fullName || '',
          email: data.email || data.user?.email || '',
          phoneNumber: data.phoneNumber || data.user?.phoneNumber || ''
        });
      },
      error: (err) => {
        console.warn('Staff profile not found, continuing without profile data');
      }
    });
  }

  getDoctorName(doctorId: number): string {
    const doctor = this.doctors.find(d => d.doctorId === doctorId);
    return doctor ? doctor.user?.fullName : 'Unknown';
  }

  getDoctorAvailability(doctorId: number): string {
    const doctor = this.doctors.find(d => d.doctorId === doctorId);
    return doctor ? doctor.availability : 'Unknown';
  }

  openStatusForm(appointment: Appointment) {
    this.selectedAppointment = appointment;
    this.statusForm.reset();
  }

  private normalizeAppointment(appointment: Appointment): Appointment {
    const slot = this.normalizeSlot(appointment.timeSlot || appointment.slotTime);
    const timeSlotDisplay = appointment.timeSlotDisplay || this.formatSlotWindow(slot);
    const statusText = appointment.statusText ?? appointment.status;
    return {
      ...appointment,
      timeSlot: slot,
      timeSlotDisplay,
      statusText
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
    const endTotalMinutes = hours * 60 + minutes + 30;
    const endHours = Math.floor(endTotalMinutes / 60);
    const endMinutes = endTotalMinutes % 60;
    return `${start} - ${this.toTwoDigits(endHours)}:${this.toTwoDigits(endMinutes)}`;
  }

  private toTwoDigits(value: number): string {
    return value.toString().padStart(2, '0');
  }

  approveAppointment() {
    if (!this.selectedAppointment) return;

    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = 'Staff ID not found';
      return;
    }

    this.loading = true;
    this.staffService.approveAppointment(staffId, this.selectedAppointment.appointmentId).subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('Appointment approved!', 'Success');
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to approve appointment';
        this.loading = false;
      }
    });
  }

  rejectAppointment() {
    if (!this.selectedAppointment) return;

    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = 'Staff ID not found';
      return;
    }

    this.loading = true;
    this.staffService.rejectAppointment(staffId, this.selectedAppointment.appointmentId, '').subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('Appointment rejected!', 'Success');
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to reject appointment';
        this.loading = false;
      }
    });
  }

  completeAppointment() {
    if (!this.selectedAppointment) return;

    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = 'Staff ID not found';
      return;
    }

    this.loading = true;
    this.staffService.completeAppointment(staffId, this.selectedAppointment.appointmentId, '').subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('Appointment marked as complete and bill generated!', 'Success');
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to complete appointment';
        this.loading = false;
      }
    });
  }

  cancelStatusForm() {
    this.selectedAppointment = null;
    this.statusForm.reset();
  }

  updateProfile() {
    if (this.profileForm.invalid) return;

    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = 'Staff ID not found';
      return;
    }

    this.loading = true;
    this.staffService.updateStaff(staffId, this.profileForm.value).subscribe({
      next: (data) => {
        this.staffInfo = data;
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

  getStatusColor(status?: string): string {
    if (!status) return '#6C757D';
    const statusColorMap: { [key: string]: string } = {
      'Pending': '#FFC107',
      'Approved': '#17A2B8',
      'Completed': '#28A745',
      'Rejected': '#DC3545',
      'Done': '#9C27B0'
    };
    return statusColorMap[status] || '#6C757D';
  }

  getStatusClass(status?: string): string {
    if (!status) return '';
    return status.toLowerCase();
  }

  getDoneAppointmentsCount(): number {
    const count = this.appointments.filter(apt => {
      const status = apt.statusText || apt.status || '';
      const statusStr = typeof status === 'string' ? status : String(status);
      return statusStr === 'Done';
    }).length;
    console.log('Done appointments count:', count);
    return count;
  }

  getDoneAlertMessage(appointment: Appointment): string {
    const doctorName = appointment.doctorName || this.getDoctorName(appointment.doctorId) || 'Doctor';
    return `Dr. ${doctorName} has completed this appointment`;
  }

  isDoneAppointment(appointment: Appointment): boolean {
    const status = appointment.statusText || appointment.status || '';
    const statusStr = typeof status === 'string' ? status : String(status);
    const isDone = statusStr === 'Done';
    console.log('Checking if Done - Appointment:', appointment.appointmentId, 'Status:', statusStr, 'isDone:', isDone);
    return isDone;
  }

  openAvailabilityForm(doctor: any) {
    this.selectedDoctor = doctor;
    this.availabilityForm.patchValue({
      availability: doctor.availability || 'Available',
      delayHours: 0
    });
  }

  updateDoctorAvailability() {
    if (this.availabilityForm.invalid || !this.selectedDoctor) return;

    const formValue = this.availabilityForm.value;
    let availability = formValue.availability;
    
    if (availability === 'Delayed' && formValue.delayHours > 0) {
      availability = `Delayed (${formValue.delayHours}h)`;
    }

    this.loading = true;
    this.doctorService.updateDoctorAvailability(this.selectedDoctor.doctorId, availability).subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('Doctor availability updated!', 'Success');
        this.loadDoctors();
        this.selectedDoctor = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to update availability';
        this.loading = false;
      }
    });
  }

  cancelAvailabilityForm() {
    this.selectedDoctor = null;
    this.availabilityForm.reset();
  }
}
