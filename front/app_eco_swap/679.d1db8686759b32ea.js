"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[679],{8679:(R,d,r)=>{r.r(d),r.d(d,{FormPublicacionModule:()=>D});var s=r(4755),g=r(1531),c=r(9401),C=r(5226),f=r.n(C),o=r(2223),b=r(2777),p=r(9114),h=r(430),P=r(9609),_=r(1728),u=r(6012),Z=r(1292),v=r(3649),M=r(7876),x=r(4984);function O(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function F(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function T(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function A(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function y(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function U(n,a){if(1&n&&(o.TgZ(0,"mat-form-field")(1,"mat-label"),o._uU(2,"Precio de Venta"),o.qZA(),o._UZ(3,"input",29),o.YNc(4,y,2,0,"mat-error",8),o.qZA()),2&n){const t=o.oxw(2);o.xp6(4),o.Q6J("ngIf",t.publicacionForm.get("precioVenta").hasError("required"))}}function q(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," El campo no puede contener "),o.TgZ(2,"b"),o._uU(3,";"),o.qZA()())}function I(n,a){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," Campo obligatorio "),o.qZA())}function N(n,a){if(1&n){const t=o.EpF();o.TgZ(0,"div",30)(1,"mat-form-field"),o._UZ(2,"input",31),o.YNc(3,q,4,0,"mat-error",8),o.YNc(4,I,2,0,"mat-error",8),o.qZA(),o.TgZ(5,"button",32),o.NdJ("click",function(){const m=o.CHM(t).index,l=o.oxw(2);return o.KtG(l.removeCaracteristica(m))}),o.TgZ(6,"mat-icon"),o._uU(7,"delete"),o.qZA()()()}if(2&n){const t=a.$implicit;o.Q6J("formGroupName",a.index),o.xp6(3),o.Q6J("ngIf",t.get("s_descripcion").hasError("pattern")),o.xp6(1),o.Q6J("ngIf",t.get("s_descripcion").hasError("required"))}}function J(n,a){if(1&n){const t=o.EpF();o.TgZ(0,"div",33),o.NdJ("click",function(){const m=o.CHM(t).index,l=o.oxw(2);return o.KtG(l.removeImagen(m))}),o.TgZ(1,"div",34),o._UZ(2,"div",35),o.TgZ(3,"mat-icon",36),o._uU(4,"delete"),o.qZA(),o._UZ(5,"img",37),o.qZA()()}if(2&n){const t=a.$implicit;o.xp6(5),o.Q6J("src",t,o.LSH)}}function E(n,a){if(1&n){const t=o.EpF();o.TgZ(0,"mat-card",3)(1,"mat-card-header",4)(2,"mat-card-title"),o._uU(3,"Complet\xe1 los datos de tu publicaci\xf3n!"),o.qZA()(),o.TgZ(4,"mat-card-content")(5,"form",5)(6,"div",6)(7,"mat-form-field")(8,"mat-label"),o._uU(9,"T\xedtulo"),o.qZA(),o._UZ(10,"input",7),o.YNc(11,O,2,0,"mat-error",8),o.qZA()(),o.TgZ(12,"div",6)(13,"mat-form-field")(14,"mat-label"),o._uU(15,"Descripci\xf3n"),o.qZA(),o._UZ(16,"input",9),o.YNc(17,F,2,0,"mat-error",8),o.qZA()(),o.TgZ(18,"div",6)(19,"mat-form-field")(20,"mat-label"),o._uU(21,"Valor "),o.TgZ(22,"b"),o._uU(23,"m\xednimo"),o.qZA(),o._uU(24," de trueque"),o.qZA(),o._UZ(25,"input",10),o.YNc(26,T,2,0,"mat-error",8),o.qZA()(),o.TgZ(27,"div",6)(28,"mat-form-field")(29,"mat-label"),o._uU(30,"Valor "),o.TgZ(31,"b"),o._uU(32,"m\xe1ximo"),o.qZA(),o._uU(33," de trueque"),o.qZA(),o._UZ(34,"input",11),o.YNc(35,A,2,0,"mat-error",8),o.qZA()(),o.TgZ(36,"div",6)(37,"mat-checkbox",12)(38,"label",13),o._uU(39," Acepta Venta "),o.TgZ(40,"mat-icon",14),o._uU(41," info "),o.qZA()()(),o.TgZ(42,"mat-form-field",15),o._UZ(43,"input",16),o.qZA()(),o.TgZ(44,"div",6),o.YNc(45,U,5,1,"mat-form-field",8),o.qZA(),o.TgZ(46,"section",17)(47,"div")(48,"label",13),o._uU(49," Caracter\xedsticas "),o.TgZ(50,"mat-icon",18),o._uU(51," info "),o.qZA()()(),o.TgZ(52,"div"),o.YNc(53,N,8,3,"div",19),o.TgZ(54,"button",20),o.NdJ("click",function(){o.CHM(t);const e=o.oxw();return o.KtG(e.agregarCaracteristica())}),o.TgZ(55,"mat-icon"),o._uU(56,"add"),o.qZA(),o.TgZ(57,"label"),o._uU(58,"Agregar Caracter\xedstica"),o.qZA()()(),o._UZ(59,"div"),o.qZA(),o.TgZ(60,"section",6)(61,"div")(62,"label",21),o._uU(63,"Im\xe1genes"),o.qZA()(),o.TgZ(64,"button",22),o.NdJ("click",function(){o.CHM(t);const e=o.MAs(69);return o.KtG(e.click())}),o.TgZ(65,"mat-icon"),o._uU(66,"add"),o.qZA(),o._uU(67," Agregar Imagen "),o.qZA(),o.TgZ(68,"input",23,24),o.NdJ("change",function(e){o.CHM(t);const m=o.oxw();return o.KtG(m.onFileChange(e))}),o.qZA(),o.TgZ(70,"div",25),o.YNc(71,J,6,1,"div",26),o.qZA()()()(),o.TgZ(72,"mat-card-actions",27)(73,"button",28),o.NdJ("click",function(){o.CHM(t);const e=o.oxw();return e.publicar(),e.publicacionForm.markAllAsTouched(),o.KtG(e.publicacionForm.valid)}),o._uU(74," CREAR PUBLICACI\xd3N "),o.qZA()()()}if(2&n){const t=o.oxw();let i;o.xp6(5),o.Q6J("formGroup",t.publicacionForm),o.xp6(6),o.Q6J("ngIf",t.publicacionForm.get("titulo").hasError("required")),o.xp6(6),o.Q6J("ngIf",t.publicacionForm.get("descripcion").hasError("required")),o.xp6(9),o.Q6J("ngIf",t.publicacionForm.get("valorMinimo").hasError("required")),o.xp6(9),o.Q6J("ngIf",t.publicacionForm.get("valorMaximo").hasError("required")),o.xp6(10),o.Q6J("ngIf",null==(i=t.publicacionForm.get("finalidadVenta"))?null:i.value),o.xp6(8),o.Q6J("ngForOf",t.getCaracteristicasArray.controls),o.xp6(18),o.Q6J("ngForOf",t.images)}}const w=[{path:"",component:(()=>{class n{constructor(t,i,e){this.fb=t,this.truequeService=i,this.router=e,this.images=[],this.loading=!1,this.publicacionForm=t.group({titulo:["",c.kI.required],descripcion:["",c.kI.required],valorMinimo:["",c.kI.required],valorMaximo:["",c.kI.required],finalidadVenta:[!1],precioVenta:[""],caracteristicas:this.fb.array([]),file:[""],file_source:[""],tipoProducto:[""],idParticular:[""]})}get getCaracteristicasArray(){return this.publicacionForm.get("caracteristicas")}agregarCaracteristica(t){const i=this.fb.group({s_descripcion:["",[c.kI.pattern(/[^;]/g),c.kI.required]]});this.getCaracteristicasArray.push(i)}removeCaracteristica(t){this.getCaracteristicasArray.removeAt(t)}onFileChange(t){if(t.target.files&&t.target.files[0]){var i=t.target.files.length;for(let m=0;m<i;m++){var e=new FileReader;e.onload=l=>{this.images.push(l.target.result),this.publicacionForm.patchValue({file_source:this.images})},e.readAsDataURL(t.target.files[m]),console.log(this.images,this.publicacionForm.controls.file_source)}}}removeImagen(t){this.images.splice(t,1),this.publicacionForm.patchValue({file_source:this.images})}publicar(){if(this.publicacionForm.valid){let i=[];(this.getCaracteristicasArray.value||[]).forEach(m=>{i.push(m.s_descripcion)}),console.log("PUBLICAR: ",this.publicacionForm.value);const e={titulo:this.publicacionForm.controls.titulo.value,descripcion:this.publicacionForm.controls.descripcion.value,imagen:this.publicacionForm.controls.file_source.value,tipoProducto:"OTROS",caracteristicasProducto:i,fechaPublicacion:new Date,esVenta:this.publicacionForm.controls.finalidadVenta.value,precioVenta:this.publicacionForm.controls.precioVenta.value,valorTruequeMin:this.publicacionForm.controls.valorMinimo.value,valorTruequeMax:this.publicacionForm.controls.valorMaximo.value};console.log("body",e),this.truequeService.crearPublicacion(e).subscribe({next:m=>{console.log("publicacion creada",m),f().fire({title:"\xa1Creada!",text:"La publicaci\xf3n se cre\xf3 correctamente, ya podes hacer un intercambio!",icon:"success"}).then(({})=>{this.router.navigate(["mis-publicaciones"])})},error:m=>{console.log("error creando publicacion",m),f().fire("\xa1Error!","Ocurri\xf3 un error al crear la publicaci\xf3n. Intentalo nuevamente","error")}})}}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c.qu),o.Y36(b.x),o.Y36(g.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-form-publicacion"]],decls:4,vars:2,consts:[["id","main-publicacion"],[3,"loading"],["id","main-card",4,"ngIf"],["id","main-card"],[2,"margin-bottom","20px"],[1,"form",3,"formGroup"],[1,"form-col"],["matInput","","formControlName","titulo","type","text"],[4,"ngIf"],["matInput","","formControlName","descripcion","type","text"],["matInput","","formControlName","valorMinimo","type","number"],["matInput","","formControlName","valorMaximo","type","number"],["formControlName","finalidadVenta"],[1,"caract-label"],["matTooltip","Si cheque\xe1s este campo, adem\xe1s de propuestas de intercambio, te pueden llegar propuestas de compra de tu producto.",1,"material-icons-outlined",2,"color","var(--grey-text)","margin","5px"],["hidden",""],["matInput","","type","text"],["formArrayName","caracteristicas",1,"form-col"],["matTooltip","Por favor incluir medidas, estado del producto,  material del producto y cualquier caracter\xedstica que identifique a tu producto",1,"material-icons-outlined"],["class","caracteristica",3,"formGroupName",4,"ngFor","ngForOf"],["type","button","mat-raised-button","","color","light",2,"width","100%",3,"click"],[2,"font-weight","500","font-size","large","margin","7px 0"],["type","button","mat-raised-button","","color","light",3,"click"],["formControlName","file","id","file","type","file","multiple","",1,"form-control","hidden",3,"change"],["file",""],[1,"form-col","form-imgs"],["class","show-image",3,"click",4,"ngFor","ngForOf"],[1,"buttons"],["mat-raised-button","","color","primary",3,"click"],["matInput","","formControlName","precioVenta","type","text"],[1,"caracteristica",3,"formGroupName"],["matInput","","placeholder","Descripci\xf3n*","formControlName","s_descripcion"],["type","button","mat-icon-button","","color","light",2,"height","60px","margin-left","5px",3,"click"],[1,"show-image",3,"click"],[1,"image"],[1,"overlay"],["color","primary",1,"update"],[1,"img-producto",3,"src"]],template:function(t,i){1&t&&(o._UZ(0,"app-header"),o.TgZ(1,"div",0),o._UZ(2,"app-spinner",1),o.YNc(3,E,75,8,"mat-card",2),o.qZA()),2&t&&(o.xp6(2),o.Q6J("loading",i.loading),o.xp6(1),o.Q6J("ngIf",!i.loading))},dependencies:[s.sg,s.O5,p.KE,p.hX,p.TO,h.Hw,P.Nt,_.lW,_.RK,u.a8,u.hq,u.dn,u.dk,u.n5,Z.oG,v.gM,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,M.G,x.O],styles:["#main-publicacion[_ngcontent-%COMP%]{padding:2%}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;row-gap:10px}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col[_ngcontent-%COMP%]{padding:5px;display:flex;flex-direction:column;justify-content:center}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;padding:0}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;cursor:pointer;padding-top:5px}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative;width:-moz-fit-content;width:fit-content;display:flex;align-items:center;justify-content:center}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover > .overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;background-color:#000;opacity:.5;transition:all 1s}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%]{width:100px;margin:3px}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .img-producto[_ngcontent-%COMP%]:hover{cursor:pointer}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{display:block}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-col.form-imgs[_ngcontent-%COMP%]   .show-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;display:none}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]{font-weight:500;font-size:large;display:flex;align-items:center}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--grey-text);margin:5px}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .caract-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--dark-grey)}#main-publicacion[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}#main-publicacion[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (min-width: 0px) and (max-width: 576px){.form[_ngcontent-%COMP%]{grid-template-columns:1fr!important}}"]}),n})()}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.Bz.forChild(w),g.Bz]}),n})();var Q=r(793),Y=r(3148),k=r(9499),G=r(4466);let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.ez,V,Q.q,Y.IJ,k.O,G.m]}),n})()}}]);