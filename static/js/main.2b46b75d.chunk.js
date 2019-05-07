(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,n){t.exports=n(46)},36:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),c=(n(36),n(7)),l=n(8),u=n(10),s=n(9),m=n(11),p=n(2),d=n(3),f=n(14),h=n(12),g=n(13),b=n(29);function v(){var t=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    & input {\n        text-align: center;\n        font-family: monospace;\n        font-size: 1em;\n        max-width: 50px;\n        width: 100%;\n        background: transparent;\n        outline: none;\n        border: none;\n        border-bottom: 1px solid black;\n        margin: 0px 1.5px\n    }\n    \n    & input:focus {\n        border-bottom: 1px solid green;\n    }\n    & input:read-only {\n        background: gray;\n    }\n    & input[readonly] {\n        pointer-events: none;\n    }\n"]);return v=function(){return t},t}var y=d.a.form(v()),E=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).onChange=function(t){console.log("change",t);var e=parseInt(t.target.dataset.id),a=Object(b.a)(n.state.values);t.target.value.length<2&&(a[e]=t.target.value,n.setState({values:a}))},n.onSubmit=function(t){t.preventDefault();var e=n.state.values.map(function(t){return parseInt(t,10)});n.props.onEntered({values:e,id:n.props.id})},n.state={values:n.props.initialValues},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.focus&&this.input0.focus()}},{key:"componentDidUpdate",value:function(t){t.focus!==this.props.focus&&(this.props.focus?this.input0.focus():this.input0.blur())}},{key:"render",value:function(){var t=this,e=this.props.readOnly,n=this.state.values;return r.a.createElement(y,{onSubmit:this.onSubmit},n.map(function(n,a){return r.a.createElement("input",{autoComplete:"off","aria-label":"input_".concat(a),"data-id":a,key:a,value:n,name:"input_".concat(a),onChange:t.onChange,readOnly:e,ref:function(e){return t["input".concat(a)]=e},type:"number",min:0,max:9})}),r.a.createElement("button",{type:"submit"},"check"))}}]),e}(a.Component);function O(){var t=Object(p.a)(["\n    border-radius: 3px;\n    padding: 0.5rem 0;\n    width: 11rem;\n    background: transparent;\n    color: white;\n    border: 2px solid white;\n"]);return O=function(){return t},t}E.defaultProps={readOnly:!1,initialValues:[],focus:!1};var j=d.a.button(O());function w(){for(var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).difficulty,e=void 0===t?3:t,n=[],a=0;a<e;a++)n.push(parseInt(9*Math.random()));return n}function x(){var t=Object(p.a)(["\n    font-size: .8rem;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n"]);return x=function(){return t},t}function k(){var t=Object(p.a)(["\n    display: flex; \n    justify-content: space-between;\n    margin-bottom: 10px;\n"]);return k=function(){return t},t}function C(){var t=Object(p.a)(["\n    width: 100%;\n    min-height: 350px;\n    background: #7c8aa5;\n    padding: 1em 0em;\n    & tbody tr {\n        opacity: 0.35;\n    }\n    & tbody tr.active {\n        opacity: 1;\n    }\n\n    & tr td {\n\n    }\n\n    & tfoot tr td {\n        text-align: center;\n    }\n"]);return C=function(){return t},t}function S(){var t=Object(p.a)(["\n  max-width: 700px;\n  min-height: 500px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto;\n  \n"]);return S=function(){return t},t}var N=d.a.div(S()),P=d.a.table(C()),A=d.a.div(k()),R=d.a.div(x()),W=function(t){function e(t){var n;Object(c.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).gotToGameOver=function(){n.props.history.push("/gameover",{code:n.state.currentSecretCode,winning:n.state.winning})},n.onInputsEnter=function(t){var e,a=t.values,r=t.id,i=n.state.currentSecretCode,o=n.props.location.state.difficulty,c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.attempt,n=t.code,a=e.slice(),r=n.slice();if(a.length!==r.length)return!1;for(var i=0,o=0,c=r.length-1;c>=0;c--)a[c]===r[c]&&(o++,a.splice(c,1),r.splice(c,1));for(var l=a.length-1;l>=0;l--)for(var u=r.length-1;u>=0;u--)a[l]===r[u]&&(i++,r.splice(u,1));return{rightNumberRightPlace:o,rightNumberWrongPlace:i}}({attempt:a,code:n.state.currentSecretCode}),l=c.rightNumberRightPlace,u=c.rightNumberWrongPlace;console.log({rightNumberRightPlace:l,rightNumberWrongPlace:u,currentSecretCode:i,difficulty:o},l===o),n.setState((e={},Object(g.a)(e,r,{rightNumberRightPlace:l,rightNumberWrongPlace:u,readOnly:!0}),Object(g.a)(e,"remainingAttempts",n.state.remainingAttempts-1),Object(g.a)(e,"currentRow",n.state.currentRow+1),Object(g.a)(e,"winning",l===o),e),function(){(n.state.winning||0===n.state.remainingAttempts)&&n.gotToGameOver()})};var a=n.props.location.state,r=a.attempts,i=a.difficulty;return n.state={currentRow:0,remainingAttempts:r,currentSecretCode:w({difficulty:i}),winning:!1},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.location.state,n=e.difficulty,a=e.attempts,i=this.state,o=i.currentRow,c=i.remainingAttempts;i.winning;return r.a.createElement(N,null,r.a.createElement(A,null,r.a.createElement(R,{style:{textAlign:"left",fontSize:".8rem"}},"Remaining Attempts ",c)),r.a.createElement(P,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Attempts"),r.a.createElement("th",null,"Results:",r.a.createElement("div",{style:{fontSize:".7rem"}},"Right Number and Place | Wrong Place")))),r.a.createElement("tbody",null,new Array(a).fill(1).map(function(e,a){return r.a.createElement("tr",{className:o===a?"active":void 0,key:a},r.a.createElement("td",{style:{width:"70%"}},r.a.createElement(E,{focus:o===a,initialValues:new Array(n).fill(0),id:"attempt_".concat(a),onEntered:t.onInputsEnter,readOnly:o!==a})),r.a.createElement("td",{style:{width:"30%"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("span",{style:{flex:1,textAlign:"center"}},t.state["attempt_".concat(a)]?t.state["attempt_".concat(a)].rightNumberRightPlace:0),r.a.createElement("span",{style:{flex:1,textAlign:"center"}},t.state["attempt_".concat(a)]?t.state["attempt_".concat(a)].rightNumberWrongPlace:0))))})),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"70%"}}),r.a.createElement("td",{style:{width:"30%"}},r.a.createElement(j,{onClick:this.gotToGameOver},"Show Solution"))))))}}]),e}(a.Component),I=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.location.state,e=t.code,n=t.winning;return r.a.createElement("div",null,r.a.createElement("div",null," You ",n?"WON!":"LOOSE"," Solution was: ",e.join(" ")," "),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"/"},"Go To Home"))))}}]),e}(a.Component),_=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).onChange=function(t){n.setState(Object(g.a)({},t.target.name,t.target.value))},n.state={difficulty:3,attempts:10},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.difficulty,n=t.attempts;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"difficulty"},"Difficulty:"),r.a.createElement("input",{type:"number",min:3,value:e,name:"difficulty",onChange:this.onChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"attempts"},"Max attempts:"),r.a.createElement("input",{type:"number",value:n,min:3,name:"attempts",onChange:this.onChange})),r.a.createElement("div",null,r.a.createElement(f.b,{to:{pathname:"/play",state:{difficulty:parseInt(this.state.difficulty),attempts:parseInt(this.state.attempts)}}},"Start")))}}]),e}(a.Component),z=r.a.createElement(f.a,{basename:"/mastermind"},r.a.createElement(h.a,{exact:!0,path:"/",component:_}),r.a.createElement(h.a,{path:"/play",component:W}),r.a.createElement(h.a,{path:"/gameover",component:I}));function M(){var t=Object(p.a)(["\n    background-color: #282c34;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    font-size: calc(10px + 2vmin);\n    color: white;\n    height: 100%;\n"]);return M=function(){return t},t}function D(){var t=Object(p.a)(["\n  font-size: 10px;\n  padding: 10px 0px;\n"]);return D=function(){return t},t}function G(){var t=Object(p.a)(["\n  & h1 {\n    margin: 0;\n    padding: 0;\n    font-family: monospace\n  }\n"]);return G=function(){return t},t}var T=d.a.header(G()),B=d.a.footer(D()),V=d.a.div(M()),F=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(V,null,r.a.createElement(T,null,r.a.createElement("h1",null,"MasterMind!")),z,r.a.createElement(B,null,r.a.createElement("strong",null,"madeBy @eatsjobs"),", 2019"))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.2b46b75d.chunk.js.map