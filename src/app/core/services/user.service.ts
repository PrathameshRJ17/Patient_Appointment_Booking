import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  userId: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  gender?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  profilePictureUrl?: string;
  doctorId?: number;
  staffId?: number;
  createdAt?: string;
}

export interface ApproveUserDto {
  userId: number;
  status: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?role=${role}`);
  }

  approveUser(dto: ApproveUserDto): Observable<User> {
    console.log('UserService sending:', dto);
    return this.http.put<User>(`${this.apiUrl}/approve`, dto);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}