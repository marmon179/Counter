(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(t,e,n){t.exports={containerCounter:"Counter_containerCounter__2appn",scoreboard:"Counter_scoreboard__1HvI6",containerButton:"Counter_containerButton__2260d"}},15:function(t,e,n){t.exports={error:"Scoreboard_error__22e0V",textError:"Scoreboard_textError__3ms5I",textSet:"Scoreboard_textSet__1qda6"}},30:function(t,e,n){},31:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),s=(n(30),n(31),n(2));function i(t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("input",{type:"number",className:t.error,value:t.value,onChange:t.onChange,style:{width:90}})})}var u=n(52);function l(t){return Object(s.jsx)(u.a,{variant:"contained",color:"primary",size:"large",style:{margin:"10px"},onClick:t.onClick,disabled:t.disabled,children:t.title})}var d=n(4),b=n.n(d),j=function(t){var e=t.max<0||t.start===t.max?b.a.error:b.a.input,n=t.start<0||t.start>=t.max?b.a.error:b.a.input;return Object(s.jsxs)("div",{className:b.a.containerCounter,children:[Object(s.jsxs)("div",{className:b.a.scoreboard,children:[Object(s.jsxs)("div",{className:b.a.textScoreboardSettings,children:[Object(s.jsx)("div",{className:b.a.textMax,children:"Max.value:"}),Object(s.jsx)("div",{className:b.a.textStart,children:"Start value:"})]}),Object(s.jsxs)("div",{className:b.a.inputContainer,children:[Object(s.jsx)(i,{value:t.max,onChange:t.onChangeMaxValue,error:n}),Object(s.jsx)(i,{value:t.start,onChange:t.onChangeStartValue,error:e})]})]}),Object(s.jsx)("div",{className:b.a.containerButton,children:Object(s.jsx)(l,{onClick:t.setButton,title:"set",disabled:t.disabled||t.isError})})]})},x=n(15),O=n.n(x),p=function(t){var e=Object(s.jsx)("span",{className:O.a.textError,children:"Incorrect value!"}),n=Object(s.jsx)("span",{className:O.a.textSet,children:'enter values and press "set"'}),r=t.count===t.maxValue?O.a.error:"",a=t.isError?e:n;return Object(s.jsx)("div",{className:r,children:t.display?a:t.count})},C=n(13),m=n.n(C),S=function(t){return Object(s.jsxs)("div",{className:m.a.containerCounter,children:[Object(s.jsx)("div",{className:m.a.scoreboard,children:Object(s.jsx)(p,{count:t.count,maxValue:t.max,isError:t.isError,display:t.display})}),Object(s.jsx)("div",{className:m.a.containerButton,children:Object(s.jsxs)("span",{className:m.a.button,children:[Object(s.jsx)(l,{onClick:t.incButton,title:"inc",disabled:t.count===t.max||t.isError}),Object(s.jsx)(l,{onClick:t.resetButton,title:"reset"})]})})]})},_=n(8),h=n(3),v={count:0,start:8,max:10,disabled:!1,display:!0};var N=function(){var t=Object(_.c)((function(t){return t.counter.count})),e=Object(_.c)((function(t){return t.counter.start})),n=Object(_.c)((function(t){return t.counter.max})),r=Object(_.c)((function(t){return t.counter.disabled})),a=Object(_.c)((function(t){return t.counter.display})),c=Object(_.b)(),o=n<0||e>=n||e<0;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{max:n,start:e,disabled:r,onChangeMaxValue:function(t){c(function(t){return{type:"ON-CHANGE-MAX-VALUE",e:t}}(t))},onChangeStartValue:function(t){c(function(t){return{type:"ON-CHANGE-START-VALUE",e:t}}(t))},setButton:function(){c({type:"SET-BUTTON"})},isError:o}),Object(s.jsx)(S,{count:t,start:e,max:n,isError:o,display:a,incButton:function(){return c({type:"INC-BUTTON"})},resetButton:function(){c({type:"RESET-BUTTON"})}})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))},f=n(12),E=Object(f.b)({counter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INC-BUTTON":return Object(h.a)(Object(h.a)({},t),{},{count:t.count+1});case"SET-BUTTON":return Object(h.a)(Object(h.a)({},t),{},{count:t.start,disabled:!0,display:!1});case"RESET-BUTTON":return Object(h.a)(Object(h.a)({},t),{},{count:t.start});case"ON-CHANGE-START-VALUE":return Object(h.a)(Object(h.a)({},t),{},{display:!0,disabled:!1,start:Number(e.e.currentTarget.value)});case"ON-CHANGE-MAX-VALUE":return Object(h.a)(Object(h.a)({},t),{},{display:!0,disabled:!1,max:Number(e.e.currentTarget.value)});case"INC-VALUE=FROM-LOCAL-STORAGE":return Object(h.a)(Object(h.a)({},t),{},{count:e.count});default:return t}}}),T=Object(f.c)(E,function(){try{var t=localStorage.getItem("app-state");if(null===t)return;return JSON.parse(t)}catch(e){return}}());T.subscribe((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("app-state",e)}catch(n){}}({counter:T.getState().counter})})),o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(_.a,{store:T,children:Object(s.jsx)(N,{})})}),document.getElementById("root")),g()},4:function(t,e,n){t.exports={containerCounter:"SettingCounter_containerCounter__2ZESr",scoreboard:"SettingCounter_scoreboard__3xuO4",inputContainer:"SettingCounter_inputContainer__2rrr_",textScoreboardSettings:"SettingCounter_textScoreboardSettings__oQI46",textMax:"SettingCounter_textMax__1bYqa",textStart:"SettingCounter_textStart__2XutW",containerButton:"SettingCounter_containerButton__2FDMR"}}},[[38,1,2]]]);
//# sourceMappingURL=main.1f5cc5a1.chunk.js.map