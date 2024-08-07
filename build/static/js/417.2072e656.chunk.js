"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[417],{6417:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(5043),o=n(2339),r=n(3216),s=n(6720),i=n(579);const l=()=>{const e=(0,r.Zp)(),[t,n]=(0,a.useState)(localStorage.getItem("questionType")?localStorage.getItem("questionType"):"mcq"),[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(["","","",""]),[p,m]=(0,a.useState)(""),[f,h]=(0,a.useState)(""),[g,b]=(0,a.useState)(0);let y=localStorage.getItem("series");const v={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL,x=e=>{n(e)};(0,a.useEffect)((()=>{let t=localStorage.getItem("seriesId"),n=localStorage.getItem("token");n||e("/");const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+n);const o={method:"GET",headers:a,redirect:"follow"};fetch("".concat(v,"getQuestionsSeriesWise?seriesId=").concat(t),o).then((e=>e.json())).then((e=>{e.type})).catch((e=>console.error(e)))}),[y,g]);const j=e=>t===e?"active-btn":"";return(0,i.jsx)("section",{className:"createtask_wrapper wrapper",children:(0,i.jsxs)("div",{className:"homepage-outer-div",children:[(0,i.jsx)("div",{className:"back-btn me-2",onClick:()=>{e("/updateQuestions")},children:(0,i.jsx)(s.cjW,{})}),y&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"test-box",children:[(0,i.jsxs)("div",{className:"internal-testbox",children:[(0,i.jsx)("button",{onClick:()=>x("mcq"),className:"mcq-btn ".concat(j("mcq")),children:"Objective"}),(0,i.jsx)("button",{onClick:()=>x("subjective"),className:"subjective-btn ".concat(j("subjective")),children:"Subjective"}),(0,i.jsx)("button",{onClick:()=>x("logical"),className:"logical-btn ".concat(j("logical")),children:"Logical"})]}),"mcq"===t&&(0,i.jsxs)("div",{className:"mcq-inputs",children:[(0,i.jsx)("input",{className:"mcq-question form-control mt-3",type:"text",placeholder:"Enter question",value:l,onChange:e=>c(e.target.value)}),null===d||void 0===d?void 0:d.map(((e,t)=>(0,i.jsx)("input",{className:"mcq-options form-control",type:"text",placeholder:"Option ".concat(t+1),value:e,onChange:e=>((e,t)=>{const n=[...d];n[e]=t,u(n)})(t,e.target.value)},t))),(0,i.jsx)("label",{className:"new_series_label",children:"Select correct answer:"}),(0,i.jsxs)("select",{className:"form-control mt-3",value:p,onChange:e=>m(parseInt(e.target.value)),children:[(0,i.jsx)("option",{defaultChecked:!0}),null===d||void 0===d?void 0:d.map(((e,t)=>(0,i.jsx)("option",{value:t+1,children:t+1},t)))]})]}),"subjective"===t&&(0,i.jsxs)("div",{className:"subjective-inputs",children:[(0,i.jsx)("input",{type:"text",className:"form-control mt-3",placeholder:"Enter subjective question",value:l,onChange:e=>c(e.target.value)}),(0,i.jsx)("textarea",{className:"testbox-textarea form-control mt-3",type:"text",placeholder:"Enter answer",value:f,onChange:e=>h(e.target.value)})]}),"logical"===t&&(0,i.jsxs)("div",{className:"logical-inputs mt-4",children:[(0,i.jsx)("textarea",{type:"text",className:"testbox-textarea-logical form-control mt-2",placeholder:"Enter logical question",value:l,onChange:e=>c(e.target.value)}),(0,i.jsx)("textarea",{className:"testbox-textarea form-control mt-4",type:"text",placeholder:"Enter answer",value:f,onChange:e=>h(e.target.value)})]}),t&&(0,i.jsx)("button",{onClick:n=>{if(n.preventDefault(),""===l)return void o.Ay.error("Please enter question.",{duration:1300});if("mcq"===t){if(d.filter((e=>""!==e.trim())).length<4)return void o.Ay.error("Please enter all four options",{duration:1300})}let a=localStorage.getItem("token"),r=localStorage.getItem("seriesId");const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+a);const i={method:"POST",headers:s,body:JSON.stringify({question:l,options:d,correctAnswer:p,answer:f}),redirect:"follow"};switch(t){case"mcq":fetch("".concat(v,"addObjective?seriesId=").concat(r),i).then((e=>e.json())).then((t=>{"success"===t.type?(c(""),u(["","","",""]),m(""),b((e=>e+1)),e("/updateQuestions")):o.Ay.error(t.message)})).catch((e=>console.error(e)));break;case"subjective":fetch("".concat(v,"addSubjective?seriesId=").concat(r),i).then((e=>e.json())).then((t=>{"success"===t.type?(c(""),h(""),b((e=>e+1)),e("/updateQuestions")):o.Ay.error(t.message)})).catch((e=>console.error(e)));break;case"logical":fetch("".concat(v,"addLogical?seriesId=").concat(r),i).then((e=>e.json())).then((t=>{"success"===t.type?(c(""),h(""),b((e=>e+1)),e("/updateQuestions")):o.Ay.error(t.message)})).catch((e=>console.error(e)))}},className:"add-question-btn cmn_btn_color ",children:"Add Question"})]})}),(0,i.jsx)(o.l$,{})]})})}},2339:(e,t,n)=>{function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{l$:()=>ve,Ay:()=>xe,oR:()=>Z});var o=n(5043);let r={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||r,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let n="",a="",o="";for(let r in e){let s=e[r];"@"==r[0]?"i"==r[1]?n=r+" "+s+";":a+="f"==r[1]?d(s,r):r+"{"+d(s,"k"==r[1]?"":t)+"}":"object"==typeof s?a+=d(s,t?t.replace(/([^,])+/g,(e=>r.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):r):null!=s&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=d.p?d.p(r,s):r+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+a},u={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},m=(e,t,n,a,o)=>{let r=p(e),s=u[r]||(u[r]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(r));if(!u[s]){let t=r!==e?e:(e=>{let t,n,a=[{}];for(;t=i.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(n=t[3].replace(c," ").trim(),a.unshift(a[0][n]=a[0][n]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);u[s]=d(o?{["@keyframes "+s]:t}:t,n?"":"."+s)}let m=n&&u.g?u.g:null;return n&&(u.g=u[s]),((e,t,n,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[s],t,a,m),s},f=(e,t,n)=>e.reduce(((e,a,o)=>{let r=t[o];if(r&&r.call){let e=r(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==r?"":r)}),"");function h(e){let t=this||{},n=e.call?e(t.p):e;return m(n.unshift?n.raw?f(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,s(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,b,y,v=h.bind({k:1});function x(e,t){let n=this||{};return function(){let a=arguments;function o(r,s){let i=Object.assign({},r),l=i.className||o.className;n.p=Object.assign({theme:b&&b()},i),n.o=/ *go\d+/.test(l),i.className=h.apply(n,a)+(l?" "+l:""),t&&(i.ref=s);let c=e;return e[0]&&(c=i.as||e,delete i.as),y&&c[0]&&y(i),g(c,i)}return t?t(o):o}}var j,w,E,N,C,k,S,O,A,I,_,q,T,P,D,z,H=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,L=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),R=new Map,M=e=>{if(R.has(e))return;let t=setTimeout((()=>{R.delete(e),W({type:4,toastId:e})}),1e3);R.set(e,t)},Q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=R.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?Q(e,{type:1,toast:n}):Q(e,{type:0,toast:n});case 3:let{toastId:a}=t;return a?M(a):e.toasts.forEach((e=>{M(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},B=[],U={toasts:[],pausedAt:void 0},W=e=>{U=Q(U,e),B.forEach((e=>{e(U)}))},K={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,n)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||L()}}(t,e,n);return W({type:2,toast:a}),a.id},Z=(e,t)=>$("blank")(e,t);Z.error=$("error"),Z.success=$("success"),Z.loading=$("loading"),Z.custom=$("custom"),Z.dismiss=e=>{W({type:3,toastId:e})},Z.remove=e=>W({type:4,toastId:e}),Z.promise=(e,t,n)=>{let a=Z.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(Z.success(H(t.success,e),{id:a,...n,...null==n?void 0:n.success}),e))).catch((e=>{Z.error(H(t.error,e),{id:a,...n,...null==n?void 0:n.error})})),e};var G=(e,t)=>{W({type:1,toast:{id:e,height:t}})},J=()=>{W({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,o.useState)(U);(0,o.useEffect)((()=>(B.push(n),()=>{let e=B.indexOf(n);e>-1&&B.splice(e,1)})),[t]);let a=t.toasts.map((t=>{var n,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||K[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:a}}(e);(0,o.useEffect)((()=>{if(n)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>Z.dismiss(t.id)),n);t.visible&&Z.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let a=(0,o.useCallback)((()=>{n&&W({type:6,time:Date.now()})}),[n]),r=(0,o.useCallback)(((e,n)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:r}=n||{},s=t.filter((t=>(t.position||r)===(e.position||r)&&t.height)),i=s.findIndex((t=>t.id===e.id)),l=s.filter(((e,t)=>t<i&&e.visible)).length;return s.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return{toasts:t,handlers:{updateHeight:G,startPause:J,endPause:a,calculateOffset:r}}},Y=v(j||(j=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=v(w||(w=a(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=v(E||(E=a(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=x("div")(N||(N=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),Y,X,(e=>e.secondary||"#fff"),ee),ne=v(C||(C=a(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ae=x("div")(k||(k=a(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),oe=v(S||(S=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),re=v(O||(O=a(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),se=x("div")(A||(A=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),oe,re,(e=>e.secondary||"#fff")),ie=x("div")(I||(I=a(["\n  position: absolute;\n"]))),le=x("div")(_||(_=a(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ce=v(q||(q=a(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),de=x("div")(T||(T=a(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ce),ue=e=>{let{toast:t}=e,{icon:n,type:a,iconTheme:r}=t;return void 0!==n?"string"==typeof n?o.createElement(de,null,n):n:"blank"===a?null:o.createElement(le,null,o.createElement(ae,{...r}),"loading"!==a&&o.createElement(ie,null,"error"===a?o.createElement(te,{...r}):o.createElement(se,{...r})))},pe=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),me=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),fe=x("div")(P||(P=a(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),he=x("div")(D||(D=a(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),ge=o.memo((e=>{let{toast:t,position:n,style:a,children:r}=e,s=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[a,o]=F()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pe(n),me(n)];return{animation:t?"".concat(v(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(v(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},i=o.createElement(ue,{toast:t}),l=o.createElement(he,{...t.ariaProps},H(t.message,t));return o.createElement(fe,{className:t.className,style:{...s,...a,...t.style}},"function"==typeof r?r({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))}));!function(e,t,n,a){d.p=t,g=e,b=n,y=a}(o.createElement);var be=e=>{let{id:t,className:n,style:a,onHeightUpdate:r,children:s}=e,i=o.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;r(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,r]);return o.createElement("div",{ref:i,className:n,style:a},s)},ye=h(z||(z=a(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ve=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:a,gutter:r,children:s,containerStyle:i,containerClassName:l}=e,{toasts:c,handlers:d}=V(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let a=e.position||n,i=((e,t)=>{let n=e.includes("top"),a=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...a,...o}})(a,d.calculateOffset(e,{reverseOrder:t,gutter:r,defaultPosition:n}));return o.createElement(be,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?ye:"",style:i},"custom"===e.type?H(e.message,e):s?s(e):o.createElement(ge,{toast:e,position:a}))})))},xe=Z}}]);
//# sourceMappingURL=417.2072e656.chunk.js.map