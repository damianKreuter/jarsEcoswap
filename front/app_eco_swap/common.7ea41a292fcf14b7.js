"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[592],{9499:(O,m,e)=>{e.d(m,{O:()=>o});var n=e(4755),g=e(5110),p=e(9401),l=e(3148),r=e(4466),d=e(2223);let o=(()=>{class _{}return _.\u0275fac=function(s){return new(s||_)},_.\u0275mod=d.oAB({type:_}),_.\u0275inj=d.cJS({imports:[n.ez,g.q,l.IJ,p.u5,p.UX,r.m]}),_})()},8628:(O,m,e)=>{e.d(m,{M:()=>d});var n=e(2340),g=e(2223),p=e(1562);const l=n.N.apiUrl+"8080/",r="URImsUsuarios";let d=(()=>{class o{constructor(t){this.backendService=t}crearColecta(t){return this.backendService.post(r,"api/colecta",t)}getAllColectas(t){return this.backendService.get(r,"api/colectas",t)}getMisColectas(){return this.backendService.get(r,"api/misColectas")}getColecta(t){return this.backendService.get(r,"api/colecta/"+t)}getDonacionesColecta(t){return this.backendService.get(r,"api/colecta/"+t+"/donaciones")}getMisDonaciones(){return this.backendService.get(r,"api/particular/misDonaciones")}crearDonacion(t,s){return this.backendService.post(r,"api/colecta/"+t+"/crearDonacion",s)}getImagen(t){return console.log("Constructed URL:",`${l}api/getImage/${t}`),`${l}api/getImage/${t}`}cambiarEstadoDonacion(t,s,P){return this.backendService.put(r,"api/colecta/"+t+"/donaciones/"+s,P)}}return o.\u0275fac=function(t){return new(t||o)(g.LFG(p.k))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},4893:(O,m,e)=>{e.d(m,{k:()=>l});var n=e(2223),g=e(1562);const p="URImsUsuarios";let l=(()=>{class r{constructor(o){this.backendService=o}getTiposProductos(){return this.backendService.get(p,"api/tiposProductos")}getProductosColecta(o){return this.backendService.get(p,"api/productos/"+o)}}return r.\u0275fac=function(o){return new(o||r)(n.LFG(g.k))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2777:(O,m,e)=>{e.d(m,{x:()=>d}),e(2340);var g=e(2223),p=e(1562);const r="URImsUsuarios";let d=(()=>{class o{constructor(t){this.backendService=t}crearPublicacion(t){return this.backendService.post(r,"api/publicacion",t)}getPublicaciones(t={}){return this.backendService.get(r,"api/publicaciones",t)}getMisPublicaciones(){return this.backendService.get(r,"api/misPublicaciones")}getPublicacion(t){return this.backendService.get(r,"api/publicacion/"+t)}getImagen(t){return this.backendService.getUrlByName(r)+"api/getImage/"+t}}return o.\u0275fac=function(t){return new(t||o)(g.LFG(p.k))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6247:(O,m,e)=>{e.d(m,{_:()=>C});var n=e(2223),g=e(5226),p=e.n(g),l=e(8628),r=e(430),d=e(1728),o=e(6012),_=e(4755);function t(u,v){1&u&&(n.TgZ(0,"mat-icon",11),n._uU(1,"star"),n.qZA())}function s(u,v){1&u&&(n.TgZ(0,"mat-icon",12),n._uU(1,"star"),n.qZA())}function P(u,v){if(1&u){const i=n.EpF();n.TgZ(0,"img",13),n.NdJ("click",function(){const E=n.CHM(i).$implicit,f=n.oxw();return n.KtG(f.zoomImage(E))}),n.qZA()}if(2&u){const i=v.$implicit,a=n.oxw();n.Q6J("src",a.getImage(i),n.LSH)}}function c(u,v){if(1&u){const i=n.EpF();n.TgZ(0,"button",14),n.NdJ("click",function(){const E=n.CHM(i).$implicit,f=n.oxw();return n.KtG(f.changeEstadoDonacion(f.donacion,E.status))}),n.TgZ(1,"mat-icon"),n._uU(2),n.qZA(),n._uU(3),n.qZA()}if(2&u){const i=v.$implicit;n.Q6J("color",i.color)("disabled",i.disabled),n.xp6(2),n.Oqu(i.icon),n.xp6(1),n.hij(" ",i.name," ")}}let C=(()=>{class u{constructor(i){this.donacionesService=i,this.buttons=[],this.statusChanged=new n.vpe,this.caracteristicas=""}ngOnInit(){console.log(this.donacion,this.usuarioHeader,this.donacion.caracteristicaDonacion);for(const[i,a]of this.donacion.caracteristicaDonacion.entries())a.caracteristica&&0==i?this.caracteristicas=a.caracteristica:a.caracteristica&&(this.caracteristicas+=" - "+a.caracteristica)}getImage(i){return this.donacionesService.getImagen(i)}zoomImage(i){i&&p().fire({html:`<img src="${this.getImage(i)}" style="width: 100%"/>`,showConfirmButton:!1,showCloseButton:!0})}changeEstadoDonacion(i,a){this.donacionesService.cambiarEstadoDonacion(this.id_colecta,i.idDonacion,{nuevoEstado:a}).subscribe(M=>{console.log(M),this.donacion.estadoDonacion=a,this.statusChanged.emit()})}getStars(i){const a=[];for(let M=0;M<i;M++)a.push(1);return a}}return u.\u0275fac=function(i){return new(i||u)(n.Y36(l.M))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-card-donacion"]],inputs:{donacion:"donacion",id_colecta:"id_colecta",usuarioHeader:"usuarioHeader",buttons:"buttons"},outputs:{statusChanged:"statusChanged"},decls:22,vars:14,consts:[[2,"margin","10px"],[2,"border-bottom","solid 1px var(--light-grey)"],["mat-card-avatar","",1,"donacion-example-header-image"],["color","primary",4,"ngFor","ngForOf"],["class","empty-star",4,"ngFor","ngForOf"],[1,"donacion-card-content"],[1,"card-title"],[1,"imagenes"],[3,"src","click",4,"ngFor","ngForOf"],[1,"donacion-status"],["mat-raised-button","",3,"color","disabled","click",4,"ngFor","ngForOf"],["color","primary"],[1,"empty-star"],[3,"src","click"],["mat-raised-button","",3,"color","disabled","click"]],template:function(i,a){1&i&&(n.TgZ(0,"mat-card",0)(1,"mat-card-header",1),n._UZ(2,"div",2),n.TgZ(3,"mat-card-title"),n._uU(4),n.qZA(),n.TgZ(5,"mat-card-subtitle"),n.YNc(6,t,2,0,"mat-icon",3),n.YNc(7,s,2,0,"mat-icon",4),n.qZA()(),n.TgZ(8,"mat-card-content",5)(9,"div")(10,"h2",6),n._uU(11),n.qZA(),n.TgZ(12,"p"),n._uU(13),n.qZA(),n.TgZ(14,"p"),n._uU(15),n.qZA(),n.TgZ(16,"p"),n._uU(17),n.qZA()(),n.TgZ(18,"div",7),n.YNc(19,P,1,1,"img",8),n.qZA(),n.TgZ(20,"div",9),n.YNc(21,c,4,4,"button",10),n.qZA()()()),2&i&&(n.xp6(4),n.AsE("",a.usuarioHeader.nombre," ",a.usuarioHeader.apellido,""),n.xp6(2),n.Q6J("ngForOf",a.getStars(a.usuarioHeader.puntaje)),n.xp6(1),n.Q6J("ngForOf",a.getStars(5-a.usuarioHeader.puntaje)),n.xp6(4),n.Oqu(a.donacion.producto.descripcion||a.donacion.nombreProducto),n.xp6(2),n.hij("Cantidad: ",a.donacion.cantidadDonacion,""),n.xp6(1),n.ekj("aprobada","APROBADA"==a.donacion.estadoDonacion)("rechazada","RECHAZADA"==a.donacion.estadoDonacion),n.xp6(1),n.hij("Estado: ",a.donacion.estadoDonacion,""),n.xp6(2),n.Oqu(a.caracteristicas.length>0?"Caracter\xedsticas: "+a.caracteristicas:""),n.xp6(2),n.Q6J("ngForOf",a.donacion.parsedImagenes),n.xp6(2),n.Q6J("ngForOf",a.buttons))},dependencies:[r.Hw,d.lW,o.a8,o.kc,o.dn,o.dk,o.$j,o.n5,_.sg],styles:[".donacion-example-header-image[_ngcontent-%COMP%]{background-image:url(persona.5bfdedb8d26ee878.png);background-size:cover}.donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 2fr 1fr;gap:1rem;margin-top:10px}.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin:5px;border-radius:5px;box-shadow:2px 2px 5px var(--dark-grey)}.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer}.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]{display:flex;flex-direction:column}.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px auto;width:150px;text-transform:uppercase}.donacion-card-content[_ngcontent-%COMP%]   .aprobada[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500}.donacion-card-content[_ngcontent-%COMP%]   .rechazada[_ngcontent-%COMP%]{color:var(--warn-color)}"]}),u})()},8719:(O,m,e)=>{e.d(m,{G:()=>t});var n=e(2223),g=e(2777),p=e(1531),l=e(4755);function r(s,P){if(1&s&&n._UZ(0,"img",10),2&s){const c=n.oxw().$implicit,C=n.oxw();n.Q6J("src",C.getImagen(c.parsedImagenes[0]),n.LSH)("ngClass","publicaciones"==C.origin?"big":"small")}}function d(s,P){if(1&s&&(n.TgZ(0,"div",11),n._uU(1),n.qZA()),2&s){const c=n.oxw().$implicit;n.xp6(1),n.hij(" Precio de venta: $",c.precioVenta," ")}}function o(s,P){if(1&s&&(n.TgZ(0,"div",12),n._UZ(1,"img",13),n.TgZ(2,"h4"),n._uU(3),n.qZA(),n.TgZ(4,"h6"),n._uU(5),n.ALo(6,"date"),n.qZA()()),2&s){const c=n.oxw().$implicit;n.xp6(3),n.Oqu(c.particularDTO.nombre+" "+c.particularDTO.apellido),n.xp6(2),n.Oqu(n.xi3(6,2,c.fechaPublicacion,"dd/MM/yyyy"))}}function _(s,P){if(1&s){const c=n.EpF();n.TgZ(0,"div",2),n.NdJ("click",function(){const v=n.CHM(c).$implicit,i=n.oxw();return n.KtG(i.clicked(v))}),n.TgZ(1,"div",3),n.YNc(2,r,1,2,"img",4),n.qZA(),n.TgZ(3,"div",5)(4,"h2",6),n._uU(5),n.qZA(),n.TgZ(6,"div",7),n._uU(7),n.qZA(),n.YNc(8,d,2,1,"div",8),n.qZA(),n.YNc(9,o,7,5,"div",9),n.qZA()}if(2&s){const c=P.$implicit,C=n.oxw();n.Q6J("ngClass","intercambio"==C.origin&&c.idPublicacion==C.cardSelected?"selected-card":""),n.xp6(2),n.Q6J("ngIf",c.parsedImagenes&&c.parsedImagenes.length>0),n.xp6(3),n.Oqu(c.titulo),n.xp6(2),n.AsE(" Valor de trueque: $",c.valorTruequeMin," - $",c.valorTruequeMax," "),n.xp6(1),n.Q6J("ngIf","VENTA"==c.tipoPublicacion),n.xp6(1),n.Q6J("ngIf","publicaciones"==C.origin)}}let t=(()=>{class s{constructor(c,C){this.truequesService=c,this.router=C,this.publicacionesToShow=[],this.origin="publicaciones",this.selectedCard=new n.vpe}getImagen(c){return this.truequesService.getImagen(c)}clicked(c){"publicaciones"==this.origin?this.goToPublicacion(c):(this.cardSelected=c.idPublicacion,this.selectedCard.emit(this.cardSelected))}goToPublicacion(c){this.router.navigate(["publicacion/"+c.idPublicacion])}}return s.\u0275fac=function(c){return new(c||s)(n.Y36(g.x),n.Y36(p.F0))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-deck-publicaciones"]],inputs:{publicacionesToShow:"publicacionesToShow",origin:"origin"},outputs:{selectedCard:"selectedCard"},decls:2,vars:1,consts:[[1,"card-deck"],["class","card row",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"card","row",3,"ngClass","click"],[1,"col-sm-4",2,"display","flex","justify-content","center"],["class","card-img",3,"src","ngClass",4,"ngIf"],[1,"card-body","col-sm-6"],[1,"card-title"],[1,"trueque"],["class","venta",4,"ngIf"],["class","card-fundacion col-sm-2",4,"ngIf"],[1,"card-img",3,"src","ngClass"],[1,"venta"],[1,"card-fundacion","col-sm-2"],["src","assets/persona.png",1,"img-fundacion"]],template:function(c,C){1&c&&(n.TgZ(0,"div",0),n.YNc(1,_,10,7,"div",1),n.qZA()),2&c&&(n.xp6(1),n.Q6J("ngForOf",C.publicacionesToShow))},dependencies:[l.mk,l.sg,l.O5,l.uU],styles:[".card[_ngcontent-%COMP%]{margin:5px;display:flex;flex-direction:row;align-items:center}.card.selected-card[_ngcontent-%COMP%]{background-color:#bceba1}.card[_ngcontent-%COMP%]:hover{cursor:pointer}.card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{margin:20px;width:auto}.card[_ngcontent-%COMP%]   .card-img.big[_ngcontent-%COMP%]{max-height:160px}.card[_ngcontent-%COMP%]   .card-img.small[_ngcontent-%COMP%]{max-height:110px;max-width:100%}.card[_ngcontent-%COMP%]   .productos[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.card[_ngcontent-%COMP%]   .productos[_ngcontent-%COMP%]   .producto[_ngcontent-%COMP%]{margin:5px 10px;min-width:100px}.card[_ngcontent-%COMP%]   .card-fundacion[_ngcontent-%COMP%]{text-align:center}.card[_ngcontent-%COMP%]   .card-fundacion[_ngcontent-%COMP%]   .img-fundacion[_ngcontent-%COMP%]{width:30px}"]}),s})()},4984:(O,m,e)=>{e.d(m,{O:()=>r});var n=e(2223),g=e(8467),p=e(4755);function l(d,o){1&d&&n._UZ(0,"mat-spinner",2)}let r=(()=>{class d{constructor(){this.loading=!1}}return d.\u0275fac=function(_){return new(_||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-spinner"]],inputs:{loading:"loading"},decls:2,vars:1,consts:[[2,"display","flex","justify-content","center"],["diameter","40",4,"ngIf"],["diameter","40"]],template:function(_,t){1&_&&(n.TgZ(0,"div",0),n.YNc(1,l,1,0,"mat-spinner",1),n.qZA()),2&_&&(n.xp6(1),n.Q6J("ngIf",t.loading))},dependencies:[g.Ou,p.O5]}),d})()}}]);