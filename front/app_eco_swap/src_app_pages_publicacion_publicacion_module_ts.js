"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_publicacion_publicacion_module_ts"],{

/***/ 3098:
/*!*****************************************************************!*\
  !*** ./src/app/pages/publicacion/publicacion-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionRoutingModule": () => (/* binding */ PublicacionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _publicacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacion.component */ 6955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _publicacion_component__WEBPACK_IMPORTED_MODULE_0__.PublicacionComponent
}];
class PublicacionRoutingModule {}
PublicacionRoutingModule.ɵfac = function PublicacionRoutingModule_Factory(t) {
  return new (t || PublicacionRoutingModule)();
};
PublicacionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PublicacionRoutingModule
});
PublicacionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicacionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6955:
/*!************************************************************!*\
  !*** ./src/app/pages/publicacion/publicacion.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionComponent": () => (/* binding */ PublicacionComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trocar_modal_trocar_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trocar-modal/trocar-modal.component */ 2616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_trueques_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/trueques.service */ 2777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/show-error.service */ 3073);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ 4984);















function PublicacionComponent_mat_card_3_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PublicacionComponent_mat_card_3_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PublicacionComponent_mat_card_3_img_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicacionComponent_mat_card_3_img_16_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const img_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.zoomImage(img_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r3.getImage(img_r9), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function PublicacionComponent_mat_card_3_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Precio de venta: $", ctx_r4.publicacion.precioVenta, " ");
  }
}
function PublicacionComponent_mat_card_3_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const caract_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", caract_r12.caracteristica, " ");
  }
}
function PublicacionComponent_mat_card_3_mat_card_actions_29_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicacionComponent_mat_card_3_mat_card_actions_29_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.comprar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "QUIERO COMPRAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PublicacionComponent_mat_card_3_mat_card_actions_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card-actions", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PublicacionComponent_mat_card_3_mat_card_actions_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.intercambiar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "QUIERO INTERCAMBIAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PublicacionComponent_mat_card_3_mat_card_actions_29_button_3_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.publicacion.tipoPublicacion == "VENTA_Y_TRUEQUE");
  }
}
const _c0 = function () {
  return [];
};
function PublicacionComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, PublicacionComponent_mat_card_3_mat_icon_9_Template, 2, 0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, PublicacionComponent_mat_card_3_mat_icon_10_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-card-content", 10)(15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, PublicacionComponent_mat_card_3_img_16_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div")(18, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, PublicacionComponent_mat_card_3_div_24_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 17)(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Caracter\u00EDsticas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, PublicacionComponent_mat_card_3_div_28_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, PublicacionComponent_mat_card_3_mat_card_actions_29_Template, 4, 1, "mat-card-actions", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r0.publicacion.particularDTO.nombre, " ", ctx_r0.publicacion.particularDTO.apellido, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c0).constructor(ctx_r0.publicacion.particularDTO.puntaje || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c0).constructor(5 - (ctx_r0.publicacion.particularDTO.puntaje || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 13, ctx_r0.publicacion.fechaPublicacion, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.publicacion.parsedImagenes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.publicacion.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.publicacion.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Valor de trueque: $", ctx_r0.publicacion.valorTruequeMin, " - $", ctx_r0.publicacion.valorTruequeMax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.publicacion.tipoPublicacion == "VENTA_Y_TRUEQUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.publicacion.caracteristicaProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.showButtons);
  }
}
class PublicacionComponent {
  constructor(truequeService, route, showErrorService, auth, router, usuarioService, dialog) {
    this.truequeService = truequeService;
    this.route = route;
    this.showErrorService = showErrorService;
    this.auth = auth;
    this.router = router;
    this.usuarioService = usuarioService;
    this.dialog = dialog;
    this.loading = false;
    this.showButtons = true;
    route.paramMap.subscribe(params => {
      console.log(params);
      this.id_publicacion = params.get('id_publicacion') || 0;
      if (!this.id_publicacion) showErrorService.show('Error!', 'No pudimos encontrar la información de la colecta que seleccionaste, por favor volvé a intentarlo más tarde.');else this.getPublicacion(this.id_publicacion);
    });
    usuarioService.getUserByID(auth.getUserID()).subscribe({
      next: res => {
        this.userInfo = res;
        console.log(this.publicacion, this.userInfo);
        if (this.publicacion.particularDTO.idParticular == this.userInfo.particularDTO.idParticular) this.showButtons = false;
      }
    });
  }
  getPublicacion(id) {
    this.truequeService.getPublicacion(id).subscribe({
      next: res => {
        //console.log(res);
        this.publicacion = res;
        this.publicacion.parsedImagenes = this.publicacion.imagenes.split('|');
      },
      error: error => {
        console.log(error);
        this.showErrorService.show('Error!', 'No pudimos encontrar la información de la colecta que seleccionaste, por favor volvé a intentarlo más tarde.');
      }
    });
  }
  intercambiar() {
    if (this.auth.isUserLoggedIn) {
      this.dialog.open(_trocar_modal_trocar_modal_component__WEBPACK_IMPORTED_MODULE_1__.TrocarModalComponent, {
        data: {
          publicacion: this.publicacion
        },
        minWidth: 100,
        maxHeight: '90vh'
      });
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '¡Necesitás una cuenta!',
        text: 'Para poder intercambiar, tenés que usar tu cuenta.',
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
  comprar() {
    if (this.auth.isUserLoggedIn) {} else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '¡Necesitás una cuenta!',
        text: 'Para poder comprar, tenés que usar tu cuenta.',
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
  getImage(image) {
    return this.truequeService.getImagen(image);
  }
  zoomImage(img) {
    if (img) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        html: `<img src="${this.getImage(img)}" style="width: 100%"/>`,
        showConfirmButton: false,
        showCloseButton: true
      });
    }
  }
}
PublicacionComponent.ɵfac = function PublicacionComponent_Factory(t) {
  return new (t || PublicacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_trueques_service__WEBPACK_IMPORTED_MODULE_2__.TruequesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_3__.ShowErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};
PublicacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: PublicacionComponent,
  selectors: [["app-publicacion"]],
  decls: 4,
  vars: 2,
  consts: [["id", "main-publicacion"], [3, "loading"], [4, "ngIf"], [2, "border-bottom", "solid 1px var(--light-grey)", "padding-bottom", "10px"], [1, "div-header"], [1, "header-info"], ["mat-card-avatar", "", 1, "example-header-image"], [2, "display", "flex", "align-items", "center"], ["color", "primary", 4, "ngFor", "ngForOf"], ["class", "empty-star", 4, "ngFor", "ngForOf"], [1, "card-content"], [1, "imagenes"], [3, "src", "click", 4, "ngFor", "ngForOf"], [1, "card-title"], [1, "descripcion"], [1, "trueque"], ["class", "venta", 4, "ngIf"], [1, "caracteristicas"], ["class", "producto", 4, "ngFor", "ngForOf"], ["class", "card-button", 4, "ngIf"], ["color", "primary"], [1, "empty-star"], [3, "src", "click"], [1, "venta"], [1, "producto"], [1, "card-button"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
  template: function PublicacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PublicacionComponent_mat_card_3_Template, 30, 18, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.publicacion);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["#main-publicacion[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n#main-publicacion[_ngcontent-%COMP%]   .example-header-image[_ngcontent-%COMP%] {\n  background-image: url('persona.png');\n  background-size: cover;\n  margin: 0 10px 0 0;\n}\n#main-publicacion[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], #main-publicacion[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], #main-publicacion[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n#main-publicacion[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n#main-publicacion[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n#main-publicacion[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#main-publicacion[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  color: var(--dark-grey);\n  margin-left: 10px;\n}\n#main-publicacion[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]:hover {\n  color: var(--grey-text);\n  cursor: pointer;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px var(--dark-grey);\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .trueque[_ngcontent-%COMP%], #main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .venta[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .caracteristicas[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n#main-publicacion[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%] {\n  align-self: center;\n  \n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-example-header-image[_ngcontent-%COMP%] {\n  background-image: url('persona.png');\n  background-size: cover;\n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 1rem;\n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px var(--dark-grey);\n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  width: 150px;\n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .aprobada[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .rechazada[_ngcontent-%COMP%] {\n  color: var(--warn-color);\n}\n\n@media (min-width: 0px) and (max-width: 576px) {\n  .card-content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr !important;\n  }\n  .donacion-card-content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHVibGljYWNpb24vcHVibGljYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FBQ0Q7QUFDQztFQUNDLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBR0U7RUFDQyxZQUFBO0FBREg7QUFJRTtFQUNDLGFBQUE7RUFDQSxTQUFBO0FBRkg7QUFNQztFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUpGO0FBTUU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFKSDtBQU1HO0VBQ0MsdUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBTUk7RUFDQyx1QkFBQTtFQUNBLGVBQUE7QUFKTDtBQVVDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVJGO0FBVUU7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBUkg7QUFVRztFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQVJKO0FBVUk7RUFDQyxlQUFBO0FBUkw7QUFhRTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWEg7QUFjRTtFQUNDLGVBQUE7QUFaSDtBQWVFO0VBQ0MsZ0JBQUE7QUFiSDtBQWlCQztFQUNDLGtCQUFBO0VBRUE7O0tBQUE7QUFkRjtBQW1CQztFQUNDLG9DQUFBO0VBQ0Esc0JBQUE7QUFqQkY7QUFtQkM7RUFDQyxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0FBakJGO0FBb0JHO0VBQ0MsWUFBQTtFQUNHLFdBQUE7RUFDSCxrQkFBQTtFQUNBLHdDQUFBO0FBbEJKO0FBc0JFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FBcEJIO0FBc0JHO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBcEJKO0FBd0JFO0VBQ0MsMkJBQUE7RUFDQSxnQkFBQTtBQXRCSDtBQXdCRTtFQUNDLHdCQUFBO0FBdEJIOztBQTJCQTtFQUNDO0lBQ0MsYUFBQTtJQUNBLHFDQUFBO0VBeEJBO0VBMkJEO0lBQ0MsYUFBQTtJQUNBLHFDQUFBO0VBekJBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1wdWJsaWNhY2lvbiB7XHJcblx0cGFkZGluZzogMiU7XHJcblxyXG5cdC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wZXJzb25hLnBuZycpO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdG1hcmdpbjogMCAxMHB4IDAgMDtcclxuXHR9XHJcblxyXG5cdG1hdC1jYXJkIHtcclxuXHRcdG1hdC1jYXJkLWhlYWRlciwgbWF0LWNhcmQtY29udGVudCwgbWF0LWNhcmQtYWN0aW9ucyB7XHJcblx0XHRcdG1hcmdpbjogMTBweDtcclxuXHRcdH1cclxuXHJcblx0XHRtYXQtY2FyZC1hY3Rpb25zIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0Z2FwOiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmRpdi1oZWFkZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuXHRcdC5oZWFkZXItaW5mbyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0XHQuYWRkcmVzcyB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG5cdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWdyZXktdGV4dCk7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY2FyZC1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0XHRnYXA6IDFyZW07XHJcblxyXG5cdFx0LmltYWdlbmVzIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdFx0XHRtYXJnaW46IDVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZGFyay1ncmV5KTtcclxuXHRcclxuXHRcdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuZGVzY3JpcGNpb24ge1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRydWVxdWUsIC52ZW50YSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdH1cclxuXHJcblx0XHQuY2FyYWN0ZXJpc3RpY2FzIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jYXJkLWJ1dHRvbiB7XHJcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG5cdFx0LyogLmJ1dHRvbnMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0fSAqL1xyXG5cdH1cclxuXHJcblx0LmRvbmFjaW9uLWV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BlcnNvbmEucG5nJyk7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdH1cclxuXHQuZG9uYWNpb24tY2FyZC1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyOy8vMWZyIDJmciAxZnI7XHJcblx0XHRnYXA6IDFyZW07XHJcblxyXG5cdFx0LmltYWdlbmVzIHtcclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHRoZWlnaHQ6IDY1cHg7XHJcbiAgICBcdFx0XHRtYXJnaW46IDVweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZGFyay1ncmV5KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5kb25hY2lvbi1zdGF0dXMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuXHRcdFx0YnV0dG9uIHtcclxuXHRcdFx0XHRtYXJnaW46IDVweCBhdXRvO1xyXG5cdFx0XHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5hcHJvYmFkYSB7XHJcblx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdH1cclxuXHRcdC5yZWNoYXphZGEge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0td2Fybi1jb2xvcik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHQuY2FyZC1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0LmRvbmFjaW9uLWNhcmQtY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3425:
/*!*********************************************************!*\
  !*** ./src/app/pages/publicacion/publicacion.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionModule": () => (/* binding */ PublicacionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _publicacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacion.component */ 6955);
/* harmony import */ var _publicacion_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicacion-routing.module */ 3098);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _trocar_modal_trocar_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trocar-modal/trocar-modal.component */ 2616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);










