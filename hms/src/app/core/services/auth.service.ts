import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

export enum UserRole { Admin='Admin', Patient='Patient', Doctor='Doctor', Staff='Staff' }

export interface RegisterDto {
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: string;
  role?: UserRole;
  specialization?: string;
  qualification?: string;
  experienceYears?: number;
  department?: string;
}

export interface LoginDto { email: string; password: string; }

export interface LoginResponse {
  token: string;
  role: UserRole;
  userId: number;
  staffId?: number | null;
  doctorId?: number | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://patientappointmentbooking.runasp.net/api/users';

  constructor(private http: HttpClient) {}

  register(payload: RegisterDto) {
    const body = this.buildRegisterBody(payload);
    const role = payload.role;
    const url = role === UserRole.Patient || role == null
      ? `${this.base}/register/patient`
      : `${this.base}/register/professional`;

    return this.http.post(url, body);
  }

  private buildRegisterBody(payload: RegisterDto) {
    const body: Record<string, unknown> = {
      fullName: payload.fullName,
      email: payload.email,
      password: payload.password
    };

    if (payload.phoneNumber) body['phoneNumber'] = payload.phoneNumber;
    if (payload.gender) body['gender'] = payload.gender;
    if (payload.dateOfBirth) body['dateOfBirth'] = payload.dateOfBirth;
    if (payload.specialization) body['specialization'] = payload.specialization;
    if (payload.qualification) body['qualification'] = payload.qualification;
    if (payload.experienceYears != null) body['experienceYears'] = payload.experienceYears;
    if (payload.department) body['department'] = payload.department;

    const roleValue = this.mapRole(payload.role);
    if (roleValue != null) body['role'] = roleValue;

    return body;
  }

  private mapRole(role?: UserRole) {
    switch (role) {
      case UserRole.Admin:
        return 1;
      case UserRole.Doctor:
        return 2;
      case UserRole.Staff:
        return 3;
      case UserRole.Patient:
        return 4;
      default:
        return undefined;
    }
  }

  login(payload: LoginDto) {
    return this.http.post<LoginResponse>(`${this.base}/login`, payload).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('userId', String(res.userId));
        if (res.staffId != null) localStorage.setItem('staffId', String(res.staffId));
        if (res.doctorId != null) localStorage.setItem('doctorId', String(res.doctorId));
      })
    );
  }

  logout() {
    localStorage.clear();
    window.location.href = '/auth/login';
  }
  get token() { return localStorage.getItem('token'); }
  get role(): UserRole | null { return (localStorage.getItem('role') as UserRole) ?? null; }
  get isLoggedIn() { return !!this.token; }
}
