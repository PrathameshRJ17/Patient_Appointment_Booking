import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../core/services/admin.service';
import { UserService } from '../core/services/user.service';
import { DoctorService } from '../core/services/doctor.service';
import { HospitalService, Hospital, CreateHospital, UpdateHospital } from '../core/services/hospital.service';
import { LocationService } from '../core/services/location.service';
import { GeocodingService } from '../core/services/geocoding.service';
import { AppointmentService } from '../core/services/appointment.service';
import { AlertService } from '../core/services/alert.service';
import { EmailService } from '../core/services/email.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  activeTab: 'overview' | 'pending' | 'doctors' | 'patients' | 'hospitals' | 'analytics' = 'overview';
  counts: any = { totalDoctors: 0, totalPatients: 0, totalHospitals: 0, totalAppointments: 0 };
  analytics: any = { totalRevenue: 0, stateWiseRevenue: [], cityWiseAppointments: [], monthlyRevenue: [] };
  pendingUsers: any[] = [];
  doctors: any[] = [];
  patients: any[] = [];
  hospitals: Hospital[] = [];
  loading = false;
  error?: string;
  approvalForm!: FormGroup;
  hospitalForm!: FormGroup;
  doctorForm!: FormGroup;
  patientForm!: FormGroup;
  selectedUser: any = null;
  showHospitalForm = false;
  showDoctorForm = false;
  showPatientForm = false;
  editingHospital: Hospital | null = null;
  editingDoctor: any = null;
  editingPatient: any = null;

  constructor(
    private adminService: AdminService,
    private userService: UserService,
    private doctorService: DoctorService,
    private hospitalService: HospitalService,
    private locationService: LocationService,
    private geocodingService: GeocodingService,
    private appointmentService: AppointmentService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    console.log('ADMIN DASHBOARD INITIALIZED');
    console.log('='.repeat(50));
    console.log('Loading all admin dashboard data...');
    this.initForms();
    this.setupAddressWatcher();
    this.loadCounts();
    this.loadPendingUsers();
    this.loadDoctors();
    this.loadPatients();
    this.loadHospitals();
    this.loadAnalytics();
    console.log('='.repeat(50));
  }

  setupAddressWatcher() {
    // Watch for changes in address fields and auto-geocode
    this.hospitalForm.get('address')?.valueChanges.subscribe(() => this.autoGeocode());
    this.hospitalForm.get('city')?.valueChanges.subscribe(() => this.autoGeocode());
    this.hospitalForm.get('state')?.valueChanges.subscribe(() => this.autoGeocode());
    this.hospitalForm.get('zipCode')?.valueChanges.subscribe(() => this.autoGeocode());
  }

  private geocodeTimeout: any;
  
  autoGeocode() {
    const address = this.hospitalForm.get('address')?.value;
    const city = this.hospitalForm.get('city')?.value;
    const state = this.hospitalForm.get('state')?.value;
    const zipCode = this.hospitalForm.get('zipCode')?.value;

    // Only geocode if we have at least zipCode or (address and city)
    if (zipCode || (address && city)) {
      // Debounce the geocoding to avoid too many API calls
      clearTimeout(this.geocodeTimeout);
      this.geocodeTimeout = setTimeout(async () => {
        try {
          console.log('Geocoding with:', { address, city, state, zipCode });
          
          // Try pin code first if available (most accurate for India)
          if (zipCode && zipCode.length === 6) {
            try {
              const coords = await this.geocodingService.geocodePinCode(zipCode);
              console.log('Pin code geocoding result:', coords);
              this.hospitalForm.patchValue({
                latitude: coords.latitude,
                longitude: coords.longitude
              }, { emitEvent: false });
              return;
            } catch (pinError) {
              console.log('Pin code geocoding failed, trying full address:', pinError);
            }
          }
          
          // Fallback to full address geocoding
          const coords = await this.geocodingService.geocodeAddress(address || '', city || '', state || '', zipCode || '');
          console.log('Full address geocoding result:', coords);
          this.hospitalForm.patchValue({
            latitude: coords.latitude,
            longitude: coords.longitude
          }, { emitEvent: false });
        } catch (error) {
          console.log('All geocoding methods failed:', error);
          // Try city-only fallback
          if (city && state) {
            try {
              const coords = await this.geocodingService.geocodeAddressSimple('', city, state);
              this.hospitalForm.patchValue({
                latitude: coords.latitude,
                longitude: coords.longitude
              }, { emitEvent: false });
            } catch (fallbackError) {
              console.log('City fallback also failed:', fallbackError);
            }
          }
        }
      }, 1500); // Wait 1.5 seconds after user stops typing
    }
  }

  initForms() {
    this.approvalForm = this.fb.group({
      status: ['', Validators.required],
      shiftTiming: ['']
    });

    this.hospitalForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(200)]],
      address: ['', [Validators.required, Validators.maxLength(500)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      state: ['', [Validators.required, Validators.maxLength(100)]],
      zipCode: ['', [Validators.required, Validators.maxLength(20)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.email, Validators.maxLength(255)]],
      latitude: [''],
      longitude: [''],
      status: ['Active']
    });

    this.doctorForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(20)]],
      gender: ['', Validators.required],
      specialization: ['', [Validators.required, Validators.maxLength(100)]],
      hospitalId: ['', Validators.required],
      experienceYears: ['', [Validators.required, Validators.min(0)]],
      qualification: ['', [Validators.required, Validators.maxLength(200)]],
      faceToFaceFee: ['', [Validators.required, Validators.min(0)]],
      telemedicineFee: ['', [Validators.required, Validators.min(0)]],
      password: ['', [Validators.minLength(6)]]
    });

    this.patientForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      phoneNumber: ['', [Validators.maxLength(20)]],
      gender: [''],
      dateOfBirth: [''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loadCounts() {
    console.log('API Call: Loading system counts...');
    this.adminService.getCounts().subscribe({
      next: (data) => {
        this.counts = data;
        console.log('System Counts Data:', data);
        console.log('Total Doctors: ' + data.totalDoctors);
        console.log('Total Patients: ' + data.totalPatients);
        console.log('Total Hospitals: ' + data.totalHospitals);
        console.log('Total Appointments: ' + data.totalAppointments);
      },
      error: (err) => {
        console.error('Failed to load counts:', err);
        this.error = 'Failed to load counts';
      }
    });
  }

  loadPendingUsers() {
    console.log('API Call: Loading pending users...');
    this.adminService.getPendingUsers().subscribe({
      next: (data) => {
        this.pendingUsers = data;
        console.log('Pending Users Data:', data);
        console.log('Total Pending Users: ' + data.length);
        data.forEach((user: any, index: number) => {
          console.log('User ' + (index + 1) + ': ' + user.fullName + ' (' + user.email + ') - Role: ' + user.role + ' - Status: ' + user.status);
        });
      },
      error: (err) => {
        console.error('Failed to load pending users:', err);
        this.error = 'Failed to load pending users';
      }
    });
  }

  loadDoctors() {
    console.log('API Call: Loading all doctors...');
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
        console.log('Doctors Data:', data);
        console.log('Total Doctors: ' + data.length);
        data.forEach((doctor: any, index: number) => {
          console.log('Doctor ' + (index + 1) + ': ' + (doctor.fullName || doctor.user?.fullName) + ' - Specialization: ' + doctor.specialization + ' - Hospital: ' + doctor.hospitalName);
        });
      },
      error: (err) => {
        console.error('Failed to load doctors:', err);
        this.error = 'Failed to load doctors';
      }
    });
  }

  loadPatients() {
    console.log('API Call: Loading all patients...');
    this.userService.getUsersByRole('Patient').subscribe({
      next: (data) => {
        this.patients = data.filter((p: any) => {
          const role = typeof p.role === 'string' ? p.role : (typeof p.role === 'number' ? (p.role === 3 ? 'Patient' : '') : '');
          return role === 'Patient';
        });
        console.log('Patients Data:', data);
        console.log('Total Patients: ' + this.patients.length);
        this.patients.forEach((patient: any, index: number) => {
          console.log('Patient ' + (index + 1) + ': ' + patient.fullName + ' (' + patient.email + ') - City: ' + (patient.city || 'N/A') + ' - Status: ' + patient.status);
        });
      },
      error: (err) => {
        console.error('Failed to load patients:', err);
        this.error = 'Failed to load patients';
      }
    });
  }

  loadHospitals() {
    console.log('API Call: Loading all hospitals...');
    // Load all hospitals without location filtering for admin dashboard
    this.hospitalService.getHospitals().subscribe({
      next: (data) => {
        this.hospitals = data;
        console.log('Hospitals Data:', data);
        console.log('Total Hospitals: ' + data.length);
        data.forEach((hospital: any, index: number) => {
          console.log('Hospital ' + (index + 1) + ': ' + hospital.name + ' - ' + hospital.city + ', ' + hospital.state + ' - Status: ' + hospital.status);
        });
      },
      error: (err) => {
        console.error('Failed to load hospitals:', err);
        this.error = 'Failed to load hospitals';
      }
    });
  }

  openHospitalForm() {
    this.editingHospital = null;
    this.hospitalForm.reset({ status: 'Active' });
    this.showHospitalForm = true;
  }

  editHospital(hospital: Hospital) {
    this.editingHospital = hospital;
    this.hospitalForm.patchValue(hospital);
    this.showHospitalForm = true;
  }

  async saveHospital() {
    if (this.hospitalForm.invalid) {
      console.log('Form is invalid:', this.hospitalForm.errors);
      return;
    }

    this.loading = true;
    const formValue = this.hospitalForm.value;
    console.log('Saving hospital with data:', formValue);

    if (this.editingHospital) {
      console.log('Updating hospital ID:', this.editingHospital.hospitalId);
      const updateData: UpdateHospital = { ...formValue };
      this.hospitalService.updateHospital(this.editingHospital.hospitalId, updateData).subscribe({
        next: () => {
          console.log('Hospital updated successfully');
          this.alertService.show('Hospital updated successfully!', 'Success');
          this.cancelHospitalForm();
          this.loadHospitals();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to update hospital';
          console.error('Update error:', err);
          this.loading = false;
        }
      });
    } else {
      console.log('Creating new hospital');
      const createData: CreateHospital = { ...formValue };
      delete (createData as any).status;
      this.hospitalService.createHospital(createData).subscribe({
        next: () => {
          console.log('Hospital created successfully');
          this.alertService.show('Hospital created successfully!', 'Success');
          this.cancelHospitalForm();
          this.loadHospitals();
          this.loadCounts();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to create hospital';
          console.error('Create error:', err);
          this.loading = false;
        }
      });
    }
  }

  deleteHospital(hospitalId: number) {
    if (!confirm('Are you sure you want to delete this hospital?')) return;

    this.loading = true;
    this.hospitalService.deleteHospital(hospitalId).subscribe({
      next: () => {
        this.alertService.show('Hospital deleted successfully!', 'Success');
        this.loadHospitals();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error || 'Failed to delete hospital';
        this.alertService.show('Error: ' + this.error, 'Error');
        this.loading = false;
      }
    });
  }

  cancelHospitalForm() {
    this.showHospitalForm = false;
    this.editingHospital = null;
    this.hospitalForm.reset();
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
    
    this.loading = true;
    this.userService.approveUser(dto).subscribe({
      next: () => {
        this.error = undefined;
        this.alertService.show('User status updated!', 'Success');
        this.loadPendingUsers();
        this.loadDoctors();
        this.selectedUser = null;
        this.loading = false;
      },
      error: (err) => {
        const errorMsg = err?.error?.message || err?.error || err?.statusText || 'Failed to update user status';
        this.error = typeof errorMsg === 'string' ? errorMsg : JSON.stringify(errorMsg);
        this.alertService.show('Error: ' + this.error, 'Error');
        this.loading = false;
      }
    });
  }

  deleteUser(userId: number, role: string) {
    if (!confirm('Are you sure you want to delete this ' + role + '?')) return;

    this.loading = true;
    this.userService.deleteUser(userId).subscribe({
      next: (response) => {
        this.error = undefined;
        this.alertService.show(role + ' deleted successfully!', 'Success');
        this.loadPatients();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        const errorMsg = err?.error?.message || err?.message || 'Failed to delete ' + role.toLowerCase();
        this.error = errorMsg;
        this.alertService.show('Error: ' + errorMsg, 'Error');
        this.loading = false;
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

  openDoctorForm() {
    this.editingDoctor = null;
    this.doctorForm.reset();
    // Set password as required for new doctors
    this.doctorForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.doctorForm.get('password')?.updateValueAndValidity();
    this.showDoctorForm = true;
  }

  editDoctor(doctor: any) {
    this.editingDoctor = doctor;
    this.doctorForm.patchValue({
      fullName: doctor.user?.fullName || doctor.fullName,
      email: doctor.user?.email || doctor.email,
      phoneNumber: doctor.user?.phoneNumber || doctor.phoneNumber,
      gender: doctor.user?.gender || doctor.gender,
      specialization: doctor.specialization,
      hospitalId: doctor.hospitalId,
      experienceYears: doctor.experienceYears,
      qualification: doctor.qualification,
      faceToFaceFee: doctor.faceToFaceFee,
      telemedicineFee: doctor.telemedicineFee,
      password: '' // Leave empty for editing
    });
    // Remove password requirement for editing
    this.doctorForm.get('password')?.clearValidators();
    this.doctorForm.get('password')?.updateValueAndValidity();
    this.showDoctorForm = true;
  }

  async saveDoctor() {
    if (this.doctorForm.invalid) {
      console.log('Doctor form is invalid:', this.doctorForm.errors);
      return;
    }

    this.loading = true;
    const formValue = this.doctorForm.value;
    
    // Remove password field if empty (for editing)
    if (this.editingDoctor && !formValue.password) {
      delete formValue.password;
    }
    
    console.log('Saving doctor with data:', formValue);

    if (this.editingDoctor) {
      // Update existing doctor
      this.adminService.updateDoctor(this.editingDoctor.doctorId, formValue).subscribe({
        next: (response) => {
          console.log('Doctor updated successfully:', response);
          this.alertService.show('Doctor updated successfully!', 'Success');
          this.cancelDoctorForm();
          this.loadDoctors();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to update doctor';
          console.error('Update doctor error:', err);
          this.alertService.show('Error: ' + (err?.error?.message || 'Failed to update doctor'), 'Error');
          this.loading = false;
        }
      });
    } else {
      // Create new doctor
      this.adminService.createDoctor(formValue).subscribe({
        next: (response) => {
          console.log('Doctor created successfully:', response);
          
          // Send credentials email
          if (response.doctorId) {
            this.emailService.sendDoctorCredentials(response.doctorId).subscribe({
              next: () => {
                this.alertService.show(`Doctor created successfully! Login credentials sent to Dr. ${formValue.fullName}`, 'Success');
              },
              error: (emailErr) => {
                console.error('Email sending failed:', emailErr);
                this.alertService.show(`Doctor created successfully! But failed to send email to Dr. ${formValue.fullName}`, 'Warning');
              }
            });
          } else {
            this.alertService.show('Doctor created successfully!', 'Success');
          }
          
          this.cancelDoctorForm();
          this.loadDoctors();
          this.loadCounts();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to create doctor';
          console.error('Create doctor error:', err);
          this.alertService.show('Error: ' + (err?.error?.message || 'Failed to create doctor'), 'Error');
          this.loading = false;
        }
      });
    }
  }

  cancelDoctorForm() {
    this.showDoctorForm = false;
    this.editingDoctor = null;
    this.doctorForm.reset();
  }

  openPatientForm() {
    this.editingPatient = null;
    this.patientForm.reset();
    this.showPatientForm = true;
  }

  async savePatient() {
    if (this.patientForm.invalid) {
      console.log('Patient form is invalid:', this.patientForm.errors);
      return;
    }

    this.loading = true;
    const formValue = this.patientForm.value;
    
    console.log('Creating patient with data:', formValue);

    this.adminService.createPatient(formValue).subscribe({
      next: (response) => {
        console.log('Patient created successfully:', response);
        this.alertService.show('Patient registered successfully!', 'Success');
        this.cancelPatientForm();
        this.loadPatients();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to create patient';
        console.error('Create patient error:', err);
        this.alertService.show('Error: ' + (err?.error?.message || 'Failed to create patient'), 'Error');
        this.loading = false;
      }
    });
  }

  cancelPatientForm() {
    this.showPatientForm = false;
    this.editingPatient = null;
    this.patientForm.reset();
  }

  sendCredentials(userId: number, userEmail: string) {
    if (!confirm('Send login credentials to ' + userEmail + '?')) return;

    this.loading = true;
    this.emailService.sendPatientCredentials(userId).subscribe({
      next: () => {
        this.alertService.show(`Login credentials sent to ${userEmail} successfully!`, 'Success');
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to send credentials';
        this.alertService.show('Error: ' + (err?.error?.message || 'Failed to send credentials'), 'Error');
        this.loading = false;
      }
    });
  }

  getStatusClass(status: any): string {
    if (!status) return 'pending';
    
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

  loadAnalytics() {
    console.log('API Call: Loading analytics data...');
    this.adminService.getAnalytics().subscribe({
      next: (data) => {
        this.analytics = data;
        console.log('Analytics Data:', data);
        console.log('Total Revenue: Rs.' + (data.totalRevenue || 0));
        console.log('State-wise Revenue:', data.stateWiseRevenue);
        console.log('City-wise Appointments:', data.cityWiseAppointments);
        console.log('Monthly Revenue:', data.monthlyRevenue);
      },
      error: (err) => {
        console.error('Failed to load analytics:', err);
      }
    });
  }

  getMonthName(month: number): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month - 1] || '';
  }
}