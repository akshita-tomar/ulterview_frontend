"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[106],{1867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(4282),o=n(7451),s=n(1833),a=n(5043),i=n(885),d=n(2339),l=n(579);const c=e=>{let t="http://16.171.41.223:8000/api/v1/";const[n,c]=(0,a.useState)(!1),[u,h]=(0,a.useState)([]),[p,v]=(0,a.useState)("");let g=localStorage.getItem("token");(0,a.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+g);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(t,"getHrRoundSeries"),n).then((e=>e.json())).then((e=>{h(e.allSeries)})).catch((e=>console.error(e)))}),[]);return(0,l.jsx)("div",{children:(0,l.jsxs)(o.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,l.jsx)(o.A.Header,{closeButton:!0,children:(0,l.jsx)(o.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite for HR Round"})}),(0,l.jsxs)(o.A.Body,{children:[(0,l.jsx)("div",{className:"loader_outer_wrapper",children:n&&(0,l.jsx)("img",{src:s,height:"50px",width:"50px"})}),(0,l.jsxs)("select",{className:"candidate-register-input form-control mt-3",value:p,onChange:e=>{v(e.target.value)},children:[(0,l.jsx)("option",{value:"",children:"Select series"}),null===u||void 0===u?void 0:u.map((e=>{var t,n,r;return(0,l.jsxs)("option",{disabled:(null===(t=e.questions)||void 0===t?void 0:t.length)<3||void 0===e.questions,className:(null===(n=e.questions)||void 0===n?void 0:n.length)<3||void 0===e.questions?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.questionSeries," ",(null===(r=e.questions)||void 0===r?void 0:r.length)<1||void 0===e.questions?"(pending)":null]},e._id)}))]})]}),(0,l.jsx)(o.A.Footer,{children:(0,l.jsx)(r.A,{className:"cmn_btn_color",onClick:()=>{const n=(0,i.r)(e.candidateID),r="".concat("http://16.171.41.223","/hr-round/:").concat(encodeURIComponent(n));console.log("test link ---",r);const o=new Headers;o.append("Content-Type","application/json"),o.append("Authorization","Bearer "+g);const s={method:"POST",headers:o,body:JSON.stringify({candidateId:e.candidateID,seriesId:p,link:r}),redirect:"follow"};fetch("".concat(t,"sendHrRoundQuesAns"),s).then((e=>e.json())).then((t=>{"success"===t.type?(d.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1)):"Series Id not present."===t.message?d.Ay.error("Please enter series",{duration:2e3}):d.Ay.error(t.message)})).catch((e=>console.error(e)))},children:"Send link"})})]})})}},885:(e,t,n)=>{n.d(t,{r:()=>a,x:()=>i});var r=n(8698),o=n.n(r);const s="your-secret-key",a=e=>{try{return o().encrypt(s,e)}catch(t){return console.error("Encryption error:",t),null}},i=e=>{try{return o().decrypt(s,e)}catch(t){return console.error("Decryption error:",t),null}}},4140:(e,t,n)=>{n.d(t,{Am:()=>a,Ay:()=>d});var r=n(5043),o=n(579);const s=["as","disabled"];function a(e){let{tagName:t,disabled:n,href:r,target:o,rel:s,role:a,onClick:i,tabIndex:d=0,type:l}=e;t||(t=null!=r||null!=o||null!=s?"a":"button");const c={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},c];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:d,href:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const i=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,i=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s);const[d,{tagName:l}]=a(Object.assign({tagName:n,disabled:r},i));return(0,o.jsx)(l,Object.assign({},i,d,{ref:t}))}));i.displayName="Button";const d=i}}]);
//# sourceMappingURL=106.a7cc88eb.chunk.js.map