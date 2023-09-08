"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 4902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginRoutingModule {}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};
LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);







const _c0 = ["user"];
const _c1 = ["password"];
class LoginComponent {
  //TODO: loading on submit
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.username = '';
    this.password = '';
    this.passwordIcon = 'visibility_off';
    this.passwordType = 'password';
  }
  ngOnInit() {
    if (this.auth.isUserLoggedIn) {
      this.router.navigate(['']);
    }
  }
  onSubmit() {
    this.username = this.userHtml?.nativeElement.value;
    this.password = this.passwordHtml?.nativeElement.value;
    if (!this.username || !this.password) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Campos incompletos!',
        text: 'Por favor completá todos los campos antes de continuar.',
        icon: 'error'
      });
    } else {
      this.auth.login(this.username, this.password);
    }
  }
  createAccount() {
    this.router.navigate(['registro']);
  }
  goToHome() {
    this.router.navigate(['home']);
  }
  resetPassword() {
    this.router.navigate(['reset-password']);
  }
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'visibility' ? 'visibility_off' : 'visibility';
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.userHtml = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.passwordHtml = _t.first);
    }
  },
  decls: 16,
  vars: 2,
  consts: [[1, "loginPanel", 3, "ngSubmit"], ["loginForm", "ngForm"], ["src", "assets/logo_green_small.png"], ["type", "text", "placeholder", "Usuario", "required", "", "autocomplete", "off"], ["user", ""], ["placeholder", "Contrase\u00F1a", "required", "", "autocomplete", "off", 3, "type"], ["password", ""], ["matSuffix", "", 1, "eye", 3, "click"], ["id", "submitLogin", "type", "submit", "value", "LOGIN"], ["id", "create", 3, "click"], ["id", "invitado", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main")(1, "form", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2)(4, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_9_listener() {
        return ctx.togglePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_12_listener() {
        return ctx.createAccount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Crear cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() {
        return ctx.goToHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Entrar como invitado");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.passwordType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.passwordIcon);
    }
  },
  dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: ["/* #main-login {\n\tdisplay: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n\tbackground-image: url(\"../../../assets/login.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n\n\t.login-card {\n\t\tbackground-color: #dcb9ef;\n\t\tdisplay: flex;\n    \talign-items: center;\n\n\t\t.login-title {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\t.login-form {\n\t\t\tdisplay: flex;\n    \t\tflex-direction: column;\n\t\t}\n\t}\n} */\nmain {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  background-image: url('login.png');\n  place-content: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\nmain * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: var(--font-title);\n  font-size: 18px;\n}\n\n.loginPanel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  gap: 0.5rem;\n  width: min(400px, 80vw);\n  border-radius: 20px;\n  padding: 2.5rem 25px;\n  box-shadow: 0 2px 5px rgb(49, 49, 49);\n}\n.loginPanel a {\n  font-size: 12px;\n}\n.loginPanel a:hover {\n  cursor: pointer;\n}\n.loginPanel .eye {\n  position: absolute;\n  margin-left: -35px;\n  margin-top: 10px;\n}\n.loginPanel .eye:hover {\n  cursor: pointer;\n}\n\n.loginPanel img {\n  width: min(300px, 60vw);\n}\n\n.loginPanel input,\n.loginPanel button {\n  padding: 0.75rem 1.25rem;\n  border-radius: 5px;\n  border: 1px solid grey;\n  outline: none;\n  width: min(300px, 60vw);\n  text-align: center;\n}\n\n.loginPanel #submitLogin {\n  background-color: var(--primary-color);\n  color: white;\n  margin-top: 0.75rem;\n}\n\n.loginPanel #submitLogin:hover,\n.loginPanel #submitLogin:focus {\n  background-color: rgba(134, 219, 89, 0.8);\n  cursor: pointer;\n}\n\n.loginPanel #forgot {\n  cursor: pointer;\n}\n\n.loginPanel #forgot:hover {\n  color: var(--secondary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQTJCQTtFQUNDLGFBQUE7RUFDRyxZQUFBO0VBQ0EsYUFBQTtFQUNILGtDQUFBO0VBQ0cscUJBQUE7RUFDSCw0QkFBQTtFQUNHLHNCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUNDO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtBQUFKO0FBRUM7RUFDQyxlQUFBO0FBQUY7QUFFRTtFQUNDLGVBQUE7QUFBSDtBQUlDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJRTtFQUNDLGVBQUE7QUFGSDs7QUFPQTtFQUNJLHVCQUFBO0FBSko7O0FBT0E7O0VBRUksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7O0VBRUkseUNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0FBSko7O0FBTUE7RUFDSSw2QkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLyogI21haW4tbG9naW4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuXHQubG9naW4tY2FyZCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNiOWVmO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuICAgIFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHQubG9naW4tdGl0bGUge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHQubG9naW4tZm9ybSB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdH1cclxuXHR9XHJcbn0gKi9cclxuXHJcbm1haW57XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvbG9naW4ucG5nJyk7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0KntcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtdGl0bGUpO1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmxvZ2luUGFuZWx7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGdhcDogLjVyZW07XHJcbiAgICB3aWR0aDogbWluKDQwMHB4LCA4MHZ3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW0gMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2IoNDksIDQ5LCA0OSk7XHJcblxyXG5cdGEge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuZXllIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5sb2dpblBhbmVsIGltZ3tcclxuICAgIHdpZHRoOiBtaW4oMzAwcHgsIDYwdncpO1xyXG59XHJcblxyXG4ubG9naW5QYW5lbCBpbnB1dCxcclxuLmxvZ2luUGFuZWwgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiBtaW4oMzAwcHgsIDYwdncpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW5QYW5lbCAjc3VibWl0TG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IC43NXJlbVxyXG59XHJcblxyXG4ubG9naW5QYW5lbCAjc3VibWl0TG9naW46aG92ZXIsXHJcbi5sb2dpblBhbmVsICNzdWJtaXRMb2dpbjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzg2ZGI1OSwgMC44KTsgLy9yZ2JhKHZhcigtLXNlY29uZGFyeS1jb2xvci1yZ2IpLDAuOCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpblBhbmVsICNmb3Jnb3R7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxvZ2luUGFuZWwgI2ZvcmdvdDpob3ZlcntcclxuICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1jb2xvcilcclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2
});


/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 4902);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map