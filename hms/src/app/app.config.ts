import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthGuard } from './core/guards/auth-guard';
import { RoleGuard } from './core/guards/role.guard';
import { PatientDashboardComponent } from './patient/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard.component';
import { StaffDashboardComponent } from './staff/staff-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'patient',
    component: PatientDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Patient'] }
  },
  {
    path: 'doctor',
    component: DoctorDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Doctor'] }
  },
  {
    path: 'staff',
    component: StaffDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Staff'] }
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Admin'] }
  },
  { path: 'unauthorized', loadComponent: () => import('./core/components/unauthorized.component').then(m => m.UnauthorizedComponent) },
  { path: '**', redirectTo: 'auth/login' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};
