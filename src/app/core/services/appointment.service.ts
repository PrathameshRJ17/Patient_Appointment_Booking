import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface AvailableSlot {
  startTime: string;
  display: string;
  isAvailable: boolean;
}

export type AppointmentStatus = 'Pending' | 'Approved' | 'Rejected' | 'Completed' | 'Done';

export enum AppointmentMode {
  FaceToFace = 0,
  PhoneCall = 1
}

export interface Appointment {
  appointmentId: number;
  patientId: number;
  doctorId: number;
  hospitalId?: number;
  patientName?: string;
  doctorName?: string;
  doctorPhone?: string;
  hospitalName?: string;
  appointmentDate: string;
  slotTime?: string;
  timeSlot?: string;
  timeSlotDisplay?: string;
  status?: AppointmentStatus | string | number;
  statusText?: AppointmentStatus | string | number;
  mode: AppointmentMode;
  feeAmount: number;
  isPaid?: boolean;
  paymentMethod?: string;
  paidAt?: string;
  symptoms?: string;
  remarks?: string;
  hasPrescription?: boolean;
}

export interface CreateAppointmentDto {
  patientId: number;
  doctorId: number;
  appointmentDate: Date | string;
  slotTime: string;
  mode: AppointmentMode;
  symptoms?: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private apiUrl = `${environment.apiUrl}/appointment`;

  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }

  getAppointmentsByPatient(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/patient/${patientId}`);
  }

  getAppointmentsByDoctor(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/doctor/${doctorId}`);
  }

  getAvailableSlots(doctorId: number, date: Date | string): Observable<AvailableSlot[]> {
    const params = new HttpParams()
      .set('doctorId', String(doctorId))
      .set('date', typeof date === 'string' ? date : date.toISOString());
    return this.http.get<AvailableSlot[]>(`${this.apiUrl}/available-slots`, { params });
  }

  createAppointment(dto: any): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.apiUrl}`, dto);
  }

  markAppointmentAsPaid(appointmentId: number, paymentMethod: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${appointmentId}/payment`, { paymentMethod });
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCompletedAppointmentsByDoctor(doctorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/doctor/${doctorId}/completed`);
  }
}