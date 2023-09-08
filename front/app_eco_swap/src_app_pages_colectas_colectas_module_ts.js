"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_colectas_colectas_module_ts"],{

/***/ 6144:
/*!***********************************************************!*\
  !*** ./src/app/pages/colectas/colectas-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColectasRoutingModule": () => (/* binding */ ColectasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _colectas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colectas.component */ 2702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _colectas_component__WEBPACK_IMPORTED_MODULE_0__.ColectasComponent
}];
class ColectasRoutingModule {}
ColectasRoutingModule.ɵfac = function ColectasRoutingModule_Factory(t) {
  return new (t || ColectasRoutingModule)();
};
ColectasRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ColectasRoutingModule
});
ColectasRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ColectasRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2702:
/*!******************************************************!*\
  !*** ./src/app/pages/colectas/colectas.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColectasComponent": () => (/* binding */ ColectasComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/donaciones.service */ 1531);
/* harmony import */ var src_app_services_fundaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fundaciones.service */ 3397);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ 4893);
/* harmony import */ var src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/show-error.service */ 3073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 2556);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ 4984);





















function ColectasComponent_form_3_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r6.nombre, " ");
  }
}
function ColectasComponent_form_3_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", tipo_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", tipo_r7.descripcion, " ");
  }
}
function ColectasComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 7)(1, "mat-form-field", 8)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Fundaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-autocomplete", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ColectasComponent_form_3_mat_option_7_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 13)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "C\u00F3digo Postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-form-field", 13)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Tipo del Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, ColectasComponent_form_3_mat_option_17_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ColectasComponent_form_3_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.filtrarColectas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "FILTRAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ColectasComponent_form_3_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.limpiarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "LIMPIAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.formFiltros);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r0.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 5, ctx_r0.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.tipos_productos);
  }
}
function ColectasComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No hay colectas para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ColectasComponent_div_5_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const producto_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", producto_r15.descripcion, " ");
  }
}
function ColectasComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ColectasComponent_div_5_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const colecta_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.goToColecta(colecta_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 26)(4, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ColectasComponent_div_5_div_4_div_7_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const colecta_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", colecta_r13.imagen ? colecta_r13.imagen : "assets/fundacion.png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](colecta_r13.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", colecta_r13.productos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](colecta_r13.fundacionDTO.nombre);
  }
}
function ColectasComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ColectasComponent_div_5_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div")(3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ColectasComponent_div_5_div_4_Template, 12, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showColectas.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.showColectas);
  }
}
function ColectasComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ColectasComponent_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.addColecta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
class ColectasComponent {
  constructor(router, auth, donacionesService, fundacionesService, fb, productosService, showErrorService) {
    this.router = router;
    this.auth = auth;
    this.donacionesService = donacionesService;
    this.fundacionesService = fundacionesService;
    this.fb = fb;
    this.productosService = productosService;
    this.showErrorService = showErrorService;
    this.colectas = [];
    this.isMyColectas = false;
    this.showColectas = [];
    this.loading = true;
    this.tipos_productos = [];
    this.optionsFundaciones = [/* { idFundacion: 1, nombre: 'Tzedaka' }, { idFundacion: 2, nombre: 'Cruz Roja' } */];
    this.filtros = {};
    if (router.url == '/mis-colectas') this.isMyColectas = true;
    this.formFiltros = fb.group({
      fundacion: [''],
      codigoPostal: [''],
      tipoProducto: ['']
    });
    this.filteredOptions = this.formFiltros.controls['fundacion'].valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(value => {
      const nombre = typeof value === 'string' ? value : value?.nombre;
      return nombre ? this._filter(nombre) : this.optionsFundaciones.slice();
    }));
    this.userData = {
      isSwapper: auth.isUserSwapper()
    };
  }
  ngOnInit() {
    this.getFundaciones();
    this.getTiposProductos();
    this.filtrarColectas();
  }
  filtrarColectas() {
    this.loading = true;
    if (this.isMyColectas) {
      this.donacionesService.getMisColectas().subscribe({
        next: res => {
          this.colectas = res;
          this.showColectas = this.colectas;
          this.showColectas.map(item => {
            item.imagen = this.donacionesService.getImagen(item.imagen);
          });
          this.loading = false;
        },
        error: error => {
          console.log('error mis colectas', error);
          this.showErrorService.show('Ocurrió un error!', 'Ocurrió un error al traer las colectas de la fundación. Por favor volvé a intentarlo más tarde.');
          this.loading = false;
        }
      });
    } else {
      this.filtros = {};
      const idFundacion = this.formFiltros.controls['fundacion'].value ? this.formFiltros.controls['fundacion'].value.idFundacion : undefined;
      const codigoPostal = this.formFiltros.controls['codigoPostal'].value;
      const tipoProducto = this.formFiltros.controls['tipoProducto'].value;
      if (idFundacion) this.filtros['idFundacion'] = idFundacion;
      if (codigoPostal) this.filtros['codigoPostal'] = codigoPostal;
      if (tipoProducto) this.filtros['tipoProducto'] = tipoProducto;
      this.donacionesService.getAllColectas(this.filtros).subscribe({
        next: res => {
          this.colectas = res;
          this.showColectas = this.colectas;
          this.showColectas.map(item => {
            item.imagen = this.donacionesService.getImagen(item.imagen);
          });
          this.loading = false;
        },
        error: error => {
          console.log('error all colectas', error);
          this.showErrorService.show('Ocurrió un error!', 'Ocurrió un error al traer las colectas. Por favor volvé a intentarlo más tarde.');
          this.loading = false;
        }
      });
    }
  }
  addColecta() {
    if (this.auth.isUserLoggedIn) {
      this.router.navigateByUrl('form-colecta');
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '¡Necesitás una cuenta!',
        text: 'Para poder crear una colecta, tenés que usar la cuenta de una fundación.',
        icon: 'warning',
        confirmButtonText: 'Iniciar sesión',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      }).then(({
        isConfirmed
      }) => {
        if (isConfirmed) this.router.navigate(['login']);
      });
    }
  }
  getFundaciones() {
    this.fundacionesService.getFundaciones().subscribe(res => {
      console.log(res);
      this.optionsFundaciones = res;
    });
  }
  getTiposProductos() {
    this.productosService.getTiposProductos().subscribe({
      next: v => {
        console.log('productos', v);
        this.tipos_productos = v;
      },
      error: e => {
        console.error('error', e);
        this.showErrorService.show('Error!', 'Ha ocurrido un error al traer los tipos de producto');
      },
      complete: () => console.info('complete')
    });
  }
  limpiarFiltros() {
    this.formFiltros.reset();
    this.filtrarColectas();
  }
  displayFn(fundacion) {
    return fundacion && fundacion.nombre ? fundacion.nombre : '';
  }
  _filter(nombre) {
    const filterValue = nombre.toLowerCase();
    return this.optionsFundaciones.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }
  goToColecta(colecta) {
    this.router.navigateByUrl('colecta/' + colecta.idColecta);
  }
}
ColectasComponent.ɵfac = function ColectasComponent_Factory(t) {
  return new (t || ColectasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_2__.DonacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_fundaciones_service__WEBPACK_IMPORTED_MODULE_3__.FundacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_5__.ShowErrorService));
};
ColectasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ColectasComponent,
  selectors: [["app-colectas"]],
  decls: 7,
  vars: 5,
  consts: [[3, "title"], ["id", "main-donaciones"], [1, "row"], ["id", "form-filtros", 3, "formGroup", 4, "ngIf"], [3, "loading"], ["class", "row", 4, "ngIf"], ["class", "floating-button-container", 4, "ngIf"], ["id", "form-filtros", 3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "fundacion", 2, "border", "1px solid red", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "formControlName", "codigoPostal", "type", "number"], ["formControlName", "tipoProducto", "panelClass", "example-panel"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"], [3, "value"], ["style", "text-align: center;", 4, "ngIf"], [1, "card-deck"], ["class", "card row", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "row", 3, "click"], [1, "col-sm-4", 2, "display", "flex", "justify-content", "center"], [1, "card-img", 3, "src"], [1, "card-body", "col-sm-6"], [1, "card-title"], [1, "productos"], ["class", "producto", 4, "ngFor", "ngForOf"], [1, "card-fundacion", "col-sm-2"], ["src", "assets/fundacion.png", 1, "img-fundacion"], [1, "producto"], [1, "floating-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Agregar Colecta", "matTooltip", "Agregar Colecta", "matTooltipPosition", "before", 3, "click"]],
  template: function ColectasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ColectasComponent_form_3_Template, 23, 7, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-spinner", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ColectasComponent_div_5_Template, 5, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ColectasComponent_div_6_Template, 4, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.isMyColectas ? "Mis Colectas" : "Colectas");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isMyColectas);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.userData.isSwapper);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatFabButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["#main-donaciones[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n#main-donaciones[_ngcontent-%COMP%]   #form-filtros[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  justify-items: center;\n  align-items: baseline;\n}\n#main-donaciones[_ngcontent-%COMP%]   #form-filtros[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 5px;\n}\n#main-donaciones[_ngcontent-%COMP%]   #form-filtros[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px;\n  max-width: 40%;\n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  max-height: 160px;\n  margin: 20px;\n  width: auto;\n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .productos[_ngcontent-%COMP%]   .producto[_ngcontent-%COMP%] {\n  margin: 5px 10px;\n  min-width: 100px;\n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-fundacion[_ngcontent-%COMP%] {\n  text-align: center;\n  \n}\n#main-donaciones[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-fundacion[_ngcontent-%COMP%]   .img-fundacion[_ngcontent-%COMP%] {\n  width: 30px;\n}\n#main-donaciones[_ngcontent-%COMP%]   .floating-button-container[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 25px;\n  bottom: 40px;\n}\n\n@media (min-width: 577px) and (max-width: 768px) {\n  #form-filtros[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n}\n@media (min-width: 0px) and (max-width: 576px) {\n  #form-filtros[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29sZWN0YXMvY29sZWN0YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FBQ0Q7QUFDQztFQUNDLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0MsZUFBQTtFQUNBLFlBQUE7QUFDSDtBQUVFO0VBQ0MsV0FBQTtFQUNBLGNBQUE7QUFBSDtBQU1DO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSkY7QUFNRTtFQUNDLGVBQUE7QUFKSDtBQU9FO0VBRUMsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5IO0FBU0U7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUEg7QUFTRztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVdFO0VBQ0Msa0JBQUE7RUFDQTs7d0JBQUE7QUFQSDtBQVdHO0VBQ0MsV0FBQTtBQVRKO0FBY0M7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaRjs7QUFnQkE7RUFDQztJQUNDLHlDQUFBO0VBYkE7QUFDRjtBQWdCQTtFQUNDO0lBQ0MscUNBQUE7RUFkQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tZG9uYWNpb25lcyB7XHJcblx0cGFkZGluZzogMiU7XHJcblxyXG5cdCNmb3JtLWZpbHRyb3Mge1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG5cdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdFx0XHJcblx0XHRtYXQtZm9ybS1maWVsZCB7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdGJ1dHRvbiB7XHJcblx0XHRcdG1hcmdpbjogMnB4O1xyXG5cdFx0XHRtYXgtd2lkdGg6IDQwJTtcclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdC5jYXJkIHtcclxuXHRcdG1hcmdpbjogNXB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdCY6aG92ZXIge1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNhcmQtaW1nIHtcclxuXHRcdFx0Ly9tYXgtd2lkdGg6IDEwMCU7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDE2MHB4O1xyXG5cdFx0XHRtYXJnaW46IDIwcHg7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5wcm9kdWN0b3Mge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG5cdFx0XHQucHJvZHVjdG8ge1xyXG5cdFx0XHRcdG1hcmdpbjogNXB4IDEwcHg7XHJcblx0XHRcdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5jYXJkLWZ1bmRhY2lvbiB7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0LyogZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuXHJcblx0XHRcdC5pbWctZnVuZGFjaW9uIHtcclxuXHRcdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmZsb2F0aW5nLWJ1dHRvbi1jb250YWluZXIge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IDI1cHg7XHJcblx0XHRib3R0b206IDQwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdCNmb3JtLWZpbHRyb3Mge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHQjZm9ybS1maWx0cm9zIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 583:
/*!***************************************************!*\
  !*** ./src/app/pages/colectas/colectas.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColectasModule": () => (/* binding */ ColectasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _colectas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colectas.component */ 2702);
/* harmony import */ var _colectas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colectas-routing.module */ 6144);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class ColectasModule {}
ColectasModule.ɵfac = function ColectasModule_Factory(t) {
  return new (t || ColectasModule)();
};
ColectasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ColectasModule
});
ColectasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _colectas_routing_module__WEBPACK_IMPORTED_MODULE_1__.ColectasRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ColectasModule, {
    declarations: [_colectas_component__WEBPACK_IMPORTED_MODULE_0__.ColectasComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _colectas_routing_module__WEBPACK_IMPORTED_MODULE_1__.ColectasRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_colectas_component__WEBPACK_IMPORTED_MODULE_0__.ColectasComponent]
  });
})();

/***/ }),

/***/ 3397:
/*!*************************************************!*\
  !*** ./src/app/services/fundaciones.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundacionesService": () => (/* binding */ FundacionesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _httpBackend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpBackend.service */ 9625);


const URL_NAME = 'URImsUsuarios';
class FundacionesService {
  constructor(backendService) {
    this.backendService = backendService;
  }
  getFundacion(id_fundacion) {
    return this.backendService.get(URL_NAME, 'fundacion/' + id_fundacion);
  }
  getFundaciones() {
    return this.backendService.get(URL_NAME, 'fundaciones');
  }
}
FundacionesService.ɵfac = function FundacionesService_Factory(t) {
  return new (t || FundacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_httpBackend_service__WEBPACK_IMPORTED_MODULE_0__.HttpBackEnd));
};
FundacionesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FundacionesService,
  factory: FundacionesService.ɵfac,
  providedIn: 'root'
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_colectas_colectas_module_ts.js.map