import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface EmailCredentialsDto {
  email: string;
  fullName: string;
  password: string;
  userType: 'doctor' | 'patient';
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor(private http: HttpClient) {}

  sendDoctorCredentials(doctorId: number): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/email/send-doctor-credentials/${doctorId}`, {});
  }

  sendPatientCredentials(patientId: number): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/email/send-patient-credentials/${patientId}`, {});
  }

  sendCredentialsEmail(credentials: EmailCredentialsDto): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/email/send-credentials`, credentials);
  }
}