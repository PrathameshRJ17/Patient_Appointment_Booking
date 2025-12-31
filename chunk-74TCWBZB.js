import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-SACPETF5.js";

// src/app/core/components/unauthorized.component.ts
var UnauthorizedComponent = class _UnauthorizedComponent {
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 5, vars: 0, consts: [[2, "padding", "2rem", "text-align", "center"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h2");
      \u0275\u0275text(2, "Access Denied");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "You do not have permission to access this page.");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{
      selector: "app-unauthorized",
      standalone: true,
      template: `
    <div style="padding: 2rem; text-align: center;">
      <h2>Access Denied</h2>
      <p>You do not have permission to access this page.</p>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/core/components/unauthorized.component.ts", lineNumber: 13 });
})();
export {
  UnauthorizedComponent
};
//# sourceMappingURL=chunk-74TCWBZB.js.map
