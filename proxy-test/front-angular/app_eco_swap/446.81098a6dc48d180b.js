"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[446],{9499:(p,m,t)=>{t.d(m,{O:()=>o});var c=t(4755),l=t(9433),i=t(9401),u=t(3148),s=t(2223);let o=(()=>{class e{}return e.\u0275fac=function(v){return new(v||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[c.ez,l.q,u.IJ,i.u5,i.UX]}),e})()},446:(p,m,t)=>{t.r(m),t.d(m,{AdminLogisticaModule:()=>D});var c=t(4755),l=t(9499),i=t(1531),u=t(5226),s=t.n(u),o=t(2223),e=t(9401),g=t(4303),v=t(7876),f=t(9114),A=t(9609),E=t(1728),O=t(787),h=t(1217);function C(n,d){if(1&n&&(o.TgZ(0,"mat-option",6),o._uU(1),o.qZA()),2&n){const a=d.$implicit;o.Q6J("value",a),o.xp6(1),o.hij(" ",a," ")}}const L=[{path:"",component:(()=>{class n{constructor(a,r){this.fb=a,this.logisticaServie=r,this.estados=["CANCELADO","ENVIADO","POR_DESPACHAR","RECIBIDO"],this.ordenForm=a.group({idOrden:[""],nuevoEstado:[""]})}enviar(){console.log(this.ordenForm.value),this.logisticaServie.cambiarEstadoOrden(this.ordenForm.value.idOrden,this.ordenForm.value.nuevoEstado).subscribe({next:a=>{s().fire("\xa1\xc9xito!","Se cambi\xf3 el estado de la orden exitosamente","success"),this.ordenForm.patchValue({idOrden:"",nuevoEstado:""}),this.ordenForm.markAsPristine(),this.ordenForm.markAsUntouched(),this.ordenForm.setErrors(null)}})}}return n.\u0275fac=function(a){return new(a||n)(o.Y36(e.qu),o.Y36(g.C))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-admin-logistica"]],decls:16,vars:3,consts:[["id","main-admin-logistica",1,"app-main-div"],[1,"form",3,"formGroup"],["matInput","","formControlName","idOrden"],["formControlName","nuevoEstado"],[3,"value",4,"ngFor","ngForOf"],["mat-fab","","extended","",3,"disabled","click"],[3,"value"]],template:function(a,r){1&a&&(o._UZ(0,"app-header"),o.TgZ(1,"div",0)(2,"h3"),o._uU(3,"Complet\xe1 con los datos de la orden que quieras mockear:"),o.qZA(),o.TgZ(4,"form",1)(5,"mat-form-field")(6,"mat-label"),o._uU(7,"ID orden"),o.qZA(),o._UZ(8,"input",2),o.qZA(),o.TgZ(9,"mat-form-field")(10,"mat-label"),o._uU(11,"Nuevo Estado"),o.qZA(),o.TgZ(12,"mat-select",3),o.YNc(13,C,2,2,"mat-option",4),o.qZA()(),o.TgZ(14,"button",5),o.NdJ("click",function(){return r.enviar(),r.ordenForm.markAllAsTouched(),r.ordenForm.valid}),o._uU(15," ENVIAR "),o.qZA()()()),2&a&&(o.xp6(4),o.Q6J("formGroup",r.ordenForm),o.xp6(9),o.Q6J("ngForOf",r.estados),o.xp6(1),o.Q6J("disabled",!r.ordenForm.valid||!r.ordenForm.get("idOrden").value||!r.ordenForm.get("nuevoEstado").value))},dependencies:[c.sg,v.G,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,f.KE,f.hX,A.Nt,E.cs,O.gD,h.ey],styles:["#main-admin-logistica[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[i.Bz.forChild(L),i.Bz]}),n})();var F=t(9433);let D=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.ez,M,l.O,e.u5,e.UX,F.q]}),n})()},4303:(p,m,t)=>{t.d(m,{C:()=>u});var c=t(2223),l=t(5500);const i="URImsUsuarios";let u=(()=>{class s{constructor(e){this.backendService=e}getOrden(e){return this.backendService.get(i,`ms-transacciones/api/logistica/orden/${e}`)}getOrdenes(){return this.backendService.get(i,"ms-transacciones/api/logistica/orden")}obtenerMisOrdenes(e){return this.backendService.get(i,"ms-transacciones/api/logistica/myOrdenes",{type:e})}getCostoEnvio(e){return this.backendService.get(i,"ms-transacciones/api/logistica/costoEnvio",{peso:e})}crearOrden(e){return this.backendService.post(i,"ms-transacciones/api/logistica/orden",e)}cambiarEstadoOrden(e,g){return this.backendService.put(i,`ms-transacciones/api/logistica/orden/${e}`,{nuevoEstado:g})}}return s.\u0275fac=function(e){return new(e||s)(c.LFG(l.k))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);