(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,t,e){n.exports=e(31)},23:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(9),a=e.n(i),c=(e(23),e(4)),l=e(5),u=e(8),s=e(6),f=e(7),d=e(3),m=e(1),h=e(2);function v(){var n=Object(m.a)(["\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n  border-bottom-left-radius: ",";\n  border-bottom-right-radius: ",";\n  flex: 1;\n  text-align: center;\n  height: 10vw;\n  width: 10vw;\n  @media only screen and (max-width: 600px) {\n    height: 30vw;\n    width: 30vw;\n    font-size: 0;\n  }\n  color: #",";\n  background-color: #",";\n  color: #",";\n"]);return v=function(){return n},n}var b=h.a.div(v(),function(n){return 0===n.position?"10px":"0"},function(n){return 1===n.position?"10px":"0"},function(n){return 2===n.position?"10px":"0"},function(n){return 3===n.position?"10px":"0"},function(n){return n.color},function(n){return n.bgColor},function(n){return n.color}),p=function(n){var t=n.children,e=n.position,r=n.bgColor,i=n.color;return o.a.createElement(b,{color:i,bgColor:r,position:e},t)};function j(){var n=Object(m.a)(["\n  opacity: 0;\n  position: relative;\n  animation-fill-mode: forwards;\n  animation-duration .5s;\n  animation-delay: .3s;\n  animation-name ",";\n"]);return j=function(){return n},n}function g(){var n=Object(m.a)(["\nfrom {\n  opacity: 0;\n}\n\nto {\n  opacity: 100;\n}\n"]);return g=function(){return n},n}var x=Object(h.b)(g()),O=h.a.div(j(),x),w=function(n){var t=n.children;return o.a.createElement(O,null,t)};function k(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  height: 100%;\n  font-size: 0vh;\n  @media only screen and (max-width: 600px) {\n    font-size: 3vh;\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(m.a)(["\n    position: relative;\n    animation-fill-mode: forwards;\n    animation-duration .","s;\n    animation-name ",";\n    "]);return y=function(){return n},n}function C(){var n=Object(m.a)(["\n  from {\n    top: ","vh;\n    left: ","vw\n    transform: rotate(","deg);\n  }\n\n  to {\n    top: 0vh;\n    left: 0vw;\n    transform: rotate(0deg);\n  }\n"]);return C=function(){return n},n}function E(){var n=Object(m.a)(["\n  from {\n    top: 0vh;\n    left: 0vw;\n    transform: rotate(0deg);\n  }\n\n  to {\n    top: ","vh;\n    left: ","vw\n    transform: rotate(","deg);\n  }\n"]);return E=function(){return n},n}var S=h.a.div(k()),F=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props,t=n.anim,e=n.clicked,r=n.onClick,i=n.indx,a=n.children,c=n.bgColor,l=n.color,u=function(n){var t=n.enter,e=n.leave,r=Math.floor(4*Math.random())+4;return h.a.div(y(),r,function(n){return n.clicked?t:e})}(function(n,t,e){return{enter:Object(h.b)(E(),n,t,e),leave:Object(h.b)(C(),n,t,e)}}(t.top,t.left,t.rotate));return o.a.createElement(u,{clicked:e,onClick:r},o.a.createElement(p,Object.assign({position:i},{color:l,bgColor:c}),a&&o.a.createElement(S,null,o.a.createElement(w,null,a))))}}]),t}(r.PureComponent);function I(){var n=Object(m.a)(["\n  position: relative;\n  animation-fill-mode: forwards;\n  animation-duration .5s;\n  animation-name ",";\n  color: #3c415e;\n  margin-bottom: 3vh;\n"]);return I=function(){return n},n}function _(){var n=Object(m.a)(["\nfrom {\n  top: 110vh;\n}\n\nto {\n  top: 0vh;\n}\n"]);return _=function(){return n},n}function q(){var n=Object(m.a)(["\n  position: fixed;\n  width: 25vw;\n  height: 100vh;\n  z-index: 1;\n  padding: 2vw;\n  font-size: 6vh;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n"]);return q=function(){return n},n}var z=h.a.div(q()),L=Object(h.b)(_()),T=h.a.div(I(),L),B=function(n){var t=n.children;return o.a.createElement(z,null,t.map(function(n,t){return o.a.createElement(P,{key:"intro-text-".concat(t)},n)}))},P=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.children;return o.a.createElement(T,null,n)}}]),t}(r.PureComponent);function H(){var n=Object(m.a)(["\n  color: white;\n  display: flex;\n"]);return H=function(){return n},n}function J(){var n=Object(m.a)(["\n  position: absolute;\n  background: white;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  resize: both;\n  overflow: auto;\n"]);return J=function(){return n},n}function M(){var n=Object(m.a)(["\n  width: 200px;\n  height: 200px;\n  position: absolute;\n"]);return M=function(){return n},n}function W(){var n=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n"]);return W=function(){return n},n}var $=h.a.img(W()),A=h.a.div(M()),D=h.a.div(J()),G=h.a.div(H()),K=[{top:"-10",left:"-10",rotate:"-13"},{top:"-9",left:"10",rotate:"8"},{top:"11",left:"-8",rotate:"12"},{top:"11",left:"12",rotate:"-11"}],N=["dfe2e2","dfe2e2","738598","dfe2e2"],Q=["3c415e","738598","dfe2e2","1cb3c8"],R=["Hello! Hola!","Bienvenidos!","Today is a great day!","Est\xe1n de acuerdo?"],U=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).state={clickedItems:[],textForSquares:[],textForLeftSide:[],introTextItems:Object.assign([],R)},K.forEach(function(n,t){e["_handleClick".concat(t)]=e._handleClick.bind(Object(d.a)(Object(d.a)(e)),t)}),e._clearClicks=e._clearClicks.bind(Object(d.a)(Object(d.a)(e))),e}return Object(f.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this,t=this.state,e=t.clickedItems,r=t.textForSquares,i=t.textForLeftSide,a=K.map(function(t,i){return o.a.createElement(F,{key:"anim-square-".concat(i),indx:i,color:N[i],bgColor:Q[i],anim:K[i],onClick:n["_handleClick".concat(i)],clicked:e[i]},e[i]&&r[i])});return o.a.createElement("div",null,o.a.createElement(B,null,i),o.a.createElement(D,{onClick:this._clearClicks},o.a.createElement(A,null,o.a.createElement($,{src:"cell_mandarin.png"})),o.a.createElement(G,null,a[0],a[1]),o.a.createElement(G,null,a[2],a[3])))}},{key:"_clearClicks",value:function(){this.setState({clickedItems:{},textForSquares:[],textForLeftSide:[],introTextItems:Object.assign([],R)})}},{key:"_handleClick",value:function(n,t){var e=this.state,r=e.clickedItems,o=e.textForSquares,i=e.introTextItems,a=e.textForLeftSide;t.stopPropagation(),r[n]=!r[n],o[n]||(o[n]=i.shift(),a.length<R.length&&a.push(o[n])),this.setState({clickedItems:r,textForSquares:o,textForLeftSide:a})}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.4f06c3fd.chunk.js.map