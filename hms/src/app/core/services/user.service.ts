import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://patientappointmentbooking.runasp.net/api/users';

export interface User {
  userId: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  gender?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  doctorId?: number;
  staffId?: number;
  createdAt?: string;
}

export interface UpdateUserDto {
  fullName?: string;
  gender?: string;
  phoneNumber?: string;
}

export interface ApproveUserDto {
  userId: number;
  status: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/${id}`);
  }

  updateUser(id: number, dto: UpdateUserDto): Observable<User> {
    return this.http.put<User>(`${API_URL}/${id}`, dto);
  }

  approveUser(dto: ApproveUserDto): Observable<User> {
    console.log('UserService sending:', dto);
    return this.http.put<User>(`${API_URL}/approve`, dto);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}?role=${role}`);
  }

  syncProfessionals(): Observable<any> {
    return this.http.post(`${API_URL}/sync-professionals`, {});
  }
}
