"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[692],{692:(G,u,c)=>{c.r(u),c.d(u,{ColectaModule:()=>k});var d=c(4755),l=c(1531),C=c(5226),g=c.n(C),n=c(2223),_=c(4377),O=c(8628),v=c(3073),x=c(4893),M=c(5763),P=c(430),T=c(1728),r=c(6012),w=c(7876),D=c(4984),y=c(6247);function A(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"mat-icon",19),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.showDireccion(a.colecta.fundacionDTO.usuario))}),n._uU(1,"place"),n.qZA()}}function Z(o,i){1&o&&(n.TgZ(0,"mat-icon",20),n._uU(1,"star"),n.qZA())}function b(o,i){1&o&&(n.TgZ(0,"mat-icon",21),n._uU(1,"star"),n.qZA())}function I(o,i){if(1&o&&(n.TgZ(0,"div",22),n._uU(1),n.qZA()),2&o){const t=i.$implicit;n.xp6(1),n.AsE(" ",t.descripcion,": ",t.cantidadRecibida," ")}}function E(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"button",23),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.donar())}),n._uU(1,"QUIERO DONAR"),n.qZA()}}const p=function(){return[]};function U(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"mat-card")(1,"mat-card-header",3)(2,"div",4)(3,"div",5),n._UZ(4,"div",6),n.TgZ(5,"div")(6,"mat-card-title",7),n._uU(7),n.YNc(8,A,2,0,"mat-icon",8),n.qZA(),n.TgZ(9,"mat-card-subtitle"),n.YNc(10,Z,2,0,"mat-icon",9),n.YNc(11,b,2,0,"mat-icon",10),n.qZA()()(),n.TgZ(12,"div"),n._uU(13),n.ALo(14,"date"),n.qZA()()(),n.TgZ(15,"mat-card-content",11)(16,"img",12),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.zoomImage(a.colecta.imagen?a.colecta.imagen.split("/").at(-1):"assets/fundacion.png"))}),n.qZA(),n.TgZ(17,"div")(18,"h2",13),n._uU(19),n.qZA(),n.TgZ(20,"div",14),n._uU(21),n.qZA(),n.TgZ(22,"div",15)(23,"h4")(24,"u"),n._uU(25,"Productos"),n.qZA(),n._uU(26,":"),n.qZA(),n.YNc(27,I,2,2,"div",16),n.qZA()()(),n.TgZ(28,"mat-card-actions",17),n.YNc(29,E,2,0,"button",18),n.qZA()()}if(2&o){const t=n.oxw();n.xp6(7),n.hij(" ",t.colecta.fundacionDTO.nombre," "),n.xp6(1),n.Q6J("ngIf",t.colecta.fundacionDTO.usuario),n.xp6(2),n.Q6J("ngForOf",n.DdM(13,p).constructor(t.colecta.fundacionDTO.puntaje||0)),n.xp6(1),n.Q6J("ngForOf",n.DdM(14,p).constructor(5-(t.colecta.fundacionDTO.puntaje||0))),n.xp6(2),n.Oqu(n.xi3(14,10,t.colecta.fechaSolicitud,"dd/MM/yyyy")),n.xp6(3),n.Q6J("src",t.colecta.imagen?t.colecta.imagen:"assets/fundacion.png",n.LSH),n.xp6(3),n.Oqu(t.colecta.titulo),n.xp6(2),n.hij(" ",t.colecta.descripcion," "),n.xp6(6),n.Q6J("ngForOf",t.colecta.productos),n.xp6(2),n.Q6J("ngIf",!(t.userData.isLoggedIn&&!t.userData.isSwapper))}}function S(o,i){1&o&&(n.TgZ(0,"div",27),n._uU(1,"Esta colecta no tiene donaciones a\xfan!"),n.qZA())}const N=function(o){return{name:"cancelar",icon:"close",color:"warn",status:"CANCELADA",disabled:o}},F=function(o){return[o]},q=function(o){return{name:"aceptar",icon:"check",color:"primary",status:"APROBADA",disabled:o}},J=function(o){return{name:"rechazar",icon:"close",color:"warn",status:"RECHAZADA",disabled:o}},Y=function(o){return{name:"recibida",icon:"done_all",color:"primary",status:"RECIBIDA",disabled:o}},B=function(o,i,t){return[o,i,t]};function Q(o,i){if(1&o&&n._UZ(0,"app-card-donacion",28),2&o){const t=i.$implicit,e=n.oxw(2);n.Q6J("donacion",t)("usuarioHeader",t.particularDTO)("buttons",e.userData.isSwapper?n.VKq(5,F,n.VKq(3,N,"PENDIENTE"!=t.estadoDonacion)):n.kEZ(13,B,n.VKq(7,q,"PENDIENTE"!=t.estadoDonacion),n.VKq(9,J,"PENDIENTE"!=t.estadoDonacion),n.VKq(11,Y,"APROBADA"!=t.estadoDonacion)))}}function z(o,i){if(1&o&&(n.TgZ(0,"div")(1,"h3",24),n._uU(2),n.qZA(),n.YNc(3,S,2,0,"div",25),n.YNc(4,Q,1,17,"app-card-donacion",26),n.qZA()),2&o){const t=n.oxw();n.xp6(2),n.hij(" ",t.userData.isSwapper?"Mi donaci\xf3n":"Donaciones"," "),n.xp6(1),n.Q6J("ngIf",0==t.donacionesToShow.length&&!t.loading),n.xp6(1),n.Q6J("ngForOf",t.donacionesToShow)}}const R=[{path:"",component:(()=>{class o{constructor(t,e,a,s,h,V,f){this.route=t,this.router=e,this.auth=a,this.donacionesService=s,this.showErrorService=h,this.productoService=V,this.usuarioService=f,this.id_colecta="",this.donaciones=[],this.loading=!0,this.showDonaciones=!1,this.donacionesToShow=[],this.buttonsCard=[],t.paramMap.subscribe(m=>{console.log(m),this.id_colecta=m.get("id_colecta")||"",this.id_colecta||h.show("Error!","No pudimos encontrar la informaci\xf3n de la colecta que seleccionaste, por favor volv\xe9 a intentarlo m\xe1s tarde.")}),this.userData={isSwapper:a.isUserSwapper(),isLoggedIn:a.isUserLoggedIn},this.userData&&this.userData.isLoggedIn&&f.getUserByID(a.getUserID()).subscribe({next:m=>{this.userInfo=m}})}ngOnInit(){this.getColecta()}getColecta(){this.donacionesService.getColecta(this.id_colecta).subscribe({next:t=>{t?(console.log(t),this.colecta=t,this.colecta.imagen=this.getImage(this.colecta.imagen),this.productoService.getProductosColecta(t.idColecta).subscribe({next:e=>{console.log(e),t.productos=e},error:e=>{console.log("error",e)}}),this.auth.isUserLoggedIn&&this.donacionesService.getDonacionesColecta(this.colecta.idColecta).subscribe({next:e=>{console.log(e),this.donaciones=e,this.donaciones.map(a=>{a.imagenes&&(a.parsedImagenes=a.imagenes.split("|"))}),this.userData.isSwapper?(this.donacionesToShow=this.donaciones.filter(a=>a.particularDTO.idParticular==this.userInfo.particularDTO.idParticular),this.showDonaciones=!0):this.userData&&(this.donacionesToShow=e,this.showDonaciones=!0),console.log(this.showDonaciones)},error:e=>{console.log("error",e)}}),this.loading=!1):this.showErrorService.show("Error!","No se encontr\xf3 la informaci\xf3n de la colecta que seleccionaste. Intent\xe1 nuevamente m\xe1s tarde.")},error:t=>{console.log(t),this.showErrorService.show("Error!","Ocurri\xf3 un error al traer la informaci\xf3n de la colecta que seleccionaste. Intent\xe1 nuevamente m\xe1s tarde.")}})}donar(){this.auth.isUserLoggedIn?g().fire({title:"\xa1Est\xe1s un paso m\xe1s cerca de hacer tu donaci\xf3n!",text:"Te vamos a pedir algunos datos de lo que vas a donar. Es importante que completes la informaci\xf3n requerida para que la fundaci\xf3n conozca lo que vas a donar.",icon:"info",confirmButtonText:"\xa1VAMOS!"}).then(({isConfirmed:t})=>{t&&this.router.navigate(["donacion/"+this.id_colecta])}):g().fire({title:"\xa1Necesit\xe1s una cuenta!",text:"Para poder donar, ten\xe9s que usar tu cuenta.",icon:"warning",confirmButtonText:"Iniciar sesi\xf3n",showCancelButton:!0,cancelButtonText:"Cancelar"}).then(({isConfirmed:t})=>{t&&this.router.navigate(["login"])})}zoomImage(t){t&&g().fire({html:`<img src="${this.getImage(t)}" style="width: 100%"/>`,showConfirmButton:!1,showCloseButton:!0})}showDireccion(t){console.log(t);let e="";for(const s of t.direcciones)s.direccion&&(e+=s.direccion+" "+s.altura);console.log(e);const a=e.split(" ");g().fire({title:"Informaci\xf3n de la fundaci\xf3n",text:e+" https://www.google.com/maps/search/?api=1&query="+a[0]+"+"+a[1],html:`\n\t\t\t<p style="font-weight: 400;"><b>Email: </b>${t.email}</p>\n\t\t\t<p style="font-weight: 500;"><b>Direcci\xf3n: </b>${e}</p>\n\t\t\t<a href="https://www.google.com/maps/search/?api=1&query=${a[0]}+${a[1]}" target="_blank">Ver en Google Maps</a>`,icon:"info"})}getImage(t){return this.donacionesService.getImagen(t)}isArray(t){return t.constructor===Array}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(l.gz),n.Y36(l.F0),n.Y36(_.e),n.Y36(O.M),n.Y36(v.x),n.Y36(x.k),n.Y36(M.i))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-colecta"]],decls:5,vars:3,consts:[["id","main-colecta"],[3,"loading"],[4,"ngIf"],[2,"border-bottom","solid 1px var(--light-grey)","padding-bottom","10px"],[1,"div-header"],[1,"header-info"],["mat-card-avatar","",1,"example-header-image"],[2,"display","flex","align-items","center"],["class","address",3,"click",4,"ngIf"],["color","primary",4,"ngFor","ngForOf"],["class","empty-star",4,"ngFor","ngForOf"],[1,"card-content"],["mat-card-image","",1,"colecta-img",3,"src","click"],[1,"card-title"],[1,"descripcion"],[1,"productos"],["class","producto",4,"ngFor","ngForOf"],[1,"card-button"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],[1,"address",3,"click"],["color","primary"],[1,"empty-star"],[1,"producto"],["mat-raised-button","","color","primary",3,"click"],[2,"margin","20px 0 0 5px","font-weight","bold"],["style","text-align: center;",4,"ngIf"],[3,"donacion","usuarioHeader","buttons",4,"ngFor","ngForOf"],[2,"text-align","center"],[3,"donacion","usuarioHeader","buttons"]],template:function(t,e){1&t&&(n._UZ(0,"app-header"),n.TgZ(1,"div",0),n._UZ(2,"app-spinner",1),n.YNc(3,U,30,15,"mat-card",2),n.YNc(4,z,5,3,"div",2),n.qZA()),2&t&&(n.xp6(2),n.Q6J("loading",e.loading),n.xp6(1),n.Q6J("ngIf",!e.loading&&e.colecta&&e.colecta.fundacionDTO),n.xp6(1),n.Q6J("ngIf",e.showDonaciones&&!e.loading))},dependencies:[d.sg,d.O5,P.Hw,T.lW,r.a8,r.hq,r.kc,r.dn,r.dk,r.G2,r.$j,r.n5,w.G,D.O,y._,d.uU],styles:["#main-colecta[_ngcontent-%COMP%]{padding:2%}#main-colecta[_ngcontent-%COMP%]   .example-header-image[_ngcontent-%COMP%]{background-image:url(fundacion.83cbf2a177069f0a.png);background-size:cover;margin:0 10px 0 0}#main-colecta[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], #main-colecta[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], #main-colecta[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{margin:10px}#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;align-items:flex-end}#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]{display:flex;align-items:center}#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{color:var(--dark-grey);margin-left:10px}#main-colecta[_ngcontent-%COMP%]   .div-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]:hover{color:var(--grey-text);cursor:pointer}#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .colecta-img[_ngcontent-%COMP%]{max-width:40%;margin:auto;border-radius:10px;box-shadow:2px 2px 5px var(--dark-grey)}#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .colecta-img[_ngcontent-%COMP%]:hover{cursor:pointer}#main-colecta[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%]{font-weight:500;font-size:16px;margin-bottom:15px}#main-colecta[_ngcontent-%COMP%]   .card-button[_ngcontent-%COMP%]{align-self:center}#main-colecta[_ngcontent-%COMP%]   .donacion-example-header-image[_ngcontent-%COMP%]{background-image:url(persona.5bfdedb8d26ee878.png);background-size:cover}#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr 1fr;gap:1rem}#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin:5px;border-radius:5px;box-shadow:2px 2px 5px var(--dark-grey)}#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]{display:flex;flex-direction:column}#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px auto;width:150px}#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .aprobada[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500}#main-colecta[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .rechazada[_ngcontent-%COMP%]{color:var(--warn-color)}@media (min-width: 0px) and (max-width: 576px){.card-content[_ngcontent-%COMP%], .donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr!important}}"]}),o})()}];let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild(R),l.Bz]}),o})();var H=c(5110),L=c(3148),K=c(9499),$=c(4466);let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[d.ez,j,H.q,L.IJ,K.O,$.m]}),o})()}}]);