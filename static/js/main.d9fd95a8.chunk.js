(this["webpackJsonphangman-project"]=this["webpackJsonphangman-project"]||[]).push([[0],{13:function(n,e,t){n.exports=t.p+"static/media/down_arrow.aa86276a.svg"},14:function(n,e,t){n.exports=t(20)},20:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(10),o=t.n(i),c=t(1),u=t(2);function l(){var n=Object(c.a)(["\n  font-family: 'Roboto';\n  @media (min-width: 420px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}var d="#BCE7FD",f="#057350",p="#e6f6fe",s="#001242",m="#2EB3E8",b=u.a.p(l());function g(){var n=Object(c.a)(["\n  margin: 0;\n  color: ",";\n"]);return g=function(){return n},n}function h(){var n=Object(c.a)(["\n  margin: 0;\n"]);return h=function(){return n},n}function x(){var n=Object(c.a)(["\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  font-weight: bold;\n  font-family: 'Courier New', Courier, monospace;\n  padding: 16px 32px;\n"]);return x=function(){return n},n}var v=u.a.header(x(),s,d),w=u.a.h1(h()),j=u.a.p(g(),m),O=function(n){var e=n.appName,t=n.appDescription;return a.a.createElement(v,null,a.a.createElement(w,null,e),a.a.createElement(j,null,t))},E=t(5),k=t(3),y=Object(E.a)(Array(26)).map((function(n,e){return String.fromCharCode(e+65)})),C=[" ","'",":","1","2","3","4","5","6","7","8","9","?"],z=[].concat(C,Object(E.a)(y),Object(E.a)(y.map((function(n){return n.toLowerCase()})))),S=function(n){return Math.floor(n*Math.random())},_=t(4),L=t.n(_),F=t(8),R=function(){var n=Object(F.a)(L.a.mark((function n(e,t){var r,a;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("53271a6c0a576518314f7d376d2af74b","&language=en-US&include_adult=false&with_genres=").concat(e,"&sort_by=vote_count.desc&include_video=false&page=").concat(S(1)+1)).then((function(n){return n.json()}));case 2:for(r=n.sent,a=S(r.results.length);i=r.results[a].title,!/^[A-Za-z ]+$/.test(i);)a=S(r.results.length);t(r.results[a]);case 6:case"end":return n.stop()}var i}),n)})));return function(e,t){return n.apply(this,arguments)}}(),A=function(){var n=Object(F.a)(L.a.mark((function n(){return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("53271a6c0a576518314f7d376d2af74b","&language=en-US")).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function B(){var n=Object(c.a)(["\n  padding: 0 8px;\n  display: inline-block;\n  border-bottom: ",";\n  width: 20px;\n  padding: 2px;\n  text-align: center;\n  margin-right: 4px;\n  font-size: 20px;\n  @media (min-width: 420px) {\n    font-size: 22px;\n  }\n"]);return B=function(){return n},n}function G(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 16px 32px;\n  font-family: 'Roboto';\n"]);return G=function(){return n},n}var H=u.a.div(G()),N=u.a.span(B(),(function(n){return" "===n.letter?"none":"2px solid ".concat(s)})),D=function(n){var e=n.filmArr,t=n.guessedLetters;return a.a.createElement(H,null,e.map((function(n,e){return a.a.createElement(N,{key:e,letter:n},t.indexOf(n)>-1?n:"?")})))};function J(){var n=Object(c.a)(["\n  padding: 8px;\n  font-weight: bold;\n  margin: 2px;\n  width: 10%;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  border: 0;\n  @media (min-width: 420px) {\n    font-size: 18px;\n  }\n"]);return J=function(){return n},n}function M(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 16px auto;\n  font-family: 'Roboto';\n"]);return M=function(){return n},n}var T=u.a.div(M()),U=u.a.button(J(),(function(n){return n.disabled?"white":m}),(function(n){return n.disabled?d:"white"})),W=function(n){var e=n.guessedLetters,t=n.onClickHandler;return a.a.createElement(T,null,y.map((function(n,r){return a.a.createElement(U,{onClick:function(){return t(n)},key:r,value:n,disabled:e.indexOf(n)>-1},n)})))},$=t(13),I=t.n($);function Z(){var n=Object(c.a)(["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  background-image: url(",");\n  background-size: 8px;\n  background-repeat: no-repeat;\n  background-position-y: 50%;\n  background-position-x: calc(100% - 8px);\n  text-align: left;\n  padding: 8px;\n  cursor: pointer;\n  width: 100%;\n  border: 1px solid black;\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  @media (min-width: 420px) {\n    font-size: 18px;\n  }\n"]);return Z=function(){return n},n}function q(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  padding-bottom: 8px;\n  @media (min-width: 420px) {\n    width: 49%;\n    padding-bottom: 0;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(c.a)(["\n  width: 220px;\n  font-family: 'Roboto';\n  @media (min-width: 420px) {\n    font-size: 18px;\n  }\n"]);return K=function(){return n},n}function P(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media (min-width: 420px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"]);return P=function(){return n},n}function Q(){var n=Object(c.a)(["\n  width: 100%;\n  @media (min-width: 420px) {\n    width: 49%;\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(c.a)(["\n  border-radius: 50%;\n  width: 90px;\n  min-width: 90px;\n  height: 90px;\n  align-self: flex-end;\n  margin: 0 auto;\n  }\n"]);return V=function(){return n},n}function X(){var n=Object(c.a)(["\n  color: white;\n  background-color: ",";\n  font-weight: bold;\n  padding: 8px 16px;\n  text-align: center;\n  -webkit-transition-duration: 0.2s; /* Safari */\n  transition-duration: 0.2s;\n  border: none;\n  width: auto;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media (min-width: 420px) {\n    font-size: 18px;\n    width: auto;\n  }\n"]);return X=function(){return n},n}var Y=u.a.button(X(),f,s,p),nn=Object(u.a)(Y)(V()),en=u.a.div(Q()),tn=u.a.div(P()),rn=u.a.span(K()),an=u.a.div(q()),on=u.a.select(Z(),I.a),cn=function(n){var e=n.onClick,t=n.onChange,r=n.title,i=n.options;return a.a.createElement(an,null,r&&r.length>0&&a.a.createElement(rn,null,r),a.a.createElement(on,{onClick:function(){return e("")},onChange:function(n){return t(n.target.value)}},a.a.createElement("option",{value:""},"Choose a genre:"),i.map((function(n,e){return a.a.createElement("option",{key:e,value:n.name},n.name)}))))};function un(){var n=Object(c.a)(["\n  background-image: url(",");\n  height: 50px;\n  width: 50px;\n  background-position: center right;\n"]);return un=function(){return n},n}var ln=u.a.div(un(),(function(n){return n.imgSrc})),dn=function(n){var e=n.counter,t=n.poster,i=n.setCounter,o=Object(r.useState)(!1),c=Object(k.a)(o,2),u=c[0],l=c[1];return a.a.createElement(a.a.Fragment,null,!u&&e>2&&a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,{onClick:function(){i(e-2),l(!0)}},"Hint"),a.a.createElement(b,null,"This will cost you two guesses!")),u&&e>0&&a.a.createElement(ln,{imgSrc:"http://image.tmdb.org/t/p/w154".concat(t)}))};function fn(){var n=Object(c.a)(["\n  width: 154px;\n"]);return fn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  margin: 16px 32px;\n"]);return pn=function(){return n},n}function sn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Roboto';\n  @media (min-width: 420px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"]);return sn=function(){return n},n}var mn=u.a.div(sn()),bn=u.a.p(pn()),gn=u.a.img(fn()),hn=function(n){var e=n.film;return a.a.createElement(mn,null,a.a.createElement(gn,{src:"http://image.tmdb.org/t/p/w154".concat(e.poster_path),alt:"Film poster"}),e.overview||e.tagline?a.a.createElement(bn,null,e.overview||e.tagline):null)};function xn(){var n=Object(c.a)(["\n  max-width: 800px;\n  margin: 0 auto;\n"]);return xn=function(){return n},n}function vn(){var n=Object(c.a)(["\n  width: 100%;\n  color: ",";\n  padding: 16px 32px;\n  background-color: ",";\n  min-height: calc(100vh - 130px);\n  @media (min-width: 420px) {\n    font-size: 18px;\n  }\n"]);return vn=function(){return n},n}var wn={title:"",poster_path:""},jn=u.a.div(vn(),s,p),On=u.a.div(xn()),En=function(){var n=Object(r.useState)(7),e=Object(k.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(wn),c=Object(k.a)(o,2),u=c[0],l=c[1],d=Object(r.useState)([]),f=Object(k.a)(d,2),p=f[0],s=f[1],m=Object(r.useState)({id:99}),g=Object(k.a)(m,2),h=g[0],x=g[1],v=Object(r.useState)(C),w=Object(k.a)(v,2),j=w[0],O=w[1];return Object(r.useEffect)((function(){A().then((function(n){return s(n.genres)}))}),[]),Object(r.useEffect)((function(){t<1&&O(z);var n=u.title.split("").filter((function(n){return-1===j.indexOf(n)}));""!==u.title&&0===n.length&&O(z)}),[u.title,j,t]),a.a.createElement(jn,null,a.a.createElement(On,null,a.a.createElement(tn,null,p&&p.length>0&&a.a.createElement(cn,{options:p,title:"",onClick:function(){return l(wn)},onChange:x}),a.a.createElement(en,null,a.a.createElement(Y,{onClick:function(){l(wn),O(C),i(7);var n=function(n,e){return e.filter((function(e){return n===e.name}))[0].id}(h,p);R(n,l)}},"Get film"))),""!==u.title&&a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{filmArr:u.title.split(""),guessedLetters:j}),a.a.createElement(b,null,t>0?"Guesses left: ".concat(t):null),a.a.createElement(W,{guessedLetters:j,onClickHandler:function(n){return O([].concat(Object(E.a)(j),[n,n.toLowerCase()])),u.title.indexOf(n)>-1||u.title.indexOf(n.toLowerCase())>-1?null:i(t-1)}}),a.a.createElement(dn,{counter:t,setCounter:i,poster:u.poster_path}),t<1&&a.a.createElement(hn,{film:u}))))};function kn(){var n=Object(c.a)(["\n  margin: 0;\n  & a {\n    color: inherit;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(c.a)(["\n  width: 100%;\n  color: ",";\n  background-color: ",";\n  font-weight: bold;\n  font-family: 'Courier New', Courier, monospace;\n  padding: 16px 32px;\n  text-align: center;\n"]);return yn=function(){return n},n}var Cn=u.a.footer(yn(),s,m),zn=u.a.p(kn()),Sn=function(n){var e=n.children;return a.a.createElement(Cn,null,a.a.createElement(zn,null,e))},_n=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{appName:"Hangman",appDescription:"Guess the film"}),a.a.createElement(En,null),a.a.createElement(Sn,null,a.a.createElement("span",null,"This project is available on"," ",a.a.createElement("a",{href:"https://github.com/zurda/hangman-react"},"Github"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(_n,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9fd95a8.chunk.js.map