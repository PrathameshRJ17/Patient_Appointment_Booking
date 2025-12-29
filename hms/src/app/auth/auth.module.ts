import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

// ⬇️ Standalone feature components
import { LoginComponent } from './components/login/login.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { RegisterProfessionalComponent } from './components/register-professional/register-professional.component';

@NgModule({
  // declarations: []   // ❌ empty (or remove) because these are standalone
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,

    // ⬇️ import standalone components instead of declaring
    LoginComponent,
    RegisterPatientComponent,
    RegisterProfessionalComponent
  ]
})
export class AuthModule {}
