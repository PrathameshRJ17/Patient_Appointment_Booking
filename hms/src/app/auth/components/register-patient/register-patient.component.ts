import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, Validators,
  FormGroup, FormControl
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, UserRole, RegisterDto } from '../../../core/services/auth.service';

type RegisterPatientForm = {
  fullName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phoneNumber: FormControl<string>;
  gender: FormControl<string>;
  role: FormControl<UserRole>;
};

@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  loading = false;
  error?: string;
  form!: FormGroup<RegisterPatientForm>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group<RegisterPatientForm>({
      fullName: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(7)] }),
      email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email] }),
      password: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.minLength(12), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{12,}$/)] }),
      phoneNumber: this.fb.nonNullable.control('', { validators: [Validators.pattern(/^[0-9]{10}$/)] }),
      gender: this.fb.nonNullable.control(''),
      role: this.fb.nonNullable.control(UserRole.Patient, { validators: [Validators.required] })
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true; this.error = undefined;

    const raw = this.form.getRawValue();
    const payload: RegisterDto = {
      ...raw,
      phoneNumber: raw.phoneNumber.trim() ? raw.phoneNumber : undefined,
      gender: raw.gender.trim() ? raw.gender : undefined
    };

    this.auth.register(payload).subscribe({
      next: () => {
        this.loading = false;
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
