import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://patientappointmentbooking.runasp.net/api/bill';

export interface Bill {
  billId: number;
  appointmentId: number;
  patientId: number;
  patientName: string;
  doctorFee: number;
  additionalCharges: number;
  totalAmount: number;
  paymentStatus: string;
  generatedAt: Date;
}

export interface UpdateBillPaymentDto {
  billId: number;
  paymentStatus: string;
}

@Injectable({ providedIn: 'root' })
export class BillService {
  constructor(private http: HttpClient) {}

  getAllBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${API_URL}`);
  }

  getMyBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${API_URL}/my`);
  }

  getBillById(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${API_URL}/${id}`);
  }

  getBillByAppointmentId(appointmentId: number): Observable<Bill> {
    return this.http.get<Bill>(`${API_URL}/appointment/${appointmentId}`);
  }

  generateBill(appointmentId: number, additionalCharges?: number): Observable<Bill> {
    return this.http.post<Bill>(`${API_URL}/generate/${appointmentId}?additionalCharges=${additionalCharges || 0}`, {});
  }

  updatePayment(dto: UpdateBillPaymentDto): Observable<Bill> {
    return this.http.put<Bill>(`${API_URL}/payment`, dto);
  }

  deleteBill(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  downloadBill(appointmentId: number): Observable<Blob> {
    return this.http.get(`${API_URL}/download/${appointmentId}`, { responseType: 'blob' });
  }
}
