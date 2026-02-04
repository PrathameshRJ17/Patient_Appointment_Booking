import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Hospital {
  hospitalId: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email?: string;
  website?: string;
  status: string;
  latitude?: number;
  longitude?: number;
  distance?: number;
  createdAt: Date;
}

export interface CreateHospital {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
}

export interface UpdateHospital extends CreateHospital {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiUrl = `${environment.apiUrl}/hospital`;

  constructor(private http: HttpClient) {}

  getHospitals(latitude?: number, longitude?: number, radiusKm?: number): Observable<Hospital[]> {
    let params = '';
    if (latitude && longitude) {
      params = `?latitude=${latitude}&longitude=${longitude}`;
      if (radiusKm) {
        params += `&radiusKm=${radiusKm}`;
      }
    }
    return this.http.get<Hospital[]>(`${this.apiUrl}${params}`);
  }

  getNearbyHospitals(latitude: number, longitude: number, radiusKm: number = 10): Observable<Hospital[]> {
    console.log(`Fetching nearby hospitals for coordinates: ${latitude}, ${longitude}`);
    return this.http.get<Hospital[]>(`${this.apiUrl}/nearby?latitude=${latitude}&longitude=${longitude}&radiusKm=${radiusKm}`);
  }

  getHospital(id: number): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.apiUrl}/${id}`);
  }

  createHospital(hospital: CreateHospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital);
  }

  updateHospital(id: number, hospital: UpdateHospital): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, hospital);
  }

  deleteHospital(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getHospitalDoctors(hospitalId: number, symptoms?: string, date?: string): Observable<any[]> {
    let params = '';
    const queryParams = [];
    
    if (symptoms) queryParams.push(`symptoms=${encodeURIComponent(symptoms)}`);
    if (date) queryParams.push(`date=${date}`);
    
    if (queryParams.length > 0) {
      params = '?' + queryParams.join('&');
    }
    
    return this.http.get<any[]>(`${this.apiUrl}/${hospitalId}/doctors${params}`);
  }

  getHospitalsByAddress(address: string, city: string, state: string, zipCode?: string, radiusKm: number = 50): Observable<Hospital[]> {
    let params = `?address=${encodeURIComponent(address)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&radiusKm=${radiusKm}`;
    if (zipCode) {
      params += `&zipCode=${encodeURIComponent(zipCode)}`;
    }
    return this.http.get<Hospital[]>(`${this.apiUrl}/by-address${params}`);
  }

  getCurrentLocation(): Promise<{latitude: number, longitude: number}> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }
      
      console.log('Requesting geolocation...');
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Geolocation success:', position.coords);
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          const errorObj = new Error(`Geolocation failed: ${error.message}`);
          (errorObj as any).code = error.code;
          reject(errorObj);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 300000
        }
      );
    });
  }
}