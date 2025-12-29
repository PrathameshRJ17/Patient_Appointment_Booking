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
  `
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
