"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[425],{7806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(5043),r=a(4282),s=a(7451),i=a(579);const o=e=>{const t=localStorage.getItem("token"),[a,o]=(0,n.useState)("");return(0,i.jsx)("div",{children:(0,i.jsxs)(s.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,i.jsx)(s.A.Header,{closeButton:!0,children:(0,i.jsx)(s.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Update Series"})}),(0,i.jsx)(s.A.Body,{children:(0,i.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter series",defaultValue:e.series,onChange:e=>o(e.target.value)})}),(0,i.jsx)(s.A.Footer,{children:(0,i.jsx)(r.A,{onClick:()=>{const n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Bearer "+t);const r={method:"PUT",headers:n,body:JSON.stringify({seriesId:e.seriesId,seriesName:a||e.series}),redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","updateHrRoundSeries"),r).then((e=>e.json())).then((t=>{"success"===t.type&&(e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},children:"Submit"})})]})})}},4140:(e,t,a)=>{a.d(t,{Am:()=>i,Ay:()=>d});var n=a(5043),r=a(579);const s=["as","disabled"];function i(e){let{tagName:t,disabled:a,href:n,target:r,rel:s,role:i,onClick:o,tabIndex:d=0,type:l}=e;t||(t=null!=n||null!=r||null!=s?"a":"button");const c={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},c];const u=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return"a"===t&&(n||(n="#"),a&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:a?void 0:d,href:n,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const o=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,o=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);const[d,{tagName:l}]=i(Object.assign({tagName:a,disabled:n},o));return(0,r.jsx)(l,Object.assign({},o,d,{ref:t}))}));o.displayName="Button";const d=o},4282:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(8139),r=a.n(n),s=a(5043),i=a(4140),o=a(7852),d=a(579);const l=s.forwardRef(((e,t)=>{let{as:a,bsPrefix:n,variant:s="primary",size:l,active:c=!1,disabled:u=!1,className:f,...b}=e;const h=(0,o.oU)(n,"btn"),[p,{tagName:m}]=(0,i.Am)({tagName:a,disabled:u,...b}),v=m;return(0,d.jsx)(v,{...p,...b,ref:t,disabled:u,className:r()(f,h,c&&"active",s&&"".concat(h,"-").concat(s),l&&"".concat(h,"-").concat(l),b.href&&u&&"disabled")})}));l.displayName="Button";const c=l}}]);
//# sourceMappingURL=425.4fdba49f.chunk.js.map