(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{67:function(e,t,a){e.exports=a(81)},76:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),c=a(14),o=(a(76),a(31)),s=a(25),u=a(125),d=a(135),m=a(12),b=function(e){return{type:"LOGIN_ERROR",loginError:e}};function g(){var e=Object(c.c)((function(e){return e.loginError})),t=Object(c.c)((function(e){return e.accept})),a=Object(c.b)(),n=function(t){!function(e,t,a){console.log(e.target.login),e.preventDefault();var n=e.target.login.value,r=e.target.password.value;fetch("./fakeBackEnd/users/".concat(n,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.ok?(""!==t&&a(b("")),e.json().then((function(e){e.username===n&&e.password===r?a(function(e){return{type:"LOGIN_SUCSESS",userName:e,accept:!0}}(n)):a(b("Incorrect Password!"))})).catch((function(e){console.log("Error Reading data "+e)}))):a(b("Login not found!"))}))}(t,e,a)};return r.a.createElement("div",{className:"main__inner"},r.a.createElement("form",{className:"sign__form",onSubmit:function(e){return n(e)}},r.a.createElement(d.a,{className:"input",label:"Name",name:"login"}),r.a.createElement(d.a,{className:"input",label:"Password",name:"password",type:"password"}),r.a.createElement(u.a,{className:"signIn",variant:"contained",type:"submit",color:"primary"},"Sign In"),!0===t?r.a.createElement(s.a,{push:!0,to:"/ttask.github.io/list"}):e))}var p=a(26),E=a(127),f=a(131),h=a(130),v=a(126),y=a(128),O=a(129),j=a(124);function _(e,t,a,n,r,l,i){return{id:e,country:t,region:a,city:n,street:r,build:l,notes:i}}var N=[_(null,null,null,null,null,null,null)];function w(){var e=Object(c.c)((function(e){return e.mainTable})),t=Object(c.b)(),a=Object(n.useState)({country:""}),l=Object(p.a)(a,2),i=l[0],o=l[1],u=Object(n.useState)(),m=Object(p.a)(u,2),b=m[0],g=m[1],w=Object(n.useState)(""),k=Object(p.a)(w,2),S=k[0],R=k[1],T=Object(c.c)((function(e){return e.accept})),I=Object(s.f)();return!1===T?r.a.createElement(s.a,{to:"/ttask.github.io/"}):(e.null&&fetch("./fakeBackEnd/adresses/Adresses.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.ok?e.json().then((function(e){for(var a=0,n=Object.entries(e);a<n.length;a++){var r=n[a],l=Object(p.a)(r,2),i=l[0],c=l[1];N[i]=_(c.id,c.country,c.region,c.city,c.street,c.build,c.notes)}g(N),t({type:"PUSH_TABLE",mainTable:N})})).catch((function(e){console.log("Error Reading data "+e)})):(console.log("Error Reading data "),t({type:"DATA_ERROR",dbError:"Database not found!"}))})),r.a.createElement("div",{className:"main__tableDiv"},r.a.createElement("div",{className:"tableDiv"},r.a.createElement(d.a,{className:"inputFilter",id:"outlined-search",type:"search",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443",variant:"outlined",name:"country",value:i.country,onChange:function(e){return function(e){e.preventDefault(),N=[];for(var t=0,a=Object.entries(b);t<a.length;t++){var n=a[t],r=Object(p.a)(n,2),l=r[0],i=r[1];0!==i.country.indexOf(e.target.value)&&1!==i.country.indexOf(e.target.value)||(N[l]=_(i.id,i.country,i.region,i.city,i.street,i.build,i.notes))}0===N.length?R("\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u044b \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"):R(""),o({country:e.target.value})}(e)}}),r.a.createElement(v.a,{className:"table",component:j.a},r.a.createElement(E.a,{"aria-label":"simple table"},r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(h.a,null,"\u0421\u0442\u0440\u0430\u043d\u0430"),r.a.createElement(h.a,{align:"right"},"\u0420\u0435\u0433\u0438\u043e\u043d"),r.a.createElement(h.a,{align:"right"},"\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442"),r.a.createElement(h.a,{align:"right"},"\u0423\u043b\u0438\u0446\u0430"),r.a.createElement(h.a,{align:"right"},"\u0414\u043e\u043c/\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430/\u043a\u043e\u0440\u043f\u0443\u0441"))),r.a.createElement(f.a,null,N.map((function(e){return r.a.createElement(O.a,{key:e.id,className:"selectRow",onClick:function(){return t=e.id,void I.push("/ttask.github.io/address/"+t);var t},id:"adresRow"+e.id},r.a.createElement(h.a,{component:"th",scope:"row"},e.country),r.a.createElement(h.a,{align:"right"},e.region),r.a.createElement(h.a,{align:"right"},e.city),r.a.createElement(h.a,{align:"right"},e.street),r.a.createElement(h.a,{align:"right"},e.build))}))))),S)))}function k(){var e=Object(c.c)((function(e){return e.userName})),t=Object(c.c)((function(e){return e.accept})),a=Object(c.b)(),n="";return!0===t&&(n=r.a.createElement(u.a,{variant:"contained",onClick:function(e){return e.preventDefault(),a({type:"LOG_OUT"}),r.a.createElement(s.a,{exact:!0,to:"/ttask.github.io/"})}},"\u0412\u044b\u0439\u0442\u0438")),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerInner"},r.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442 ",e,"!"),n))}var S=a(136),R=a(133),T=a(132),I=a(134),L=a(58),B=a.n(L),D=Object(T.a)({input:{paddingBottom:15},signIn:{paddingTop:10,marginBottom:30}});function A(){for(var e=Object(s.g)().id,t=Object(c.c)((function(t){return t.mainTable[e]})),a=Object(c.c)((function(e){return e.mainTable})),n=D(),l=[],i=[],o=[],b=[],g=0,E=Object.entries(a);g<E.length;g++){var f=E[g],h=Object(p.a)(f,2),v=h[0],y=h[1];l[v]={title:y.country},i[v]={title:y.region},o[v]={title:y.city},b[v]={title:y.street}}for(var O=1,j=1;O<l.length;O++)l[O].title!==l[O-1].title&&(l[j++]=l[O]);l.length=j;var _=function(e,t){!function(e,t){e.preventDefault();var a=e.target,n=Object(m.a)({},t,{id:t,country:a.country.value,region:a.region.value,city:a.city.value,street:a.street.value,build:a.build.value,notes:a.build.value});fetch("../fakeBackEnd/file.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){alert("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e(\u0411\u044b\u043b\u043e \u0431\u044b, \u043d\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043d\u0435\u0442, \u043f\u043e \u044d\u0442\u043e\u043c\u0443, \u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d, \u0430 \u043e\u0442\u0432\u0435\u0442 404)"),console.log(e),window.history.go(-1)})).catch((function(e){return console.error(e)}))}(e,t)};return t&&e?r.a.createElement("div",{className:"main__addressDIv"},r.a.createElement("div",{className:"address__card"},r.a.createElement(R.a,{style:{width:230,marginBottom:30,borderRadius:10,border:"1px solid black"},container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("div",{className:"card__item"},t.country),r.a.createElement("div",{className:"card__item"},t.region),r.a.createElement("div",{className:"card__item"},t.city),r.a.createElement("div",{className:"card__item"},t.street),r.a.createElement("div",{className:"card__item"},t.build),r.a.createElement("div",{className:"card__item"},t.notes))),r.a.createElement("div",{className:"edit__form"},r.a.createElement(I.a,{className:"edit__button",color:"secondary","aria-label":"edit",onClick:function(){return function(){var e=document.querySelector(".edit__button"),t=document.querySelector(".address__form");document.querySelector(".hidden")?(t.style.opacity=".3",t.style.pointerEvents="none",e.classList.remove("hidden")):(t.style.opacity="1",t.style.pointerEvents="unset",e.classList.add("hidden"))}()}},r.a.createElement(B.a,null)),r.a.createElement("div",{className:"address__form"},r.a.createElement("h2",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("form",{onSubmit:function(t){return _(t,e)}},r.a.createElement(R.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(S.a,{freeSolo:!0,id:"free-solo-demo",options:l,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0421\u0442\u0440\u0430\u043d\u0430",name:"country"}))}}),r.a.createElement(S.a,{freeSolo:!0,id:"free-solo-demo",options:i,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0420\u0435\u0433\u0438\u043e\u043d",name:"region"}))}}),r.a.createElement(S.a,{freeSolo:!0,id:"free-solo-demo",options:o,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0413\u043e\u0440\u043e\u0434",name:"city"}))}}),r.a.createElement(S.a,{freeSolo:!0,id:"free-solo-demo",options:b,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0423\u043b\u0438\u0446\u0430",name:"street"}))}}),r.a.createElement(d.a,{className:n.input,id:"standard-basic",label:"\u0414\u043e\u043c/\u043a\u043e\u0440\u043f\u0443\u0441/\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",name:"build",style:{width:230,display:"grid"}}),r.a.createElement(d.a,{className:n.input,id:"outlined-basic",label:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435",name:"notes",variant:"outlined",style:{width:230,display:"grid"}}),r.a.createElement(u.a,{className:n.signIn,variant:"contained",type:"submit",color:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))):r.a.createElement(s.a,{to:"/ttask.github.io/"})}var C=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"root__inner"},console.log(window.location.href),r.a.createElement(k,null),r.a.createElement(s.b,{exact:!0,path:"/ttask.github.io/"},r.a.createElement(g,null)),r.a.createElement(s.b,{path:"/ttask.github.io/list"},r.a.createElement(w,null)),r.a.createElement(s.b,{path:"/ttask.github.io/address/:id"},r.a.createElement(A,null))))};a(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(36),U=a(38),x={userName:"Guest",accept:!1,loginError:"",mainTable:{null:{id:null,country:null,region:null,city:null,street:null,build:null}},singleRow:null};var P=Object(U.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(G.a)({},e,{loginError:t.loginError});case"LOGIN_SUCSESS":return Object(G.a)({},e,{userName:t.userName,accept:t.accept});case"LOG_OUT":return{userName:"\u0413\u043e\u0441\u0442\u044c",accept:!1,loginError:"",mainTable:{null:{id:null,country:null,region:null,city:null,street:null,build:null}},singleRow:null};case"PUSH_TABLE":return Object(G.a)({},e,{mainTable:t.mainTable});case"PUSH_ROW":return Object(G.a)({},e,Object(m.a)({},e.mainTable,Object(m.a)({},t.id,t.newTable)));case"DATA_ERROR":return Object(G.a)({},e,{dbErr:t.dbErr});default:return e}}));i.a.render(r.a.createElement(c.a,{store:P},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.cc108a1a.chunk.js.map