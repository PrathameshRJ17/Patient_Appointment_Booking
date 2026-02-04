import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  template: `
    <div style="padding: 2rem; text-align: center;">
      <h2>Access Denied</h2>
      <p>You do not have permission to access this page.</p>
    </div>
  `
})
export class UnauthorizedComponent {}
