"use strict";
(self["webpackChunkapp_eco_swap"] = self["webpackChunkapp_eco_swap"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth.guard */ 2662);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 9473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomeModule)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginModule)
}, {
  path: 'registro',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro.module */ 8712)).then(m => m.RegistroModule)
}, {
  path: 'publicaciones',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_publicaciones_publicaciones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/publicaciones/publicaciones.module */ 3487)).then(m => m.PublicacionesModule)
}, {
  path: 'publicacion/:id_publicacion',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_publicacion_publicacion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/publicacion/publicacion.module */ 3425)).then(m => m.PublicacionModule)
}, {
  path: 'not-found',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_not-found_not-found_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/not-found/not-found.module */ 6470)).then(m => m.NotFoundModule)
}, {
  path: 'error',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_error_error_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/error/error.module */ 5204)).then(m => m.ErrorModule)
}, {
  path: 'colectas',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_colectas_colectas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/colectas/colectas.module */ 583)).then(m => m.ColectasModule)
}, {
  path: 'colecta/:id_colecta',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_colecta_colecta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/colecta/colecta.module */ 1058)).then(m => m.ColectaModule)
}, {
  path: 'perfil',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/perfil/perfil.module */ 6217)).then(m => m.PerfilModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'form-publicacion',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_form-publicacion_form-publicacion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/form-publicacion/form-publicacion.module */ 9261)).then(m => m.FormPublicacionModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'donacion/:id_colecta',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_form-donacion_form-donacion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/form-donacion/form-donacion.module */ 611)).then(m => m.FormDonacionModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'form-colecta',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_form-colecta_form-colecta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/form-colecta/form-colecta.module */ 4956)).then(m => m.FormColectaModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'mis-donaciones',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_donaciones_donaciones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/donaciones/donaciones.module */ 4855)).then(m => m.DonacionesModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'mis-colectas',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_colectas_colectas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/colectas/colectas.module */ 583)).then(m => m.ColectasModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'mis-publicaciones',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_publicaciones_publicaciones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/publicaciones/publicaciones.module */ 3487)).then(m => m.PublicacionesModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'mis-compras',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_publicaciones_publicaciones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/publicaciones/publicaciones.module */ 3487)).then(m => m.PublicacionesModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'edit-perfil',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro.module */ 8712)).then(m => m.RegistroModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'reset-password',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro.module */ 8712)).then(m => m.RegistroModule),
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: '**',
  component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class AppComponent {
  constructor() {
    this.title = 'app_eco_swap';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/footer/footer.component */ 6017);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/material/material.module */ 793);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/usuario.service */ 5763);
/* harmony import */ var _services_httpBackend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/httpBackend.service */ 9625);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 2379);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/phone-number.pipe */ 8954);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _pipes_date_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/date-adapter */ 6266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6839);


















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_services_httpBackend_service__WEBPACK_IMPORTED_MODULE_5__.HttpBackEnd, _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.HttpErrorInterceptor,
    multi: true
  }, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__.PhoneNumberPipe, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.DateAdapter,
    useClass: _pipes_date_adapter__WEBPACK_IMPORTED_MODULE_9__.CustomDateAdapter
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
})();

/***/ }),

/***/ 2662:
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);



const AuthGuard = (route, state) => {
  // Obtiene el servicio AuthService mediante inyección de dependencias
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  if (authService.isUserLoggedIn) {
    return true;
  } else {
    // Si el usuario no ha iniciado sesión, redirige al componente de inicio de sesión
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    router.navigate(['/login']);
    return false;
  }
};
/* import { CanActivateFn } from '@angular/router';
import { MenuModel } from '../models/menu.model';
const menus = require('../data/menu.json')


export const AuthGuard: CanActivateFn = (route, state) => {
    console.log(route, state);
    const isLoggedIn = localStorage.getItem('userLoggedIn')
    console.log(isLoggedIn);
    if(isLoggedIn == 'true') return true;
    else return false;
    //menus.find((item: MenuModel) => item.path == route.url)
    //return true;
}; */

/***/ }),

/***/ 2379:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorSeverity": () => (/* binding */ ErrorSeverity),
/* harmony export */   "HttpErrorInterceptor": () => (/* binding */ HttpErrorInterceptor),
/* harmony export */   "genericRetryStrategy": () => (/* binding */ genericRetryStrategy)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_show_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/show-error.service */ 3073);






class HttpErrorInterceptor {
  constructor(authService, showErrorService) {
    this.authService = authService;
    this.showErrorService = showErrorService;
    this.token = '';
  }
  intercept(request, next) {
    // Agrega el token a los encabezados de la solicitud
    this.token = this.authService.getUserToken();
    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {}
      return event;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      let error = {
        message: '',
        severity: ErrorSeverity.INFO,
        code: ''
      };
      if (err instanceof ErrorEvent) {
        // client side error
        error = this.handleUnknownError();
        console.log('Error del lado del cliente', JSON.stringify(err));
        this.showErrorService.show('Error!', err.error.descripcion);
      } else {
        // server side error
        error = this.handleBackendError(error, err);
        console.log('Server error with code: ' + JSON.stringify(err));
        //this.showErrorService.show('Error!', 'Ocurrió un error con el servidor. Por favor volvé a intentar más tarde.')
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  handleUnknownError() {
    // this is not from backend. Format our own message.
    return {
      message: 'Unknown error!',
      severity: ErrorSeverity.FATAL,
      code: 'UNKNOWN_ERROR'
    };
  }
  handleBackendError(error, err) {
    // Backend returned error, format it here
    return {
      title: err.error?.title || 'Default title',
      message: err.error && err.error.message ? err.error.message : err.error ? err.error : err.message,
      severity: ErrorSeverity.ERROR,
      code: err.error?.identifierCode ? err.error.identifierCode : 'BACKEND_ERROR'
    };
  }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) {
  return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_show_error_service__WEBPACK_IMPORTED_MODULE_1__.ShowErrorService));
};
HttpErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HttpErrorInterceptor,
  factory: HttpErrorInterceptor.ɵfac
});

