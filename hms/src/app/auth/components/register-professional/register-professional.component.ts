import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, Validators,
  FormGroup, FormControl
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, UserRole } from '../../../core/services/auth.service';
import { AlertService } from '../../../core/services/alert.service';

type RegisterProfessionalForm = {
  role: FormControl<UserRole>;
  fullName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phoneNumber: FormControl<string>;
  specialization: FormControl<string>;
  qualification: FormControl<string>;
  experienceYears: FormControl<number>;
  department: FormControl<string>;
};

@Component({
  selector: 'app-register-professional',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-professional.component.html',
  styleUrls: ['./register-professional.component.css']
})
export class RegisterProfessionalComponent implements OnInit {
  roles = [UserRole.Doctor, UserRole.Staff];
  loading = false;
  error?: string;
  form!: FormGroup<RegisterProfessionalForm>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group<RegisterProfessionalForm>({
      role: this.fb.nonNullable.control(UserRole.Doctor, { validators: [Validators.required] }),
      fullName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(7)] }),
      email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email] }),
      password: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(12), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{12,}$/)] }),
      phoneNumber: this.fb.nonNullable.control('', { validators: [Validators.pattern(/^[0-9]{10}$/)] }),
      specialization: this.fb.nonNullable.control(''),
      qualification: this.fb.nonNullable.control(''),
      experienceYears: this.fb.nonNullable.control(0),
      department: this.fb.nonNullable.control('')
    });

    this.form.get('role')?.valueChanges.subscribe(role => {
      if (role === UserRole.Doctor) {
        this.form.get('specialization')?.setValidators([Validators.required, Validators.minLength(3)]);
        this.form.get('qualification')?.setValidators([Validators.required, Validators.minLength(2)]);
        this.form.get('experienceYears')?.setValidators([Validators.required, Validators.min(0), Validators.max(50)]);
        this.form.get('department')?.clearValidators();
      } else {
        this.form.get('specialization')?.clearValidators();
        this.form.get('qualification')?.clearValidators();
        this.form.get('experienceYears')?.clearValidators();
        this.form.get('department')?.setValidators([Validators.required]);
      }
      this.form.get('specialization')?.updateValueAndValidity();
      this.form.get('qualification')?.updateValueAndValidity();
      this.form.get('experienceYears')?.updateValueAndValidity();
      this.form.get('department')?.updateValueAndValidity();
    });
  }

  submit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true; this.error = undefined;

    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading = false;
        this.alertService.show('Submitted. Your account will be reviewed by Admin.', 'Success');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.message) {
          this.error = err.error.message;
        } else if (typeof err?.error === 'string') {
          this.error = err.error;
        } else if (err?.statusText) {
          this.error = err.statusText;
        } else {
          this.error = 'Registration failed.';
        }
        console.error('Registration error:', err);
      }
    });
  }
}
