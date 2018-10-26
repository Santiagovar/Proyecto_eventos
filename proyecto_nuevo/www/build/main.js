webpackJsonp([9],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventosService = /** @class */ (function () {
    //cantidadEventos:number = 0;
    function EventosService(http) {
        this.http = http;
        this.pagina = 0;
        this.eventos = [];
        this.cargar_todos();
        //this.obtener_tamaño();
    }
    EventosService.prototype.cargar_todos = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["a" /* URL_SERVICIOS */] + "/eventos/todos/" + _this.pagina;
            _this.http.get(url).map(function (resp) { return resp.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.error) {
                }
                else {
                    (_a = _this.eventos).push.apply(_a, data.eventos);
                    _this.pagina += 1;
                    console.log(_this.eventos);
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    EventosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EventosService);
    return EventosService;
}());

//# sourceMappingURL=EventosService.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PremiosService = /** @class */ (function () {
    //cantidadEventos:number = 0;
    function PremiosService(http) {
        this.http = http;
        this.pagina = 0;
        this.premios = [];
        this.item_a_describir = [];
        this.cargar_todos();
        //this.obtener_tamaño();
    }
    PremiosService.prototype.cargar_todos = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["a" /* URL_SERVICIOS */] + "/premios/todos/" + _this.pagina;
            _this.http.get(url).map(function (resp) { return resp.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.error) {
                }
                else {
                    (_a = _this.premios).push.apply(_a, data.premios);
                    _this.pagina += 1;
                    console.log(_this.premios);
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    PremiosService.prototype.recibir_item = function (item) {
        this.item_a_describir = item;
    };
    PremiosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PremiosService);
    return PremiosService;
}());

//# sourceMappingURL=PremiosProvider.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComprasPage = /** @class */ (function () {
    function ComprasPage(navCtrl, navParams, viewCtrl, _gs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._gs = _gs;
    }
    ComprasPage.prototype.ionViewWillEnter = function () {
        console.log("cargando conpras");
        this._gs.cargar_ordenes();
    };
    ComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compras',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\compras\compras.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    \n\n    <ion-title>Compras</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="viewCtrl.dismiss()">\n        Volver atras\n      </button>\n</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n	<button ion-item *ngFor="let compra of _gs.compras">\n		<strong>Orden ID:</strong>\n		{{compra.id}}\n	</button>\n\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\compras\compras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__["a" /* GuardadosService */]])
    ], ComprasPage);
    return ComprasPage;
}());

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GuardadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuardadosPage = /** @class */ (function () {
    function GuardadosPage(navCtrl, navParams, _gs, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._gs = _gs;
        this.viewCtrl = viewCtrl;
    }
    GuardadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guardados',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\guardados\guardados.html"*/'<!--\n  Generated template for the GuardadosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start>\n      <button ion-button (click)="viewCtrl.dismiss()">\n        <Volver atras\n      </button>\n    </ion-buttons>\n\n    <ion-title>guardados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div text-center *ngIf="_gs.items.length == 0" class="lista_vacia">\n<ion-icon name="ios-star-outline" class="icon-5x"></ion-icon>\n<br>\nUps, no has marcado ningun evento\n</div>\n\n\n<div *ngIf="_gs.items.length > 0">\n	 <ion-list-header>\n    Eventos a los que asistiré\n    </ion-list-header>\n\n	 <ion-list *ngFor="let item of _gs.items; let i = index">\n\n    <ion-item-sliding >\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="http://localhost/rest/public/img/eventos/{{ item.id }}.jpg">\n        </ion-avatar>\n        <h2>{{item.NombreEvento}}</h2>\n        <p>{{item.NombreOrganizador}}</p>\n        <ion-buttons item-end color="primary">\n         <button ion-button >\n         	<ion-icon name="trash" class="bote_basura" (click)="_gs.remover_item(i)"> </ion-icon>\n         </button>\n    </ion-buttons>\n      </ion-item>\n      \n    </ion-item-sliding>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\guardados\guardados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__["a" /* GuardadosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], GuardadosPage);
    return GuardadosPage;
}());

//# sourceMappingURL=guardados.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_EventosService__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_config_config__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, _gs, _Es, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._gs = _gs;
        this._Es = _Es;
        this.viewCtrl = viewCtrl;
    }
    PerfilPage.prototype.config = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_config_config__["a" /* ConfigPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\perfil\perfil.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>perfil</ion-title>\n<ion-buttons start>\n      <button ion-button (click)="viewCtrl.dismiss()">\n        Volver atras\n      </button>\n</ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__["a" /* GuardadosService */], __WEBPACK_IMPORTED_MODULE_3__providers_EventosService__["a" /* EventosService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], PerfilPage);
    return PerfilPage;
}());

/*
boton de salir:
  <ion-buttons start>
      <button ion-button *ngIf="_us.activo()" (click)="_us.cerrar_sesion()">
        salir
      </button>
    </ion-buttons>


Boton para el historial:
     <button ion_button icon-only (click)="ver_guardados()">
    <ion-icon name="star" ></ion-icon>
    <ion-badge color="danger" class="lista-numero" >{{_gs.items.length}}</ion-badge>
  </button>
*/ 
//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescripcionPremioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_PremiosProvider__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DescripcionPremioPage = /** @class */ (function () {
    function DescripcionPremioPage(navCtrl, navParams, _ps, ViewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.ViewCtrl = ViewCtrl;
    }
    DescripcionPremioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescripcionPremioPage');
    };
    DescripcionPremioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descripcion-premio',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\descripcion-premio\descripcion-premio.html"*/'<!--\n  Generated template for the DescripcionPremioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button (click)="ViewCtrl.dismiss()">Volver</button>\n    <ion-title>Info de premio</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n	<ion-col class="Imagen" justify-content-center >\n<img src="http://localhost/rest/public/img/premios/{{ _ps.item_a_describir.id_Premio}}.jpg ">\n     </ion-col>\n	</ion-row>\n	<ion-row>\n<ion-col aling-self-center>\n<h2 >\n{{_ps.item_a_describir.Nombre_premio}}\n</h2>\n</ion-col>\n</ion-row>\n<ion-row>\n	<ion-col>\n		<p>\n			{{_ps.item_a_describir.Descripcion_premio}}\n		</p>\n	</ion-col>\n</ion-row>\n\n<ion-row>\n	<ion-col>\n		<h3>\n			{{_ps.item_a_describir.Puntos_Reclamo_Premio}}\n		</h3>\n	</ion-col>\n</ion-row>\n\n<ion-row *ngIf="_ps.item_a_describir.Tipo == 1">\n	<ion-col>\n		<h3>\n			Tipo reclamable\n\n		</h3>\n<ion-note>\nPuedes reclamar y obtener este premio en fisico\n</ion-note>\n	</ion-col>\n</ion-row>\n<ion-row *ngIf="_ps.item_a_describir.Estado == 1">\n	<ion-col>\n		<h3>\n			¿que esperas? Aún está disponible este premio\n		</h3>\n<p>\n	Este premio tiene vigencia hasta el {{_ps.item_a_describir.feche_de_vencimiento}} o hasta\n	Agotar existencia \n</p>\n<ion-note>\n	Cantidad de unidades disponibles: {{_ps.item_a_describir.Cantidad_disponible}}\n	</ion-note>\n<ion-note>\n\nPuedes reclamar y obtener este premio en fisico\n</ion-note>\n	</ion-col>\n</ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\descripcion-premio\descripcion-premio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_PremiosProvider__["a" /* PremiosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], DescripcionPremioPage);
    return DescripcionPremioPage;
}());

//# sourceMappingURL=descripcion-premio.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_OrganizadorService__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrganizadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizadorPage = /** @class */ (function () {
    function OrganizadorPage(navCtrl, navParams, _Os) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._Os = _Os;
        this.organizadorArray = [];
        console.log(this.navParams.get("evento"));
        this.eventoIdOr = this.navParams.get("evento");
        this._Os.cargar_todos(this.eventoIdOr);
        this._Os.organizador = [];
    }
    OrganizadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organizador',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\organizador\organizador.html"*/'<!--\n  Generated template for the OrganizadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Informacion del organizador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<ion-grid>\n    <ion-row *ngFor="let item of _Os.organizador">\n    	<ion-col col-7>\n    	<div><ion-label>Nombre de la entidad:</ion-label></div>\n</ion-col>\n<ion-col col-5>\n    	<div><p>{{item.NombreOrganizador}}</p></div>\n    	</ion-col>\n    	<ion-col col-7>\n    	<div><ion-label>Nombre del creador:</ion-label></div>\n</ion-col>\n<ion-col col-5>\n    	<div><p>{{item.NombreDueno}}</p></div>\n    	</ion-col>\n<ion-col col-12>\n    	<div><p>El organizador ha realizado {{item.CantidadDeEventos}} en unete club. \n    	En estos eventos se le ha calificado con {{item.Estrellas}} estrellas</p></div>\n</ion-col>\n<ion-col col-12>\n    	<div><ion-label>Contactate con el organizador:</ion-label></div>\n</ion-col>\n<ion-col col-12>\n    	<div>\n    	<ul>\n\n    	<li>Correo electronico : {{item.CorreoOrganizador}}</li>\n    	<li>Telefono de contacto: {{item.NumeroTelefonico}}</li>\n    	<li>Direccion del establecimiento: {{item.DireccionNegocio}}</li>\n</ul>\n\n    	</div>\n</ion-col>\n\n\n\n\n    </ion-row>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\organizador\organizador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_OrganizadorService__["a" /* OrganizadorService */]])
    ], OrganizadorPage);
    return OrganizadorPage;
}());

