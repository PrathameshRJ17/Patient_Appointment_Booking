import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Doctor {
  doctorId: number;
  userId: number;
  specialization: string;
  experienceYears: number;
  faceToFaceFee: number;
  telemedicineFee: number;
  phone?: string;
  phoneNumber?: string;
  profilePictureUrl?: string;
  availability: string;
  fullName?: string;
  name?: string;
  qualification?: string;
  treatedConditions?: string;
  treatedConditionsArray?: string[];
  hospitalId: number;
  hospitalName: string;
  user: any;
}

export interface UpdateDoctorDto {
  fullName?: string;
  phoneNumber?: string;
  profilePictureUrl?: string;
  experienceYears?: number;
  specialization?: string;
  qualification?: string;
  faceToFaceFee?: number;
  telemedicineFee?: number;
  availability?: string;
}

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private apiUrl = `${environment.apiUrl}/doctor`;

  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}`);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
  }

  updateDoctor(id: number, dto: UpdateDoctorDto): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${id}`, dto);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  markAsDone(doctorId: number, appointmentId: number, remarks: string): Observable<any> {
    console.log(`PUT ${this.apiUrl}/${doctorId}/appointment/${appointmentId}/remarks`, remarks);
    return this.http.put(`${this.apiUrl}/${doctorId}/appointment/${appointmentId}/remarks`, JSON.stringify(remarks), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getMonthlyCalendar(year: number, month: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/calendar/${year}/${month}`);
  }

  getPerformanceStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/performance-stats`);
  }

  getPatientHistory(patientId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/patient-history/${patientId}`);
  }

  getDoctorsBySymptoms(symptoms: string, city?: string): Observable<Doctor[]> {
    let url = `${this.apiUrl}/by-symptoms?symptoms=${encodeURIComponent(symptoms)}`;
    if (city) {
      url += `&city=${encodeURIComponent(city)}`;
    }
    return this.http.get<Doctor[]>(url);
  }
}