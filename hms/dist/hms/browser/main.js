import {
  AlertService,
  AuthService,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpParams,
  MaxValidator,
  MinValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgSelectOption,
  NgStyle,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  Validators,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptorsFromDi,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3GA6IDBR.js";
import {
  Component,
  Injectable,
  __spreadProps,
  __spreadValues,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SACPETF5.js";

// src/app/shared/components/header/header.component.ts
function HeaderComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 5);
    \u0275\u0275text(2, "Register Staff/Doctor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function HeaderComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function HeaderComponent_ng_template_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(3, "Logout");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Role: ", ctx_r1.role);
  }
}
var HeaderComponent = class _HeaderComponent {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  isLoggedIn() {
    return this.auth.isLoggedIn;
  }
  get role() {
    return this.auth.role;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]).then(() => window.location.reload());
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 2, consts: [["logged", ""], [1, "navbar"], ["routerLink", "/", 1, "brand"], [1, "spacer"], [4, "ngIf", "ngIfElse"], ["type", "button", "routerLink", "/auth/register/pro", 1, "register-pro"], [1, "role"], [1, "logout", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 1)(1, "a", 2);
      \u0275\u0275text(2, "Karma Hospital");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275template(4, HeaderComponent_ng_container_4_Template, 3, 0, "ng-container", 4)(5, HeaderComponent_ng_template_5_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const logged_r3 = \u0275\u0275reference(6);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn())("ngIfElse", logged_r3);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n.brand[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 24px;\n  letter-spacing: -0.5px;\n  transition: transform 0.3s ease;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.register-pro[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-color);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.register-pro[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.role[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  font-weight: 600;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  font-size: 14px;\n}\n.logout[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid white;\n  padding: 8px 20px;\n  cursor: pointer;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.logout[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: var(--primary-color);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    flex-wrap: wrap;\n  }\n  .brand[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .role[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .register-pro[_ngcontent-%COMP%], \n   .logout[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 480px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .brand[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .register-pro[_ngcontent-%COMP%], \n   .logout[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule], template: '<nav class="navbar">\n  <a class="brand" routerLink="/">Karma Hospital</a>\n  <div class="spacer"></div>\n\n  <ng-container *ngIf="!isLoggedIn(); else logged">\n    <button type="button" class="register-pro" routerLink="/auth/register/pro">Register Staff/Doctor</button>\n  </ng-container>\n\n  <ng-template #logged>\n    <span class="role">Role: {{ role }}</span>\n    <button class="logout" (click)="logout()">Logout</button>\n  </ng-template>\n</nav>\n', styles: ["/* src/app/shared/components/header/header.component.css */\n.navbar {\n  display: flex;\n  align-items: center;\n  padding: 16px 32px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n.brand {\n  color: white;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 24px;\n  letter-spacing: -0.5px;\n  transition: transform 0.3s ease;\n}\n.brand:hover {\n  transform: scale(1.05);\n}\n.spacer {\n  flex: 1;\n}\n.register-pro {\n  background: white;\n  color: var(--primary-color);\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.register-pro:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.role {\n  margin-right: 16px;\n  font-weight: 600;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 20px;\n  font-size: 14px;\n}\n.logout {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid white;\n  padding: 8px 20px;\n  cursor: pointer;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.logout:hover {\n  background: white;\n  color: var(--primary-color);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .navbar {\n    padding: 12px 16px;\n    flex-wrap: wrap;\n  }\n  .brand {\n    font-size: 20px;\n  }\n  .role {\n    display: none;\n  }\n  .register-pro,\n  .logout {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 480px) {\n  .navbar {\n    padding: 10px 12px;\n  }\n  .brand {\n    font-size: 18px;\n  }\n  .register-pro,\n  .logout {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/components/header/header.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/custom-alert/custom-alert.component.ts
function CustomAlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function CustomAlertComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function CustomAlertComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 3);
    \u0275\u0275listener("click", function CustomAlertComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(7, "OK");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.alert.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.alert.message);
  }
}
var CustomAlertComponent = class _CustomAlertComponent {
  alertService;
  alert = null;
  constructor(alertService) {
    this.alertService = alertService;
    this.alertService.alert$.subscribe((alert2) => {
      this.alert = alert2;
    });
  }
  close() {
    this.alertService.close();
  }
  static \u0275fac = function CustomAlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomAlertComponent)(\u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomAlertComponent, selectors: [["app-custom-alert"]], decls: 1, vars: 1, consts: [["class", "custom-alert-overlay", 3, "click", 4, "ngIf"], [1, "custom-alert-overlay", 3, "click"], [1, "custom-alert-box", 3, "click"], [3, "click"]], template: function CustomAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CustomAlertComponent_div_0_Template, 8, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.alert);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomAlertComponent, [{
    type: Component,
    args: [{
      selector: "app-custom-alert",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div *ngIf="alert" class="custom-alert-overlay" (click)="close()">
      <div class="custom-alert-box" (click)="$event.stopPropagation()">
        <h3>{{ alert.title }}</h3>
        <p>{{ alert.message }}</p>
        <button (click)="close()">OK</button>
      </div>
    </div>
  `
    }]
  }], () => [{ type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomAlertComponent, { className: "CustomAlertComponent", filePath: "src/app/shared/components/custom-alert/custom-alert.component.ts", lineNumber: 19 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-custom-alert");
    }
  }, dependencies: [RouterOutlet, HeaderComponent, CustomAlertComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 24px auto;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, HeaderComponent, CustomAlertComponent], template: '<app-header></app-header>\r\n<main class="container">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<app-custom-alert></app-custom-alert>\r\n', styles: ["/* src/app/app.component.css */\n.container {\n  max-width: 960px;\n  margin: 24px auto;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    const token = localStorage.getItem("token");
    const cloned = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
    return next.handle(cloned);
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/app/core/guards/auth-guard.ts
var AuthGuard = class _AuthGuard {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (this.auth.isLoggedIn)
      return true;
    this.router.navigate(["/auth/login"]);
    return false;
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/core/guards/role.guard.ts
var RoleGuard = class _RoleGuard {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(route) {
    const requiredRoles = route.data["roles"];
    const userRole = this.auth.role;
    if (!userRole) {
      this.router.navigate(["/auth/login"]);
      return false;
    }
    if (requiredRoles && !requiredRoles.includes(userRole)) {
      this.router.navigate(["/unauthorized"]);
      return false;
    }
    return true;
  }
  static \u0275fac = function RoleGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleGuard, factory: _RoleGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/core/services/doctor.service.ts
var API_URL = "http://patientappointmentbooking.runasp.net/api/doctor";
var DoctorService = class _DoctorService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllDoctors() {
    return this.http.get(`${API_URL}`);
  }
  getDoctorById(id) {
    return this.http.get(`${API_URL}/${id}`);
  }
  createDoctor(dto) {
    return this.http.post(`${API_URL}`, dto);
  }
  updateDoctor(id, dto) {
    return this.http.put(`${API_URL}/${id}`, dto);
  }
  deleteDoctor(id) {
    return this.http.delete(`${API_URL}/${id}`);
  }
  getMyAppointments() {
    return this.http.get(`${API_URL}/me/appointments`);
  }
  getBillsByDoctor(doctorId) {
    return this.http.get(`${API_URL}/${doctorId}/bills`);
  }
  addRemarks(doctorId, appointmentId, remarks) {
    return this.http.put(`${API_URL}/${doctorId}/appointment/${appointmentId}/remarks`, JSON.stringify(remarks), {
      headers: { "Content-Type": "application/json" }
    });
  }
  markAsDone(doctorId, appointmentId, remarks) {
    console.log(`PUT ${API_URL}/${doctorId}/appointment/${appointmentId}/remarks`, remarks);
    return this.http.put(`${API_URL}/${doctorId}/appointment/${appointmentId}/remarks`, JSON.stringify(remarks), {
      headers: { "Content-Type": "application/json" }
    });
  }
  updateDoctorAvailability(doctorId, availability) {
    return this.http.put(`${API_URL}/${doctorId}`, { availabilityStatus: availability });
  }
  static \u0275fac = function DoctorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoctorService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DoctorService, factory: _DoctorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/appointment.service.ts
var API_URL2 = "http://patientappointmentbooking.runasp.net/api/appointment";
var AppointmentService = class _AppointmentService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllAppointments() {
    return this.http.get(`${API_URL2}`);
  }
  getAppointmentById(id) {
    return this.http.get(`${API_URL2}/${id}`);
  }
  getAppointmentsByPatient(patientId) {
    return this.http.get(`${API_URL2}/patient/${patientId}`);
  }
  getAppointmentsByDoctor(doctorId) {
    return this.http.get(`${API_URL2}/doctor/${doctorId}`);
  }
  getAvailableSlots(doctorId, date) {
    const params = new HttpParams().set("doctorId", String(doctorId)).set("date", typeof date === "string" ? date : date.toISOString());
    return this.http.get(`${API_URL2}/available-slots`, { params });
  }
  createAppointment(dto) {
    return this.http.post(`${API_URL2}`, dto);
  }
  updateAppointmentStatus(staffId, dto) {
    return this.http.put(`${API_URL2}/status/${staffId}`, dto);
  }
  deleteAppointment(id) {
    return this.http.delete(`${API_URL2}/${id}`);
  }
  static \u0275fac = function AppointmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppointmentService, factory: _AppointmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/bill.service.ts
var API_URL3 = "http://patientappointmentbooking.runasp.net/api/bill";
var BillService = class _BillService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllBills() {
    return this.http.get(`${API_URL3}`);
  }
  getMyBills() {
    return this.http.get(`${API_URL3}/my`);
  }
  getBillById(id) {
    return this.http.get(`${API_URL3}/${id}`);
  }
  getBillByAppointmentId(appointmentId) {
    return this.http.get(`${API_URL3}/appointment/${appointmentId}`);
  }
  generateBill(appointmentId, additionalCharges) {
    return this.http.post(`${API_URL3}/generate/${appointmentId}?additionalCharges=${additionalCharges || 0}`, {});
  }
  updatePayment(dto) {
    return this.http.put(`${API_URL3}/payment`, dto);
  }
  deleteBill(id) {
    return this.http.delete(`${API_URL3}/${id}`);
  }
  downloadBill(appointmentId) {
    return this.http.get(`${API_URL3}/download/${appointmentId}`, { responseType: "blob" });
  }
  static \u0275fac = function BillService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BillService, factory: _BillService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/storage.service.ts
var StorageService = class _StorageService {
  http;
  apiUrl = "http://patientappointmentbooking.runasp.net/api/Users";
  constructor(http) {
    this.http = http;
  }
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }
  remove(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
  getUserId() {
    const id = localStorage.getItem("userId");
    return id ? parseInt(id, 10) : null;
  }
  getStaffId() {
    const id = localStorage.getItem("staffId");
    return id ? parseInt(id, 10) : null;
  }
  getDoctorId() {
    const id = localStorage.getItem("doctorId");
    return id ? parseInt(id, 10) : null;
  }
  getUser() {
    const userId = this.getUserId();
    if (!userId)
      throw new Error("User ID not found");
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
  updateUser(userId, data) {
    console.log(`PUT ${this.apiUrl}/${userId}`, data);
    return this.http.put(`${this.apiUrl}/${userId}`, data);
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/patient/patient-dashboard.component.ts
function PatientDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function PatientDashboardComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Loading doctors...");
    \u0275\u0275elementEnd();
  }
}
function PatientDashboardComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "No doctors are available right now. Please check again later.");
    \u0275\u0275elementEnd();
  }
}
function PatientDashboardComponent_div_12_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_12_div_5_div_1_Template_div_click_0_listener() {
      const doctor_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onDoctorSelected(doctor_r3));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6, "Name -");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "span", 23);
    \u0275\u0275text(11, "Specialization -");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_12_div_5_div_1_Template_button_click_14_listener($event) {
      const doctor_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.onDoctorSelected(doctor_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(15, "span", 26);
    \u0275\u0275text(16, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Book Appointment ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doctor_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r0.selectedDoctor == null ? null : ctx_r0.selectedDoctor.doctorId) === doctor_r3.doctorId);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://ui-avatars.com/api/?name=" + ctx_r0.doctorName(doctor_r3) + "&size=120&background=667eea&color=fff&bold=true", \u0275\u0275sanitizeUrl)("alt", ctx_r0.doctorName(doctor_r3));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.doctorName(doctor_r3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(doctor_r3.specialization || "General");
  }
}
function PatientDashboardComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, PatientDashboardComponent_div_12_div_5_div_1_Template, 18, 6, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.doctors);
  }
}
function PatientDashboardComponent_div_12_div_6_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    \u0275\u0275property("value", slot_r5.startTime);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r5.display);
  }
}
function PatientDashboardComponent_div_12_div_6_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, "Loading slots...");
    \u0275\u0275elementEnd();
  }
}
function PatientDashboardComponent_div_12_div_6_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, "No slots available. Please choose another date.");
    \u0275\u0275elementEnd();
  }
}
function PatientDashboardComponent_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 29)(5, "span", 30);
    \u0275\u0275text(6, "Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 29)(10, "span", 30);
    \u0275\u0275text(11, "Consultation Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "form", 32);
    \u0275\u0275listener("ngSubmit", function PatientDashboardComponent_div_12_div_6_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bookAppointment());
    });
    \u0275\u0275elementStart(15, "div", 33)(16, "label");
    \u0275\u0275text(17, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 34);
    \u0275\u0275listener("change", function PatientDashboardComponent_div_12_div_6_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDateChanged($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "label");
    \u0275\u0275text(21, "Time Slot:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 35)(23, "option", 36);
    \u0275\u0275text(24, "Select a time slot");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, PatientDashboardComponent_div_12_div_6_option_25_Template, 2, 2, "option", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, PatientDashboardComponent_div_12_div_6_div_26_Template, 2, 0, "div", 38)(27, PatientDashboardComponent_div_12_div_6_div_27_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 40)(29, "button", 41);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 42);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_12_div_6_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startBooking());
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Book Appointment with ", ctx_r0.doctorName(ctx_r0.selectedDoctor));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedDoctor.specialization);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.selectedDoctor.consultationFee);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.bookingForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", ctx_r0.minDate);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.availableSlots);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.slotsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.slotsLoading && ctx_r0.slotsLoaded && !ctx_r0.availableSlots.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.bookingForm.invalid || ctx_r0.loading || ctx_r0.slotsLoading || ((tmp_10_0 = ctx_r0.bookingForm.get("timeSlot")) == null ? null : tmp_10_0.disabled));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Booking..." : "Confirm Booking", " ");
  }
}
function PatientDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "Available Doctors");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PatientDashboardComponent_div_12_div_3_Template, 2, 0, "div", 10)(4, PatientDashboardComponent_div_12_div_4_Template, 2, 0, "div", 11)(5, PatientDashboardComponent_div_12_div_5_Template, 2, 1, "div", 12)(6, PatientDashboardComponent_div_12_div_6_Template, 33, 10, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.doctors.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.doctors.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedDoctor);
  }
}
function PatientDashboardComponent_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 48);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No appointments yet");
    \u0275\u0275elementEnd()();
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Doctor Availability Update:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apt_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Dr. ", apt_r7.doctorName, " is currently ", ctx_r0.getAvailabilityAlert(apt_r7.appointmentId), " ");
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const bill_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", bill_r8.totalAmount, " ");
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_ng_template_43_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const fee_r9 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9", fee_r9, " ");
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PatientDashboardComponent_div_13_div_4_ng_container_1_ng_template_43_ng_container_0_Template, 2, 1, "ng-container", 61);
  }
  if (rf & 2) {
    const apt_r7 = \u0275\u0275nextContext().$implicit;
    const noBill_r10 = \u0275\u0275reference(46);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.getDoctorFee(apt_r7.doctorId))("ngIfElse", noBill_r10);
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "-");
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_4_ng_container_1_button_52_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const apt_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.downloadBill(apt_r7.appointmentId);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u{1F4E5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Download Bill ");
    \u0275\u0275elementEnd();
  }
}
function PatientDashboardComponent_div_13_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PatientDashboardComponent_div_13_div_4_ng_container_1_div_1_Template, 6, 2, "div", 51);
    \u0275\u0275elementStart(2, "div", 52);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_4_ng_container_1_Template_div_click_2_listener() {
      const apt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewAppointmentDetails(apt_r7));
    });
    \u0275\u0275elementStart(3, "div", 53)(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56)(9, "div", 57)(10, "div", 58)(11, "span", 59);
    \u0275\u0275text(12, "\u{1F468}\u200D\u2695\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "div", 23);
    \u0275\u0275text(15, "Doctor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 60);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 58)(19, "span", 59);
    \u0275\u0275text(20, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "div", 23);
    \u0275\u0275text(23, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 60);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 58)(28, "span", 59);
    \u0275\u0275text(29, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "div", 23);
    \u0275\u0275text(32, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 60);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 58)(36, "span", 59);
    \u0275\u0275text(37, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "div", 23);
    \u0275\u0275text(40, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 60);
    \u0275\u0275template(42, PatientDashboardComponent_div_13_div_4_ng_container_1_ng_container_42_Template, 2, 1, "ng-container", 61)(43, PatientDashboardComponent_div_13_div_4_ng_container_1_ng_template_43_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(45, PatientDashboardComponent_div_13_div_4_ng_container_1_ng_template_45_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 62)(48, "button", 63);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_4_ng_container_1_Template_button_click_48_listener($event) {
      const apt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.viewAppointmentDetails(apt_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, PatientDashboardComponent_div_13_div_4_ng_container_1_button_52_Template, 4, 0, "button", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const apt_r7 = ctx.$implicit;
    const showFee_r12 = \u0275\u0275reference(44);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getAvailabilityAlert(apt_r7.appointmentId));
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", (ctx_r0.selectedAppointment == null ? null : ctx_r0.selectedAppointment.appointmentId) === apt_r7.appointmentId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Appointment #", apt_r7.appointmentId);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.statusClass(apt_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(apt_r7.statusText);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(apt_r7.doctorName);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 13, apt_r7.appointmentDate, "MMM d, y"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(apt_r7.timeSlotDisplay || apt_r7.timeSlot);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.billFor(apt_r7.appointmentId))("ngIfElse", showFee_r12);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.billFor(apt_r7.appointmentId) && ctx_r0.isCompleted(apt_r7));
  }
}
function PatientDashboardComponent_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, PatientDashboardComponent_div_13_div_4_ng_container_1_Template, 53, 16, "ng-container", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.appointments);
  }
}
function PatientDashboardComponent_div_13_div_5_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "\u{1FA7A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 77);
    \u0275\u0275text(5, "Symptoms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const appointment_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(appointment_r14.symptoms);
  }
}
function PatientDashboardComponent_div_13_div_5_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 77);
    \u0275\u0275text(5, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const appointment_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(appointment_r14.remarks);
  }
}
function PatientDashboardComponent_div_13_div_5_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "h4");
    \u0275\u0275text(2, "\u{1F4B0} Bill Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85)(4, "div", 86)(5, "span", 87);
    \u0275\u0275text(6, "Bill ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 88);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 86)(10, "span", 87);
    \u0275\u0275text(11, "Total Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 89);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const bill_r15 = ctx.ngIf;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(bill_r15.billId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", bill_r15.totalAmount);
  }
}
function PatientDashboardComponent_div_13_div_5_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_5_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const appointment_r14 = \u0275\u0275nextContext().ngIf;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadBill(appointment_r14.appointmentId));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u{1F4E5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Download Bill ");
    \u0275\u0275elementEnd();
  }
}
function PatientDashboardComponent_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeAppointmentDetails());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "div")(4, "h3");
    \u0275\u0275text(5, "Appointment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 72);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeAppointmentDetails());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 73)(11, "div", 74)(12, "div", 75)(13, "span", 76);
    \u0275\u0275text(14, "\u{1F468}\u200D\u2695\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "div", 77);
    \u0275\u0275text(17, "Doctor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 78);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 75)(21, "span", 76);
    \u0275\u0275text(22, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "div", 77);
    \u0275\u0275text(25, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 78);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 75)(30, "span", 76);
    \u0275\u0275text(31, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "div", 77);
    \u0275\u0275text(34, "Time Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 78);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 75)(38, "span", 76);
    \u0275\u0275text(39, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "div", 77);
    \u0275\u0275text(42, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div")(44, "span", 55);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(46, PatientDashboardComponent_div_13_div_5_div_46_Template, 8, 1, "div", 79)(47, PatientDashboardComponent_div_13_div_5_div_47_Template, 8, 1, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, PatientDashboardComponent_div_13_div_5_div_48_Template, 14, 2, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 81);
    \u0275\u0275template(50, PatientDashboardComponent_div_13_div_5_button_50_Template, 4, 0, "button", 82);
    \u0275\u0275elementStart(51, "button", 83);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_13_div_5_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeAppointmentDetails());
    });
    \u0275\u0275text(52, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const appointment_r14 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("ID: #", appointment_r14.appointmentId);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(appointment_r14.doctorName || "N/A");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 11, appointment_r14.appointmentDate, "fullDate"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(appointment_r14.timeSlotDisplay || appointment_r14.timeSlot || "N/A");
    \u0275\u0275advance(8);
    \u0275\u0275classMap(ctx_r0.statusClass(appointment_r14));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(appointment_r14.statusText || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appointment_r14.symptoms);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appointment_r14.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.billFor(appointment_r14.appointmentId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.billFor(appointment_r14.appointmentId) && ctx_r0.isCompleted(appointment_r14));
  }
}
function PatientDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "My Appointments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PatientDashboardComponent_div_13_div_3_Template, 5, 0, "div", 11)(4, PatientDashboardComponent_div_13_div_4_Template, 2, 1, "div", 46)(5, PatientDashboardComponent_div_13_div_5_Template, 53, 14, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.appointments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appointments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAppointment);
  }
}
function PatientDashboardComponent_div_14_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "span", 103);
    \u0275\u0275text(3, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 102)(7, "span", 103);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 105);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 106);
    \u0275\u0275text(12, "(Read-only)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 102)(14, "span", 103);
    \u0275\u0275text(15, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 104);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 102)(19, "span", 103);
    \u0275\u0275text(20, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 105);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 106);
    \u0275\u0275text(24, "(Read-only)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 107);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_14_div_3_div_11_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleEditMode());
    });
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Edit Profile ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.userProfile.fullName || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.userProfile.email || "-");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.userProfile.phoneNumber || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.userProfile.gender || "-");
  }
}
function PatientDashboardComponent_div_14_div_3_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 108);
    \u0275\u0275listener("ngSubmit", function PatientDashboardComponent_div_14_div_3_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateProfile());
    });
    \u0275\u0275elementStart(1, "div", 33)(2, "label");
    \u0275\u0275text(3, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "label");
    \u0275\u0275text(7, "Email (Read-only)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 33)(10, "label");
    \u0275\u0275text(11, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 33)(14, "label");
    \u0275\u0275text(15, "Gender (Read-only)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 40)(18, "button", 113);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 114);
    \u0275\u0275listener("click", function PatientDashboardComponent_div_14_div_3_form_12_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleEditMode());
    });
    \u0275\u0275text(21, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.userProfile.email);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r0.userProfile.gender);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "\u{1F4BE} Saving..." : "\u{1F4BE} Save Changes", " ");
  }
}
function PatientDashboardComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "div", 95);
    \u0275\u0275element(4, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 96)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 97);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 98);
    \u0275\u0275template(11, PatientDashboardComponent_div_14_div_3_div_11_Template, 29, 4, "div", 99)(12, PatientDashboardComponent_div_14_div_3_form_12_Template, 22, 5, "form", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", "https://ui-avatars.com/api/?name=" + ctx_r0.userProfile.fullName + "&size=120&background=667eea&color=fff&bold=true", \u0275\u0275sanitizeUrl)("alt", ctx_r0.userProfile.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userProfile.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.userProfile.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.editMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editMode);
  }
}
function PatientDashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2");
    \u0275\u0275text(2, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PatientDashboardComponent_div_14_div_3_Template, 13, 6, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.userProfile);
  }
}
var PatientDashboardComponent = class _PatientDashboardComponent {
  doctorService;
  appointmentService;
  billService;
  fb;
  storage;
  alertService;
  activeTab = "doctors";
  doctors = [];
  appointments = [];
  bills = [];
  loading = false;
  error;
  bookingForm;
  selectedDoctor = null;
  availableSlots = [];
  slotsLoading = false;
  slotsLoaded = false;
  selectedAppointment = null;
  minDate = "";
  availabilityAlerts = /* @__PURE__ */ new Map();
  profileForm;
  userProfile = null;
  editMode = false;
  constructor(doctorService, appointmentService, billService, fb, storage, alertService) {
    this.doctorService = doctorService;
    this.appointmentService = appointmentService;
    this.billService = billService;
    this.fb = fb;
    this.storage = storage;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.setMinDate();
    this.initForm();
    this.loadDoctors();
    this.loadAppointments();
    this.loadBills();
    this.loadUserProfile();
  }
  setMinDate() {
    const today = /* @__PURE__ */ new Date();
    this.minDate = today.toISOString().split("T")[0];
  }
  initForm() {
    this.bookingForm = this.fb.group({
      doctorId: ["", Validators.required],
      appointmentDate: ["", Validators.required],
      timeSlot: [{ value: "", disabled: true }, Validators.required]
    });
    this.profileForm = this.fb.group({
      fullName: ["", Validators.required],
      phoneNumber: [""]
    });
  }
  loadDoctors() {
    this.loading = true;
    this.error = void 0;
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
        this.loading = false;
        this.checkDoctorAvailability();
      },
      error: () => {
        this.error = "Failed to load doctors";
        this.loading = false;
      }
    });
  }
  doctorName(doctor) {
    if (!doctor)
      return "Doctor";
    return doctor.user?.fullName || doctor.fullName || doctor.name || `Doctor ${doctor.doctorId}`;
  }
  startBooking() {
    this.activeTab = "doctors";
    this.selectedDoctor = null;
    this.availableSlots = [];
    this.slotsLoaded = false;
    this.selectedAppointment = null;
    this.error = void 0;
    this.bookingForm.reset({
      doctorId: "",
      appointmentDate: "",
      timeSlot: ""
    });
    this.bookingForm.get("timeSlot")?.disable();
  }
  viewAppointmentDetails(appointment) {
    this.selectedAppointment = this.appointments.find((a) => a.appointmentId === appointment.appointmentId) ?? appointment;
  }
  closeAppointmentDetails() {
    this.selectedAppointment = null;
  }
  loadAppointments() {
    const userId = this.storage.getUserId();
    if (!userId)
      return;
    this.appointmentService.getAppointmentsByPatient(userId).subscribe({
      next: (data) => {
        console.log("Raw API Response:", JSON.stringify(data, null, 2));
        const statusMap = { 1: "Pending", 2: "Approved", 3: "Rejected", 4: "Completed", 5: "Done" };
        this.appointments = data.map((apt) => {
          const statusValue = apt.status || apt.Status;
          const statusText = typeof statusValue === "number" ? statusMap[statusValue] : apt.statusText || apt.StatusText || statusValue || "Pending";
          const timeSlotDisplay = apt.timeSlotDisplay || apt.TimeSlotDisplay || apt.timeSlot || apt.TimeSlot || "Not Set";
          const timeSlot = apt.timeSlot || apt.TimeSlot || "";
          console.log(`Appointment ${apt.appointmentId || apt.AppointmentId}: timeSlot='${timeSlot}', timeSlotDisplay='${timeSlotDisplay}'`);
          return {
            appointmentId: apt.appointmentId || apt.AppointmentId,
            patientId: apt.patientId || apt.PatientId,
            doctorId: apt.doctorId || apt.DoctorId,
            patientName: apt.patientName || apt.PatientName || "",
            doctorName: apt.doctorName || apt.DoctorName || "",
            appointmentDate: apt.appointmentDate || apt.AppointmentDate,
            slotTime: apt.slotTime || apt.SlotTime || "",
            timeSlot,
            timeSlotDisplay,
            status: statusText,
            statusText,
            symptoms: apt.symptoms || apt.Symptoms,
            remarks: apt.remarks || apt.Remarks
          };
        });
        console.log("Normalized appointments:", this.appointments);
        if (this.selectedAppointment) {
          const updated = this.appointments.find((a) => a.appointmentId === this.selectedAppointment?.appointmentId);
          this.selectedAppointment = updated ?? null;
        }
        this.checkDoctorAvailability();
      },
      error: (err) => {
        console.error("Error loading appointments:", err);
        this.error = "Failed to load appointments";
      }
    });
  }
  onDoctorSelected(doctor) {
    this.selectedDoctor = doctor;
    this.availableSlots = [];
    this.slotsLoaded = false;
    this.error = void 0;
    this.bookingForm.patchValue({
      doctorId: String(doctor.doctorId),
      appointmentDate: "",
      timeSlot: ""
    });
    this.bookingForm.get("timeSlot")?.disable();
  }
  onDateChanged(date) {
    if (this.bookingForm) {
      this.bookingForm.patchValue({ timeSlot: "" });
      this.bookingForm.get("timeSlot")?.disable();
    }
    if (this.selectedDoctor && date) {
      this.slotsLoading = true;
      this.slotsLoaded = false;
      this.availableSlots = [];
      this.appointmentService.getAvailableSlots(this.selectedDoctor.doctorId, date).subscribe({
        next: (slots) => {
          let filteredSlots = slots.filter((slot) => slot.isAvailable);
          const selectedDate = new Date(date);
          const today = /* @__PURE__ */ new Date();
          if (selectedDate.toDateString() === today.toDateString()) {
            const currentHour = today.getHours();
            const currentMinute = today.getMinutes();
            const currentTimeInMinutes = currentHour * 60 + currentMinute;
            filteredSlots = filteredSlots.filter((slot) => {
              const [hours, minutes] = slot.startTime.split(":").map(Number);
              const slotTimeInMinutes = hours * 60 + minutes;
              return slotTimeInMinutes > currentTimeInMinutes;
            });
          }
          this.availableSlots = filteredSlots;
          this.slotsLoading = false;
          this.slotsLoaded = true;
          if (this.availableSlots.length > 0) {
            this.bookingForm.get("timeSlot")?.enable();
          }
        },
        error: () => {
          this.error = "Failed to load available slots";
          this.slotsLoading = false;
          this.slotsLoaded = true;
          this.bookingForm.get("timeSlot")?.disable();
        }
      });
    } else {
      this.availableSlots = [];
      this.slotsLoaded = false;
      this.bookingForm.get("timeSlot")?.disable();
    }
  }
  bookAppointment() {
    if (this.bookingForm.invalid)
      return;
    const userId = this.storage.getUserId();
    if (!userId) {
      this.error = "User not found";
      return;
    }
    const { doctorId, appointmentDate, timeSlot } = this.bookingForm.value;
    if (!doctorId || !appointmentDate || !timeSlot)
      return;
    const [hours, minutes] = timeSlot.split(":").map(Number);
    const slotTimeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
    const appointment = {
      patientId: userId,
      doctorId: Number(doctorId),
      appointmentDate: new Date(appointmentDate),
      slotTime: slotTimeString
    };
    console.log("Booking appointment with data:", appointment);
    this.loading = true;
    this.error = void 0;
    this.appointmentService.createAppointment(appointment).subscribe({
      next: (response) => {
        console.log("Appointment created successfully:", response);
        this.alertService.show("Appointment Booked Successfully, You will get Notify in your account", "Success");
        this.bookingForm.reset({
          doctorId: "",
          appointmentDate: "",
          timeSlot: ""
        });
        this.bookingForm.get("timeSlot")?.disable();
        this.selectedDoctor = null;
        this.availableSlots = [];
        this.slotsLoaded = false;
        this.selectedAppointment = null;
        this.activeTab = "appointments";
        setTimeout(() => this.loadAppointments(), 500);
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to book appointment";
        this.loading = false;
      }
    });
  }
  statusLabel(appointment) {
    if (!appointment)
      return "";
    return appointment.statusText || "";
  }
  statusClass(appointment) {
    const status = appointment?.statusText || "";
    return status ? status.toLowerCase() : "";
  }
  loadBills() {
    const userId = this.storage.getUserId();
    if (!userId)
      return;
    this.billService.getMyBills().subscribe({
      next: (data) => {
        this.bills = data;
      },
      error: () => {
        console.error("Failed to load bills");
      }
    });
  }
  billFor(appointmentId) {
    return this.bills.find((b) => b.appointmentId === appointmentId) ?? null;
  }
  isCompleted(appointment) {
    return appointment?.statusText === "Completed" || appointment?.status === "Completed";
  }
  downloadBill(appointmentId) {
    this.billService.downloadBill(appointmentId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Bill_${appointmentId}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => {
        this.error = "Failed to download bill";
      }
    });
  }
  getDoctorFee(doctorId) {
    const doctor = this.doctors.find((d) => d.doctorId === doctorId);
    return doctor?.consultationFee ?? null;
  }
  checkDoctorAvailability() {
    this.availabilityAlerts.clear();
    const upcomingAppointments = this.appointments.filter((apt) => apt.statusText === "Pending" || apt.statusText === "Approved");
    upcomingAppointments.forEach((apt) => {
      const doctor = this.doctors.find((d) => d.doctorId === apt.doctorId);
      if (doctor && doctor.availability && doctor.availability !== "Available") {
        this.availabilityAlerts.set(apt.appointmentId, doctor.availability);
      }
    });
  }
  getAvailabilityAlert(appointmentId) {
    return this.availabilityAlerts.get(appointmentId) || null;
  }
  loadUserProfile() {
    const userId = this.storage.getUserId();
    if (!userId)
      return;
    this.storage.getUser().subscribe({
      next: (user) => {
        this.userProfile = user;
        this.profileForm.patchValue({
          fullName: user.fullName || "",
          phoneNumber: user.phoneNumber || ""
        });
      },
      error: () => {
        this.error = "Failed to load profile";
      }
    });
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.loadUserProfile();
    }
  }
  updateProfile() {
    if (this.profileForm.invalid) {
      this.error = "Please fill all required fields";
      return;
    }
    const userId = this.storage.getUserId();
    if (!userId) {
      this.error = "User ID not found";
      return;
    }
    const updateData = {
      fullName: this.profileForm.get("fullName")?.value || null,
      phoneNumber: this.profileForm.get("phoneNumber")?.value || null
    };
    this.loading = true;
    this.error = void 0;
    this.storage.updateUser(userId, updateData).subscribe({
      next: (response) => {
        console.log("Update Response:", response);
        this.userProfile = response;
        this.editMode = false;
        this.alertService.show("Profile updated successfully!", "Success");
        this.loading = false;
      },
      error: (err) => {
        console.error("Update Error:", err);
        const errorMsg = err?.error?.message || err?.message || "Failed to update profile";
        this.error = errorMsg;
        this.alertService.show("Error: " + errorMsg, "Error");
        this.loading = false;
      }
    });
  }
  static \u0275fac = function PatientDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientDashboardComponent)(\u0275\u0275directiveInject(DoctorService), \u0275\u0275directiveInject(AppointmentService), \u0275\u0275directiveInject(BillService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientDashboardComponent, selectors: [["app-patient-dashboard"]], decls: 15, vars: 10, consts: [["showFee", ""], ["noBill", ""], [1, "dashboard-container"], [1, "dashboard-header"], [1, "tabs"], [3, "click"], ["class", "error-message", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "error-message"], [1, "tab-content"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "doctors-grid", 4, "ngIf"], ["class", "booking-form", 4, "ngIf"], [1, "loading"], [1, "empty-state"], [1, "doctors-grid"], ["class", "doctor-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "doctor-card", 3, "click"], [1, "doctor-image"], [3, "src", "alt"], [1, "doctor-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], ["type", "button", 1, "btn-book", 3, "click"], [1, "btn-icon"], [1, "booking-form"], [1, "selected-doctor-info"], [1, "profile-row"], [1, "profile-label"], [1, "profile-value"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "date", "formControlName", "appointmentDate", "required", "", 3, "change", "min"], ["formControlName", "timeSlot", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "slot-info", 4, "ngIf"], ["class", "slot-info empty", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", 1, "btn-secondary", 3, "click"], [3, "value"], [1, "slot-info"], [1, "slot-info", "empty"], ["class", "appointments-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "empty-icon"], [1, "appointments-grid"], [4, "ngFor", "ngForOf"], ["class", "appointment-alert-banner", 4, "ngIf"], [1, "appointment-card", 3, "click"], [1, "appointment-header"], [1, "appointment-id"], [1, "status-badge"], [1, "appointment-body"], [1, "appointment-info"], [1, "info-item"], [1, "info-icon"], [1, "info-text"], [4, "ngIf", "ngIfElse"], [1, "appointment-actions"], [1, "btn-view", 3, "click"], ["class", "btn-download", 3, "click", 4, "ngIf"], [1, "appointment-alert-banner"], [1, "alert-icon"], [1, "btn-download", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "appointment-modal", 3, "click"], [1, "modal-header"], [1, "modal-subtitle"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "details-grid"], [1, "detail-item"], [1, "detail-icon"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], ["class", "bill-section", 4, "ngIf"], [1, "modal-footer"], ["class", "btn-download-modal", 3, "click", 4, "ngIf"], [1, "btn-close-modal", 3, "click"], [1, "bill-section"], [1, "bill-summary"], [1, "bill-item"], [1, "bill-label"], [1, "bill-value"], [1, "bill-value", "amount"], [1, "btn-download-modal", 3, "click"], ["class", "profile-container", 4, "ngIf"], [1, "profile-container"], [1, "profile-card"], [1, "profile-header"], [1, "profile-avatar"], [1, "profile-info"], [1, "profile-email"], [1, "profile-body"], ["class", "profile-view", 4, "ngIf"], ["class", "profile-edit", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "profile-view"], [1, "profile-field"], [1, "field-label"], [1, "field-value"], [1, "field-value", "read-only"], [1, "field-hint"], [1, "btn-edit", 3, "click"], [1, "profile-edit", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "fullName", "required", ""], ["type", "email", "disabled", "", 3, "value"], ["type", "tel", "formControlName", "phoneNumber"], ["type", "text", "disabled", "", 3, "value"], ["type", "submit", 1, "btn-save", 3, "disabled"], ["type", "button", 1, "btn-cancel", 3, "click"]], template: function PatientDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1");
      \u0275\u0275text(3, "Patient Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function PatientDashboardComponent_Template_button_click_5_listener() {
        return ctx.activeTab = "doctors";
      });
      \u0275\u0275text(6, "Available Doctors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function PatientDashboardComponent_Template_button_click_7_listener() {
        return ctx.activeTab = "appointments";
      });
      \u0275\u0275text(8, "My Appointments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function PatientDashboardComponent_Template_button_click_9_listener() {
        return ctx.activeTab = "profile";
      });
      \u0275\u0275text(10, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, PatientDashboardComponent_div_11_Template, 2, 1, "div", 6)(12, PatientDashboardComponent_div_12_Template, 7, 4, "div", 7)(13, PatientDashboardComponent_div_13_Template, 6, 3, "div", 7)(14, PatientDashboardComponent_div_14_Template, 4, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab == "doctors");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "appointments");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "profile");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "doctors");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "appointments");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "profile");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\nh1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0066cc;\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.appointment-alert-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  color: #92400e;\n  font-weight: 500;\n  border-left: 4px solid #f59e0b;\n  margin-bottom: 1rem;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);\n}\n.alert-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  font-size: 1.2rem;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #999;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.doctors-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.doctor-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  padding: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n}\n.doctor-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);\n}\n.doctor-card.selected[_ngcontent-%COMP%] {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.6);\n}\n.doctor-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n}\n.doctor-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  object-fit: cover;\n}\n.doctor-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: white;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #667eea;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 500;\n}\n.btn-book[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-book[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5568d3 0%,\n      #63408a 100%);\n  transform: scale(1.02);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.profile-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  color: #333;\n  font-size: 0.95rem;\n}\n.profile-label[_ngcontent-%COMP%] {\n  min-width: 120px;\n  font-weight: 600;\n  color: #0052a3;\n}\n.profile-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.selected-doctor-info[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  border: 1px solid #d0e2ff;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin-top: 1.5rem;\n}\n.booking-form[_ngcontent-%COMP%] {\n  background: #f0f7ff;\n  border: 2px solid #0066cc;\n  border-radius: 8px;\n  padding: 2rem;\n  margin-top: 2rem;\n}\n.booking-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0066cc;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 4px rgba(0, 102, 204, 0.3);\n}\n.slot-info[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  color: #1e293b;\n}\n.slot-info.empty[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.appointments-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.appointment-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.appointment-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  border-color: #667eea;\n}\n.appointment-card.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.appointment-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.appointment-id[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.appointment-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.appointment-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.appointment-actions[_ngcontent-%COMP%] {\n  padding: 0 1.5rem 1.5rem;\n  display: flex;\n  gap: 0.75rem;\n}\n.btn-view[_ngcontent-%COMP%], \n.btn-download[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.btn-view[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-download[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.btn-download[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(17, 153, 142, 0.4);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.appointment-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 1.3rem;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0.25rem 0 0 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: #f8f9fa;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  position: sticky;\n  bottom: 0;\n}\n.btn-download-modal[_ngcontent-%COMP%], \n.btn-close-modal[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-download-modal[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.btn-download-modal[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(17, 153, 142, 0.4);\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: #dee2e6;\n}\n.bill-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.bill-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.bill-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.bill-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.bill-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #666;\n}\n.bill-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #333;\n}\n.bill-value.amount[_ngcontent-%COMP%] {\n  color: #00b894;\n  font-size: 1.2rem;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.profile-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 1.5rem;\n}\n.profile-email[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0.5rem 0 0 0;\n}\n.profile-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.profile-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.field-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #333;\n  font-weight: 600;\n}\n.field-value.read-only[_ngcontent-%COMP%] {\n  color: #666;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #999;\n  font-style: italic;\n  margin-top: 0.25rem;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.profile-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.9rem;\n}\n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);\n}\n.profile-edit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  color: #666;\n  cursor: not-allowed;\n}\n.profile-edit[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.btn-save[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #dee2e6;\n}\n.bill-hint[_ngcontent-%COMP%] {\n  color: #856404;\n  background: #fff3cd;\n  padding: 0.75rem;\n  border-radius: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7 0%,\n      #fdcb6e 100%);\n  color: #856404;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #74b9ff 0%,\n      #0984e3 100%);\n  color: white;\n}\n.status-badge.completed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #55efc4 0%,\n      #00b894 100%);\n  color: white;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff7675 0%,\n      #d63031 100%);\n  color: white;\n}\n.status-badge.done[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a29bfe 0%,\n      #6c5ce7 100%);\n  color: white;\n}\n.status-badge.paid[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #55efc4 0%,\n      #00b894 100%);\n  color: white;\n}\n.status-badge.unpaid[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7 0%,\n      #fdcb6e 100%);\n  color: #856404;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-small[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0066cc;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0052a3;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n  margin-left: 0.5rem;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  background-color: #0066cc;\n  color: white;\n}\n.btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #0052a3;\n}\n.email-notification-info[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: #e7f3ff;\n  border-left: 4px solid #0066cc;\n  border-radius: 4px;\n}\n.email-notification-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0052a3;\n  font-size: 0.95rem;\n}\n.bill-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.bill-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.bill-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.bill-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.bill-hint[_ngcontent-%COMP%] {\n  color: #856404;\n  background: #fff3cd;\n  padding: 0.75rem;\n  border-radius: 4px;\n  margin-top: 1rem;\n}\n.bill-amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #28a745;\n}\n/*# sourceMappingURL=patient-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-patient-dashboard", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="dashboard-container">
  <div class="dashboard-header">
    <h1>Patient Dashboard</h1>
  </div>

  <div class="tabs">
    <button (click)="activeTab='doctors'" [class.active]="activeTab=='doctors'">Available Doctors</button>
    <button (click)="activeTab='appointments'" [class.active]="activeTab=='appointments'">My Appointments</button>
    <button (click)="activeTab='profile'" [class.active]="activeTab=='profile'">My Profile</button>
  </div>

  <div *ngIf="error" class="error-message">{{ error }}</div>

  <!-- Available Doctors Tab -->
  <div *ngIf="activeTab=='doctors'" class="tab-content">
    <h2>Available Doctors</h2>
    <div *ngIf="loading" class="loading">Loading doctors...</div>
    <div *ngIf="!loading && doctors.length === 0" class="empty-state">No doctors are available right now. Please check again later.</div>

    <div *ngIf="!loading && doctors.length > 0" class="doctors-grid">
      <div
        *ngFor="let doctor of doctors"
        class="doctor-card"
        [class.selected]="selectedDoctor?.doctorId === doctor.doctorId"
        (click)="onDoctorSelected(doctor)"
      >
        <div class="doctor-image">
          <img [src]="'https://ui-avatars.com/api/?name=' + doctorName(doctor) + '&size=120&background=667eea&color=fff&bold=true'" 
               [alt]="doctorName(doctor)">
        </div>
        <div class="doctor-info">
          <div class="info-row">
            <span class="info-label">Name -</span>
            <span class="info-value">{{ doctorName(doctor) }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Specialization -</span>
            <span class="info-value">{{ doctor.specialization || 'General' }}</span>
          </div>
        </div>
        <button type="button" class="btn-book" (click)="onDoctorSelected(doctor); $event.stopPropagation()">
          <span class="btn-icon">\u{1F4C5}</span> Book Appointment
        </button>
      </div>
    </div>

    <!-- Booking Form -->
    <div *ngIf="selectedDoctor" class="booking-form">
      <h3>Book Appointment with {{ doctorName(selectedDoctor) }}</h3>
      <div class="selected-doctor-info">
        <div class="profile-row">
          <span class="profile-label">Specialization</span>
          <span class="profile-value">{{ selectedDoctor.specialization }}</span>
        </div>
        <div class="profile-row">
          <span class="profile-label">Consultation Fee</span>
          <span class="profile-value">\u20B9{{ selectedDoctor.consultationFee }}</span>
        </div>
      </div>
      <form [formGroup]="bookingForm" (ngSubmit)="bookAppointment()">
        <div class="form-group">
          <label>Date:</label>
          <input type="date" formControlName="appointmentDate" [min]="minDate" (change)="onDateChanged($event.target.value)" required>
        </div>

        <div class="form-group">
          <label>Time Slot:</label>
          <select formControlName="timeSlot" required>
            <option value="">Select a time slot</option>
            <option *ngFor="let slot of availableSlots" [value]="slot.startTime">{{ slot.display }}</option>
          </select>
          <div class="slot-info" *ngIf="slotsLoading">Loading slots...</div>
          <div class="slot-info empty" *ngIf="!slotsLoading && slotsLoaded && !availableSlots.length">No slots available. Please choose another date.</div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-primary" [disabled]="bookingForm.invalid || loading || slotsLoading || bookingForm.get('timeSlot')?.disabled">
            {{ loading ? 'Booking...' : 'Confirm Booking' }}
          </button>
          <button type="button" (click)="startBooking()" class="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  </div>

  <!-- My Appointments Tab -->
  <div *ngIf="activeTab=='appointments'" class="tab-content">
    <h2>My Appointments</h2>
    <div *ngIf="appointments.length === 0" class="empty-state">
      <div class="empty-icon">\u{1F4C5}</div>
      <p>No appointments yet</p>
    </div>
    
    <div *ngIf="appointments.length > 0" class="appointments-grid">
      <ng-container *ngFor="let apt of appointments">
        <div class="appointment-alert-banner" *ngIf="getAvailabilityAlert(apt.appointmentId)">
          <span class="alert-icon">\u26A0\uFE0F</span>
          <strong>Doctor Availability Update:</strong> Dr. {{ apt.doctorName }} is currently {{ getAvailabilityAlert(apt.appointmentId) }}
        </div>
        <div class="appointment-card" 
             [class.selected]="selectedAppointment?.appointmentId === apt.appointmentId"
             (click)="viewAppointmentDetails(apt)">
          <div class="appointment-header">
            <div class="appointment-id">Appointment #{{ apt.appointmentId }}</div>
            <span class="status-badge" [class]="statusClass(apt)">{{ apt.statusText }}</span>
          </div>
          <div class="appointment-body">
            <div class="appointment-info">
              <div class="info-item">
                <span class="info-icon">\u{1F468}\u200D\u2695\uFE0F</span>
                <div>
                  <div class="info-label">Doctor</div>
                  <div class="info-text">{{ apt.doctorName }}</div>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">\u{1F4C5}</span>
                <div>
                  <div class="info-label">Date</div>
                  <div class="info-text">{{ apt.appointmentDate | date:'MMM d, y' }}</div>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">\u{1F550}</span>
                <div>
                  <div class="info-label">Time</div>
                  <div class="info-text">{{ apt.timeSlotDisplay || apt.timeSlot }}</div>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">\u{1F4B0}</span>
                <div>
                  <div class="info-label">Amount</div>
                  <div class="info-text">
                    <ng-container *ngIf="billFor(apt.appointmentId) as bill; else showFee">
                      \u20B9{{ bill.totalAmount }}
                    </ng-container>
                    <ng-template #showFee>
                      <ng-container *ngIf="getDoctorFee(apt.doctorId) as fee; else noBill">
                        \u20B9{{ fee }}
                      </ng-container>
                    </ng-template>
                    <ng-template #noBill>-</ng-template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="appointment-actions">
            <button class="btn-view" (click)="viewAppointmentDetails(apt); $event.stopPropagation()">
              <span>\u{1F441}\uFE0F</span> View Details
            </button>
            <button class="btn-download" *ngIf="billFor(apt.appointmentId) && isCompleted(apt)" 
                    (click)="downloadBill(apt.appointmentId); $event.stopPropagation()">
              <span>\u{1F4E5}</span> Download Bill
            </button>
          </div>
        </div>
      </ng-container>
    </div>

    <!-- Appointment Details Modal -->
    <div *ngIf="selectedAppointment as appointment" class="modal-overlay" (click)="closeAppointmentDetails()">
      <div class="modal-content appointment-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h3>Appointment Details</h3>
            <p class="modal-subtitle">ID: #{{ appointment.appointmentId }}</p>
          </div>
          <button class="close-btn" (click)="closeAppointmentDetails()">\xD7</button>
        </div>
        <div class="modal-body">
          <div class="details-grid">
            <div class="detail-item">
              <span class="detail-icon">\u{1F468}\u200D\u2695\uFE0F</span>
              <div>
                <div class="detail-label">Doctor</div>
                <div class="detail-value">{{ appointment.doctorName || 'N/A' }}</div>
              </div>
            </div>
            <div class="detail-item">
              <span class="detail-icon">\u{1F4C5}</span>
              <div>
                <div class="detail-label">Date</div>
                <div class="detail-value">{{ appointment.appointmentDate | date:'fullDate' }}</div>
              </div>
            </div>
            <div class="detail-item">
              <span class="detail-icon">\u{1F550}</span>
              <div>
                <div class="detail-label">Time Slot</div>
                <div class="detail-value">{{ appointment.timeSlotDisplay || appointment.timeSlot || 'N/A' }}</div>
              </div>
            </div>
            <div class="detail-item">
              <span class="detail-icon">\u{1F4CA}</span>
              <div>
                <div class="detail-label">Status</div>
                <div><span class="status-badge" [class]="statusClass(appointment)">{{ appointment.statusText || 'N/A' }}</span></div>
              </div>
            </div>
            <div class="detail-item" *ngIf="appointment.symptoms">
              <span class="detail-icon">\u{1FA7A}</span>
              <div>
                <div class="detail-label">Symptoms</div>
                <div class="detail-value">{{ appointment.symptoms }}</div>
              </div>
            </div>
            <div class="detail-item" *ngIf="appointment.remarks">
              <span class="detail-icon">\u{1F4DD}</span>
              <div>
                <div class="detail-label">Remarks</div>
                <div class="detail-value">{{ appointment.remarks }}</div>
              </div>
            </div>
          </div>

          <div class="bill-section" *ngIf="billFor(appointment.appointmentId) as bill">
            <h4>\u{1F4B0} Bill Information</h4>
            <div class="bill-summary">
              <div class="bill-item">
                <span class="bill-label">Bill ID:</span>
                <span class="bill-value">{{ bill.billId }}</span>
              </div>
              <div class="bill-item">
                <span class="bill-label">Total Amount:</span>
                <span class="bill-value amount">\u20B9{{ bill.totalAmount }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-download-modal" *ngIf="billFor(appointment.appointmentId) && isCompleted(appointment)" 
                  (click)="downloadBill(appointment.appointmentId)">
            <span>\u{1F4E5}</span> Download Bill
          </button>
          <button class="btn-close-modal" (click)="closeAppointmentDetails()">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- My Profile Tab -->
  <div *ngIf="activeTab=='profile'" class="tab-content">
    <h2>My Profile</h2>
    <div *ngIf="userProfile" class="profile-container">
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-avatar">
            <img [src]="'https://ui-avatars.com/api/?name=' + userProfile.fullName + '&size=120&background=667eea&color=fff&bold=true'" 
                 [alt]="userProfile.fullName">
          </div>
          <div class="profile-info">
            <h3>{{ userProfile.fullName }}</h3>
            <p class="profile-email">{{ userProfile.email }}</p>
          </div>
        </div>

        <div class="profile-body">
          <div *ngIf="!editMode" class="profile-view">
            <div class="profile-field">
              <span class="field-label">Full Name</span>
              <span class="field-value">{{ userProfile.fullName || '-' }}</span>
            </div>
            <div class="profile-field">
              <span class="field-label">Email</span>
              <span class="field-value read-only">{{ userProfile.email || '-' }}</span>
              <span class="field-hint">(Read-only)</span>
            </div>
            <div class="profile-field">
              <span class="field-label">Phone Number</span>
              <span class="field-value">{{ userProfile.phoneNumber || '-' }}</span>
            </div>
            <div class="profile-field">
              <span class="field-label">Gender</span>
              <span class="field-value read-only">{{ userProfile.gender || '-' }}</span>
              <span class="field-hint">(Read-only)</span>
            </div>
            <button class="btn-edit" (click)="toggleEditMode()">
              <span>\u270F\uFE0F</span> Edit Profile
            </button>
          </div>

          <form *ngIf="editMode" [formGroup]="profileForm" (ngSubmit)="updateProfile()" class="profile-edit">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" formControlName="fullName" required>
            </div>
            <div class="form-group">
              <label>Email (Read-only)</label>
              <input type="email" [value]="userProfile.email" disabled>
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" formControlName="phoneNumber">
            </div>
            <div class="form-group">
              <label>Gender (Read-only)</label>
              <input type="text" [value]="userProfile.gender" disabled>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn-save" [disabled]="profileForm.invalid || loading">
                {{ loading ? '\u{1F4BE} Saving...' : '\u{1F4BE} Save Changes' }}
              </button>
              <button type="button" class="btn-cancel" (click)="toggleEditMode()">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/patient/patient-dashboard.component.css */\n.dashboard-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-header h1 {\n  margin: 0;\n}\nh1 {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2 {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n}\n.tabs button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n}\n.tabs button:hover {\n  color: #0066cc;\n}\n.tabs button.active {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content {\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.appointment-alert-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  color: #92400e;\n  font-weight: 500;\n  border-left: 4px solid #f59e0b;\n  margin-bottom: 1rem;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);\n}\n.alert-icon {\n  margin-right: 0.5rem;\n  font-size: 1.2rem;\n}\n.loading {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #999;\n}\n.empty-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.doctors-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.doctor-card {\n  border: none;\n  border-radius: 16px;\n  padding: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n}\n.doctor-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);\n}\n.doctor-card.selected {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.6);\n}\n.doctor-image {\n  width: 100%;\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n}\n.doctor-image img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  object-fit: cover;\n}\n.doctor-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: white;\n}\n.info-row {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n.info-label {\n  font-weight: 700;\n  color: #667eea;\n}\n.info-value {\n  color: #333;\n  font-weight: 500;\n}\n.btn-book {\n  width: 100%;\n  padding: 1rem;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-book:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #5568d3 0%,\n      #63408a 100%);\n  transform: scale(1.02);\n}\n.btn-icon {\n  font-size: 1.2rem;\n}\n.profile-row {\n  display: flex;\n  gap: 0.5rem;\n  color: #333;\n  font-size: 0.95rem;\n}\n.profile-label {\n  min-width: 120px;\n  font-weight: 600;\n  color: #0052a3;\n}\n.profile-value {\n  flex: 1;\n}\n.selected-doctor-info {\n  background: #fff;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  border: 1px solid #d0e2ff;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin-top: 1.5rem;\n}\n.booking-form {\n  background: #f0f7ff;\n  border: 2px solid #0066cc;\n  border-radius: 8px;\n  padding: 2rem;\n  margin-top: 2rem;\n}\n.booking-form h3 {\n  color: #0066cc;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 4px rgba(0, 102, 204, 0.3);\n}\n.slot-info {\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n  color: #1e293b;\n}\n.slot-info.empty {\n  color: #b91c1c;\n}\n.appointments-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.appointment-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n.appointment-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  border-color: #667eea;\n}\n.appointment-card.selected {\n  border-color: #667eea;\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.appointment-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.appointment-id {\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n}\n.appointment-body {\n  padding: 1.5rem;\n}\n.appointment-info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.info-item {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.info-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.info-label {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.info-text {\n  font-size: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.appointment-actions {\n  padding: 0 1.5rem 1.5rem;\n  display: flex;\n  gap: 0.75rem;\n}\n.btn-view,\n.btn-download {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.btn-view {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-view:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-download {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.btn-download:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(17, 153, 142, 0.4);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.appointment-modal {\n  background: white;\n  border-radius: 16px;\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.modal-header h3 {\n  margin: 0;\n  color: white;\n  font-size: 1.3rem;\n}\n.modal-subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0.25rem 0 0 0;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.detail-item {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.detail-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.detail-label {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.detail-value {\n  font-size: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.modal-footer {\n  padding: 1.5rem;\n  background: #f8f9fa;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  position: sticky;\n  bottom: 0;\n}\n.btn-download-modal,\n.btn-close-modal {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-download-modal {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.btn-download-modal:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(17, 153, 142, 0.4);\n}\n.btn-close-modal {\n  background: #e9ecef;\n  color: #495057;\n}\n.btn-close-modal:hover {\n  background: #dee2e6;\n}\n.bill-section {\n  margin-top: 1.5rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.bill-section h4 {\n  margin: 0 0 1rem 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.bill-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.bill-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.bill-label {\n  font-weight: 600;\n  color: #666;\n}\n.bill-value {\n  font-weight: 700;\n  color: #333;\n}\n.bill-value.amount {\n  color: #00b894;\n  font-size: 1.2rem;\n}\n.profile-container {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.profile-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n.profile-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.profile-avatar img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 4px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.profile-info h3 {\n  margin: 0;\n  color: white;\n  font-size: 1.5rem;\n}\n.profile-email {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0.5rem 0 0 0;\n}\n.profile-body {\n  padding: 2rem;\n}\n.profile-view {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.field-label {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.field-value {\n  font-size: 1.1rem;\n  color: #333;\n  font-weight: 600;\n}\n.field-value.read-only {\n  color: #666;\n}\n.field-hint {\n  font-size: 0.75rem;\n  color: #999;\n  font-style: italic;\n  margin-top: 0.25rem;\n}\n.btn-edit {\n  margin-top: 1rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n}\n.btn-edit:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.profile-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.profile-edit .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.profile-edit .form-group label {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.9rem;\n}\n.profile-edit .form-group input,\n.profile-edit .form-group select {\n  padding: 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.profile-edit .form-group input:focus,\n.profile-edit .form-group select:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);\n}\n.profile-edit .form-group input:disabled {\n  background: #f5f5f5;\n  color: #666;\n  cursor: not-allowed;\n}\n.profile-edit .form-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.btn-save,\n.btn-cancel {\n  flex: 1;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-save {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-save:hover:not(:disabled) {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  background: #e9ecef;\n  color: #495057;\n}\n.btn-cancel:hover {\n  background: #dee2e6;\n}\n.bill-hint {\n  color: #856404;\n  background: #fff3cd;\n  padding: 0.75rem;\n  border-radius: 4px;\n}\n.status-badge {\n  padding: 0.4rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge.pending {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7 0%,\n      #fdcb6e 100%);\n  color: #856404;\n}\n.status-badge.approved {\n  background:\n    linear-gradient(\n      135deg,\n      #74b9ff 0%,\n      #0984e3 100%);\n  color: white;\n}\n.status-badge.completed {\n  background:\n    linear-gradient(\n      135deg,\n      #55efc4 0%,\n      #00b894 100%);\n  color: white;\n}\n.status-badge.rejected {\n  background:\n    linear-gradient(\n      135deg,\n      #ff7675 0%,\n      #d63031 100%);\n  color: white;\n}\n.status-badge.done {\n  background:\n    linear-gradient(\n      135deg,\n      #a29bfe 0%,\n      #6c5ce7 100%);\n  color: white;\n}\n.status-badge.paid {\n  background:\n    linear-gradient(\n      135deg,\n      #55efc4 0%,\n      #00b894 100%);\n  color: white;\n}\n.status-badge.unpaid {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7 0%,\n      #fdcb6e 100%);\n  color: #856404;\n}\n.btn-primary,\n.btn-secondary,\n.btn-small {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.btn-primary {\n  background-color: #0066cc;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #0052a3;\n}\n.btn-primary:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n  margin-left: 0.5rem;\n}\n.btn-secondary:hover {\n  background-color: #5a6268;\n}\n.btn-small {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  background-color: #0066cc;\n  color: white;\n}\n.btn-small:hover {\n  background-color: #0052a3;\n}\n.email-notification-info {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: #e7f3ff;\n  border-left: 4px solid #0066cc;\n  border-radius: 4px;\n}\n.email-notification-info p {\n  margin: 0;\n  color: #0052a3;\n  font-size: 0.95rem;\n}\n.bill-section {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.bill-section h4 {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.bill-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\n.bill-summary div {\n  min-width: 150px;\n}\n.bill-hint {\n  color: #856404;\n  background: #fff3cd;\n  padding: 0.75rem;\n  border-radius: 4px;\n  margin-top: 1rem;\n}\n.bill-amount {\n  font-weight: bold;\n  color: #28a745;\n}\n/*# sourceMappingURL=patient-dashboard.component.css.map */\n"] }]
  }], () => [{ type: DoctorService }, { type: AppointmentService }, { type: BillService }, { type: FormBuilder }, { type: StorageService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientDashboardComponent, { className: "PatientDashboardComponent", filePath: "src/app/patient/patient-dashboard.component.ts", lineNumber: 17 });
})();

// src/app/doctor/doctor-dashboard.component.ts
function DoctorDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function DoctorDashboardComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading appointments...");
    \u0275\u0275elementEnd()();
  }
}
function DoctorDashboardComponent_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No appointments scheduled");
    \u0275\u0275elementEnd()();
  }
}
function DoctorDashboardComponent_div_9_div_5_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2, "\u{1F4DD} Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apt_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(apt_r2.remarks);
  }
}
function DoctorDashboardComponent_div_9_div_5_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36);
    \u0275\u0275listener("click", function DoctorDashboardComponent_div_9_div_5_div_1_div_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const apt_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRemarksForm(apt_r2));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mark as Done ");
    \u0275\u0275elementEnd()();
  }
}
function DoctorDashboardComponent_div_9_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    \u0275\u0275element(4, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "div", 25)(14, "div", 26)(15, "span", 27);
    \u0275\u0275text(16, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "div", 28);
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 29);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 26)(24, "span", 27);
    \u0275\u0275text(25, "\u{1F550}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "div", 28);
    \u0275\u0275text(28, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 29);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(31, DoctorDashboardComponent_div_9_div_5_div_1_div_31_Template, 5, 1, "div", 30)(32, DoctorDashboardComponent_div_9_div_5_div_1_div_32_Template, 5, 0, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apt_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", "https://ui-avatars.com/api/?name=" + apt_r2.patientName + "&size=60&background=667eea&color=fff&bold=true", \u0275\u0275sanitizeUrl)("alt", apt_r2.patientName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(apt_r2.patientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: #", apt_r2.appointmentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatusClass(apt_r2.statusText || apt_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(apt_r2.statusText || apt_r2.status);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 10, apt_r2.appointmentDate, "MMM d, y"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(apt_r2.timeSlotDisplay || apt_r2.timeSlot);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apt_r2.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (apt_r2.statusText || apt_r2.status) === "Approved");
  }
}
function DoctorDashboardComponent_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, DoctorDashboardComponent_div_9_div_5_div_1_Template, 33, 13, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.appointments);
  }
}
function DoctorDashboardComponent_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function DoctorDashboardComponent_div_9_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRemarks());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function DoctorDashboardComponent_div_9_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "div")(4, "h3");
    \u0275\u0275text(5, "Mark Appointment as Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 41);
    \u0275\u0275listener("click", function DoctorDashboardComponent_div_9_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRemarks());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 42);
    \u0275\u0275listener("ngSubmit", function DoctorDashboardComponent_div_9_div_6_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addRemarks());
    });
    \u0275\u0275elementStart(11, "div", 43)(12, "div", 44)(13, "label");
    \u0275\u0275text(14, "\u{1F4DD} Remarks:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 46)(17, "button", 47);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 48);
    \u0275\u0275listener("click", function DoctorDashboardComponent_div_9_div_6_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRemarks());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const appointment_r5 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("For ", appointment_r5.patientName);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.remarksForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.remarksForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "\u2705 Marking..." : "\u2705 Mark as Done", " ");
  }
}
function DoctorDashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "My Appointments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DoctorDashboardComponent_div_9_div_3_Template, 4, 0, "div", 7)(4, DoctorDashboardComponent_div_9_div_4_Template, 5, 0, "div", 8)(5, DoctorDashboardComponent_div_9_div_5_Template, 2, 1, "div", 9)(6, DoctorDashboardComponent_div_9_div_6_Template, 21, 4, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.appointments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.appointments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAppointment);
  }
}
function DoctorDashboardComponent_div_10_div_3_form_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 57);
    \u0275\u0275listener("ngSubmit", function DoctorDashboardComponent_div_10_div_3_form_29_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateProfile());
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "label");
    \u0275\u0275text(3, "Experience Years:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44)(6, "label");
    \u0275\u0275text(7, "Consultation Fee (\u20B9):");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Updating..." : "Update Profile", " ");
  }
}
function DoctorDashboardComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4, "Doctor Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 52)(8, "span", 53);
    \u0275\u0275text(9, "Specialization:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 52)(13, "span", 53);
    \u0275\u0275text(14, "Qualification:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 52)(18, "span", 53);
    \u0275\u0275text(19, "Experience Years:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 54);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 52)(23, "span", 53);
    \u0275\u0275text(24, "Consultation Fee:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 54);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 55);
    \u0275\u0275listener("click", function DoctorDashboardComponent_div_10_div_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editMode = !ctx_r0.editMode);
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, DoctorDashboardComponent_div_10_div_3_form_29_Template, 11, 3, "form", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.doctorInfo.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.doctorInfo.specialization);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.doctorInfo.qualification);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.doctorInfo.experienceYears, " years");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.doctorInfo.consultationFee);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editMode ? "Cancel Edit" : "Edit Profile", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editMode);
  }
}
function DoctorDashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DoctorDashboardComponent_div_10_div_3_Template, 30, 7, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.doctorInfo);
  }
}
var DoctorDashboardComponent = class _DoctorDashboardComponent {
  doctorService;
  appointmentService;
  fb;
  storage;
  alertService;
  activeTab = "appointments";
  appointments = [];
  doctorInfo = null;
  loading = false;
  error;
  profileForm;
  remarksForm;
  selectedAppointment = null;
  editMode = false;
  constructor(doctorService, appointmentService, fb, storage, alertService) {
    this.doctorService = doctorService;
    this.appointmentService = appointmentService;
    this.fb = fb;
    this.storage = storage;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.initForms();
    this.loadAppointments();
    this.loadDoctorInfo();
  }
  initForms() {
    this.profileForm = this.fb.group({
      consultationFee: ["", [Validators.required, Validators.min(0)]],
      experienceYears: ["", [Validators.required, Validators.min(0)]]
    });
    this.remarksForm = this.fb.group({
      remarks: ["", Validators.required]
    });
  }
  loadAppointments() {
    let doctorId = this.storage.getDoctorId();
    console.log("Doctor ID from storage:", doctorId);
    if (!doctorId) {
      doctorId = this.storage.getUserId();
      console.log("Using userId as doctorId fallback:", doctorId);
    }
    if (!doctorId) {
      this.error = "Doctor ID not found";
      console.error("Doctor ID not found in localStorage");
      return;
    }
    this.loading = true;
    this.appointmentService.getAppointmentsByDoctor(doctorId).subscribe({
      next: (data) => {
        console.log("Appointments loaded for doctor:", data);
        const normalized = data.map((appointment) => this.normalizeAppointment(appointment));
        this.appointments = normalized.filter((apt) => apt.statusText === "Approved");
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load appointments:", err);
        this.error = "Failed to load appointments";
        this.loading = false;
      }
    });
  }
  loadDoctorInfo() {
    let doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      doctorId = this.storage.getUserId();
    }
    if (!doctorId)
      return;
    this.doctorService.getDoctorById(doctorId).subscribe({
      next: (data) => {
        this.doctorInfo = data;
        this.profileForm.patchValue({
          consultationFee: data.consultationFee,
          experienceYears: data.experienceYears
        });
      },
      error: (err) => {
        this.error = "Failed to load doctor info";
      }
    });
  }
  updateProfile() {
    if (this.profileForm.invalid)
      return;
    const doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      this.error = "Doctor ID not found";
      return;
    }
    const payload = this.profileForm.getRawValue();
    console.log("Updating doctor profile with:", JSON.stringify(payload));
    this.loading = true;
    this.doctorService.updateDoctor(doctorId, payload).subscribe({
      next: (data) => {
        console.log("Profile updated, response:", data);
        this.doctorInfo = data;
        this.error = void 0;
        this.editMode = false;
        this.alertService.show("Profile updated successfully!", "Success");
        this.loading = false;
      },
      error: (err) => {
        console.error("Profile update error:", err);
        this.error = err?.error ?? "Failed to update profile";
        this.loading = false;
      }
    });
  }
  openRemarksForm(appointment) {
    this.selectedAppointment = appointment;
    this.remarksForm.reset();
  }
  addRemarks() {
    if (this.remarksForm.invalid || !this.selectedAppointment)
      return;
    const doctorId = this.storage.getDoctorId();
    if (!doctorId) {
      this.error = "Doctor ID not found";
      return;
    }
    console.log("Marking as done:", {
      doctorId,
      appointmentId: this.selectedAppointment.appointmentId,
      remarks: this.remarksForm.value.remarks
    });
    this.loading = true;
    this.doctorService.markAsDone(doctorId, this.selectedAppointment.appointmentId, this.remarksForm.value.remarks).subscribe({
      next: (response) => {
        console.log("Mark as done SUCCESS - Response:", response);
        console.log("Response status:", response?.status, "Response statusText:", response?.statusText);
        this.error = void 0;
        this.alertService.show("Appointment marked as Done! Staff will complete it.", "Success");
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        console.error("Mark as done error:", err);
        this.error = err?.error?.message || err?.error || "Failed to mark appointment as done";
        this.alertService.show("Error: " + this.error, "Error");
        this.loading = false;
      }
    });
  }
  cancelRemarks() {
    this.selectedAppointment = null;
    this.remarksForm.reset();
  }
  normalizeAppointment(appointment) {
    const slot = this.normalizeSlot(appointment.timeSlot || appointment.slotTime);
    const timeSlotDisplay = appointment.timeSlotDisplay || this.formatSlotWindow(slot);
    const statusText = appointment.statusText ?? appointment.status;
    return __spreadProps(__spreadValues({}, appointment), {
      timeSlot: slot,
      timeSlotDisplay,
      statusText
    });
  }
  normalizeSlot(slot) {
    if (!slot)
      return "";
    const parts = slot.split(":");
    const hours = (parts[0] ?? "").padStart(2, "0");
    const minutes = (parts[1] ?? "00").padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  formatSlotWindow(slot) {
    if (!slot)
      return "";
    const [h, m] = slot.split(":");
    const hours = Number(h);
    const minutes = Number(m);
    if (Number.isNaN(hours) || Number.isNaN(minutes))
      return slot;
    const start = `${this.toTwoDigits(hours)}:${this.toTwoDigits(minutes)}`;
    const endMinutes = hours * 60 + minutes + 30;
    const endHours = Math.floor(endMinutes / 60);
    const mins = endMinutes % 60;
    return `${start} - ${this.toTwoDigits(endHours)}:${this.toTwoDigits(mins)}`;
  }
  toTwoDigits(value) {
    return value.toString().padStart(2, "0");
  }
  getStatusColor(status) {
    if (!status)
      return "#6C757D";
    const statusColorMap = {
      "Pending": "#FFC107",
      "Approved": "#17A2B8",
      "Completed": "#28A745",
      "Rejected": "#DC3545"
    };
    return statusColorMap[status] || "#6C757D";
  }
  getStatusClass(status) {
    if (!status)
      return "";
    return status.toLowerCase();
  }
  static \u0275fac = function DoctorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoctorDashboardComponent)(\u0275\u0275directiveInject(DoctorService), \u0275\u0275directiveInject(AppointmentService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoctorDashboardComponent, selectors: [["app-doctor-dashboard"]], decls: 11, vars: 7, consts: [[1, "dashboard-container"], [1, "tabs"], [3, "click"], ["class", "error-message", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "error-message"], [1, "tab-content"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "appointments-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading"], [1, "loading-spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "appointments-grid"], ["class", "appointment-card", 4, "ngFor", "ngForOf"], [1, "appointment-card"], [1, "card-header"], [1, "patient-info"], [1, "patient-avatar"], [3, "src", "alt"], [1, "appointment-id"], [1, "status-badge", 3, "ngClass"], [1, "card-body"], [1, "info-grid"], [1, "info-item"], [1, "info-icon"], [1, "info-label"], [1, "info-value"], ["class", "remarks-section", 4, "ngIf"], ["class", "card-actions", 4, "ngIf"], [1, "remarks-section"], [1, "remarks-label"], [1, "remarks-text"], [1, "card-actions"], [1, "btn-add-remarks", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "fancy-modal", 3, "click"], [1, "modal-header"], [1, "modal-subtitle"], [1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-group"], ["formControlName", "remarks", "rows", "5", "placeholder", "Enter consultation remarks...", "required", ""], [1, "modal-footer"], ["type", "submit", 1, "btn-save", 3, "disabled"], ["type", "button", 1, "btn-cancel", 3, "click"], ["class", "profile-section", 4, "ngIf"], [1, "profile-section"], [1, "profile-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "btn-edit", 3, "click"], ["class", "profile-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "profile-form", 3, "ngSubmit", "formGroup"], ["type", "number", "formControlName", "experienceYears", "required", "", "min", "0"], ["type", "number", "formControlName", "consultationFee", "required", "", "min", "0"], ["type", "submit", 1, "btn-primary", 3, "disabled"]], template: function DoctorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Doctor Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
      \u0275\u0275listener("click", function DoctorDashboardComponent_Template_button_click_4_listener() {
        return ctx.activeTab = "appointments";
      });
      \u0275\u0275text(5, "My Appointments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function DoctorDashboardComponent_Template_button_click_6_listener() {
        return ctx.activeTab = "profile";
      });
      \u0275\u0275text(7, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, DoctorDashboardComponent_div_8_Template, 2, 1, "div", 3)(9, DoctorDashboardComponent_div_9_Template, 7, 4, "div", 4)(10, DoctorDashboardComponent_div_10_Template, 4, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab == "appointments");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "profile");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "appointments");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "profile");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName, DatePipe], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0066cc;\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #999;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.appointments-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.appointment-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.appointment-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  border-color: #667eea;\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.patient-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.patient-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.patient-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 1.2rem;\n}\n.appointment-id[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7 0%,\n      #fdcb6e 100%);\n  color: #856404;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #74b9ff 0%,\n      #0984e3 100%);\n  color: white;\n}\n.status-badge.completed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #55efc4 0%,\n      #00b894 100%);\n  color: white;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff7675 0%,\n      #d63031 100%);\n  color: white;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n  margin-bottom: 1rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.remarks-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n}\n.remarks-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #667eea;\n  margin-bottom: 0.5rem;\n}\n.remarks-text[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.5;\n}\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.btn-add-remarks[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.95rem;\n}\n.btn-add-remarks[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.profile-section[_ngcontent-%COMP%] {\n  max-width: 700px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 20px;\n  padding: 3rem;\n  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.profile-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_rotate 20s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.profile-details[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 0;\n  border-bottom: 2px solid rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n}\n.detail-row[_ngcontent-%COMP%]:hover {\n  padding-left: 0.5rem;\n  border-bottom-color: rgba(102, 126, 234, 0.3);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  letter-spacing: 1.5px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detail-label[_ngcontent-%COMP%]::before {\n  content: "\\25cf";\n  color: #764ba2;\n  font-size: 0.6rem;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-align: right;\n}\n.availability-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.availability-badge.available[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.availability-badge.unavailable[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 3px solid white;\n  border-radius: 50px;\n  background: transparent;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #667eea;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);\n}\n.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_slideIn 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid rgba(102, 126, 234, 0.3);\n  border-radius: 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.fancy-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 1.3rem;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0.25rem 0 0 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: #f8f9fa;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.btn-save[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #dee2e6;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 1rem;\n  border-radius: 50px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n/*# sourceMappingURL=doctor-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-doctor-dashboard", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="dashboard-container">
  <h1>Doctor Dashboard</h1>

  <div class="tabs">
    <button (click)="activeTab='appointments'" [class.active]="activeTab=='appointments'">My Appointments</button>
    <button (click)="activeTab='profile'" [class.active]="activeTab=='profile'">My Profile</button>
  </div>

  <div *ngIf="error" class="error-message">{{ error }}</div>

  <!-- Appointments Tab -->
  <div *ngIf="activeTab=='appointments'" class="tab-content">
    <h2>My Appointments</h2>
    <div *ngIf="loading" class="loading">
      <div class="loading-spinner"></div>
      <p>Loading appointments...</p>
    </div>

    <div *ngIf="!loading && appointments.length === 0" class="empty-state">
      <div class="empty-icon">\u{1F4CB}</div>
      <p>No appointments scheduled</p>
    </div>

    <div *ngIf="!loading && appointments.length > 0" class="appointments-grid">
      <div *ngFor="let apt of appointments" class="appointment-card">
        <div class="card-header">
          <div class="patient-info">
            <div class="patient-avatar">
              <img [src]="'https://ui-avatars.com/api/?name=' + apt.patientName + '&size=60&background=667eea&color=fff&bold=true'" 
                   [alt]="apt.patientName">
            </div>
            <div>
              <h3>{{ apt.patientName }}</h3>
              <span class="appointment-id">ID: #{{ apt.appointmentId }}</span>
            </div>
          </div>
          <span class="status-badge" [ngClass]="getStatusClass(apt.statusText || apt.status)">{{ apt.statusText || apt.status }}</span>
        </div>
        <div class="card-body">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-icon">\u{1F4C5}</span>
              <div>
                <div class="info-label">Date</div>
                <div class="info-value">{{ apt.appointmentDate | date:'MMM d, y' }}</div>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">\u{1F550}</span>
              <div>
                <div class="info-label">Time</div>
                <div class="info-value">{{ apt.timeSlotDisplay || apt.timeSlot }}</div>
              </div>
            </div>
          </div>
          <div *ngIf="apt.remarks" class="remarks-section">
            <div class="remarks-label">\u{1F4DD} Remarks:</div>
            <div class="remarks-text">{{ apt.remarks }}</div>
          </div>
          <div *ngIf="(apt.statusText || apt.status) === 'Approved'" class="card-actions">
            <button (click)="openRemarksForm(apt)" class="btn-add-remarks">
              <span>\u2705</span> Mark as Done
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Remarks Form Modal -->
    <div *ngIf="selectedAppointment as appointment" class="modal-overlay" (click)="cancelRemarks()">
      <div class="modal-content fancy-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div>
            <h3>Mark Appointment as Done</h3>
            <p class="modal-subtitle">For {{ appointment.patientName }}</p>
          </div>
          <button class="close-btn" (click)="cancelRemarks()">\xD7</button>
        </div>
        <form [formGroup]="remarksForm" (ngSubmit)="addRemarks()">
          <div class="modal-body">
            <div class="form-group">
              <label>\u{1F4DD} Remarks:</label>
              <textarea formControlName="remarks" rows="5" placeholder="Enter consultation remarks..." required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn-save" [disabled]="remarksForm.invalid || loading">
              {{ loading ? '\u2705 Marking...' : '\u2705 Mark as Done' }}
            </button>
            <button type="button" (click)="cancelRemarks()" class="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Profile Tab -->
  <div *ngIf="activeTab=='profile'" class="tab-content">
    <h2>My Profile</h2>
    <div *ngIf="doctorInfo" class="profile-section">
      <div class="profile-details">
        <div class="detail-row">
          <span class="detail-label">Doctor Name:</span>
          <span class="detail-value">{{ doctorInfo.fullName }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Specialization:</span>
          <span class="detail-value">{{ doctorInfo.specialization }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Qualification:</span>
          <span class="detail-value">{{ doctorInfo.qualification }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Experience Years:</span>
          <span class="detail-value">{{ doctorInfo.experienceYears }} years</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Consultation Fee:</span>
          <span class="detail-value">\u20B9{{ doctorInfo.consultationFee }}</span>
        </div>

      </div>

      <button (click)="editMode = !editMode" class="btn-edit">
        {{ editMode ? 'Cancel Edit' : 'Edit Profile' }}
      </button>

      <form *ngIf="editMode" [formGroup]="profileForm" (ngSubmit)="updateProfile()" class="profile-form">
        <div class="form-group">
          <label>Experience Years:</label>
          <input type="number" formControlName="experienceYears" required min="0">
        </div>

        <div class="form-group">
          <label>Consultation Fee (\u20B9):</label>
          <input type="number" formControlName="consultationFee" required min="0">
        </div>

        <button type="submit" class="btn-primary" [disabled]="profileForm.invalid || loading">
          {{ loading ? 'Updating...' : 'Update Profile' }}
        </button>
      </form>
    </div>
  </div>
</div>
`, styles: ['/* src/app/doctor/doctor-dashboard.component.css */\n.dashboard-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1 {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2 {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n}\n.tabs button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n}\n.tabs button:hover {\n  color: #0066cc;\n}\n.tabs button.active {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content {\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.loading {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.loading-spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #999;\n}\n.empty-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 1.2rem;\n  margin: 0;\n}\n.appointments-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.appointment-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.appointment-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  border-color: #667eea;\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.patient-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.patient-avatar img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.patient-info h3 {\n  margin: 0;\n  color: white;\n  font-size: 1.2rem;\n}\n.appointment-id {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n}\n.status-badge {\n  padding: 0.4rem 1rem;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge.pending {\n  background:\n    linear-gradient(\n      135deg,\n      #ffeaa7 0%,\n      #fdcb6e 100%);\n  color: #856404;\n}\n.status-badge.approved {\n  background:\n    linear-gradient(\n      135deg,\n      #74b9ff 0%,\n      #0984e3 100%);\n  color: white;\n}\n.status-badge.completed {\n  background:\n    linear-gradient(\n      135deg,\n      #55efc4 0%,\n      #00b894 100%);\n  color: white;\n}\n.status-badge.rejected {\n  background:\n    linear-gradient(\n      135deg,\n      #ff7675 0%,\n      #d63031 100%);\n  color: white;\n}\n.card-body {\n  padding: 1.5rem;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n  margin-bottom: 1rem;\n}\n.info-item {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.info-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.info-label {\n  font-size: 0.75rem;\n  color: #888;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.info-value {\n  font-size: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n.remarks-section {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n}\n.remarks-label {\n  font-weight: 700;\n  color: #667eea;\n  margin-bottom: 0.5rem;\n}\n.remarks-text {\n  color: #555;\n  line-height: 1.5;\n}\n.card-actions {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.btn-add-remarks {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.95rem;\n}\n.btn-add-remarks:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.profile-section {\n  max-width: 700px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 20px;\n  padding: 3rem;\n  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.profile-section::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: rotate 20s linear infinite;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.profile-details {\n  margin: 2rem 0;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 0;\n  border-bottom: 2px solid rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n}\n.detail-row:hover {\n  padding-left: 0.5rem;\n  border-bottom-color: rgba(102, 126, 234, 0.3);\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-label {\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  letter-spacing: 1.5px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detail-label::before {\n  content: "\\25cf";\n  color: #764ba2;\n  font-size: 0.6rem;\n}\n.detail-value {\n  color: #333;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-align: right;\n}\n.availability-badge {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.availability-badge.available {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.availability-badge.unavailable {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n}\n.btn-edit {\n  width: 100%;\n  padding: 1rem;\n  border: 3px solid white;\n  border-radius: 50px;\n  background: transparent;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n}\n.btn-edit:hover {\n  background: white;\n  color: #667eea;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);\n}\n.btn-edit:active {\n  transform: translateY(-1px);\n}\n.profile-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n  animation: slideIn 0.4s ease;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 0.75rem;\n  border: 2px solid rgba(102, 126, 234, 0.3);\n  border-radius: 8px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group textarea {\n  resize: vertical;\n  min-height: 120px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.fancy-modal {\n  background: white;\n  border-radius: 16px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h3 {\n  margin: 0;\n  color: white;\n  font-size: 1.3rem;\n}\n.modal-subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0.25rem 0 0 0;\n}\n.close-btn {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-footer {\n  padding: 1.5rem;\n  background: #f8f9fa;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.btn-save,\n.btn-cancel {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n}\n.btn-save {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-save:hover:not(:disabled) {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  background: #e9ecef;\n  color: #495057;\n}\n.btn-cancel:hover {\n  background: #dee2e6;\n}\n.btn-primary,\n.btn-secondary {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 1rem;\n  border-radius: 50px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary:hover {\n  background-color: #5a6268;\n}\n/*# sourceMappingURL=doctor-dashboard.component.css.map */\n'] }]
  }], () => [{ type: DoctorService }, { type: AppointmentService }, { type: FormBuilder }, { type: StorageService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoctorDashboardComponent, { className: "DoctorDashboardComponent", filePath: "src/app/doctor/doctor-dashboard.component.ts", lineNumber: 16 });
})();

// src/app/core/services/staff.service.ts
var API_URL4 = "http://patientappointmentbooking.runasp.net/api/staff";
var StaffService = class _StaffService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllStaff() {
    return this.http.get(`${API_URL4}`);
  }
  getStaffById(id) {
    return this.http.get(`${API_URL4}/${id}`);
  }
  createStaff(dto) {
    return this.http.post(`${API_URL4}`, dto);
  }
  updateStaff(id, dto) {
    return this.http.put(`${API_URL4}/${id}`, dto);
  }
  deleteStaff(id) {
    return this.http.delete(`${API_URL4}/${id}`);
  }
  approveAppointment(staffId, appointmentId) {
    return this.http.put(`${API_URL4}/${staffId}/appointments/${appointmentId}/approve`, {});
  }
  rejectAppointment(staffId, appointmentId, remarks) {
    return this.http.delete(`${API_URL4}/${staffId}/appointments/${appointmentId}/reject`);
  }
  completeAppointment(staffId, appointmentId, remarks) {
    return this.http.put(`${API_URL4}/${staffId}/appointments/${appointmentId}/complete`, JSON.stringify(remarks || ""), {
      headers: { "Content-Type": "application/json" }
    });
  }
  static \u0275fac = function StaffService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffService, factory: _StaffService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/staff/staff-dashboard.component.ts
var _c0 = (a0) => ({ backgroundColor: a0 });
function StaffDashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function StaffDashboardComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Loading appointments...");
    \u0275\u0275elementEnd();
  }
}
function StaffDashboardComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "No appointments found");
    \u0275\u0275elementEnd();
  }
}
function StaffDashboardComponent_div_11_div_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apt_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getDoneAlertMessage(apt_r3));
  }
}
function StaffDashboardComponent_div_11_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, StaffDashboardComponent_div_11_div_5_div_1_div_1_Template, 5, 1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "p")(12, "strong");
    \u0275\u0275text(13, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p")(17, "strong");
    \u0275\u0275text(18, "Time Slot:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "button", 22);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_5_div_1_Template_button_click_21_listener() {
      const apt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openStatusForm(apt_r3));
    });
    \u0275\u0275text(22, "Manage Status");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const apt_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isDoneAppointment(apt_r3));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(apt_r3.patientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Dr. ", apt_r3.doctorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(10, _c0, ctx_r0.getStatusColor(apt_r3.statusText || apt_r3.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(apt_r3.statusText || apt_r3.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 7, apt_r3.appointmentDate, "medium"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", apt_r3.timeSlotDisplay || apt_r3.timeSlot);
  }
}
function StaffDashboardComponent_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, StaffDashboardComponent_div_11_div_5_div_1_Template, 23, 12, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.appointments);
  }
}
function StaffDashboardComponent_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelStatusForm());
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelStatusForm());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 30)(8, "div", 31)(9, "label");
    \u0275\u0275text(10, "Action:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 32)(12, "button", 33);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approveAppointment());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 34);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.completeAppointment());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 35)(17, "button", 36);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rejectAppointment());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 37);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_11_div_6_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelStatusForm());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const appointment_r5 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Manage Appointment - ", appointment_r5.patientName);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.statusForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Processing..." : "Approve", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Processing..." : "Complete & Generate Bill", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Processing..." : "Reject", " ");
  }
}
function StaffDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Manage Appointments");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffDashboardComponent_div_11_div_3_Template, 2, 0, "div", 7)(4, StaffDashboardComponent_div_11_div_4_Template, 2, 0, "div", 8)(5, StaffDashboardComponent_div_11_div_5_Template, 2, 1, "div", 9)(6, StaffDashboardComponent_div_11_div_6_Template, 21, 8, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.appointments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.appointments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAppointment);
  }
}
function StaffDashboardComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Loading doctors...");
    \u0275\u0275elementEnd();
  }
}
function StaffDashboardComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "No doctors found");
    \u0275\u0275elementEnd();
  }
}
function StaffDashboardComponent_div_12_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p")(4, "strong");
    \u0275\u0275text(5, "Specialization:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Consultation Fee:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 43);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_12_div_5_div_1_Template_button_click_16_listener() {
      const doctor_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openAvailabilityForm(doctor_r7));
    });
    \u0275\u0275text(17, "Update Status");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doctor_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((doctor_r7.user == null ? null : doctor_r7.user.fullName) || doctor_r7.fullName || doctor_r7.name || "Doctor");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", doctor_r7.specialization);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20B9", doctor_r7.consultationFee);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(doctor_r7.availability.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doctor_r7.availability, " ");
  }
}
function StaffDashboardComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, StaffDashboardComponent_div_12_div_5_div_1_Template, 18, 6, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.doctors);
  }
}
function StaffDashboardComponent_div_12_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "label");
    \u0275\u0275text(2, "Delay Duration (hours):");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 51);
    \u0275\u0275elementEnd();
  }
}
function StaffDashboardComponent_div_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_12_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAvailabilityForm());
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_12_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "h3");
    \u0275\u0275text(4, "Update Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_12_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAvailabilityForm());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 30)(10, "div", 31)(11, "label");
    \u0275\u0275text(12, "Availability Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 45)(14, "option", 46);
    \u0275\u0275text(15, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 47);
    \u0275\u0275text(17, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 48);
    \u0275\u0275text(19, "Delayed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, StaffDashboardComponent_div_12_div_6_div_20_Template, 4, 0, "div", 49);
    \u0275\u0275elementStart(21, "div", 35)(22, "button", 50);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_12_div_6_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateDoctorAvailability());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 37);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_12_div_6_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAvailabilityForm());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Dr. ", ctx_r0.selectedDoctor.user == null ? null : ctx_r0.selectedDoctor.user.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.availabilityForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r0.availabilityForm.value.availability === "Delayed");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.availabilityForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Updating..." : "Update Status", " ");
  }
}
function StaffDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Doctor Availability - Today");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffDashboardComponent_div_12_div_3_Template, 2, 0, "div", 7)(4, StaffDashboardComponent_div_12_div_4_Template, 2, 0, "div", 8)(5, StaffDashboardComponent_div_12_div_5_Template, 2, 1, "div", 38)(6, StaffDashboardComponent_div_12_div_6_Template, 26, 5, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.doctors.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.doctors.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedDoctor);
  }
}
function StaffDashboardComponent_div_13_div_3_form_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 60);
    \u0275\u0275listener("ngSubmit", function StaffDashboardComponent_div_13_div_3_form_24_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.updateProfile());
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "label");
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31)(6, "label");
    \u0275\u0275text(7, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31)(10, "label");
    \u0275\u0275text(11, "Phone Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 64);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Updating..." : "Update Profile", " ");
  }
}
function StaffDashboardComponent_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "span", 56);
    \u0275\u0275text(4, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "span", 56);
    \u0275\u0275text(9, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 55)(13, "span", 56);
    \u0275\u0275text(14, "Phone Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 55)(18, "span", 56);
    \u0275\u0275text(19, "Shift Timing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 57);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 58);
    \u0275\u0275listener("click", function StaffDashboardComponent_div_13_div_3_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editMode = !ctx_r0.editMode);
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StaffDashboardComponent_div_13_div_3_form_24_Template, 15, 3, "form", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.staffInfo.fullName || (ctx_r0.staffInfo.user == null ? null : ctx_r0.staffInfo.user.fullName) || "Not Set");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.staffInfo.email || (ctx_r0.staffInfo.user == null ? null : ctx_r0.staffInfo.user.email) || "Not Set");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.staffInfo.phoneNumber || (ctx_r0.staffInfo.user == null ? null : ctx_r0.staffInfo.user.phoneNumber) || "Not Set");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.staffInfo.shiftTiming || "Not Set");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editMode ? "Cancel Edit" : "Edit Profile", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editMode);
  }
}
function StaffDashboardComponent_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2, "Loading profile...");
    \u0275\u0275elementEnd()();
  }
}
function StaffDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffDashboardComponent_div_13_div_3_Template, 25, 6, "div", 52)(4, StaffDashboardComponent_div_13_div_4_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.staffInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.staffInfo);
  }
}
var StaffDashboardComponent = class _StaffDashboardComponent {
  staffService;
  appointmentService;
  doctorService;
  fb;
  storage;
  alertService;
  activeTab = "appointments";
  appointments = [];
  doctors = [];
  staffInfo = null;
  loading = false;
  error;
  profileForm;
  selectedAppointment = null;
  statusForm;
  availabilityForm;
  selectedDoctor = null;
  editMode = false;
  constructor(staffService, appointmentService, doctorService, fb, storage, alertService) {
    this.staffService = staffService;
    this.appointmentService = appointmentService;
    this.doctorService = doctorService;
    this.fb = fb;
    this.storage = storage;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.initForms();
    this.loadAppointments();
    this.loadDoctors();
    this.loadStaffInfo();
  }
  initForms() {
    this.profileForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required]
    });
    this.statusForm = this.fb.group({
      status: [""],
      remarks: [""]
    });
    this.availabilityForm = this.fb.group({
      availability: ["", Validators.required],
      delayHours: [0]
    });
  }
  loadAppointments() {
    this.loading = true;
    this.appointmentService.getAllAppointments().subscribe({
      next: (data) => {
        console.log("All appointments from API:", data);
        data.forEach((apt) => {
          console.log(`Appointment ${apt.appointmentId}: status=${apt.status}, statusText=${apt.statusText}`);
        });
        const normalized = data.map((appointment) => this.normalizeAppointment(appointment));
        console.log("Normalized appointments:", normalized);
        this.appointments = normalized.filter((apt) => {
          const status = apt.statusText || apt.status || "";
          const statusStr = typeof status === "string" ? status : String(status);
          console.log("Checking appointment:", apt.appointmentId, "Status:", statusStr);
          return statusStr !== "Completed" && statusStr !== "Rejected";
        });
        console.log("Filtered appointments:", this.appointments);
        console.log("Done count:", this.getDoneAppointmentsCount());
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading appointments:", err);
        this.error = "Failed to load appointments";
        this.loading = false;
      }
    });
  }
  loadDoctors() {
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        console.log("Doctors data:", data);
        this.doctors = data;
      },
      error: (err) => {
        this.error = "Failed to load doctors";
      }
    });
  }
  loadStaffInfo() {
    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      console.warn("Staff ID not found");
      return;
    }
    this.staffService.getStaffById(staffId).subscribe({
      next: (data) => {
        this.staffInfo = data;
        this.profileForm.patchValue({
          fullName: data.fullName || data.user?.fullName || "",
          email: data.email || data.user?.email || "",
          phoneNumber: data.phoneNumber || data.user?.phoneNumber || ""
        });
      },
      error: (err) => {
        console.warn("Staff profile not found, continuing without profile data");
      }
    });
  }
  getDoctorName(doctorId) {
    const doctor = this.doctors.find((d) => d.doctorId === doctorId);
    return doctor ? doctor.user?.fullName : "Unknown";
  }
  getDoctorAvailability(doctorId) {
    const doctor = this.doctors.find((d) => d.doctorId === doctorId);
    return doctor ? doctor.availability : "Unknown";
  }
  openStatusForm(appointment) {
    this.selectedAppointment = appointment;
    this.statusForm.reset();
  }
  normalizeAppointment(appointment) {
    const slot = this.normalizeSlot(appointment.timeSlot || appointment.slotTime);
    const timeSlotDisplay = appointment.timeSlotDisplay || this.formatSlotWindow(slot);
    const statusText = appointment.statusText ?? appointment.status;
    return __spreadProps(__spreadValues({}, appointment), {
      timeSlot: slot,
      timeSlotDisplay,
      statusText
    });
  }
  normalizeSlot(slot) {
    if (!slot)
      return "";
    const parts = slot.split(":");
    const hours = (parts[0] ?? "").padStart(2, "0");
    const minutes = (parts[1] ?? "00").padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  formatSlotWindow(slot) {
    if (!slot)
      return "";
    const [h, m] = slot.split(":");
    const hours = Number(h);
    const minutes = Number(m);
    if (Number.isNaN(hours) || Number.isNaN(minutes))
      return slot;
    const start = `${this.toTwoDigits(hours)}:${this.toTwoDigits(minutes)}`;
    const endTotalMinutes = hours * 60 + minutes + 30;
    const endHours = Math.floor(endTotalMinutes / 60);
    const endMinutes = endTotalMinutes % 60;
    return `${start} - ${this.toTwoDigits(endHours)}:${this.toTwoDigits(endMinutes)}`;
  }
  toTwoDigits(value) {
    return value.toString().padStart(2, "0");
  }
  approveAppointment() {
    if (!this.selectedAppointment)
      return;
    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = "Staff ID not found";
      return;
    }
    this.loading = true;
    this.staffService.approveAppointment(staffId, this.selectedAppointment.appointmentId).subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("Appointment approved!", "Success");
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to approve appointment";
        this.loading = false;
      }
    });
  }
  rejectAppointment() {
    if (!this.selectedAppointment)
      return;
    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = "Staff ID not found";
      return;
    }
    this.loading = true;
    this.staffService.rejectAppointment(staffId, this.selectedAppointment.appointmentId, "").subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("Appointment rejected!", "Success");
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to reject appointment";
        this.loading = false;
      }
    });
  }
  completeAppointment() {
    if (!this.selectedAppointment)
      return;
    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = "Staff ID not found";
      return;
    }
    this.loading = true;
    this.staffService.completeAppointment(staffId, this.selectedAppointment.appointmentId, "").subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("Appointment marked as complete and bill generated!", "Success");
        this.loadAppointments();
        this.selectedAppointment = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to complete appointment";
        this.loading = false;
      }
    });
  }
  cancelStatusForm() {
    this.selectedAppointment = null;
    this.statusForm.reset();
  }
  updateProfile() {
    if (this.profileForm.invalid)
      return;
    let staffId = this.storage.getStaffId();
    if (!staffId) {
      staffId = this.storage.getUserId();
    }
    if (!staffId) {
      this.error = "Staff ID not found";
      return;
    }
    this.loading = true;
    this.staffService.updateStaff(staffId, this.profileForm.value).subscribe({
      next: (data) => {
        this.staffInfo = data;
        this.error = void 0;
        this.editMode = false;
        this.alertService.show("Profile updated successfully!", "Success");
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to update profile";
        this.loading = false;
      }
    });
  }
  getStatusColor(status) {
    if (!status)
      return "#6C757D";
    const statusColorMap = {
      "Pending": "#FFC107",
      "Approved": "#17A2B8",
      "Completed": "#28A745",
      "Rejected": "#DC3545",
      "Done": "#9C27B0"
    };
    return statusColorMap[status] || "#6C757D";
  }
  getStatusClass(status) {
    if (!status)
      return "";
    return status.toLowerCase();
  }
  getDoneAppointmentsCount() {
    const count = this.appointments.filter((apt) => {
      const status = apt.statusText || apt.status || "";
      const statusStr = typeof status === "string" ? status : String(status);
      return statusStr === "Done";
    }).length;
    console.log("Done appointments count:", count);
    return count;
  }
  getDoneAlertMessage(appointment) {
    const doctorName = appointment.doctorName || this.getDoctorName(appointment.doctorId) || "Doctor";
    return `Dr. ${doctorName} has completed this appointment`;
  }
  isDoneAppointment(appointment) {
    const status = appointment.statusText || appointment.status || "";
    const statusStr = typeof status === "string" ? status : String(status);
    const isDone = statusStr === "Done";
    console.log("Checking if Done - Appointment:", appointment.appointmentId, "Status:", statusStr, "isDone:", isDone);
    return isDone;
  }
  openAvailabilityForm(doctor) {
    this.selectedDoctor = doctor;
    this.availabilityForm.patchValue({
      availability: doctor.availability || "Available",
      delayHours: 0
    });
  }
  updateDoctorAvailability() {
    if (this.availabilityForm.invalid || !this.selectedDoctor)
      return;
    const formValue = this.availabilityForm.value;
    let availability = formValue.availability;
    if (availability === "Delayed" && formValue.delayHours > 0) {
      availability = `Delayed (${formValue.delayHours}h)`;
    }
    this.loading = true;
    this.doctorService.updateDoctorAvailability(this.selectedDoctor.doctorId, availability).subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("Doctor availability updated!", "Success");
        this.loadDoctors();
        this.selectedDoctor = null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to update availability";
        this.loading = false;
      }
    });
  }
  cancelAvailabilityForm() {
    this.selectedDoctor = null;
    this.availabilityForm.reset();
  }
  static \u0275fac = function StaffDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffDashboardComponent)(\u0275\u0275directiveInject(StaffService), \u0275\u0275directiveInject(AppointmentService), \u0275\u0275directiveInject(DoctorService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDashboardComponent, selectors: [["app-staff-dashboard"]], decls: 14, vars: 10, consts: [[1, "dashboard-container"], [1, "tabs"], [3, "click"], ["class", "error-message", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "error-message"], [1, "tab-content"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "appointments-list", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading"], [1, "empty-state"], [1, "appointments-list"], ["class", "appointment-card", 4, "ngFor", "ngForOf"], [1, "appointment-card"], ["class", "appointment-done-alert", 4, "ngIf"], [1, "card-header"], [1, "doctor-name"], [1, "status-badge", 3, "ngStyle"], [1, "card-body"], [1, "appointment-actions"], [1, "btn-primary", 3, "click"], [1, "appointment-done-alert"], [1, "alert-icon"], [1, "alert-text"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body", 3, "formGroup"], [1, "form-group"], [1, "button-group"], ["type", "button", 1, "btn-approve", 3, "click", "disabled"], ["type", "button", 1, "btn-complete", 3, "click", "disabled"], [1, "modal-footer"], ["type", "button", 1, "btn-reject", 3, "click", "disabled"], ["type", "button", 1, "btn-secondary", 3, "click"], ["class", "doctors-grid", 4, "ngIf"], [1, "doctors-grid"], ["class", "doctor-card", 4, "ngFor", "ngForOf"], [1, "doctor-card"], [1, "availability-badge"], [1, "btn-small", 3, "click"], [1, "modal-doctor-name"], ["formControlName", "availability", "required", ""], ["value", "Available"], ["value", "Absent"], ["value", "Delayed"], ["class", "form-group", 4, "ngIf"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], ["type", "number", "formControlName", "delayHours", "min", "0", "max", "24", "placeholder", "Enter hours"], ["class", "profile-section", 4, "ngIf"], [1, "profile-section"], [1, "profile-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "btn-edit", 3, "click"], ["class", "profile-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "profile-form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "fullName", "required", ""], ["type", "email", "formControlName", "email", "required", ""], ["type", "tel", "formControlName", "phoneNumber", "required", ""], ["type", "submit", 1, "btn-primary", 3, "disabled"]], template: function StaffDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Staff Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
      \u0275\u0275listener("click", function StaffDashboardComponent_Template_button_click_4_listener() {
        return ctx.activeTab = "appointments";
      });
      \u0275\u0275text(5, "Manage Appointments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function StaffDashboardComponent_Template_button_click_6_listener() {
        return ctx.activeTab = "doctors";
      });
      \u0275\u0275text(7, "Doctor Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function StaffDashboardComponent_Template_button_click_8_listener() {
        return ctx.activeTab = "profile";
      });
      \u0275\u0275text(9, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, StaffDashboardComponent_div_10_Template, 2, 1, "div", 3)(11, StaffDashboardComponent_div_11_Template, 7, 4, "div", 4)(12, StaffDashboardComponent_div_12_Template, 7, 4, "div", 4)(13, StaffDashboardComponent_div_13_Template, 5, 2, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab == "appointments");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "doctors");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "profile");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "appointments");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "doctors");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "profile");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, DatePipe], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0066cc;\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.done-alert[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f2994a 0%,\n      #f2c94c 100%);\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 4px 16px rgba(242, 153, 74, 0.3);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 4px 16px rgba(242, 153, 74, 0.3);\n  }\n  50% {\n    box-shadow: 0 8px 24px rgba(242, 153, 74, 0.5);\n  }\n}\n.alert-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  flex-shrink: 0;\n}\n.alert-content[_ngcontent-%COMP%] {\n  flex: 1;\n  color: white;\n}\n.alert-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.alert-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  opacity: 0.95;\n}\n.appointment-done-alert[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n  padding: 0.75rem 1rem;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(17, 153, 142, 0.3);\n  animation: _ngcontent-%COMP%_slideDown 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.appointment-done-alert[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  background: white;\n  color: #11998e;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n}\n.appointment-done-alert[_ngcontent-%COMP%]   .alert-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.95rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n  font-size: 1.1rem;\n}\n.appointments-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n.appointment-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  position: relative;\n}\n.appointment-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  transition: all 0.6s ease;\n  opacity: 0;\n}\n.appointment-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  top: -30%;\n  right: -30%;\n}\n.appointment-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.5);\n  transform: translateY(-8px) scale(1.02);\n}\n.card-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  position: relative;\n  z-index: 1;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  font-weight: 700;\n}\n.doctor-name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0.25rem 0 0 0;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  color: white;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 1;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.95);\n  position: relative;\n  z-index: 1;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  color: #333;\n  font-weight: 500;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n.appointment-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.doctors-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.doctor-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 16px;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.doctor-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  transition: all 0.6s ease;\n  opacity: 0;\n}\n.doctor-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  top: -30%;\n  right: -30%;\n}\n.doctor-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.5);\n  transform: translateY(-8px) scale(1.02);\n}\n.doctor-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 1;\n}\n.doctor-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  color: rgba(255, 255, 255, 0.95);\n  font-size: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.doctor-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n.btn-small[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid white;\n  border-radius: 25px;\n  background: white;\n  color: #667eea;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  position: relative;\n  z-index: 1;\n}\n.btn-small[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.95);\n  border-color: rgba(255, 255, 255, 0.95);\n}\n.btn-small[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n}\n.availability-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 1;\n}\n.availability-badge.available[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.availability-badge.unavailable[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n}\n.availability-badge.absent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n}\n.availability-badge.delayed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f2994a 0%,\n      #f2c94c 100%);\n  color: white;\n}\n.profile-section[_ngcontent-%COMP%] {\n  max-width: 700px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 20px;\n  padding: 3rem;\n  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.profile-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_rotate 20s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.profile-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 2px solid #0066cc;\n}\n.profile-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0066cc;\n  margin: 0.5rem 0;\n  font-size: 1.5rem;\n}\n.profile-header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.95rem;\n  margin: 0.25rem 0;\n}\n.profile-header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  border: none;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  z-index: 1;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 0;\n  border-bottom: 2px solid rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n}\n.detail-row[_ngcontent-%COMP%]:hover {\n  padding-left: 0.5rem;\n  border-bottom-color: rgba(102, 126, 234, 0.3);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  letter-spacing: 1.5px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detail-label[_ngcontent-%COMP%]::before {\n  content: "\\25cf";\n  color: #764ba2;\n  font-size: 0.6rem;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-align: right;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 3px solid white;\n  border-radius: 50px;\n  background: transparent;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #667eea;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);\n}\n.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_slideIn 0.4s ease;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n}\n.profile-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 2px solid rgba(102, 126, 234, 0.3);\n  transition: all 0.3s ease;\n}\n.profile-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.profile-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  padding: 1rem;\n  border-radius: 50px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.profile-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family: inherit;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 4px rgba(0, 102, 204, 0.3);\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0066cc;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #999;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-approve[_ngcontent-%COMP%], \n.btn-complete[_ngcontent-%COMP%], \n.btn-reject[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n  box-shadow: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn-approve[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);\n}\n.btn-approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(17, 153, 142, 0.6);\n}\n.btn-complete[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.btn-complete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n.btn-reject[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(235, 51, 73, 0.4);\n}\n.btn-reject[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(235, 51, 73, 0.6);\n}\n.btn-approve[_ngcontent-%COMP%]:disabled, \n.btn-complete[_ngcontent-%COMP%]:disabled, \n.btn-reject[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-doctor-name[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n  color: #667eea;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=staff-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-staff-dashboard", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="dashboard-container">
  <h1>Staff Dashboard</h1>

  <div class="tabs">
    <button (click)="activeTab='appointments'" [class.active]="activeTab=='appointments'">Manage Appointments</button>
    <button (click)="activeTab='doctors'" [class.active]="activeTab=='doctors'">Doctor Availability</button>
    <button (click)="activeTab='profile'" [class.active]="activeTab=='profile'">My Profile</button>
  </div>

  <div *ngIf="error" class="error-message">{{ error }}</div>

  <!-- Appointments Tab -->
  <div *ngIf="activeTab=='appointments'" class="tab-content">
    <h2>Manage Appointments</h2>
    <div *ngIf="loading" class="loading">Loading appointments...</div>

    <div *ngIf="!loading && appointments.length === 0" class="empty-state">No appointments found</div>

    <div *ngIf="!loading && appointments.length > 0" class="appointments-list">
      <div *ngFor="let apt of appointments" class="appointment-card">
        <div *ngIf="isDoneAppointment(apt)" class="appointment-done-alert">
          <span class="alert-icon">\u2713</span>
          <span class="alert-text">{{ getDoneAlertMessage(apt) }}</span>
        </div>
        <div class="card-header">
          <div>
            <h3>{{ apt.patientName }}</h3>
            <p class="doctor-name">Dr. {{ apt.doctorName }}</p>
          </div>
          <span class="status-badge" [ngStyle]="{ backgroundColor: getStatusColor(apt.statusText || apt.status) }">{{ apt.statusText || apt.status }}</span>
        </div>
        <div class="card-body">
          <p><strong>Date:</strong> {{ apt.appointmentDate | date:'medium' }}</p>
          <p><strong>Time Slot:</strong> {{ apt.timeSlotDisplay || apt.timeSlot }}</p>
          <div class="appointment-actions">
            <button (click)="openStatusForm(apt)" class="btn-primary">Manage Status</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Form Modal -->
    <div *ngIf="selectedAppointment as appointment" class="modal-overlay" (click)="cancelStatusForm()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Manage Appointment - {{ appointment.patientName }}</h3>
          <button class="close-btn" (click)="cancelStatusForm()">\xD7</button>
        </div>
        <form [formGroup]="statusForm" class="modal-body">
          <div class="form-group">
            <label>Action:</label>
            <div class="button-group">
              <button type="button" (click)="approveAppointment()" class="btn-approve" [disabled]="loading">
                {{ loading ? 'Processing...' : 'Approve' }}
              </button>
              <button type="button" (click)="completeAppointment()" class="btn-complete" [disabled]="loading">
                {{ loading ? 'Processing...' : 'Complete & Generate Bill' }}
              </button>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" (click)="rejectAppointment()" class="btn-reject" [disabled]="loading">
              {{ loading ? 'Processing...' : 'Reject' }}
            </button>
            <button type="button" (click)="cancelStatusForm()" class="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Doctor Availability Tab -->
  <div *ngIf="activeTab=='doctors'" class="tab-content">
    <h2>Doctor Availability - Today</h2>
    <div *ngIf="loading" class="loading">Loading doctors...</div>

    <div *ngIf="!loading && doctors.length === 0" class="empty-state">No doctors found</div>

    <div *ngIf="!loading && doctors.length > 0" class="doctors-grid">
      <div *ngFor="let doctor of doctors" class="doctor-card">
        <h3>{{ doctor.user?.fullName || doctor.fullName || doctor.name || 'Doctor' }}</h3>
        <p><strong>Specialization:</strong> {{ doctor.specialization }}</p>
        <p><strong>Consultation Fee:</strong> \u20B9{{ doctor.consultationFee }}</p>
        <p>
          <strong>Status:</strong>
          <span class="availability-badge" [class]="doctor.availability.toLowerCase()">
            {{ doctor.availability }}
          </span>
        </p>
        <button (click)="openAvailabilityForm(doctor)" class="btn-small">Update Status</button>
      </div>
    </div>

    <!-- Availability Form Modal -->
    <div *ngIf="selectedDoctor" class="modal-overlay" (click)="cancelAvailabilityForm()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Update Availability</h3>
          <p class="modal-doctor-name">Dr. {{ selectedDoctor.user?.fullName }}</p>
          <button class="close-btn" (click)="cancelAvailabilityForm()">\xD7</button>
        </div>
        <form [formGroup]="availabilityForm" class="modal-body">
          <div class="form-group">
            <label>Availability Status:</label>
            <select formControlName="availability" required>
              <option value="Available">Available</option>
              <option value="Absent">Absent</option>
              <option value="Delayed">Delayed</option>
            </select>
          </div>

          <div class="form-group" *ngIf="availabilityForm.value.availability === 'Delayed'">
            <label>Delay Duration (hours):</label>
            <input type="number" formControlName="delayHours" min="0" max="24" placeholder="Enter hours">
          </div>

          <div class="modal-footer">
            <button type="button" (click)="updateDoctorAvailability()" class="btn-primary" [disabled]="availabilityForm.invalid || loading">
              {{ loading ? 'Updating...' : 'Update Status' }}
            </button>
            <button type="button" (click)="cancelAvailabilityForm()" class="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Profile Tab -->
  <div *ngIf="activeTab=='profile'" class="tab-content">
    <h2>My Profile</h2>
    <div *ngIf="staffInfo" class="profile-section">
      <div class="profile-details">
        <div class="detail-row">
          <span class="detail-label">Name:</span>
          <span class="detail-value">{{ staffInfo.fullName || staffInfo.user?.fullName || 'Not Set' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">{{ staffInfo.email || staffInfo.user?.email || 'Not Set' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone Number:</span>
          <span class="detail-value">{{ staffInfo.phoneNumber || staffInfo.user?.phoneNumber || 'Not Set' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Shift Timing:</span>
          <span class="detail-value">{{ staffInfo.shiftTiming || 'Not Set' }}</span>
        </div>
      </div>

      <button (click)="editMode = !editMode" class="btn-edit">
        {{ editMode ? 'Cancel Edit' : 'Edit Profile' }}
      </button>

      <form *ngIf="editMode" [formGroup]="profileForm" (ngSubmit)="updateProfile()" class="profile-form">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" formControlName="fullName" required>
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" formControlName="email" required>
        </div>

        <div class="form-group">
          <label>Phone Number:</label>
          <input type="tel" formControlName="phoneNumber" required>
        </div>

        <button type="submit" class="btn-primary" [disabled]="profileForm.invalid || loading">
          {{ loading ? 'Updating...' : 'Update Profile' }}
        </button>
      </form>
    </div>

    <div *ngIf="!staffInfo" class="empty-state">
      <p>Loading profile...</p>
    </div>
  </div>
</div>
`, styles: ['/* src/app/staff/staff-dashboard.component.css */\n.dashboard-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1 {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2 {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n  flex-wrap: wrap;\n}\n.tabs button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.tabs button:hover {\n  color: #0066cc;\n}\n.tabs button.active {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content {\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.done-alert {\n  background:\n    linear-gradient(\n      135deg,\n      #f2994a 0%,\n      #f2c94c 100%);\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 4px 16px rgba(242, 153, 74, 0.3);\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    box-shadow: 0 4px 16px rgba(242, 153, 74, 0.3);\n  }\n  50% {\n    box-shadow: 0 8px 24px rgba(242, 153, 74, 0.5);\n  }\n}\n.alert-icon {\n  font-size: 2.5rem;\n  flex-shrink: 0;\n}\n.alert-content {\n  flex: 1;\n  color: white;\n}\n.alert-content strong {\n  display: block;\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.alert-content p {\n  margin: 0;\n  font-size: 1rem;\n  opacity: 0.95;\n}\n.appointment-done-alert {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n  padding: 0.75rem 1rem;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(17, 153, 142, 0.3);\n  animation: slideDown 0.4s ease;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.appointment-done-alert .alert-icon {\n  font-size: 1.5rem;\n  background: white;\n  color: #11998e;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n}\n.appointment-done-alert .alert-text {\n  flex: 1;\n  font-size: 0.95rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.loading {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n  font-size: 1.1rem;\n}\n.appointments-list {\n  display: grid;\n  gap: 1.5rem;\n}\n.appointment-card {\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  position: relative;\n}\n.appointment-card::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  transition: all 0.6s ease;\n  opacity: 0;\n}\n.appointment-card:hover::before {\n  opacity: 1;\n  top: -30%;\n  right: -30%;\n}\n.appointment-card:hover {\n  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.5);\n  transform: translateY(-8px) scale(1.02);\n}\n.card-header {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  position: relative;\n  z-index: 1;\n}\n.card-header h3 {\n  margin: 0;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  font-weight: 700;\n}\n.doctor-name {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.9rem;\n  margin: 0.25rem 0 0 0;\n  font-weight: 500;\n}\n.status-badge {\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  color: white;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 1;\n}\n.card-body {\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.95);\n  position: relative;\n  z-index: 1;\n}\n.card-body p {\n  margin: 0.75rem 0;\n  color: #333;\n  font-weight: 500;\n}\n.card-body p strong {\n  color: #667eea;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n.appointment-actions {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #eee;\n}\n.doctors-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.doctor-card {\n  border: none;\n  border-radius: 16px;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.doctor-card::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  transition: all 0.6s ease;\n  opacity: 0;\n}\n.doctor-card:hover::before {\n  opacity: 1;\n  top: -30%;\n  right: -30%;\n}\n.doctor-card:hover {\n  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.5);\n  transform: translateY(-8px) scale(1.02);\n}\n.doctor-card h3 {\n  color: white;\n  margin: 0 0 1.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 1;\n}\n.doctor-card p {\n  margin: 0.75rem 0;\n  color: rgba(255, 255, 255, 0.95);\n  font-size: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.doctor-card p strong {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n.btn-small {\n  margin-top: 1.5rem;\n  padding: 0.75rem 1.5rem;\n  border: 2px solid white;\n  border-radius: 25px;\n  background: white;\n  color: #667eea;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  position: relative;\n  z-index: 1;\n}\n.btn-small:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.95);\n  border-color: rgba(255, 255, 255, 0.95);\n}\n.btn-small:active {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n}\n.availability-badge {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 1;\n}\n.availability-badge.available {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.availability-badge.unavailable {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n}\n.availability-badge.absent {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n}\n.availability-badge.delayed {\n  background:\n    linear-gradient(\n      135deg,\n      #f2994a 0%,\n      #f2c94c 100%);\n  color: white;\n}\n.profile-section {\n  max-width: 700px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 20px;\n  padding: 3rem;\n  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.profile-section::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: rotate 20s linear infinite;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.profile-header {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 2px solid #0066cc;\n}\n.profile-header h3 {\n  color: #0066cc;\n  margin: 0.5rem 0;\n  font-size: 1.5rem;\n}\n.profile-header .email {\n  color: #666;\n  font-size: 0.95rem;\n  margin: 0.25rem 0;\n}\n.profile-header .phone {\n  color: #999;\n  font-size: 0.9rem;\n}\n.profile-details {\n  margin: 2rem 0;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  border: none;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  z-index: 1;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 0;\n  border-bottom: 2px solid rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n}\n.detail-row:hover {\n  padding-left: 0.5rem;\n  border-bottom-color: rgba(102, 126, 234, 0.3);\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-label {\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  letter-spacing: 1.5px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detail-label::before {\n  content: "\\25cf";\n  color: #764ba2;\n  font-size: 0.6rem;\n}\n.detail-value {\n  color: #333;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-align: right;\n}\n.btn-edit {\n  width: 100%;\n  padding: 1rem;\n  border: 3px solid white;\n  border-radius: 50px;\n  background: transparent;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);\n}\n.btn-edit:hover {\n  background: white;\n  color: #667eea;\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);\n}\n.btn-edit:active {\n  transform: translateY(-1px);\n}\n.profile-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n  animation: slideIn 0.4s ease;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-form .form-group label {\n  color: #667eea;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n}\n.profile-form .form-group input {\n  border: 2px solid rgba(102, 126, 234, 0.3);\n  transition: all 0.3s ease;\n}\n.profile-form .form-group input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.profile-form .btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  padding: 1rem;\n  border-radius: 50px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.profile-form .btn-primary:hover:not(:disabled) {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group label {\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family: inherit;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 4px rgba(0, 102, 204, 0.3);\n}\n.button-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.button-group button {\n  flex: 1;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h3 {\n  margin: 0;\n  color: #0066cc;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #999;\n}\n.close-btn:hover {\n  color: #333;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-footer {\n  padding: 1.5rem;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n.btn-primary,\n.btn-secondary,\n.btn-approve,\n.btn-complete,\n.btn-reject {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n.btn-primary:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n  box-shadow: none;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary:hover {\n  background-color: #5a6268;\n}\n.btn-approve {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);\n}\n.btn-approve:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(17, 153, 142, 0.6);\n}\n.btn-complete {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.btn-complete:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n.btn-reject {\n  background:\n    linear-gradient(\n      135deg,\n      #eb3349 0%,\n      #f45c43 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(235, 51, 73, 0.4);\n}\n.btn-reject:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(235, 51, 73, 0.6);\n}\n.btn-approve:disabled,\n.btn-complete:disabled,\n.btn-reject:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-doctor-name {\n  margin: 0.5rem 0 0 0;\n  color: #667eea;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=staff-dashboard.component.css.map */\n'] }]
  }], () => [{ type: StaffService }, { type: AppointmentService }, { type: DoctorService }, { type: FormBuilder }, { type: StorageService }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDashboardComponent, { className: "StaffDashboardComponent", filePath: "src/app/staff/staff-dashboard.component.ts", lineNumber: 17 });
})();

// src/app/core/services/admin.service.ts
var API_URL5 = "http://patientappointmentbooking.runasp.net/api/admin";
var AdminService = class _AdminService {
  http;
  constructor(http) {
    this.http = http;
  }
  getCounts() {
    return this.http.get(`${API_URL5}/counts`);
  }
  getRevenueByDateRange(from, to) {
    return this.http.get(`${API_URL5}/revenue?from=${from}&to=${to}`);
  }
  getPendingUsers() {
    return this.http.get(`${API_URL5}/pending-users`);
  }
  getUpcomingAppointments(from, to) {
    return this.http.get(`${API_URL5}/upcoming-appointments?from=${from}&to=${to}`);
  }
  static \u0275fac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/user.service.ts
var API_URL6 = "http://patientappointmentbooking.runasp.net/api/users";
var UserService = class _UserService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAllUsers() {
    return this.http.get(`${API_URL6}`);
  }
  getUserById(id) {
    return this.http.get(`${API_URL6}/${id}`);
  }
  updateUser(id, dto) {
    return this.http.put(`${API_URL6}/${id}`, dto);
  }
  approveUser(dto) {
    console.log("UserService sending:", dto);
    return this.http.put(`${API_URL6}/approve`, dto);
  }
  deleteUser(id) {
    return this.http.delete(`${API_URL6}/${id}`);
  }
  getUsersByRole(role) {
    return this.http.get(`${API_URL6}?role=${role}`);
  }
  syncProfessionals() {
    return this.http.post(`${API_URL6}/sync-professionals`, {});
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/admin/admin-dashboard.component.ts
function AdminDashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminDashboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "System Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275text(8, "Total Doctors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13, "Total Patients");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10);
    \u0275\u0275text(18, "Total Staff");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 8)(20, "div", 9);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10);
    \u0275\u0275text(23, "Total Appointments");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.counts.totalDoctors);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.counts.totalPatients);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.counts.totalStaff);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.counts.totalAppointments);
  }
}
function AdminDashboardComponent_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Loading pending users...");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No pending approvals");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_16_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "button", 22);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_16_div_5_tr_17_Template_button_click_15_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openApprovalForm(user_r3));
    });
    \u0275\u0275text(16, "Review");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.createdAt ? \u0275\u0275pipeBind2(10, 7, user_r3.createdAt, "shortDate") : "-");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStatusClass(user_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r3.status);
  }
}
function AdminDashboardComponent_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Registered On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, AdminDashboardComponent_div_16_div_5_tr_17_Template, 17, 10, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.pendingUsers);
  }
}
function AdminDashboardComponent_div_16_div_6_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "Shift Timing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 38)(4, "option", 31);
    \u0275\u0275text(5, "Select shift timing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 39);
    \u0275\u0275text(7, "Morning (9:00 AM - 5:00 PM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 40);
    \u0275\u0275text(9, "Afternoon (2:00 PM - 10:00 PM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 41);
    \u0275\u0275text(11, "Night (10:00 PM - 6:00 AM)");
    \u0275\u0275elementEnd()()();
  }
}
function AdminDashboardComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_16_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelApproval());
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_16_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 25)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_16_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelApproval());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 27)(8, "div", 28)(9, "p")(10, "strong");
    \u0275\u0275text(11, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Role:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Registered:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 29)(27, "label");
    \u0275\u0275text(28, "Decision:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 30)(30, "option", 31);
    \u0275\u0275text(31, "Select an action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 32);
    \u0275\u0275text(33, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 33);
    \u0275\u0275text(35, "Reject");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, AdminDashboardComponent_div_16_div_6_div_36_Template, 12, 0, "div", 34);
    \u0275\u0275elementStart(37, "div", 35)(38, "button", 36);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_16_div_6_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approveUser());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 37);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_16_div_6_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelApproval());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Review ", ctx_r0.selectedUser.role, " Registration");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.approvalForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedUser.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedUser.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedUser.role);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 9, ctx_r0.selectedUser.createdAt, "fullDate"));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r0.selectedUser.role === "Staff" && ctx_r0.approvalForm.value.status === "Approved");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.approvalForm.invalid || ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Processing..." : "Confirm", " ");
  }
}
function AdminDashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2, "Pending User Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_16_div_3_Template, 2, 0, "div", 11)(4, AdminDashboardComponent_div_16_div_4_Template, 2, 0, "div", 12)(5, AdminDashboardComponent_div_16_div_5_Template, 18, 1, "div", 13)(6, AdminDashboardComponent_div_16_div_6_Template, 42, 12, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.pendingUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.pendingUsers.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedUser);
  }
}
function AdminDashboardComponent_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Loading doctors...");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No doctors registered");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_17_div_5_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "button", 42);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_17_div_5_tr_13_Template_button_click_8_listener() {
      const doctor_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteDoctor(doctor_r6.doctorId));
    });
    \u0275\u0275text(9, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const doctor_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((doctor_r6.user == null ? null : doctor_r6.user.fullName) || doctor_r6.fullName || doctor_r6.name || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doctor_r6.specialization || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", doctor_r6.consultationFee || 0);
  }
}
function AdminDashboardComponent_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Consultation Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, AdminDashboardComponent_div_17_div_5_tr_13_Template, 10, 3, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.doctors);
  }
}
function AdminDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_17_div_3_Template, 2, 0, "div", 11)(4, AdminDashboardComponent_div_17_div_4_Template, 2, 0, "div", 12)(5, AdminDashboardComponent_div_17_div_5_Template, 14, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("All Doctors (", ctx_r0.doctors.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.doctors.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.doctors.length > 0);
  }
}
function AdminDashboardComponent_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Loading patients...");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No patients registered");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_18_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 42);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_18_div_5_tr_17_Template_button_click_13_listener() {
      const patient_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteUser(patient_r8.userId, "Patient"));
    });
    \u0275\u0275text(14, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const patient_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r8.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r8.phoneNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r8.gender || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(patient_r8.createdAt ? \u0275\u0275pipeBind2(11, 5, patient_r8.createdAt, "shortDate") : "-");
  }
}
function AdminDashboardComponent_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Registered On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, AdminDashboardComponent_div_18_div_5_tr_17_Template, 15, 8, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.patients);
  }
}
function AdminDashboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_18_div_3_Template, 2, 0, "div", 11)(4, AdminDashboardComponent_div_18_div_4_Template, 2, 0, "div", 12)(5, AdminDashboardComponent_div_18_div_5_Template, 18, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("All Patients (", ctx_r0.patients.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.patients.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.patients.length > 0);
  }
}
function AdminDashboardComponent_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Loading staff...");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No staff registered");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_19_div_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 42);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_19_div_5_tr_17_Template_button_click_12_listener() {
      const staffMember_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteStaff(staffMember_r10.staffId));
    });
    \u0275\u0275text(13, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const staffMember_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staffMember_r10.fullName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staffMember_r10.email || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staffMember_r10.phoneNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staffMember_r10.position || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staffMember_r10.department || "N/A");
  }
}
function AdminDashboardComponent_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, AdminDashboardComponent_div_19_div_5_tr_17_Template, 14, 5, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.staff);
  }
}
function AdminDashboardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminDashboardComponent_div_19_div_3_Template, 2, 0, "div", 11)(4, AdminDashboardComponent_div_19_div_4_Template, 2, 0, "div", 12)(5, AdminDashboardComponent_div_19_div_5_Template, 18, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("All Staff (", ctx_r0.staff.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.staff.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.staff.length > 0);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  adminService;
  userService;
  doctorService;
  staffService;
  appointmentService;
  fb;
  alertService;
  activeTab = "overview";
  counts = { totalDoctors: 0, totalPatients: 0, totalStaff: 0, totalAppointments: 0 };
  pendingUsers = [];
  doctors = [];
  patients = [];
  staff = [];
  loading = false;
  error;
  approvalForm;
  selectedUser = null;
  constructor(adminService, userService, doctorService, staffService, appointmentService, fb, alertService) {
    this.adminService = adminService;
    this.userService = userService;
    this.doctorService = doctorService;
    this.staffService = staffService;
    this.appointmentService = appointmentService;
    this.fb = fb;
    this.alertService = alertService;
  }
  ngOnInit() {
    this.initForm();
    this.loadCounts();
    this.loadPendingUsers();
    this.loadDoctors();
    this.loadPatients();
    this.loadStaff();
  }
  initForm() {
    this.approvalForm = this.fb.group({
      status: ["", Validators.required],
      shiftTiming: [""]
    });
  }
  loadCounts() {
    this.adminService.getCounts().subscribe({
      next: (data) => {
        this.counts = data;
      },
      error: (err) => {
        this.error = "Failed to load counts";
      }
    });
  }
  loadPendingUsers() {
    this.adminService.getPendingUsers().subscribe({
      next: (data) => {
        this.pendingUsers = data;
      },
      error: (err) => {
        this.error = "Failed to load pending users";
      }
    });
  }
  loadDoctors() {
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        console.log("Doctors data:", data);
        this.doctors = data;
      },
      error: (err) => {
        this.error = "Failed to load doctors";
      }
    });
  }
  loadPatients() {
    this.userService.getUsersByRole("Patient").subscribe({
      next: (data) => {
        this.patients = data.filter((p) => {
          const role = typeof p.role === "string" ? p.role : typeof p.role === "number" ? p.role === 4 ? "Patient" : "" : "";
          return role === "Patient";
        });
      },
      error: (err) => {
        this.error = "Failed to load patients";
      }
    });
  }
  loadStaff() {
    this.userService.getUsersByRole("Staff").subscribe({
      next: (users) => {
        this.staff = users.filter((u) => u.role === "Staff" || u.role === 3).map((user) => ({
          staffId: user.userId,
          userId: user.userId,
          fullName: user.fullName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          department: "General",
          position: "Staff"
        }));
      },
      error: (err) => {
        this.error = "Failed to load staff";
        this.staff = [];
      }
    });
  }
  openApprovalForm(user) {
    this.selectedUser = user;
    this.approvalForm.reset();
  }
  approveUser() {
    if (!this.selectedUser || this.approvalForm.invalid)
      return;
    const statusMap = { "Approved": 2, "Rejected": 3 };
    const dto = {
      userId: this.selectedUser.userId,
      status: statusMap[this.approvalForm.value.status]
    };
    if (this.selectedUser.role === "Staff" && this.approvalForm.value.status === "Approved") {
      dto.shiftTiming = this.approvalForm.value.shiftTiming || "9:00 AM - 5:00 PM";
    }
    console.log("Approving user:", this.selectedUser);
    console.log("Sending DTO:", dto);
    this.loading = true;
    this.userService.approveUser(dto).subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("User status updated!", "Success");
        this.loadPendingUsers();
        this.loadDoctors();
        this.loadStaff();
        this.selectedUser = null;
        this.loading = false;
      },
      error: (err) => {
        console.error("Approval error:", err);
        const errorMsg = err?.error?.message || err?.error || err?.statusText || "Failed to update user status";
        this.error = typeof errorMsg === "string" ? errorMsg : JSON.stringify(errorMsg);
        this.alertService.show("Error: " + this.error, "Error");
        this.loading = false;
      }
    });
  }
  deleteUser(userId, role) {
    if (!confirm(`Are you sure you want to delete this ${role}?`))
      return;
    this.loading = true;
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("Patient deleted successfully!", "Success");
        this.loadPatients();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        console.error("Delete error:", err);
        const errorMsg = err?.error?.message || err?.error || "Failed to delete patient";
        this.error = typeof errorMsg === "string" ? errorMsg : JSON.stringify(errorMsg);
        this.alertService.show("Error: " + this.error, "Error");
        this.loading = false;
      }
    });
  }
  deleteStaff(userId) {
    if (!confirm("Are you sure you want to delete this staff member?"))
      return;
    this.loading = true;
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.error = void 0;
        alert("Staff member deleted successfully!");
        this.loadStaff();
        this.loadCounts();
        this.loading = false;
      },
      error: (err) => {
        console.error("Delete staff error:", err);
        if (err?.error?.text && err.error.text.includes("deleted successfully")) {
          this.error = void 0;
          this.alertService.show("Staff member deleted successfully!", "Success");
          this.loadStaff();
          this.loadCounts();
          this.loading = false;
        } else {
          const errorMsg = err?.error?.message || err?.statusText || "Failed to delete staff";
          this.error = typeof errorMsg === "string" ? errorMsg : "Failed to delete staff";
          this.alertService.show("Error: " + this.error, "Error");
          this.loading = false;
        }
      }
    });
  }
  deleteDoctor(doctorId) {
    if (!confirm("Are you sure you want to delete this doctor?"))
      return;
    this.loading = true;
    this.doctorService.deleteDoctor(doctorId).subscribe({
      next: () => {
        this.error = void 0;
        this.alertService.show("Doctor deleted!", "Success");
        this.loadDoctors();
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error ?? "Failed to delete doctor";
        this.loading = false;
      }
    });
  }
  cancelApproval() {
    this.selectedUser = null;
    this.approvalForm.reset();
  }
  getStatusClass(status) {
    if (!status)
      return "pending";
    const statusStr = typeof status === "number" ? ["", "Pending", "Approved", "Rejected"][status] || "Pending" : status;
    const statusMap = {
      "Pending": "pending",
      "Approved": "approved",
      "Rejected": "rejected",
      "1": "pending",
      "2": "approved",
      "3": "rejected"
    };
    return statusMap[statusStr] || "pending";
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(DoctorService), \u0275\u0275directiveInject(StaffService), \u0275\u0275directiveInject(AppointmentService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AlertService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 20, vars: 16, consts: [[1, "dashboard-container"], [1, "tabs"], [3, "click"], ["class", "error-message", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "error-message"], [1, "tab-content"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-number"], [1, "stat-label"], ["class", "loading", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "users-table-wrapper", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading"], [1, "empty-state"], [1, "users-table-wrapper"], [1, "users-table"], [4, "ngFor", "ngForOf"], [1, "role-badge"], [1, "status-badge"], [1, "btn-small", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body", 3, "formGroup"], [1, "user-info"], [1, "form-group"], ["formControlName", "status", "required", ""], ["value", ""], ["value", "Approved"], ["value", "Rejected"], ["class", "form-group", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn-secondary", 3, "click"], ["formControlName", "shiftTiming", "required", ""], ["value", "9:00 AM - 5:00 PM"], ["value", "2:00 PM - 10:00 PM"], ["value", "10:00 PM - 6:00 AM"], [1, "btn-danger", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Admin Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "button", 2);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_4_listener() {
        return ctx.activeTab = "overview";
      });
      \u0275\u0275text(5, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_6_listener() {
        return ctx.activeTab = "pending";
      });
      \u0275\u0275text(7, "Pending Approvals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_8_listener() {
        return ctx.activeTab = "doctors";
      });
      \u0275\u0275text(9, "All Doctors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 2);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_10_listener() {
        return ctx.activeTab = "patients";
      });
      \u0275\u0275text(11, "All Patients");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 2);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_12_listener() {
        return ctx.activeTab = "staff";
      });
      \u0275\u0275text(13, "All Staff");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, AdminDashboardComponent_div_14_Template, 2, 1, "div", 3)(15, AdminDashboardComponent_div_15_Template, 24, 4, "div", 4)(16, AdminDashboardComponent_div_16_Template, 7, 4, "div", 4)(17, AdminDashboardComponent_div_17_Template, 6, 4, "div", 4)(18, AdminDashboardComponent_div_18_Template, 6, 4, "div", 4)(19, AdminDashboardComponent_div_19_Template, 6, 4, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab == "overview");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "pending");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "doctors");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "patients");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab == "staff");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "overview");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "pending");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "doctors");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "patients");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab == "staff");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, DatePipe], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n  flex-wrap: wrap;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #0066cc;\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n  font-size: 1.1rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #004499 100%);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);\n  transition: transform 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n.users-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0066cc;\n  color: white;\n  padding: 1rem;\n  text-align: left;\n  font-weight: bold;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #eee;\n}\n.users-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.status-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%], \n.availability-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 0.85rem;\n  display: inline-block;\n}\n.status-badge.pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.status-badge.rejected[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  color: #0066cc;\n}\n.availability-badge.available[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.availability-badge.unavailable[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0066cc;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #999;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  color: #555;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 4px rgba(0, 102, 204, 0.3);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-small[_ngcontent-%COMP%], \n.btn-danger[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0066cc;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0052a3;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  background-color: #0066cc;\n  color: white;\n}\n.btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #0052a3;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  background-color: #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #c82333;\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .tabs[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="dashboard-container">
  <h1>Admin Dashboard</h1>

  <div class="tabs">
    <button (click)="activeTab='overview'" [class.active]="activeTab=='overview'">Overview</button>
    <button (click)="activeTab='pending'" [class.active]="activeTab=='pending'">Pending Approvals</button>
    <button (click)="activeTab='doctors'" [class.active]="activeTab=='doctors'">All Doctors</button>
    <button (click)="activeTab='patients'" [class.active]="activeTab=='patients'">All Patients</button>
    <button (click)="activeTab='staff'" [class.active]="activeTab=='staff'">All Staff</button>
  </div>

  <div *ngIf="error" class="error-message">{{ error }}</div>

  <!-- Overview Tab -->
  <div *ngIf="activeTab=='overview'" class="tab-content">
    <h2>System Overview</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-number">{{ counts.totalDoctors }}</div>
        <div class="stat-label">Total Doctors</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ counts.totalPatients }}</div>
        <div class="stat-label">Total Patients</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ counts.totalStaff }}</div>
        <div class="stat-label">Total Staff</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ counts.totalAppointments }}</div>
        <div class="stat-label">Total Appointments</div>
      </div>
    </div>
  </div>

  <!-- Pending Approvals Tab -->
  <div *ngIf="activeTab=='pending'" class="tab-content">
    <h2>Pending User Approvals</h2>
    <div *ngIf="loading" class="loading">Loading pending users...</div>

    <div *ngIf="!loading && pendingUsers.length === 0" class="empty-state">No pending approvals</div>

    <div *ngIf="!loading && pendingUsers.length > 0" class="users-table-wrapper">
      <table class="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Registered On</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of pendingUsers">
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span class="role-badge">{{ user.role }}</span>
            </td>
            <td>{{ user.createdAt ? (user.createdAt | date:'shortDate') : '-' }}</td>
            <td>
              <span class="status-badge" [class]="getStatusClass(user.status)">{{ user.status }}</span>
            </td>
            <td>
              <button (click)="openApprovalForm(user)" class="btn-small">Review</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Approval Form Modal -->
    <div *ngIf="selectedUser" class="modal-overlay" (click)="cancelApproval()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Review {{ selectedUser.role }} Registration</h3>
          <button class="close-btn" (click)="cancelApproval()">\xD7</button>
        </div>
        <form [formGroup]="approvalForm" class="modal-body">
          <div class="user-info">
            <p><strong>Name:</strong> {{ selectedUser.fullName }}</p>
            <p><strong>Email:</strong> {{ selectedUser.email }}</p>
            <p><strong>Role:</strong> {{ selectedUser.role }}</p>
            <p><strong>Registered:</strong> {{ selectedUser.createdAt | date:'fullDate' }}</p>
          </div>

          <div class="form-group">
            <label>Decision:</label>
            <select formControlName="status" required>
              <option value="">Select an action</option>
              <option value="Approved">Approve</option>
              <option value="Rejected">Reject</option>
            </select>
          </div>

          <div class="form-group" *ngIf="selectedUser.role === 'Staff' && approvalForm.value.status === 'Approved'">
            <label>Shift Timing:</label>
            <select formControlName="shiftTiming" required>
              <option value="">Select shift timing</option>
              <option value="9:00 AM - 5:00 PM">Morning (9:00 AM - 5:00 PM)</option>
              <option value="2:00 PM - 10:00 PM">Afternoon (2:00 PM - 10:00 PM)</option>
              <option value="10:00 PM - 6:00 AM">Night (10:00 PM - 6:00 AM)</option>
            </select>
          </div>

          <div class="modal-footer">
            <button type="button" (click)="approveUser()" class="btn-primary" [disabled]="approvalForm.invalid || loading">
              {{ loading ? 'Processing...' : 'Confirm' }}
            </button>
            <button type="button" (click)="cancelApproval()" class="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- All Doctors Tab -->
  <div *ngIf="activeTab=='doctors'" class="tab-content">
    <h2>All Doctors ({{ doctors.length }})</h2>
    <div *ngIf="loading" class="loading">Loading doctors...</div>

    <div *ngIf="!loading && doctors.length === 0" class="empty-state">No doctors registered</div>

    <div *ngIf="!loading && doctors.length > 0" class="users-table-wrapper">
      <table class="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Consultation Fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let doctor of doctors">
            <td>{{ doctor.user?.fullName || doctor.fullName || doctor.name || 'N/A' }}</td>
            <td>{{ doctor.specialization || 'N/A' }}</td>
            <td>\u20B9{{ doctor.consultationFee || 0 }}</td>
            <td>
              <button (click)="deleteDoctor(doctor.doctorId)" class="btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- All Patients Tab -->
  <div *ngIf="activeTab=='patients'" class="tab-content">
    <h2>All Patients ({{ patients.length }})</h2>
    <div *ngIf="loading" class="loading">Loading patients...</div>

    <div *ngIf="!loading && patients.length === 0" class="empty-state">No patients registered</div>

    <div *ngIf="!loading && patients.length > 0" class="users-table-wrapper">
      <table class="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Registered On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let patient of patients">
            <td>{{ patient.fullName }}</td>
            <td>{{ patient.email }}</td>
            <td>{{ patient.phoneNumber || '-' }}</td>
            <td>{{ patient.gender || '-' }}</td>
            <td>{{ patient.createdAt ? (patient.createdAt | date:'shortDate') : '-' }}</td>
            <td>
              <button (click)="deleteUser(patient.userId, 'Patient')" class="btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- All Staff Tab -->
  <div *ngIf="activeTab=='staff'" class="tab-content">
    <h2>All Staff ({{ staff.length }})</h2>
    <div *ngIf="loading" class="loading">Loading staff...</div>

    <div *ngIf="!loading && staff.length === 0" class="empty-state">No staff registered</div>

    <div *ngIf="!loading && staff.length > 0" class="users-table-wrapper">
      <table class="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let staffMember of staff">
            <td>{{ staffMember.fullName || 'N/A' }}</td>
            <td>{{ staffMember.email || 'N/A' }}</td>
            <td>{{ staffMember.phoneNumber || '-' }}</td>
            <td>{{ staffMember.position || 'N/A' }}</td>
            <td>{{ staffMember.department || 'N/A' }}</td>
            <td>
              <button (click)="deleteStaff(staffMember.staffId)" class="btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`, styles: ["/* src/app/admin/admin-dashboard.component.css */\n.dashboard-container {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\nh1 {\n  color: #333;\n  margin-bottom: 2rem;\n}\nh2 {\n  color: #555;\n  margin-bottom: 1.5rem;\n}\n.tabs {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #eee;\n  flex-wrap: wrap;\n}\n.tabs button {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 1rem;\n  color: #666;\n  border-bottom: 3px solid transparent;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.tabs button:hover {\n  color: #0066cc;\n}\n.tabs button.active {\n  color: #0066cc;\n  border-bottom-color: #0066cc;\n}\n.tab-content {\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.error-message {\n  background-color: #fee;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.loading {\n  text-align: center;\n  padding: 2rem;\n  color: #666;\n}\n.empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n  font-size: 1.1rem;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  background:\n    linear-gradient(\n      135deg,\n      #0066cc 0%,\n      #004499 100%);\n  color: white;\n  padding: 2rem;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);\n  transition: transform 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-4px);\n}\n.stat-number {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n.stat-label {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n.users-table-wrapper {\n  overflow-x: auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n}\n.users-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table th {\n  background-color: #0066cc;\n  color: white;\n  padding: 1rem;\n  text-align: left;\n  font-weight: bold;\n}\n.users-table td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #eee;\n}\n.users-table tr:hover {\n  background-color: #f5f5f5;\n}\n.status-badge,\n.role-badge,\n.availability-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 0.85rem;\n  display: inline-block;\n}\n.status-badge.pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-badge.approved {\n  background-color: #d4edda;\n  color: #155724;\n}\n.status-badge.rejected {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.role-badge {\n  background-color: #e7f3ff;\n  color: #0066cc;\n}\n.availability-badge.available {\n  background-color: #d4edda;\n  color: #155724;\n}\n.availability-badge.unavailable {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  animation: slideDown 0.3s ease;\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header h3 {\n  margin: 0;\n  color: #0066cc;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #999;\n}\n.close-btn:hover {\n  color: #333;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.user-info {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.user-info p {\n  margin: 0.5rem 0;\n  color: #555;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n.form-group select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.form-group select:focus {\n  outline: none;\n  border-color: #0066cc;\n  box-shadow: 0 0 4px rgba(0, 102, 204, 0.3);\n}\n.modal-footer {\n  padding: 1.5rem;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-primary,\n.btn-secondary,\n.btn-small,\n.btn-danger {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n.btn-primary {\n  background-color: #0066cc;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #0052a3;\n}\n.btn-primary:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn-secondary:hover {\n  background-color: #5a6268;\n}\n.btn-small {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  background-color: #0066cc;\n  color: white;\n}\n.btn-small:hover {\n  background-color: #0052a3;\n}\n.btn-danger {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  background-color: #dc3545;\n  color: white;\n}\n.btn-danger:hover {\n  background-color: #c82333;\n}\n@media (max-width: 768px) {\n  .dashboard-container {\n    padding: 1rem;\n  }\n  .tabs {\n    flex-wrap: wrap;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .stat-number {\n    font-size: 1.8rem;\n  }\n  .users-table {\n    font-size: 0.9rem;\n  }\n  .users-table th,\n  .users-table td {\n    padding: 0.5rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n"] }]
  }], () => [{ type: AdminService }, { type: UserService }, { type: DoctorService }, { type: StaffService }, { type: AppointmentService }, { type: FormBuilder }, { type: AlertService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/admin/admin-dashboard.component.ts", lineNumber: 18 });
})();

// src/app/app.config.ts
var routes = [
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./chunk-L6M2IFEM.js").then((m) => m.AuthModule)
  },
  {
    path: "patient",
    component: PatientDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ["Patient"] }
  },
  {
    path: "doctor",
    component: DoctorDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ["Doctor"] }
  },
  {
    path: "staff",
    component: StaffDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ["Staff"] }
  },
  {
    path: "admin",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ["Admin"] }
  },
  { path: "unauthorized", loadComponent: () => import("./chunk-74TCWBZB.js").then((m) => m.UnauthorizedComponent) },
  { path: "**", redirectTo: "auth/login" }
];
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};

// src/main.ts
if (false) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