//# sourceMappingURL=organizador.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_PremiosProvider__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_UsuarioService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_GuardadosService__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_descripcion_premio_descripcion_premio__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PremiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PremiosPage = /** @class */ (function () {
    function PremiosPage(navCtrl, navParams, _ps, _us, modalCtrl, alertCtrl, _gs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this._us = _us;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this._gs = _gs;
    }
    PremiosPage.prototype.Siguiente_Pagina = function (infiniteScroll) {
        this._ps.cargar_todos()
            .then(function () {
            infiniteScroll.complete();
        });
    };
    PremiosPage.prototype.presentConfirm = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: item.Nombre_premio,
            message: item.Descripcion_premio,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Comprar',
                    handler: function () {
                        console.log('Buy clicked');
                        _this._gs.realizar_compra(item);
                    }
                },
                {
                    text: 'Ver Premio',
                    handler: function () {
                        var modal;
                        if (_this._us.token) {
                            _this._ps.recibir_item(item);
                            modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_descripcion_premio_descripcion_premio__["a" /* DescripcionPremioPage */]);
                        }
                        else {
                            modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                        }
                        modal.present();
                        modal.onDidDismiss(function (abrirGuardador) {
                            if (abrirGuardador) {
                                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_descripcion_premio_descripcion_premio__["a" /* DescripcionPremioPage */]).present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PremiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-premios',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\premios\premios.html"*/'<!--\n  Generated template for the PremiosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>premios</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n    <ion-list-header>\n      Premios Disponibles\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of _ps.premios" (click)="presentConfirm(item)">\n      <ion-avatar item-start>\n        <img src="http://localhost/rest/public/img/premios/{{ item.id_Premio}}.jpg ">\n     \n      </ion-avatar>\n      <h2>{{item.Nombre_premio}}</h2>\n    </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\premios\premios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_PremiosProvider__["a" /* PremiosService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_UsuarioService__["a" /* UsuarioService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_GuardadosService__["a" /* GuardadosService */]])
    ], PremiosPage);
    return PremiosPage;
}());

