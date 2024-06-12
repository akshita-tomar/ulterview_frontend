"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[241],{8241:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(5043),r=n(4282),o=n(7451),i=(n(2339),n(579));const s=e=>{const t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL;let n=localStorage.getItem("token");const[s,l]=(0,a.useState)("");return(0,i.jsx)("div",{children:(0,i.jsxs)(o.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,i.jsx)(o.A.Header,{closeButton:!0,children:(0,i.jsx)(o.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Add Series"})}),(0,i.jsx)(o.A.Body,{children:(0,i.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter series",value:s,onChange:e=>l(e.target.value)})}),(0,i.jsx)(o.A.Footer,{children:(0,i.jsx)(r.A,{onClick:()=>{const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+n);const r={method:"POST",headers:a,body:JSON.stringify({questionSeries:s}),redirect:"follow"};fetch("".concat(t,"addQuestionSeries"),r).then((e=>e.json())).then((t=>{"success"===t.type&&(e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},children:"Submit"})})]})})}},4140:(e,t,n)=>{n.d(t,{Am:()=>i,Ay:()=>l});var a=n(5043),r=n(579);const o=["as","disabled"];function i(e){let{tagName:t,disabled:n,href:a,target:r,rel:o,role:i,onClick:s,tabIndex:l=0,type:d}=e;t||(t=null!=a||null!=r||null!=o?"a":"button");const c={tagName:t};if("button"===t)return[{type:d||"button",disabled:n},c];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:n?void 0:l,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const s=a.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,s=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);const[l,{tagName:d}]=i(Object.assign({tagName:n,disabled:a},s));return(0,r.jsx)(d,Object.assign({},s,l,{ref:t}))}));s.displayName="Button";const l=s},4282:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(8139),r=n.n(a),o=n(5043),i=n(4140),s=n(7852),l=n(579);const d=o.forwardRef(((e,t)=>{let{as:n,bsPrefix:a,variant:o="primary",size:d,active:c=!1,disabled:u=!1,className:p,...f}=e;const m=(0,s.oU)(a,"btn"),[g,{tagName:h}]=(0,i.Am)({tagName:n,disabled:u,...f}),b=h;return(0,l.jsx)(b,{...g,...f,ref:t,disabled:u,className:r()(p,m,c&&"active",o&&"".concat(m,"-").concat(o),d&&"".concat(m,"-").concat(d),f.href&&u&&"disabled")})}));d.displayName="Button";const c=d},2339:(e,t,n)=>{function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{l$:()=>ve,Ay:()=>xe,oR:()=>Q});var r=n(5043);let o={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let n="",a="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+i+";":a+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=c(i,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=c.p?c.p(o,i):o+":"+i+";")}return n+(t&&r?t+"{"+r+"}":r)+a},u={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},f=(e,t,n,a,r)=>{let o=p(e),i=u[o]||(u[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!u[i]){let t=o!==e?e:(e=>{let t,n,a=[{}];for(;t=s.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(n=t[3].replace(d," ").trim(),a.unshift(a[0][n]=a[0][n]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);u[i]=c(r?{["@keyframes "+i]:t}:t,n?"":"."+i)}let f=n&&u.g?u.g:null;return n&&(u.g=u[i]),((e,t,n,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[i],t,a,f),i},m=(e,t,n)=>e.reduce(((e,a,r)=>{let o=t[r];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)}),"");function g(e){let t=this||{},n=e.call?e(t.p):e;return f(n.unshift?n.raw?m(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,i(t.target),t.g,t.o,t.k)}g.bind({g:1});let h,b,y,v=g.bind({k:1});function x(e,t){let n=this||{};return function(){let a=arguments;function r(o,i){let s=Object.assign({},o),l=s.className||r.className;n.p=Object.assign({theme:b&&b()},s),n.o=/ *go\d+/.test(l),s.className=g.apply(n,a)+(l?" "+l:""),t&&(s.ref=i);let d=e;return e[0]&&(d=s.as||e,delete s.as),y&&d[0]&&y(s),h(d,s)}return t?t(r):r}}var w,E,j,O,A,N,k,C,S,D,P,T,_,z,I,H,R=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,B=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),L=new Map,M=e=>{if(L.has(e))return;let t=setTimeout((()=>{L.delete(e),q({type:4,toastId:e})}),1e3);L.set(e,t)},U=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=L.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?U(e,{type:1,toast:n}):U(e,{type:0,toast:n});case 3:let{toastId:a}=t;return a?M(a):e.toasts.forEach((e=>{M(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},K=[],W={toasts:[],pausedAt:void 0},q=e=>{W=U(W,e),K.forEach((e=>{e(W)}))},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J=e=>(t,n)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||B()}}(t,e,n);return q({type:2,toast:a}),a.id},Q=(e,t)=>J("blank")(e,t);Q.error=J("error"),Q.success=J("success"),Q.loading=J("loading"),Q.custom=J("custom"),Q.dismiss=e=>{q({type:3,toastId:e})},Q.remove=e=>q({type:4,toastId:e}),Q.promise=(e,t,n)=>{let a=Q.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(Q.success(R(t.success,e),{id:a,...n,...null==n?void 0:n.success}),e))).catch((e=>{Q.error(R(t.error,e),{id:a,...n,...null==n?void 0:n.error})})),e};var V=(e,t)=>{q({type:1,toast:{id:e,height:t}})},Y=()=>{q({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,r.useState)(W);(0,r.useEffect)((()=>(K.push(n),()=>{let e=K.indexOf(n);e>-1&&K.splice(e,1)})),[t]);let a=t.toasts.map((t=>{var n,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:a}}(e);(0,r.useEffect)((()=>{if(n)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>Q.dismiss(t.id)),n);t.visible&&Q.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let a=(0,r.useCallback)((()=>{n&&q({type:6,time:Date.now()})}),[n]),o=(0,r.useCallback)(((e,n)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:o}=n||{},i=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),s=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<s&&e.visible)).length;return i.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return{toasts:t,handlers:{updateHeight:V,startPause:Y,endPause:a,calculateOffset:o}}},G=v(w||(w=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=v(E||(E=a(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=v(j||(j=a(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=x("div")(O||(O=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),G,X,(e=>e.secondary||"#fff"),ee),ne=v(A||(A=a(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ae=x("div")(N||(N=a(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),re=v(k||(k=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),oe=v(C||(C=a(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),ie=x("div")(S||(S=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),re,oe,(e=>e.secondary||"#fff")),se=x("div")(D||(D=a(["\n  position: absolute;\n"]))),le=x("div")(P||(P=a(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),de=v(T||(T=a(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ce=x("div")(_||(_=a(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),de),ue=e=>{let{toast:t}=e,{icon:n,type:a,iconTheme:o}=t;return void 0!==n?"string"==typeof n?r.createElement(ce,null,n):n:"blank"===a?null:r.createElement(le,null,r.createElement(ae,{...o}),"loading"!==a&&r.createElement(se,null,"error"===a?r.createElement(te,{...o}):r.createElement(ie,{...o})))},pe=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),fe=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),me=x("div")(z||(z=a(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),ge=x("div")(I||(I=a(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),he=r.memo((e=>{let{toast:t,position:n,style:a,children:o}=e,i=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[a,r]=F()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pe(n),fe(n)];return{animation:t?"".concat(v(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(v(r)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},s=r.createElement(ue,{toast:t}),l=r.createElement(ge,{...t.ariaProps},R(t.message,t));return r.createElement(me,{className:t.className,style:{...i,...a,...t.style}},"function"==typeof o?o({icon:s,message:l}):r.createElement(r.Fragment,null,s,l))}));!function(e,t,n,a){c.p=t,h=e,b=n,y=a}(r.createElement);var be=e=>{let{id:t,className:n,style:a,onHeightUpdate:o,children:i}=e,s=r.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;o(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return r.createElement("div",{ref:s,className:n,style:a},i)},ye=g(H||(H=a(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ve=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:a,gutter:o,children:i,containerStyle:s,containerClassName:l}=e,{toasts:d,handlers:c}=Z(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map((e=>{let a=e.position||n,s=((e,t)=>{let n=e.includes("top"),a=n?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...a,...r}})(a,c.calculateOffset(e,{reverseOrder:t,gutter:o,defaultPosition:n}));return r.createElement(be,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?ye:"",style:s},"custom"===e.type?R(e.message,e):i?i(e):r.createElement(he,{toast:e,position:a}))})))},xe=Q}}]);
//# sourceMappingURL=241.2418b000.chunk.js.map