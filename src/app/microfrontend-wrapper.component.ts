import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microfrontend-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="microfrontend-container" [attr.data-mf-name]="microfrontendName">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .microfrontend-container {
      width: 100%;
      height: 100%;
      min-height: 100vh;
    }
  `]
})
export class MicrofrontendWrapperComponent implements OnInit, OnDestroy {
  @Input() microfrontendName: string = 'pulse-hospital';

  constructor(private router: Router) {}

  ngOnInit() {
    this.emitMicrofrontendEvent('ready', {
      name: this.microfrontendName
    });
  }

  ngOnDestroy() {
    this.emitMicrofrontendEvent('destroy', {
      name: this.microfrontendName
    });
  }

  private emitMicrofrontendEvent(type: string, data: any) {
    const event = new CustomEvent(`mf-${this.microfrontendName}-${type}`, {
      detail: data,
      bubbles: true
    });
    window.dispatchEvent(event);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  getCurrentRoute(): string {
    return this.router.url;
  }
}