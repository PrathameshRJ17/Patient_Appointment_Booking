import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface PrescriptionDto {
  medications: string;
  diagnosis?: string;
  instructions?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class PrescriptionService {
  private apiUrl = `${environment.apiUrl}/prescription`;

  constructor(private http: HttpClient) {}

  updatePrescription(appointmentId: number, prescription: PrescriptionDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/appointment/${appointmentId}`, prescription);
  }

  getPrescriptionByAppointment(appointmentId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/appointment/${appointmentId}`);
  }
}