//# sourceMappingURL=premios.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UbicacionPage = /** @class */ (function () {
    function UbicacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UbicacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UbicacionPage');
    };
    UbicacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ubicacion',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\ubicacion\ubicacion.html"*/'<!--\n  Generated template for the UbicacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ubicacion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\ubicacion\ubicacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UbicacionPage);
    return UbicacionPage;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/compras/compras.module": [
		692,
		8
	],
	"../pages/config/config.module": [
		693,
		7
	],
	"../pages/descripcion-premio/descripcion-premio.module": [
		694,
		6
	],
	"../pages/guardados/guardados.module": [
		695,
		5
	],
	"../pages/login/login.module": [
		696,
		4
	],
	"../pages/organizador/organizador.module": [
		697,
		3
	],
	"../pages/perfil/perfil.module": [
		698,
		2
	],
	"../pages/premios/premios.module": [
		699,
		1
	],
	"../pages/ubicacion/ubicacion.module": [
		700,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizadorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizadorService = /** @class */ (function () {
    //cantidadEventos:number = 0;
    function OrganizadorService(http) {
        this.http = http;
        this.organizador = [];
    }
    OrganizadorService.prototype.cargar_todos = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var promesa = new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["a" /* URL_SERVICIOS */] + "/organizador/todos/" + id;
            _this.http.get(url).map(function (resp) { return resp.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.error) {
                }
                else {
                    (_a = _this.organizador).push.apply(_a, data.organizador);
                    console.log(_this.organizador);
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    OrganizadorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], OrganizadorService);
    return OrganizadorService;
}());

//# sourceMappingURL=OrganizadorService.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_premios_premios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_ubicacion_ubicacion__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_GuardadosService__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(_gs) {
        this._gs = _gs;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
        this.premiosRoot = __WEBPACK_IMPORTED_MODULE_2__pages_premios_premios__["a" /* PremiosPage */];
        this.ubicacionRoot = __WEBPACK_IMPORTED_MODULE_3__pages_ubicacion_ubicacion__["a" /* UbicacionPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home" ></ion-tab>\n    <ion-tab [root]="ubicacionRoot"  tabTitle="Cerca de ti" tabIcon="star" ></ion-tab>\n    <ion-tab [root]="premiosRoot" tabTitle="Premios" tabIcon="ribbon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_GuardadosService__["a" /* GuardadosService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_EventosService__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_GuardadosService__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizador_organizador__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_UsuarioService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    //paginaRara:number = this._es.pagina*3;
    function HomePage(navCtrl, _es, _gs, _us, modalCtrl) {
        this.navCtrl = navCtrl;
        this._es = _es;
        this._gs = _gs;
        this._us = _us;
        this.modalCtrl = modalCtrl;
        this.organizadorPage = __WEBPACK_IMPORTED_MODULE_4__organizador_organizador__["a" /* OrganizadorPage */];
    }
    HomePage.prototype.Siguiente_Pagina = function (infiniteScroll) {
        this._es.cargar_todos()
            .then(function () {
            infiniteScroll.complete();
        });
    };
    HomePage.prototype.ver_guardados = function () {
        var _this = this;
        var modal;
        if (this._us.token) {
            //mostrar pagina de las guardados
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigPage */]);
        }
        else {
            //mostrar el login
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
        modal.present();
        modal.onDidDismiss(function (abrirGuardador) {
            if (abrirGuardador) {
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigPage */]).present();
            }
        });
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar>\n   \n    <ion-title>home</ion-title>\n<ion-buttons end>\n  <button ion_button icon-only (click)="ver_guardados()">\n    <ion-icon name="happy" ></ion-icon>\n    <ion-badge color="danger" ></ion-badge>\n  </button>\n\n  &nbsp;\n  &nbsp;\n  &nbsp;\n</ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n <ion-grid>\n    <ion-row *ngFor="let item of _es.eventos">\n    	<ion-card>\n <ion-item>\n    <h3>{{item.NombreEvento}}</h3>\n    <ion-note>Desde el {{item.DiaInicio}} hasta el {{item.DiaFinalizacion}}</ion-note>\n  </ion-item>\n\n  <img src="http://localhost/rest/public/img/eventos/{{ item.id}}.jpg ">\n\n  <ion-card-content>\n    <p>{{item.DescripcionEvento}}</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col >\n      <button ion-button icon-start clear small (click)="_gs.agregar_guardado(item)">\n        <ion-icon name="send"></ion-icon>\n        <div>Asistir</div>\n      </button>\n    </ion-col>\n    <ion-col [navParams]="{evento:item.idOrganizador}"\n    [navPush]="organizadorPage">\n      <button ion-button icon-start clear small >\n        <ion-icon name="text"></ion-icon>\n        <div>Organizador</div>\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n</ion-row>\n</ion-grid>\n<ion-infinite-scroll (ionInfinite)="Siguiente_Pagina($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_EventosService__["a" /* EventosService */], __WEBPACK_IMPORTED_MODULE_3__providers_GuardadosService__["a" /* GuardadosService */], __WEBPACK_IMPORTED_MODULE_5__providers_UsuarioService__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_EventosService__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_GuardadosService__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_OrganizadorService__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_UsuarioService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_PremiosProvider__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_guardados_guardados__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_organizador_organizador__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_premios_premios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ubicacion_ubicacion__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_compras_compras__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_config_config__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_descripcion_premio_descripcion_premio__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// servicios





