"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[555],{9499:(v,_,a)=>{a.d(_,{O:()=>h});var l=a(4755),g=a(7870),c=a(9401),p=a(3148),C=a(4466),o=a(2223);let h=(()=>{class s{}return s.\u0275fac=function(M){return new(M||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[l.ez,g.q,p.IJ,c.u5,c.UX,C.m]}),s})()},9555:(v,_,a)=>{a.r(_),a.d(_,{FormDonacionModule:()=>H});var l=a(4755),g=a(1531),c=a(9401),p=a(5226),C=a.n(p),o=a(2223),h=a(8628),s=a(4377),f=a(9114),M=a(430),x=a(9609),F=a(8657),Z=a(8467),O=a(1728),A=a(787),T=a(1217),u=a(6012),D=a(3649),y=a(7876),E=a(4984);function U(t,i){if(1&t&&(o.TgZ(0,"mat-option",29),o._uU(1),o.qZA()),2&t){const n=i.$implicit;o.Q6J("value",n.idProducto),o.xp6(1),o.AsE(" ",n.descripcion," ",n.cantidadSolicitada?"(Faltan "+(n.cantidadSolicitada-n.cantidadRecibida)+")":""," ")}}function I(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function b(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function J(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," El campo no puede contener "),o.TgZ(2,"b"),o._uU(3,";"),o.qZA()())}function N(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function w(t,i){if(1&t){const n=o.EpF();o.TgZ(0,"div",30)(1,"mat-form-field"),o._UZ(2,"textarea",31,25),o.YNc(4,J,4,0,"mat-error",9),o.YNc(5,N,2,0,"mat-error",9),o.qZA(),o.TgZ(6,"button",32),o.NdJ("click",function(){const m=o.CHM(n).index,d=o.oxw(2);return o.KtG(d.removeCaracteristica(m))}),o.TgZ(7,"mat-icon"),o._uU(8,"delete"),o.qZA()()()}if(2&t){const n=i.$implicit;o.Q6J("formGroupName",i.index),o.xp6(4),o.Q6J("ngIf",n.get("s_descripcion").hasError("pattern")),o.xp6(1),o.Q6J("ngIf",n.get("s_descripcion").hasError("required"))}}function j(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," La donaci\xf3n debe tener al menos 1 caracter\xedstica "),o.qZA())}function S(t,i){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," La publicaci\xf3n debe tener al menos 1 imagen "),o.qZA())}function q(t,i){if(1&t){const n=o.EpF();o.TgZ(0,"div",33),o.NdJ("click",function(){const m=o.CHM(n).index,d=o.oxw(2);return o.KtG(d.removeImagen(m))}),o.TgZ(1,"div",34),o._UZ(2,"div",35),o.TgZ(3,"mat-icon",36),o._uU(4,"delete"),o.qZA(),o._UZ(5,"img",37),o.qZA()()}if(2&t){const n=i.$implicit;o.xp6(5),o.Q6J("src",n,o.LSH)}}function Q(t,i){1&t&&o._UZ(0,"mat-spinner",38)}function R(t,i){if(1&t){const n=o.EpF();o.TgZ(0,"mat-card",3)(1,"mat-card-header",4)(2,"mat-card-title"),o._uU(3,"Complet\xe1 los datos de tu donaci\xf3n!"),o.qZA()(),o.TgZ(4,"mat-card-content")(5,"form",5)(6,"div",6)(7,"mat-form-field")(8,"mat-label"),o._uU(9,"Producto"),o.qZA(),o.TgZ(10,"mat-select",7),o.YNc(11,U,2,3,"mat-option",8),o.qZA(),o.YNc(12,I,2,0,"mat-error",9),o.qZA()(),o.TgZ(13,"div",10)(14,"mat-form-field")(15,"mat-label"),o._uU(16,"Cantidad"),o.qZA(),o._UZ(17,"input",11),o.YNc(18,b,2,0,"mat-error",9),o.qZA()(),o.TgZ(19,"section",12)(20,"div")(21,"label",13),o._uU(22," Caracter\xedsticas "),o.TgZ(23,"mat-icon",14),o._uU(24," info "),o.qZA()()(),o.TgZ(25,"div"),o.YNc(26,w,9,3,"div",15),o.TgZ(27,"button",16),o.NdJ("click",function(){o.CHM(n);const r=o.oxw();return o.KtG(r.agregarCaracteristica())}),o.TgZ(28,"mat-icon"),o._uU(29,"add"),o.qZA(),o.TgZ(30,"label"),o._uU(31,"Agregar Caracter\xedstica"),o.qZA()(),o.YNc(32,j,2,0,"mat-error",9),o.qZA()(),o.TgZ(33,"div",10)(34,"div")(35,"label",17),o._uU(36,"Im\xe1genes"),o.qZA()(),o.TgZ(37,"button",18),o.NdJ("click",function(){o.CHM(n);const r=o.MAs(42);return o.KtG(r.click())}),o.TgZ(38,"mat-icon"),o._uU(39,"add"),o.qZA(),o._uU(40," Agregar Imagen "),o.qZA(),o.TgZ(41,"input",19,20),o.NdJ("change",function(r){o.CHM(n);const m=o.oxw();return o.KtG(m.onFileChange(r))}),o.qZA(),o.YNc(43,S,2,0,"mat-error",9),o.TgZ(44,"div",21),o.YNc(45,q,6,1,"div",22),o.qZA()(),o.TgZ(46,"div",23)(47,"mat-form-field")(48,"mat-label"),o._uU(49,"Mensaje Adicional"),o.qZA(),o._UZ(50,"textarea",24,25),o.qZA()()()(),o.TgZ(52,"mat-card-actions",26)(53,"button",27),o.NdJ("click",function(){o.CHM(n);const r=o.oxw();return r.confirmarDonacion(),r.donacionForm.markAllAsTouched(),o.KtG(r.donacionForm.valid)}),o._uU(54," CONFIRMAR DONACI\xd3N "),o.qZA(),o.YNc(55,Q,1,0,"mat-spinner",28),o.qZA()()}if(2&t){const n=o.oxw();o.xp6(5),o.Q6J("formGroup",n.donacionForm)("ngClass",n.screenWidth>576?"big-form":"small-form"),o.xp6(6),o.Q6J("ngForOf",n.colecta.productos),o.xp6(1),o.Q6J("ngIf",n.donacionForm.get("producto").hasError("required")),o.xp6(6),o.Q6J("ngIf",n.donacionForm.get("n_cantidad").hasError("required")),o.xp6(8),o.Q6J("ngForOf",n.getCaracteristicasArray.controls),o.xp6(6),o.Q6J("ngIf",0==n.getCaracteristicasArray.length&&n.showErrors),o.xp6(11),o.Q6J("ngIf",n.donacionForm.get("file").hasError("required")&&n.showErrors),o.xp6(2),o.Q6J("ngForOf",n.images),o.xp6(8),o.Q6J("disabled",n.loadingSave),o.xp6(2),o.Q6J("ngIf",n.loadingSave)}}const Y=[{path:"",component:(()=>{class t{constructor(n,e,r,m,d){this.fb=n,this.route=e,this.router=r,this.donacionesService=m,this.auth=d,this.images=[],this.loading=!0,this.showErrors=!1,this.loadingSave=!1,e.paramMap.subscribe(P=>{console.log(P),this.id_colecta=P.get("id_colecta")||""}),this.donacionForm=n.group({producto:["",c.kI.required],caracteristicas:this.fb.array([]),file:["",c.kI.required],file_source:["",c.kI.required],n_cantidad:["",c.kI.required],mensaje:[""]}),this.screenWidth=window.innerWidth>0?window.innerWidth:screen.width}ngOnInit(){this.donacionesService.getColecta(this.id_colecta).subscribe({next:n=>{this.colecta=n,this.loading=!1},error:n=>{console.log(n)}})}get getCaracteristicasArray(){return this.donacionForm.get("caracteristicas")}agregarCaracteristica(n){const e=this.fb.group({s_descripcion:["",[c.kI.pattern(/[^;]/g),c.kI.required]]});this.getCaracteristicasArray.push(e)}confirmarDonacion(){if(console.log(this.donacionForm.value),this.showErrors=!0,this.donacionForm.valid){this.loadingSave=!0;let e=[];(this.getCaracteristicasArray.value||[]).forEach(m=>{e.push(m.s_descripcion)});const r={tipoProducto:"MUEBLES",productoId:this.donacionForm.controls.producto.value,cantidadOfrecida:this.donacionForm.controls.n_cantidad.value,mensaje:this.donacionForm.controls.mensaje.value,caracteristicas:e,imagenes:this.donacionForm.controls.file_source.value};console.log("obj to send",r),this.donacionesService.crearDonacion(this.colecta.idColecta,r).subscribe({next:m=>{console.log(m),JSON.parse(JSON.stringify(m)).descripcion?(this.showMessage("Donaci\xf3n Creada!","La donacion se cre\xf3 exitosamente. Ahora te toca a vos! Llev\xe1 tu donaci\xf3n a la fundaci\xf3n para que la puedan empezar a usar.","success"),this.router.navigateByUrl("colecta/"+this.id_colecta)):this.showMessage("Ocurri\xf3 un error","No pudimos crear la donacion. Intent\xe1 nuevamente luego.","error"),this.loading=!1},error:m=>{console.log("error creando donacion",m),this.loadingSave=!1}})}}removeCaracteristica(n){this.getCaracteristicasArray.removeAt(n)}onFileChange(n){if(n.target.files&&n.target.files[0]){var e=n.target.files.length;for(let m=0;m<e;m++){var r=new FileReader;r.onload=d=>{this.images.push(d.target.result),this.donacionForm.patchValue({file_source:this.images})},r.readAsDataURL(n.target.files[m])}}}removeImagen(n){this.images.splice(n,1),this.donacionForm.patchValue({file_source:this.images})}showMessage(n,e,r){C().fire({title:n,text:e,icon:r,confirmButtonText:"\xa1OK!"})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(c.qu),o.Y36(g.gz),o.Y36(g.F0),o.Y36(h.M),o.Y36(s.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-donacion"]],decls:4,vars:2,consts:[["id","main-donacion",1,"app-main-div"],[3,"loading"],["id","main-card",4,"ngIf"],["id","main-card"],[2,"margin-bottom","20px"],[1,"form",3,"formGroup","ngClass"],[1,"form-input","form-col"],["formControlName","producto"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"form-col"],["matInput","","formControlName","n_cantidad","type","number"],["formArrayName","caracteristicas",1,"form-col"],[1,"caract-label"],["matTooltip","Por favor incluir medidas, estado del producto,  material del producto y cualquier caracter\xedstica que identifique a tu producto",1,"material-icons-outlined"],["class","caracteristica",3,"formGroupName",4,"ngFor","ngForOf"],["type","button","mat-fab","","extended","","color","light",2,"width","100%",3,"click"],[2,"font-weight","500","font-size","large","margin","7px 0"],["type","button","mat-fab","","extended","","color","light",3,"click"],["formControlName","file","id","file","type","file","multiple","",1,"form-control","hidden",3,"change"],["file",""],[1,"form-col","form-imgs"],["class","show-image",3,"click",4,"ngFor","ngForOf"],[1,"form-col","mensaje-field"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","5","formControlName","mensaje"],["autosize","cdkTextareaAutosize"],[1,"buttons"],["mat-fab","","extended","","color","primary",3,"disabled","click"],["diameter","20","style","margin-left: 10px;",4,"ngIf"],[3,"value"],[1,"caracteristica",3,"formGroupName"],["matInput","","placeholder","Descripci\xf3n*","formControlName","s_descripcion","cdkTextareaAutosize",""],["type","button","mat-icon-button","","color","light",2,"height","60px","margin-left","5px",3,"click"],[1,"show-image",3,"click"],[1,"image"],[1,"overlay"],["color","primary",1,"update"],[1,"img-producto",3,"src"],["diameter","20",2,"margin-left","10px"]],template:function(n,e){1&n&&(o._UZ(0,"app-header"),o.TgZ(1,"div",0),o._UZ(2,"app-spinner",1),o.YNc(3,R,56,11,"mat-card",2),o.qZA()),2&n&&(o.xp6(2),o.Q6J("loading",e.loading),o.xp6(1),o.Q6J("ngIf",!e.loading))},dependencies:[l.mk,l.sg,l.O5,f.KE,f.hX,f.TO,M.Hw,x.Nt,F.IC,Z.Ou,O.RK,O.cs,A.gD,T.ey,u.a8,u.hq,u.dn,u.dk,u.n5,D.gM,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,y.G,E.O],styles:["#main-donacion[_ngcontent-%COMP%]{padding:2%}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;row-gap:10px}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]{padding:5px;display:flex;flex-direction:column;justify-content:center}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;padding:0}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;cursor:pointer;padding-top:5px}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;justify-content:center}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover > .overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;background-color:#000;opacity:.5;transition:all 1s}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:block}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;display:none}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]{font-weight:500;font-size:large;display:flex;align-items:center}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--grey-text);margin:5px}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--dark-grey)}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .caracteristica[_ngcontent-%COMP%]{display:grid;grid-template-columns:5fr 1fr;align-items:center}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%]{background:var(--light-grey);padding:15px;border-radius:5px 5px 0 0}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%]:hover{cursor:pointer}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mensaje-field[_ngcontent-%COMP%]{grid-column:1/3;display:flex;justify-content:center;align-items:center}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mensaje-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:50%}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%]{width:100px;margin:3px}#main-donacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%]:hover{cursor:pointer}#main-donacion[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (min-width: 0px) and (max-width: 576px){.form[_ngcontent-%COMP%]{grid-template-columns:1fr!important}.mensaje-field[_ngcontent-%COMP%]{grid-column:1!important}.mensaje-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%!important}}.hidden[_ngcontent-%COMP%]{display:none}"]}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.Bz.forChild(Y),g.Bz]}),t})();var K=a(7870),B=a(3148),L=a(9499),G=a(4466);let H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.ez,z,K.q,B.IJ,L.O,G.m]}),t})()}}]);