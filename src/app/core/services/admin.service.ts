import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AdminCounts {
  totalDoctors: number;
  totalPatients: number;
  totalHospitals: number;
  totalAppointments: number;
}

export interface PendingUser {
  userId: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  createdAt?: string;
}

export interface CreateDoctorDto {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  specialization: string;
  hospitalId: number;
  experienceYears: number;
  qualification: string;
  faceToFaceFee: number;
  telemedicineFee: number;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  getCounts(): Observable<AdminCounts> {
    return this.http.get<AdminCounts>(`${environment.apiUrl}/admin/counts`);
  }

  getPendingUsers(): Observable<PendingUser[]> {
    return this.http.get<PendingUser[]>(`${environment.apiUrl}/admin/pending-users`);
  }

  createDoctor(doctorData: CreateDoctorDto): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/admin/create-doctor`, doctorData);
  }

  updateDoctor(doctorId: number, doctorData: CreateDoctorDto): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/admin/update-doctor/${doctorId}`, doctorData);
  }

  sendCredentials(userId: number): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/admin/send-credentials/${userId}`, {});
  }

  createPatient(patientData: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/admin/create-patient`, patientData);
  }

  getAnalytics(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/admin/analytics`);
  }
}