//paginas











//storage

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_guardados_guardados__["a" /* GuardadosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ubicacion_ubicacion__["a" /* UbicacionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_premios_premios__["a" /* PremiosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_compras_compras__["a" /* ComprasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_descripcion_premio_descripcion_premio__["a" /* DescripcionPremioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_organizador_organizador__["a" /* OrganizadorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/compras/compras.module#ComprasPageModule', name: 'ComprasPage', segment: 'compras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descripcion-premio/descripcion-premio.module#DescripcionPremioPageModule', name: 'DescripcionPremioPage', segment: 'descripcion-premio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guardados/guardados.module#GuardadosPageModule', name: 'GuardadosPage', segment: 'guardados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organizador/organizador.module#OrganizadorPageModule', name: 'OrganizadorPage', segment: 'organizador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/premios/premios.module#PremiosPageModule', name: 'PremiosPage', segment: 'premios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ubicacion/ubicacion.module#UbicacionPageModule', name: 'UbicacionPage', segment: 'ubicacion', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_guardados_guardados__["a" /* GuardadosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ubicacion_ubicacion__["a" /* UbicacionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_premios_premios__["a" /* PremiosPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_compras_compras__["a" /* ComprasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_descripcion_premio_descripcion_premio__["a" /* DescripcionPremioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_organizador_organizador__["a" /* OrganizadorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__providers_EventosService__["a" /* EventosService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_OrganizadorService__["a" /* OrganizadorService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_GuardadosService__["a" /* GuardadosService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_UsuarioService__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_PremiosProvider__["a" /* PremiosService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardadosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UsuarioService__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//stogare

//usuarioService 

var GuardadosService = /** @class */ (function () {
    function GuardadosService(http, alertCtrl, plataform, storage, modalCtrl, _us) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.plataform = plataform;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this._us = _us;
        this.items = [];
        this.compras = [];
        this.cargar_storage();
    }
    GuardadosService.prototype.agregar_guardado = function (item_enviado) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id == item_enviado.id) {
                this.alertCtrl.create({
                    title: "Ya se ha agregado a tus guardados",
                    subTitle: item_enviado.NombreEvento + " Ya quedó guardado para asistir",
                    buttons: ["OK"]
                }).present();
                return;
            }
        }
        this.items.push(item_enviado);
        this.guardar_storage();
    };
    GuardadosService.prototype.remover_item = function (idx) {
        this.items.splice(idx, 1);
        this.guardar_storage();
    };
    GuardadosService.prototype.realizar_compra = function (item_comprado) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        data.append("items", item_comprado.id_Premio);
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["a" /* URL_SERVICIOS */] + "/compras/realizar_orden/" + this._us.token + "/" + this._us.id_usuario;
        this.http.post(url, data)
            .subscribe(function (resp) {
            var respuesta = resp.json();
            if (respuesta.error) {
                //error
                _this.alertCtrl.create({
                    title: "Error en la compra",
                    subTitle: respuesta.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                _this.items = [];
                _this.alertCtrl.create({
                    title: "Compra completa",
                    subTitle: "Aqui van las instrucciones",
                    buttons: ["OK"]
                }).present();
            }
        });
    };
    GuardadosService.prototype.guardar_storage = function () {
        if (this.plataform.is("cordova")) {
            //dispositivos
            this.storage.set('items', this.items);
        }
        else {
            //computador
            localStorage.setItem("item", JSON.stringify(this.items));
        }
    };
    GuardadosService.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.plataform.is("cordova")) {
                //dispositivo
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("items").then(function (items) {
                        if (items) {
                            //revisa si no llega nada nulo
                            _this.items = items;
                        }
                        resolve;
                    });
                });
            }
            else {
                //computador
                if (localStorage.getItem("items")) {
                    _this.items = JSON.parse(localStorage.getItem("items"));
                }
                resolve();
            }
        });
        return promesa;
    };
    GuardadosService.prototype.cargar_ordenes = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["a" /* URL_SERVICIOS */] + "/compras/obtener_pedidos/" + this._us.token + "/" + this._us.id_usuario;
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
                //mostrar la alerta
            }
            else {
                _this.compras = data.compras;
            }
        });
    };
    GuardadosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__UsuarioService__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__UsuarioService__["a" /* UsuarioService */]) === "function" && _f || Object])
    ], GuardadosService);
    return GuardadosService;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=GuardadosService.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//UrlSearchParams sirve para mandar parametros




