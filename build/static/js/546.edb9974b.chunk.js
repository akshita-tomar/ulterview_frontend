/*! For license information please see 546.edb9974b.chunk.js.LICENSE.txt */
(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[546],{4546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5043),s=r(4196),o=r(3216),c=r(579);const i=()=>{let e=localStorage.getItem("token"),t=(0,o.Zp)(),[r,i]=(0,n.useState)([]),[a,d]=(0,n.useState)(1),[l,u]=(0,n.useState)(1);(0,n.useEffect)((()=>{(()=>{const t=new Headers;t.append("Authorization","Bearer "+e);const r={method:"GET",headers:t,redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","HrRoundTestCompletd?page=").concat(a,"&limit=10"),r).then((e=>e.json())).then((e=>{"success"===e.type&&(i(e.testCompletedBy),u(e.totalPages))})).catch((e=>console.error(e)))})()}),[a]);const h=e=>{e>0&&e<=l&&d(e)};return(0,c.jsxs)("div",{className:"wrapper",children:[(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)(s.A,{striped:!0,bordered:!0,hover:!0,className:"user-table candidate_entry_table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Sr.no"}),(0,c.jsx)("th",{children:"Username"}),(0,c.jsx)("th",{children:"Profile"}),(0,c.jsx)("th",{children:"Experience"}),(0,c.jsx)("th",{children:"Hr round status"}),(0,c.jsx)("th",{children:"Action"})]})}),(0,c.jsx)("tbody",{children:r.map(((e,r)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:10*(a-1)+r+1}),(0,c.jsx)("td",{children:e.username}),(0,c.jsx)("td",{children:e.profile}),(0,c.jsx)("td",{children:e.experience}),(0,c.jsx)("td",{children:e.hrRoundStatus}),(0,c.jsx)("td",{children:(0,c.jsx)("button",{onClick:()=>{return r=e._id,void t("/hr-answers-check/".concat(r));var r},children:"show"})})]},r)))})]})}),(0,c.jsxs)("div",{className:"pagination",children:[(0,c.jsx)("button",{onClick:()=>h(a-1),disabled:1===a,children:"Previous"}),(0,c.jsxs)("span",{children:["Page ",a," of ",l]}),(0,c.jsx)("button",{onClick:()=>h(a+1),disabled:a===l,children:"Next"})]})]})}},4196:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(8139),s=r.n(n),o=r(5043),c=r(7852),i=r(579);const a=o.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,striped:o,bordered:a,borderless:d,hover:l,size:u,variant:h,responsive:p,...x}=e;const f=(0,c.oU)(r,"table"),j=s()(n,f,h&&"".concat(f,"-").concat(h),u&&"".concat(f,"-").concat(u),o&&"".concat(f,"-").concat("string"===typeof o?"striped-".concat(o):"striped"),a&&"".concat(f,"-bordered"),d&&"".concat(f,"-borderless"),l&&"".concat(f,"-hover")),v=(0,i.jsx)("table",{...x,className:j,ref:t});if(p){let e="".concat(f,"-responsive");return"string"===typeof p&&(e="".concat(e,"-").concat(p)),(0,i.jsx)("div",{className:e,children:v})}return v}))},7852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>u,Wz:()=>h,gy:()=>l,oU:()=>d});var n=r(5043);r(579);const s=["xxl","xl","lg","md","sm","xs"],o="xs",c=n.createContext({prefixes:{},breakpoints:s,minBreakpoint:o}),{Consumer:i,Provider:a}=c;function d(e,t){const{prefixes:r}=(0,n.useContext)(c);return e||r[t]||t}function l(){const{breakpoints:e}=(0,n.useContext)(c);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(c);return e}function h(){const{dir:e}=(0,n.useContext)(c);return"rtl"===e}},8139:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=c(e,o(r)))}return e}function o(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=c(t,r));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=546.edb9974b.chunk.js.map