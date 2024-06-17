"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[867],{1867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(4282),a=n(7451),o=n(1833),i=n(5043),s=n(885),l=n(2339),d=n(579);const c=e=>{let t="http://localhost:8000/api/v1/";const[n,c]=(0,i.useState)(!1),[u,p]=(0,i.useState)([]),[f,m]=(0,i.useState)("");let h=localStorage.getItem("token");(0,i.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+h);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(t,"getHrRoundSeries"),n).then((e=>e.json())).then((e=>{p(e.allSeries)})).catch((e=>console.error(e)))}),[]);return(0,d.jsx)("div",{children:(0,d.jsxs)(a.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,d.jsx)(a.A.Header,{closeButton:!0,children:(0,d.jsx)(a.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite for HR Round"})}),(0,d.jsxs)(a.A.Body,{children:[(0,d.jsx)("div",{className:"loader_outer_wrapper",children:n&&(0,d.jsx)("img",{src:o,height:"50px",width:"50px"})}),(0,d.jsxs)("select",{className:"candidate-register-input form-control mt-3",value:f,onChange:e=>{m(e.target.value)},children:[(0,d.jsx)("option",{value:"",children:"Select series"}),null===u||void 0===u?void 0:u.map((e=>{var t,n,r;return(0,d.jsxs)("option",{disabled:(null===(t=e.questions)||void 0===t?void 0:t.length)<3||void 0===e.questions,className:(null===(n=e.questions)||void 0===n?void 0:n.length)<3||void 0===e.questions?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.questionSeries," ",(null===(r=e.questions)||void 0===r?void 0:r.length)<1||void 0===e.questions?"(pending)":null]},e._id)}))]})]}),(0,d.jsx)(a.A.Footer,{children:(0,d.jsx)(r.A,{className:"cmn_btn_color",onClick:()=>{const n=(0,s.r)(e.candidateID),r="".concat("http://localhost:3000","/hr-round/:").concat(encodeURIComponent(n));console.log("test link ---",r);const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+h);const o={method:"POST",headers:a,body:JSON.stringify({candidateId:e.candidateID,seriesId:f,link:r}),redirect:"follow"};fetch("".concat(t,"sendHrRoundQuesAns"),o).then((e=>e.json())).then((t=>{"success"===t.type?(l.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1)):"Series Id not present."===t.message?l.Ay.error("Please enter series",{duration:2e3}):l.Ay.error(t.message)})).catch((e=>console.error(e)))},children:"Send link"})})]})})}},885:(e,t,n)=>{n.d(t,{r:()=>i,x:()=>s});var r=n(8698),a=n.n(r);const o="your-secret-key",i=e=>{try{return a().encrypt(o,e)}catch(t){return console.error("Encryption error:",t),null}},s=e=>{try{return a().decrypt(o,e)}catch(t){return console.error("Decryption error:",t),null}}},4140:(e,t,n)=>{n.d(t,{Am:()=>i,Ay:()=>l});var r=n(5043),a=n(579);const o=["as","disabled"];function i(e){let{tagName:t,disabled:n,href:r,target:a,rel:o,role:i,onClick:s,tabIndex:l=0,type:d}=e;t||(t=null!=r||null!=a||null!=o?"a":"button");const c={tagName:t};if("button"===t)return[{type:d||"button",disabled:n},c];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const s=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);const[l,{tagName:d}]=i(Object.assign({tagName:n,disabled:r},s));return(0,a.jsx)(d,Object.assign({},s,l,{ref:t}))}));s.displayName="Button";const l=s},4282:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(8139),a=n.n(r),o=n(5043),i=n(4140),s=n(7852),l=n(579);const d=o.forwardRef(((e,t)=>{let{as:n,bsPrefix:r,variant:o="primary",size:d,active:c=!1,disabled:u=!1,className:p,...f}=e;const m=(0,s.oU)(r,"btn"),[h,{tagName:g}]=(0,i.Am)({tagName:n,disabled:u,...f}),y=g;return(0,l.jsx)(y,{...h,...f,ref:t,disabled:u,className:a()(p,m,c&&"active",o&&"".concat(m,"-").concat(o),d&&"".concat(m,"-").concat(d),f.href&&u&&"disabled")})}));d.displayName="Button";const c=d},2339:(e,t,n)=>{function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{l$:()=>ve,Ay:()=>xe,oR:()=>Q});var a=n(5043);let o={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let n="",r="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+i+";":r+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=c(i,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=c.p?c.p(o,i):o+":"+i+";")}return n+(t&&a?t+"{"+a+"}":a)+r},u={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},f=(e,t,n,r,a)=>{let o=p(e),i=u[o]||(u[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!u[i]){let t=o!==e?e:(e=>{let t,n,r=[{}];for(;t=s.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(n=t[3].replace(d," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);u[i]=c(a?{["@keyframes "+i]:t}:t,n?"":"."+i)}let f=n&&u.g?u.g:null;return n&&(u.g=u[i]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[i],t,r,f),i},m=(e,t,n)=>e.reduce(((e,r,a)=>{let o=t[a];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==o?"":o)}),"");function h(e){let t=this||{},n=e.call?e(t.p):e;return f(n.unshift?n.raw?m(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,i(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,y,b,v=h.bind({k:1});function x(e,t){let n=this||{};return function(){let r=arguments;function a(o,i){let s=Object.assign({},o),l=s.className||a.className;n.p=Object.assign({theme:y&&y()},s),n.o=/ *go\d+/.test(l),s.className=h.apply(n,r)+(l?" "+l:""),t&&(s.ref=i);let d=e;return e[0]&&(d=s.as||e,delete s.as),b&&d[0]&&b(s),g(d,s)}return t?t(a):a}}var w,j,k,A,E,N,O,C,I,z,S,D,P,_,H,T,R=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,q=(()=>{let e=0;return()=>(++e).toString()})(),B=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),F=new Map,M=e=>{if(F.has(e))return;let t=setTimeout((()=>{F.delete(e),G({type:4,toastId:e})}),1e3);F.set(e,t)},L=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=F.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?L(e,{type:1,toast:n}):L(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?M(r):e.toasts.forEach((e=>{M(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+a})))}}},U=[],$={toasts:[],pausedAt:void 0},G=e=>{$=L($,e),U.forEach((e=>{e($)}))},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=e=>(t,n)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||q()}}(t,e,n);return G({type:2,toast:r}),r.id},Q=(e,t)=>K("blank")(e,t);Q.error=K("error"),Q.success=K("success"),Q.loading=K("loading"),Q.custom=K("custom"),Q.dismiss=e=>{G({type:3,toastId:e})},Q.remove=e=>G({type:4,toastId:e}),Q.promise=(e,t,n)=>{let r=Q.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(Q.success(R(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{Q.error(R(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var Y=(e,t)=>{G({type:1,toast:{id:e,height:t}})},Z=()=>{G({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,a.useState)($);(0,a.useEffect)((()=>(U.push(n),()=>{let e=U.indexOf(n);e>-1&&U.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||J[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}}(e);(0,a.useEffect)((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>Q.dismiss(t.id)),n);t.visible&&Q.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=(0,a.useCallback)((()=>{n&&G({type:6,time:Date.now()})}),[n]),o=(0,a.useCallback)(((e,n)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:o}=n||{},i=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+a),0)}),[t]);return{toasts:t,handlers:{updateHeight:Y,startPause:Z,endPause:r,calculateOffset:o}}},W=v(w||(w=r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=v(j||(j=r(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=v(k||(k=r(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=x("div")(A||(A=r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),W,X,(e=>e.secondary||"#fff"),ee),ne=v(E||(E=r(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),re=x("div")(N||(N=r(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),ae=v(O||(O=r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),oe=v(C||(C=r(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),ie=x("div")(I||(I=r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),ae,oe,(e=>e.secondary||"#fff")),se=x("div")(z||(z=r(["\n  position: absolute;\n"]))),le=x("div")(S||(S=r(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),de=v(D||(D=r(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ce=x("div")(P||(P=r(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),de),ue=e=>{let{toast:t}=e,{icon:n,type:r,iconTheme:o}=t;return void 0!==n?"string"==typeof n?a.createElement(ce,null,n):n:"blank"===r?null:a.createElement(le,null,a.createElement(re,{...o}),"loading"!==r&&a.createElement(se,null,"error"===r?a.createElement(te,{...o}):a.createElement(ie,{...o})))},pe=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),fe=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),me=x("div")(_||(_=r(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),he=x("div")(H||(H=r(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),ge=a.memo((e=>{let{toast:t,position:n,style:r,children:o}=e,i=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,a]=B()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pe(n),fe(n)];return{animation:t?"".concat(v(r)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(v(a)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},s=a.createElement(ue,{toast:t}),l=a.createElement(he,{...t.ariaProps},R(t.message,t));return a.createElement(me,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof o?o({icon:s,message:l}):a.createElement(a.Fragment,null,s,l))}));!function(e,t,n,r){c.p=t,g=e,y=n,b=r}(a.createElement);var ye=e=>{let{id:t,className:n,style:r,onHeightUpdate:o,children:i}=e,s=a.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;o(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return a.createElement("div",{ref:s,className:n,style:r},i)},be=h(T||(T=r(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ve=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:r,gutter:o,children:i,containerStyle:s,containerClassName:l}=e,{toasts:d,handlers:c}=V(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map((e=>{let r=e.position||n,s=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...r,...a}})(r,c.calculateOffset(e,{reverseOrder:t,gutter:o,defaultPosition:n}));return a.createElement(ye,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?be:"",style:s},"custom"===e.type?R(e.message,e):i?i(e):a.createElement(ge,{toast:e,position:r}))})))},xe=Q}}]);
//# sourceMappingURL=867.954cd424.chunk.js.map