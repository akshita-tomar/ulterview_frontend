/*! For license information please see 826.3af09888.chunk.js.LICENSE.txt */
(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[826],{8821:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(5043),s=n(9853),c=n(4196),a=n(7491),i=n(3023),o=n.n(i),u=n(3216),d=n(5749),l=n(4842),h=n(579);const f=()=>{const e=localStorage.getItem("token"),t=(0,u.Zp)(),[n,i]=(0,r.useState)([]),[f,p]=(0,r.useState)(1),[x,m]=(0,r.useState)(1),v=(0,d.io)("http://16.171.41.223:8000"),[j,y]=(0,r.useState)(""),[b,g]=(0,r.useState)(1),S=t=>{const n=new Headers;n.append("Authorization","Bearer "+e);const r={method:"GET",headers:n,redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","getCandidatebyLanguage?languageId&page=").concat(t,"&limit=").concat(10,"&search=").concat(j),r).then((e=>e.json())).then((e=>{"success"===e.type&&(e.candidates.length<1?1===b&&o()({confirmButtonColor:"red",title:"Interview not completed by any candidate.",text:"Thanks!",icon:"success",className:"swal-button-custom"}):(i(e.candidates),m(Math.ceil(e.totalCount/10))))})).catch((e=>console.error(e)))};(0,r.useEffect)((()=>(g((e=>e+1)),S(f),v.on("interview_result_submitted",(()=>{S(f)})),()=>{v.disconnect()})),[f,j]);const{show:C}=(0,l.U)();return(0,h.jsxs)("div",{className:"wrapper ".concat(C?"cmn_margin":""),children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3 pe-3 teamhub",children:[(0,h.jsxs)("div",{className:"page-headers",children:[" ",(0,h.jsx)("h5",{children:"Candidate Results"})]}),(0,h.jsx)("div",{className:"searchbox-hr-feedback-teamhub",children:(0,h.jsx)(s.A.Control,{type:"text",placeholder:"Search",value:j,onChange:e=>{y(e.target.value)}})})]}),(0,h.jsx)("div",{className:"cmn_container",children:(0,h.jsxs)("div",{className:"table-responsive mb-0",children:[(0,h.jsxs)(c.A,{striped:!0,bordered:!0,hover:!0,className:"user-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Sr.no"}),(0,h.jsx)("th",{children:"Username"}),(0,h.jsx)("th",{children:"Profile"}),(0,h.jsx)("th",{children:"Experience"}),(0,h.jsx)("th",{children:"Result Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map(((e,n)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:10*(f-1)+n+1}),(0,h.jsx)("td",{children:e.username}),(0,h.jsx)("td",{children:e.profile}),(0,h.jsx)("td",{children:e.experience}),(0,h.jsx)("td",{className:"rejected"===e.resultStatus?"rejected-candidate":"selected"===e.resultStatus?"selected-candidate":"",children:e.resultStatus}),(0,h.jsx)("td",{children:(0,h.jsx)("button",{className:"examin-btn invite_btn",onClick:()=>{return n=e._id,r=e.resultStatus,void t("selected"===r||"rejected"===r?"/candidate-checked-sheet/".concat(n):"/candidate-answers-sheet/".concat(n));var n,r},children:"Examine"})})]},n)))})]}),(0,h.jsx)(a.A,{children:[...Array(x).keys()].map((e=>(0,h.jsx)(a.A.Item,{active:e+1===f,onClick:()=>(e=>{p(e)})(e+1),children:e+1},e)))})]})})]})}},2667:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);function s(){return(0,r.useState)(null)}},8232:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);const s=function(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t}},1456:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(5043),s=n(8232);function c(e){const t=(0,s.A)(e);return(0,r.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}},4723:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(5043);const s="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,c="undefined"!==typeof document||s?r.useLayoutEffect:r.useEffect},6723:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);function s(){const e=(0,r.useRef)(!0),t=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}},1342:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(5043);function s(e){const t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{t.current=e})),t.current}},1497:(e,t,n)=>{"use strict";var r=n(3218);function s(){}function c(){}c.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,c,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:s};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7852:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>l,Wz:()=>h,gy:()=>d,oU:()=>u});var r=n(5043);n(579);const s=["xxl","xl","lg","md","sm","xs"],c="xs",a=r.createContext({prefixes:{},breakpoints:s,minBreakpoint:c}),{Consumer:i,Provider:o}=a;function u(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function d(){const{breakpoints:e}=(0,r.useContext)(a);return e}function l(){const{minBreakpoint:e}=(0,r.useContext)(a);return e}function h(){const{dir:e}=(0,r.useContext)(a);return"rtl"===e}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,c(n)))}return e}function c(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=826.3af09888.chunk.js.map