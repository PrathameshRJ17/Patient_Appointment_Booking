import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="alert" class="custom-alert-overlay" (click)="close()">
      <div class="custom-alert-box" (click)="$event.stopPropagation()">
        <h3>{{ alert.title }}</h3>
        <p>{{ alert.message }}</p>
        <button (click)="close()">OK</button>
      </div>
    </div>
  `,
  styles: [`
    .custom-alert-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    }
    .custom-alert-box {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      max-width: 400px;
      width: 90%;
      text-align: center;
    }
    .custom-alert-box h3 {
      margin: 0 0 1rem 0;
      color: #333;
    }
    .custom-alert-box p {
      margin: 0 0 1.5rem 0;
      color: #666;
    }
    .custom-alert-box button {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    .custom-alert-box button:hover {
      background: #0056b3;
    }
  `]
})
export class CustomAlertComponent {
  alert: any = null;

  constructor(private alertService: AlertService) {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
    });
  }

  close() {
    this.alertService.close();
  }
}
