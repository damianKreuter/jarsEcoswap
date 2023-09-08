"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["src_app_pages_colecta_colecta_module_ts"],{

/***/ 1177:
/*!*********************************************************!*\
  !*** ./src/app/pages/colecta/colecta-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColectaRoutingModule": () => (/* binding */ ColectaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _colecta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colecta.component */ 9194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _colecta_component__WEBPACK_IMPORTED_MODULE_0__.ColectaComponent
}];
class ColectaRoutingModule {}
ColectaRoutingModule.ɵfac = function ColectaRoutingModule_Factory(t) {
  return new (t || ColectaRoutingModule)();
};
ColectaRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ColectaRoutingModule
});
ColectaRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ColectaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9194:
/*!****************************************************!*\
  !*** ./src/app/pages/colecta/colecta.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColectaComponent": () => (/* binding */ ColectaComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/donaciones.service */ 1531);
/* harmony import */ var src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/show-error.service */ 3073);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ 4893);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ 4984);
/* harmony import */ var _shared_card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/card-donacion/card-donacion.component */ 2576);















function ColectaComponent_mat_card_3_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ColectaComponent_mat_card_3_mat_icon_8_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.showDireccion(ctx_r7.colecta.fundacionDTO.usuario));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ColectaComponent_mat_card_3_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ColectaComponent_mat_card_3_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ColectaComponent_mat_card_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const producto_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", producto_r11.descripcion, ": ", producto_r11.cantidadRecibida, " ");
  }
}
function ColectaComponent_mat_card_3_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ColectaComponent_mat_card_3_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.donar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "QUIERO DONAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [];
};
function ColectaComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ColectaComponent_mat_card_3_mat_icon_8_Template, 2, 0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ColectaComponent_mat_card_3_mat_icon_10_Template, 2, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ColectaComponent_mat_card_3_mat_icon_11_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-card-content", 12)(15, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ColectaComponent_mat_card_3_Template_img_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.zoomImage(ctx_r14.colecta.imagen ? ctx_r14.colecta.imagen.split("/").at(-1) : "assets/fundacion.png"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div")(17, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 16)(22, "h4")(23, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ColectaComponent_mat_card_3_div_26_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "mat-card-actions", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ColectaComponent_mat_card_3_button_28_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.colecta.fundacionDTO.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.colecta.fundacionDTO.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](10, _c0).constructor(ctx_r0.colecta.fundacionDTO.puntaje || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](11, _c0).constructor(5 - (ctx_r0.colecta.fundacionDTO.puntaje || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.parseVigencia());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r0.colecta.imagen ? ctx_r0.colecta.imagen : "assets/fundacion.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.colecta.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.colecta.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.colecta.productos);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx_r0.userData.isLoggedIn && !ctx_r0.userData.isSwapper));
  }
}
function ColectaComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Esta colecta no tiene donaciones a\u00FAn!");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a4) {
  return {
    name: "cancelar",
    icon: "close",
    color: "warn",
    status: "CANCELADA",
    disabled: a4
  };
};
const _c2 = function (a0) {
  return [a0];
};
const _c3 = function (a4) {
  return {
    name: "aceptar",
    icon: "check",
    color: "primary",
    status: "APROBADA",
    disabled: a4
  };
};
const _c4 = function (a4) {
  return {
    name: "rechazar",
    icon: "close",
    color: "warn",
    status: "RECHAZADA",
    disabled: a4
  };
};
const _c5 = function (a4) {
  return {
    name: "recibida",
    icon: "done_all",
    color: "primary",
    status: "RECIBIDA",
    disabled: a4
  };
};
const _c6 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
function ColectaComponent_div_4_app_card_donacion_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-card-donacion", 28);
  }
  if (rf & 2) {
    const donacion_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("donacion", donacion_r18)("usuarioHeader", donacion_r18.particularDTO)("buttons", ctx_r17.userData.isSwapper ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](3, _c1, donacion_r18.estadoDonacion != "PENDIENTE")) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](13, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c3, donacion_r18.estadoDonacion != "PENDIENTE"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](9, _c4, donacion_r18.estadoDonacion != "PENDIENTE"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c5, donacion_r18.estadoDonacion != "APROBADA")));
  }
}
function ColectaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ColectaComponent_div_4_div_3_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ColectaComponent_div_4_app_card_donacion_4_Template, 1, 17, "app-card-donacion", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.userData.isSwapper ? "Mi donaci\u00F3n" : "Donaciones", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.donacionesToShow.length == 0 && !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.donacionesToShow);
  }
}
class ColectaComponent {
  constructor(route, router, auth, donacionesService, showErrorService, productoService, usuarioService) {
    this.route = route;
    this.router = router;
    this.auth = auth;
    this.donacionesService = donacionesService;
    this.showErrorService = showErrorService;
    this.productoService = productoService;
    this.usuarioService = usuarioService;
    this.id_colecta = '';
    this.donaciones = [];
    this.loading = true;
    this.showDonaciones = false;
    this.donacionesToShow = [];
    this.buttonsCard = [];
    route.paramMap.subscribe(params => {
      console.log(params);
      this.id_colecta = params.get('id_colecta') || '';
      if (!this.id_colecta) showErrorService.show('Error!', 'No pudimos encontrar la información de la colecta que seleccionaste, por favor volvé a intentarlo más tarde.');
    });
    this.userData = {
      isSwapper: auth.isUserSwapper(),
      isLoggedIn: auth.isUserLoggedIn
    };
    if (this.userData && this.userData.isLoggedIn) {
      usuarioService.getUserByID(auth.getUserID()).subscribe({
        next: res => {
          this.userInfo = res;
        }
      });
    }
  }
  ngOnInit() {
    this.getColecta();
  }
  getColecta() {
    this.donacionesService.getColecta(this.id_colecta).subscribe({
      next: colecta => {
        if (colecta) {
          //console.log(colecta);
          this.colecta = colecta;
          this.colecta.imagen = this.getImage(this.colecta.imagen);
          this.productoService.getProductosColecta(colecta.idColecta).subscribe({
            next: res => {
              colecta.productos = res;
            },
            error: error => {
              console.log('error', error);
            }
          });
          if (this.auth.isUserLoggedIn) {
            this.donacionesService.getDonacionesColecta(this.colecta.idColecta).subscribe({
              next: donaciones => {
                console.log(donaciones);
                this.donaciones = donaciones;
                this.donaciones.map(donacion => {
                  if (donacion.imagenes) donacion.parsedImagenes = donacion.imagenes.split('|');
                });
                //TODO: REVISAR CUANDO MUESTRA DONACIONES
                if (this.userData.isSwapper) {
                  this.donacionesToShow = this.donaciones.filter(item => item.particularDTO.idParticular == this.userInfo.particularDTO.idParticular);
                  this.showDonaciones = true;
                } else if (this.userData) {
                  // TODO: IF colecta.id_fundacion == userData.id_fundacion --> show donaciones
                  this.donacionesToShow = donaciones;
                  this.showDonaciones = true;
                }
                console.log(this.showDonaciones);
              },
              error: error => {
                console.log('error', error);
              }
            });
          }
          this.loading = false;
        } else this.showErrorService.show('Error!', 'No se encontró la información de la colecta que seleccionaste. Intentá nuevamente más tarde.');
      },
      error: error => {
        console.log(error);
        this.showErrorService.show('Error!', 'Ocurrió un error al traer la información de la colecta que seleccionaste. Intentá nuevamente más tarde.');
      }
    });
  }
  donar() {
    if (this.auth.isUserLoggedIn) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '¡Estás un paso más cerca de hacer tu donación!',
        text: 'Te vamos a pedir algunos datos de lo que vas a donar. Es importante que completes la información requerida para que la fundación conozca lo que vas a donar.',
        icon: 'info',
        confirmButtonText: '¡VAMOS!' //'Confirmar'
      }).then(({
        isConfirmed,
        value
      }) => {
        if (isConfirmed) this.router.navigate(['donacion/' + this.id_colecta]);
      });
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '¡Necesitás una cuenta!',
        text: 'Para poder donar, tenés que usar tu cuenta.',
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
  zoomImage(img) {
    if (img) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        html: `<img src="${this.getImage(img)}" style="width: 100%"/>`,
        showConfirmButton: false,
        showCloseButton: true
      });
    }
  }
  showDireccion(usuario) {
    //console.log( usuario);
    let stringDir = '';
    for (const dir of usuario.direcciones) {
      if (dir.direccion) {
        stringDir += dir.direccion + ' ' + dir.altura;
      }
    }
    //console.log(stringDir);
    const dirArray = stringDir.split(' ');
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Información de la fundación',
      text: stringDir + ' https://www.google.com/maps/search/?api=1&query=' + dirArray[0] + '+' + dirArray[1],
      html: `
			<p style="font-weight: 400;"><b>Email: </b>${usuario.email}</p>
			<p style="font-weight: 500;"><b>Dirección: </b>${stringDir}</p>
			<a href="https://www.google.com/maps/search/?api=1&query=${dirArray[0]}+${dirArray[1]}" target="_blank">Ver en Google Maps</a>`,
      //iconHtml: `<span class="material-icons-outlined"> place </span>`
      icon: 'info'
    });
  }
  getImage(image) {
    return this.donacionesService.getImagen(image);
  }
  isArray(item) {
    return item.constructor === Array;
  }
  parseVigencia() {
    //console.log(this.colecta.fechaInicio , this.colecta.fechaFin);
    if (this.colecta.fechaInicio && this.colecta.fechaFin) {
      return 'Desde el ' + new Date(this.colecta.fechaInicio).toLocaleDateString() + ' hasta el ' + new Date(this.colecta.fechaFin).toLocaleDateString();
    } else if (this.colecta.fechaInicio) {
      return 'A partir del ' + new Date(this.colecta.fechaInicio).toLocaleDateString();
    } else return '';
  }
}
ColectaComponent.ɵfac = function ColectaComponent_Factory(t) {
  return new (t || ColectaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_2__.DonacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_show_error_service__WEBPACK_IMPORTED_MODULE_3__.ShowErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService));
};
ColectaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ColectaComponent,
  selectors: [["app-colecta"]],
  decls: 5,
  vars: 3,
  consts: [["id", "main-colecta"], [3, "loading"], [4, "ngIf"], [2, "border-bottom", "solid 1px var(--light-grey)", "padding-bottom", "10px"], [1, "div-header"], [1, "header-info"], ["mat-card-avatar", "", 1, "example-header-image"], [2, "display", "flex", "align-items", "center"], ["class", "address", 3, "click", 4, "ngIf"], ["color", "primary", 4, "ngFor", "ngForOf"], ["class", "empty-star", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "card-content"], ["mat-card-image", "", 1, "colecta-img", 3, "src", "click"], [1, "card-title"], [1, "descripcion"], [1, "productos"], ["class", "producto", 4, "ngFor", "ngForOf"], [1, "card-button"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "address", 3, "click"], ["color", "primary"], [1, "empty-star"], [1, "producto"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "margin", "20px 0 0 5px", "font-weight", "bold"], ["style", "text-align: center;", 4, "ngIf"], [3, "donacion", "usuarioHeader", "buttons", 4, "ngFor", "ngForOf"], [3, "donacion", "usuarioHeader", "buttons"]],
  template: function ColectaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ColectaComponent_mat_card_3_Template, 29, 12, "mat-card", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ColectaComponent_div_4_Template, 5, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.colecta && ctx.colecta.fundacionDTO);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showDonaciones && !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent, _shared_card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_8__.CardDonacionComponent],
  styles: ["#main-colecta[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n#main-colecta[_ngcontent-%COMP%]   .example-header-image[_ngcontent-%COMP%] {\n  background-image: url('fundacion.png');\n  background-size: cover;\n  margin: 0 10px 0 0;\n}\n#main-colecta[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], #main-colecta[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], #main-colecta[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  color: var(--dark-grey);\n  margin-left: 10px;\n}\n#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]:hover {\n  color: var(--grey-text);\n  cursor: pointer;\n}\n#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .colecta-img[_ngcontent-%COMP%] {\n  max-width: 40%;\n  margin: auto;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px var(--dark-grey);\n}\n#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .colecta-img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 15px;\n}\n#main-colecta[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%] {\n  align-self: center;\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-example-header-image[_ngcontent-%COMP%] {\n  background-image: url('persona.png');\n  background-size: cover;\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 1rem;\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px var(--dark-grey);\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  width: 150px;\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .aprobada[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .rechazada[_ngcontent-%COMP%] {\n  color: var(--warn-color);\n}\n\n@media (min-width: 0px) and (max-width: 576px) {\n  .card-content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr !important;\n  }\n  .donacion-card-content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr !important;\n  }\n  .div-header[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29sZWN0YS9jb2xlY3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtBQUNEO0FBQ0M7RUFDQyxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUdFO0VBQ0MsWUFBQTtBQURIO0FBS0M7RUFFQyxhQUFBO0VBQ0csOEJBQUE7RUFDSCxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUpGO0FBTUU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFKSDtBQU1HO0VBQ0MsdUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBTUk7RUFDQyx1QkFBQTtFQUNBLGVBQUE7QUFKTDtBQVVDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVJGO0FBVUU7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFSSDtBQVNHO0VBQ0MsZUFBQTtBQVBKO0FBV0U7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVRIO0FBYUM7RUFDQyxrQkFBQTtBQVhGO0FBY0M7RUFDQyxvQ0FBQTtFQUNBLHNCQUFBO0FBWkY7QUFjQztFQUNDLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7QUFaRjtBQWVHO0VBQ0MsWUFBQTtFQUNHLFdBQUE7RUFDSCxrQkFBQTtFQUNBLHdDQUFBO0FBYko7QUFpQkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7QUFmSDtBQWlCRztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQWZKO0FBbUJFO0VBQ0MsMkJBQUE7RUFDQSxnQkFBQTtBQWpCSDtBQW1CRTtFQUNDLHdCQUFBO0FBakJIOztBQXNCQTtFQUNDO0lBQ0MsYUFBQTtJQUNBLHFDQUFBO0VBbkJBO0VBc0JEO0lBQ0MsYUFBQTtJQUNBLHFDQUFBO0VBcEJBO0VBdUJEO0lBQ0MscUNBQUE7RUFyQkE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWNvbGVjdGEge1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cclxuXHQuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZnVuZGFjaW9uLnBuZycpO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdG1hcmdpbjogMCAxMHB4IDAgMDtcclxuXHR9XHJcblxyXG5cdG1hdC1jYXJkIHtcclxuXHRcdG1hdC1jYXJkLWhlYWRlciwgbWF0LWNhcmQtY29udGVudCwgbWF0LWNhcmQtYWN0aW9ucyB7XHJcblx0XHRcdG1hcmdpbjogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5kaXYtaGVhZGVyIHtcclxuXHRcdC8vZGlzcGxheTogZmxleDtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuXHRcdC5oZWFkZXItaW5mbyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0XHQuYWRkcmVzcyB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLWRhcmstZ3JleSk7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG5cdFx0XHRcdCY6aG92ZXIge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWdyZXktdGV4dCk7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY2FyZC1jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0XHRnYXA6IDFyZW07XHJcblxyXG5cdFx0LmNvbGVjdGEtaW1nIHtcclxuXHRcdFx0bWF4LXdpZHRoOiA0MCU7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMnB4IDJweCA1cHggdmFyKC0tZGFyay1ncmV5KTtcclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmRlc2NyaXBjaW9uIHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmNhcmQtYnV0dG9uIHtcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5kb25hY2lvbi1leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wZXJzb25hLnBuZycpO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHR9XHJcblx0LmRvbmFjaW9uLWNhcmQtY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjsvLzFmciAyZnIgMWZyO1xyXG5cdFx0Z2FwOiAxcmVtO1xyXG5cclxuXHRcdC5pbWFnZW5lcyB7XHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0aGVpZ2h0OiA2NXB4O1xyXG4gICAgXHRcdFx0bWFyZ2luOiA1cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWRhcmstZ3JleSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuZG9uYWNpb24tc3RhdHVzIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcblx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0bWFyZ2luOiA1cHggYXV0bztcclxuXHRcdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuYXByb2JhZGEge1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHR9XHJcblx0XHQucmVjaGF6YWRhIHtcclxuXHRcdFx0Y29sb3I6IHZhcigtLXdhcm4tY29sb3IpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0LmNhcmQtY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5kb25hY2lvbi1jYXJkLWNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuZGl2LWhlYWRlciB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 1058:
/*!*************************************************!*\
  !*** ./src/app/pages/colecta/colecta.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColectaModule": () => (/* binding */ ColectaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _colecta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colecta.component */ 9194);
/* harmony import */ var _colecta_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colecta-routing.module */ 1177);
/* harmony import */ var src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/header/header.module */ 9499);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








class ColectaModule {}
ColectaModule.ɵfac = function ColectaModule_Factory(t) {
  return new (t || ColectaModule)();
};
ColectaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ColectaModule
});
ColectaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _colecta_routing_module__WEBPACK_IMPORTED_MODULE_1__.ColectaRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ColectaModule, {
    declarations: [_colecta_component__WEBPACK_IMPORTED_MODULE_0__.ColectaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _colecta_routing_module__WEBPACK_IMPORTED_MODULE_1__.ColectaRoutingModule, src_app_shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_colecta_component__WEBPACK_IMPORTED_MODULE_0__.ColectaComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_colecta_colecta_module_ts.js.map