"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[402,425],{3402:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var s=n(5043),r=n(4842),a=n(3023),o=n.n(a),i=n(4196),d=n(6720),c=n(8241),l=n(7806),h=n(64),u=n.n(h),p=n(3216),v=n(579);const f=()=>{const e=localStorage.getItem("token"),{show:t}=(0,r.U)(),n="http://16.171.41.223:8000/api/v1/",a=(0,p.Zp)(),[h,f]=(0,s.useState)(!1),[m,b]=(0,s.useState)([]),[j,x]=(0,s.useState)(0),[g,S]=(0,s.useState)(!1),[y,A]=(0,s.useState)(""),[N,w]=(0,s.useState)("");(0,s.useEffect)((()=>{const t=new Headers;t.append("Authorization","Bearer "+e);const s={method:"GET",headers:t,redirect:"follow"};fetch("".concat(n,"getHrRoundSeries"),s).then((e=>e.json())).then((e=>{e.allSeries.length<1?o()("No series added yet !"," Add series and HR round questions."):b(e.allSeries)})).catch((e=>console.error(e)))}),[j]);const C=t=>{const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+e);const r={method:"DELETE",headers:s,body:JSON.stringify({SeriesId:t}),redirect:"follow"};fetch("".concat(n,"deleteHrRoundSeries"),r).then((e=>e.json())).then((e=>{"success"===e.type&&x((e=>e+1))})).catch((e=>console.error(e)))};return(0,v.jsxs)("div",{className:"wrapper ".concat(t?"cmn_margin":""," "),children:[(0,v.jsx)("div",{className:"text-end mb-3 pe-3",children:(0,v.jsx)("button",{className:"register-btn",onClick:()=>{f(!0)},children:"Add Series"})}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)(i.A,{striped:!0,bordered:!0,hover:!0,className:"user-table candidate_entry_table",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Sr.no"}),(0,v.jsx)("th",{children:"Series"}),(0,v.jsx)("th",{children:"Series status"}),(0,v.jsx)("th",{children:"Action"})]})}),(0,v.jsx)("tbody",{children:m.map(((e,t)=>{var n,s;return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:t+1}),(0,v.jsx)("td",{children:e.questionSeries}),(0,v.jsxs)("td",{children:[" ",(null===(n=e.questions)||void 0===n?void 0:n.length)<3||void 0===e.questions?"(pending)":(null===(s=e.questions)||void 0===s?void 0:s.length)+" questions"]}),(0,v.jsxs)("td",{children:[(0,v.jsx)("button",{onClick:()=>{return t=e._id,void a("/hr-round-questions/".concat(t));var t},children:"Show "})," ",(0,v.jsx)(d.Yvo,{onClick:()=>{return t=e._id,n=e.questionSeries,w(t),A(n),void S(!0);var t,n}})," ",(0,v.jsx)(d.b6i,{onClick:()=>{return t=e._id,void u().fire({title:"Are you sure to delete this Series?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ce2128",cancelButtonColor:"#333",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&C(t)}));var t}})]})]},t)}))})]})}),h&&(0,v.jsx)(c.default,{show:h,onHide:()=>f(!1),handleChange:x}),g&&(0,v.jsx)(l.default,{show:g,onHide:()=>S(!1),handleChange:x,series:y,seriesId:N})]})}},8241:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(5043),r=n(4282),a=n(7451),o=(n(2339),n(579));const i=e=>{let t=localStorage.getItem("token");const[n,i]=(0,s.useState)("");return(0,o.jsx)("div",{children:(0,o.jsxs)(a.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,o.jsx)(a.A.Header,{closeButton:!0,children:(0,o.jsx)(a.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Add Series"})}),(0,o.jsx)(a.A.Body,{children:(0,o.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter series",value:n,onChange:e=>i(e.target.value)})}),(0,o.jsx)(a.A.Footer,{children:(0,o.jsx)(r.A,{onClick:()=>{const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+t);const r={method:"POST",headers:s,body:JSON.stringify({questionSeries:n}),redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","addQuestionSeries"),r).then((e=>e.json())).then((t=>{"success"===t.type&&(e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},children:"Submit"})})]})})}},7806:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(5043),r=n(4282),a=n(7451),o=n(579);const i=e=>{const t=localStorage.getItem("token"),[n,i]=(0,s.useState)("");return(0,o.jsx)("div",{children:(0,o.jsxs)(a.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,o.jsx)(a.A.Header,{closeButton:!0,children:(0,o.jsx)(a.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Update Series"})}),(0,o.jsx)(a.A.Body,{children:(0,o.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter series",defaultValue:e.series,onChange:e=>i(e.target.value)})}),(0,o.jsx)(a.A.Footer,{children:(0,o.jsx)(r.A,{onClick:()=>{const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+t);const r={method:"PUT",headers:s,body:JSON.stringify({seriesId:e.seriesId,seriesName:n||e.series}),redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","updateHrRoundSeries"),r).then((e=>e.json())).then((t=>{"success"===t.type&&(e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},children:"Submit"})})]})})}},4140:(e,t,n)=>{n.d(t,{Am:()=>o,Ay:()=>d});var s=n(5043),r=n(579);const a=["as","disabled"];function o(e){let{tagName:t,disabled:n,href:s,target:r,rel:a,role:o,onClick:i,tabIndex:d=0,type:c}=e;t||(t=null!=s||null!=r||null!=a?"a":"button");const l={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},l];const h=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(s||(s="#"),n&&(s=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:n?void 0:d,href:s,target:"a"===t?r:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:h,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),h(e))}},l]}const i=s.forwardRef(((e,t)=>{let{as:n,disabled:s}=e,i=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);const[d,{tagName:c}]=o(Object.assign({tagName:n,disabled:s},i));return(0,r.jsx)(c,Object.assign({},i,d,{ref:t}))}));i.displayName="Button";const d=i},4282:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(8139),r=n.n(s),a=n(5043),o=n(4140),i=n(7852),d=n(579);const c=a.forwardRef(((e,t)=>{let{as:n,bsPrefix:s,variant:a="primary",size:c,active:l=!1,disabled:h=!1,className:u,...p}=e;const v=(0,i.oU)(s,"btn"),[f,{tagName:m}]=(0,o.Am)({tagName:n,disabled:h,...p}),b=m;return(0,d.jsx)(b,{...f,...p,ref:t,disabled:h,className:r()(u,v,l&&"active",a&&"".concat(v,"-").concat(a),c&&"".concat(v,"-").concat(c),p.href&&h&&"disabled")})}));c.displayName="Button";const l=c},4196:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(8139),r=n.n(s),a=n(5043),o=n(7852),i=n(579);const d=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:s,striped:a,bordered:d,borderless:c,hover:l,size:h,variant:u,responsive:p,...v}=e;const f=(0,o.oU)(n,"table"),m=r()(s,f,u&&"".concat(f,"-").concat(u),h&&"".concat(f,"-").concat(h),a&&"".concat(f,"-").concat("string"===typeof a?"striped-".concat(a):"striped"),d&&"".concat(f,"-bordered"),c&&"".concat(f,"-borderless"),l&&"".concat(f,"-hover")),b=(0,i.jsx)("table",{...v,className:m,ref:t});if(p){let e="".concat(f,"-responsive");return"string"===typeof p&&(e="".concat(e,"-").concat(p)),(0,i.jsx)("div",{className:e,children:b})}return b}))}}]);
//# sourceMappingURL=402.654c16bc.chunk.js.map