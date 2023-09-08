"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroRoutingModule": () => (/* binding */ RegistroRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _registro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.component */ 193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _registro_component__WEBPACK_IMPORTED_MODULE_0__.RegistroComponent
}];
class RegistroRoutingModule {}
RegistroRoutingModule.ɵfac = function RegistroRoutingModule_Factory(t) {
  return new (t || RegistroRoutingModule)();
};
RegistroRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RegistroRoutingModule
});
RegistroRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistroRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 193:
/*!******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroComponent": () => (/* binding */ RegistroComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_pipes_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/date-adapter */ 6266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/phone-number.pipe */ 8954);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 6844);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);





















function RegistroComponent_mat_card_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Registrate!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Complet\u00E1 ", ctx_r1.isSwapper ? "tus datos" : "los datos de la fundaci\u00F3n", " para crear tu cuenta");
  }
}
function RegistroComponent_mat_card_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Actualizar contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Complet\u00E1 ", ctx_r3.isSwapper ? "tus datos" : "los datos de la fundaci\u00F3n", " para actualizar tu contrase\u00F1a");
  }
}
function RegistroComponent_mat_card_2_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Email inv\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_form_field_15_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_form_field_15_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " El formato debe ser 11 1234-5678 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function RegistroComponent_mat_card_2_mat_form_field_15_Template_input_keyup_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.formatearTelefono());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Formato: 11 1234-5678");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RegistroComponent_mat_card_2_mat_form_field_15_mat_error_6_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, RegistroComponent_mat_card_2_mat_form_field_15_mat_error_7_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r6.mainForm.get("telefono").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.mainForm.get("telefono").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.mainForm.get("telefono").hasError("formatoInvalido"));
  }
}
function RegistroComponent_mat_card_2_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Debe tener de 8 a 32 caracteres, 1 min\u00FAscula, 1 may\u00FAscula, 1 n\u00FAmero y 1 caracter especial. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Las contrase\u00F1as no coinciden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tipo_r27.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tipo_r27.descripcion, " ");
  }
}
function RegistroComponent_mat_card_2_form_35_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo inv\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 6)(1, "div", 7)(2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RegistroComponent_mat_card_2_form_35_mat_error_6_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7)(8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RegistroComponent_mat_card_2_form_35_mat_error_12_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7)(14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Tipo Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function RegistroComponent_mat_card_2_form_35_Template_mat_select_selectionChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.formatDocument($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RegistroComponent_mat_card_2_form_35_mat_option_18_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RegistroComponent_mat_card_2_form_35_mat_error_19_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 7)(21, "mat-form-field")(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "N\u00FAmero de Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RegistroComponent_mat_card_2_form_35_mat_error_25_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, RegistroComponent_mat_card_2_form_35_mat_error_26_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 7)(28, "mat-form-field", 24)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Fecha de Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "DD/MM/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "mat-datepicker-toggle", 26)(35, "mat-datepicker", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, RegistroComponent_mat_card_2_form_35_mat_error_37_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r12.particularForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.particularForm.get("nombre").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.particularForm.get("apellido").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.tiposDocumento);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.particularForm.get("tipoDocumento").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.particularForm.get("nroDocumento").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.particularForm.get("nroDocumento").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.particularForm.get("fechaNacimiento").hasError("required"));
  }
}
function RegistroComponent_mat_card_2_form_36_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_36_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 6)(1, "div", 7)(2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Nombre / Raz\u00F3n Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RegistroComponent_mat_card_2_form_36_mat_error_6_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7)(8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "CUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RegistroComponent_mat_card_2_form_36_mat_error_12_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r13.fundacionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.fundacionForm.get("nombre").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.fundacionForm.get("cuit").hasError("required"));
  }
}
function RegistroComponent_mat_card_2_form_39_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_39_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_39_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RegistroComponent_mat_card_2_form_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 6)(1, "div", 7)(2, "mat-form-field")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Calle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RegistroComponent_mat_card_2_form_39_mat_error_6_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7)(8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Altura");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RegistroComponent_mat_card_2_form_39_mat_error_12_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7)(14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Piso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 7)(19, "mat-form-field")(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 7)(24, "mat-form-field")(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "C\u00F3digo Postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, RegistroComponent_mat_card_2_form_39_mat_error_28_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r14.direccionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.direccionForm.get("direccion").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.direccionForm.get("altura").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.direccionForm.get("codigoPostal").hasError("required"));
  }
}
function RegistroComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 3)(1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RegistroComponent_mat_card_2_div_2_Template, 5, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RegistroComponent_mat_card_2_ng_template_3_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-content")(6, "form", 6)(7, "div", 7)(8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RegistroComponent_mat_card_2_mat_error_12_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RegistroComponent_mat_card_2_mat_error_13_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RegistroComponent_mat_card_2_mat_form_field_15_Template, 8, 3, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10)(17, "mat-form-field")(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RegistroComponent_mat_card_2_Template_input_change_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.refreshValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegistroComponent_mat_card_2_Template_mat_icon_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.togglePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, RegistroComponent_mat_card_2_mat_error_23_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, RegistroComponent_mat_card_2_mat_error_24_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RegistroComponent_mat_card_2_mat_error_25_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 7)(27, "mat-form-field")(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function RegistroComponent_mat_card_2_Template_input_focus_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.refreshValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegistroComponent_mat_card_2_Template_mat_icon_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.togglePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, RegistroComponent_mat_card_2_mat_error_33_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, RegistroComponent_mat_card_2_mat_error_34_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, RegistroComponent_mat_card_2_form_35_Template, 38, 10, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, RegistroComponent_mat_card_2_form_36_Template, 13, 3, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, RegistroComponent_mat_card_2_form_39_Template, 29, 4, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-card-actions", 16)(41, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegistroComponent_mat_card_2_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r40.submit();
      ctx_r40.mainForm.markAllAsTouched();
      ctx_r40.mainForm.valid;
      ctx_r40.isSwapper && ctx_r40.particularForm.valid;
      !ctx_r40.isSwapper && ctx_r40.fundacionForm.valid;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.direccionForm.valid);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.origin != "resetPassword")("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("email").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.mainForm.get("telefono").hasError("formatoInvalido") ? "form-input-medium-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.origin != "resetPassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.mainForm.get("password").hasError("pattern") ? "form-input-long-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0.passwordType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.passwordIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("password").hasError("differentPassword") && !ctx_r0.mainForm.get("password").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("password").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0.passwordType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.passwordIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("confirmPassword").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.get("confirmPassword").hasError("differentPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isSwapper && ctx_r0.origin != "resetPassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isSwapper && ctx_r0.origin != "resetPassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.origin != "resetPassword");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.mainForm.valid || ctx_r0.isSwapper && !ctx_r0.particularForm.valid || !ctx_r0.isSwapper && !ctx_r0.fundacionForm.valid || !ctx_r0.direccionForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.origin == "resetPassword" ? "ACTUALIZAR CONTRASE\u00D1A" : ctx_r0.origin == "createAccount" ? "CREAR CUENTA" : "GUARDAR CAMBIOS", " ");
  }
}
class RegistroComponent {
  constructor(fb, dateAdapter, usuarioService, location, auth, router, cdr, phoneNumberPipe) {
    this.fb = fb;
    this.dateAdapter = dateAdapter;
    this.usuarioService = usuarioService;
    this.location = location;
    this.auth = auth;
    this.router = router;
    this.cdr = cdr;
    this.phoneNumberPipe = phoneNumberPipe;
    this.isSwapper = true;
    this.loading = true;
    this.origin = 'createAccount';
    this.passwordIcon = 'visibility_off';
    this.passwordType = 'password';
    this.tiposDocumento = [];
    this.mainForm = fb.group({
      //username: [''], TODO: POR AHORA USO EMAIL
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.telefonoValidator()]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*\-_.,])[a-zA-Z\d@#$%^&+=!*\-_.,]{8,32}$/), this.validarConfirmPassword()]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.validarConfirmPassword()]]
    });
    this.particularForm = fb.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      tipoDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      nroDocumento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      fechaNacimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      //cuil: [''],
    });

    this.fundacionForm = fb.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      cuit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.direccionForm = fb.group({
      direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      altura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      piso: [''],
      departamento: [''],
      codigoPostal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    this.dateAdapter.setLocale('es-AR'); // DD/mm/YYYY
    const url = location.path();
    if (url == '/reset-password') {
      this.origin = 'resetPassword';
    } else if (url == '/edit-perfil') {
      this.origin = 'editAccount';
      this.mainForm.controls['password'].disable();
      this.mainForm.controls['confirmPassword'].disable();
      this.mainForm.controls['email'].disable();
    } else {
      this.mainForm.controls['telefono'].addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
    }
  }
  ngOnInit() {
    if (this.origin == 'createAccount') this.selectTipoPerfil();else if (this.origin == 'editAccount') {
      this.loadUserInfo();
      this.loading = false;
    } else this.loading = false;
    this.getTiposDocumentos();
  }
  ngOnDestroy() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
  }
  loadUserInfo() {
    this.usuarioService.getUserByID(this.auth.getUserID()).subscribe({
      next: user => {
        console.log(user);
        this.mainForm.patchValue({
          email: user.email,
          telefono: user.telefono
        });
        if (user.particularDTO) {
          this.particularForm.patchValue({
            nombre: user.particularDTO.nombre,
            apellido: user.particularDTO.apellido,
            tipoDocumento: user.particularDTO.tipoDocumento,
            nroDocumento: user.particularDTO.dni,
            fechaNacimiento: user.particularDTO.fechaNacimiento
          });
        } else {
          this.fundacionForm.patchValue({
            nombre: user.fundacionDTO.nombre,
            cuit: user.fundacionDTO.cuil
          });
        }
        this.direccionForm.patchValue({
          direccion: user.particularDTO ? user.particularDTO.direcciones[0].direccion : user.fundacionDTO.direcciones[0].direccion,
          altura: user.particularDTO ? user.particularDTO.direcciones[0].altura : user.fundacionDTO.direcciones[0].altura,
          piso: user.particularDTO ? user.particularDTO.direcciones[0].piso : user.fundacionDTO.direcciones[0].piso,
          departamento: user.particularDTO ? user.particularDTO.direcciones[0].departamento : user.fundacionDTO.direcciones[0].departamento,
          codigoPostal: user.particularDTO ? user.particularDTO.direcciones[0].codigoPostal : user.fundacionDTO.direcciones[0].codigoPostal
        });
      },
      error: error => {
        console.log('error', error);
      }
    });
  }
  selectTipoPerfil() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: '¡Te damos la bienvenida!',
      text: `Nos alegra que te sumes a nuestra comunidad, antes de seguir, 
			necesitamos saber si te querés registrar como fundación o como Particular`,
      confirmButtonText: 'Represento a una fundación',
      confirmButtonColor: '#87db59',
      cancelButtonText: 'No soy de una fundación',
      showCancelButton: true,
      cancelButtonColor: '#ae59db',
      icon: 'question',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(result => {
      console.log(result);
      if (result.isConfirmed) {
        // FUNDACION
        this.isSwapper = false;
        this.particularForm = this.fb.group({});
      } else {
        // SWAPPER
        this.fundacionForm = this.fb.group({});
      }
      console.log(this.isSwapper);
      this.loading = false;
    });
  }
  getTiposDocumentos() {
    this.usuarioService.getTiposDocumentos().subscribe({
      next: res => {
        console.log('TIPOS DOC:', res);
        this.tiposDocumento = res;
      },
      error: error => {
        console.log('ERROR TIPOS DOC:', error);
      }
    });
  }
  submit() {
    console.log('registro', this.mainForm.value);
    if (this.mainForm.valid) {
      if (this.origin == 'resetPassword') {
        const body = {
          username: this.mainForm.controls['email'].value,
          nuevoPassword: this.mainForm.controls['password'].value,
          confirmarPassword: this.mainForm.controls['confirmPassword'].value
        };
        this.auth.resetPassword(body).subscribe({
          next: res => {
            console.log(res);
          },
          error: error => {
            console.log('error:', error);
          }
          //complete: () => {}
        });
      } else {
        if (this.direccionForm.valid) {
          let user = {
            username: this.mainForm.controls['email'].value,
            email: this.mainForm.controls['email'].value,
            password: this.mainForm.controls['password'].value,
            telefono: this.mainForm.controls['telefono'].value,
            confirmPassword: this.mainForm.controls['confirmPassword'].value,
            direccion: {
              altura: this.direccionForm.controls['altura'].value,
              codigoPostal: this.direccionForm.controls['codigoPostal'].value,
              direccion: this.direccionForm.controls['direccion'].value,
              departamento: this.direccionForm.controls['departamento'].value,
              piso: this.direccionForm.controls['piso'].value
            }
          };
          let validDataForm = false;
          if (this.isSwapper) {
            if (this.particularForm.valid) {
              user.particular = {
                fechaNacimiento: new Date(this.particularForm.controls['fechaNacimiento'].value),
                dni: this.particularForm.controls['nroDocumento'].value,
                cuil: this.particularForm.controls['nroDocumento'].value,
                nombre: this.particularForm.controls['nombre'].value,
                apellido: this.particularForm.controls['apellido'].value,
                tipoDocumento: this.particularForm.controls['tipoDocumento'].value
              };
              validDataForm = true;
            } else {
              this.showMessage('¡Campos incorrectos!', 'Por favor, revisá los campos y volvé a intentar', 'OK', '', 'error');
            }
          } else {
            if (this.fundacionForm.valid) {
              user.fundacion = {
                nombre: this.fundacionForm.controls['nombre'].value,
                cuil: this.fundacionForm.controls['cuit'].value //TODO: que en back sea cuit
              };

              validDataForm = true;
            } else {
              this.showMessage('¡Campos incorrectos!', 'Por favor, revisá los campos y volvé a intentar', 'OK', '', 'error');
            }
          }
          console.log(user);
          if (validDataForm) {
            if (this.origin == 'createAccount') {
              this.usuarioService.createUser(user).subscribe({
                next: id_user => {
                  console.log('next', id_user);
                  // TODO: REVISAR CON EMAILS. esperar 1 min antes de dejarlo enviar devuelta
                  this.showMessage('¡Gracias por registrarte!', `Te enviamos un email a la cuenta que ingresaste,
										con un código para verificar tu cuenta. Por favor ingresalo a continuación.
										Si no verificás la cuenta ahora, podrás hacerlo la próxima vez que inicies sesión.`, 'Confirmar', 'send_again', 'success', 'No recibí el email');
                },
                error: e => {
                  console.error('error', e);
                  if (e.message.includes('duplicate')) this.showMessage('Error!', 'Ya existe un usuario con el email ingresado.', 'OK', 'error', 'error');else this.showMessage('Error!', 'Ha ocurrido un error al crear la cuenta', 'OK', 'error', 'error');
                }
                //complete: () => console.info('signup complete')
              });
            } else {
              this.usuarioService.editUser(user).subscribe({
                next: id_user => {
                  console.log('next', id_user);
                  this.showMessage('¡Éxito!', `Tus datos se editaron exitosamente.`, 'Genial!', 'edit', 'success');
                },
                error: e => {
                  console.error('error', e);
                  this.showMessage('Error!', 'Ha ocurrido un error al editar la cuenta', 'OK', 'error', 'error');
                }
              });
            }
          }
        } else {
          this.showMessage('¡Campos incorrectos!', 'Por favor, revisá los campos y volvé a intentar', 'OK', '', 'error');
        }
      }
    } else {
      this.showMessage('¡Campos incorrectos!', 'Por favor, revisá los campos y volvé a intentar', 'OK', '', 'error');
    }
  }
  showMessage(title, text, confirm, origin, icon, deny) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title,
      text,
      confirmButtonText: confirm,
      showDenyButton: deny ? true : false,
      denyButtonText: deny,
      icon,
      allowOutsideClick: icon == 'success' ? false : true,
      input: origin == 'send_again' ? 'text' : undefined,
      reverseButtons: true
    }).then(({
      isConfirmed,
      value,
      isDenied
    }) => {
      console.log(value);
      if (isDenied && origin == 'send_again') {
        // TODO: RESEND EMAIL
        this.router.navigate(['login']);
      }
      if (isConfirmed) {
        if (origin == 'ir_a_home') {
          this.router.navigate(['home']);
        } else if (origin == 'edit') {
          this.router.navigate(['perfil']);
        }
      }
    });
  }
  validarConfirmPassword() {
    return control => {
      if (control.value) {
        const password = this.mainForm.controls['password'].value;
        const confirmPassword = this.mainForm.controls['confirmPassword'].value;
        if (password && confirmPassword && password != confirmPassword) {
          return {
            differentPassword: true
          };
        } else {
          this.mainForm.controls['password'].setErrors(null);
          this.mainForm.controls['confirmPassword'].setErrors(null);
        }
      }
      return null; // Valor válido
    };
  }

  formatearTelefono() {
    this.mainForm.get('telefono')?.setValue(this.phoneNumberPipe.transform(this.mainForm.get('telefono')?.value)); // Esto fuerza el cambio del valor
    this.cdr.detectChanges(); // Detectamos los cambios manualmente
  }

  telefonoValidator() {
    const telefonoPattern = /^11\s\d{4}-\d{4}$/;
    return control => {
      if (!control.value) {
        // Si el campo está vacío, no se aplica la validación.
        return null;
      }
      const esValido = telefonoPattern.test(control.value);
      return esValido ? null : {
        formatoInvalido: true
      };
    };
  }
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'visibility' ? 'visibility_off' : 'visibility';
  }
  refreshValidity() {
    this.mainForm.updateValueAndValidity();
  }
  formatDocument(event) {
    console.log(event);
    switch (event.value) {
      case 'DNI':
        //
        this.particularForm.controls['nroDocumento'].addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^\d{7,8}$/));
        break;
      default:
        this.particularForm.controls['nroDocumento'].addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^\d{7,8}$/));
        break;
    }
  }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) {
  return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_4__.PhoneNumberPipe));
};
RegistroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RegistroComponent,
  selectors: [["app-registro"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE,
    useValue: 'en-GB'
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter,
    useClass: src_app_pipes_date_adapter__WEBPACK_IMPORTED_MODULE_1__.CustomDateAdapter
  }])],
  decls: 3,
  vars: 1,
  consts: [["url", "registro"], ["id", "main-container"], ["id", "main-card", 4, "ngIf"], ["id", "main-card"], [4, "ngIf", "ngIfElse"], ["resetHeader", ""], [1, "form", 3, "formGroup"], [1, "form-input"], ["matInput", "", "formControlName", "email", "type", "email"], [4, "ngIf"], [1, "form-input", 3, "ngClass"], ["matInput", "", "formControlName", "password", 3, "type", "change"], ["matSuffix", "", 1, "eye", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", 3, "type", "focus"], ["class", "form", 3, "formGroup", 4, "ngIf"], [2, "margin", "20px 5% 0px", "font-weight", "bold"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["matInput", "", "formControlName", "telefono", 3, "ngModel", "keyup"], ["matInput", "", "formControlName", "nombre"], ["matInput", "", "formControlName", "apellido"], ["formControlName", "tipoDocumento", "name", "tipoDocumento", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "nroDocumento", "type", "number"], ["floatLabel", "always"], ["matInput", "", "formControlName", "fechaNacimiento", "readonly", "", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [3, "value"], ["matInput", "", "formControlName", "cuit", "type", "number"], ["matInput", "", "formControlName", "direccion"], ["matInput", "", "formControlName", "altura", "type", "number"], ["matInput", "", "formControlName", "piso", "type", "number"], ["matInput", "", "formControlName", "departamento"], ["matInput", "", "formControlName", "codigoPostal", "type", "number"]],
  template: function RegistroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RegistroComponent_mat_card_2_Template, 43, 22, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent],
  styles: ["#main-container[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n#main-container[_ngcontent-%COMP%]   #main-card[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 2% auto;\n}\n#main-container[_ngcontent-%COMP%]   #main-card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  margin-top: 20px;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 10px;\n  column-gap: 5px;\n  justify-items: center;\n}\n#main-container[_ngcontent-%COMP%]   #main-card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 80%;\n}\n#main-container[_ngcontent-%COMP%]   #main-card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#main-container[_ngcontent-%COMP%]   #main-card[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-container[_ngcontent-%COMP%]   #main-card[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n@media (min-width: 0px) and (max-width: 768px) {\n  .form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    row-gap: 10px !important;\n    column-gap: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FBQ0Q7QUFDQztFQUNDLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0g7QUFDRztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0MsV0FBQTtBQUNMO0FBR0k7RUFDQyxlQUFBO0FBREw7QUFNRTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtBQUpIOztBQVNBO0VBQ0M7SUFDQyxxQ0FBQTtJQUNBLHdCQUFBO0lBQ0EsMEJBQUE7RUFOQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAyJTtcclxuXHJcblx0I21haW4tY2FyZCB7XHJcblx0XHR3aWR0aDogODAlO1xyXG5cdFx0bWFyZ2luOiAyJSBhdXRvO1xyXG5cdFxyXG5cdFx0LmZvcm0ge1xyXG5cdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0XHRcdHJvdy1nYXA6IDEwcHg7XHJcblx0XHRcdGNvbHVtbi1nYXA6IDVweDtcclxuXHRcdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdFxyXG5cdFx0XHQuZm9ybS1pbnB1dCB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHR3aWR0aDogODAlO1xyXG5cclxuXHRcdFx0XHRtYXQtZm9ybS1maWVsZCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZXllOmhvdmVyIHtcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdC5idXR0b25zIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHQuZm9ybSB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cdFx0cm93LWdhcDogMTBweCAhaW1wb3J0YW50O1xyXG5cdFx0Y29sdW1uLWdhcDogNXB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroModule": () => (/* binding */ RegistroModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _registro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.component */ 193);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);







class RegistroModule {}
RegistroModule.ɵfac = function RegistroModule_Factory(t) {
  return new (t || RegistroModule)();
};
RegistroModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: RegistroModule
});
RegistroModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegistroRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RegistroModule, {
    declarations: [_registro_component__WEBPACK_IMPORTED_MODULE_0__.RegistroComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegistroRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule],
    exports: [_registro_component__WEBPACK_IMPORTED_MODULE_0__.RegistroComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map