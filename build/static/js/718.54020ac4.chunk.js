"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[718],{9718:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(5043),o=n(4282),r=n(7451),s=n(579);const i=e=>{let t=localStorage.getItem("token");const[n,i]=(0,a.useState)(""),d=e.seriesId;return(0,s.jsx)("div",{children:(0,s.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,s.jsx)(r.A.Header,{closeButton:!0,children:(0,s.jsx)(r.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Add Question"})}),(0,s.jsx)(r.A.Body,{children:(0,s.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter question",value:n,onChange:e=>i(e.target.value)})}),(0,s.jsx)(r.A.Footer,{children:(0,s.jsx)(o.A,{onClick:()=>{const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+t);const o={method:"POST",headers:a,body:JSON.stringify({questionSeriesId:d,question:{question:n}}),redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","addQuestion"),o).then((e=>e.json())).then((t=>{console.log(t),"success"===t.type&&(e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},children:"Submit"})})]})})}},4140:(e,t,n)=>{n.d(t,{Am:()=>s,Ay:()=>d});var a=n(5043),o=n(579);const r=["as","disabled"];function s(e){let{tagName:t,disabled:n,href:a,target:o,rel:r,role:s,onClick:i,tabIndex:d=0,type:l}=e;t||(t=null!=a||null!=o||null!=r?"a":"button");const c={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},c];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(a||(a="#"),n&&(a=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:d,href:a,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?r:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const i=a.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,i=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);const[d,{tagName:l}]=s(Object.assign({tagName:n,disabled:a},i));return(0,o.jsx)(l,Object.assign({},i,d,{ref:t}))}));i.displayName="Button";const d=i},4282:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(8139),o=n.n(a),r=n(5043),s=n(4140),i=n(7852),d=n(579);const l=r.forwardRef(((e,t)=>{let{as:n,bsPrefix:a,variant:r="primary",size:l,active:c=!1,disabled:u=!1,className:b,...f}=e;const h=(0,i.oU)(a,"btn"),[p,{tagName:m}]=(0,s.Am)({tagName:n,disabled:u,...f}),v=m;return(0,d.jsx)(v,{...p,...f,ref:t,disabled:u,className:o()(b,h,c&&"active",r&&"".concat(h,"-").concat(r),l&&"".concat(h,"-").concat(l),f.href&&u&&"disabled")})}));l.displayName="Button";const c=l}}]);
//# sourceMappingURL=718.54020ac4.chunk.js.map