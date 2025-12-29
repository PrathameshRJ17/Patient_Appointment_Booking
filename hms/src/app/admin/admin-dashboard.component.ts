import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../core/services/admin.service';
import { UserService } from '../core/services/user.service';
import { DoctorService } from '../core/services/doctor.service';
import { StaffService } from '../core/services/staff.service';
import { AppointmentService } from '../core/services/appointment.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  activeTab: 'overview' | 'pending' | 'doctors' | 'patients' | 'staff' = 'overview';
  counts: any = { totalDoctors: 0, totalPatients: 0, totalStaff: 0, totalAppointments: 0 };
  pendingUsers: any[] = [];
  doctors: any[] = [];
  patients: any[] = [];
  staff: any[] = [];
  loading = false;
  error?: string;
  approvalForm!: FormGroup;
  selectedUser: any = null;

  constructor(
    private adminService: AdminService,
    private userService: UserService,
    private doctorService: DoctorService,
    private staffService: StaffService,
    private appointmentService: AppointmentService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadCounts();
    this.loadPendingUsers();
    this.loadDoctors();
    this.loadPatients();
    this.loadStaff();
  }

  initForm() {
    this.approvalForm = this.fb.group({
      status: ['', Validators.required],
      shiftTiming: ['']
    });
  }

  loadCounts() {
    this.adminService.getCounts().subscribe({
      next: (data) => {
        this.counts = data;
      },
      error: (err) => {
        this.error = 'Failed to load counts';
      }
    });
  }

  loadPendingUsers() {
    this.adminService.getPendingUsers().subscribe({
      next: (data) => {
        this.pendingUsers = data;
      },
      error: (err) => {
        this.error = 'Failed to load pending users';
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

  loadPatients() {
    this.userService.getUsersByRole('Patient').subscribe({
      next: (data) => {
        this.patients = data.filter((p: any) => {
          const role = typeof p.role === 'string' ? p.role : (typeof p.role === 'number' ? (p.role === 4 ? 'Patient' : '') : '');
          return role === 'Patient';
        });
      },
      error: (err) => {
        this.error = 'Failed to load patients';
      }
    });
  }

  loadStaff() {
    this.userService.getUsersByRole('Staff').subscribe({
      next: (users) => {
        this.staff = users.filter((u: any) => u.role === 'Staff' || u.role === 3).map((user: any) => ({
          staffId: user.userId,
          userId: user.userId,
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          department: 'General',
          position: 'Staff'
        }));
      },
      error: (err) => {
        this.error = 'Failed to load staff';
        this.staff = [];
      }
    });
  }

  openApprovalForm(user: any) {
    this.selectedUser = user;
    this.approvalForm.reset();
  }

  approveUser() {
    if (!this.selectedUser || this.approvalForm.invalid) return;

    const statusMap: any = { 'Approved': 2, 'Rejected': 3 };
    const dto: any = {
      userId: this.selectedUser.userId,
      status: statusMap[this.approvalForm.value.status]
    };

    if (this.selectedUser.role === 'Staff' && this.approvalForm.value.status === 'Approved') {
      dto.shiftTiming = this.approvalForm.value.shiftTiming || '9:00 AM - 5:00 PM';
    }
    
    console.log('Approving user:', this.selectedUser);
    console.log('Sending DTO:', dto);

    this.loading = true;
    this.userService.approveUser(dto).subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('User status updated!', 'Success');
        this.loadPendingUsers();
        this.loadDoctors();
        this.loadStaff();
        this.selectedUser = null;
        this.loading = false;
      },
      error: (err) => {
        console.error('Approval error:', err);
        const errorMsg = err?.error?.message || err?.error || err?.statusText || 'Failed to update user status';
        this.error = typeof errorMsg === 'string' ? errorMsg : JSON.stringify(errorMsg);
        this.alertService.show('Error: ' + this.error, 'Error');
        this.loading = false;
      }
    });
  }

  deleteUser(userId: number, role: string) {
    if (!confirm(`Are you sure you want to delete this ${role}?`)) return;

    this.loading = true;
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('Patient deleted successfully!', 'Success');
        this.loadPatients();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        console.error('Delete error:', err);
        const errorMsg = err?.error?.message || err?.error || 'Failed to delete patient';
        this.error = typeof errorMsg === 'string' ? errorMsg : JSON.stringify(errorMsg);
        this.alertService.show('Error: ' + this.error, 'Error');
        this.loading = false;
      }
    });
  }

  deleteStaff(userId: number) {
    if (!confirm('Are you sure you want to delete this staff member?')) return;

    this.loading = true;
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.error = undefined;
        alert('Staff member deleted successfully!');
        this.loadStaff();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        console.error('Delete staff error:', err);
        if (err?.error?.text && err.error.text.includes('deleted successfully')) {
          this.error = undefined;
          this.alertService.show('Staff member deleted successfully!', 'Success');
          this.loadStaff();
          this.loadCounts();
          this.loading = false;
        } else {
          const errorMsg = err?.error?.message || err?.statusText || 'Failed to delete staff';
          this.error = typeof errorMsg === 'string' ? errorMsg : 'Failed to delete staff';
          this.alertService.show('Error: ' + this.error, 'Error');
          this.loading = false;
        }
      }
    });
  }

  deleteDoctor(doctorId: number) {
    if (!confirm('Are you sure you want to delete this doctor?')) return;

    this.loading = true;
    this.doctorService.deleteDoctor(doctorId).subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('Doctor deleted!', 'Success');
        this.loadDoctors();
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? 'Failed to delete doctor';
        this.loading = false;
      }
    });
  }

  cancelApproval() {
    this.selectedUser = null;
    this.approvalForm.reset();
  }

  getStatusClass(status: any): string {
    if (!status) return 'pending';
    
    // Handle both string and number status
    const statusStr = typeof status === 'number' 
      ? ['', 'Pending', 'Approved', 'Rejected'][status] || 'Pending'
      : status;
    
    const statusMap: { [key: string]: string } = {
      'Pending': 'pending',
      'Approved': 'approved',
      'Rejected': 'rejected',
      '1': 'pending',
      '2': 'approved',
      '3': 'rejected'
    };
    return statusMap[statusStr] || 'pending';
  }
}
