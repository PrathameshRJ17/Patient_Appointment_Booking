import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AlertConfig {
  message: string;
  title?: string;
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alertSubject = new Subject<AlertConfig | null>();
  alert$ = this.alertSubject.asObservable();

  show(message: string, title: string = 'Success') {
    this.alertSubject.next({ message, title });
  }

  close() {
    this.alertSubject.next(null);
  }
}
