"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[706],{1706:(T,r,t)=>{t.r(r),t.d(r,{DonacionesModule:()=>A});var d=t(4755),l=t(1531),m=t(8088),p=t(5226),h=t.n(p),e=t(2223),u=t(5580),f=t(8628),C=t(4377),v=t(3073),D=t(7876),M=t(9229);function O(o,i){if(1&o&&(e.TgZ(0,"div"),e._UZ(1,"app-deck",3),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("cardList",n.donacionesCardList)("fullScreenWidth",!0)}}const P=[{path:"",component:(()=>{class o{constructor(n,a,s,c){this.dialog=n,this.donacionesService=a,this.auth=s,this.showErrorService=c,this.donaciones=[],this.donacionesCardList=[],this.loading=!1,this.getDonaciones()}getDonaciones(){this.loading=!0,this.donacionesService.getMisDonaciones().subscribe({next:n=>{n?(this.donaciones=n,this.donaciones.map(a=>{a.idDonacion&&(a.last_status=a.estado),a.imagenes&&(a.parsedImagenes=a.imagenes.split("|"))})):this.showErrorService.show("Error!","No se encontr\xf3 la informaci\xf3n de tus donaciones. Intent\xe1 nuevamente m\xe1s tarde.")},error:n=>{console.log(n),this.loading=!1},complete:()=>this.generateCardList()})}generateCardList(){this.donacionesCardList.splice(0);for(const n of this.donaciones){let a="";for(const[c,g]of n.caracteristicaDonacion.entries())0==c?a=g.caracteristica:a+=" - "+g.caracteristica;this.donacionesCardList.push({id:n.idDonacion,imagen:n.parsedImagenes?n.parsedImagenes[0]:"no_image",titulo:n.descripcion,valorPrincipal:`${n.cantidadDonacion} unidades de ${n.producto.descripcion}`,valorSecundario:a,fecha:n.fechaDonacion,usuario:{imagen:"assets/perfiles/perfiles-17.jpg",nombre:n.particularDTO.nombre+" "+n.particularDTO.apellido,puntaje:n.particularDTO.puntaje,localidad:n.particularDTO.direcciones[0].localidad},action:"detail",buttons:[{name:"CANCELAR",icon:"close",color:"warn",status:"CANCELADA"}],estado:n.estadoDonacion}),this.loading=!1}}zoomImage(n){h().fire({html:`<img src="${n}" style="width: 100%"/>`,showConfirmButton:!1,showCloseButton:!0})}openDialog(){this.dialog.open(m.G,{maxWidth:"70vw",maxHeight:"60vh",height:"100%",width:"100%",panelClass:"full-screen-modal"})}getImage(n){return this.donacionesService.getImagen(n)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(u.uw),e.Y36(f.M),e.Y36(C.e),e.Y36(v.x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-donaciones"]],decls:3,vars:1,consts:[["title","Mis Donaciones"],[1,"app-main-div"],[4,"ngIf"],["app","donaciones",3,"cardList","fullScreenWidth"]],template:function(n,a){1&n&&(e._UZ(0,"app-header",0),e.TgZ(1,"div",1),e.YNc(2,O,2,2,"div",2),e.qZA()),2&n&&(e.xp6(2),e.Q6J("ngIf",a.donacionesCardList.length>0))},dependencies:[d.O5,D.G,M.o],styles:[".donacion-example-header-image[_ngcontent-%COMP%]{background-image:url(perfiles-24.8b8b387b71873795.jpg);background-size:cover}.donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr 1fr;gap:1rem;padding:16px}.donacion-card-content[_ngcontent-%COMP%]   .donacion-aceptada[_ngcontent-%COMP%]{font-weight:700;color:var(--success)}.donacion-card-content[_ngcontent-%COMP%]   .donacion-rechazada[_ngcontent-%COMP%]{font-weight:700;color:var(--warn)}.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin:5px}.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer}.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]{display:flex;align-items:center}.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{margin:5px}"]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(P),l.Bz]}),o})();var L=t(2611),y=t(3148),I=t(9499),S=t(4466);let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,x,L.q,y.IJ,I.O,S.m]}),o})()}}]);