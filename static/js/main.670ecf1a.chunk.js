(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{65:function(e,t,a){e.exports=a(77)},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),c=a(14),o=(a(74),a(31)),s=a(25),u=a(120),d=a(129),m=function(e){return{type:"LOGIN_ERROR",loginError:e}};function b(){var e=Object(c.c)((function(e){return e.loginError})),t=Object(c.c)((function(e){return e.accept})),a=Object(c.b)();return r.a.createElement("form",{className:"sign__form",onSubmit:function(t){return function(t){console.log(t.target.login),t.preventDefault();var n=t.target.login.value,r=t.target.password.value;fetch("./fakeBackEnd/users/".concat(n,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){t.ok?(""!==e&&a(m("")),t.json().then((function(e){e.username===n&&e.password===r?a(function(e){return{type:"LOGIN_SUCSESS",userName:e,accept:!0}}(n)):a(m("Incorrect Password!"))})).catch((function(e){console.log("Error Reading data "+e)}))):a(m("Login not found!"))}))}(t)}},r.a.createElement(d.a,{className:"input",label:"Name",name:"login"}),r.a.createElement(d.a,{className:"input",label:"Password",name:"password",type:"password"}),r.a.createElement(u.a,{className:"signIn",variant:"contained",type:"submit",color:"primary"},"Sign In"),!0===t?r.a.createElement(s.a,{push:!0,to:"/ttask.github.io/list"}):e)}var g=a(26),p=a(121),f=a(123),E=a(127),h=a(126),y=a(122),v=a(124),O=a(125),j=a(119),N=Object(p.a)({mainDiv:{minWidth:"100%",display:"flex",justifyContent:"center"},tableDiv:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"100%"},table:{width:"100%"},inputFilter:{alignSelf:"flex-start"}});function w(e,t,a,n,r,l,i){return{id:e,country:t,region:a,city:n,street:r,build:l,notes:i}}var k=[w(null,null,null,null,null,null,null)];function _(){var e=Object(c.c)((function(e){return e.mainTable})),t=N(),a=Object(c.b)(),l=Object(n.useState)({country:""}),i=Object(g.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)(),b=Object(g.a)(m,2),p=b[0],_=b[1],S=Object(n.useState)(""),R=Object(g.a)(S,2),T=R[0],I=R[1],L=Object(c.c)((function(e){return e.accept})),D=Object(s.f)();return!1===L?r.a.createElement(s.a,{to:"/ttask.github.io/"}):(e.null&&fetch("./fakeBackEnd/adresses/Adresses.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){e.ok?e.json().then((function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=n[t],l=Object(g.a)(r,2),i=l[0],c=l[1];k[i]=w(c.id,c.country,c.region,c.city,c.street,c.build,c.notes)}_(k),a({type:"PUSH_TABLE",mainTable:k})})).catch((function(e){console.log("Error Reading data "+e)})):(console.log("Error Reading data "),a({type:"DATA_ERROR",dbError:"Database not found!"}))})),r.a.createElement("div",{className:t.mainDiv},r.a.createElement("div",{className:t.tableDiv},r.a.createElement(d.a,{className:t.inputFilter,id:"outlined-search",type:"search",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443",variant:"outlined",name:"country",value:o.country,onChange:function(e){return function(e){e.preventDefault(),k=[];for(var t=0,a=Object.entries(p);t<a.length;t++){var n=a[t],r=Object(g.a)(n,2),l=r[0],i=r[1];0!==i.country.indexOf(e.target.value)&&1!==i.country.indexOf(e.target.value)||(k[l]=w(i.id,i.country,i.region,i.city,i.street,i.build,i.notes))}0===k.length?I("\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u044b \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"):I(""),u({country:e.target.value})}(e)}}),r.a.createElement(y.a,{className:t.table,component:j.a},r.a.createElement(f.a,{"aria-label":"simple table"},r.a.createElement(v.a,null,r.a.createElement(O.a,null,r.a.createElement(h.a,null,"\u0421\u0442\u0440\u0430\u043d\u0430"),r.a.createElement(h.a,{align:"right"},"\u0420\u0435\u0433\u0438\u043e\u043d"),r.a.createElement(h.a,{align:"right"},"\u041d\u0430\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442"),r.a.createElement(h.a,{align:"right"},"\u0423\u043b\u0438\u0446\u0430"),r.a.createElement(h.a,{align:"right"},"\u0414\u043e\u043c/\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430/\u043a\u043e\u0440\u043f\u0443\u0441"))),r.a.createElement(E.a,null,k.map((function(e){return r.a.createElement(O.a,{key:e.id,className:"selectRow",onClick:function(){return t=e.id,void D.push("/ttask.github.io/address/"+t);var t},id:"adresRow"+e.id},r.a.createElement(h.a,{component:"th",scope:"row"},e.country),r.a.createElement(h.a,{align:"right"},e.region),r.a.createElement(h.a,{align:"right"},e.city),r.a.createElement(h.a,{align:"right"},e.street),r.a.createElement(h.a,{align:"right"},e.build))}))))),T)))}function S(){var e=Object(c.c)((function(e){return e.userName})),t=Object(c.c)((function(e){return e.accept})),a=Object(c.b)(),n="";return!0===t&&(n=r.a.createElement(u.a,{variant:"outlined",color:"primary",onClick:function(e){return e.preventDefault(),a({type:"LOG_OUT"}),r.a.createElement(s.a,{exact:!0,to:"/ttask.github.io/"})}},"\u0412\u044b\u0439\u0442\u0438")),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerInner"},r.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442 ",e),n))}var R=a(12),T=a(130),I=a(128),L=Object(p.a)({input:{paddingBottom:15},signIn:{paddingTop:10}});function D(){for(var e=Object(s.g)().id,t=Object(c.c)((function(t){return t.mainTable[e]})),a=Object(c.c)((function(e){return e.mainTable})),n=L(),l=[],i=[],o=[],m=[],b=0,p=Object.entries(a);b<p.length;b++){var f=p[b],E=Object(g.a)(f,2),h=E[0],y=E[1];l[h]={title:y.country},i[h]={title:y.region},o[h]={title:y.city},m[h]={title:y.street}}for(var v=1,O=1;v<l.length;v++)l[v].title!==l[v-1].title&&(l[O++]=l[v]);l.length=O;return t&&e?r.a.createElement("div",{style:{display:"grid",justifyContent:"center"}},r.a.createElement("div",{style:{width:230,marginBottom:30,borderRadius:10,border:"1px solid black"}},r.a.createElement(I.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("div",{className:"card__item"},t.country),r.a.createElement("div",{className:"card__item"},t.region),r.a.createElement("div",{className:"card__item"},t.city),r.a.createElement("div",{className:"card__item"},t.street),r.a.createElement("div",{className:"card__item"},t.build),r.a.createElement("div",{className:"card__item"},t.notes))),r.a.createElement("h2",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var a=t.target,n=Object(R.a)({},e,{id:e,country:a.country.value,region:a.region.value,city:a.city.value,street:a.street.value,build:a.build.value,notes:a.build.value});fetch("../fakeBackEnd/file.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){alert("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e(\u0411\u044b\u043b\u043e \u0431\u044b, \u043d\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043d\u0435\u0442, \u043f\u043e \u044d\u0442\u043e\u043c\u0443, \u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d, \u0430 \u043e\u0442\u0432\u0435\u0442 404)"),console.log(e),window.history.go(-1)})).catch((function(e){return console.error(e)}))}(t)}},r.a.createElement(I.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(T.a,{freeSolo:!0,id:"free-solo-demo",options:l,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0421\u0442\u0440\u0430\u043d\u0430",name:"country"}))}}),r.a.createElement(T.a,{freeSolo:!0,id:"free-solo-demo",options:i,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0420\u0435\u0433\u0438\u043e\u043d",name:"region"}))}}),r.a.createElement(T.a,{freeSolo:!0,id:"free-solo-demo",options:o,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0413\u043e\u0440\u043e\u0434",name:"city"}))}}),r.a.createElement(T.a,{freeSolo:!0,id:"free-solo-demo",options:m,getOptionLabel:function(e){return e.title},style:{width:230,display:"grid"},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{className:n.input,id:"standard-basic",label:"\u0423\u043b\u0438\u0446\u0430",name:"street"}))}}),r.a.createElement(d.a,{className:n.input,id:"standard-basic",label:"\u0414\u043e\u043c/\u043a\u043e\u0440\u043f\u0443\u0441/\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",name:"build",style:{width:230,display:"grid"}}),r.a.createElement(d.a,{className:n.input,id:"outlined-basic",label:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435",name:"notes",variant:"outlined",style:{width:230,display:"grid"}}),r.a.createElement(u.a,{className:n.signIn,variant:"contained",type:"submit",color:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))):r.a.createElement(s.a,{to:"/ttask.github.io/"})}var x=function(){return r.a.createElement(o.a,null,r.a.createElement(S,null),r.a.createElement(s.b,{exact:!0,path:"/ttask.github.io/"},r.a.createElement(b,null)),r.a.createElement(s.b,{path:"/ttask.github.io/list"},r.a.createElement(_,null)),r.a.createElement(s.b,{path:"/ttask.github.io/address/:id"},r.a.createElement(D,null)))};a(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(36),A=a(38),B={userName:"Guest",accept:!1,loginError:"",mainTable:{null:{id:null,country:null,region:null,city:null,street:null,build:null}},singleRow:null};var G=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(C.a)({},e,{loginError:t.loginError});case"LOGIN_SUCSESS":return Object(C.a)({},e,{userName:t.userName,accept:t.accept});case"LOG_OUT":return{userName:"\u0413\u043e\u0441\u0442\u044c",accept:!1,loginError:"",mainTable:{null:{id:null,country:null,region:null,city:null,street:null,build:null}},singleRow:null};case"PUSH_TABLE":return Object(C.a)({},e,{mainTable:t.mainTable});case"PUSH_ROW":return Object(C.a)({},e,Object(R.a)({},e.mainTable,Object(R.a)({},t.id,t.newTable)));case"DATA_ERROR":return Object(C.a)({},e,{dbErr:t.dbErr});default:return e}}));i.a.render(r.a.createElement(c.a,{store:G},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.670ecf1a.chunk.js.map