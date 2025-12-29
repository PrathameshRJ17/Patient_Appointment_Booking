import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://patientappointmentbooking.runasp.net/api/appointment';

export interface AvailableSlot {
  startTime: string;
  display: string;
  isAvailable: boolean;
}

export type AppointmentStatus = 'Pending' | 'Approved' | 'Rejected' | 'Completed';

export interface Appointment {
  appointmentId: number;
  patientId: number;
  doctorId: number;
  patientName?: string;
  doctorName?: string;
  appointmentDate: string;
  slotTime?: string;
  timeSlot?: string;
  timeSlotDisplay?: string;
  status?: AppointmentStatus | string;
  statusText?: AppointmentStatus | string;
  symptoms?: string;
  remarks?: string;
}

export interface CreateAppointmentDto {
  patientId: number;
  doctorId: number;
  appointmentDate: Date;
  timeSlot?: string;
  slotTime?: string;
}

export interface UpdateAppointmentStatusDto {
  appointmentId: number;
  status: string;
  remarks?: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${API_URL}`);
  }

  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${API_URL}/${id}`);
  }

  getAppointmentsByPatient(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${API_URL}/patient/${patientId}`);
  }

  getAppointmentsByDoctor(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${API_URL}/doctor/${doctorId}`);
  }

  getAvailableSlots(doctorId: number, date: Date | string): Observable<AvailableSlot[]> {
    const params = new HttpParams()
      .set('doctorId', String(doctorId))
      .set('date', typeof date === 'string' ? date : date.toISOString());
    return this.http.get<AvailableSlot[]>(`${API_URL}/available-slots`, { params });
  }

  createAppointment(dto: any): Observable<Appointment> {
    return this.http.post<Appointment>(`${API_URL}`, dto);
  }

  updateAppointmentStatus(staffId: number, dto: UpdateAppointmentStatusDto): Observable<Appointment> {
    return this.http.put<Appointment>(`${API_URL}/status/${staffId}`, dto);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
