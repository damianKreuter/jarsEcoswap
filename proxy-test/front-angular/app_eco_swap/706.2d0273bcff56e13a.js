"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[706],{1706:(F,m,s)=>{s.r(m),s.d(m,{DonacionesModule:()=>y});var p=s(4755),h=s(1531),f=s(8988),C=s(8088),v=s(5226),g=s.n(v),n=s(2223),D=s(5580),x=s(8628),O=s(3073),_=s(4303),A=s(430),M=s(1728),r=s(3148),b=s(7876),I=s(9229);function P(a,c){if(1&a){const e=n.EpF();n.TgZ(0,"div",16)(1,"button",17),n.NdJ("click",function(){n.CHM(e);const t=n.oxw(2);return n.KtG(t.selectDonaciones())}),n._uU(2," SELECCIONAR DONACIONES PARA ENVIAR "),n.qZA(),n.TgZ(3,"button",18),n.NdJ("click",function(){n.CHM(e);const t=n.oxw(2);return n.KtG(t.cancelSelect())}),n._uU(4," CANCELAR "),n.qZA(),n.TgZ(5,"button",19),n.NdJ("click",function(){n.CHM(e);const t=n.oxw(2);return n.KtG(t.confirmSelectedCards())}),n._uU(6," CONFIRMAR SELECCI\xd3N "),n.qZA()()}if(2&a){const e=n.oxw(2);n.xp6(1),n.Q6J("disabled",e.selectingMode),n.xp6(2),n.Q6J("disabled",!e.selectingMode),n.xp6(2),n.Q6J("disabled",!e.selectingMode||0==e.selectedCards.length)}}function T(a,c){1&a&&(n.TgZ(0,"div",20),n._uU(1," No ten\xe9s donaciones pendientes de env\xedo! "),n.qZA())}function E(a,c){if(1&a&&(n.YNc(0,P,7,3,"div",14),n.YNc(1,T,2,0,"div",15)),2&a){const e=n.oxw();n.Q6J("ngIf",e.showButtons()),n.xp6(1),n.Q6J("ngIf",!e.showButtons())}}function w(a,c){if(1&a){const e=n.EpF();n.TgZ(0,"div")(1,"app-deck",21),n.NdJ("modalClosed",function(t){n.CHM(e);const i=n.oxw();return n.KtG(i.cardModalClosed(t))})("statusChanged",function(){n.CHM(e);const t=n.oxw();return n.KtG(t.getDonaciones())})("cardSelected",function(t){n.CHM(e);const i=n.oxw();return n.KtG(i.selectCard(t))})("cardUnselected",function(t){n.CHM(e);const i=n.oxw();return n.KtG(i.unselectCard(t))}),n.qZA()()}if(2&a){const e=n.oxw();n.xp6(1),n.Q6J("cardList",e.donacionesCardList)}}function N(a,c){1&a&&(n.TgZ(0,"div",22),n._uU(1," No hay ninguna donaci\xf3n para mostrar! "),n.qZA())}const L=[{path:"",component:(()=>{class a{constructor(e,o,t,i){this.dialog=e,this.donacionesService=o,this.showErrorService=t,this.logisticaService=i,this.donaciones=[],this.donacionesCardList=[],this.loading=!1,this.selectingMode=!1,this.selectedCards=[],this.userOrders=[],this.getDonaciones(),this.screenWidth=window.innerWidth>0?window.innerWidth:screen.width}getDonaciones(){this.loading=!0,this.donaciones.splice(0),this.logisticaService.obtenerMisOrdenes("donaciones").subscribe({next:e=>{e.length>0&&(this.userOrders=e)}}),this.donacionesService.getMisDonaciones().subscribe({next:e=>{e?(this.donaciones=e,this.donaciones.map(o=>{o.idDonacion&&(o.last_status=o.estado),o.imagenes&&(o.parsedImagenes=o.imagenes.split("|"))})):this.showErrorService.show("Error!","No se encontr\xf3 la informaci\xf3n de tus donaciones. Intent\xe1 nuevamente m\xe1s tarde.")},error:e=>{console.log(e),this.loading=!1},complete:()=>this.generateCardList()})}generateCardList(){this.donacionesCardList.splice(0),this.donaciones.sort((o,t)=>new Date(t.fechaDonacion).getTime()-new Date(o.fechaDonacion).getTime());const e=[];for(const o of this.donaciones){let t="";for(const[u,l]of o.caracteristicaDonacion.entries())0==u?t=l.caracteristica:t+=" - "+l.caracteristica;const i=this.userOrders.some(u=>u.productosADonarDeOrdenList.some(l=>l.idDonacion==o.idDonacion)),d={id:o.idDonacion,imagen:o.parsedImagenes?o.parsedImagenes[0]:"no_image",titulo:o.descripcion,valorPrincipal:`${o.cantidadDonacion} ${1==o.cantidadDonacion?"unidad":"unidades"} de ${o.producto.descripcion}`,valorSecundario:t,fecha:o.fechaDonacion,usuario:{id:o.producto.colectaDTO.fundacionDTO.usuarioDTO.idUsuario,imagen:o.producto.colectaDTO.fundacionDTO.usuarioDTO.avatar,nombre:o.producto.colectaDTO.fundacionDTO.nombre,puntaje:o.producto.colectaDTO.fundacionDTO.puntaje,localidad:o.producto.colectaDTO.fundacionDTO.direcciones[0].localidad},action:"access",buttons:this.getButtonsForCard(o,i),estado:"RECIBIDO"==o.estadoEnvio?"RECIBIDA":o.estadoDonacion.replace("_"," "),idAuxiliar:o.producto.colectaDTO.idColecta,codigo:"Donaci\xf3n",estadoAux:o.estadoEnvio};e.push(d),this.loading=!1}this.donacionesCardList=e}getButtonsForCard(e,o){return"RECIBIDO"==e.estadoEnvio||"RECIBIDA"==e.estadoDonacion?[{name:"OPINAR",icon:"rate_review",color:"opinion",status:"OPINAR",action:"opinar"}]:"APROBADA"==e.estadoDonacion?o?[{name:"Ver env\xedo",icon:"local_shipping",color:"info",status:"INFO",action:"ver_envio"}]:[{name:"Configurar env\xedo",icon:"local_shipping",color:"info",status:"INFO",action:"configurar_envio"},{name:"Llevar en persona",icon:"directions_walk",color:"info",status:"EN_ESPERA",action:"change_status"}]:"PENDIENTE"==e.estadoDonacion?[{name:"CANCELAR",icon:"close",color:"warn",status:"CANCELADA",action:"change_status"}]:[]}selectDonaciones(){g().fire({title:"Configur\xe1 tu env\xedo!",text:"Seleccion\xe1 las tarjetas de tus donaciones haciendo click en ellas, vas a ver que las que seleccionen se pintar\xe1n. Record\xe1 que solo pod\xe9s seleccionar donaciones a una misma colecta. Una vez que termines, clicke\xe1 el bot\xf3n CONFIRMAR SELECCI\xd3N.",icon:"info",confirmButtonText:"\xa1VAMOS!"});const e=this.donacionesCardList;e.map(o=>{const t=this.userOrders.some(i=>i.productosADonarDeOrdenList.some(d=>d.idDonacion==o.id));"APROBADA"!=o.estado||t?o.buttons=[]:(o.action="select",o.codigo="Donaci\xf3n",o.buttons=[{name:"Agregar",icon:"add",color:"info",status:"INFO",action:"add_or_remove"}])}),this.donacionesCardList=e,this.selectingMode=!0}showButtons(){return!!this.donacionesCardList.some(e=>"APROBADA"==e.estado)}selectCard(e){const o=this.donacionesCardList.find(t=>t.id==e);if(o)if(0==this.selectedCards.length){this.colectaParaEnvio=o.idAuxiliar,this.donacionesCardList.map(i=>{i.id==e&&(i.isSelected=!0)}),this.selectedCards.push(o);const t=this.donacionesCardList;t.map(i=>{i.idAuxiliar!=this.colectaParaEnvio?(i.action="detail",i.codigo=void 0,i.buttons=[]):this.selectedCards.includes(o)&&i.id==o.id&&(i.buttons=[{name:"Quitar",icon:"remove",color:"info",status:"INFO",action:"add_or_remove"}])}),this.donacionesCardList=t}else this.colectaParaEnvio!=o.idAuxiliar?g().fire("\xa1Colecta distinta!","No pod\xe9s seleccionar distintas colectas para un mismo env\xedo","warning"):(this.selectedCards.push(o),this.donacionesCardList.map(t=>{t.id==o.id&&(t.buttons=[{name:"Quitar",icon:"remove",color:"info",status:"INFO",action:"add_or_remove"}])}))}unselectCard(e){if(this.donacionesCardList.find(t=>t.id==e))if(1==this.selectedCards.length){this.colectaParaEnvio=void 0;const t=this.donacionesCardList;t.map(i=>{const d=this.userOrders.find(u=>u.productosADonarDeOrdenList.some(l=>l.idDonacion==i.id));console.log(i,d),"APROBADA"!=i.estado||d?(i.action="detail",i.codigo=void 0,i.buttons=[]):(i.action="select",i.codigo="Donaci\xf3n",i.buttons=[{name:"Agregar",icon:"add",color:"info",status:"INFO",action:"add_or_remove"}])}),this.donacionesCardList=t,this.selectedCards=[]}else{const t=this.selectedCards.filter(i=>i.id!=e);this.selectedCards=t,this.donacionesCardList.map(i=>{i.id==e&&(i.action="select",i.codigo="Donaci\xf3n",i.buttons=[{name:"Agregar",icon:"add",color:"info",status:"INFO",action:"add_or_remove"}])})}this.donacionesCardList.map(t=>{t.id==e&&(t.isSelected=!1)})}cancelSelect(){this.selectedCards=[],this.selectingMode=!1;const e=this.donacionesCardList;e.map(o=>{const t=this.userOrders.find(i=>i.productosADonarDeOrdenList.some(d=>o.id==d.idDonacion));o.action="detail",o.codigo=void 0,o.buttons="APROBADA"==o.estado&&t?[{name:"Ver env\xedo",icon:"local_shipping",color:"info",status:"INFO",action:"ver_envio"}]:[]}),this.donacionesCardList=e,this.selectedCards=[]}confirmSelectedCards(){const e=this.donaciones.filter(t=>this.selectedCards.some(i=>i.id==t.idDonacion));this.dialog.open(f.o,{maxWidth:"60vw",maxHeight:"70vh",width:"100%",panelClass:"full-screen-modal",data:{cards:e}}).afterClosed().subscribe(t=>{console.log("closed",t),t&&this.getDonaciones()})}zoomImage(e){g().fire({html:`<img src="${e}" style="width: 100%"/>`,showConfirmButton:!1,showCloseButton:!0})}openDialog(){this.dialog.open(C.G,{maxWidth:"70vw",maxHeight:"60vh",height:"100%",width:"100%",panelClass:"full-screen-modal"})}getImage(e){return this.donacionesService.getImagen(e)}cardModalClosed(e){e.result&&this.cancelSelect()}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(D.uw),n.Y36(x.M),n.Y36(O.x),n.Y36(_.C))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-donaciones"]],decls:18,vars:4,consts:[["title","Mis Donaciones"],["id","main-donaciones",1,"app-main-div"],[1,"dense-3"],["ngbAccordion","",2,"min-width","255px"],["accordion","ngbAccordion"],["ngbAccordionItem","first",3,"collapsed","disabled"],["first","ngbAccordionItem"],["ngbAccordionHeader",""],["ngbAccordionButton","",1,"bg-transparent","accordion-header-button"],[2,"margin-left","10px"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[4,"ngIf"],["style","margin: 10%; text-align: center;",4,"ngIf"],["class","buttons",4,"ngIf"],["style","min-width: 210px; margin-bottom: 20px; text-align: center;",4,"ngIf"],[1,"buttons"],["mat-fab","","extended","",1,"long-text",3,"disabled","click"],["mat-fab","","extended","",2,"background-color","var(--light-grey)",3,"disabled","click"],["mat-fab","","extended","",2,"background-color","var(--info)",3,"disabled","click"],[2,"min-width","210px","margin-bottom","20px","text-align","center"],["app","donaciones",3,"cardList","modalClosed","statusChanged","cardSelected","cardUnselected"],[2,"margin","10%","text-align","center"]],template:function(e,o){1&e&&(n._UZ(0,"app-header",0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3,4)(5,"div",5,6)(7,"h2",7)(8,"button",8)(9,"mat-icon"),n._uU(10,"local_shipping"),n.qZA(),n.TgZ(11,"span",9),n._uU(12,"Env\xedo"),n.qZA()()(),n.TgZ(13,"div",10)(14,"div",11),n.YNc(15,E,2,2,"ng-template"),n.qZA()()()()(),n.YNc(16,w,2,1,"div",12),n.YNc(17,N,2,0,"div",13),n.qZA()),2&e&&(n.xp6(5),n.Q6J("collapsed",!1)("disabled",o.screenWidth>768),n.xp6(11),n.Q6J("ngIf",o.donacionesCardList.length>0),n.xp6(1),n.Q6J("ngIf",0==o.donacionesCardList.length))},dependencies:[p.O5,A.Hw,M.cs,r.fD,r.QQ,r.VE,r.I,r.fA,r.ud,b.G,I.o],styles:["#main-donaciones[_ngcontent-%COMP%]{padding:2%;display:grid;grid-template-columns:1fr 5fr;gap:20px}#main-donaciones[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{min-width:210px;display:flex;flex-direction:column;align-items:center;gap:15px}#main-donaciones[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .long-text[_ngcontent-%COMP%]{background-color:var(--info)}.donacion-example-header-image[_ngcontent-%COMP%]{background-image:url(perfiles-24.8b8b387b71873795.jpg);background-size:cover}.donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr 1fr;gap:1rem;padding:16px}.donacion-card-content[_ngcontent-%COMP%]   .donacion-aceptada[_ngcontent-%COMP%]{font-weight:700;color:var(--success)}.donacion-card-content[_ngcontent-%COMP%]   .donacion-rechazada[_ngcontent-%COMP%]{font-weight:700;color:var(--warn)}.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin:5px}.donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer}.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]{display:flex;align-items:center}.donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{margin:5px}@media (min-width: 0px) and (max-width: 768px){#main-donaciones[_ngcontent-%COMP%]{grid-template-columns:1fr!important}}@media (min-width: 769px){.long-text[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}}@media (min-width: 768px){.accordion-button[_ngcontent-%COMP%]:after{display:none}}"]}),a})()}];let S=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[h.Bz.forChild(L),h.Bz]}),a})();var R=s(9433),B=s(9499),Z=s(4466);let y=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[p.ez,S,R.q,r.IJ,B.O,Z.m]}),a})()}}]);