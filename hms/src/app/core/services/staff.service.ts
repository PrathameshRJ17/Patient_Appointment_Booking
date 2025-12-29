import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://patientappointmentbooking.runasp.net/api/staff';

export interface Staff {
  staffId: number;
  userId: number;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  designation?: string;
  department?: string;
  position?: string;
  shiftTiming?: string;
  user?: any;
}

export interface CreateStaffDto {
  designation: string;
  department: string;
}

export interface UpdateStaffDto {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}

@Injectable({ providedIn: 'root' })
export class StaffService {
  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${API_URL}`);
  }

  getStaffById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${API_URL}/${id}`);
  }

  createStaff(dto: CreateStaffDto): Observable<Staff> {
    return this.http.post<Staff>(`${API_URL}`, dto);
  }

  updateStaff(id: number, dto: UpdateStaffDto): Observable<Staff> {
    return this.http.put<Staff>(`${API_URL}/${id}`, dto);
  }

  deleteStaff(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  approveAppointment(staffId: number, appointmentId: number): Observable<any> {
    return this.http.put(`${API_URL}/${staffId}/appointments/${appointmentId}/approve`, {});
  }

  rejectAppointment(staffId: number, appointmentId: number, remarks?: string): Observable<any> {
    return this.http.delete(`${API_URL}/${staffId}/appointments/${appointmentId}/reject`);
  }

  completeAppointment(staffId: number, appointmentId: number, remarks?: string): Observable<any> {
    return this.http.put(`${API_URL}/${staffId}/appointments/${appointmentId}/complete`, JSON.stringify(remarks || ''), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
