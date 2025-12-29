import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://patientappointmentbooking.runasp.net/api/admin';

export interface AdminCounts {
  totalDoctors: number;
  totalPatients: number;
  totalStaff: number;
  totalAppointments: number;
}

export interface Revenue {
  date: Date;
  amount: number;
}

export interface PendingUser {
  userId: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  createdAt?: string;
}

export interface UpcomingAppointment {
  appointmentId: number;
  patientName: string;
  doctorName: string;
  appointmentDate: Date;
  timeSlot: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  getCounts(): Observable<AdminCounts> {
    return this.http.get<AdminCounts>(`${API_URL}/counts`);
  }

  getRevenueByDateRange(from: Date, to: Date): Observable<Revenue[]> {
    return this.http.get<Revenue[]>(`${API_URL}/revenue?from=${from}&to=${to}`);
  }

  getPendingUsers(): Observable<PendingUser[]> {
    return this.http.get<PendingUser[]>(`${API_URL}/pending-users`);
  }

  getUpcomingAppointments(from: Date, to: Date): Observable<UpcomingAppointment[]> {
    return this.http.get<UpcomingAppointment[]>(`${API_URL}/upcoming-appointments?from=${from}&to=${to}`);
  }
}
