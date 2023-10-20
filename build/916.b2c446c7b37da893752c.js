"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[916],{1916:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var r=t(5893),o=t(4611),a=t(2327),c=t(9161),l=t(7294);var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},s=(0,l.memo)((function(e){var n=e.className,t=e.value,a=e.onChange,c=e.type,s=void 0===c?"text":c,u=e.placeholder,f=e.autofocus,d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["className","value","onChange","type","placeholder","autofocus"]),p=(0,l.useRef)(null),v=(0,l.useState)(!1),h=v[0],m=v[1],y=(0,l.useState)(0),g=y[0],b=y[1];return(0,l.useEffect)((function(){var e;f&&(m(!0),null===(e=p.current)||void 0===e||e.focus())}),[f]),(0,r.jsxs)("div",i({className:(0,o.A)("LuFDUWoP",{},[n])},{children:[u&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(u,">")})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:p,type:s,value:t,onChange:function(e){null==a||a(e.target.value),b(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){m(!0)},onBlur:function(){m(!1)},onSelect:function(e){var n;b((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)}},d)),h&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*g,"px")}})]}))]}))})),u=t(6372);const f={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var d,p=function(){return p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},p.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(d||(d={}));var v=function(e){var n,t=e.className,a=e.text,c=e.title,l=e.theme,i=void 0===l?d.PRIMARY:l;return(0,r.jsxs)("div",p({className:(0,o.A)(f.Text,(n={},n[f[i]]=!0,n),[t])},{children:[c&&(0,r.jsx)("p",p({className:f.title},{children:c})),a&&(0,r.jsx)("p",p({className:f.text},{children:a}))]}))},h=function(e){var n=e.children,t=e.reducers,o=e.removeAfterUnmount,a=(0,u.oR)(),c=(0,u.I0)();return(0,l.useEffect)((function(){return Object.entries(t).forEach((function(e){var n=e[0],t=e[1];a.reducerManager.add(n,t),c({type:"@INIT ".concat(n," reducer")})})),function(){o&&Object.entries(t).forEach((function(e){var n=e[0];e[1],a.reducerManager.remove(n),c({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:n})},m=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.username)||""},y=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.password)||""},g=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.isLoading)||!1},b=function(e){var n;return null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.error},x=t(7168),j=t(9669),w=t.n(j),O=t(3372),N=t(7665),C=(0,x.hg)("login/loginByUsername",(function(e,n){return t=void 0,r=void 0,a=function(){var t,r;return function(e,n){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(i){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,r=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){c.label=l[1];break}if(6===l[0]&&c.label<o[1]){c.label=o[1],o=l;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(l);break}o[2]&&c.ops.pop(),c.trys.pop();continue}l=n.call(e,c)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,w().post("http://localhost:8000/login",e)];case 1:if(!(t=o.sent()).data)throw new Error;return localStorage.setItem(N.z,JSON.stringify(t.data)),n.dispatch(O.hI.setAuthData(t.data)),[2,t.data];case 2:return r=o.sent(),console.log(r),[2,n.rejectWithValue("error")];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function c(e){try{i(a.next(e))}catch(e){n(e)}}function l(e){try{i(a.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,l)}i((a=a.apply(t,r||[])).next())}));var t,r,o,a})),P=(0,x.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(C.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(C.fulfilled,(function(e){e.isLoading=!1})).addCase(C.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),k=P.actions,R=P.reducer;const E="PQPa1eB5";var I=function(){return I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)},L={loginForm:R};const S=(0,l.memo)((function(e){var n=e.className,t=(0,a.$)().t,i=(0,u.I0)(),f=(0,u.v9)(m),p=(0,u.v9)(y),x=(0,u.v9)(g),j=(0,u.v9)(b),w=(0,l.useCallback)((function(e){i(k.setUsername(e))}),[i]),O=(0,l.useCallback)((function(e){i(k.setPassword(e))}),[i]),N=(0,l.useCallback)((function(){i(C({username:f,password:p}))}),[i,p,f]);return(0,r.jsx)(h,I({removeAfterUnmount:!0,reducers:L},{children:(0,r.jsxs)("div",I({className:(0,o.A)("xYNEfcE9",{},[n])},{children:[(0,r.jsx)(v,{title:t("Форма авторизации")}),j&&(0,r.jsx)(v,{text:t("Вы ввели неверный логин или пароль"),theme:d.ERROR}),(0,r.jsx)(s,{autofocus:!0,type:"text",className:E,placeholder:t("Введите username"),onChange:w,value:f}),(0,r.jsx)(s,{type:"text",className:E,placeholder:t("Введите пароль"),onChange:O,value:p}),(0,r.jsx)(c.zx,I({theme:c.bn.OUTLINE,className:"Ok_5amJo",onClick:N,disabled:x},{children:t("Войти")}))]}))}))}))}}]);