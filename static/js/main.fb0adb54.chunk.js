(this["webpackJsonpmonitor-crypto"]=this["webpackJsonpmonitor-crypto"]||[]).push([[0],{35:function(t,e,c){},55:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),a=c(6),o=c.n(a),i=c(4),s=(c(35),function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;c(t),n(t),r(t),a(t),o(t)}))}),u=c(2),l="GET_CRYPTO_SUCCESS",j="GET_CRYPTO_FAILURE",d="GET_CRYPTO_STARTED",b="GET_CRYPTO_ENDED",O="CHANGE_THEME",p=c(21),y=c.n(p),f=function(t){return{type:l,payload:Object(u.a)({},t)}},h=function(){return{type:d,payload:{loading:!0}}},g=function(){return{type:b,payload:{loading:!1}}},m=function(t){return{type:j,payload:{error:t}}},x=c(22),E=c(1),T={backgroundColor:"#f1f1f1"},v={backgroundColor:"#403b3b"},_={color:"#f1f1f1"},C={color:"#403b3b"},S=function(t){var e=t.cryptos,c=e.cryptoName,n=e.cryptoCurrencies,r=Object(i.c)((function(t){return t.themeState.isDark}));return Object(E.jsx)("div",{className:"column",style:r?_:C,children:Object(E.jsxs)("div",{className:"card",style:r?v:T,children:[Object(E.jsx)("div",{children:Object(E.jsx)("h2",{children:Object(E.jsx)("b",{children:c})})}),Object(E.jsx)("ul",{className:"card-group",children:n.map((function(t,e){return Object(E.jsx)(x.a,{value:t[1],displayType:"text",thousandSeparator:!0,renderText:function(c){return Object(E.jsxs)("li",{children:[t[0],": ",c]},e)}})}))})]})})},D=function(){var t=Object(i.b)();Object(n.useEffect)((function(){t((function(t){t(h()),y.a.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,ETH,XRP,BCH,DOGE&tsyms=USD,UAH").then((function(e){t(f(e.data))})).then((function(){return t(g())})).catch((function(e){t(m(e.message))}))}))}),[]);var e=Object(i.c)((function(t){return t.cryptosState.cryptos})),c=Object.keys(e).map((function(t,c){var n={cryptoName:t,cryptoCurrencies:Object.entries(e[t])};return Object(E.jsx)(S,{cryptos:n},c)}));return Object(E.jsx)("div",{children:Object(E.jsx)("div",{className:"row",style:{padding:"25px",margin:"0"},children:c})})},N=c(5),R={isDark:!1},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(u.a)(Object(u.a)({},t),{},{isDark:e.payload});default:return t}},w={cryptos:[],loading:null,error:null},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(u.a)(Object(u.a)({},t),{},{cryptos:e.payload});case d:case b:return Object(u.a)(Object(u.a)({},t),{},{loading:e.payload});case j:return Object(u.a)(Object(u.a)({},t),{},{error:e.payload});default:return t}},G=Object(N.c)({themeState:k,cryptosState:P}),L=c(23),U=Object(N.d)(Object(N.a)(L.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),F=Object(N.e)(G,void 0,U),H=c(11),I=c(24),X=function(){var t=Object(i.c)((function(t){return t.themeState.isDark})),e=Object(i.b)(),c=function(){e(function(t){return{type:O,payload:t}}(!t))};return Object(E.jsx)("div",{className:"header",children:Object(E.jsxs)("h1",{className:"logo",align:"center",children:[Object(E.jsx)(I.Random,{text:"Crypto father"}),t?Object(E.jsx)(H.a,{style:{float:"right",marginRight:"30px"},onClick:c}):Object(E.jsx)(H.b,{style:{float:"right",marginRight:"30px"},onClick:c})]})})};o.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsxs)(i.a,{store:F,children:[Object(E.jsx)(X,{}),Object(E.jsx)(D,{})]})}),document.getElementById("root")),s()}},[[55,1,2]]]);
//# sourceMappingURL=main.fb0adb54.chunk.js.map