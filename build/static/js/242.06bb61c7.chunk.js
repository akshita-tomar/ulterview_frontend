"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[242],{242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(5043),r=n(4282),o=n(7451),s=n(2339),i=n(3216),l=n(885),c=n(1833),d=n(579);const u=e=>{let t=localStorage.getItem("token");const n=(0,i.Zp)(),u="http://16.171.41.223:8000/api/v1/",[p,f]=(0,a.useState)([]),[m,h]=(0,a.useState)(""),[g,y]=(0,a.useState)({series:"",id:""}),[b,v]=(0,a.useState)(!1);let x=e.candidateID,w=e.languageId;(0,a.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+t);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(u,"getSingleCandidate?candidateId=").concat(x),n).then((e=>e.json())).then((e=>{"success"===e.type&&(h(e.isCandidateExist.profile),"completed"!==e.isCandidateExist.testStatus&&"invite_accepted"!==e.isCandidateExist.testStatus&&"invite_sent"!==e.isCandidateExist.testStatus||j())})).catch((e=>console.error(e)))}),[]);const j=()=>{const e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t);const n={method:"POST",headers:e,body:JSON.stringify({candidateId:x}),redirect:"follow"};fetch("".concat(u,"handleResendLink"),n).then((e=>e.json())).then((e=>console.log(e))).catch((e=>console.error(e)))};(0,a.useEffect)((()=>{t||n("/");const e=new Headers;e.append("Authorization","Bearer "+t);const a={method:"GET",headers:e,redirect:"follow"};fetch("".concat(u,"getAllSeries?languageId=").concat(w),a).then((e=>e.json())).then((e=>{console.log(e),"success"===e.type?e.allSeries.length<1?s.Ay.error("No series is created for this language.",{duration:1e3}):f(e.allSeries):s.Ay.error(e.message)})).catch((e=>console.error(e)))}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(o.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,d.jsx)(o.A.Header,{closeButton:!0,children:(0,d.jsx)(o.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite"})}),(0,d.jsxs)(o.A.Body,{children:[(0,d.jsx)("div",{className:"loader_outer_wrapper",children:b&&(0,d.jsx)("img",{src:c,height:"50px",width:"50px"})}),(0,d.jsx)("input",{value:m,className:"candidate-register-input  form-control mt-3"}),(0,d.jsxs)("select",{className:"candidate-register-input form-control mt-3",onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,a=e.target.value;y({language:n,id:a})},children:[(0,d.jsx)("option",{value:"",children:"Select series"}),null===p||void 0===p?void 0:p.map((e=>(0,d.jsxs)("option",{disabled:"pending"===e.status,className:"pending"===e.status?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.seriesName,"(",e.status,")"]},e._id)))]})]}),(0,d.jsx)(o.A.Footer,{children:(0,d.jsx)(r.A,{className:"cmn_btn_color",onClick:()=>{const n=new Headers;n.append("Authorization","Bearer "+t);const a={method:"POST",headers:n,redirect:"follow"};fetch("".concat(u,"sendInterviewLink?candidateId=").concat(x,"&seriesId=").concat(g.id),a).then((e=>e.json())).then((n=>{if(console.log(n),"success"===n.type){const n=(0,l.r)(x),a="http://localhost:3000/interview-questions/:".concat(encodeURIComponent(n));v(!0),console.log("link----",a);const r=new Headers;r.append("Content-Type","application/json"),r.append("Authorization","Bearer "+t);const o={method:"POST",headers:r,body:JSON.stringify({link:a}),redirect:"follow"};fetch("".concat(u,"sendLinkViaEmail?candidateId=").concat(x),o).then((e=>e.json())).then((t=>{console.log(t),"success"===t.type&&(s.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1),v(!1))})).catch((e=>console.error(e)))}else"Series Id not present."===n.message?s.Ay.error("Please select series."):s.Ay.error(n.message)})).catch((e=>console.error(e)))},children:"Send link"})})]}),(0,d.jsx)(s.l$,{})]})}},885:(e,t,n)=>{n.d(t,{r:()=>s,x:()=>i});var a=n(8698),r=n.n(a);const o="your-secret-key",s=e=>{try{return r().encrypt(o,e)}catch(t){return console.error("Encryption error:",t),null}},i=e=>{try{return r().decrypt(o,e)}catch(t){return console.error("Decryption error:",t),null}}},4140:(e,t,n)=>{n.d(t,{Am:()=>s,Ay:()=>l});var a=n(5043),r=n(579);const o=["as","disabled"];function s(e){let{tagName:t,disabled:n,href:a,target:r,rel:o,role:s,onClick:i,tabIndex:l=0,type:c}=e;t||(t=null!=a||null!=r||null!=o?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},d];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:l,href:a,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const i=a.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,i=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);const[l,{tagName:c}]=s(Object.assign({tagName:n,disabled:a},i));return(0,r.jsx)(c,Object.assign({},i,l,{ref:t}))}));i.displayName="Button";const l=i},4282:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(8139),r=n.n(a),o=n(5043),s=n(4140),i=n(7852),l=n(579);const c=o.forwardRef(((e,t)=>{let{as:n,bsPrefix:a,variant:o="primary",size:c,active:d=!1,disabled:u=!1,className:p,...f}=e;const m=(0,i.oU)(a,"btn"),[h,{tagName:g}]=(0,s.Am)({tagName:n,disabled:u,...f}),y=g;return(0,l.jsx)(y,{...h,...f,ref:t,disabled:u,className:r()(p,m,d&&"active",o&&"".concat(m,"-").concat(o),c&&"".concat(m,"-").concat(c),f.href&&u&&"disabled")})}));c.displayName="Button";const d=c},2339:(e,t,n)=>{function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{l$:()=>ve,Ay:()=>xe,oR:()=>K});var r=n(5043);let o={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let n="",a="",r="";for(let o in e){let s=e[o];"@"==o[0]?"i"==o[1]?n=o+" "+s+";":a+="f"==o[1]?d(s,o):o+"{"+d(s,"k"==o[1]?"":t)+"}":"object"==typeof s?a+=d(s,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=s&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(o,s):o+":"+s+";")}return n+(t&&r?t+"{"+r+"}":r)+a},u={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},f=(e,t,n,a,r)=>{let o=p(e),s=u[o]||(u[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!u[s]){let t=o!==e?e:(e=>{let t,n,a=[{}];for(;t=i.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(n=t[3].replace(c," ").trim(),a.unshift(a[0][n]=a[0][n]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);u[s]=d(r?{["@keyframes "+s]:t}:t,n?"":"."+s)}let f=n&&u.g?u.g:null;return n&&(u.g=u[s]),((e,t,n,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[s],t,a,f),s},m=(e,t,n)=>e.reduce(((e,a,r)=>{let o=t[r];if(o&&o.call){let e=o(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+a+(null==o?"":o)}),"");function h(e){let t=this||{},n=e.call?e(t.p):e;return f(n.unshift?n.raw?m(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,s(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,y,b,v=h.bind({k:1});function x(e,t){let n=this||{};return function(){let a=arguments;function r(o,s){let i=Object.assign({},o),l=i.className||r.className;n.p=Object.assign({theme:y&&y()},i),n.o=/ *go\d+/.test(l),i.className=h.apply(n,a)+(l?" "+l:""),t&&(i.ref=s);let c=e;return e[0]&&(c=i.as||e,delete i.as),b&&c[0]&&b(i),g(c,i)}return t?t(r):r}}var w,j,k,E,A,N,C,I,O,S,z,P,_,D,T,H,B=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,L=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),M=new Map,R=e=>{if(M.has(e))return;let t=setTimeout((()=>{M.delete(e),G({type:4,toastId:e})}),1e3);M.set(e,t)},U=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=M.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?U(e,{type:1,toast:n}):U(e,{type:0,toast:n});case 3:let{toastId:a}=t;return a?R(a):e.toasts.forEach((e=>{R(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+r})))}}},$=[],q={toasts:[],pausedAt:void 0},G=e=>{q=U(q,e),$.forEach((e=>{e(q)}))},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Z=e=>(t,n)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||L()}}(t,e,n);return G({type:2,toast:a}),a.id},K=(e,t)=>Z("blank")(e,t);K.error=Z("error"),K.success=Z("success"),K.loading=Z("loading"),K.custom=Z("custom"),K.dismiss=e=>{G({type:3,toastId:e})},K.remove=e=>G({type:4,toastId:e}),K.promise=(e,t,n)=>{let a=K.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(K.success(B(t.success,e),{id:a,...n,...null==n?void 0:n.success}),e))).catch((e=>{K.error(B(t.error,e),{id:a,...n,...null==n?void 0:n.error})})),e};var V=(e,t)=>{G({type:1,toast:{id:e,height:t}})},Y=()=>{G({type:5,time:Date.now()})},Q=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,r.useState)(q);(0,r.useEffect)((()=>($.push(n),()=>{let e=$.indexOf(n);e>-1&&$.splice(e,1)})),[t]);let a=t.toasts.map((t=>{var n,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||J[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:a}}(e);(0,r.useEffect)((()=>{if(n)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>K.dismiss(t.id)),n);t.visible&&K.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let a=(0,r.useCallback)((()=>{n&&G({type:6,time:Date.now()})}),[n]),o=(0,r.useCallback)(((e,n)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:o}=n||{},s=t.filter((t=>(t.position||o)===(e.position||o)&&t.height)),i=s.findIndex((t=>t.id===e.id)),l=s.filter(((e,t)=>t<i&&e.visible)).length;return s.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+r),0)}),[t]);return{toasts:t,handlers:{updateHeight:V,startPause:Y,endPause:a,calculateOffset:o}}},W=v(w||(w=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=v(j||(j=a(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=v(k||(k=a(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=x("div")(E||(E=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),W,X,(e=>e.secondary||"#fff"),ee),ne=v(A||(A=a(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ae=x("div")(N||(N=a(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),re=v(C||(C=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),oe=v(I||(I=a(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),se=x("div")(O||(O=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),re,oe,(e=>e.secondary||"#fff")),ie=x("div")(S||(S=a(["\n  position: absolute;\n"]))),le=x("div")(z||(z=a(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ce=v(P||(P=a(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),de=x("div")(_||(_=a(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ce),ue=e=>{let{toast:t}=e,{icon:n,type:a,iconTheme:o}=t;return void 0!==n?"string"==typeof n?r.createElement(de,null,n):n:"blank"===a?null:r.createElement(le,null,r.createElement(ae,{...o}),"loading"!==a&&r.createElement(ie,null,"error"===a?r.createElement(te,{...o}):r.createElement(se,{...o})))},pe=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),fe=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),me=x("div")(D||(D=a(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),he=x("div")(T||(T=a(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),ge=r.memo((e=>{let{toast:t,position:n,style:a,children:o}=e,s=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[a,r]=F()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pe(n),fe(n)];return{animation:t?"".concat(v(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(v(r)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},i=r.createElement(ue,{toast:t}),l=r.createElement(he,{...t.ariaProps},B(t.message,t));return r.createElement(me,{className:t.className,style:{...s,...a,...t.style}},"function"==typeof o?o({icon:i,message:l}):r.createElement(r.Fragment,null,i,l))}));!function(e,t,n,a){d.p=t,g=e,y=n,b=a}(r.createElement);var ye=e=>{let{id:t,className:n,style:a,onHeightUpdate:o,children:s}=e,i=r.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;o(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return r.createElement("div",{ref:i,className:n,style:a},s)},be=h(H||(H=a(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ve=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:a,gutter:o,children:s,containerStyle:i,containerClassName:l}=e,{toasts:c,handlers:d}=Q(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let a=e.position||n,i=((e,t)=>{let n=e.includes("top"),a=n?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...a,...r}})(a,d.calculateOffset(e,{reverseOrder:t,gutter:o,defaultPosition:n}));return r.createElement(ye,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?be:"",style:i},"custom"===e.type?B(e.message,e):s?s(e):r.createElement(ge,{toast:e,position:a}))})))},xe=K}}]);
//# sourceMappingURL=242.06bb61c7.chunk.js.map