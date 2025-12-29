import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private apiUrl = 'http://patientappointmentbooking.runasp.net/api/Users';

  constructor(private http: HttpClient) {}

  set<T>(key: string, value: T) { localStorage.setItem(key, JSON.stringify(value)); }
  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : null;
  }
  remove(key: string) { localStorage.removeItem(key); }
  clear() { localStorage.clear(); }
  
  getUserId(): number | null {
    const id = localStorage.getItem('userId');
    return id ? parseInt(id, 10) : null;
  }
  
  getStaffId(): number | null {
    const id = localStorage.getItem('staffId');
    return id ? parseInt(id, 10) : null;
  }
  
  getDoctorId(): number | null {
    const id = localStorage.getItem('doctorId');
    return id ? parseInt(id, 10) : null;
  }

  getUser(): Observable<any> {
    const userId = this.getUserId();
    if (!userId) throw new Error('User ID not found');
    return this.http.get(`${this.apiUrl}/${userId}`);
  }

  updateUser(userId: number, data: any): Observable<any> {
    console.log(`PUT ${this.apiUrl}/${userId}`, data);
    return this.http.put(`${this.apiUrl}/${userId}`, data);
  }
}
