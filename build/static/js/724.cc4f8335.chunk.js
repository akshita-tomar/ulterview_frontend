/*! For license information please see 724.cc4f8335.chunk.js.LICENSE.txt */
(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[724],{4724:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(5043),s=n(4196),c=n(8139),a=n.n(c),i=n(7852),o=n(6161),u=n(579);const l=r.forwardRef(((e,t)=>{let{active:n=!1,disabled:r=!1,className:s,style:c,activeLabel:i="(current)",children:l,linkStyle:d,linkClassName:f,as:h=o.A,...p}=e;const x=n||r?"span":h;return(0,u.jsx)("li",{ref:t,style:c,className:a()(s,"page-item",{active:n,disabled:r}),children:(0,u.jsxs)(x,{className:a()("page-link",f),style:d,...p,children:[l,n&&i&&(0,u.jsx)("span",{className:"visually-hidden",children:i})]})})}));l.displayName="PageItem";const d=l;function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;const s=r.forwardRef(((e,r)=>{let{children:s,...c}=e;return(0,u.jsxs)(l,{...c,ref:r,children:[(0,u.jsx)("span",{"aria-hidden":"true",children:s||t}),(0,u.jsx)("span",{className:"visually-hidden",children:n})]})}));return s.displayName=e,s}const h=f("First","\xab"),p=f("Prev","\u2039","Previous"),x=f("Ellipsis","\u2026","More"),v=f("Next","\u203a"),m=f("Last","\xbb"),j=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,size:s,...c}=e;const o=(0,i.oU)(n,"pagination");return(0,u.jsx)("ul",{ref:t,...c,className:a()(r,o,s&&"".concat(o,"-").concat(s))})}));j.displayName="Pagination";const g=Object.assign(j,{First:h,Prev:p,Ellipsis:x,Item:d,Next:v,Last:m});var y=n(3023),b=n.n(y),w=n(3216),N=n(5749),k=n(4842);const A=()=>{const e=localStorage.getItem("token"),t=(0,w.Zp)(),[n,c]=(0,r.useState)([]),[a,i]=(0,r.useState)(1),[o,l]=(0,r.useState)(1),d=(0,N.io)("http://16.171.41.223:8000"),f=t=>{const n=new Headers;n.append("Authorization","Bearer "+e);const r={method:"GET",headers:n,redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","getCandidatebyLanguage?languageId&page=").concat(t,"&limit=").concat(10),r).then((e=>e.json())).then((e=>{"success"===e.type&&(e.candidates.length<1?b()({confirmButtonColor:"red",title:"Interview not completed by any candidate.",text:"Thanks!",icon:"success",className:"swal-button-custom"}):(c(e.candidates),l(Math.ceil(e.totalCount/10))))})).catch((e=>console.error(e)))};(0,r.useEffect)((()=>(f(a),d.on("interview_result_submitted",(()=>{f(a)})),()=>{d.disconnect()})),[a]);const{show:h}=(0,k.U)();return(0,u.jsx)("div",{className:"wrapper ".concat(h?"cmn_margin":""),children:(0,u.jsx)("div",{className:"cmn_container",children:(0,u.jsxs)("div",{className:"table-responsive mb-0",children:[(0,u.jsxs)(s.A,{striped:!0,bordered:!0,hover:!0,className:"user-table",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Sr.no"}),(0,u.jsx)("th",{children:"Username"}),(0,u.jsx)("th",{children:"Profile"}),(0,u.jsx)("th",{children:"Experience"}),(0,u.jsx)("th",{children:"Result Status"}),(0,u.jsx)("th",{children:"Actions"})]})}),(0,u.jsx)("tbody",{children:n.map(((e,n)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:10*(a-1)+n+1}),(0,u.jsx)("td",{children:e.username}),(0,u.jsx)("td",{children:e.profile}),(0,u.jsx)("td",{children:e.experience}),(0,u.jsx)("td",{className:"rejected"===e.resultStatus?"rejected-candidate":"selected"===e.resultStatus?"selected-candidate":"",children:e.resultStatus}),(0,u.jsx)("td",{children:(0,u.jsx)("button",{className:"examin-btn invite_btn",onClick:()=>{return n=e._id,r=e.resultStatus,void t("selected"===r||"rejected"===r?"/candidate-checked-sheet/".concat(n):"/candidate-answers-sheet/".concat(n));var n,r},children:"Examine"})})]},n)))})]}),(0,u.jsx)(g,{children:[...Array(o).keys()].map((e=>(0,u.jsx)(g.Item,{active:e+1===a,onClick:()=>(e=>{i(e)})(e+1),children:e+1},e)))})]})})})}},2667:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);function s(){return(0,r.useState)(null)}},8232:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);const s=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t}},1456:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(5043),s=n(8232);function c(e){const t=(0,s.A)(e);return(0,r.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}},9967:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(5043),s=n(1456);function c(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=(0,s.A)(n);(0,r.useEffect)((()=>{const n="function"===typeof e?e():e;return n.addEventListener(t,a,c),()=>n.removeEventListener(t,a,c)}),[e])}},4723:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(5043);const s="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,c="undefined"!==typeof document||s?r.useLayoutEffect:r.useEffect},6723:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);function s(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}},1342:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);function s(e){const t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{t.current=e})),t.current}},6161:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(5043),s=(n(2667),n(8232),n(1456));n(9967);n(6723),n(1342);n(4723);new WeakMap;var c=n(4140),a=n(579);const i=["onKeyDown"];const o=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,i);const[o]=(0,c.Am)(Object.assign({tagName:"a"},r)),u=(0,s.A)((e=>{o.onKeyDown(e),null==n||n(e)}));return(l=r.href)&&"#"!==l.trim()&&"button"!==r.role?(0,a.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,a.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:u}));var l}));o.displayName="Anchor";const u=o},7852:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>d,Wz:()=>f,gy:()=>l,oU:()=>u});var r=n(5043);n(579);const s=["xxl","xl","lg","md","sm","xs"],c="xs",a=r.createContext({prefixes:{},breakpoints:s,minBreakpoint:c}),{Consumer:i,Provider:o}=a;function u(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function l(){const{breakpoints:e}=(0,r.useContext)(a);return e}function d(){const{minBreakpoint:e}=(0,r.useContext)(a);return e}function f(){const{dir:e}=(0,r.useContext)(a);return"rtl"===e}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,c(n)))}return e}function c(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=724.cc4f8335.chunk.js.map