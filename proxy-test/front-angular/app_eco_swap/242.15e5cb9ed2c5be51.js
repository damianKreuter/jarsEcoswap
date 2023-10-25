"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[242],{6242:(ii,g,a)=>{a.r(g),a.d(g,{PublicacionesModule:()=>X});var u=a(4755),m=a(1531),P=a(8675),_=a(4004),C=a(5226),x=a.n(C),i=a(2223),T=a(4377),s=a(9401),A=a(4893),O=a(3073),M=a(2777),Z=a(4666),f=a(9114),L=a(430),I=a(9609),y=a(1728),F=a(787),J=a(1217),h=a(8995),p=a(6996),S=a(3649),b=a(4867),r=a(3148),U=a(7876),N=a(4984),w=a(9229);function Q(n,c){if(1&n){const o=i.EpF();i.TgZ(0,"mat-chip-row",36),i.NdJ("removed",function(){const l=i.CHM(o).$implicit,d=i.oxw(4);return i.KtG(d.remove(l))}),i._uU(1),i.TgZ(2,"button",37)(3,"mat-icon",38),i._uU(4,"cancel"),i.qZA()()()}if(2&n){const o=c.$implicit;i.Q6J("matTooltip",o),i.xp6(1),i.hij(" ",o," "),i.xp6(1),i.uIk("aria-label","eliminar "+o)}}function D(n,c){if(1&n&&(i.TgZ(0,"mat-option",39),i._uU(1),i.qZA()),2&n){const o=c.$implicit;i.Q6J("value",o),i.xp6(1),i.hij(" ",o," ")}}function R(n,c){if(1&n&&(i.TgZ(0,"mat-option",39),i._uU(1),i.qZA()),2&n){const o=c.$implicit;i.Q6J("value",o.nombre),i.xp6(1),i.hij(" ",o.descripcion," ")}}function Y(n,c){if(1&n){const o=i.EpF();i.TgZ(0,"form",21)(1,"mat-form-field",22)(2,"mat-label"),i._uU(3,"Localidades"),i.qZA(),i.TgZ(4,"mat-chip-grid",23,24),i.YNc(6,Q,5,3,"mat-chip-row",25),i.TgZ(7,"input",26,27),i.NdJ("matChipInputTokenEnd",function(e){i.CHM(o);const l=i.oxw(3);return i.KtG(l.add(e))}),i.qZA()(),i.TgZ(9,"mat-autocomplete",28,29),i.NdJ("optionSelected",function(e){i.CHM(o);const l=i.MAs(8);return i.oxw(3).selected(e),i.KtG(l.value="")}),i.YNc(11,D,2,2,"mat-option",30),i.ALo(12,"async"),i.qZA()(),i.TgZ(13,"mat-form-field",31)(14,"mat-label"),i._uU(15,"Tipo del Producto"),i.qZA(),i.TgZ(16,"mat-select",32),i.YNc(17,R,2,2,"mat-option",30),i.qZA()(),i.TgZ(18,"div",33)(19,"button",34),i.NdJ("click",function(){i.CHM(o);const e=i.oxw(3);return i.KtG(e.filtrarPublicaciones())}),i._uU(20,"FILTRAR"),i.qZA(),i.TgZ(21,"button",35),i.NdJ("click",function(){i.CHM(o);const e=i.oxw(3);return i.KtG(e.limpiarFiltros())}),i._uU(22,"LIMPIAR"),i.qZA()()()}if(2&n){const o=i.MAs(5),t=i.MAs(10),e=i.oxw(3);i.Q6J("formGroup",e.formFiltros),i.xp6(6),i.Q6J("ngForOf",e.localidades),i.xp6(1),i.Q6J("matChipInputFor",o)("matAutocomplete",t),i.xp6(4),i.Q6J("ngForOf",i.lcZ(12,6,e.filteredLocalidades)),i.xp6(6),i.Q6J("ngForOf",e.tipos_productos)}}function B(n,c){if(1&n){const o=i.EpF();i.TgZ(0,"div",40)(1,"mat-radio-group",41),i.NdJ("change",function(e){i.CHM(o);const l=i.oxw(3);return i.KtG(l.filterByStatus(e))}),i.TgZ(2,"mat-radio-button",42),i._uU(3,"Todas"),i.qZA(),i.TgZ(4,"mat-radio-button",43),i._uU(5,"Abiertas"),i.qZA(),i.TgZ(6,"mat-radio-button",44),i._uU(7,"Cerradas"),i.qZA()()()}}function E(n,c){if(1&n&&(i.YNc(0,Y,23,8,"form",19),i.YNc(1,B,8,0,"div",20)),2&n){const o=i.oxw(2);i.Q6J("ngIf","all"==o.origin),i.xp6(1),i.Q6J("ngIf","myPublicaciones"==o.origin)}}function G(n,c){1&n&&(i.TgZ(0,"div",10,11)(2,"div",12,13)(4,"h2",14)(5,"button",15)(6,"mat-icon"),i._uU(7,"tune"),i.qZA(),i.TgZ(8,"span",16),i._uU(9,"Filtros"),i.qZA()()(),i.TgZ(10,"div",17)(11,"div",18),i.YNc(12,E,2,2,"ng-template"),i.qZA()()()()),2&n&&(i.xp6(2),i.Q6J("collapsed",!1))}function H(n,c){1&n&&(i.TgZ(0,"div",33),i._uU(1,"No hay publicaciones para mostrar"),i.qZA())}function $(n,c){if(1&n&&i._UZ(0,"app-deck",45),2&n){const o=i.oxw();i.Q6J("cardList",o.filteredPublicacionesCardList)}}const j=[{path:"",component:(()=>{class n{constructor(o,t,e,l,d,W,k){this.router=o,this.auth=t,this.fb=e,this.productosService=l,this.showErrorService=d,this.truequesService=W,this.comprasService=k,this.origin="all",this.tipos_productos=[],this.loading=!0,this.publicacionesToShow=[],this.localidades=[],this.allLocalidades=[],this.publicacionesCardList=[],this.filteredPublicacionesCardList=[],this.trueques=[],this.formFiltros=e.group({fundacion:[""],localidad:[""],tipoProducto:[""]}),"/mis-publicaciones"==o.url&&(this.origin="myPublicaciones"),"/mis-compras"==o.url&&(this.origin="myCompras"),this.filteredLocalidades=this.formFiltros.controls.localidad.valueChanges.pipe((0,P.O)(""),(0,_.U)(v=>v?this._filterLocalidad(v):this.allLocalidades.slice()))}ngOnInit(){this.getTiposProductos(),this.getLocalidades(),this.filtrarPublicaciones()}addPublicacion(){this.auth.isUserLoggedIn?this.router.navigate(["form-publicacion"]):x().fire({title:"\xa1Necesit\xe1s una cuenta!",text:"Para poder crear una publicaci\xf3n, ten\xe9s que usar tu cuenta.",icon:"warning",confirmButtonText:"Iniciar sesi\xf3n",showCancelButton:!0,cancelButtonText:"Cancelar"}).then(({isConfirmed:o})=>{o&&this.router.navigate(["login"])})}getTiposProductos(){this.productosService.getTiposProductos().subscribe({next:o=>this.tipos_productos=o,error:o=>console.error("error",o)})}filtrarPublicaciones(){if(this.loading=!0,"all"==this.origin){this.filtros={};const o=this.formFiltros.controls.tipoProducto.value;this.localidades.length>0&&(this.filtros.localidades=this.localidades),o&&(this.filtros.tipoProducto=o),console.log("filtro",this.filtros),this.truequesService.getPublicaciones(this.filtros).subscribe({next:t=>{console.log(t),this.publicacionesToShow=t,this.publicacionesToShow.map(e=>{e.parsedImagenes=e.imagenes.split("|")})},complete:()=>this.generateCardList(),error:()=>this.loading=!1})}else"myPublicaciones"==this.origin?this.truequesService.getMisPublicaciones().subscribe({next:o=>{console.log(o),this.publicacionesToShow=o,this.publicacionesToShow.map(t=>{t.parsedImagenes=t.imagenes.split("|")})},complete:()=>{this.truequesService.getTruequesParticular(this.publicacionesToShow[0].particularDTO.idParticular).subscribe({next:o=>{this.trueques=o},complete:()=>this.generateCardList()})},error:()=>this.loading=!1}):this.comprasService.getMyCompras().subscribe({next:o=>{console.log(o);for(const t of o)this.publicacionesToShow.push(t.publicacionDTO);this.publicacionesToShow.map(t=>{t.parsedImagenes=t.imagenes.split("|")})},complete:()=>this.generateCardList(),error:()=>this.loading=!1})}generateCardList(){this.publicacionesCardList.splice(0);const o=[];for(const t of this.publicacionesToShow){let e;if("CERRADA"==t.estadoPublicacion){const l=this.trueques.find(d=>"APROBADO"==d.estadoTrueque&&d.publicacionDTOpropuesta.idPublicacion==t.idPublicacion);l&&(e=l.publicacionDTOorigen.idPublicacion)}o.push({id:t.idPublicacion,imagen:t.parsedImagenes?t.parsedImagenes[0]:"no_image",titulo:t.titulo,valorPrincipal:`$${t.valorTruequeMin} - $${t.valorTruequeMax}`,valorSecundario:t.particularDTO.accessToken&&t.precioVenta?`$${t.precioVenta}`:void 0,fecha:t.fechaPublicacion,usuario:{imagen:t.particularDTO.usuarioDTO.avatar,nombre:t.particularDTO.nombre+" "+t.particularDTO.apellido,puntaje:t.particularDTO.puntaje,localidad:t.particularDTO.direcciones[0].localidad},action:e?"trueque":"myPublicaciones"==this.origin?"list":"access",idAuxiliar:e||void 0,buttons:[],estado:"myPublicaciones"==this.origin?t.estadoPublicacion:void 0,codigo:"Publicaci\xf3n"})}this.publicacionesCardList=o,this.filteredPublicacionesCardList=this.publicacionesCardList,this.loading=!1}limpiarFiltros(){this.formFiltros.reset(),this.localidades=[],this.filtrarPublicaciones()}getLocalidades(){fetch("https://apis.datos.gob.ar/georef/api/localidades?orden=id&provincia=02&max=50&campos=nombre").then(t=>t.json()).then(t=>{for(const e of t.localidades)this.allLocalidades.push(e.nombre)}).catch(t=>console.error(t))}add(o){const t=(o.value||"").trim();t&&this.allLocalidades.some(e=>e.toUpperCase()==t.toUpperCase())&&this.localidades.push(t),o.chipInput.clear(),this.formFiltros.controls.localidad.setValue(null),console.log("add",this.formFiltros.controls.localidad.value)}remove(o){const t=this.localidades.indexOf(o);t>=0&&this.localidades.splice(t,1)}selected(o){this.localidades.push(o.option.viewValue),this.formFiltros.controls.localidad.setValue("")}_filterLocalidad(o){const t=o.toLowerCase();return this.allLocalidades.filter(e=>e.toLowerCase().includes(t))}filterByStatus(o){const t="open"==o.value?"ABIERTA":"closed"==o.value?"CERRADA":["ABIERTA","CERRADA"];this.filteredPublicacionesCardList=this.publicacionesCardList.filter(e=>e.estado&&t.includes(e.estado))}}return n.\u0275fac=function(o){return new(o||n)(i.Y36(m.F0),i.Y36(T.e),i.Y36(s.qu),i.Y36(A.k),i.Y36(O.x),i.Y36(M.x),i.Y36(Z.K))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-trueque"]],decls:12,vars:5,consts:[[3,"title"],["id","main-publicaciones",1,"app-main-div"],[1,"dense-3"],["ngbAccordion","",4,"ngIf"],[1,"row"],[3,"loading"],["style","text-align: center;",4,"ngIf"],["app","publicaciones",3,"cardList",4,"ngIf"],[1,"floating-button-container"],["mat-fab","","color","primary","aria-label","Agregar Publicaci\xf3n","matTooltip","Agregar Publicaci\xf3n","matTooltipPosition","before",3,"click"],["ngbAccordion",""],["accordion","ngbAccordion"],["ngbAccordionItem","first",3,"collapsed"],["first","ngbAccordionItem"],["ngbAccordionHeader",""],["ngbAccordionButton","",1,"bg-transparent","accordion-header-button"],[2,"margin-left","10px"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["id","form-filtros",3,"formGroup",4,"ngIf"],["style","min-width: 210px;",4,"ngIf"],["id","form-filtros",3,"formGroup"],["appearance","outline",1,"example-chip-list"],["aria-label","Localidad"],["chipGrid",""],[3,"matTooltip","removed",4,"ngFor","ngForOf"],["placeholder","Localidad...","formControlName","localidad","matInput","",3,"matChipInputFor","matAutocomplete","matChipInputTokenEnd"],["localidadInput",""],[3,"optionSelected"],["autoLocalidad","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline"],["formControlName","tipoProducto"],[2,"text-align","center"],["mat-fab","","extended","","color","primary",3,"click"],["mat-fab","","extended","",2,"background-color","white",3,"click"],[3,"matTooltip","removed"],["matChipRemove",""],[2,"height","16px"],[3,"value"],[2,"min-width","210px"],["value","all",2,"display","flex","flex-direction","column",3,"change"],["value","all"],["value","open"],["value","closed"],["app","publicaciones",3,"cardList"]],template:function(o,t){1&o&&(i._UZ(0,"app-header",0),i.TgZ(1,"div",1)(2,"div",2),i.YNc(3,G,13,1,"div",3),i.qZA(),i.TgZ(4,"div",4),i._UZ(5,"app-spinner",5),i.YNc(6,H,2,0,"div",6),i.YNc(7,$,1,1,"app-deck",7),i.qZA(),i.TgZ(8,"div",8)(9,"button",9),i.NdJ("click",function(){return t.addPublicacion()}),i.TgZ(10,"mat-icon"),i._uU(11,"add"),i.qZA()()()()),2&o&&(i.Q6J("title","all"==t.origin?"Publicaciones":"myPublicaciones"==t.origin?"Mis Publicaciones":"Mis Compras"),i.xp6(3),i.Q6J("ngIf","myCompras"!=t.origin),i.xp6(2),i.Q6J("loading",t.loading),i.xp6(1),i.Q6J("ngIf",0==t.filteredPublicacionesCardList.length&&!t.loading),i.xp6(1),i.Q6J("ngIf",t.filteredPublicacionesCardList.length>0&&!t.loading))},dependencies:[u.sg,u.O5,f.KE,f.hX,L.Hw,I.Nt,y.cs,F.gD,J.ey,h.XC,h.ZL,p.RA,p.oH,p.qH,p.z3,S.gM,b.VQ,b.U0,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,r.fD,r.QQ,r.VE,r.I,r.fA,r.ud,U.G,N.O,w.o,u.Ov],styles:["#main-publicaciones[_ngcontent-%COMP%]{padding:2%;display:grid;grid-template-columns:1fr 5fr;gap:20px}#main-publicaciones[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{padding:10px 0}#main-publicaciones[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}#main-publicaciones[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]{margin:0}#main-publicaciones[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-header-button[_ngcontent-%COMP%]{height:40px;font-size:14px;padding:10px}#main-publicaciones[_ngcontent-%COMP%]   #form-filtros[_ngcontent-%COMP%]{display:flex;flex-direction:column}#main-publicaciones[_ngcontent-%COMP%]   #form-filtros[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{max-width:100%;padding:5px}#main-publicaciones[_ngcontent-%COMP%]   #form-filtros[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px;height:36px;font-size:12px}#main-publicaciones[_ngcontent-%COMP%]   #form-filtros.localidad-row[_ngcontent-%COMP%]{grid-template-columns:2fr 1fr!important}#main-publicaciones[_ngcontent-%COMP%]   .floating-button-container[_ngcontent-%COMP%]{position:fixed;right:25px;bottom:40px;z-index:999}[_nghost-%COMP%]     .mdc-evolution-chip-set__chips{max-width:100%}[_nghost-%COMP%]     .mat-mdc-standard-chip .mdc-evolution-chip__cell--primary, [_nghost-%COMP%]     .mat-mdc-standard-chip .mdc-evolution-chip__action--primary, [_nghost-%COMP%]     .mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:hidden}@media (min-width: 0px) and (max-width: 768px){#main-publicaciones[_ngcontent-%COMP%]{grid-template-columns:1fr!important}}"]}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[m.Bz.forChild(j),m.Bz]}),n})();var K=a(9433),V=a(9499),z=a(4466);let X=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[u.ez,q,K.q,r.IJ,V.O,z.m]}),n})()}}]);