var ErrorSeverity;
(function (ErrorSeverity) {
  ErrorSeverity["INFO"] = "INFO";
  ErrorSeverity["WARNING"] = "WARNING";
  ErrorSeverity["ERROR"] = "ERROR";
  ErrorSeverity["FATAL"] = "FATAL";
})(ErrorSeverity || (ErrorSeverity = {}));
const genericRetryStrategy = ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = []
} = {}) => attempts => {
  return attempts.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((error, i) => {
    const retryAttempt = i + 1;
    // if maximum number of retries have been met
    // or response is a status code we don't wish to retry, throw error
    if (retryAttempt > maxRetryAttempts || excludedStatusCodes.find(e => e === error.status)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
    }
    console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`);
    // retry after 1s, 2s, etc...
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(retryAttempt * scalingDuration);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => console.log('We are done!')));
};

/***/ }),

/***/ 6017:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 4,
  vars: 0,
  consts: [[1, "footer"], [1, "div-logo"], ["alt", "Logo Eco Swap - Ir a la home", "id", "logoCenter", "src", "assets/logo_white.png", 1, "logo", 2, "cursor", "pointer", "width", "100px"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarRow],
  styles: [".footer[_ngcontent-%COMP%] {\n  \n  background-color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQzs7O2dCQUFBO0VBSUEsc0NBQUE7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG5cdC8qIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuICAgIHJpZ2h0OiAwOyAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);





function HeaderComponent_div_6_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Publicaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "ul", 21)(2, "li", 9)(3, "a", 22)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_div_6_a_7_Template, 3, 0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 9)(9, "a", 24)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Colectas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.isUserLoggedIn && ctx_r0.profileType == "fundacion"));
  }
}
function HeaderComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mis colectas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/mis-colectas/", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mis donaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mis publicaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mis compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Crear Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/registro", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_a_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/login", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_a_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mi perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/perfil", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_a_29_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const menuData = __webpack_require__(/*! ../../data/menu.json */ 3356);
class HeaderComponent {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
    this.url = 'home';
    this.searchText = '';
    this.mainTabs = [];
    this.personalTabs = [];
    this.mainTabs = menuData.filter(item => item.type == 'pages');
    this.personalTabs = menuData.filter(item => item.type == 'personal');
    this.url = router.url;
    this.isUserLoggedIn = auth.isUserLoggedIn;
    this.profileType = auth.isUserSwapper() ? 'particular' : 'fundacion';
  }
  goTo(path) {
    this.router.navigateByUrl(path);
  }
  logOut() {
    this.auth.logout();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    title: "title"
  },
  decls: 32,
  vars: 10,
  consts: [[1, "navbar", "navbar-expand-md", "d-flex", "justify-content-between"], ["href", "home", 1, "navbar-brand"], [1, "div-logo", 3, "click"], ["alt", "Logo Eco Swap - Ir a la home", "id", "logoCenter", "src", "assets/logo_white_small.png", 1, "logo", 2, "cursor", "pointer", "width", "100px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggler", "aria-controls", "navbarToggler", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "collapse navbar-collapse", "id", "navbarToggler", 4, "ngIf"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0", "mr-2"], [1, "nav-item"], ["class", "nav-link nav-white px-2", 3, "href", 4, "ngIf"], ["class", "nav-link nav-white px-2", "href", "/mis-donaciones/", 4, "ngIf"], ["class", "nav-link nav-white px-2", "href", "/mis-publicaciones/", 4, "ngIf"], ["class", "nav-link nav-white px-2", "href", "/mis-compras/", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown", "nav-item"], ["ngbDropdownToggle", "", "type", "button", "id", "dropdownMenuButton1", "aria-expanded", "false", 1, "nav-link", "nav-white", "px-2"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu-end"], ["ngbDropdownItem", "", "class", "dropdown-item", 3, "href", 4, "ngIf"], ["ngbDropdownItem", "", "class", "dropdown-item", 3, "click", 4, "ngIf"], [2, "margin", "20px 0px 0px 20px", "font-weight", "bold"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["href", "/home", 1, "nav-link", "nav-white", "px-2"], ["class", "nav-link nav-white px-2", "href", "/publicaciones", 4, "ngIf"], ["href", "/colectas", 1, "nav-link", "nav-white", "px-2"], ["href", "/publicaciones", 1, "nav-link", "nav-white", "px-2"], [1, "nav-link", "nav-white", "px-2", 3, "href"], ["href", "/mis-donaciones/", 1, "nav-link", "nav-white", "px-2"], ["href", "/mis-publicaciones/", 1, "nav-link", "nav-white", "px-2"], ["href", "/mis-compras/", 1, "nav-link", "nav-white", "px-2"], ["ngbDropdownItem", "", 1, "dropdown-item", 3, "href"], ["ngbDropdownItem", "", 1, "dropdown-item", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener() {
        return ctx.goTo("home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 12, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 3, 1, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_a_12_Template, 3, 0, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_a_14_Template, 3, 0, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HeaderComponent_a_16_Template, 3, 0, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mi Cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 16)(22, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HeaderComponent_a_23_Template, 2, 1, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HeaderComponent_a_25_Template, 2, 1, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HeaderComponent_a_27_Template, 2, 1, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HeaderComponent_a_29_Template, 2, 0, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.url != "/registro");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn && ctx.profileType == "fundacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn && ctx.profileType == "particular");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn && ctx.profileType == "particular");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn && ctx.profileType == "particular");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownItem],
  styles: [".header-container[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.header-container[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header-container[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   .div-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n}\n.header-container[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 24px;\n  background-color: var(--primary-color);\n}\n.header-container[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]    .mat-form-field {\n  background-color: var(--primary-color) !important;\n}\n.header-container[_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%]   #recycling-icon[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n}\n.header-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.header-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.header-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .personal-buttons[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n}\n\n\nmat-toolbar-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 30%;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-white[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border: none;\n  box-shadow: 2px 2px 4px 0px #007707;\n  left: -75px;\n  right: 5px;\n  top: 56px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQ0FBQTtBQUNEO0FBQUM7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7QUFFRjtBQURFO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUdIO0FBREU7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQUdIO0FBREU7RUFDQyxpREFBQTtBQUdIO0FBREU7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBR0g7QUFBQztFQUNDLDhCQUFBO0FBRUY7QUFERTtFQUNDLFlBQUE7QUFHSDtBQURFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUdIOztBQUVBOztHQUFBO0FBR0E7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQ0FBQTtBQUNEO0FBQ0M7RUFDQyxpQkFBQTtBQUNGO0FBRUM7RUFDQyxrQkFBQTtBQUFGO0FBTUk7RUFDQyxtQkFBQTtBQUpMO0FBT0k7RUFDQyxrQkFBQTtBQUxMO0FBUUk7RUFDQyxlQUFBO0FBTkw7QUFRSTtFQUNDLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTkw7QUFVRztFQUNDLGVBQUE7QUFSSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG5cdC50b3AtaGVhZGVye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdC5kaXYtbG9nbyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdH1cclxuXHRcdG1hdC1mb3JtLWZpZWxkIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1hcmdpbi10b3A6IDI0cHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG5cdFx0fVxyXG5cdFx0OjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxke1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdFx0I3JlY3ljbGluZy1pY29uIHtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQudGFicyB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRtYXQtaWNvbiB7XHJcblx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdH1cclxuXHRcdC5wZXJzb25hbC1idXR0b25zIHtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyogLmZpbGxlci1kaXYge1xyXG5cdHdpZHRoOiA1MHB4O1xyXG59ICovXHJcbm1hdC10b29sYmFyLXJvdyBkaXYge1xyXG5cdG1pbi13aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHJcblx0Lm5hdmJhci1icmFuZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHR9XHJcblxyXG5cdC5uYXZiYXItdG9nZ2xlciB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQubmF2YmFyLWNvbGxhcHNlIHtcclxuXHRcdC5uYXZiYXItbmF2IHtcclxuXHRcdFx0Lm5hdi1pdGVtIHtcclxuXHRcdFx0XHQubmF2LXdoaXRlIHtcclxuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZHJvcGRvd24ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuZHJvcGRvd24tbWVudSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjMDA3NzA3O1xyXG5cdFx0XHRcdFx0bGVmdDogLTc1cHg7XHJcblx0XHRcdFx0XHRyaWdodDogNXB4O1xyXG5cdFx0XHRcdFx0dG9wOiA1NnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm5hdi1saW5rIHtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1629);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);





function HomeComponent_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 6);
  }
  if (rf & 2) {
    const img_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_ngb_carousel_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_ngb_carousel_1_1_ng_template_0_Template, 3, 1, "ng-template", 3);
  }
}
function HomeComponent_ngb_carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ngb_carousel_1_1_Template, 1, 0, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 3500);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.images);
  }
}
class HomeComponent {
  constructor(service) {
    this.service = service;
    this.folder = 'banners';
    this.images = [];
    this.screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (this.screenWidth < 576) {
      this.folder = 'banners-mobile';
    }
    for (let index = 1; index <= 4; index++) {
      this.images.push(`assets/${this.folder}/0${index}.jpg`);
    }
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 2,
  vars: 1,
  consts: [[3, "interval", 4, "ngIf"], [3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [3, "src"], [1, "carousel-caption"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.images);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: [".picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsV0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3N1bS1pbWctd3JhcHBlciB7XHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 9473:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout/header/header.component */ 7876);


class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 5,
  vars: 0,
  consts: [[2, "display", "flex", "justify-content", "center", "flex-direction", "column", "align-items", "center"], ["src", "assets/logo_green.png", 2, "max-width", "300px"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A1La p\u00E1gina que busc\u00E1s no existe!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6266:
/*!***************************************!*\
  !*** ./src/app/pipes/date-adapter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDateAdapter": () => (/* binding */ CustomDateAdapter)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class CustomDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter {
  parse(value) {
    if (typeof value === 'string' && value.indexOf('/') > -1) {
      const str = value.split('/');
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
  // retirar quando for feito o merge da data por mmalerba
  format(date, displayFormat) {
    date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    displayFormat = Object.assign({}, displayFormat, {
      timeZone: 'utc'
    });
    const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
    return dtf.format(date).replace(/[\u200e\u200f]/g, '');
  }
}
CustomDateAdapter.ɵfac = /*@__PURE__*/function () {
  let ɵCustomDateAdapter_BaseFactory;
  return function CustomDateAdapter_Factory(t) {
    return (ɵCustomDateAdapter_BaseFactory || (ɵCustomDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomDateAdapter)))(t || CustomDateAdapter);
  };
}();
CustomDateAdapter.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomDateAdapter,
  factory: CustomDateAdapter.ɵfac
});


/***/ }),

/***/ 8954:
/*!********************************************!*\
  !*** ./src/app/pipes/phone-number.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberPipe": () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class PhoneNumberPipe {
  transform(value) {
    if (!value) {
      return '';
    }
    // Limpia el número de teléfono de espacios y guiones
    const telefonoLimpio = value.replace(/\D/g, '');
    // Verifica si el número de teléfono tiene al menos 8 dígitos (incluyendo el código de área 11)
    if (telefonoLimpio.length >= 8) {
      // Formatea el número de teléfono como 11 xxxx-xxxx
      const codigoArea = telefonoLimpio.substring(0, 2);
      const primeraParte = telefonoLimpio.substring(2, 6);
      const segundaParte = telefonoLimpio.substring(6);
      return `${codigoArea} ${primeraParte}-${segundaParte}`;
    } else {
      // Si el número no tiene suficientes dígitos, devuelve el número limpio sin formato
      return telefonoLimpio;
    }
  }
}
PhoneNumberPipe.ɵfac = function PhoneNumberPipe_Factory(t) {
  return new (t || PhoneNumberPipe)();
};
PhoneNumberPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "phoneNumber",
  type: PhoneNumberPipe,
  pure: true
});


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _httpBackend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpBackend.service */ 9625);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.service */ 5763);






const URL_NAME = 'URImsAutenticacion';
class AuthService {
  constructor(router, backendService, usuarioService) {
    this.router = router;
    this.backendService = backendService;
    this.usuarioService = usuarioService;
    if (this.getUserLogin()) this.isUserLoggedIn = true;else this.isUserLoggedIn = false;
  }
  login(username, password) {
    this.backendService.patch(URL_NAME, 'ms-autenticacion/api/v1/usuario/login', {
      username,
      password
    }).subscribe({
      next: v => {
        console.log('response:', v);
        // TODO: GET USER INFO TO SAVE IN LOCAL STORAGE (AT LEAST IS_SWAPPER)
        this.setLocalStorage('userToken', v.token);
        const userData = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(v.token);
        this.setLocalStorage('isSwapper', JSON.stringify(userData.esParticular));
        this.isUserLoggedIn = true;
        this.setUserLoggedIn();
        this.router.navigate(['']);
      },
      error: e => {
        console.error('error:', e);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('¡Error!', 'Ocurrió un error. Por favor revisá los campos e intentá nuevamente.', 'error');
      },
      complete: () => console.info('login complete')
    });
  }
  setLocalStorage(key, data) {
    localStorage.setItem(key, data);
  }
  setUserLoggedIn() {
    localStorage.setItem('userLoggedIn', this.isUserLoggedIn ? 'true' : 'false');
  }
  getUserID() {
    const tkn = localStorage.getItem('userToken');
    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(tkn || '');
    return decodedToken.id;
    /*const decodedToken: any = jwtDecode(tkn || '')
    this.usuarioService.getUserByID(decodedToken.id).subscribe({
            next: (res) => {
                this.userData = res;
                return this.userData;
            },
            error: (error) => {
                console.log(error);
                return this.userData;
            }
        })
         if(tkn) {
    }
    else return this.userData; */
    /* const data = localStorage.getItem('userData');
    if(data && data != 'undefined'){
        const user = JSON.parse(data as string);
        return user;
    } else return {} */
  }

  getUserLogin() {
    return localStorage.getItem('userLoggedIn');
  }
  isUserSwapper() {
    const is = localStorage.getItem('isSwapper');
    if (is) return JSON.parse(is);
  }
  getUserToken() {
    return localStorage.getItem('userToken');
  }
  logout() {
    this.isUserLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  resetPassword(body) {
    return this.backendService.put(URL_NAME, 'ms-autenticacion/api/v1/usuario/password', body);
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_httpBackend_service__WEBPACK_IMPORTED_MODULE_2__.HttpBackEnd), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 1531:
/*!************************************************!*\
  !*** ./src/app/services/donaciones.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonacionesService": () => (/* binding */ DonacionesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _httpBackend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpBackend.service */ 9625);



const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '8080/';
const URL_NAME = 'URImsUsuarios';
class DonacionesService {
  constructor(backendService) {
    this.backendService = backendService;
  }
  crearColecta(body) {
    return this.backendService.post(URL_NAME, 'api/colecta', body);
  }
  getAllColectas(filtros) {
    return this.backendService.get(URL_NAME, 'api/colectas', filtros);
  }
  getMisColectas() {
    return this.backendService.get(URL_NAME, 'api/misColectas');
  }
  getColecta(id_colecta) {
    return this.backendService.get(URL_NAME, 'api/colecta/' + id_colecta);
  }
  getDonacionesColecta(id_colecta) {
    return this.backendService.get(URL_NAME, 'api/colecta/' + id_colecta + '/donaciones');
  }
  getMisDonaciones() {
    return this.backendService.get(URL_NAME, 'api/particular/misDonaciones');
  }
  crearDonacion(id_colecta, body) {
    return this.backendService.post(URL_NAME, 'api/colecta/' + id_colecta + '/crearDonacion', body);
  }
  getImagen(img) {
    //console.log('Constructed URL:', `${URL}api/getImage/${img}`); // Log the constructed URL
    return `${URL}api/getImage/${img}`;
  }
  cambiarEstadoDonacion(id_colecta, id_donacion, body) {
    return this.backendService.put(URL_NAME, 'api/colecta/' + id_colecta + '/donaciones/' + id_donacion, body);
  }
}
DonacionesService.ɵfac = function DonacionesService_Factory(t) {
  return new (t || DonacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_httpBackend_service__WEBPACK_IMPORTED_MODULE_1__.HttpBackEnd));
};
DonacionesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DonacionesService,
  factory: DonacionesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 9625:
/*!*************************************************!*\
  !*** ./src/app/services/httpBackend.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpBackEnd": () => (/* binding */ HttpBackEnd)
/* harmony export */ });
/* harmony import */ var C_eco_swap_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);





const properties = __webpack_require__(/*! ../core/properties.json */ 1115);
class HttpBackEnd {
  constructor(httpClient) {
    this.httpClient = httpClient;
    console.log('ENVIRONMENT', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment);
  }
  get(urlName, endpoint, params) {
    const URL = this.getUrlByName(urlName);
    return this.httpClient.get(URL + endpoint, {
      params
    });
  }
  getImg(urlName, endpoint, params) {
    const URL = this.getUrlByName(urlName);
    return this.httpClient.get(URL + endpoint, {
      params,
      responseType: 'blob'
    });
  }
  post(urlName, endpoint, body) {
    const URL = this.getUrlByName(urlName);
    return this.httpClient.post(URL + endpoint, body);
  }
  uploadFile(urlName, endpoint, file) {
    var _this = this;
    return (0,C_eco_swap_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formData = new FormData();
      formData.append('file', file);
      const response = _this.post(urlName, endpoint, formData);
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(response);
      return data;
    })();
  }
  put(urlName, endpoint, body) {
    const URL = this.getUrlByName(urlName);
    return this.httpClient.put(URL + endpoint, body);
  }
  patch(urlName, endpoint, body) {
    const URL = this.getUrlByName(urlName);
    return this.httpClient.patch(URL + endpoint, body);
  }
  delete(urlName, endpoint) {
    const URL = this.getUrlByName(urlName);
    return this.httpClient.delete(URL + endpoint);
  }
  postImg(urlName, endpoint, img, body) {
    var _this2 = this;
    return (0,C_eco_swap_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formData = new FormData();
      formData.append('image', img);
      if (body) {
        if (body.dest) formData.append('dest', body.dest);
        if (body.id) formData.append('id', body.id);
      }
      const response = yield _this2.post(urlName, endpoint, formData).toPromise();
      const data = response;
      return data;
    })();
  }
  getUrlByName(urlName) {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + (properties[urlName] || '8080/');
  }
}
HttpBackEnd.ɵfac = function HttpBackEnd_Factory(t) {
  return new (t || HttpBackEnd)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
HttpBackEnd.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: HttpBackEnd,
  factory: HttpBackEnd.ɵfac
});


/***/ }),

/***/ 3073:
/*!************************************************!*\
  !*** ./src/app/services/show-error.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowErrorService": () => (/* binding */ ShowErrorService)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



class ShowErrorService {
  constructor(router) {
    this.router = router;
  }
  show(title, text) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title,
      text,
      icon: 'error'
    });
    //this.router.navigate(['error'])
  }
}

ShowErrorService.ɵfac = function ShowErrorService_Factory(t) {
  return new (t || ShowErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ShowErrorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShowErrorService,
  factory: ShowErrorService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2777:
/*!**********************************************!*\
  !*** ./src/app/services/trueques.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruequesService": () => (/* binding */ TruequesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _httpBackend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpBackend.service */ 9625);



const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '8080/';
const URL_NAME = 'URImsUsuarios';
class TruequesService {
  constructor(backendService) {
    this.backendService = backendService;
  }
  crearPublicacion(body) {
    return this.backendService.post(URL_NAME, 'api/publicacion', body);
  }
  getPublicaciones(filtros = {}) {
    return this.backendService.get(URL_NAME, 'api/publicaciones', filtros);
  }
  getMisPublicaciones() {
    return this.backendService.get(URL_NAME, 'api/misPublicaciones');
  }
  getPublicacion(id_publicacion) {
    return this.backendService.get(URL_NAME, 'api/publicacion/' + id_publicacion);
  }
  getImagen(img) {
    return this.backendService.getUrlByName(URL_NAME) + 'api/getImage/' + img;
  }
}
TruequesService.ɵfac = function TruequesService_Factory(t) {
  return new (t || TruequesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_httpBackend_service__WEBPACK_IMPORTED_MODULE_1__.HttpBackEnd));
};
TruequesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TruequesService,
  factory: TruequesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5763:
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _httpBackend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpBackend.service */ 9625);


const URL_NAME = 'URImsAutenticacion';
class UsuarioService {
  constructor(backendService) {
    this.backendService = backendService;
  }
  getCurrentUser() {
    return this.backendService.get(URL_NAME, 'ms-autenticacion/api/v1/usuario/103');
  }
  getUserByID(id) {
    return this.backendService.get(URL_NAME, 'ms-autenticacion/api/v1/usuario/' + id);
  }
  createUser(user) {
    return this.backendService.post(URL_NAME, 'ms-autenticacion/api/v1/usuario/signup', user);
  }
  editUser(user) {
    return this.backendService.put(URL_NAME, 'ms-autenticacion/api/v1/usuario/edit', user);
  }
  getTiposDocumentos() {
    return this.backendService.get(URL_NAME, 'ms-autenticacion/api/v1/tiposDocumentos');
  }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) {
  return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_httpBackend_service__WEBPACK_IMPORTED_MODULE_0__.HttpBackEnd));
};
UsuarioService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UsuarioService,
  factory: UsuarioService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2576:
/*!*****************************************************************!*\
  !*** ./src/app/shared/card-donacion/card-donacion.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDonacionComponent": () => (/* binding */ CardDonacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/donaciones.service */ 1531);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);








function CardDonacionComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CardDonacionComponent_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CardDonacionComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardDonacionComponent_img_22_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const img_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.zoomImage(img_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.getImage(img_r6), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function CardDonacionComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardDonacionComponent_button_24_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const button_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.changeEstadoDonacion(ctx_r10.donacion, button_r9.status));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const button_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", button_r9.color)("disabled", button_r9.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](button_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", button_r9.name, " ");
  }
}
class CardDonacionComponent {
  constructor(donacionesService) {
    this.donacionesService = donacionesService;
    this.buttons = [];
    this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.caracteristicas = '';
  }
  ngOnInit() {
    //console.log(this.donacion, this.usuarioHeader,this.donacion.caracteristicaDonacion);
    for (const [i, caract] of this.donacion.caracteristicaDonacion.entries()) {
      if (caract.caracteristica && i == 0) this.caracteristicas = caract.caracteristica;else if (caract.caracteristica) this.caracteristicas += ' - ' + caract.caracteristica;
    }
  }
  getImage(image) {
    return this.donacionesService.getImagen(image);
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
  changeEstadoDonacion(donacion, status) {
    this.donacionesService.cambiarEstadoDonacion(this.id_colecta, donacion.idDonacion, {
      nuevoEstado: status
    }).subscribe({
      next: res => {
        console.log(res);
        this.donacion.estadoDonacion = status;
        this.statusChanged.emit();
      }
    });
  }
  getStars(puntaje) {
    const array = [];
    for (let index = 0; index < puntaje; index++) {
      array.push(1);
    }
    return array;
  }
}
CardDonacionComponent.ɵfac = function CardDonacionComponent_Factory(t) {
  return new (t || CardDonacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_donaciones_service__WEBPACK_IMPORTED_MODULE_1__.DonacionesService));
};
CardDonacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CardDonacionComponent,
  selectors: [["app-card-donacion"]],
  inputs: {
    donacion: "donacion",
    id_colecta: "id_colecta",
    usuarioHeader: "usuarioHeader",
    buttons: "buttons"
  },
  outputs: {
    statusChanged: "statusChanged"
  },
  decls: 25,
  vars: 18,
  consts: [[2, "margin", "10px"], [1, "header"], ["mat-card-avatar", "", 1, "donacion-example-header-image"], ["color", "primary", 4, "ngFor", "ngForOf"], ["class", "empty-star", 4, "ngFor", "ngForOf"], [2, "text-align", "right"], [1, "donacion-card-content"], [1, "card-title"], [1, "imagenes"], [3, "src", "click", 4, "ngFor", "ngForOf"], [1, "donacion-status"], ["mat-raised-button", "", 3, "color", "disabled", "click", 4, "ngFor", "ngForOf"], ["color", "primary"], [1, "empty-star"], [3, "src", "click"], ["mat-raised-button", "", 3, "color", "disabled", "click"]],
  template: function CardDonacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CardDonacionComponent_mat_icon_6_Template, 2, 0, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CardDonacionComponent_mat_icon_7_Template, 2, 0, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-card-content", 6)(12, "div")(13, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CardDonacionComponent_img_22_Template, 1, 1, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CardDonacionComponent_button_24_Template, 4, 4, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.usuarioHeader.nombre, " ", ctx.usuarioHeader.apellido, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getStars(ctx.usuarioHeader.puntaje));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getStars(5 - ctx.usuarioHeader.puntaje));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 15, ctx.donacion.fechaDonacion, "dd/MM/yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.donacion.producto.descripcion || ctx.donacion.nombreProducto);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cantidad: ", ctx.donacion.cantidadDonacion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aprobada", ctx.donacion.estadoDonacion == "APROBADA")("rechazada", ctx.donacion.estadoDonacion == "RECHAZADA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Estado: ", ctx.donacion.estadoDonacion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.caracteristicas.length > 0 ? "Caracter\u00EDsticas: " + ctx.caracteristicas : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.donacion.parsedImagenes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.buttons);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".header[_ngcontent-%COMP%] {\n  border-bottom: solid 1px var(--light-grey);\n  display: grid;\n  grid-template-columns: 0.5fr 3fr 3fr;\n}\n\n.donacion-example-header-image[_ngcontent-%COMP%] {\n  background-image: url('persona.png');\n  background-size: cover;\n}\n\n.donacion-card-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  gap: 1rem;\n  margin-top: 10px;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 65px;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px var(--dark-grey);\n}\n.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px auto;\n  width: 150px;\n  text-transform: uppercase;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .aprobada[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n.donacion-card-content[_ngcontent-%COMP%]   .rechazada[_ngcontent-%COMP%] {\n  color: var(--warn-color);\n}\n\n@media (min-width: 0px) and (max-width: 576px) {\n  .header[_ngcontent-%COMP%], .donacion-card-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    justify-items: center;\n  }\n  .header[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .donacion-card-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NhcmQtZG9uYWNpb24vY2FyZC1kb25hY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBDQUFBO0VBQ0EsYUFBQTtFQUNHLG9DQUFBO0FBQ0o7O0FBRUE7RUFDQyxvQ0FBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFFRDtBQUNFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQ0g7QUFDRztFQUNDLGVBQUE7QUFDSjtBQUlDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FBRkY7QUFJRTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRkg7QUFNQztFQUNDLDJCQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU1DO0VBQ0Msd0JBQUE7QUFKRjs7QUFRQTtFQUNDO0lBQ0MscUNBQUE7SUFDQSxxQkFBQTtFQUxBO0VBT0E7SUFDQyxrQkFBQTtFQUxEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tbGlnaHQtZ3JleSk7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjVmciAzZnIgM2ZyO1xyXG59XHJcblxyXG4uZG9uYWNpb24tZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BlcnNvbmEucG5nJyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uZG9uYWNpb24tY2FyZC1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAxZnI7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG5cdC5pbWFnZW5lcyB7XHJcblx0XHRpbWcge1xyXG5cdFx0XHRoZWlnaHQ6IDY1cHg7XHJcblx0XHRcdG1hcmdpbjogNXB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWRhcmstZ3JleSk7XHJcblxyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5kb25hY2lvbi1zdGF0dXMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0YnV0dG9uIHtcclxuXHRcdFx0bWFyZ2luOiA1cHggYXV0bztcclxuXHRcdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmFwcm9iYWRhIHtcclxuXHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG5cdC5yZWNoYXphZGEge1xyXG5cdFx0Y29sb3I6IHZhcigtLXdhcm4tY29sb3IpO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblx0LmhlYWRlciwgLmRvbmFjaW9uLWNhcmQtY29udGVudCB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xyXG5cdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdCoge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8719:
/*!***************************************************************************!*\
  !*** ./src/app/shared/deck-publicaciones/deck-publicaciones.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckPublicacionesComponent": () => (/* binding */ DeckPublicacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_trueques_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/trueques.service */ 2777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





function DeckPublicacionesComponent_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const publicacion_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.getImagen(publicacion_r1.parsedImagenes[0]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngClass", ctx_r2.origin == "publicaciones" ? "big" : "small");
  }
}
function DeckPublicacionesComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const publicacion_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Precio de venta: $", publicacion_r1.precioVenta, " ");
  }
}
function DeckPublicacionesComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const publicacion_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1.particularDTO.nombre + " " + publicacion_r1.particularDTO.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, publicacion_r1.fechaPublicacion, "dd/MM/yyyy"));
  }
}
function DeckPublicacionesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeckPublicacionesComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const publicacion_r1 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.clicked(publicacion_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DeckPublicacionesComponent_div_1_img_2_Template, 1, 2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5)(4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DeckPublicacionesComponent_div_1_div_8_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DeckPublicacionesComponent_div_1_div_9_Template, 7, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const publicacion_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.origin == "intercambio" && publicacion_r1.idPublicacion == ctx_r0.cardSelected ? "selected-card" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1.parsedImagenes && publicacion_r1.parsedImagenes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](publicacion_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Valor de trueque: $", publicacion_r1.valorTruequeMin, " - $", publicacion_r1.valorTruequeMax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", publicacion_r1.tipoPublicacion == "VENTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.origin == "publicaciones");
  }
}
class DeckPublicacionesComponent {
  constructor(truequesService, router) {
    this.truequesService = truequesService;
    this.router = router;
    this.publicacionesToShow = [];
    this.origin = 'publicaciones';
    this.selectedCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  getImagen(img) {
    return this.truequesService.getImagen(img);
  }
  clicked(publicacion) {
    if (this.origin == 'publicaciones') this.goToPublicacion(publicacion);else {
      this.cardSelected = publicacion.idPublicacion;
      this.selectedCard.emit(this.cardSelected);
    }
  }
  goToPublicacion(publicacion) {
    this.router.navigate(['publicacion/' + publicacion.idPublicacion]);
  }
}
DeckPublicacionesComponent.ɵfac = function DeckPublicacionesComponent_Factory(t) {
  return new (t || DeckPublicacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_trueques_service__WEBPACK_IMPORTED_MODULE_0__.TruequesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
DeckPublicacionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DeckPublicacionesComponent,
  selectors: [["app-deck-publicaciones"]],
  inputs: {
    publicacionesToShow: "publicacionesToShow",
    origin: "origin"
  },
  outputs: {
    selectedCard: "selectedCard"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "card-deck"], ["class", "card row", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "card", "row", 3, "ngClass", "click"], [1, "col-sm-4", 2, "display", "flex", "justify-content", "center"], ["class", "card-img", 3, "src", "ngClass", 4, "ngIf"], [1, "card-body", "col-sm-6"], [1, "card-title"], [1, "trueque"], ["class", "venta", 4, "ngIf"], ["class", "card-fundacion col-sm-2", 4, "ngIf"], [1, "card-img", 3, "src", "ngClass"], [1, "venta"], [1, "card-fundacion", "col-sm-2"], ["src", "assets/persona.png", 1, "img-fundacion"]],
  template: function DeckPublicacionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DeckPublicacionesComponent_div_1_Template, 10, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.publicacionesToShow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".card[_ngcontent-%COMP%] {\n  margin: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.card.selected-card[_ngcontent-%COMP%] {\n  background-color: #bceba1;\n}\n.card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: auto;\n}\n.card[_ngcontent-%COMP%]   .card-img.big[_ngcontent-%COMP%] {\n  max-height: 160px;\n}\n.card[_ngcontent-%COMP%]   .card-img.small[_ngcontent-%COMP%] {\n  max-height: 110px;\n  max-width: 100%;\n}\n.card[_ngcontent-%COMP%]   .productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%]   .productos[_ngcontent-%COMP%]   .producto[_ngcontent-%COMP%] {\n  margin: 5px 10px;\n  min-width: 100px;\n}\n.card[_ngcontent-%COMP%]   .card-fundacion[_ngcontent-%COMP%] {\n  text-align: center;\n  \n}\n.card[_ngcontent-%COMP%]   .card-fundacion[_ngcontent-%COMP%]   .img-fundacion[_ngcontent-%COMP%] {\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2RlY2stcHVibGljYWNpb25lcy9kZWNrLXB1YmxpY2FjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRDtBQUNDO0VBQ0MseUJBQUE7QUFDRjtBQUVDO0VBQ0MsZUFBQTtBQUFGO0FBR0M7RUFFQyxZQUFBO0VBQ0EsV0FBQTtBQUZGO0FBSUU7RUFDQyxpQkFBQTtBQUZIO0FBS0U7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxGO0FBT0U7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFTQztFQUNDLGtCQUFBO0VBQ0E7O3dCQUFBO0FBTEY7QUFTRTtFQUNDLFdBQUE7QUFQSCIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuXHRtYXJnaW46IDVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0Ji5zZWxlY3RlZC1jYXJkIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNiY2ViYTE7XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcblxyXG5cdC5jYXJkLWltZyB7XHJcblx0XHQvL21heC13aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbjogMjBweDtcclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHJcblx0XHQmLmJpZyB7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDE2MHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuc21hbGwge1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiAxMTBweDtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnByb2R1Y3RvcyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHJcblx0XHQucHJvZHVjdG8ge1xyXG5cdFx0XHRtYXJnaW46IDVweCAxMHB4O1xyXG5cdFx0XHRtaW4td2lkdGg6IDEwMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmNhcmQtZnVuZGFjaW9uIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdC8qIGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuXHJcblx0XHQuaW1nLWZ1bmRhY2lvbiB7XHJcblx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 8088:
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

//import { Map, Marker, NavigationControl } from 'maplibre-gl';
class MapComponent /* implements AfterViewInit */ {}
MapComponent /* implements AfterViewInit */.ɵfac = function MapComponent_Factory(t) {
  return new (t || MapComponent /* implements AfterViewInit */)();
};
MapComponent /* implements AfterViewInit */.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MapComponent /* implements AfterViewInit */,
  selectors: [["app-map"]],
  decls: 0,
  vars: 0,
  template: function MapComponent_Template(rf, ctx) {},
  styles: [".map-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 77px);\n  \n}\n\n.map[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHFEQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC13cmFwIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzdweCk7XHJcblx0LyogY2FsY3VsYXRlIGhlaWdodCBvZiB0aGUgc2NyZWVuIG1pbnVzIHRoZSBoZWFkaW5nICovXHJcbn1cclxuXHJcbi5tYXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi53YXRlcm1hcmsge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAxMHB4O1xyXG5cdGJvdHRvbTogMTBweDtcclxuXHR6LWluZGV4OiA5OTk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 8511);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 445);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 9314);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6069);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 6844);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 3574);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ 1031);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 2128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4291);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 2556);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 1884);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 808);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ 2748);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ 7824);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ 6247);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 6839);



































const MaterialComponents = [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__.MatBadgeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__.MatSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule];
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
  imports: [MaterialComponents, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__.MatBadgeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__.MatSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__.MatBadgeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__.MatSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule],
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__.MatStepperModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__.DragDropModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__.MatBadgeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__.MatSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map.component */ 8088);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner/spinner.component */ 4984);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 793);
/* harmony import */ var _card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-donacion/card-donacion.component */ 2576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _deck_publicaciones_deck_publicaciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deck-publicaciones/deck-publicaciones.component */ 8719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);







class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_3__.CardDonacionComponent, _deck_publicaciones_deck_publicaciones_component__WEBPACK_IMPORTED_MODULE_4__.DeckPublicacionesComponent],
    imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
    exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _card_donacion_card_donacion_component__WEBPACK_IMPORTED_MODULE_3__.CardDonacionComponent, _deck_publicaciones_deck_publicaciones_component__WEBPACK_IMPORTED_MODULE_4__.DeckPublicacionesComponent]
  });
})();

/***/ }),

/***/ 4984:
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function SpinnerComponent_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 2);
  }
}
class SpinnerComponent {
  constructor() {
    this.loading = false;
  }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || SpinnerComponent)();
};
SpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SpinnerComponent,
  selectors: [["app-spinner"]],
  inputs: {
    loading: "loading"
  },
  decls: 2,
  vars: 1,
  consts: [[2, "display", "flex", "justify-content", "center"], ["diameter", "40", 4, "ngIf"], ["diameter", "40"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// environment.ts (Development)
const environment = {
  production: false,
  apiUrl: 'http://ec2-3-93-54-229.compute-1.amazonaws.com:'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 1115:
/*!**************************************!*\
  !*** ./src/app/core/properties.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"URImsUsuarios":"8080/","URImsAutenticacion":"8085/"}');

/***/ }),

/***/ 3356:
/*!********************************!*\
  !*** ./src/app/data/menu.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Home","path":"/home","type":"pages","needsLogin":"none"},{"title":"Trueques","path":"/trueques","type":"pages","needsLogin":"particular"},{"title":"Colectas","path":"/colectas","type":"pages","needsLogin":"none"},{"title":"Creá tu cuenta","path":"/registro","type":"personal","needsLogin":"none"},{"title":"Mi Perfil","path":"/perfil","type":"personal","needsLogin":"none"},{"title":"Mis Donaciones","path":"/mis-donaciones","type":"personal","needsLogin":"particular"},{"title":"Mis Colectas","path":"/colectas","type":"personal","needsLogin":"fundacion"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3716), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map