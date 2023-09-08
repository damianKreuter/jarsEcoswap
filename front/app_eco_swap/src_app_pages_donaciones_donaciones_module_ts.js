"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_donaciones_donaciones_module_ts"],{

/***/ 4283:
/*!***************************************************************!*\
  !*** ./src/app/pages/donaciones/donaciones-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonacionesRoutingModule": () => (/* binding */ DonacionesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _donaciones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donaciones.component */ 4736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _donaciones_component__WEBPACK_IMPORTED_MODULE_0__.DonacionesComponent
}];
class DonacionesRoutingModule {}
DonacionesRoutingModule.ɵfac = function DonacionesRoutingModule_Factory(t) {
  return new (t || DonacionesRoutingModule)();
};
DonacionesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DonacionesRoutingModule
});
DonacionesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DonacionesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4736:
/*!**********************************************************!*\
  !*** ./src/app/pages/donaciones/donaciones.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonacionesComponent": () => (/* binding */ DonacionesComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/map/map.component */ 8088);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/donaciones.service */ 1531);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/show-error.service */ 3073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);
/* harmony import */ var _shared_card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/card-donacion/card-donacion.component */ 2576);










const _c0 = function (a4) {
  return {
    name: "cancelar",
    icon: "close",
    color: "warn",
    status: "CANCELADA",
    disabled: a4
  };
};
const _c1 = function (a0) {
  return [a0];
};
function DonacionesComponent_div_2_app_card_donacion_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-card-donacion", 3);
  }
  if (rf & 2) {
    const donacion_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("donacion", donacion_r1)("usuarioHeader", donacion_r1.producto.colectaDTO.fundacionDTO)("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, donacion_r1.estadoDonacion != "PENDIENTE")));
  }
}
function DonacionesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DonacionesComponent_div_2_app_card_donacion_1_Template, 1, 7, "app-card-donacion", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const donacion_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", donacion_r1.idDonacion);
  }
}
class DonacionesComponent {
  constructor(dialog, donacionesService, auth, showErrorService) {
    this.dialog = dialog;
    this.donacionesService = donacionesService;
    this.auth = auth;
    this.showErrorService = showErrorService;
    this.donaciones = [];
    this.buttonsCard = [];
    this.getDonaciones();
  }
  getDonaciones() {
    this.donacionesService.getMisDonaciones().subscribe({
      next: res => {
        if (res) {
          this.donaciones = res;
          this.donaciones.map(donacion => {
            if (donacion.idDonacion) donacion['last_status'] = donacion.estado;
            if (donacion.imagenes) donacion.parsedImagenes = donacion.imagenes.split('|');
          });
        } else this.showErrorService.show('Error!', 'No se encontró la información de tus donaciones. Intentá nuevamente más tarde.');
      },
      error: error => {
        console.log(error);
        this.showErrorService.show('Error!', 'Ocurrió un error al traer la información de tus donaciones. Intentá nuevamente más tarde.');
      }
    });
  }
  zoomImage(img) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      html: `<img src="${img}" style="width: 100%"/>`,
      showConfirmButton: false,
      showCloseButton: true
    });
  }
  openDialog() {
    this.dialog.open(src_app_shared_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, {
      maxWidth: '70vw',
      maxHeight: '60vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }
  getImage(image) {
    return this.donacionesService.getImagen(image);
  }
}
DonacionesComponent.ɵfac = function DonacionesComponent_Factory(t) {
  return new (t || DonacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_2__.DonacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_4__.ShowErrorService));
};
DonacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DonacionesComponent,
  selectors: [["app-donaciones"]],
  decls: 3,
  vars: 1,
  consts: [["title", "Mis Donaciones"], [4, "ngFor", "ngForOf"], [3, "donacion", "usuarioHeader", "buttons", 4, "ngIf"], [3, "donacion", "usuarioHeader", "buttons"]],
  template: function DonacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DonacionesComponent_div_2_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.donaciones);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _shared_card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_6__.CardDonacionComponent],
  styles: [".donacion-example-header-image[_ngcontent-%COMP%] {\n  background-image: url('fundacion.png');\n  background-size: cover;\n}\n\n.donacion-card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 1rem;\n  padding: 16px;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .donacion-aceptada[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--primary-color);\n}\n.donacion-card-content[_ngcontent-%COMP%]   .donacion-rechazada[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--warn-color);\n}\n.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  margin: 5px;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZG9uYWNpb25lcy9kb25hY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0NBQUE7RUFDQSxzQkFBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFFRDtBQUFDO0VBQ0MsaUJBQUE7RUFDQSwyQkFBQTtBQUVGO0FBQUM7RUFDQyxpQkFBQTtFQUNBLHdCQUFBO0FBRUY7QUFFRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBQUg7QUFDRztFQUNDLGVBQUE7QUFDSjtBQUlDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7QUFGSCIsInNvdXJjZXNDb250ZW50IjpbIi5kb25hY2lvbi1leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZnVuZGFjaW9uLnBuZycpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmRvbmFjaW9uLWNhcmQtY29udGVudCB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xyXG5cdGdhcDogMXJlbTtcclxuXHRwYWRkaW5nOiAxNnB4O1xyXG5cclxuXHQuZG9uYWNpb24tYWNlcHRhZGEge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcblx0fVxyXG5cdC5kb25hY2lvbi1yZWNoYXphZGEge1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogdmFyKC0td2Fybi1jb2xvcik7XHJcblx0fVxyXG5cclxuXHQuaW1hZ2VuZXMge1xyXG5cdFx0aW1nIHtcclxuXHRcdFx0aGVpZ2h0OiA2NXB4O1xyXG5cdFx0XHRtYXJnaW46IDVweDtcclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuZG9uYWNpb24tc3RhdHVzIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdG1hdC1zbGlkZS10b2dnbGUge1xyXG5cdFx0XHRtYXJnaW46IDVweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4855:
/*!*******************************************************!*\
  !*** ./src/app/pages/donaciones/donaciones.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonacionesModule": () => (/* binding */ DonacionesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _donaciones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donaciones.component */ 4736);
/* harmony import */ var _donaciones_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donaciones-routing.module */ 4283);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class DonacionesModule {}
DonacionesModule.ɵfac = function DonacionesModule_Factory(t) {
  return new (t || DonacionesModule)();
};
DonacionesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: DonacionesModule
});
DonacionesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _donaciones_routing_module__WEBPACK_IMPORTED_MODULE_1__.DonacionesRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DonacionesModule, {
    declarations: [_donaciones_component__WEBPACK_IMPORTED_MODULE_0__.DonacionesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _donaciones_routing_module__WEBPACK_IMPORTED_MODULE_1__.DonacionesRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_donaciones_component__WEBPACK_IMPORTED_MODULE_0__.DonacionesComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_donaciones_donaciones_module_ts.js.map