import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import microfrontend wrapper
import { MicrofrontendWrapperComponent } from './microfrontend-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MicrofrontendWrapperComponent
  ],
  exports: [
    MicrofrontendWrapperComponent
  ]
})
export class MicrofrontendModule { }

// Export components for external use
export { MicrofrontendWrapperComponent };