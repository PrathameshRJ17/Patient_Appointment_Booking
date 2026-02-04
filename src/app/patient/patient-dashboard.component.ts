import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HospitalService, Hospital } from '../core/services/hospital.service';
import { AppointmentService, Appointment, AppointmentStatus } from '../core/services/appointment.service';
import { DoctorService, Doctor } from '../core/services/doctor.service';
import { StorageService } from '../core/services/storage.service';
import { AlertService } from '../core/services/alert.service';
import { GeocodingService } from '../core/services/geocoding.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  showDashboard = false;
  activeTab: 'hospitals' | 'appointments' | 'profile' = 'hospitals';
  hospitals: Hospital[] = [];
  hospitalDoctors: any[] = [];
  appointments: Appointment[] = [];
  loading = false;
  loadingDoctors = false;
  error?: string;
  bookingForm!: FormGroup;
  profileForm!: FormGroup;
  selectedHospital: Hospital | null = null;
  selectedDoctor: any = null;
  selectedSlot: any = null;
  availableSlots: any[] = [];
  minDate: string = '';
  userProfile: any = null;
  patientLocation = { address: '', city: '', state: '', zipCode: '' };
  userCoordinates: { latitude: number, longitude: number } | null = null;
  useGeolocation = false;
  radiusKm = 50;
  
  // Symptom-based doctor search
  symptomDoctors: Doctor[] = [];
  loadingSymptomDoctors = false;
  searchSymptoms = '';
  selectedSymptomForBooking = '';
  
  // Dropdown options - only cities where hospitals exist
  states = ['Maharashtra', 'Karnataka'];
  
  cities = ['Pune', 'Mumbai', 'Bangalore', 'Delhi'];
  
  availableCities: string[] = this.cities;

  constructor(
    private hospitalService: HospitalService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private storage: StorageService,
    private alertService: AlertService,
    private geocodingService: GeocodingService
  ) {}

  ngOnInit() {
    console.log('PATIENT DASHBOARD INITIALIZED');
    console.log('='.repeat(50));
    console.log('Loading all patient dashboard data...');
    this.setMinDate();
    this.initForms();
    this.loadAppointments();
    this.loadUserProfile();
    // Show About Us as landing page
    this.showDashboard = false;
    this.activeTab = 'hospitals';
    console.log('='.repeat(50));
  }

  setMinDate() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }
  
  getMaxDate() {
    const today = new Date();
    const startOfCurrentWeek = new Date(today);
    startOfCurrentWeek.setDate(today.getDate() - today.getDay() + 1); // Monday of current week
    const endOfNextWeek = new Date(startOfCurrentWeek);
    endOfNextWeek.setDate(startOfCurrentWeek.getDate() + 13); // Friday of next week
    return endOfNextWeek.toISOString().split('T')[0];
  }
  
  isWorkingDay(dateString: string): boolean {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
  }

  initForms() {
    this.bookingForm = this.fb.group({
      mode: [0, Validators.required],
      appointmentDate: ['', Validators.required],
      symptoms: ['']
    });

    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: ['']
    });
  }

  async searchHospitals() {
    if (!this.useGeolocation && !this.patientLocation.city && !this.patientLocation.state) {
      this.hospitals = [];
      return;
    }

    console.log('API Call: Searching hospitals...');
    console.log(`Location: ${this.useGeolocation ? 'Using GPS' : `${this.patientLocation.city}, ${this.patientLocation.state}`}`);
    this.loading = true;
    this.error = undefined;
    
    try {
      if (this.useGeolocation && this.userCoordinates) {
        console.log(`GPS Coordinates: ${this.userCoordinates.latitude}, ${this.userCoordinates.longitude}`);
        // Use current location with nearby hospitals endpoint for better filtering
        this.hospitalService.getNearbyHospitals(
          this.userCoordinates.latitude, 
          this.userCoordinates.longitude, 
          10
        ).subscribe({
          next: (hospitals) => {
            this.hospitals = hospitals.filter(hospital => 
              hospital.status === 'Active' || !hospital.status
            );
            console.log('Nearby Hospitals Data:', hospitals);
            console.log(`Found ${this.hospitals.length} active hospitals nearby`);
            this.hospitals.forEach((hospital: any, index: number) => {
              console.log(`Hospital ${index + 1}: ${hospital.name} - ${hospital.city}, ${hospital.state}`);
            });
            this.loading = false;
          },
          error: () => {
            console.error('Failed to load nearby hospitals');
            this.error = 'Failed to load nearby hospitals';
            this.loading = false;
          }
        });
      } else {
        // Use address-based search directly without geocoding first
        this.hospitalService.getHospitalsByAddress(
          this.patientLocation.address,
          this.patientLocation.city,
          this.patientLocation.state,
          this.patientLocation.zipCode,
          this.radiusKm
        ).subscribe({
          next: (hospitals) => {
            this.hospitals = hospitals.filter(hospital => hospital.status === 'Active');
            console.log('Address-based Hospitals Data:', hospitals);
            console.log(`Found ${this.hospitals.length} active hospitals in area`);
            this.hospitals.forEach((hospital: any, index: number) => {
              console.log(`Hospital ${index + 1}: ${hospital.name} - ${hospital.city}, ${hospital.state}`);
            });
            this.loading = false;
          },
          error: () => {
            console.error('Failed to load hospitals for this location');
            this.error = 'Failed to load hospitals for this location';
            this.loading = false;
          }
        });
      }
    } catch (error) {
      console.error('Failed to search hospitals:', error);
      this.error = 'Failed to search hospitals';
      this.loading = false;
    }
  }

  selectHospital(hospital: Hospital) {
    console.log('Selected hospital:', hospital);
    console.log('Hospital ID being sent:', hospital.hospitalId);
    this.selectedHospital = hospital;
    this.loadHospitalDoctors(hospital.hospitalId);
  }

  loadHospitalDoctors(hospitalId: number) {
    console.log('API Call: Loading hospital doctors...');
    console.log(`Hospital ID: ${hospitalId}`);
    console.log(`Symptoms filter: ${this.searchSymptoms || 'None'}`);
    this.loadingDoctors = true;
    this.hospitalDoctors = [];
    
    const today = new Date().toISOString().split('T')[0];
    console.log(`Date: ${today}`);
    console.log('API URL:', `${this.hospitalService['apiUrl']}/${hospitalId}/doctors?symptoms=${this.searchSymptoms}&date=${today}`);
    
    this.hospitalService.getHospitalDoctors(hospitalId, this.searchSymptoms, today).subscribe({
      next: (doctors) => {
        console.log('Hospital Doctors Data:', doctors);
        console.log(`Found ${doctors.length} doctors`);
        // Show all doctors, not just those with slots
        this.hospitalDoctors = doctors;
        doctors.forEach((doctor: any, index: number) => {
          console.log(`Doctor ${index + 1}: ${doctor.fullName} - ${doctor.specialization} - Fee: Rs.${doctor.faceToFaceFee}`);
          if (doctor.treatedConditions) {
            console.log(`  Treats: ${doctor.treatedConditions}`);
          }
        });
        this.loadingDoctors = false;
      },
      error: (error) => {
        console.error('Error loading doctors:', error);
        this.error = 'Failed to load doctors';
        this.loadingDoctors = false;
      }
    });
  }

  selectDoctor(doctor: any) {
    this.selectedDoctor = doctor;
    // Use selectedSymptomForBooking if available, otherwise use searchSymptoms
    const symptomsToUse = this.selectedSymptomForBooking || this.searchSymptoms;
    this.bookingForm.reset({ mode: 0, appointmentDate: '', symptoms: symptomsToUse });
  }

  loadAvailableSlots() {
    const date = this.bookingForm.get('appointmentDate')?.value;
    if (!this.selectedDoctor || !date) return;

    // Check if it's a working day
    if (!this.isWorkingDay(date)) {
      this.availableSlots = [];
      this.error = 'Appointments are only available on working days (Monday-Friday)';
      return;
    }

    this.loading = true;
    this.availableSlots = [];
    this.error = undefined;
    
    console.log(`Loading slots for doctor ${this.selectedDoctor.doctorId} on ${date}`);
    
    fetch(`http://localhost:5000/api/doctorslot/doctor/${this.selectedDoctor.doctorId}?date=${date}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then(slots => {
      console.log('Raw slots received:', slots);
      if (slots.length === 0) {
        this.error = 'No slots available for the selected date. Please choose another working day.';
      } else {
        // All returned slots are available (backend filters out booked ones)
        this.availableSlots = slots;
        console.log('Available slots:', this.availableSlots);
      }
      this.loading = false;
    })
    .catch(error => {
      console.error('Error loading slots:', error);
      this.error = 'Failed to load available slots';
      this.loading = false;
    });
  }

  selectSlot(slot: any) {
    // Clear previous selection
    this.selectedSlot = null;
    
    // Set new selection
    this.selectedSlot = slot;
    console.log('Selected slot:', slot.startTime + ' - ' + slot.endTime);
  }

  bookAppointment() {
    if (this.bookingForm.invalid || !this.selectedDoctor || !this.selectedSlot) return;

    const userId = this.storage.getUserId();
    if (!userId) {
      this.error = 'User not found';
      return;
    }

    // Convert time string to proper format
    const timeString = this.selectedSlot.startTime;
    const [hours, minutes] = timeString.split(':').map(Number);
    const timeSpanString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;

    // Ensure date is in proper format
    const appointmentDate = this.bookingForm.value.appointmentDate;

    const appointmentData = {
      PatientId: userId,
      DoctorId: this.selectedDoctor.doctorId,
      HospitalId: this.selectedHospital?.hospitalId,
      SlotId: this.selectedSlot.slotId > 0 ? this.selectedSlot.slotId : null,
      AppointmentDate: appointmentDate,
      SlotTime: timeSpanString,
      Mode: parseInt(this.bookingForm.value.mode),
      Symptoms: this.bookingForm.value.symptoms || ''
    };

    console.log('Booking appointment with data:', appointmentData);
    this.loading = true;
    this.error = undefined;
    
    this.appointmentService.createAppointment(appointmentData).subscribe({
      next: (response) => {
        console.log('Appointment booked successfully:', response);
        this.alertService.show('Appointment booked successfully!', 'Success');
        this.selectedDoctor = null;
        this.selectedSlot = null;
        this.availableSlots = [];
        this.activeTab = 'appointments';
        this.loadAppointments();
        this.loading = false;
      },
      error: (err) => {
        console.error('Booking error:', err);
        this.error = err?.error?.message || err?.error || 'Failed to book appointment';
        this.loading = false;
      }
    });
  }

  loadAppointments() {
    const userId = this.storage.getUserId();
    const token = localStorage.getItem('token');
    
    if (!userId) {
      console.error('No user ID found');
      return;
    }
    
    if (!token) {
      console.error('No authentication token found');
      this.error = 'Authentication required. Please login again.';
      return;
    }

    console.log('API Call: Loading patient appointments...');
    console.log(`Patient ID: ${userId}`);
    this.appointmentService.getAppointmentsByPatient(userId).subscribe({
      next: (data: any[]) => {
        console.log('Patient Appointments Raw Data:', data);
        this.appointments = data.map(apt => {
          console.log(`Processing appointment ${apt.appointmentId}: status=${apt.status}`);
          
          // Use the backend's formatted time fields with proper fallbacks
          let slotTime = 'Not specified';
          
          if (apt.timeSlotDisplay) {
            slotTime = apt.timeSlotDisplay;
          } else if (apt.timeSlot) {
            slotTime = apt.timeSlot;
          } else if (apt.slotTime) {
            // Handle different slotTime formats
            if (typeof apt.slotTime === 'string') {
              slotTime = apt.slotTime;
            } else if (typeof apt.slotTime === 'object' && apt.slotTime !== null) {
              // If it's a TimeSpan object, convert to string
              slotTime = `${apt.slotTime.hours || '00'}:${(apt.slotTime.minutes || 0).toString().padStart(2, '0')}`;
            }
          }
          
          return {
            appointmentId: apt.appointmentId,
            patientId: apt.patientId,
            doctorId: apt.doctorId,
            hospitalId: apt.hospitalId,
            doctorName: apt.doctorName || 'Unknown Doctor',
            doctorPhone: apt.doctorPhone || '',
            hospitalName: apt.hospitalName || 'Unknown Hospital',
            appointmentDate: apt.appointmentDate,
            slotTime: slotTime,
            status: apt.status,
            mode: apt.mode,
            feeAmount: apt.feeAmount,
            symptoms: apt.symptoms,
            remarks: apt.remarks,
            hasPrescription: apt.hasPrescription || false
          } as any;
        });
        console.log(`Total Patient Appointments: ${this.appointments.length}`);
        this.appointments.forEach((apt: any, index: number) => {
          console.log(`Appointment ${index + 1}: Dr. ${apt.doctorName} at ${apt.hospitalName} - ${apt.appointmentDate} ${apt.slotTime} - Status: ${this.getStatusText(apt.status)}`);
        });
      },
      error: (error) => {
        console.error('Error loading appointments:', error);
        if (error.status === 401) {
          this.error = 'Session expired. Please login again.';
          localStorage.clear();
          window.location.href = '/auth/login';
        } else {
          this.error = 'Failed to load appointments';
        }
      }
    });
  }

  getStatusClass(status: number | string | undefined): string {
    if (!status) return 'pending';
    const statusNum = typeof status === 'string' ? parseInt(status) : status;
    const statusMap: any = {
      1: 'pending',
      2: 'confirmed', 
      3: 'rejected',
      4: 'completed',
      5: 'completed',
      6: 'cancelled',
      7: 'pending'
    };
    return statusMap[statusNum] || 'pending';
  }

  getStatusText(status: number | string | undefined): string {
    if (!status) return 'Pending';
    const statusNum = typeof status === 'string' ? parseInt(status) : status;
    const statusMap: any = {
      1: 'Pending',
      2: 'Confirmed',
      3: 'Rejected', 
      4: 'Completed',
      5: 'Done',
      6: 'Cancelled',
      7: 'Rescheduled'
    };
    return statusMap[statusNum] || 'Pending';
  }

  loadUserProfile() {
    const userId = this.storage.getUserId();
    const token = localStorage.getItem('token');
    
    if (!userId) {
      console.error('No user ID found');
      return;
    }
    
    if (!token) {
      console.error('No authentication token found');
      return;
    }

    console.log('API Call: Loading user profile...');
    console.log(`User ID: ${userId}`);
    this.storage.getUser().subscribe({
      next: (user) => {
        this.userProfile = user;
        console.log('User Profile Data:', user);
        console.log(`Patient: ${user.fullName}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phoneNumber || 'N/A'}`);
        console.log(`Location: ${user.city || 'N/A'}, ${user.state || 'N/A'}`);
        this.profileForm.patchValue({
          fullName: user.fullName || '',
          phoneNumber: user.phoneNumber || '',
          address: user.address || '',
          city: user.city || '',
          state: user.state || '',
          zipCode: user.zipCode || ''
        });
        
        // Auto-populate location if available
        if (user.city && user.state) {
          this.patientLocation = {
            address: user.address || '',
            city: user.city,
            state: user.state,
            zipCode: user.zipCode || ''
          };
        }
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        if (error.status === 401) {
          this.error = 'Session expired. Please login again.';
          localStorage.clear();
          window.location.href = '/auth/login';
        } else {
          this.error = 'Failed to load profile';
        }
      }
    });
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

    const updateData = this.profileForm.value;
    this.loading = true;
    this.error = undefined;
    
    this.storage.updateUser(userId, updateData).subscribe({
      next: (response) => {
        this.userProfile = response;
        this.alertService.show('Profile updated successfully!', 'Success');
        this.loading = false;
        
        // Update patient location if address changed
        if (updateData.city && updateData.state) {
          this.patientLocation = {
            address: updateData.address || '',
            city: updateData.city,
            state: updateData.state,
            zipCode: updateData.zipCode || ''
          };
        }
      },
      error: (err) => {
        const errorMsg = err?.error?.message || 'Failed to update profile';
        this.error = errorMsg;
        this.alertService.show('Error: ' + errorMsg, 'Error');
        this.loading = false;
      }
    });
  }

  async enableGeolocation() {
    try {
      this.loading = true;
      this.error = undefined;
      
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser');
      }
      
      console.log('Requesting geolocation permission...');
      this.userCoordinates = await this.hospitalService.getCurrentLocation();
      console.log('Location obtained:', this.userCoordinates);
      
      this.useGeolocation = true;
      this.patientLocation = { address: '', city: '', state: '', zipCode: '' };
      this.searchHospitals();
    } catch (error: any) {
      console.error('Geolocation error:', error);
      let errorMessage = 'Unable to get your location. Please enter city/state manually.';
      
      if (error.code === 1) {
        errorMessage = 'Location access denied. Please enable location permissions and try again.';
      } else if (error.code === 2) {
        errorMessage = 'Location unavailable. Please enter city/state manually.';
      } else if (error.code === 3) {
        errorMessage = 'Location request timed out. Please try again or enter city/state manually.';
      }
      
      this.error = errorMessage;
      this.useGeolocation = false;
    } finally {
      this.loading = false;
    }
  }

  disableGeolocation() {
    this.useGeolocation = false;
    this.userCoordinates = null;
    this.hospitals = [];
    // Reset to profile location if available
    if (this.userProfile?.city && this.userProfile?.state) {
      this.patientLocation = {
        address: this.userProfile.address || '',
        city: this.userProfile.city,
        state: this.userProfile.state,
        zipCode: this.userProfile.zipCode || ''
      };
    }
  }

  onStateChange() {
    // Keep all cities available regardless of state
    this.availableCities = this.cities;
  }
  
  getAvailableSlots() {
    if (!this.availableSlots) return [];
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const selectedDate = this.bookingForm.get('appointmentDate')?.value;
    const isToday = selectedDate === now.toISOString().split('T')[0];
    
    return this.availableSlots.filter(slot => {
      if (!isToday) return true; // Show all slots for future dates
      
      // For today, only show future slots
      const [hours, minutes] = slot.startTime.split(':').map(Number);
      const slotTime = hours * 60 + minutes;
      return slotTime > currentTime;
    });
  }
  
  clearLocation() {
    this.patientLocation = { address: '', city: '', state: '', zipCode: '' };
    this.hospitals = [];
    this.useGeolocation = false;
    this.userCoordinates = null;
    this.availableCities = this.cities;
  }

  cancelAppointment(appointmentId: number) {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;
    
    this.loading = true;
    this.error = undefined;
    
    fetch(`http://localhost:5000/api/appointment/cancel/${appointmentId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
      },
      body: JSON.stringify({ reason: 'Cancelled by patient' })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log('Cancellation result:', result);
      this.alertService.show('Appointment cancelled successfully.', 'Success');
      this.loadAppointments();
      this.loading = false;
    })
    .catch((error) => {
      console.error('Cancellation error:', error);
      this.error = 'Failed to cancel appointment';
      this.loading = false;
    });
  }

  downloadPrescription(appointmentId: number) {
    console.log('Downloading prescription for appointment:', appointmentId);
    
    const token = localStorage.getItem('token');
    if (!token) {
      this.alertService.show('Please login to download prescription', 'Error');
      return;
    }

    // Download PDF
    fetch(`http://localhost:5000/api/prescription/appointment/${appointmentId}/pdf`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to download prescription');
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Prescription_${appointmentId}_${new Date().getTime()}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      this.alertService.show('Prescription downloaded successfully!', 'Success');
    })
    .catch(error => {
      console.error('Download error:', error);
      this.alertService.show('Failed to download prescription', 'Error');
    });
  }

  searchDoctorsBySymptoms() {
    if (!this.searchSymptoms.trim()) {
      this.symptomDoctors = [];
      return;
    }

    console.log('API Call: Searching doctors by symptoms...');
    console.log(`Symptoms: ${this.searchSymptoms}`);
    console.log(`City filter: ${this.patientLocation.city || 'None'}`);
    
    this.loadingSymptomDoctors = true;
    this.error = undefined;
    
    // Use patient's city if available, otherwise no city filter
    const cityFilter = this.patientLocation.city || '';
    
    this.doctorService.getDoctorsBySymptoms(this.searchSymptoms, cityFilter).subscribe({
      next: (doctors) => {
        console.log('Symptom-based Doctors Data:', doctors);
        console.log(`Found ${doctors.length} doctors matching symptoms`);
        this.symptomDoctors = doctors;
        doctors.forEach((doctor: any, index: number) => {
          console.log(`Doctor ${index + 1}: ${doctor.fullName} - ${doctor.specialization} - ${doctor.hospitalName}`);
        });
        this.loadingSymptomDoctors = false;
      },
      error: (error) => {
        console.error('Error searching doctors by symptoms:', error);
        this.error = 'Failed to search doctors by symptoms';
        this.loadingSymptomDoctors = false;
      }
    });
  }

  selectSymptomDoctor(doctor: Doctor) {
    // Convert Doctor to the format expected by selectDoctor
    const doctorData = {
      doctorId: doctor.doctorId,
      doctorName: doctor.fullName || doctor.name,
      fullName: doctor.fullName || doctor.name,
      specialization: doctor.specialization,
      experienceYears: doctor.experienceYears,
      qualification: doctor.qualification,
      faceToFaceFee: doctor.faceToFaceFee,
      telemedicineFee: doctor.telemedicineFee,
      profilePictureUrl: doctor.profilePictureUrl,
      availability: doctor.availability,
      hospitalId: doctor.hospitalId,
      hospitalName: doctor.hospitalName,
      treatedConditionsArray: doctor.treatedConditionsArray || []
    };
    
    // Set the selected hospital based on the doctor's hospital
    this.selectedHospital = {
      hospitalId: doctor.hospitalId,
      name: doctor.hospitalName,
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      status: 'Active'
    } as Hospital;
    
    this.selectDoctor(doctorData);
  }

  selectSymptomFromDoctor(symptom: string) {
    if (!symptom) return;
    
    this.selectedSymptomForBooking = symptom;
    console.log('Selected symptom for booking:', symptom);
    
    // Update the booking form with the selected symptom if it exists
    if (this.bookingForm) {
      this.bookingForm.patchValue({ symptoms: symptom });
    }
  }

  onSymptomSelected(event: any) {
    const symptom = event.target?.value || '';
    if (!symptom) {
      this.selectedSymptomForBooking = '';
      return;
    }
    
    this.selectedSymptomForBooking = symptom;
    console.log('Selected symptom for booking:', symptom);
    
    // Update the booking form with the selected symptom if it exists
    if (this.bookingForm) {
      this.bookingForm.patchValue({ symptoms: symptom });
    }
  }

  clearSelectedSymptom() {
    this.selectedSymptomForBooking = '';
    if (this.bookingForm) {
      this.bookingForm.patchValue({ symptoms: '' });
    }
  }
}