import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debug-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="debug-panel" style="position: fixed; top: 10px; right: 10px; background: #f0f0f0; padding: 10px; border: 1px solid #ccc; z-index: 9999; font-size: 12px; max-width: 300px;">
      <h4>Debug Info</h4>
      <div><strong>Token:</strong> {{ hasToken ? 'Present' : 'Missing' }}</div>
      <div><strong>User ID:</strong> {{ userId || 'Not found' }}</div>
      <div><strong>Role:</strong> {{ role || 'Not found' }}</div>
      <div><strong>Geolocation:</strong> {{ geolocationSupported ? 'Supported' : 'Not supported' }}</div>
      <div><strong>HTTPS:</strong> {{ isHttps ? 'Yes' : 'No' }}</div>
      <button (click)="testGeolocation()" style="margin-top: 5px;">Test Location</button>
      <div *ngIf="locationResult" style="margin-top: 5px;">
        <strong>Location:</strong> {{ locationResult }}
      </div>
    </div>
  `
})
export class DebugInfoComponent {
  hasToken = !!localStorage.getItem('token');
  userId = localStorage.getItem('userId');
  role = localStorage.getItem('role');
  geolocationSupported = !!navigator.geolocation;
  isHttps = location.protocol === 'https:';
  locationResult = '';

  testGeolocation() {
    if (!navigator.geolocation) {
      this.locationResult = 'Not supported';
      return;
    }

    this.locationResult = 'Requesting...';
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.locationResult = `${position.coords.latitude}, ${position.coords.longitude}`;
      },
      (error) => {
        this.locationResult = `Error: ${error.message} (Code: ${error.code})`;
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }
}