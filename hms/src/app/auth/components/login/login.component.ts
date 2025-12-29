import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error?: string;
  form!: FormGroup<LoginForm>;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group<LoginForm>({
      email: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [Validators.required])
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = undefined;

    console.log('Login attempt:', this.form.getRawValue().email);

    this.auth.login(this.form.getRawValue()).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.loading = false;
        const role = this.auth.role;
        console.log('User role:', role);
        if (role === 'Patient') {
          this.router.navigate(['/patient']);
        } else if (role === 'Doctor') {
          this.router.navigate(['/doctor']);
        } else if (role === 'Staff') {
          this.router.navigate(['/staff']);
        } else if (role === 'Admin') {
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        console.error('Login error details:', err);
        this.loading = false;
        if (err?.error?.message) {
          this.error = err.error.message;
        } else if (typeof err?.error === 'string') {
          this.error = err.error;
        } else if (err?.status === 403) {
          this.error = 'Account not approved. Please contact admin.';
        } else if (err?.status === 401) {
          this.error = 'Invalid email or password.';
        } else if (err?.statusText) {
          this.error = err.statusText;
        } else {
          this.error = 'Login failed. Please try again.';
        }
      }
    });
  }
}
