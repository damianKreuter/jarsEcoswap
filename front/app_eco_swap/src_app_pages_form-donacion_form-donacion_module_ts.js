"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_form-donacion_form-donacion_module_ts"],{

/***/ 8329:
/*!*********************************************************************!*\
  !*** ./src/app/pages/form-donacion/form-donacion-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDonacionRoutingModule": () => (/* binding */ FormDonacionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _form_donacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-donacion.component */ 7103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _form_donacion_component__WEBPACK_IMPORTED_MODULE_0__.FormDonacionComponent
}];
class FormDonacionRoutingModule {}
FormDonacionRoutingModule.ɵfac = function FormDonacionRoutingModule_Factory(t) {
  return new (t || FormDonacionRoutingModule)();
};
FormDonacionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FormDonacionRoutingModule
});
FormDonacionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormDonacionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7103:
/*!****************************************************************!*\
  !*** ./src/app/pages/form-donacion/form-donacion.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDonacionComponent": () => (/* binding */ FormDonacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/donaciones.service */ 1531);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/text-field */ 264);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ 4984);



















function FormDonacionComponent_mat_card_3_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prod_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", prod_r8.idProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", prod_r8.descripcion, " ");
  }
}
function FormDonacionComponent_mat_card_3_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormDonacionComponent_mat_card_3_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormDonacionComponent_mat_card_3_div_26_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo no puede contener ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormDonacionComponent_mat_card_3_div_26_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormDonacionComponent_mat_card_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FormDonacionComponent_mat_card_3_div_26_mat_error_3_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, FormDonacionComponent_mat_card_3_div_26_mat_error_4_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormDonacionComponent_mat_card_3_div_26_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const i_r10 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.removeCaracteristica(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const caracteristica_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", caracteristica_r9.get("s_descripcion").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", caracteristica_r9.get("s_descripcion").hasError("required"));
  }
}
function FormDonacionComponent_mat_card_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormDonacionComponent_mat_card_3_div_43_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const i_r16 = restoredCtx.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.removeImagen(i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const url_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", url_r15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function FormDonacionComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 3)(1, "mat-card-header", 4)(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Complet\u00E1 los datos de tu donaci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content")(5, "form", 5)(6, "div", 6)(7, "mat-form-field")(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FormDonacionComponent_mat_card_3_mat_option_11_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FormDonacionComponent_mat_card_3_mat_error_12_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10)(14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, FormDonacionComponent_mat_card_3_mat_error_18_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "section", 12)(20, "div")(21, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Caracter\u00EDsticas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, FormDonacionComponent_mat_card_3_div_26_Template, 8, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormDonacionComponent_mat_card_3_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.agregarCaracteristica());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Agregar Caracter\u00EDstica");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 10)(33, "div")(34, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Im\u00E1genes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormDonacionComponent_mat_card_3_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r5.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Agregar Imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FormDonacionComponent_mat_card_3_Template_input_change_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, FormDonacionComponent_mat_card_3_div_43_Template, 6, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 23)(45, "mat-form-field")(46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Mensaje Adicional");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "textarea", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-card-actions", 26)(51, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormDonacionComponent_mat_card_3_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r23.confirmarDonacion();
      ctx_r23.donacionForm.markAllAsTouched();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.donacionForm.valid);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " CONFIRMAR DONACI\u00D3N ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.donacionForm)("ngClass", ctx_r0.screenWidth > 576 ? "big-form" : "small-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.colecta.productos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.donacionForm.get("producto").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.donacionForm.get("n_cantidad").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.getCaracteristicasArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.images);
  }
}
class FormDonacionComponent {
  constructor(fb, route, router, donacionesService, auth) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.donacionesService = donacionesService;
    this.auth = auth;
    this.images = [];
    this.loading = true;
    route.paramMap.subscribe(params => {
      console.log(params);
      this.id_colecta = params.get('id_colecta') || '';
    });
    this.donacionForm = fb.group({
      producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      caracteristicas: this.fb.array([]),
      file: [''],
      file_source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      n_cantidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      mensaje: ['']
    });
    this.screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  }
  ngOnInit() {
    this.donacionesService.getColecta(this.id_colecta).subscribe({
      next: res => {
        this.colecta = res;
        this.loading = false;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  get getCaracteristicasArray() {
    return this.donacionForm.get('caracteristicas');
  }
  agregarCaracteristica(caract) {
    const caracteristica = this.fb.group({
      s_descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/[^;]/g), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    });
    let caracteristicas = this.getCaracteristicasArray;
    caracteristicas.push(caracteristica);
  }
  confirmarDonacion() {
    console.log(this.donacionForm.value);
    if (this.donacionForm.valid) {
      let caracteristicas = this.getCaracteristicasArray.value || [];
      let sendCaracteristicas = [];
      caracteristicas.forEach(item => {
        sendCaracteristicas.push(item.s_descripcion);
      });
      const objetoToSend = {
        tipoProducto: "MUEBLES",
        productoId: this.donacionForm.controls['producto'].value,
        cantidadOfrecida: this.donacionForm.controls['n_cantidad'].value,
        mensaje: this.donacionForm.controls['mensaje'].value,
        caracteristicas: sendCaracteristicas,
        imagenes: this.donacionForm.controls['file_source'].value
      };
      console.log('obj to send', objetoToSend);
      this.donacionesService.crearDonacion(this.colecta.idColecta, objetoToSend).subscribe({
        next: res => {
          console.log(res);
          if (JSON.parse(JSON.stringify(res)).descripcion) {
            this.showMessage('Donación Creada!', 'La donacion se creó exitosamente. Ahora te toca a vos! Llevá tu donación a la fundación para que la puedan empezar a usar.', 'success');
            this.router.navigateByUrl('colecta/' + this.id_colecta);
          } else this.showMessage('Ocurrió un error', 'No pudimos crear la donacion. Intentá nuevamente luego.', 'error');
        },
        error: error => {
          console.log('error creando donacion', error);
          this.showMessage('Ocurrió un error', 'No pudimos crear la donacion. Intentá nuevamente luego.', 'error');
        }
      });
    } else this.showMessage('Error en los campos.', 'Revisá los campos y completalos correctamente.', 'error');
  }
  removeCaracteristica(i) {
    let caracteristicas = this.getCaracteristicasArray;
    caracteristicas.removeAt(i);
  }
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = event => {
          this.images.push(event.target.result);
          this.donacionForm.patchValue({
            file_source: this.images
          });
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  removeImagen(i) {
    this.images.splice(i, 1);
    this.donacionForm.patchValue({
      file_source: this.images
    });
  }
  showMessage(title, text, icon) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title,
      text,
      icon,
      confirmButtonText: '¡OK!'
    });
  }
}
FormDonacionComponent.ɵfac = function FormDonacionComponent_Factory(t) {
  return new (t || FormDonacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_1__.DonacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};
FormDonacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FormDonacionComponent,
  selectors: [["app-donacion"]],
  decls: 4,
  vars: 2,
  consts: [["id", "main-donacion"], [3, "loading"], ["id", "main-card", 4, "ngIf"], ["id", "main-card"], [2, "margin-bottom", "20px"], [1, "form", 3, "formGroup", "ngClass"], [1, "form-input", "form-col"], ["formControlName", "producto"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "form-col"], ["matInput", "", "formControlName", "n_cantidad", "type", "number"], ["formArrayName", "caracteristicas", 1, "form-col"], [1, "caract-label"], ["matTooltip", "Por favor incluir medidas, estado del producto,  material del producto y cualquier caracter\u00EDstica que identifique a tu producto", 1, "material-icons-outlined"], ["class", "caracteristica", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", "color", "light", 2, "width", "100%", 3, "click"], [2, "font-weight", "500", "font-size", "large", "margin", "7px 0"], ["type", "button", "mat-raised-button", "", "color", "light", 3, "click"], ["formControlName", "file", "id", "file", "type", "file", "multiple", "", 1, "form-control", "hidden", 3, "change"], ["file", ""], [1, "form-col", "form-imgs"], ["class", "show-image", 3, "click", 4, "ngFor", "ngForOf"], [1, "form-col", "mensaje-field"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5", "formControlName", "mensaje"], ["autosize", "cdkTextareaAutosize"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], [1, "caracteristica", 3, "formGroupName"], ["matInput", "", "placeholder", "Descripci\u00F3n*", "formControlName", "s_descripcion"], ["type", "button", "mat-icon-button", "", "color", "light", 2, "height", "60px", "margin-left", "5px", 3, "click"], [1, "show-image", 3, "click"], [1, "image"], [1, "overlay"], ["color", "primary", 1, "update"], [1, "img-producto", 3, "src"]],
  template: function FormDonacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FormDonacionComponent_mat_card_3_Template, 53, 7, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__.CdkTextareaAutosize, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent],
  styles: ["#main-donacion[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 10px;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding: 0;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n  padding-top: 5px;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover    > .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #000;\n  opacity: 0.5;\n  transition: all 1s;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: large;\n  display: flex;\n  align-items: center;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--grey-text);\n  margin: 5px;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--dark-grey);\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caracteristica[_ngcontent-%COMP%] {\n  display: flex;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%] {\n  background: var(--light-grey);\n  padding: 15px;\n  border-radius: 5px 5px 0px 0px;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mensaje-field[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mensaje-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 50%;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 3px;\n}\n#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-donacion[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n@media (min-width: 0px) and (max-width: 576px) {\n  .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .mensaje-field[_ngcontent-%COMP%] {\n    grid-column: 1 !important;\n  }\n  .mensaje-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9ybS1kb25hY2lvbi9mb3JtLWRvbmFjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtBQUNEO0FBQ0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNIO0FBQ0c7RUFDQyxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNDLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDTDtBQUNLO0VBQ0Msa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUNNO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0FBQ1A7QUFHSztFQUNDLGNBQUE7QUFETjtBQUdLO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0FBRE47QUFNRztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0MsdUJBQUE7RUFDQSxXQUFBO0FBSkw7QUFNSztFQUNDLGVBQUE7RUFDQSx1QkFBQTtBQUpOO0FBU0c7RUFDQyxhQUFBO0FBUEo7QUFVRztFQUNDLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBUko7QUFTSTtFQUNDLGVBQUE7QUFQTDtBQVlFO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZIO0FBWUc7RUFDQyxVQUFBO0FBVko7QUFjRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBWkg7QUFjRztFQUNDLGVBQUE7QUFaSjtBQWdCQztFQUNDLGFBQUE7RUFDRyx1QkFBQTtBQWRMOztBQWtCQTtFQUNDO0lBQ0MscUNBQUE7RUFmQTtFQWlCRDtJQUNDLHlCQUFBO0VBZkE7RUFnQkE7SUFDQyxzQkFBQTtFQWREO0FBQ0Y7QUFtQkE7RUFDQyxhQUFBO0FBakJEIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tZG9uYWNpb24ge1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cclxuXHQuZm9ybSB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cdFx0cm93LWdhcDogMTBweDtcclxuXHRcdFxyXG5cdFx0LmZvcm0tY29sIHtcclxuXHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHJcblx0XHRcdCYuZm9ybS1pbWdzIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHJcblx0XHRcdFx0LnNob3ctaW1hZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDVweDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdC5pbWFnZSB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQmOmhvdmVyID4gLm92ZXJsYXkge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjojMDAwO1xyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6MC41O1xyXG5cdFx0XHRcdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxcztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQmOmhvdmVyIG1hdC1pY29uIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtYXQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuY2FyYWN0LWxhYmVsIHtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogbGFyZ2U7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRtYXQtaWNvbiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tZ3JleS10ZXh0KTtcclxuXHRcdFx0XHRcdG1hcmdpbjogNXB4O1xyXG5cclxuXHRcdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jYXJhY3RlcmlzdGljYSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmZpbGUtbGFiZWwge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xyXG5cdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5tZW5zYWplLWZpZWxkIHtcclxuXHRcdFx0Z3JpZC1jb2x1bW46IDEgLyAzO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHRcdG1hdC1mb3JtLWZpZWxkIHtcclxuXHRcdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmltZy1wcm9kdWN0byB7XHJcblx0XHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdFx0bWFyZ2luOiAzcHg7XHJcblxyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmJ1dHRvbnMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuICAgIFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHQuZm9ybSB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQubWVuc2FqZS1maWVsZCB7XHJcblx0XHRncmlkLWNvbHVtbjogMSAhaW1wb3J0YW50O1xyXG5cdFx0bWF0LWZvcm0tZmllbGQge1xyXG5cdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbi5oaWRkZW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 611:
/*!*************************************************************!*\
  !*** ./src/app/pages/form-donacion/form-donacion.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDonacionModule": () => (/* binding */ FormDonacionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _form_donacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-donacion.component */ 7103);
/* harmony import */ var _form_donacion_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-donacion-routing.module */ 8329);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class FormDonacionModule {}
FormDonacionModule.ɵfac = function FormDonacionModule_Factory(t) {
  return new (t || FormDonacionModule)();
};
FormDonacionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FormDonacionModule
});
FormDonacionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_donacion_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormDonacionRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormDonacionModule, {
    declarations: [_form_donacion_component__WEBPACK_IMPORTED_MODULE_0__.FormDonacionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_donacion_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormDonacionRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_form_donacion_component__WEBPACK_IMPORTED_MODULE_0__.FormDonacionComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_form-donacion_form-donacion_module_ts.js.map