class PublicacionModule {}
PublicacionModule.ɵfac = function PublicacionModule_Factory(t) {
  return new (t || PublicacionModule)();
};
PublicacionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: PublicacionModule
});
PublicacionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _publicacion_routing_module__WEBPACK_IMPORTED_MODULE_1__.PublicacionRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PublicacionModule, {
    declarations: [_publicacion_component__WEBPACK_IMPORTED_MODULE_0__.PublicacionComponent, _trocar_modal_trocar_modal_component__WEBPACK_IMPORTED_MODULE_5__.TrocarModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _publicacion_routing_module__WEBPACK_IMPORTED_MODULE_1__.PublicacionRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule],
    exports: [_publicacion_component__WEBPACK_IMPORTED_MODULE_0__.PublicacionComponent]
  });
})();

/***/ }),

/***/ 2616:
/*!**************************************************************************!*\
  !*** ./src/app/pages/publicacion/trocar-modal/trocar-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrocarModalComponent": () => (/* binding */ TrocarModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_trueques_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/trueques.service */ 2777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _shared_deck_publicaciones_deck_publicaciones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/deck-publicaciones/deck-publicaciones.component */ 8719);






function TrocarModalComponent_div_0_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const img_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.getImage(img_r4), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function TrocarModalComponent_div_0_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Precio de venta: $", ctx_r3.publicacionOrigen.precioVenta, " ");
  }
}
function TrocarModalComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TrocarModalComponent_div_0_div_1_img_3_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TrocarModalComponent_div_0_div_1_div_8_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Publicaci\u00F3n de ", ctx_r1.publicacionOrigen.particularDTO.nombre, " ", ctx_r1.publicacionOrigen.particularDTO.apellido, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.publicacionOrigen.parsedImagenes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.publicacionOrigen.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Valor de trueque: $", ctx_r1.publicacionOrigen.valorTruequeMin, " - $", ctx_r1.publicacionOrigen.valorTruequeMax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.publicacionOrigen.tipoPublicacion == "VENTA_Y_TRUEQUE");
  }
}
function TrocarModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrocarModalComponent_div_0_div_1_Template, 9, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6)(3, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Seleccion\u00E1 una de tus publicaciones para intercambiar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "app-deck-publicaciones", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedCard", function TrocarModalComponent_div_0_Template_app_deck_publicaciones_selectedCard_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.selectCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.publicacionOrigen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("publicacionesToShow", ctx_r0.misPublicaciones);
  }
}
class TrocarModalComponent {
  constructor(data, truequeService) {
    this.data = data;
    this.truequeService = truequeService;
    this.imagenPublicacion = '';
    this.loading = false;
    this.misPublicaciones = [];
    console.log(data);
    this.publicacionOrigen = data.publicacion;
    this.getMisPublicaciones();
  }
  getMisPublicaciones() {
    this.truequeService.getMisPublicaciones().subscribe({
      next: res => {
        console.log(res);
        this.misPublicaciones = res;
        this.misPublicaciones.map(item => {
          item.parsedImagenes = item.imagenes.split('|');
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }
  getImage(image) {
    return this.truequeService.getImagen(image);
  }
  selectCard(cardId) {
    this.cardSelected = cardId;
  }
}
TrocarModalComponent.ɵfac = function TrocarModalComponent_Factory(t) {
  return new (t || TrocarModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_trueques_service__WEBPACK_IMPORTED_MODULE_0__.TruequesService));
};
TrocarModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TrocarModalComponent,
  selectors: [["app-trocar-modal"]],
  decls: 6,
  vars: 2,
  consts: [["id", "main-trocar", 4, "ngIf"], ["id", "trocar-buttons"], ["mat-raised-button", "", "color", "light"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["id", "main-trocar"], ["class", "publicacion-origen", 4, "ngIf"], [1, "mis-publicaciones"], [2, "text-align", "center"], ["origin", "intercambio", 3, "publicacionesToShow", "selectedCard"], [1, "publicacion-origen"], [1, "imagenes"], [3, "src", 4, "ngFor", "ngForOf"], [1, "descripcion"], [1, "trueque"], ["class", "venta", 4, "ngIf"], [3, "src"], [1, "venta"]],
  template: function TrocarModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TrocarModalComponent_div_0_Template, 7, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "CANCELAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "SOLICITAR INTERCAMBIO");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.cardSelected);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _shared_deck_publicaciones_deck_publicaciones_component__WEBPACK_IMPORTED_MODULE_1__.DeckPublicacionesComponent],
  styles: ["#main-trocar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-items: center;\n  align-items: center;\n}\n#main-trocar[_ngcontent-%COMP%]   .publicacion-origen[_ngcontent-%COMP%] {\n  margin: 10px 0 10px;\n  padding-right: 15px;\n  border-right: 1px solid grey;\n  text-align: center;\n  width: 95%;\n}\n#main-trocar[_ngcontent-%COMP%]   .publicacion-origen[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  border-radius: 10px;\n}\n#main-trocar[_ngcontent-%COMP%]   .mis-publicaciones[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 70vh;\n  padding: 10px;\n}\n\n#trocar-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  margin: 10px;\n  gap: 10px;\n}\n#trocar-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n@media (min-width: 0px) and (max-width: 576px) {\n  #main-trocar[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr !important;\n  }\n  #main-trocar[_ngcontent-%COMP%]   .publicacion-origen[_ngcontent-%COMP%] {\n    border-right: none !important;\n    border-bottom: 1px solid grey;\n  }\n  #main-trocar[_ngcontent-%COMP%]   .mis-publicaciones[_ngcontent-%COMP%] {\n    height: 40vh !important;\n  }\n  #trocar-buttons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHVibGljYWNpb24vdHJvY2FyLW1vZGFsL3Ryb2Nhci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDRyw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNDO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQUNIO0FBR0M7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFLQTtFQUNDLGFBQUE7RUFDRyw4QkFBQTtFQUNILHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFGRDtBQUlDO0VBQ0MsY0FBQTtBQUZGOztBQU1BO0VBQ0M7SUFDQyxhQUFBO0lBQ0EscUNBQUE7RUFIQTtFQUtBO0lBQ0MsNkJBQUE7SUFDQSw2QkFBQTtFQUhEO0VBTUE7SUFDQyx1QkFBQTtFQUpEO0VBT0Q7SUFDQyxxQ0FBQTtFQUxBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi10cm9jYXIge1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHQucHVibGljYWNpb24tb3JpZ2VuIHtcclxuXHRcdG1hcmdpbjogMTBweCAwIDEwcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblxyXG5cdFx0LmltYWdlbmVzIGltZ3tcclxuXHRcdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm1pcy1wdWJsaWNhY2lvbmVzIHtcclxuXHRcdG92ZXJmbG93OiBhdXRvO1xyXG5cdFx0aGVpZ2h0OiA3MHZoO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcbn1cclxuXHJcbiN0cm9jYXItYnV0dG9ucyB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdGdhcDogMTBweDtcclxuXHJcblx0YnV0dG9uIHtcclxuXHRcdG1heC13aWR0aDogNzAlO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0I21haW4tdHJvY2FyIHtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cclxuXHRcdC5wdWJsaWNhY2lvbi1vcmlnZW4ge1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcblx0XHR9XHJcblxyXG5cdFx0Lm1pcy1wdWJsaWNhY2lvbmVzIHtcclxuXHRcdFx0aGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdCN0cm9jYXItYnV0dG9ucyB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_publicacion_publicacion_module_ts.js.map