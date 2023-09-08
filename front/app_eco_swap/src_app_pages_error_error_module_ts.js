"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_error_error_module_ts"],{

/***/ 4727:
/*!*****************************************************!*\
  !*** ./src/app/pages/error/error-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorRoutingModule": () => (/* binding */ ErrorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component */ 8449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent
}];
class ErrorRoutingModule {}
ErrorRoutingModule.ɵfac = function ErrorRoutingModule_Factory(t) {
  return new (t || ErrorRoutingModule)();
};
ErrorRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ErrorRoutingModule
});
ErrorRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErrorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8449:
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);


class ErrorComponent {}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};
ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  decls: 7,
  vars: 0,
  consts: [[2, "display", "flex", "justify-content", "center", "flex-direction", "column", "align-items", "center"], ["src", "assets/logo_green.png", 2, "max-width", "300px"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A1Ocurri\u00F3 un error!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Por favor volv\u00E9 a intentarlo o mandanos un mensaje.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5204:
/*!*********************************************!*\
  !*** ./src/app/pages/error/error.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorModule": () => (/* binding */ ErrorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component */ 8449);
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-routing.module */ 4727);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class ErrorModule {}
ErrorModule.ɵfac = function ErrorModule_Factory(t) {
  return new (t || ErrorModule)();
};
ErrorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ErrorModule
});
ErrorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _error_routing_module__WEBPACK_IMPORTED_MODULE_1__.ErrorRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ErrorModule, {
    declarations: [_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _error_routing_module__WEBPACK_IMPORTED_MODULE_1__.ErrorRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_error_error_module_ts.js.map