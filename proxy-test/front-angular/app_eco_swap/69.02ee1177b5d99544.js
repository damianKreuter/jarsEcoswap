"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[69],{9499:(h,g,n)=>{n.d(g,{O:()=>p});var l=n(4755),d=n(9433),u=n(9401),m=n(3148),o=n(2223);let p=(()=>{class s{}return s.\u0275fac=function(f){return new(f||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[l.ez,d.q,m.IJ,u.u5,u.UX]}),s})()},1069:(h,g,n)=>{n.r(g),n.d(g,{LoginModule:()=>E});var l=n(4755),d=n(1531),u=n(5226),m=n.n(u),o=n(2223),p=n(4377),s=n(9114),c=n(430),f=n(8467),v=n(9401);const y=["user"],b=["password"];function L(e,r){1&e&&o._UZ(0,"mat-spinner",13)}const P=[{path:"",component:(()=>{class e{constructor(t,i,a){this.auth=t,this.router=i,this.location=a,this.username="",this.password="",this.passwordIcon="visibility_off",this.passwordType="password",this.loadingSave=!1}ngOnInit(){this.loadingSave=!1,this.auth.isUserLoggedIn&&this.router.navigate([""])}onSubmit(){this.username=this.userHtml?.nativeElement.value,this.password=this.passwordHtml?.nativeElement.value,this.username&&this.password?(this.loadingSave=!0,this.auth.login(this.username,this.password).then(t=>{this.loadingSave=!1}).catch(()=>this.loadingSave=!1)):m().fire({title:"Campos incompletos!",text:"Por favor complet\xe1 todos los campos antes de continuar.",icon:"error"})}createAccount(){this.router.navigate(["registro"])}goToHome(){this.router.navigate(["home"])}resetPassword(){this.router.navigate(["reset-password"])}togglePassword(){this.passwordType="text"===this.passwordType?"password":"text",this.passwordIcon="visibility"===this.passwordIcon?"visibility_off":"visibility"}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(p.e),o.Y36(d.F0),o.Y36(l.Ye))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],viewQuery:function(t,i){if(1&t&&(o.Gf(y,5),o.Gf(b,5)),2&t){let a;o.iGM(a=o.CRH())&&(i.userHtml=a.first),o.iGM(a=o.CRH())&&(i.passwordHtml=a.first)}},decls:19,vars:5,consts:[[1,"loginPanel",3,"ngSubmit"],["loginForm","ngForm"],["src","assets/logo_green_small.png"],["type","text","placeholder","Usuario","required","","autocomplete","off"],["user",""],["placeholder","Contrase\xf1a","required","","autocomplete","off",3,"type"],["password",""],["matSuffix","",1,"eye",3,"click"],["id","submitLogin","type","submit",3,"disabled","ngClass"],[1,"button-text"],["diameter","20","class","spinner",4,"ngIf"],["id","create",3,"click"],["id","invitado",3,"click"],["diameter","20",1,"spinner"]],template:function(t,i){1&t&&(o.TgZ(0,"main")(1,"form",0,1),o.NdJ("ngSubmit",function(){return i.onSubmit()}),o._UZ(3,"img",2)(4,"input",3,4),o.TgZ(6,"div"),o._UZ(7,"input",5,6),o.TgZ(9,"mat-icon",7),o.NdJ("click",function(){return i.togglePassword()}),o._uU(10),o.qZA()(),o.TgZ(11,"button",8)(12,"span",9),o._uU(13,"LOGIN"),o.qZA(),o.YNc(14,L,1,0,"mat-spinner",10),o.qZA(),o.TgZ(15,"a",11),o.NdJ("click",function(){return i.createAccount()}),o._uU(16,"Crear cuenta"),o.qZA(),o.TgZ(17,"a",12),o.NdJ("click",function(){return i.goToHome()}),o._uU(18,"Entrar como invitado"),o.qZA()()()),2&t&&(o.xp6(7),o.Q6J("type",i.passwordType),o.xp6(3),o.Oqu(i.passwordIcon),o.xp6(1),o.Q6J("disabled",i.loadingSave)("ngClass",i.loadingSave?"disabled":"enabled"),o.xp6(3),o.Q6J("ngIf",i.loadingSave))},dependencies:[l.mk,l.O5,s.R9,c.Hw,f.Ou,v._Y,v.JL,v.F],styles:["main{height:100vh;width:100vw;display:grid;background-image:url(login.1b89235f5b0659f2.png);place-content:center;background-repeat:no-repeat;background-size:cover;background-position:center}main *{margin:0;padding:0;box-sizing:border-box;font-family:var(--font-title);font-size:18px}.loginPanel{display:flex;flex-direction:column;align-items:center;background-color:#fff;gap:.5rem;width:min(400px,80vw);border-radius:20px;padding:2.5rem 25px;box-shadow:0 2px 5px #313131}.loginPanel a{font-size:12px}.loginPanel a:hover{cursor:pointer}.loginPanel .eye{position:absolute;margin-left:-35px;margin-top:10px}.loginPanel .eye:hover{cursor:pointer}.loginPanel img{width:min(300px,60vw)}.loginPanel input,.loginPanel button{padding:.75rem 1.25rem;border-radius:5px;border:1px solid grey;outline:none;width:min(300px,60vw);text-align:center}.loginPanel #submitLogin{display:flex;justify-content:center;align-items:center}.loginPanel #submitLogin.enabled{background-color:var(--primary-color);color:#fff}.loginPanel #submitLogin.disabled{background-color:var(--light-grey)}.loginPanel #submitLogin.disabled mat-spinner{margin-left:10px}.loginPanel #submitLogin.enabled:hover,.loginPanel #submitLogin.enabled:focus{background-color:#86db59cc;cursor:pointer}.loginPanel #forgot{cursor:pointer}.loginPanel #forgot:hover{color:var(--secondary-color)}.spinner{margin-left:10px}.spinner circle{stroke:var(--dark-grey)}\n"],encapsulation:2}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[d.Bz.forChild(P),d.Bz]}),e})();var w=n(9433),x=n(3148),T=n(9499),M=n(4466);let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.ez,C,w.q,x.IJ,T.O,M.m]}),e})()}}]);