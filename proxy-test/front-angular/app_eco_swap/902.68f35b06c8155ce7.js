"use strict";(self.webpackChunkapp_eco_swap=self.webpackChunkapp_eco_swap||[]).push([[902],{9902:(we,y,s)=>{s.r(y),s.d(y,{PublicacionModule:()=>Me});var p=s(4755),f=s(1531),E=s(5226),C=s.n(E),b=s(5580),e=s(2223),A=s(2777),v=s(430),x=s(1728),S=s(7833),q=s(9229);function J(n,a){if(1&n&&(e.TgZ(0,"div",11)(1,"h3"),e._uU(2,"Vas a intercambiar por:"),e.qZA(),e.TgZ(3,"div",12),e._UZ(4,"app-card",13),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("cardData",t.cardPublicacionOrigen)}}function N(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",14)(1,"h3",15),e._uU(2,"Seleccion\xe1 una de tus publicaciones para intercambiar!"),e.qZA(),e.TgZ(3,"div",16)(4,"app-deck",17),e.NdJ("cardSelected",function(o){e.CHM(t);const c=e.oxw(2);return e.KtG(c.selectCard(o))}),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("cardList",t.publicacionesCardList)("fixedPageSize",t.screenWidth<1200?1:2)("smallWidth",!0)}}function B(n,a){1&n&&(e.TgZ(0,"div",18),e._uU(1,"No ten\xe9s publicaciones para trocar con este producto! Cre\xe1 una para poder hacer intercambios"),e.qZA())}function U(n,a){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,J,5,1,"div",8),e.YNc(2,N,5,3,"div",9),e.YNc(3,B,2,0,"div",10),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.cardPublicacionOrigen),e.xp6(1),e.Q6J("ngIf",t.publicacionesCardList.length>0),e.xp6(1),e.Q6J("ngIf",0==t.publicacionesCardList.length)}}let R=(()=>{class n{constructor(t,i,o,c){this.data=t,this.truequeService=i,this.dialogRef=o,this.currencyPipe=c,this.imagenPublicacion="",this.loading=!1,this.misPublicaciones=[],this.publicacionesCardList=[],console.log(t),this.publicacionOrigen=t.publicacion,this.cardPublicacionOrigen={id:this.publicacionOrigen.idPublicacion,imagen:this.publicacionOrigen.parsedImagenes?this.publicacionOrigen.parsedImagenes[0]:"no_image",titulo:this.publicacionOrigen.titulo,valorPrincipal:`${this.currencyPipe.transform(this.publicacionOrigen.valorTruequeMin)} - ${this.currencyPipe.transform(this.publicacionOrigen.valorTruequeMax)}`,fecha:this.publicacionOrigen.fechaPublicacion,usuario:{id:this.publicacionOrigen.particularDTO.usuarioDTO.idUsuario,imagen:this.publicacionOrigen.particularDTO.usuarioDTO.avatar,nombre:this.publicacionOrigen.particularDTO.nombre+" "+this.publicacionOrigen.particularDTO.apellido,puntaje:this.publicacionOrigen.particularDTO.puntaje,localidad:this.publicacionOrigen.particularDTO.direcciones[0].localidad},action:"detail",buttons:[],estado:this.publicacionOrigen.estadoTrueque},this.getMisPublicaciones(),this.screenWidth=window.innerWidth>0?window.innerWidth:screen.width}getMisPublicaciones(){this.truequeService.getMisPublicacionesForTrueque(this.publicacionOrigen.idPublicacion).subscribe({next:t=>{console.log(t),this.misPublicaciones=t,this.misPublicaciones.map(i=>{i.parsedImagenes=i.imagenes.split("|")}),this.misPublicaciones=this.misPublicaciones.filter(i=>!this.data.trueques.some(o=>o.publicacionDTOpropuesta.idPublicacion==i.idPublicacion))},error:t=>{console.log(t)},complete:()=>this.parsePublicaciones()})}parsePublicaciones(){this.publicacionesCardList.splice(0);const t=[];this.misPublicaciones.sort((i,o)=>new Date(o.fechaPublicacion).getTime()-new Date(i.fechaPublicacion).getTime());for(const i of this.misPublicaciones){const o={id:i.idPublicacion,imagen:i.parsedImagenes?i.parsedImagenes[0]:"no_image",titulo:i.titulo,valorPrincipal:`${this.currencyPipe.transform(i.valorTruequeMin)} - ${this.currencyPipe.transform(i.valorTruequeMax)}`,fecha:i.fechaPublicacion,usuario:{id:i.particularDTO.usuarioDTO.idUsuario,imagen:i.particularDTO.usuarioDTO.avatar,nombre:i.particularDTO.nombre+" "+i.particularDTO.apellido,puntaje:i.particularDTO.puntaje,localidad:i.particularDTO.direcciones[0].localidad},action:"select",buttons:[],estado:i.estadoTrueque};t.push(o)}this.publicacionesCardList=t}getImage(t){return this.truequeService.getImagen(t)}selectCard(t){this.cardSelected=t}solicitarTrueque(){this.cardSelected&&this.truequeService.crearTrueque(this.publicacionOrigen.idPublicacion,this.cardSelected).subscribe({next:t=>{console.log(t),C().fire("\xa1Trueque creado!","Se solicit\xf3 el intercambio, solo falta que lo acepten!","success").then(({isConfirmed:i})=>{this.dialogRef.close(i)})}})}close(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.WI),e.Y36(A.x),e.Y36(b.so),e.Y36(p.H9))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-trocar-modal"]],decls:12,vars:2,consts:[[1,"header"],[2,"width","30px"],[2,"margin-left","10px","cursor","pointer",3,"click"],["id","main-trocar",4,"ngIf"],["id","trocar-buttons"],["mat-fab","","extended","","color","light",3,"click"],["mat-fab","","extended","","color","primary",3,"disabled","click"],["id","main-trocar"],["class","publicacion-origen",4,"ngIf"],["class","mis-publicaciones",4,"ngIf"],["style","padding: 20px; text-align: center;",4,"ngIf"],[1,"publicacion-origen"],[2,"transform","scale(0.95)","transform-origin","top","max-height","50%"],["app","publicaciones",3,"cardData"],[1,"mis-publicaciones"],[2,"text-align","center"],[2,"max-width","98%","transform","scale(0.95)","transform-origin","top","max-height","50%"],["app","publicaciones",3,"cardList","fixedPageSize","smallWidth","cardSelected"],[2,"padding","20px","text-align","center"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"span",1),e.TgZ(2,"span"),e._uU(3,"Propon\xe9 un trueque"),e.qZA(),e.TgZ(4,"mat-icon",2),e.NdJ("click",function(){return i.dialogRef.close()}),e._uU(5,"close"),e.qZA()(),e.YNc(6,U,4,3,"div",3),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return i.close()}),e._uU(9,"CANCELAR"),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return i.solicitarTrueque()}),e._uU(11,"SOLICITAR INTERCAMBIO"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",!i.loading),e.xp6(4),e.Q6J("disabled",!i.cardSelected))},dependencies:[p.O5,v.Hw,x.cs,S.A,q.o],styles:[".header[_ngcontent-%COMP%]{text-align:center;margin:20px;padding-bottom:20px;border-bottom:1px solid var(--light-grey);font-size:16px;display:flex;align-items:center;justify-content:space-between}#main-trocar[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.3fr 2fr;justify-items:center;align-items:center}#main-trocar[_ngcontent-%COMP%]   .publicacion-origen[_ngcontent-%COMP%]{margin:10px 0;padding-right:15px;border-right:1px solid grey;text-align:center;width:95%}#main-trocar[_ngcontent-%COMP%]   .publicacion-origen[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;border-radius:10px}#main-trocar[_ngcontent-%COMP%]   .mis-publicaciones[_ngcontent-%COMP%]{overflow:auto;padding:10px}#trocar-buttons[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;justify-items:center;margin:10px;gap:10px}@media (min-width: 0px) and (max-width: 576px){#main-trocar[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr!important}#main-trocar[_ngcontent-%COMP%]   .publicacion-origen[_ngcontent-%COMP%]{border-right:none!important;border-bottom:1px solid grey}#main-trocar[_ngcontent-%COMP%]   .mis-publicaciones[_ngcontent-%COMP%]{height:75vh!important}#trocar-buttons[_ngcontent-%COMP%]{grid-template-columns:1fr!important}}"]}),n})();var P=s(7579),W=s(930),I=s(9751),Y=s(727),L=s(6063);class T extends P.x{constructor(a=1/0,t=1/0,i=L.l){super(),this._bufferSize=a,this._windowTime=t,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,a),this._windowTime=Math.max(1,t)}next(a){const{isStopped:t,_buffer:i,_infiniteTimeWindow:o,_timestampProvider:c,_windowTime:r}=this;t||(i.push(a),!o&&i.push(c.now()+r)),this._trimBuffer(),super.next(a)}_subscribe(a){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(a),{_infiniteTimeWindow:i,_buffer:o}=this,c=o.slice();for(let r=0;r<c.length&&!a.closed;r+=i?1:2)a.next(c[r]);return this._checkFinalizedStatuses(a),t}_trimBuffer(){const{_bufferSize:a,_timestampProvider:t,_buffer:i,_infiniteTimeWindow:o}=this,c=(o?1:2)*a;if(a<1/0&&c<i.length&&i.splice(0,i.length-c),!o){const r=t.now();let u=0;for(let l=1;l<i.length&&i[l]<=r;l+=2)u=l;u&&i.splice(0,u+1)}}}const F={url:"",deserializer:n=>JSON.parse(n.data),serializer:n=>JSON.stringify(n)};class M extends P.u{constructor(a,t){if(super(),this._socket=null,a instanceof I.y)this.destination=t,this.source=a;else{const i=this._config=Object.assign({},F);if(this._output=new P.x,"string"==typeof a)i.url=a;else for(const o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);if(!i.WebSocketCtor&&WebSocket)i.WebSocketCtor=WebSocket;else if(!i.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new T}}lift(a){const t=new M(this._config,this.destination);return t.operator=a,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new T),this._output=new P.x}multiplex(a,t,i){const o=this;return new I.y(c=>{try{o.next(a())}catch(u){c.error(u)}const r=o.subscribe({next:u=>{try{i(u)&&c.next(u)}catch(l){c.error(l)}},error:u=>c.error(u),complete:()=>c.complete()});return()=>{try{o.next(t())}catch(u){c.error(u)}r.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:a,protocol:t,url:i,binaryType:o}=this._config,c=this._output;let r=null;try{r=t?new a(i,t):new a(i),this._socket=r,o&&(this._socket.binaryType=o)}catch(l){return void c.error(l)}const u=new Y.w0(()=>{this._socket=null,r&&1===r.readyState&&r.close()});r.onopen=l=>{const{_socket:g}=this;if(!g)return r.close(),void this._resetState();const{openObserver:O}=this._config;O&&O.next(l);const _=this.destination;this.destination=W.Lv.create(d=>{if(1===r.readyState)try{const{serializer:h}=this._config;r.send(h(d))}catch(h){this.destination.error(h)}},d=>{const{closingObserver:h}=this._config;h&&h.next(void 0),d&&d.code?r.close(d.code,d.reason):c.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:d}=this._config;d&&d.next(void 0),r.close(),this._resetState()}),_&&_ instanceof T&&u.add(_.subscribe(this.destination))},r.onerror=l=>{this._resetState(),c.error(l)},r.onclose=l=>{r===this._socket&&this._resetState();const{closeObserver:g}=this._config;g&&g.next(l),l.wasClean?c.complete():c.error(l)},r.onmessage=l=>{try{const{deserializer:g}=this._config;c.next(g(l))}catch(g){c.error(g)}}}_subscribe(a){const{source:t}=this;return t?t.subscribe(a):(this._socket||this._connectSocket(),this._output.subscribe(a),a.add(()=>{const{_socket:i}=this;0===this._output.observers.length&&(i&&(1===i.readyState||0===i.readyState)&&i.close(),this._resetState())}),a)}unsubscribe(){const{_socket:a}=this;a&&(1===a.readyState||0===a.readyState)&&a.close(),this._resetState(),super.unsubscribe()}}var z=s(2340),D=s(4377);let Z=(()=>{class n{constructor(t){this.authService=t,this.idUsuarioEmisor=this.authService.getUserID(),this.socket$=function Q(n){return new M(n)}(z.N.webSocket+this.idUsuarioEmisor)}connect(){return this.socket$}sendMessage(t){this.socket$.next(t)}close(){this.socket$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(D.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var K=s(5500);let k=(()=>{class n{constructor(t,i){this.webSocketService=t,this.backendService=i}getMyMensajes(t){return this.backendService.get("URImsUsuarios",`api/chat/${t}`)}sendMensaje(t){this.webSocketService.sendMessage(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Z),e.LFG(K.k))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var $=s(9114),V=s(9609),w=s(9401);function X(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",9),e.NdJ("mouseover",function(){e.CHM(t);const o=e.oxw();return e.KtG(0==o.initChat?o.scrollToBottom():"")}),e._uU(1),e.TgZ(2,"mat-icon",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.dialogRef.close())}),e._uU(3,"close"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.AsE(" Chate\xe1 con ",t.elOtroSwapper.nombre," ",t.elOtroSwapper.apellido," ")}}function ee(n,a){if(1&n&&(e.TgZ(0,"div",11)(1,"span",12),e._uU(2),e.qZA(),e.TgZ(3,"span",13),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"mat-icon",14),e._uU(7,"arrow_drop_down"),e.qZA()()),2&n){const t=a.$implicit,i=e.oxw();e.Q6J("ngClass",t.usuarioReceptor.idUsuario==i.userData.id_user||t.usuarioReceptor==i.userData.id_user?"otro":"mio"),e.xp6(2),e.Oqu(t.mensaje),e.xp6(2),e.Oqu(e.xi3(5,3,t.fechaHoraEnvio,"dd/MM HH:mm"))}}function te(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"textarea",15),e.NdJ("ngModelChange",function(o){e.CHM(t);const c=e.oxw();return e.KtG(c.nuevoMensaje=o)})("keyup.enter",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.sendMensaje())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("placeholder","Enviar mensaje a "+t.elOtroSwapper.nombre+" "+t.elOtroSwapper.apellido)("ngModel",t.nuevoMensaje)}}function ie(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.sendMensaje())}),e.TgZ(1,"mat-icon"),e._uU(2,"send"),e.qZA()()}}function ne(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.sendMensaje())}),e._uU(1,"Enviar"),e.qZA()}}let j=(()=>{class n{constructor(t,i,o,c,r){this.data=t,this.chatService=i,this.document=o,this.dialogRef=c,this.websocketService=r,this.mensajes=[],this.trueques=[],this.sentMessage=new e.vpe,this.nuevoMensaje="",this.origin="inline",this.initChat=0,t&&(this.mensajes=t.mensajes,this.userData=t.userData,this.elOtroSwapper=t.elOtroSwapper,this.trueques=t.trueques,this.userType=t.userType,this.publicacion=t.publicacion,this.origin="modal"),"inline"==this.origin&&r.connect().subscribe({next:u=>{console.log("message subscription",u,this.origin),this.mensajes.push(u)},error:u=>{console.error("WebSocket error:",u)}})}ngOnDestroy(){this.websocketService.close()}scrollToBottom(){const i=this.document.getElementById("inline"==this.origin?"chatContainer":"modal-chat-container");i&&(i.scrollTop=i.scrollHeight),this.initChat++}sendMensaje(){console.log("nuevo mensaje",this.nuevoMensaje);const t=this.trueques.find(c=>c.publicacionDTOorigen.idPublicacion==this.publicacion.idPublicacion&&"APROBADO"==c.estadoTrueque);t&&t.idTrueque&&this.websocketService.sendMessage({idTrueque:t.idTrueque,mensaje:this.nuevoMensaje,usuarioReceptor:"publicacionOrigen"==this.userType?t.publicacionDTOpropuesta.particularDTO.usuarioDTO.idUsuario:t.publicacionDTOorigen.particularDTO.usuarioDTO.idUsuario,fechaHoraEnvio:new Date}),this.nuevoMensaje="";const o=this.document.getElementById("inline"==this.origin?"chatContainer":"modal-chat-container");o&&(o.scrollTop=o.scrollHeight)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.WI,8),e.Y36(k),e.Y36(p.K0),e.Y36(b.so,8),e.Y36(Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chat"]],inputs:{mensajes:"mensajes",userData:"userData",elOtroSwapper:"elOtroSwapper",trueques:"trueques",userType:"userType",publicacion:"publicacion"},outputs:{sentMessage:"sentMessage"},decls:9,vars:14,consts:[["class","header",3,"mouseover",4,"ngIf"],[2,"margin-bottom","20px","overflow","auto","scrollbar-color","#888 #f1f1f1","scrollbar-width","thin",3,"id","mouseover"],["chatContainer",""],["class","mensaje",3,"ngClass",4,"ngFor","ngForOf"],[2,"display","flex",3,"mouseover"],["appearance","outline","floatLabel","always",2,"min-width","210px","width","100%"],["matInput","","style","resize: none;",3,"placeholder","ngModel","ngModelChange","keyup.enter",4,"ngIf"],["mat-fab","","color","primary","style","margin-top: 10px;",3,"click",4,"ngIf"],["mat-fab","","extended","","color","primary",3,"click",4,"ngIf"],[1,"header",3,"mouseover"],[2,"position","absolute","right","2rem",3,"click"],[1,"mensaje",3,"ngClass"],[2,"width","100%"],[2,"font-size","10px"],[1,"arrow-globo"],["matInput","",2,"resize","none",3,"placeholder","ngModel","ngModelChange","keyup.enter"],["mat-fab","","color","primary",2,"margin-top","10px",3,"click"],["mat-fab","","extended","","color","primary",3,"click"]],template:function(t,i){1&t&&(e.YNc(0,X,4,2,"div",0),e.TgZ(1,"div",1,2),e.NdJ("mouseover",function(){return 0==i.initChat?i.scrollToBottom():""}),e.YNc(3,ee,8,6,"div",3),e.qZA(),e.TgZ(4,"div",4),e.NdJ("mouseover",function(){return 0==i.initChat?i.scrollToBottom():""}),e.TgZ(5,"mat-form-field",5),e.YNc(6,te,1,2,"textarea",6),e.qZA(),e.YNc(7,ie,3,0,"button",7),e.YNc(8,ne,2,0,"button",8),e.qZA()),2&t&&(e.Q6J("ngIf","modal"==i.origin),e.xp6(1),e.Udp("max-height","inline"==i.origin?200:300,"px"),e.ekj("main-div","modal"==i.origin),e.Q6J("id","inline"==i.origin?"chatContainer":"modal-chat-container"),e.xp6(2),e.Q6J("ngForOf",i.mensajes),e.xp6(1),e.Udp("flex-direction","inline"==i.origin?"column":"row"),e.ekj("main-div","modal"==i.origin),e.xp6(2),e.Q6J("ngIf",i.elOtroSwapper),e.xp6(1),e.Q6J("ngIf","modal"==i.origin),e.xp6(1),e.Q6J("ngIf","inline"==i.origin))},dependencies:[$.KE,v.Hw,V.Nt,x.cs,w.Fj,w.JJ,w.On,p.mk,p.sg,p.O5,p.uU],styles:[".header[_ngcontent-%COMP%]{text-align:center;margin:20px;padding-bottom:20px;border-bottom:1px solid var(--light-grey)}#chatContainer[_ngcontent-%COMP%]{scrollbar-color:#888 #f1f1f1;scrollbar-width:thin}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:5px}#chatContainer[_ngcontent-%COMP%]{scroll-behavior:smooth}.main-div[_ngcontent-%COMP%]{margin:10px 20px;gap:20px}.mensaje[_ngcontent-%COMP%]{padding:10px;border-radius:15px;position:relative;margin:10px 5px 25px;display:flex;flex-direction:column;align-items:flex-end}.mensaje.mio[_ngcontent-%COMP%]{background:var(--primary-color)}.mensaje.mio[_ngcontent-%COMP%]   .arrow-globo[_ngcontent-%COMP%]{right:0;bottom:-25px;color:var(--primary-color)}.mensaje.otro[_ngcontent-%COMP%]{background-color:var(--light-grey)}.mensaje.otro[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{text-align:left}.mensaje.otro[_ngcontent-%COMP%]   .arrow-globo[_ngcontent-%COMP%]{left:0;bottom:-25px;color:var(--light-grey)}.mensaje[_ngcontent-%COMP%]   .arrow-globo[_ngcontent-%COMP%]{position:absolute;font-size:45px;width:45px;height:45px}"]}),n})();var oe=s(3073),ce=s(5763),ae=s(4666),m=s(3148),re=s(7876),se=s(4984),ue=s(6262);function le(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-main-card-publicacion",4),e.NdJ("intercambiarEvent",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.intercambiar())})("comprarEvent",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.comprar())}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("publicacion",t.publicacion)("userData",t.userData)("userType",t.userType)("compras",t.userCompras)}}function pe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.openChat())}),e.TgZ(1,"mat-icon"),e._uU(2,"open_in_full"),e.qZA()()}}function de(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"app-chat",22),e.NdJ("sentMessage",function(o){e.CHM(t);const c=e.oxw(3);return e.KtG(c.getMessages(o))}),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("mensajes",t.mensajes)("userData",t.userData)("elOtroSwapper",t.elOtroSwapper)("trueques",t.trueques)("userType",t.userType)("publicacion",t.publicacion)}}function ge(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6,7)(3,"div",8,9)(5,"h2",10)(6,"button",11)(7,"mat-icon"),e._uU(8,"question_answer"),e.qZA(),e.TgZ(9,"span",12)(10,"span"),e._uU(11,"Chat"),e.qZA()(),e.YNc(12,pe,3,0,"button",13),e.qZA()(),e.TgZ(13,"div",14)(14,"div",15),e.YNc(15,de,1,6,"ng-template"),e.qZA()()()(),e.TgZ(16,"div",16)(17,"div",17)(18,"app-card",18),e.NdJ("statusChanged",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.getPublicacion(o.id_publicacion))}),e.qZA()(),e.TgZ(19,"div",19)(20,"mat-icon",20),e._uU(21),e.qZA()(),e.TgZ(22,"div",17)(23,"app-card",18),e.NdJ("statusChanged",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.getTrueques())}),e.qZA()()()()}if(2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("collapsed",!1)("disabled",t.screenWidth>576),e.xp6(9),e.Q6J("ngIf",t.screenWidth>576),e.xp6(6),e.Q6J("cardData",t.mainPublicacionCard),e.xp6(3),e.hij(" ",t.screenWidth>992?"swap_horiz":"swap_vert"," "),e.xp6(2),e.Q6J("cardData",t.truequeAceptado[0])}}function he(n,a){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,le,2,4,"div",2),e.YNc(2,ge,24,6,"div",3),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",0==t.truequeAceptado.length&&t.userCompras),e.xp6(1),e.Q6J("ngIf",t.userData.isLoggedIn&&1==t.truequeAceptado.length&&t.mainPublicacionCard)}}function me(n,a){1&n&&(e.TgZ(0,"div",25),e._uU(1," Esta publicaci\xf3n no tiene nuevas propuestas a\xfan! "),e.qZA())}function be(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-deck",26),e.NdJ("statusChanged",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.getPublicacion(o.id_publicacion))}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("cardList",t.truequesActivos)("fullScreenWidth",!0)}}function _e(n,a){if(1&n&&(e.TgZ(0,"div")(1,"h3",23),e._uU(2," Historial de Trueques "),e.qZA(),e._UZ(3,"app-deck",27),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("cardList",t.historialTrueques)("fullScreenWidth",!0)}}function fe(n,a){if(1&n&&(e.TgZ(0,"div")(1,"div")(2,"h3",23),e._uU(3),e.qZA(),e.YNc(4,me,2,0,"div",24),e.YNc(5,be,2,2,"div",2),e.qZA(),e.YNc(6,_e,4,2,"div",2),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.hij(" ","publicacionPropuesta"==t.userType?"Mi Trueque Activo":"Propuestas de Trueque"," "),e.xp6(1),e.Q6J("ngIf",0==t.truequesActivos.length&&!t.loading),e.xp6(1),e.Q6J("ngIf",t.truequesActivos.length>0),e.xp6(1),e.Q6J("ngIf",t.historialTrueques.length>0)}}const Ce=[{path:"",component:(()=>{class n{constructor(t,i,o,c,r,u,l,g,O,_,d){this.truequeService=t,this.route=i,this.showErrorService=o,this.auth=c,this.router=r,this.usuarioService=u,this.dialog=l,this.comprasService=g,this.document=O,this.chatService=_,this.currencyPipe=d,this.loading=!1,this.publicacionesToShow=[],this.trueques=[],this.userType="notLoggedIn",this.truequeAceptado=[],this.historialTrueques=[],this.truequesActivos=[],this.userCompras=[],this.init=0,this.mensajes=[],this.nuevoMensaje="",this.initChat=0,this.userData={isSwapper:c.isUserSwapper(),isLoggedIn:c.isUserLoggedIn},this.route.paramMap.subscribe(h=>{this.loading=!0,this.id_publicacion=h.get("id_publicacion"),this.truequeAceptado=[],this.historialTrueques=[],this.truequesActivos=[],0!=this.init&&this.ngAfterViewInit(),this.init++}),this.screenWidth=window.innerWidth>0?window.innerWidth:screen.width}ngAfterViewInit(){this.userData&&this.userData.isLoggedIn?(this.userData.id_user=this.auth.getUserID(),this.usuarioService.getUserByID(this.auth.getUserID()).subscribe({next:t=>{this.userInfo=t,this.getPublicacion(this.id_publicacion)}})):this.getPublicacion(this.id_publicacion),this.scrollToBottom()}scrollToBottom(){const t=this.document.getElementById("chatContainer");t&&(t.scrollTop=t.scrollHeight)}getPublicacion(t){this.loading=!0,this.truequeService.getPublicacion(t).subscribe({next:i=>{this.publicacion=i,this.publicacion.parsedImagenes=this.publicacion.imagenes.split("|"),this.publicacion&&this.userInfo&&this.publicacion.particularDTO.idParticular==this.userInfo.particularDTO.idParticular&&(this.userType="publicacionOrigen"),this.userData.isLoggedIn?this.getTrueques():this.loading=!1},error:i=>{console.log(i),this.loading=!1}})}getTrueques(){this.loading=!0,this.truequesActivos.splice(0),this.historialTrueques.splice(0),this.truequeAceptado.splice(0),this.publicacionesToShow.splice(0),this.truequeService.getTruequesFromPublicacion(this.publicacion.idPublicacion).subscribe({next:t=>{if(this.trueques=t,"publicacionOrigen"!=this.userType&&this.userData.isLoggedIn)this.truequeService.getMisPublicaciones().subscribe({next:i=>{const o=i;for(const c of this.trueques){const r=o.find(u=>c.publicacionDTOpropuesta.idPublicacion==u.idPublicacion);r&&(r.estadoTrueque=c.estadoTrueque.trim(),this.publicacionesToShow.push(r),this.userType="publicacionPropuesta")}this.publicacionesToShow.map(c=>{c.parsedImagenes=c.imagenes.split("|")})},error:()=>{this.loading=!1},complete:()=>{this.parsePublicaciones(),this.loading=!1}});else if("publicacionOrigen"==this.userType&&this.userData.isLoggedIn){for(const i of t)i.publicacionDTOpropuesta.estadoTrueque=i.estadoTrueque.trim(),this.publicacionesToShow.push(i.publicacionDTOpropuesta);this.publicacionesToShow.map(i=>{i.parsedImagenes=i.imagenes.split("|")}),this.parsePublicaciones(),this.loading=!1}},error:()=>{this.loading=!1}})}intercambiar(){if(this.auth.isUserLoggedIn){let t;t=this.screenWidth<576?{data:{publicacion:this.publicacion,trueques:this.trueques},minWidth:"70vw",maxHeight:"80vh",position:{top:"50vh",left:"50vw"},panelClass:"makeItMiddle"}:{data:{publicacion:this.publicacion,trueques:this.trueques},minWidth:"80vw",maxHeight:"85vh"},this.dialog.open(R,t).afterClosed().subscribe(o=>{console.log("result trocar",o),o&&this.getTrueques()})}else C().fire({title:"\xa1Necesit\xe1s una cuenta!",text:"Para poder intercambiar, ten\xe9s que usar tu cuenta.",icon:"warning",confirmButtonText:"Iniciar sesi\xf3n",showCancelButton:!0,cancelButtonText:"Cancelar"}).then(({isConfirmed:t})=>{t&&this.router.navigate(["login"])})}comprar(){this.auth.isUserLoggedIn?this.comprasService.comprar(this.publicacion.idPublicacion).subscribe({next:t=>{console.log(t),C().fire({title:"\xa1Ya casi es tuyo!",text:"Termin\xe1 tu compra en Mercado Pago, luego podr\xe1s verla en Mis Compras!",icon:"success",confirmButtonText:"\xa1VAMOS!",allowOutsideClick:!1,allowEscapeKey:!1}).then(({isConfirmed:i})=>{i&&(this.router.navigate(["/mis-compras"]),window.open(t.initPoint,"_blank"))})}}):C().fire({title:"\xa1Necesit\xe1s una cuenta!",text:"Para poder comprar, ten\xe9s que usar tu cuenta.",icon:"warning",confirmButtonText:"Iniciar sesi\xf3n",showCancelButton:!0,cancelButtonText:"Cancelar"}).then(({isConfirmed:t})=>{t&&this.router.navigate(["login"])})}getButtonsForCards(){return"publicacionPropuesta"==this.userType?[{name:"CANCELAR",icon:"close",color:"warn",status:"CANCELADO",action:"change_status"}]:"publicacionOrigen"==this.userType?[{name:"ACEPTAR",icon:"check",color:"primary",status:"APROBADO",action:"change_status"},{name:"RECHAZAR",icon:"close",color:"warn",status:"RECHAZADO",action:"change_status"}]:[]}parsePublicaciones(){this.truequesActivos.splice(0),this.historialTrueques.splice(0),this.truequeAceptado.splice(0),this.mainPublicacionCard=void 0;const t=[],i=[],o=[];this.publicacionesToShow.sort((c,r)=>new Date(r.fechaPublicacion).getTime()-new Date(c.fechaPublicacion).getTime());for(const c of this.publicacionesToShow){const r={id:c.idPublicacion,imagen:c.parsedImagenes?c.parsedImagenes[0]:"no_image",titulo:c.titulo,valorPrincipal:`${this.currencyPipe.transform(c.valorTruequeMin)} - ${this.currencyPipe.transform(c.valorTruequeMax)}`,fecha:c.fechaPublicacion,usuario:{id:c.particularDTO.usuarioDTO.idUsuario,imagen:c.particularDTO.usuarioDTO.avatar,nombre:c.particularDTO.nombre+" "+c.particularDTO.apellido,puntaje:c.particularDTO.puntaje,localidad:c.particularDTO.direcciones[0].localidad},action:"detail",buttons:[],estado:c.estadoTrueque,idAuxiliar:this.trueques.find(u=>u.publicacionDTOpropuesta.idPublicacion==c.idPublicacion)?.idTrueque};if("APROBADO"==c.estadoTrueque){r.buttons="publicacionOrigen"==this.userType&&"RECIBIDO"!=c.estadoEnvio?[{name:"RECIBIDO",icon:"done_all",color:"primary",status:"RECIBIDA",action:"change_status"}]:"publicacionOrigen"==this.userType&&"RECIBIDO"==c.estadoEnvio?[{name:"OPINAR",icon:"rate_review",color:"opinion",status:"OPINAR",action:"opinar"}]:[],r.estadoAux=c.estadoEnvio,console.log(r),t.push(r);const u=this.trueques.find(l=>l.publicacionDTOpropuesta.idPublicacion==c.idPublicacion&&"APROBADO"==l.estadoTrueque);u&&(this.elOtroSwapper="publicacionOrigen"==this.userType?u.publicacionDTOpropuesta.particularDTO:u.publicacionDTOorigen.particularDTO,this.chatService.getMyMensajes(u.idTrueque).subscribe({next:l=>{this.mensajes=l}}))}else"PENDIENTE"==c.estadoTrueque&&"ABIERTA"==c.estadoPublicacion?(r.valorSecundario=c.precioVenta?`${this.currencyPipe.transform(c.precioVenta)}`:void 0,r.buttons=this.getButtonsForCards(),i.push(r)):(r.disabled=!0,o.push(r))}this.mainPublicacionCard={id:this.publicacion.idPublicacion,imagen:this.publicacion.parsedImagenes?this.publicacion.parsedImagenes[0]:"no_image",titulo:this.publicacion.titulo,valorPrincipal:`${this.currencyPipe.transform(this.publicacion.valorTruequeMin)} - ${this.currencyPipe.transform(this.publicacion.valorTruequeMax)}`,fecha:this.publicacion.fechaPublicacion,usuario:{id:this.publicacion.particularDTO.usuarioDTO.idUsuario,imagen:this.publicacion.particularDTO.usuarioDTO.avatar,nombre:this.publicacion.particularDTO.nombre+" "+this.publicacion.particularDTO.apellido,puntaje:this.publicacion.particularDTO.puntaje,localidad:this.publicacion.particularDTO.direcciones[0].localidad},action:"detail",codigo:"Publicaci\xf3n",buttons:"publicacionPropuesta"==this.userType&&"RECIBIDO"!=this.publicacion.estadoEnvio?[{name:"RECIBIDO",icon:"done_all",color:"primary",status:"RECIBIDA",action:"change_status"}]:"publicacionPropuesta"==this.userType&&"RECIBIDO"==this.publicacion.estadoEnvio?[{name:"OPINAR",icon:"rate_review",color:"opinion",status:"OPINAR",action:"opinar"}]:[],estado:this.publicacion.estadoPublicacion,idAuxiliar:this.trueques.find(c=>c.publicacionDTOpropuesta.idPublicacion==this.publicacion.idPublicacion)?.idTrueque,estadoAux:this.publicacion.estadoEnvio},this.truequeAceptado=t,this.truequesActivos=i,this.historialTrueques=o,this.truequeAceptado.length>0&&"publicacionPropuesta"==this.userType&&(this.mainPublicacionCard.estado=void 0)}hasApprovedTrueque(){return this.publicacionesToShow.filter(t=>"APROBADO"==t.estadoTrueque)}openChat(){this.dialog.open(j,{data:{mensajes:this.mensajes,userData:this.userData,elOtroSwapper:this.elOtroSwapper,trueques:this.trueques,userType:this.userType,publicacion:this.publicacion},minHeight:"50vh",minWidth:"50vw"}).afterClosed().subscribe(i=>{console.log("result chat",i);const o=this.trueques.find(c=>c.publicacionDTOorigen.idPublicacion==this.publicacion.idPublicacion&&"APROBADO"==c.estadoTrueque);o&&this.getMessages(o.idTrueque)})}getMessages(t){this.chatService.getMyMensajes(t).subscribe({next:i=>{this.mensajes=i}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(A.x),e.Y36(f.gz),e.Y36(oe.x),e.Y36(D.e),e.Y36(f.F0),e.Y36(ce.i),e.Y36(b.uw),e.Y36(ae.K),e.Y36(p.K0),e.Y36(k),e.Y36(p.H9))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-publicacion"]],decls:5,vars:3,consts:[["id","main-publicacion",1,"app-main-div",3,"mouseover"],[3,"loading"],[4,"ngIf"],["class","main-row",4,"ngIf"],[3,"publicacion","userData","userType","compras","intercambiarEvent","comprarEvent"],[1,"main-row"],["ngbAccordion","",1,"dense-3",2,"min-width","255px"],["accordion","ngbAccordion"],["ngbAccordionItem","first",3,"collapsed","disabled"],["first","ngbAccordionItem"],["ngbAccordionHeader",""],["ngbAccordionButton","",1,"bg-transparent","accordion-header-button"],[2,"margin-left","10px","display","flex","align-items","center","gap","10px"],["mat-mini-fab","","class","open-chat",3,"click",4,"ngIf"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[1,"row"],[1,"col-sm-12","col-lg-5"],["app","publicaciones",3,"cardData","statusChanged"],[1,"col-sm-12","col-lg-2",2,"display","flex","align-items","center","justify-content","center"],[1,"swap-icon"],["mat-mini-fab","",1,"open-chat",3,"click"],[3,"mensajes","userData","elOtroSwapper","trueques","userType","publicacion","sentMessage"],[2,"margin","20px 0 0 5px","font-weight","bold"],["style","text-align: center;",4,"ngIf"],[2,"text-align","center"],["app","publicaciones",3,"cardList","fullScreenWidth","statusChanged"],["app","publicaciones",3,"cardList","fullScreenWidth"]],template:function(t,i){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0),e.NdJ("mouseover",function(){return 0==i.initChat?i.scrollToBottom():""}),e._UZ(2,"app-spinner",1),e.YNc(3,he,3,2,"div",2),e.YNc(4,fe,7,4,"div",2),e.qZA()),2&t&&(e.xp6(2),e.Q6J("loading",i.loading),e.xp6(1),e.Q6J("ngIf",!i.loading),e.xp6(1),e.Q6J("ngIf",i.userData.isLoggedIn&&0==i.truequeAceptado.length&&i.mainPublicacionCard&&"ABIERTA"==i.mainPublicacionCard.estado))},dependencies:[p.O5,v.Hw,x.nh,m.fD,m.QQ,m.VE,m.I,m.fA,m.ud,re.G,se.O,S.A,q.o,j,ue.r],styles:["#main-publicacion[_ngcontent-%COMP%]{padding:2%}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]{padding:10px 0}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]{margin:0}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-header-button[_ngcontent-%COMP%]{height:40px;font-size:14px;padding:10px;display:flex;justify-content:space-between}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   .accordion-header-button[_ngcontent-%COMP%]   .open-chat[_ngcontent-%COMP%]{background-color:var(--info)}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]{scrollbar-color:#888 #f1f1f1;scrollbar-width:thin}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:5px}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:5px}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   #chatContainer[_ngcontent-%COMP%]{scroll-behavior:smooth}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]{padding:10px;border-radius:15px;position:relative;margin:10px 5px 25px;display:flex;flex-direction:column;align-items:flex-end}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje.mio[_ngcontent-%COMP%]{background:var(--primary-color)}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje.mio[_ngcontent-%COMP%]   .arrow-globo[_ngcontent-%COMP%]{right:0;bottom:-25px;color:var(--primary-color)}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje.otro[_ngcontent-%COMP%]{background-color:var(--light-grey)}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje.otro[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{text-align:left}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje.otro[_ngcontent-%COMP%]   .arrow-globo[_ngcontent-%COMP%]{left:0;bottom:-25px;color:var(--light-grey)}#main-publicacion[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%]   .arrow-globo[_ngcontent-%COMP%]{position:absolute;font-size:45px;width:45px;height:45px}#main-publicacion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}#main-publicacion[_ngcontent-%COMP%]   .main-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 5fr;gap:20px}#main-publicacion[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .half-card[_ngcontent-%COMP%]{max-width:60%}#main-publicacion[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .half-deck[_ngcontent-%COMP%]{max-width:40%}#main-publicacion[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .swap-icon[_ngcontent-%COMP%]{font-size:45px;width:45px;height:45px;color:var(--primary-color)}#main-publicacion[_ngcontent-%COMP%]   .donacion-example-header-image[_ngcontent-%COMP%]{background-image:url(perfiles-17.f67e69cf999cd190.jpg);background-size:cover}#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr 1fr;gap:1rem}#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .imagenes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:65px;margin:5px;border-radius:5px;box-shadow:2px 2px 5px var(--dark-grey)}#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]{display:flex;flex-direction:column}#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .donacion-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px auto;width:150px}#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .aprobada[_ngcontent-%COMP%]{color:var(--success);font-weight:500}#main-publicacion[_ngcontent-%COMP%]   .donacion-card-content[_ngcontent-%COMP%]   .rechazada[_ngcontent-%COMP%]{color:var(--warn)}@media (min-width: 0px) and (max-width: 576px){.card-content[_ngcontent-%COMP%], .donacion-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr!important}.main-row[_ngcontent-%COMP%]{grid-template-columns:1fr!important}}@media (min-width: 768px){.accordion-button[_ngcontent-%COMP%]:after{display:none}}"]}),n})()}];let Pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(Ce),f.Bz]}),n})();var Oe=s(9433),ve=s(9499),xe=s(4466),Te=s(6012);let Me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[p.H9],imports:[p.ez,Pe,Oe.q,m.IJ,ve.O,xe.m,Te.QW]}),n})()}}]);