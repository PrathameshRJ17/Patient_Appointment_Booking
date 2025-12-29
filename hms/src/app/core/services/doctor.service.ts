import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://patientappointmentbooking.runasp.net/api/doctor';

export interface Doctor {
  doctorId: number;
  userId: number;
  specialization: string;
  experienceYears: number;
  licenseNumber: string;
  consultationFee: number;
  availability: string;
  fullName?: string;
  name?: string;
  user: any;
}

export interface CreateDoctorDto {
  specialization: string;
  licenseNumber: string;
  consultationFee: number;
  availability: string;
}

export interface UpdateDoctorDto {
  fullName?: string;
  experienceYears?: number;
  specialization?: string;
  consultationFee?: number;
  availability?: string;
}

@Injectable({ providedIn: 'root' })
export class DoctorService {
  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${API_URL}`);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${API_URL}/${id}`);
  }

  createDoctor(dto: CreateDoctorDto): Observable<Doctor> {
    return this.http.post<Doctor>(`${API_URL}`, dto);
  }

  updateDoctor(id: number, dto: UpdateDoctorDto): Observable<Doctor> {
    return this.http.put<Doctor>(`${API_URL}/${id}`, dto);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  getMyAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/me/appointments`);
  }

  getBillsByDoctor(doctorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/${doctorId}/bills`);
  }

  addRemarks(doctorId: number, appointmentId: number, remarks: string): Observable<any> {
    return this.http.put(`${API_URL}/${doctorId}/appointment/${appointmentId}/remarks`, JSON.stringify(remarks), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  markAsDone(doctorId: number, appointmentId: number, remarks: string): Observable<any> {
    console.log(`PUT ${API_URL}/${doctorId}/appointment/${appointmentId}/remarks`, remarks);
    return this.http.put(`${API_URL}/${doctorId}/appointment/${appointmentId}/remarks`, JSON.stringify(remarks), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateDoctorAvailability(doctorId: number, availability: string): Observable<Doctor> {
    return this.http.put<Doctor>(`${API_URL}/${doctorId}`, { availabilityStatus: availability });
  }
}
