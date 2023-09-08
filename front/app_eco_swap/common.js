"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["common"],{

/***/ 9499:
/*!************************************************!*\
  !*** ./src/app/layout/header/header.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 7876);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);







class HeaderModule {}
HeaderModule.ɵfac = function HeaderModule_Factory(t) {
  return new (t || HeaderModule)();
};
HeaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: HeaderModule
});
HeaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderModule, {
    declarations: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
    exports: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent]
  });
})();

/***/ }),

/***/ 4893:
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosService": () => (/* binding */ ProductosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _httpBackend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpBackend.service */ 9625);


const URL_NAME = 'URImsUsuarios';
class ProductosService {
  constructor(backendService) {
    this.backendService = backendService;
  }
  getTiposProductos() {
    return this.backendService.get(URL_NAME, 'api/tiposProductos');
  }
  getProductosColecta(id_colecta) {
    return this.backendService.get(URL_NAME, 'api/productos/' + id_colecta);
  }
}
ProductosService.ɵfac = function ProductosService_Factory(t) {
  return new (t || ProductosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_httpBackend_service__WEBPACK_IMPORTED_MODULE_0__.HttpBackEnd));
};
ProductosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProductosService,
  factory: ProductosService.ɵfac,
  providedIn: 'root'
});


/***/ })

}]);
//# sourceMappingURL=common.js.map