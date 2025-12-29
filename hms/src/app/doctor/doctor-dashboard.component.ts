import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../core/services/doctor.service';
import { AppointmentService, Appointment } from '../core/services/appointment.service';
import { StorageService } from '../core/services/storage.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  activeTab: 'appointments' | 'profile' = 'appointments';
  appointments: Appointment[] = [];
  doctorInfo: any = null;
  loading = false;
  error?: string;
  profileForm!: FormGroup;
  remarksForm!: FormGroup;
  selectedAppointment: Appointment | null = null;
  editMode = false;

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private fb: FormBuilder,
    private storage: StorageService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.initForms();
    this.loadAppointments();
    this.loadDoctorInfo();
  }

  initForms() {
    this.profileForm = this.fb.group({
      consultationFee: ['', [Validators.required, Validators.min(0)]],
      experienceYears: ['', [Validators.required, Validators.min(0)]]
    });

    this.remarksForm = this.fb.group({
      remarks: ['', Validators.required]
    });
  }

  loadAppointments() {
    let doctorId = this.storage.getDoctorId();
    console.log('Doctor ID from storage:', doctorId);
    
    if (!doctorId) {
      doctorId = this.storage.getUserId();
      console.log('Using userId as doctorId fallback:', doctorId);
    }
    
    if (!doctorId) {
      this.error = 'Doctor ID not found';
      console.error('Doctor ID not found in localStorage');
      return;
    }

    this.loading = true;
    this.appointmentService.getAppointmentsByDoctor(doctorId).subscribe({
      next: (data) => {
        console.log('Appointments loaded for doctor:', data);
        const normalized = data.map(appointment => this.normalizeAppointment(appointment));
        this.appointments = normalized.filter(apt => apt.statusText === 'Approved');
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load appointments:', err);
        this.error = 'Failed to load appointments';
        this.loading = false;
      }
    });
  }

  loadDoctorInfo() {
    let doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      doctorId = this.storage.getUserId();
    }
    if (!doctorId) return;

    this.doctorService.getDoctorById(doctorId).subscribe({
      next: (data) => {
        this.doctorInfo = data;
        this.profileForm.patchValue({
          consultationFee: data.consultationFee,
          experienceYears: data.experienceYears
        });
      },
      error: (err) => {
        this.error = 'Failed to load doctor info';
      }
    });
  }

  updateProfile() {
    if (this.profileForm.invalid) return;

    const doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      this.error = 'Doctor ID not found';
      return;
    }

    const payload = this.profileForm.getRawValue();
    console.log('Updating doctor profile with:', JSON.stringify(payload));

    this.loading = true;
    this.doctorService.updateDoctor(doctorId, payload).subscribe({
      next: (data) => {
        console.log('Profile updated, response:', data);
        this.doctorInfo = data;
        this.error = undefined;
        this.editMode = false;
        this.alertService.show('Profile updated successfully!', 'Success');
        this.loading = false;
      },
      error: (err) => {
        console.error('Profile update error:', err);
        this.error = err?.error ?? 'Failed to update profile';
        this.loading = false;
      }
    });
  }

  openRemarksForm(appointment: Appointment) {
    this.selectedAppointment = appointment;
    this.remarksForm.reset();
  }

  addRemarks() {
    if (this.remarksForm.invalid || !this.selectedAppointment) return;

    const doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      this.error = 'Doctor ID not found';
      return;
    }

    console.log('Marking as done:', {
      doctorId,
      appointmentId: this.selectedAppointment.appointmentId,
      remarks: this.remarksForm.value.remarks
    });

    this.loading = true;
    this.doctorService.markAsDone(doctorId, this.selectedAppointment.appointmentId, this.remarksForm.value.remarks).subscribe({
      next: (response) => {
        console.log('Mark as done SUCCESS - Response:', response);
        console.log('Response status:', response?.status, 'Response statusText:', response?.statusText);
        this.error = undefined;
        this.alertService.show('Appointment marked as Done! Staff will complete it.', 'Success');
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        console.error('Mark as done error:', err);
        this.error = err?.error?.message || err?.error || 'Failed to mark appointment as done';
        this.alertService.show('Error: ' + this.error, 'Error');
        this.loading = false;
      }
    });
  }

  cancelRemarks() {
    this.selectedAppointment = null;
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
}
