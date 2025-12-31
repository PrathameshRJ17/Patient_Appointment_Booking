import {
  AlertService,
  AuthService,
  CommonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SelectControlValueAccessor,
  UserRole,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3GA6IDBR.js";
import {
  Component,
  NgModule,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SACPETF5.js";

// src/app/auth/components/login/login.component.ts
function LoginComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  auth;
  router;
  loading = false;
  error;
  form;
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      email: this.fb.nonNullable.control("", [Validators.required]),
      password: this.fb.nonNullable.control("", [Validators.required])
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = void 0;
    console.log("Login attempt:", this.form.getRawValue().email);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: (response) => {
        console.log("Login successful:", response);
        this.loading = false;
        const role = this.auth.role;
        console.log("User role:", role);
        if (role === "Patient") {
          this.router.navigate(["/patient"]);
        } else if (role === "Doctor") {
          this.router.navigate(["/doctor"]);
        } else if (role === "Staff") {
          this.router.navigate(["/staff"]);
        } else if (role === "Admin") {
          this.router.navigate(["/admin"]);
        }
      },
      error: (err) => {
        console.error("Login error details:", err);
        this.loading = false;
        if (err?.error?.message) {
          this.error = err.error.message;
        } else if (typeof err?.error === "string") {
          this.error = err.error;
        } else if (err?.status === 403) {
          this.error = "Account not approved. Please contact admin.";
        } else if (err?.status === 401) {
          this.error = "Invalid email or password.";
        } else if (err?.statusText) {
          this.error = err.statusText;
        } else {
          this.error = "Login failed. Please try again.";
        }
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 15, vars: 3, consts: [[1, "login-wrapper"], [1, "login-card"], [3, "ngSubmit", "formGroup"], ["formControlName", "email", "placeholder", "Email"], ["formControlName", "password", "type", "password", "placeholder", "Password"], ["type", "submit", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "register-footer"], ["type", "button", "routerLink", "/auth/register"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Sign in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(5, "input", 3)(6, "input", 4);
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275text(8, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, LoginComponent_p_9_Template, 2, 1, "p", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "span");
      \u0275\u0275text(12, "Create Your Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275text(14, "Register");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  padding: 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 28px;\n  font-weight: 700;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  outline: none;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\nbutton[type=submit][_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  text-align: center;\n  font-size: 14px;\n  padding: 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n}\n.register-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.register-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.register-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: white;\n  color: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.register-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: '<div class="login-wrapper">\n  <div class="login-card">\n    <h2>Sign in</h2>\n    <form [formGroup]="form" (ngSubmit)="submit()">\n      <input formControlName="email" placeholder="Email" />\n      <input formControlName="password" type="password" placeholder="Password" />\n      <button type="submit" [disabled]="loading">Login</button>\n      <p *ngIf="error" class="error">{{ error }}</p>\n    </form>\n    <div class="register-footer">\n      <span>Create Your Account</span>\n      <button type="button" routerLink="/auth/register">Register</button>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/auth/components/login/login.component.css */\n.login-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  padding: 20px;\n}\n.login-card {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\nh2 {\n  text-align: center;\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 28px;\n  font-weight: 700;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\ninput {\n  padding: 14px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\ninput:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  outline: none;\n}\nbutton[type=submit] {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\nbutton[type=submit]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\nbutton[type=submit]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error {\n  color: var(--danger);\n  text-align: center;\n  font-size: 14px;\n  padding: 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n}\n.register-footer {\n  margin-top: 24px;\n  text-align: center;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.register-footer span {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.register-footer button {\n  padding: 12px 24px;\n  background: white;\n  color: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.register-footer button:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/components/login/login.component.ts", lineNumber: 19 });
})();

// src/app/auth/components/register-patient/register-patient.component.ts
function RegisterPatientComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, " Name must be at least 7 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterPatientComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function RegisterPatientComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, " Password must be 12+ characters with uppercase, lowercase and number ");
    \u0275\u0275elementEnd();
  }
}
function RegisterPatientComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, " Phone must be 10 digits ");
    \u0275\u0275elementEnd();
  }
}
function RegisterPatientComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var RegisterPatientComponent = class _RegisterPatientComponent {
  fb;
  auth;
  router;
  loading = false;
  error;
  form;
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      fullName: this.fb.nonNullable.control("", { validators: [Validators.required, Validators.minLength(7)] }),
      email: this.fb.nonNullable.control("", { validators: [Validators.required, Validators.email] }),
      password: this.fb.nonNullable.control("", { validators: [Validators.required, Validators.minLength(12), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{12,}$/)] }),
      phoneNumber: this.fb.nonNullable.control("", { validators: [Validators.pattern(/^[0-9]{10}$/)] }),
      gender: this.fb.nonNullable.control(""),
      role: this.fb.nonNullable.control(UserRole.Patient, { validators: [Validators.required] })
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = void 0;
    const raw = this.form.getRawValue();
    const payload = __spreadProps(__spreadValues({}, raw), {
      phoneNumber: raw.phoneNumber.trim() ? raw.phoneNumber : void 0,
      gender: raw.gender.trim() ? raw.gender : void 0
    });
    this.auth.register(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/auth/login"]);
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.message) {
          this.error = err.error.message;
        } else if (typeof err?.error === "string") {
          this.error = err.error;
        } else if (err?.statusText) {
          this.error = err.statusText;
        } else {
          this.error = "Registration failed.";
        }
        console.error("Registration error:", err);
      }
    });
  }
  static \u0275fac = function RegisterPatientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterPatientComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterPatientComponent, selectors: [["app-register-patient"]], decls: 30, vars: 7, consts: [[1, "register-wrapper"], [1, "register-card"], [3, "ngSubmit", "formGroup"], ["formControlName", "fullName", "placeholder", "Full name"], ["class", "validation-error", 4, "ngIf"], ["formControlName", "email", "placeholder", "Email"], ["formControlName", "password", "type", "password", "placeholder", "Password"], ["formControlName", "phoneNumber", "placeholder", "Phone (10 digits)"], ["formControlName", "gender"], ["value", ""], ["type", "submit", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "login-footer"], ["type", "button", "routerLink", "/auth/login"], [1, "validation-error"], [1, "error"]], template: function RegisterPatientComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Patient Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegisterPatientComponent_Template_form_ngSubmit_4_listener() {
        return ctx.submit();
      });
      \u0275\u0275element(5, "input", 3);
      \u0275\u0275template(6, RegisterPatientComponent_span_6_Template, 2, 0, "span", 4);
      \u0275\u0275element(7, "input", 5);
      \u0275\u0275template(8, RegisterPatientComponent_span_8_Template, 2, 0, "span", 4);
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275template(10, RegisterPatientComponent_span_10_Template, 2, 0, "span", 4);
      \u0275\u0275element(11, "input", 7);
      \u0275\u0275template(12, RegisterPatientComponent_span_12_Template, 2, 0, "span", 4);
      \u0275\u0275elementStart(13, "select", 8)(14, "option", 9);
      \u0275\u0275text(15, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option");
      \u0275\u0275text(17, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option");
      \u0275\u0275text(19, "Female");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option");
      \u0275\u0275text(21, "Other");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 10);
      \u0275\u0275text(23, "Create account");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, RegisterPatientComponent_p_24_Template, 2, 1, "p", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 12)(26, "span");
      \u0275\u0275text(27, "Already have an account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 13);
      \u0275\u0275text(29, "Sign In");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.form.get("fullName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("fullName")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.form.get("phoneNumber")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("phoneNumber")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.register-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  padding: 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 28px;\n  font-weight: 700;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  outline: none;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  margin-top: 8px;\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  text-align: center;\n  font-size: 14px;\n  padding: 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n}\n.login-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.login-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: white;\n  color: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=register-patient.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterPatientComponent, [{
    type: Component,
    args: [{ selector: "app-register-patient", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="register-wrapper">
  <div class="register-card">
    <h2>Patient Registration</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="fullName" placeholder="Full name" />
      <span class="validation-error" *ngIf="form.get('fullName')?.invalid && form.get('fullName')?.touched">
        Name must be at least 7 characters
      </span>
      <input formControlName="email" placeholder="Email" />
      <span class="validation-error" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
        Enter a valid email
      </span>
      <input formControlName="password" type="password" placeholder="Password" />
      <span class="validation-error" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
        Password must be 12+ characters with uppercase, lowercase and number
      </span>
      <input formControlName="phoneNumber" placeholder="Phone (10 digits)" />
      <span class="validation-error" *ngIf="form.get('phoneNumber')?.invalid && form.get('phoneNumber')?.touched">
        Phone must be 10 digits
      </span>
      <select formControlName="gender">
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <button type="submit" [disabled]="loading">Create account</button>
      <p *ngIf="error" class="error">{{ error }}</p>
    </form>
    <div class="login-footer">
      <span>Already have an account?</span>
      <button type="button" routerLink="/auth/login">Sign In</button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/auth/components/register-patient/register-patient.component.css */\n.register-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  padding: 20px;\n}\n.register-card {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\nh2 {\n  text-align: center;\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 28px;\n  font-weight: 700;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\ninput,\nselect {\n  padding: 14px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\ninput:focus,\nselect:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  outline: none;\n}\nbutton {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  margin-top: 8px;\n}\nbutton:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error {\n  color: var(--danger);\n  text-align: center;\n  font-size: 14px;\n  padding: 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n}\n.login-footer {\n  margin-top: 24px;\n  text-align: center;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.login-footer span {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.login-footer button {\n  padding: 12px 24px;\n  background: white;\n  color: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.login-footer button:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=register-patient.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterPatientComponent, { className: "RegisterPatientComponent", filePath: "src/app/auth/components/register-patient/register-patient.component.ts", lineNumber: 26 });
})();

// src/app/auth/components/register-professional/register-professional.component.ts
function RegisterProfessionalComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("value", r_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1);
  }
}
function RegisterProfessionalComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Name must be at least 7 characters ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Password must be 12+ characters with uppercase, lowercase and number ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Phone must be 10 digits ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_input_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 20);
  }
}
function RegisterProfessionalComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Specialization is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_input_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 21);
  }
}
function RegisterProfessionalComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Qualification is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_input_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 22);
  }
}
function RegisterProfessionalComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Experience must be between 0-50 years ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_select_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 23)(1, "option", 24);
    \u0275\u0275text(2, "Select Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 25);
    \u0275\u0275text(4, "Reception");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 26);
    \u0275\u0275text(6, "Billing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 27);
    \u0275\u0275text(8, "Administration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 28);
    \u0275\u0275text(10, "Nursing");
    \u0275\u0275elementEnd()();
  }
}
function RegisterProfessionalComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " Department is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterProfessionalComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
var RegisterProfessionalComponent = class _RegisterProfessionalComponent {
  fb;
  auth;
  router;
  alertService;
  roles = [UserRole.Doctor, UserRole.Staff];
  loading = false;
  error;
  form;
  constructor(fb, auth, router, alertService) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      role: this.fb.nonNullable.control(UserRole.Doctor, { validators: [Validators.required] }),
      fullName: this.fb.nonNullable.control("", { validators: [Validators.required, Validators.minLength(7)] }),
      email: this.fb.nonNullable.control("", { validators: [Validators.required, Validators.email] }),
      password: this.fb.nonNullable.control("", { validators: [Validators.required, Validators.minLength(12), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{12,}$/)] }),
      phoneNumber: this.fb.nonNullable.control("", { validators: [Validators.pattern(/^[0-9]{10}$/)] }),
      specialization: this.fb.nonNullable.control(""),
      qualification: this.fb.nonNullable.control(""),
      experienceYears: this.fb.nonNullable.control(0),
      department: this.fb.nonNullable.control("")
    });
    this.form.get("role")?.valueChanges.subscribe((role) => {
      if (role === UserRole.Doctor) {
        this.form.get("specialization")?.setValidators([Validators.required, Validators.minLength(3)]);
        this.form.get("qualification")?.setValidators([Validators.required, Validators.minLength(2)]);
        this.form.get("experienceYears")?.setValidators([Validators.required, Validators.min(0), Validators.max(50)]);
        this.form.get("department")?.clearValidators();
      } else {
        this.form.get("specialization")?.clearValidators();
        this.form.get("qualification")?.clearValidators();
        this.form.get("experienceYears")?.clearValidators();
        this.form.get("department")?.setValidators([Validators.required]);
      }
      this.form.get("specialization")?.updateValueAndValidity();
      this.form.get("qualification")?.updateValueAndValidity();
      this.form.get("experienceYears")?.updateValueAndValidity();
      this.form.get("department")?.updateValueAndValidity();
    });
  }
  submit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    this.error = void 0;
    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading = false;
        this.alertService.show("Submitted. Your account will be reviewed by Admin.", "Success");
        this.router.navigate(["/auth/login"]);
      },
      error: (err) => {
        this.loading = false;
        if (err?.error?.message) {
          this.error = err.error.message;
        } else if (typeof err?.error === "string") {
          this.error = err.error;
        } else if (err?.statusText) {
          this.error = err.statusText;
        } else {
          this.error = "Registration failed.";
        }
        console.error("Registration error:", err);
      }
    });
  }
  static \u0275fac = function RegisterProfessionalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterProfessionalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterProfessionalComponent, selectors: [["app-register-professional"]], decls: 31, vars: 16, consts: [[1, "register-wrapper"], [1, "register-card"], [3, "ngSubmit", "formGroup"], ["formControlName", "role"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "fullName", "placeholder", "Full name"], ["class", "validation-error", 4, "ngIf"], ["formControlName", "email", "placeholder", "Email"], ["formControlName", "password", "type", "password", "placeholder", "Password"], ["formControlName", "phoneNumber", "placeholder", "Phone (10 digits)"], ["formControlName", "specialization", "placeholder", "Specialization", 4, "ngIf"], ["formControlName", "qualification", "placeholder", "Qualification", 4, "ngIf"], ["formControlName", "experienceYears", "type", "number", "placeholder", "Years of Experience", "min", "0", 4, "ngIf"], ["formControlName", "department", 4, "ngIf"], ["type", "submit", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "login-footer"], ["type", "button", "routerLink", "/auth/login"], [3, "value"], [1, "validation-error"], ["formControlName", "specialization", "placeholder", "Specialization"], ["formControlName", "qualification", "placeholder", "Qualification"], ["formControlName", "experienceYears", "type", "number", "placeholder", "Years of Experience", "min", "0"], ["formControlName", "department"], ["value", ""], ["value", "Reception"], ["value", "Billing"], ["value", "Administration"], ["value", "Nursing"], [1, "error"]], template: function RegisterProfessionalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Doctor/Staff Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegisterProfessionalComponent_Template_form_ngSubmit_4_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(5, "select", 3);
      \u0275\u0275template(6, RegisterProfessionalComponent_option_6_Template, 2, 2, "option", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 5);
      \u0275\u0275template(8, RegisterProfessionalComponent_span_8_Template, 2, 0, "span", 6);
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275template(10, RegisterProfessionalComponent_span_10_Template, 2, 0, "span", 6);
      \u0275\u0275element(11, "input", 8);
      \u0275\u0275template(12, RegisterProfessionalComponent_span_12_Template, 2, 0, "span", 6);
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275template(14, RegisterProfessionalComponent_span_14_Template, 2, 0, "span", 6)(15, RegisterProfessionalComponent_input_15_Template, 1, 0, "input", 10)(16, RegisterProfessionalComponent_span_16_Template, 2, 0, "span", 6)(17, RegisterProfessionalComponent_input_17_Template, 1, 0, "input", 11)(18, RegisterProfessionalComponent_span_18_Template, 2, 0, "span", 6)(19, RegisterProfessionalComponent_input_19_Template, 1, 0, "input", 12)(20, RegisterProfessionalComponent_span_20_Template, 2, 0, "span", 6)(21, RegisterProfessionalComponent_select_21_Template, 11, 0, "select", 13)(22, RegisterProfessionalComponent_span_22_Template, 2, 0, "span", 6);
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275text(24, "Submit for approval");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, RegisterProfessionalComponent_p_25_Template, 2, 1, "p", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16)(27, "span");
      \u0275\u0275text(28, "Already have an account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 17);
      \u0275\u0275text(30, "Sign In");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_12_0;
      let tmp_13_0;
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("fullName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("fullName")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("phoneNumber")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("phoneNumber")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.form.get("role")) == null ? null : tmp_6_0.value) === "Doctor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("role")) == null ? null : tmp_7_0.value) === "Doctor" && ((tmp_7_0 = ctx.form.get("specialization")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.form.get("specialization")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("role")) == null ? null : tmp_8_0.value) === "Doctor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("role")) == null ? null : tmp_9_0.value) === "Doctor" && ((tmp_9_0 = ctx.form.get("qualification")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.form.get("qualification")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.form.get("role")) == null ? null : tmp_10_0.value) === "Doctor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.form.get("role")) == null ? null : tmp_11_0.value) === "Doctor" && ((tmp_11_0 = ctx.form.get("experienceYears")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.form.get("experienceYears")) == null ? null : tmp_11_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.form.get("role")) == null ? null : tmp_12_0.value) === "Staff");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.form.get("role")) == null ? null : tmp_13_0.value) === "Staff" && ((tmp_13_0 = ctx.form.get("department")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.form.get("department")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.register-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  padding: 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 28px;\n  font-weight: 700;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\ninput[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  outline: none;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  margin-top: 8px;\n}\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  text-align: center;\n  font-size: 14px;\n  padding: 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n}\n.login-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.login-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: white;\n  color: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.login-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=register-professional.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterProfessionalComponent, [{
    type: Component,
    args: [{ selector: "app-register-professional", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="register-wrapper">\r
  <div class="register-card">\r
    <h2>Doctor/Staff Registration</h2>\r
    <form [formGroup]="form" (ngSubmit)="submit()">\r
      <select formControlName="role">\r
        <option *ngFor="let r of roles" [value]="r">{{ r }}</option>\r
      </select>\r
      <input formControlName="fullName" placeholder="Full name" />\r
      <span class="validation-error" *ngIf="form.get('fullName')?.invalid && form.get('fullName')?.touched">\r
        Name must be at least 7 characters\r
      </span>\r
      <input formControlName="email" placeholder="Email" />\r
      <span class="validation-error" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">\r
        Enter a valid email\r
      </span>\r
      <input formControlName="password" type="password" placeholder="Password" />\r
      <span class="validation-error" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">\r
        Password must be 12+ characters with uppercase, lowercase and number\r
      </span>\r
      <input formControlName="phoneNumber" placeholder="Phone (10 digits)" />\r
      <span class="validation-error" *ngIf="form.get('phoneNumber')?.invalid && form.get('phoneNumber')?.touched">\r
        Phone must be 10 digits\r
      </span>\r
      <input *ngIf="form.get('role')?.value === 'Doctor'" formControlName="specialization" placeholder="Specialization" />\r
      <span class="validation-error" *ngIf="form.get('role')?.value === 'Doctor' && form.get('specialization')?.invalid && form.get('specialization')?.touched">\r
        Specialization is required\r
      </span>\r
      <input *ngIf="form.get('role')?.value === 'Doctor'" formControlName="qualification" placeholder="Qualification" />\r
      <span class="validation-error" *ngIf="form.get('role')?.value === 'Doctor' && form.get('qualification')?.invalid && form.get('qualification')?.touched">\r
        Qualification is required\r
      </span>\r
      <input *ngIf="form.get('role')?.value === 'Doctor'" formControlName="experienceYears" type="number" placeholder="Years of Experience" min="0" />\r
      <span class="validation-error" *ngIf="form.get('role')?.value === 'Doctor' && form.get('experienceYears')?.invalid && form.get('experienceYears')?.touched">\r
        Experience must be between 0-50 years\r
      </span>\r
      <select *ngIf="form.get('role')?.value === 'Staff'" formControlName="department">\r
        <option value="">Select Department</option>\r
        <option value="Reception">Reception</option>\r
        <option value="Billing">Billing</option>\r
        <option value="Administration">Administration</option>\r
        <option value="Nursing">Nursing</option>\r
      </select>\r
      <span class="validation-error" *ngIf="form.get('role')?.value === 'Staff' && form.get('department')?.invalid && form.get('department')?.touched">\r
        Department is required\r
      </span>\r
      <button type="submit" [disabled]="loading">Submit for approval</button>\r
      <p *ngIf="error" class="error">{{ error }}</p>\r
    </form>\r
    <div class="login-footer">\r
      <span>Already have an account?</span>\r
      <button type="button" routerLink="/auth/login">Sign In</button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/components/register-professional/register-professional.component.css */\n.register-wrapper {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--background-color);\n  padding: 20px;\n}\n.register-card {\n  width: 100%;\n  max-width: 420px;\n  background: var(--card-bg);\n  padding: 40px;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\nh2 {\n  text-align: center;\n  margin-bottom: 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 28px;\n  font-weight: 700;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\ninput,\nselect {\n  padding: 14px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\ninput:focus,\nselect:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  outline: none;\n}\nbutton {\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  margin-top: 8px;\n}\nbutton:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error {\n  color: var(--danger);\n  text-align: center;\n  font-size: 14px;\n  padding: 12px;\n  background: #fee2e2;\n  border-radius: 8px;\n}\n.login-footer {\n  margin-top: 24px;\n  text-align: center;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.login-footer span {\n  display: block;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.login-footer button {\n  padding: 12px 24px;\n  background: white;\n  color: var(--primary-color);\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.login-footer button:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=register-professional.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterProfessionalComponent, { className: "RegisterProfessionalComponent", filePath: "src/app/auth/components/register-professional/register-professional.component.ts", lineNumber: 30 });
})();

// src/app/auth/auth-routing.module.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterPatientComponent },
  { path: "register/pro", component: RegisterProfessionalComponent }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    // ⬇️ import standalone components instead of declaring
    LoginComponent,
    RegisterPatientComponent,
    RegisterProfessionalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
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
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-L6M2IFEM.js.map
