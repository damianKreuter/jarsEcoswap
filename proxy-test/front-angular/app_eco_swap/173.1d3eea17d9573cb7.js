"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[173],{9499:(y,h,r)=>{r.d(h,{O:()=>n});var s=r(4755),f=r(9433),P=r(9401),v=r(3148),m=r(2223);let n=(()=>{class c{}return c.\u0275fac=function(p){return new(p||c)},c.\u0275mod=m.oAB({type:c}),c.\u0275inj=m.cJS({imports:[s.ez,f.q,v.IJ,P.u5,P.UX]}),c})()},6173:(y,h,r)=>{r.r(h),r.d(h,{PerfilModule:()=>Mn});var s=r(4755),f=r(1531),P=r(8088),v=r(5226),m=r.n(v),n=r(2223),c=r(5580),_=r(5763),p=r(430),u=r(8467),C=r(1728);function b(t,a){1&t&&(n.TgZ(0,"div",5),n._UZ(1,"mat-spinner",6),n.qZA())}function F(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"img",13),n.NdJ("click",function(){const d=n.CHM(e).$implicit,l=n.oxw(2);return n.KtG(l.selectImage(d.id))}),n.qZA()}if(2&t){const e=a.$implicit,o=n.oxw(2);n.Q6J("src",e.name,n.LSH)("alt",e.name)("ngClass",e.id==o.selectedImage?"selected":"")}}function E(t,a){1&t&&n._UZ(0,"mat-spinner",6)}function k(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div")(1,"div",7),n.YNc(2,F,1,3,"img",8),n.qZA(),n.TgZ(3,"div",9)(4,"button",10),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.close())}),n._uU(5,"CANCELAR"),n.qZA(),n.TgZ(6,"button",11),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.confirm())}),n._uU(7,"GUARDAR"),n.qZA(),n.YNc(8,E,1,0,"mat-spinner",12),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.images),n.xp6(4),n.Q6J("disabled",!e.selectedImage||e.loadingSave),n.xp6(2),n.Q6J("ngIf",e.loadingSave)}}let R=(()=>{class t{constructor(e,o){this.dialogRef=e,this.usuarioService=o,this.images=[],this.loading=!0,this.loadingSave=!1}ngOnInit(){for(let e=15;e<=25;e++)this.images.push({id:e,name:`assets/perfiles/perfiles-${e}.jpg`});setTimeout(()=>{this.loading=!1},3300)}selectImage(e){this.selectedImage=e}confirm(){console.log(this.selectedImage),this.selectedImage?(this.loadingSave=!0,this.usuarioService.editAvatar(this.selectedImage.toString()).subscribe({next:e=>{this.loadingSave=!1,m().fire("\xa1Excelente!","Tu avatar se cambi\xf3 con \xe9xito!","success"),this.dialogRef.close(this.selectedImage)}})):m().fire("Error!","Seleccion\xe1 una imagen para cambiar tu avatar!","error")}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.so),n.Y36(_.i))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-images-modal"]],decls:8,vars:2,consts:[[1,"header"],[2,"width","30px"],[2,"margin-left","10px","cursor","pointer",3,"click"],["style","display: flex; justify-content: center; margin-bottom: 60px;",4,"ngIf"],[4,"ngIf"],[2,"display","flex","justify-content","center","margin-bottom","60px"],["diameter","20"],[1,"image-gallery"],["class","image",3,"src","alt","ngClass","click",4,"ngFor","ngForOf"],[1,"buttons"],["mat-fab","","extended","","color","light",3,"click"],["mat-fab","","extended","","color","primary",3,"disabled","click"],["diameter","20",4,"ngIf"],[1,"image",3,"src","alt","ngClass","click"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"span",1),n.TgZ(2,"span"),n._uU(3,"Eleg\xed tu \xe1vatar"),n.qZA(),n.TgZ(4,"mat-icon",2),n.NdJ("click",function(){return o.dialogRef.close()}),n._uU(5,"close"),n.qZA()(),n.YNc(6,b,2,0,"div",3),n.YNc(7,k,9,3,"div",4)),2&e&&(n.xp6(6),n.Q6J("ngIf",o.loading),n.xp6(1),n.Q6J("ngIf",!o.loading))},dependencies:[s.mk,s.sg,s.O5,p.Hw,u.Ou,C.cs],styles:[".header[_ngcontent-%COMP%]{text-align:center;margin:20px;padding-bottom:20px;border-bottom:1px solid var(--light-grey);font-size:16px;display:flex;align-items:center;justify-content:space-between}.image-gallery[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin:5px 50px}.image-gallery[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100px;border-radius:50%;box-shadow:2px 2px 5px var(--dark-grey)}.image-gallery[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover{cursor:pointer;filter:brightness(.7)}.image-gallery[_ngcontent-%COMP%]   .image.selected[_ngcontent-%COMP%]{filter:brightness(.7)}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;margin:10px 20px 30px}"]}),t})();var D=r(1272),g=r(9401),I=r(4377),M=r(9114),A=r(9609);function q(t,a){1&t&&n._UZ(0,"mat-spinner",6)}function Y(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Campo obligatorio "),n.qZA())}function Q(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Las contrase\xf1as no coinciden "),n.qZA())}function j(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Debe tener de 8 a 32 caracteres y al menos 1 min\xfascula, 1 may\xfascula, 1 n\xfamero y 1 caracter especial. "),n.qZA())}function z(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Campo obligatorio "),n.qZA())}function H(t,a){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Las contrase\xf1as no coinciden "),n.qZA())}function K(t,a){1&t&&n._UZ(0,"mat-spinner",6)}function L(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div")(1,"form",7)(2,"mat-form-field",8)(3,"mat-label"),n._uU(4,"Contrase\xf1a Actual"),n.qZA(),n._UZ(5,"input",9),n.TgZ(6,"mat-icon",10),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.togglePassword())}),n._uU(7),n.qZA()(),n.TgZ(8,"mat-form-field",8)(9,"mat-label"),n._uU(10,"Nueva Contrase\xf1a"),n.qZA(),n.TgZ(11,"input",11),n.NdJ("blur",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.showError=!0)}),n.qZA(),n.TgZ(12,"mat-icon",10),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.togglePassword())}),n._uU(13),n.qZA(),n.YNc(14,Y,2,0,"mat-error",5),n.YNc(15,Q,2,0,"mat-error",5),n.YNc(16,j,2,0,"mat-error",5),n.qZA(),n.TgZ(17,"mat-form-field",8)(18,"mat-label"),n._uU(19,"Confirmar Nueva Contrase\xf1a"),n.qZA(),n._UZ(20,"input",12),n.TgZ(21,"mat-icon",10),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.togglePassword())}),n._uU(22),n.qZA(),n.YNc(23,z,2,0,"mat-error",5),n.YNc(24,H,2,0,"mat-error",5),n.qZA()(),n.TgZ(25,"div",13)(26,"button",14),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.dialogRef.close())}),n._uU(27,"CANCELAR"),n.qZA(),n.TgZ(28,"button",15),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.savePassword())}),n.TgZ(29,"span"),n._uU(30,"GUARDAR"),n.qZA()(),n.YNc(31,K,1,0,"mat-spinner",4),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(1),n.Q6J("formGroup",e.passwordForm),n.xp6(4),n.Q6J("type",e.passwordType),n.xp6(2),n.Oqu(e.passwordIcon),n.xp6(1),n.ekj("long-error",e.passwordForm.get("newPassword").hasError("pattern")&&e.showError),n.xp6(3),n.Q6J("type",e.passwordType),n.xp6(2),n.Oqu(e.passwordIcon),n.xp6(1),n.Q6J("ngIf",e.passwordForm.get("newPassword").hasError("required")),n.xp6(1),n.Q6J("ngIf",e.passwordForm.get("newPassword").hasError("differentPassword")&&!e.passwordForm.get("newPassword").hasError("pattern")),n.xp6(1),n.Q6J("ngIf",e.passwordForm.get("newPassword").hasError("pattern")),n.xp6(4),n.Q6J("type",e.passwordType),n.xp6(2),n.Oqu(e.passwordIcon),n.xp6(1),n.Q6J("ngIf",e.passwordForm.get("confirmNewPassword").hasError("required")),n.xp6(1),n.Q6J("ngIf",e.passwordForm.get("confirmNewPassword").hasError("differentPassword")),n.xp6(4),n.Q6J("disabled",!e.passwordForm.valid||e.loadingSave),n.xp6(3),n.Q6J("ngIf",e.loadingSave)}}let G=(()=>{class t{constructor(e,o,i,d,l,O){this.dialogRef=e,this.data=o,this.fb=i,this.router=d,this.usuarioService=l,this.auth=O,this.loading=!0,this.loadingSave=!1,this.passwordIcon="visibility_off",this.passwordType="password",this.showError=!1,console.log(o),this.passwordForm=i.group({currentPassword:["",g.kI.required],newPassword:["",[g.kI.required,g.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*\-_.,])[a-zA-Z\d@#$%^&+=!*\-_.,]{8,32}$/),this.validarConfirmPassword()]],confirmNewPassword:["",[g.kI.required,this.validarConfirmPassword()]]}),this.loading=!1}savePassword(){this.loadingSave=!0,m().fire({title:"Confirmar Cambio de Contrase\xf1a",text:"Si confirm\xe1s el cambio de contrase\xf1a, vas a tener que volver a iniciar sesi\xf3n.",icon:"warning"}).then(({isConfirmed:e})=>{e?this.usuarioService.changePassword({nuevaPassword:this.passwordForm.controls.newPassword.value,confirmarPassword:this.passwordForm.controls.confirmNewPassword.value}).subscribe({next:i=>{console.log(i),m().fire("\xa1\xc9xito!","Se cambi\xf3 tu contrase\xf1a, ahora volv\xe9 a iniciar sesi\xf3n","success").then(()=>{this.auth.logout(),this.router.navigate(["login"]),this.dialogRef.close()})},error:()=>this.loadingSave=!1}):this.dialogRef.close()})}togglePassword(){this.passwordType="text"===this.passwordType?"password":"text",this.passwordIcon="visibility"===this.passwordIcon?"visibility_off":"visibility"}validarConfirmPassword(){return e=>{if(e.value){const o=this.passwordForm.controls.newPassword.value,i=this.passwordForm.controls.confirmNewPassword.value;if(o&&i&&o!=i)return{differentPassword:!0};this.passwordForm.controls.newPassword.setErrors(null),this.passwordForm.controls.confirmNewPassword.setErrors(null)}return null}}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.so),n.Y36(c.WI),n.Y36(g.qu),n.Y36(f.F0),n.Y36(_.i),n.Y36(I.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-change-password-modal"]],decls:9,vars:2,consts:[[1,"header"],[2,"width","30px"],[2,"margin-left","10px","cursor","pointer",3,"click"],[2,"display","flex","justify-content","center"],["diameter","20",4,"ngIf"],[4,"ngIf"],["diameter","20"],["id","credenciales-form",1,"dense-3",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","currentPassword",3,"type"],["matSuffix","",1,"eye",3,"click"],["matInput","","formControlName","newPassword",3,"type","blur"],["matInput","","formControlName","confirmNewPassword",3,"type"],[1,"buttons"],["mat-fab","","extended","","color","light",3,"click"],["mat-fab","","extended","",1,"confirm",3,"disabled","click"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"span",1),n.TgZ(2,"span"),n._uU(3,"Cambiar Contrase\xf1a"),n.qZA(),n.TgZ(4,"mat-icon",2),n.NdJ("click",function(){return o.dialogRef.close()}),n._uU(5,"close"),n.qZA()(),n.TgZ(6,"div",3),n.YNc(7,q,1,0,"mat-spinner",4),n.qZA(),n.YNc(8,L,32,16,"div",5)),2&e&&(n.xp6(7),n.Q6J("ngIf",o.loading),n.xp6(1),n.Q6J("ngIf",!o.loading))},dependencies:[s.O5,M.KE,M.hX,M.TO,M.R9,p.Hw,A.Nt,u.Ou,C.cs,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u],styles:[".header[_ngcontent-%COMP%]{text-align:center;margin:20px;padding-bottom:20px;border-bottom:1px solid var(--light-grey);font-size:16px;display:flex;align-items:center;justify-content:space-between}#credenciales-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}#credenciales-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:60%}#credenciales-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px!important}#credenciales-form[_ngcontent-%COMP%]   mat-form-field.long-error[_ngcontent-%COMP%]{margin-bottom:20%}.buttons[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;align-items:center;margin:10px 20px 30px}.buttons[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:var(--perfil)}@media (min-width: 0px) and (max-width: 576px){.buttons[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-bottom:20px}}"]}),t})();var S=r(5500);const w="URImsUsuarios";let U=(()=>{class t{constructor(e){this.backendService=e}getOpinionesByUserID(e){return this.backendService.get(w,`api/opiniones/usuario/${e}`)}getOpinion(e){return this.backendService.get(w,`api/opinion/${e}`)}getMyOpiniones(){return this.backendService.get(w,"api/misOpiniones")}crearOpinion(e){return this.backendService.post(w,"api/opiniones/crearOpinion",e)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(S.k))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=r(3148);function B(t,a){if(1&t&&n._UZ(0,"i"),2&t){const e=a.fill,o=a.index;n.Gre("bi-star",100===e?"-fill":""," star"),n.ekj("filled",100===e)("low",o<3)}}function W(t,a){1&t&&n._UZ(0,"mat-spinner",14)}let $=(()=>{class t{constructor(e,o,i){this.dialogRef=e,this.data=o,this.opinionesService=i,this.loading=!1,this.descripcion="",this.valoracion=0}saveRating(){this.opinionesService.crearOpinion({idUsuarioOpinado:this.data.usuario.idUsuario,valoracion:this.valoracion,descripcion:this.descripcion}).subscribe({next:e=>{console.log(e),m().fire("\xa1\xc9xito!","Se guard\xf3 tu opini\xf3n sobre "+this.data.user.nombre+"!","success"),this.dialogRef.close(!0)},error:e=>{m().fire("Error!","Ocurri\xf3 un error al guardar tu opini\xf3n sobre "+this.data.user.nombre+". Volv\xe9 a intentarlo m\xe1s tarde","error"),console.log(e)}})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.so),n.Y36(c.WI),n.Y36(U))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-opinar-modal"]],decls:22,vars:6,consts:[[1,"header"],[2,"width","30px"],[2,"max-width","75%"],[2,"margin-left","10px","cursor","pointer",3,"click"],["id","main-opinar"],[1,"content"],[3,"rate","max","rateChange"],[2,"width","70%"],["matInput","","cols","10","rows","4",3,"ngModel","ngModelChange"],[1,"buttons"],["mat-fab","","extended","","color","light",3,"click"],[2,"display","flex","align-items","center","gap","5px"],["mat-fab","","extended","",1,"confirm",3,"disabled","click"],["diameter","20",4,"ngIf"],["diameter","20"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"span",1),n.TgZ(2,"span",2),n._uU(3),n.qZA(),n.TgZ(4,"mat-icon",3),n.NdJ("click",function(){return o.dialogRef.close()}),n._uU(5,"close"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",5)(8,"ngb-rating",6),n.NdJ("rateChange",function(d){return o.valoracion=d}),n.YNc(9,B,1,7,"ng-template"),n.qZA(),n.TgZ(10,"mat-form-field",7)(11,"mat-label"),n._uU(12,"Descripci\xf3n"),n.qZA(),n.TgZ(13,"textarea",8),n.NdJ("ngModelChange",function(d){return o.descripcion=d}),n.qZA()()(),n.TgZ(14,"div",9)(15,"button",10),n.NdJ("click",function(){return o.dialogRef.close()}),n._uU(16,"CANCELAR"),n.qZA(),n.TgZ(17,"div",11)(18,"button",12),n.NdJ("click",function(){return o.saveRating()}),n.TgZ(19,"span"),n._uU(20,"GUARDAR"),n.qZA()(),n.YNc(21,W,1,0,"mat-spinner",13),n.qZA()()()),2&e&&(n.xp6(3),n.hij("Opin\xe1 sobre ",o.data.user.nombre,""),n.xp6(5),n.Q6J("rate",o.valoracion)("max",5),n.xp6(5),n.Q6J("ngModel",o.descripcion),n.xp6(5),n.Q6J("disabled",!o.valoracion||o.loading),n.xp6(3),n.Q6J("ngIf",o.loading))},dependencies:[s.O5,M.KE,M.hX,p.Hw,A.Nt,u.Ou,C.cs,g.Fj,g.JJ,g.On,T.OC],styles:[".header[_ngcontent-%COMP%]{text-align:center;margin:20px;padding-bottom:20px;border-bottom:1px solid var(--light-grey);font-size:16px;display:flex;align-items:center;justify-content:space-between}#main-opinar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:15px}#main-opinar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--opiniones)}#main-opinar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;align-items:center;margin:10px 20px 30px}#main-opinar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background-color:var(--opiniones);color:#fff}#main-opinar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]:disabled{background-color:var(--dark-grey)!important}@media (min-width: 0px) and (max-width: 576px){.buttons[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-bottom:20px}}"]}),t})(),V=(()=>{class t{constructor(e){this.backendService=e}getParticular(e){return this.backendService.get("URImsUsuarios","api/particular/"+e)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(S.k))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var nn=r(3276),J=r(6012),en=r(7876),tn=r(9515);function on(t,a){1&t&&(n.TgZ(0,"mat-icon",11),n._uU(1,"edit"),n.qZA())}function an(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",4)(1,"div",5),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.myProfile?i.selectImage():"")}),n.TgZ(2,"div",6),n._UZ(3,"img",7),n.YNc(4,on,2,0,"mat-icon",8),n.qZA()(),n.TgZ(5,"mat-card",9)(6,"mat-card-content")(7,"h2"),n._uU(8),n.qZA(),n.TgZ(9,"h5",10)(10,"mat-icon"),n._uU(11,"alternate_email"),n.qZA(),n._uU(12),n.qZA()()()()}if(2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngClass",e.myProfile?"editable-img":""),n.xp6(2),n.Q6J("src","assets/perfiles/perfiles-"+e.user.avatar+".jpg",n.LSH),n.xp6(1),n.Q6J("ngIf",e.myProfile),n.xp6(4),n.Oqu(e.userToShow.nombre),n.xp6(4),n.Oqu(e.userToShow.email)}}function rn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"a",27),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.showMap(i.userToShow.direccion))}),n.TgZ(1,"mat-icon",28),n._uU(2,"place"),n.qZA(),n._uU(3),n.qZA()}if(2&t){const e=n.oxw(2);n.xp6(3),n.hij(" ",!e.userData.isSwapper||e.myProfile?e.userToShow.direccion.calle+" "+e.userToShow.direccion.altura+" ("+e.userToShow.direccion.localidad+")":e.userToShow.direccion.localidad," ")}}function sn(t,a){if(1&t&&(n.TgZ(0,"p",29)(1,"mat-icon",28),n._uU(2,"place"),n.qZA(),n._uU(3),n.qZA()),2&t){const e=n.oxw(2);n.xp6(3),n.hij(" ",e.userData.isSwapper?e.userToShow.direccion.localidad:e.userToShow.direccion.calle+" "+e.userToShow.direccion.altura+" ("+e.userToShow.direccion.localidad+")"," ")}}function cn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",30)(1,"button",31),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.edit())}),n._uU(2,"EDITAR INFORMACI\xd3N"),n.qZA()()}}function ln(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",32)(1,"button",31),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.changePassword())}),n._uU(2,"CAMBIAR CONTRASE\xd1A"),n.qZA()()}}function dn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",32)(1,"button",33),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.credencialesMP())}),n._UZ(2,"img",34),n._uU(3," CREDENCIALES "),n.qZA()()}}function pn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",35)(1,"button",31),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.opinar())}),n._uU(2,"OPINAR"),n.qZA()()}}function gn(t,a){if(1&t&&(n.TgZ(0,"mat-card",36)(1,"div",37)(2,"h4"),n._uU(3,"Valoraci\xf3n:"),n.qZA(),n.TgZ(4,"div",38),n._UZ(5,"app-rating",39),n.qZA(),n.TgZ(6,"div"),n._uU(7),n.ALo(8,"date"),n.qZA()(),n.TgZ(9,"div",40)(10,"div"),n._uU(11),n.qZA()()()),2&t){const e=a.$implicit;n.xp6(5),n.Q6J("puntuacion",e.valoracion),n.xp6(2),n.AsE(" (",e.usuarioOpina.username," - ",n.xi3(8,4,e.fechaHoraOpinion,"dd/MM/yyyy"),") "),n.xp6(4),n.Oqu(e.descripcion)}}function mn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"mat-paginator",41,42),n.NdJ("page",function(i){n.CHM(e);const d=n.oxw(2);return n.KtG(d.changePage(i))}),n.qZA()}if(2&t){const e=n.oxw(2);n.Q6J("pageSize",e.pageSize)("showFirstLastButtons",!0)("length",e.opiniones.length)("hidePageSize",!0)}}function _n(t,a){if(1&t&&(n.TgZ(0,"div",12)(1,"mat-card",13)(2,"mat-card-content")(3,"p",14),n._uU(4),n.qZA(),n.TgZ(5,"p")(6,"mat-icon"),n._uU(7,"phone"),n.qZA(),n._uU(8),n.qZA(),n.YNc(9,rn,4,1,"a",15),n.YNc(10,sn,4,1,"p",16),n.YNc(11,cn,3,0,"div",17),n.YNc(12,ln,3,0,"div",18),n.YNc(13,dn,4,0,"div",18),n.qZA()(),n.TgZ(14,"mat-card",19)(15,"mat-card-content")(16,"div",20)(17,"div",21)(18,"h3"),n._uU(19,"Puntaje:"),n.qZA(),n._UZ(20,"app-rating",22),n.TgZ(21,"div"),n._uU(22),n.qZA()(),n.YNc(23,pn,3,0,"div",23),n.qZA(),n.TgZ(24,"div",24)(25,"h3"),n._uU(26,"Opiniones:"),n.qZA(),n.TgZ(27,"div"),n.YNc(28,gn,12,7,"mat-card",25),n.YNc(29,mn,2,4,"mat-paginator",26),n.qZA()()()()()),2&t){const e=n.oxw();n.xp6(4),n.hij(" ",e.userData.isSwapper?"Swapper":"Fundaci\xf3n"," "),n.xp6(4),n.Oqu(e.userToShow.telefono),n.xp6(1),n.Q6J("ngIf",(!e.userData.isSwapper||e.myProfile)&&e.userToShow.direccion),n.xp6(1),n.Q6J("ngIf",e.userData.isSwapper&&!e.myProfile&&e.userToShow.direccion),n.xp6(1),n.Q6J("ngIf",e.myProfile),n.xp6(1),n.Q6J("ngIf",e.myProfile),n.xp6(1),n.Q6J("ngIf",e.myProfile&&e.userData.isSwapper),n.xp6(7),n.Q6J("puntuacion",e.userToShow.puntaje)("remSize",1.3),n.xp6(2),n.AsE("(",e.opiniones.length||0," ",1==e.opiniones.length?"opini\xf3n":"opiniones",")"),n.xp6(1),n.Q6J("ngIf",!e.myProfile),n.xp6(5),n.Q6J("ngForOf",e.paginatedOpiniones),n.xp6(1),n.Q6J("ngIf",e.opiniones.length>0)}}const un=[{path:"",component:(()=>{class t{constructor(e,o,i,d,l,O){this.auth=e,this.usuarioService=o,this.router=i,this.particularService=d,this.dialog=l,this.opinionesService=O,this.colspan=1,this.userData={},this.myProfile=!0,this.pageSize=5,this.opiniones=[],this.paginatedOpiniones=[],this.refreshHeader=0;const x=i.url;console.log(x);const Z=x.split("/")[2];"/mi-perfil"!=x&&Z!=this.auth.getUserID()?(this.myProfile=!1,this.getUserInformation(Z),this.getOpiniones(Z)):(this.userData={isSwapper:e.isUserSwapper(),id:this.auth.getUserID()},this.getUserInformation(this.userData.id),this.getMyOpiniones())}getUserInformation(e){this.usuarioService.getUserByID(Number(e)).subscribe({next:o=>{console.log(o),this.user=o,this.user.fundacionDTO?this.configureFundacion(this.user):this.configureSwapper(this.user)},error:o=>{console.log("error",o)}})}configureFundacion(e){this.userData.isSwapper=!1,console.log(this.user),this.user.fundacionDTO.direcciones[0].localidad=this.user.fundacionDTO.direcciones[0].localidad.toLowerCase(),this.user.fundacionDTO.direcciones[0].calle=this.user.fundacionDTO.direcciones[0].calle.toLowerCase(),this.userToShow={nombre:this.user.fundacionDTO.nombre,email:this.user.email,telefono:this.user.telefono,puntaje:this.user.puntaje,direccion:this.user.fundacionDTO.direcciones[0]}}configureSwapper(e){this.userData.isSwapper=!0,this.particularService.getParticular(this.user.particularDTO.idParticular).subscribe({next:o=>{o.direcciones[0].localidad=o.direcciones[0].localidad.toLowerCase(),o.direcciones[0].calle=o.direcciones[0].calle.toLowerCase(),this.userToShow={nombre:o.nombre+" "+o.apellido,email:o.usuarioDTO.email,telefono:o.usuarioDTO.telefono,puntaje:o.usuarioDTO.puntaje,direccion:o.direcciones[0],accessToken:o.accessToken,publicKey:o.publicKey}}})}getOpiniones(e){this.opinionesService.getOpinionesByUserID(Number(e)).subscribe({next:o=>{this.opiniones=o,this.paginatedOpiniones=this.opiniones.slice(0,this.pageSize)},error:o=>console.log(o)})}getMyOpiniones(){this.opinionesService.getMyOpiniones().subscribe({next:e=>{console.log(e),this.opiniones=e,this.paginatedOpiniones=this.opiniones.slice(0,this.pageSize)},error:e=>console.log(e)})}changePage(e){const o=e.pageIndex*e.pageSize;this.paginatedOpiniones=this.opiniones.slice(o,o+e.pageSize)}showMap(e){console.log(e);let o=e.calle+e.altura||"";const i=(e.localidad||"").replace(" ","");console.log(o,i);const d=`https://apis.datos.gob.ar/georef/api/direcciones?provincia=02&localidad=${encodeURIComponent(i)}&direccion=${encodeURIComponent(o)}`.replace(" ","");console.log(d),fetch(d).then(l=>l.json()).then(l=>{console.log(l),l.cantidad>0&&this.dialog.open(P.G,{maxWidth:"70vw",maxHeight:"60vh",height:"100%",width:"100%",panelClass:"full-screen-modal",data:{lat:l.direcciones[0].ubicacion.lat,lon:l.direcciones[0].ubicacion.lon}})}).catch(l=>console.error(l))}edit(){this.router.navigate(["edit-perfil"])}selectImage(){this.dialog.open(R,{minWidth:"50vw",minHeight:"40vw",panelClass:"full-screen-modal"}).afterClosed().subscribe(o=>{console.log("closed",o),o&&(this.getUserInformation(this.userData.id),this.getMyOpiniones(),this.refreshHeader++)})}credencialesMP(){this.dialog.open(D.Q,{minWidth:"50vw",minHeight:"40vw",panelClass:"full-screen-modal",data:{user:this.user,publicKey:this.userToShow?.publicKey,accessToken:this.userToShow?.accessToken}}).afterClosed().subscribe(o=>{console.log("closed",o)})}changePassword(){this.dialog.open(G,{minWidth:"50vw",minHeight:"40vw",panelClass:"full-screen-modal"}).afterClosed().subscribe(o=>{console.log("closed",o)})}opinar(){this.dialog.open($,{minWidth:"50vw",minHeight:"40vw",panelClass:"full-screen-modal",data:{usuario:this.user,user:this.userToShow}}).afterClosed().subscribe(o=>{if(console.log("closed",o),o){const i=this.router.url,d=i.split("/")[2];if("/mi-perfil"!=i&&d!=this.auth.getUserID()){const l=i.split("/")[2];this.getUserInformation(l),this.getOpiniones(l)}else this.getMyOpiniones()}})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(I.e),n.Y36(_.i),n.Y36(f.F0),n.Y36(V),n.Y36(c.uw),n.Y36(U))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-perfil"]],decls:4,vars:3,consts:[[3,"refresh"],["id","main-profile",1,"app-main-div"],["class","top-div",4,"ngIf"],["class","bottom-div",4,"ngIf"],[1,"top-div"],[1,"top-img",3,"ngClass","click"],[2,"min-width","285px"],[3,"src"],["class","edit-icon",4,"ngIf"],[1,"top-text"],[2,"display","flex","gap","5px","font-size","14px"],[1,"edit-icon"],[1,"bottom-div"],[1,"left"],[2,"text-align","center","display","flex","border-bottom","1px solid var(--light-grey)","justify-content","center","padding-bottom","10px"],["class","location clickable",3,"click",4,"ngIf"],["class","location",4,"ngIf"],["class","div-edit-info",4,"ngIf"],["class","div-cambiar-pass",4,"ngIf"],[1,"right"],[1,"puntaje"],[1,"title"],[3,"puntuacion","remSize"],["class","div-opinar",4,"ngIf"],[1,"opiniones"],["class","card-opinion",4,"ngFor","ngForOf"],["style","border-radius: 15px;",3,"pageSize","showFirstLastButtons","length","hidePageSize","page",4,"ngIf"],[1,"location","clickable",3,"click"],[2,"min-width","20px"],[1,"location"],[1,"div-edit-info"],["mat-fab","","extended","",3,"click"],[1,"div-cambiar-pass"],["mat-fab","","extended","",2,"background-color","#3fb6e9","color","white","height","fit-content","padding","5px 20px",3,"click"],["src","assets/redes/mercadopago.png",2,"width","40px"],[1,"div-opinar"],[1,"card-opinion"],[1,"valoracion"],[2,"margin","0 10px","display","flex","align-items","center"],[3,"puntuacion"],[1,"descripcion"],[2,"border-radius","15px",3,"pageSize","showFirstLastButtons","length","hidePageSize","page"],["paginator",""]],template:function(e,o){1&e&&(n._UZ(0,"app-header",0),n.TgZ(1,"div",1),n.YNc(2,an,13,5,"div",2),n.YNc(3,_n,30,14,"div",3),n.qZA()),2&e&&(n.Q6J("refresh",o.refreshHeader),n.xp6(2),n.Q6J("ngIf",o.userToShow),n.xp6(1),n.Q6J("ngIf",o.userToShow))},dependencies:[s.mk,s.sg,s.O5,p.Hw,C.cs,nn.NW,J.a8,J.dn,en.G,tn.A,s.uU],styles:["#main-profile[_ngcontent-%COMP%]{padding:2%}#main-profile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin:10px;border-radius:15px}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 5fr}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-img[_ngcontent-%COMP%]{position:relative;display:inline-block;border-radius:50%;height:145px}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;transition:filter .3s;border-radius:50%;height:145px;margin:0 auto}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-img.editable-img[_ngcontent-%COMP%]:hover{cursor:pointer}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-img.editable-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(.7)}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-img.editable-img[_ngcontent-%COMP%]:hover   .edit-icon[_ngcontent-%COMP%]{opacity:1}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-img.editable-img[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;opacity:0;transition:opacity .3s}#main-profile[_ngcontent-%COMP%]   .top-div[_ngcontent-%COMP%]   .top-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 5fr}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{text-align:center;min-width:265px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p.location[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a.location[_ngcontent-%COMP%]{text-transform:capitalize}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p.location.clickable[_ngcontent-%COMP%]:hover, #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a.location.clickable[_ngcontent-%COMP%]:hover{cursor:pointer}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .div-edit-info[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .div-cambiar-pass[_ngcontent-%COMP%]{margin-top:20px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .div-edit-info[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .div-cambiar-pass[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:12px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .div-edit-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .div-cambiar-pass[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--perfil);height:35px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]{border-bottom:1px solid var(--light-grey);display:flex;justify-content:space-between;padding:10px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px;flex-wrap:wrap}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]   .div-opinar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:12px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]   .div-opinar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--opiniones);color:#fff}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]{padding:10px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px!important;margin-bottom:0}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:16px;height:16px}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:12px!important}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]   .valoracion[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px;flex-wrap:wrap}#main-profile[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .opiniones[_ngcontent-%COMP%]   .card-opinion[_ngcontent-%COMP%]   .usuario-opinion[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr;gap:10px;align-items:center}@media (min-width: 0px) and (max-width: 768px){.top-div[_ngcontent-%COMP%], .bottom-div[_ngcontent-%COMP%]{grid-template-columns:1fr!important}mat-card[_ngcontent-%COMP%]{margin:10px 0!important}}"]}),t})()}];let fn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[f.Bz.forChild(un),f.Bz]}),t})();var N=r(9433),Cn=r(9499);let hn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[N.q,T.IJ]}),t})();var Pn=r(4466);let Mn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,fn,N.q,T.IJ,Cn.O,hn,Pn.m]}),t})()},9515:(y,h,r)=>{r.d(h,{A:()=>n});var s=r(2223),f=r(4755),P=r(3148);function v(c,_){if(1&c&&s._UZ(0,"i",5),2&c){const p=s.oxw().fill;s.Udp("width",p,"%")}}function m(c,_){if(1&c&&(s.TgZ(0,"i",3),s.YNc(1,v,1,2,"i",4),s.qZA()),2&c){const p=_.fill,u=s.oxw();s.Udp("font-size",u.remSize,"rem")("color",u.color),s.xp6(1),s.Q6J("ngIf",p>0)}}let n=(()=>{class c{constructor(){this.puntuacion=3.6,this.remSize=1,this.color="var(--opiniones)"}}return c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-rating"]],inputs:{puntuacion:"puntuacion",remSize:"remSize",color:"color"},decls:4,vars:4,consts:[[1,"puntuacion"],["t",""],[3,"rate","starTemplate","readonly","max","rateChange"],[1,"bi-star"],["class","bi-star-fill filled",3,"width",4,"ngIf"],[1,"bi-star-fill","filled"]],template:function(p,u){if(1&p&&(s.TgZ(0,"div",0),s.YNc(1,m,2,5,"ng-template",null,1,s.W1O),s.TgZ(3,"ngb-rating",2),s.NdJ("rateChange",function(b){return u.puntuacion=b}),s.qZA()()),2&p){const C=s.MAs(2);s.xp6(3),s.Q6J("rate",u.puntuacion)("starTemplate",C)("readonly",!0)("max",5)}},dependencies:[f.O5,P.OC],styles:[".puntuacion[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;display:inline-block;padding-right:.1rem}.puntuacion[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%]{overflow:hidden;position:absolute;top:0;left:0}"]}),c})()}}]);