var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, alertCtrl, plataform, storage) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.plataform = plataform;
        this.storage = storage;
        this.cargar_storage();
    }
    UsuarioService.prototype.activo = function () {
        //funion para saber si la sesion está activa 
        if (this.token) {
            return true;
        }
        else {
            return false;
        }
    };
    UsuarioService.prototype.ingresar = function (correo, contrasena) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        //envia los datos
        data.append("correo", correo);
        data.append("contrasena", contrasena);
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["a" /* URL_SERVICIOS */] + "/login";
        //respuesta mientras se espera
        return this.http.post(url, data)
            .map(function (resp) {
            var data_resp = resp.json();
            console.log(data_resp);
            if (data_resp.error) {
                _this.alertCtrl.create({
                    title: "error al iniciar",
                    subTitle: data_resp.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                _this.token = data_resp.token;
                _this.id_usuario = data_resp.id_usuario;
                //guardar Storage
                _this.guardar_storage();
            }
        });
    };
    UsuarioService.prototype.cerrar_sesion = function () {
        this.token = null;
        this.id_usuario = null;
        this.guardar_storage();
    };
    UsuarioService.prototype.guardar_storage = function () {
        if (this.plataform.is("cordova")) {
            //dispositivos
            this.storage.set('token', this.token);
            this.storage.set('id_usuario', this.id_usuario);
        }
        else {
            //computador
            if (this.token) {
                localStorage.setItem("token", this.token);
                localStorage.setItem("id_usuario", this.id_usuario);
            }
            else {
                localStorage.removeItem("token");
                localStorage.removeItem("id_usuario");
            }
        }
    };
    UsuarioService.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.plataform.is("cordova")) {
                //dispositivo
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("token").then(function (token) {
                        if (token) {
                            //revisa si no llega nada nulo
                            _this.token = token;
                        }
                    });
                    _this.storage.get("id_usuario").then(function (id_usuario) {
                        if (id_usuario) {
                            //revisa si no llega nada nulo
                            _this.id_usuario = id_usuario;
                        }
                        resolve();
                    });
                });
            }
            else {
                //computador
                if (localStorage.getItem("token")) {
                    _this.token = localStorage.getItem("token");
                    _this.id_usuario = localStorage.getItem("id_usuario");
                }
                resolve();
            }
        });
        return promesa;
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=UsuarioService.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_SERVICIOS; });
var URL_SERVICIOS = "http://localhost/rest/index.php";
//# sourceMappingURL=url.servicios.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_UsuarioService__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_guardados_guardados__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams, _gs, modalCtrl, viewCtrl, _us) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._gs = _gs;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this._us = _us;
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    ConfigPage.prototype.guardados = function () {
        var modal;
        modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_guardados_guardados__["a" /* GuardadosPage */]);
        modal.present();
    };
    ConfigPage.prototype.perfil = function () {
        var modal;
        modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */]);
        modal.present();
    };
    ConfigPage.prototype.compras = function () {
        var modal;
        modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__["a" /* ComprasPage */]);
        modal.present();
    };
    ConfigPage.prototype.cerrar_sesion = function () {
        this._us.cerrar_sesion();
        this.viewCtrl.dismiss();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\config\config.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>config</ion-title>\n  <ion-buttons start>\n      <button ion-button (click)="viewCtrl.dismiss()">\n        Volver atras\n      </button>\n</ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-border>\n\n    <ion-list-header>\n      historial\n    </ion-list-header>\n <ion-item (click)="perfil()">\n      <ion-icon name=\'contact\' item-start></ion-icon>\n      Perfil\n    </ion-item>\n      <ion-item>\n           <ion-icon name=\'speedometer\' item-start></ion-icon>\n           Puntos\n           <ion-note item-end>\n         500\n           </ion-note>\n         </ion-item>\n    <ion-item (click)="guardados()">\n      <ion-icon name=\'send\' item-start></ion-icon>\n      Eventos a los que asistiré\n      <ion-note item-end>\n    {{_gs.items.length}}\n      </ion-note>\n    </ion-item>\n       <ion-item (click)="compras()">\n      <ion-icon name=\'ribbon\' item-start></ion-icon>\n  Compras\n      <ion-note item-end>\nPremios\n      </ion-note>\n    </ion-item>\n\n       <ion-item *ngIf="_us.activo()" (click)="cerrar_sesion()">\n      <ion-icon name=\'ribbon\' item-start></ion-icon>\n  Cerrar sesion\n</ion-item>\n\n\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__["a" /* GuardadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_GuardadosService__["a" /* GuardadosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_UsuarioService__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_UsuarioService__["a" /* UsuarioService */]) === "function" && _f || Object])
    ], ConfigPage);
    return ConfigPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_UsuarioService__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, _us) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._us = _us;
        this.correo = "";
        this.contrasena = "";
    }
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        this._us.ingresar(this.correo, this.contrasena)
            .subscribe(function () {
            if (_this._us.activo()) {
                _this.viewCtrl.dismiss(true);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons>\n  		<button ion-button (click)="viewCtrl.dismiss(false)">\n  			cerrar\n  		</button>\n  	</ion-buttons>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label fixed>Correo</ion-label>\n    <ion-input type="email" [(ngModel)]="correo"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Contraseña</ion-label>\n    <ion-input type="password" [(ngModel)]="contrasena" ></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<button ion-button [disabled]="correo.length < 5 || contrasena.length < 5" block (click)="ingresar()">\nIngresar\n</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Santiago\Documents\proyecto_nuevo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_UsuarioService__["a" /* UsuarioService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map