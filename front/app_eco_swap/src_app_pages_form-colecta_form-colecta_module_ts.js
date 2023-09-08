"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_form-colecta_form-colecta_module_ts"],{

/***/ 9439:
/*!*******************************************************************!*\
  !*** ./src/app/pages/form-colecta/form-colecta-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormColectaRoutingModule": () => (/* binding */ FormColectaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _form_colecta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-colecta.component */ 1798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _form_colecta_component__WEBPACK_IMPORTED_MODULE_0__.FormColectaComponent
}];
class FormColectaRoutingModule {}
FormColectaRoutingModule.ɵfac = function FormColectaRoutingModule_Factory(t) {
  return new (t || FormColectaRoutingModule)();
};
FormColectaRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FormColectaRoutingModule
});
FormColectaRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormColectaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1798:
/*!**************************************************************!*\
  !*** ./src/app/pages/form-colecta/form-colecta.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormColectaComponent": () => (/* binding */ FormColectaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/donaciones.service */ 1531);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 6844);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ 4984);



















function FormColectaComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Las fechas de inicio y fin son obligatorias ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Fecha de inicio inv\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Fecha de fin inv\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_div_35_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_div_35_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El valor debe ser mayor a 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_div_35_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tipo_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tipo_r15, " ");
  }
}
function FormColectaComponent_div_35_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FormColectaComponent_div_35_mat_error_3_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Cantidad solicitada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FormColectaComponent_div_35_mat_error_8_Template, 2, 0, "mat-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FormColectaComponent_div_35_mat_option_13_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, FormColectaComponent_div_35_mat_error_14_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormColectaComponent_div_35_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const i_r10 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.removeProducto(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const producto_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r10)("ngClass", producto_r9.hasError("min") ? "show-product-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", producto_r9.get("s_descripcion").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", producto_r9.get("n_cantidad_solicitada").hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.tipos_productos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", producto_r9.get("tipo_producto").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);
  }
}
function FormColectaComponent_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La colecta debe tener al menos 1 producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_mat_error_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La colecta debe tener al menos 1 imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FormColectaComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormColectaComponent_div_50_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const url_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.removeImagen(url_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const url_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", url_r18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
const TIPOS = ['COLCHONES_Y_FRAZADAS', 'LIBROS', 'MUEBLES', 'OTROS', 'SALUD', 'TECNOLOGIA'];
const ESTADOS = ['BUEN_ESTADO', 'ROTO_PERO_UTIL', 'ROTO'];
class FormColectaComponent {
  constructor(fb, route, donacionesService, auth, router, dateAdapter) {
    this.fb = fb;
    this.route = route;
    this.donacionesService = donacionesService;
    this.auth = auth;
    this.router = router;
    this.dateAdapter = dateAdapter;
    this.fileName = 'Subir Imagen';
    this.images = [];
    this.loadingImg = false;
    this.showErrors = false;
    this.dateAdapter.setLocale('es');
    this.tipos_productos = TIPOS;
    this.estados_productos = ESTADOS;
    this.colectaForm = fb.group({
      s_titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      s_descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      //id_fundacion: [userData?.id || ''],
      productos: this.fb.array([]),
      file_name: [this.fileName],
      file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      file_source: [''],
      fecha_inicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      fecha_fin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  }
  get getProductosArray() {
    return this.colectaForm.get('productos');
  }
  agregarProducto() {
    const producto = this.fb.group({
      s_descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      n_cantidad_solicitada: [''],
      tipo_producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      estado: ['-']
    });
    let productos = this.getProductosArray;
    productos.push(producto);
  }
  crearColecta() {
    console.log(this.colectaForm.value);
    this.showErrors = true;
    if (this.colectaForm.valid) {
      const productos = [];
      for (const producto of this.getProductosArray.value) {
        productos.push({
          tipoProducto: producto.tipo_producto,
          cantidadRequerida: producto.n_cantidad_solicitada,
          descripcion: producto.s_descripcion,
          estado: producto.estado
        });
      }
      console.log('prdos', productos);
      this.donacionesService.crearColecta({
        titulo: this.colectaForm.controls['s_titulo'].value,
        descripcion: this.colectaForm.controls['s_descripcion'].value,
        productos,
        imagen: this.colectaForm.controls['file_source'].value[0],
        fechaInicio: this.colectaForm.controls['fecha_inicio'].value,
        fechaFin: this.colectaForm.controls['fecha_fin'].value
      }).subscribe({
        next: res => {
          //console.log(res, JSON.parse(JSON.stringify(res)).descripcion);
          if (JSON.parse(JSON.stringify(res)).descripcion) {
            this.showMessage('¡Colecta Creada!', 'La colecta se creó exitosamente. Los particulares te contactarán pronto!', 'success');
            this.router.navigateByUrl('mis-colectas');
          } else this.showMessage('Ocurrió un error', 'No pudimos crear la colecta. Intentá nuevamente luego.', 'error');
        },
        error: error => {
          console.log('error al crear colecta', error);
          this.showMessage('Ocurrió un error', 'No pudimos crear la colecta. Intentá nuevamente luego.', 'error');
        }
      });
    } else {
      this.showMessage('Error en los campos', 'Hay un error en los campos ingresados, por favor revisalos y volvé a intentar.', 'error');
    }
  }
  removeProducto(i) {
    let productos = this.getProductosArray;
    productos.removeAt(i);
  }
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = event => {
          this.images.push(event.target.result);
          this.colectaForm.patchValue({
            file_source: this.images
          });
        };
        reader.readAsDataURL(event.target.files[i]);
      }
      this.loadingImg = false;
    }
  }
  removeImagen(url) {
    let imgIndex = this.colectaForm.controls['file_source'].value.findIndex(item => item == url);
    this.colectaForm.controls['file_source'].value.splice(imgIndex, 1);
    this.colectaForm.controls['file'].setValue('');
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
FormColectaComponent.ɵfac = function FormColectaComponent_Factory(t) {
  return new (t || FormColectaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_1__.DonacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter));
};
FormColectaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FormColectaComponent,
  selectors: [["app-form-colecta"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE,
    useValue: 'en-GB'
  }])],
  decls: 54,
  vars: 13,
  consts: [["id", "main-form-colecta"], ["id", "main-card"], [2, "margin-bottom", "20px"], [1, "form", 3, "formGroup", "ngClass"], [1, "form-col", "main-data"], ["matInput", "", "formControlName", "s_titulo"], [4, "ngIf"], ["matInput", "", "formControlName", "s_descripcion"], [1, "datepicker-form-field"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "fecha_inicio", "placeholder", "Inicio"], ["matEndDate", "", "formControlName", "fecha_fin", "placeholder", "Fin"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["formArrayName", "productos", 1, "form-col"], ["class", "producto", 3, "formGroupName", "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", 3, "click"], [1, "form-col"], ["for", "file"], ["formControlName", "file", "id", "file", "type", "file", 1, "form-control", 3, "change"], [3, "loading"], [1, "form-col", "form-imgs"], ["class", "show-image", 3, "click", 4, "ngFor", "ngForOf"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "producto", 3, "formGroupName", "ngClass"], ["matInput", "", "placeholder", "Descripci\u00F3n*", "formControlName", "s_descripcion"], ["matInput", "", "formControlName", "n_cantidad_solicitada", "type", "number", "min", "0"], ["class", "error", 4, "ngIf"], ["formControlName", "tipo_producto"], [3, "value", 4, "ngFor", "ngForOf"], [3, "hidden"], ["matInput", "", "formControlName", "estado", "type", "text", 3, "hidden"], ["type", "button", "mat-icon-button", "", "color", "light", 3, "click"], [1, "error"], [3, "value"], [1, "show-image", 3, "click"], [1, "image"], [1, "overlay"], ["color", "primary", 1, "update"], [1, "img-producto", 3, "src"]],
  template: function FormColectaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "mat-card", 1)(3, "mat-card-header", 2)(4, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Complet\u00E1 los datos de tu colecta!");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content")(7, "form", 3)(8, "div", 4)(9, "mat-form-field")(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "T\u00EDtulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FormColectaComponent_mat_error_13_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Vigencia");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-date-range-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 10)(23, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "mat-datepicker-toggle", 12)(25, "mat-date-range-picker", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, FormColectaComponent_mat_error_27_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FormColectaComponent_mat_error_28_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, FormColectaComponent_mat_error_29_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "section", 14)(31, "div")(32, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Productos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, FormColectaComponent_div_35_Template, 20, 8, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormColectaComponent_Template_button_click_36_listener() {
        return ctx.agregarProducto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Agregar Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, FormColectaComponent_mat_error_41_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 17)(44, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Imagen de la Colecta");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FormColectaComponent_Template_input_change_46_listener($event) {
        return ctx.onFileChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, FormColectaComponent_mat_error_47_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "app-spinner", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, FormColectaComponent_div_50_Template, 6, 1, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-card-actions", 23)(52, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormColectaComponent_Template_button_click_52_listener() {
        ctx.crearColecta();
        ctx.colectaForm.markAllAsTouched();
        return ctx.colectaForm.valid;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " CREAR COLECTA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.colectaForm)("ngClass", ctx.screenWidth > 576 ? "big-form" : "small-form");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.colectaForm.get("s_titulo").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.colectaForm.get("fecha_inicio").hasError("required") || ctx.colectaForm.get("fecha_fin").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.colectaForm.controls["fecha_inicio"].hasError("matStartDateInvalid"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.colectaForm.controls["fecha_fin"].hasError("matEndDateInvalid"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.getProductosArray.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getProductosArray.length == 0 && ctx.showErrors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.colectaForm.get("file").hasError("required") && ctx.showErrors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx.loadingImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.images);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDateRangePicker, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent],
  styles: ["#main-form-colecta[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  \n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover    > .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: #000;\n  opacity: 0.5;\n  transition: all 1s;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  display: block;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .producto[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 0.2fr;\n  border-bottom: 1px solid var(--light-grey);\n  margin-bottom: 15px;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .producto[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .producto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 60px;\n  margin-left: 5px;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .main-data[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .main-data[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 3px;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-form-colecta[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n@media (min-width: 577px) and (max-width: 768px) {\n  .main-data[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n  .error[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .show-product-error[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n}\n@media (min-width: 0px) and (max-width: 576px) {\n  .producto[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .producto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: auto !important;\n  }\n  .main-data[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9ybS1jb2xlY3RhL2Zvcm0tY29sZWN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7QUFDRDtBQUNDO0VBQ0M7O2tCQUFBO0FBR0Y7QUFDRTtFQUNDLFlBQUE7QUFDSDtBQUNHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUVHO0VBQ0MsYUFBQTtFQUNBLGtDQUFBO0FBQUo7QUFFSTtFQUNDLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0FBQUw7QUFFSztFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQU47QUFFTTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtBQUFQO0FBSUs7RUFDQyxjQUFBO0FBRk47QUFLSztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtBQUhOO0FBUUc7RUFDQyxhQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNDLFlBQUE7QUFOTDtBQVFJO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0FBTkw7QUFXRTtFQUNDLGFBQUE7RUFDQSxrQ0FBQTtBQVRIO0FBVUc7RUFDQyxZQUFBO0FBUko7QUFZRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBVkg7QUFZRztFQUNDLGVBQUE7QUFWSjtBQWVDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FBYkY7O0FBaUJBO0VBQ0M7SUFDQyx5Q0FBQTtFQWRBO0VBaUJEO0lBQ0MsZUFBQTtFQWZBO0VBa0JEO0lBQ0Msb0JBQUE7RUFoQkE7QUFDRjtBQW1CQTtFQUNDO0lBQ0MscUNBQUE7RUFqQkE7RUFrQkE7SUFDQyx1QkFBQTtFQWhCRDtFQW9CRDtJQUNDLHFDQUFBO0VBbEJBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1mb3JtLWNvbGVjdGEge1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cclxuXHQuZm9ybSB7XHJcblx0XHQvKiBkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cdFx0cm93LWdhcDogMTBweDsgKi9cclxuXHJcblx0XHQuZm9ybS1jb2wge1xyXG5cdFx0XHRwYWRkaW5nOiA1cHg7XHJcblxyXG5cdFx0XHQmLmZvcm0taW5wdXQge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ji5mb3JtLWltZ3Mge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuXHJcblx0XHRcdFx0LnNob3ctaW1hZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdFx0XHRcdC5pbWFnZSB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0XHRcdCY6aG92ZXI+Lm92ZXJsYXkge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjU7XHJcblx0XHRcdFx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMXM7XHJcblx0XHRcdFx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDFzO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Jjpob3ZlciBtYXQtaWNvbiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG1hdC1pY29uIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnByb2R1Y3RvIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgLjJmcjtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcblx0XHRcdFx0bWF0LWZvcm0tZmllbGQge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRidXR0b24ge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQubWFpbi1kYXRhIHtcclxuXHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuXHRcdFx0bWF0LWZvcm0tZmllbGQge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5pbWctcHJvZHVjdG8ge1xyXG5cdFx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRcdG1hcmdpbjogM3B4O1xyXG5cclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYnV0dG9ucyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdC5tYWluLWRhdGEge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdFxyXG5cdC5lcnJvciB7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuc2hvdy1wcm9kdWN0LWVycm9yIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0LnByb2R1Y3RvIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XHJcblx0XHRidXR0b24ge1xyXG5cdFx0XHRtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5tYWluLWRhdGEge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4956:
/*!***********************************************************!*\
  !*** ./src/app/pages/form-colecta/form-colecta.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormColectaModule": () => (/* binding */ FormColectaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _form_colecta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-colecta.component */ 1798);
/* harmony import */ var _form_colecta_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-colecta-routing.module */ 9439);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class FormColectaModule {}
FormColectaModule.ɵfac = function FormColectaModule_Factory(t) {
  return new (t || FormColectaModule)();
};
FormColectaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FormColectaModule
});
FormColectaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_colecta_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormColectaRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormColectaModule, {
    declarations: [_form_colecta_component__WEBPACK_IMPORTED_MODULE_0__.FormColectaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _form_colecta_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormColectaRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_form_colecta_component__WEBPACK_IMPORTED_MODULE_0__.FormColectaComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_form-colecta_form-colecta_module_ts.js.map