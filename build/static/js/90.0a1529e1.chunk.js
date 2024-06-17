"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[90],{5090:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var s=a(5043),n=a(3216),o=a(2339),r=a(6720),l=a(7451),c=a(64),i=a.n(c),d=a(7196),h=a(3002),m=a(4842),u=a(2021),g=a(184),p=a(579);const j=()=>{const[e,t]=(0,s.useState)([]),[a,c]=(0,s.useState)(!1),[j,x]=(0,s.useState)(!1),[f,b]=(0,s.useState)(""),[N,S]=(0,s.useState)(!1),[y,k]=(0,s.useState)([]),[_,v]=(0,s.useState)(""),[C,w]=(0,s.useState)(!1),[A,I]=(0,s.useState)(0),[E,B]=(0,s.useState)(!1),[T,H]=(0,s.useState)(""),[O,z]=(0,s.useState)(""),[L,P]=(0,s.useState)(!1),[D,R]=(0,s.useState)(""),[V,U]=(0,s.useState)(0),[q,Y]=(0,s.useState)(!1),[J,F]=(0,s.useState)(""),[G,Q]=(0,s.useState)(""),[X,K]=(0,s.useState)(0),[Z,$]=(0,s.useState)(0),M=(0,n.Zp)();let W=localStorage.getItem("token");const ee="http://16.171.41.223:8000/api/v1/";(0,s.useEffect)((()=>{let e=localStorage.getItem("token"),t=localStorage.getItem("languageId");const a=new Headers;a.append("Authorization","Bearer "+e);const s={method:"GET",headers:a,redirect:"follow"};fetch("".concat(ee,"/getAllSeries?languageId=").concat(t),s).then((e=>e.json())).then((e=>{"success"===e.type&&k(e.allSeries)})).catch((e=>console.error(e)))}),[V]),(0,s.useEffect)((()=>{te()}),[A]);const te=()=>{let e=localStorage.getItem("token");e||M("/"),v(""),w(!0);const a=new Headers;a.append("Authorization","Bearer "+e);const s={method:"GET",headers:a,redirect:"follow"};fetch("".concat(ee,"getAllLanguages"),s).then((e=>e.json())).then((e=>{t(e.data),c(!0)})).catch((e=>console.error(e)))},ae=e=>{let t=localStorage.getItem("token");t||M("/");const a=new Headers;a.append("Authorization","Bearer "+t);const s={method:"POST",headers:a,redirect:"follow"};fetch("".concat(ee,"deleteLanguage?languageId=").concat(e),s).then((e=>e.json())).then((e=>{"error"===e.type?o.Ay.error(e.message):I((e=>e+1))})).catch((e=>console.error(e)))},se=()=>{x(!1),c(!0)},ne=(e,t)=>{let a=localStorage.getItem("token");const s=new Headers;s.append("Authorization","Bearer "+a);const n={method:"DELETE",headers:s,redirect:"follow"};fetch("".concat(ee,"deleteSeries?seriesId=").concat(e),n).then((e=>e.json())).then((e=>{U((e=>e+1))})).catch((e=>console.error(e)))},oe=()=>{Y(!1)},re=()=>{B(!1),c(!0)},le=()=>{P(!1)},{show:ce,setShow:ie}=(0,m.U)(),de=(0,n.zy)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"sidebar ".concat(ce?"cmn_width":""),children:[(0,p.jsx)("h3",{className:"bar",onClick:()=>{ie(!ce)},children:ce?(0,p.jsx)(u.j55,{className:"p-0 text-center"}):(0,p.jsx)(g.OXb,{})}),(0,p.jsx)("div",{className:"sidebar-button mt-4 ".concat("/homepage"===de.pathname?"active-pathname":""),onClick:te,children:(0,p.jsxs)("div",{className:"sidebar_content",children:[(0,p.jsx)(d.XfR,{}),(0,p.jsx)("h4",{className:ce?"d-none":"sidebar_content",children:"Questionnaire"})]})}),(0,p.jsx)("div",{className:"sidebar-button mt-2 ".concat("/candidates-performance"===de.pathname?"active-pathname":""),onClick:()=>{M("/candidates-performance")},children:(0,p.jsxs)("div",{className:"sidebar_content",children:[(0,p.jsx)(h.KR6,{}),(0,p.jsx)("h4",{className:ce?"d-none":"sidebar_content",children:"Candidate Results"})]})}),(0,p.jsx)(o.l$,{})]}),C&&(0,p.jsxs)(p.Fragment,{children:[a&&(0,p.jsx)("div",{className:"language-modal",children:(0,p.jsxs)("div",{className:"d-flex flex-wrap-wrap language-modal_outer  ".concat(ce?"":"margin"),children:[null===e||void 0===e?void 0:e.map((e=>(0,p.jsxs)("div",{className:"language-card align-items-center",children:[(0,p.jsxs)("h3",{className:"text-space",onClick:()=>((e,t)=>{let a=e;localStorage.setItem("language",e),localStorage.setItem("languageId",t);let s=localStorage.getItem("token");s||M("/");const n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Bearer "+s);const r={method:"POST",headers:n,body:JSON.stringify({language:a}),redirect:"follow"};fetch("".concat(ee,"UpdateUserLanguage"),r).then((e=>e.json())).then((e=>{"error"===e.type?o.Ay.error(e.message):(c(!1),U((e=>e+1)),S(!0))})).catch((e=>console.error(e)))})(e.language,e._id),children:[" ",e.language]}),"DEVELOPER"===localStorage.getItem("role")?(0,p.jsxs)("div",{className:"card-inner",children:[(0,p.jsx)(r.Yvo,{onClick:()=>((e,t)=>{z(t),H(e),B(!0),c(!1)})(e._id,e.language)})," ",(0,p.jsx)(r.b6i,{onClick:()=>{return t=e._id,void i().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ce2128",cancelButtonColor:"#333",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&ae(t)}));var t}})," "]}):null]},e.id))),"DEVELOPER"===localStorage.getItem("role")?(0,p.jsx)("button",{className:"add-more-languages-btn",onClick:()=>{c(!1),x(!0)},children:"Add new"}):null]})}),(0,p.jsxs)(l.A,{centered:!0,show:j,onHide:se,backdrop:"static",keyboard:!1,className:"modal-inner",children:[(0,p.jsx)(l.A.Header,{closeButton:!0,children:(0,p.jsx)(l.A.Title,{className:"heading",children:"Add language"})}),(0,p.jsx)(l.A.Body,{children:(0,p.jsx)("input",{className:"form-control",required:!0,type:"text",placeholder:"language",onChange:e=>b(e.target.value)})}),(0,p.jsxs)("div",{className:"language_footer",children:[(0,p.jsx)("button",{className:"modal_close_btn",onClick:se,children:" Close "}),(0,p.jsx)("button",{className:"modal_add_btn cmn_btn_color",onClick:async e=>{e.preventDefault();let t=localStorage.getItem("token");const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+t);const s={method:"POST",headers:a,body:JSON.stringify({language:f}),redirect:"follow"};fetch("".concat(ee,"addLanguage"),s).then((e=>e.json())).then((e=>{"error"===e.type?o.Ay.error(e.message,{duration:1e3}):(x(!1),te())})).catch((e=>console.error(e)))},children:"Add"})]})]}),(0,p.jsxs)(l.A,{centered:!0,show:E,onHide:re,backdrop:"static",keyboard:!1,className:"modal-inner",children:[(0,p.jsx)(l.A.Header,{closeButton:!0,children:(0,p.jsx)(l.A.Title,{className:"heading",children:"Update language"})}),(0,p.jsx)(l.A.Body,{children:(0,p.jsx)("input",{className:"form-control",required:!0,defaultValue:O,type:"text",onChange:e=>z(e.target.value)})}),(0,p.jsxs)("div",{className:"language_footer",children:[(0,p.jsx)("button",{onClick:re,className:"modal_close_btn",children:" Close"}),(0,p.jsx)("button",{className:"modal_add_btn cmn_btn_color",onClick:()=>{W||M("/");const e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+W);const t={method:"PUT",headers:e,body:JSON.stringify({language:O}),redirect:"follow"};fetch("".concat(ee,"updateLanguage?languageId=").concat(T),t).then((e=>e.json())).then((e=>{"error"===e.type?o.Ay.error(e.message):(o.Ay.success(e.message),B(!1),I((e=>e+1)))})).catch((e=>console.error(e)))},children:"Update"})]})]}),N&&(0,p.jsx)("div",{className:"series-modal-overlay",children:(0,p.jsxs)("div",{className:"series-modal",children:[(0,p.jsxs)("h3",{className:"close-series",onClick:()=>{S(!1),c(!0)},children:[" ",(0,p.jsx)(u.j55,{})]}),(0,p.jsx)("div",{className:"modal-header",children:(0,p.jsx)("h3",{className:"heading",children:"Select Series"})}),(0,p.jsxs)("div",{className:"modal-body",children:["DEVELOPER"===localStorage.getItem("role")?(0,p.jsx)("div",{className:"series-option-new",onClick:()=>{P(!0)},children:"Add new series"}):null,y.map(((e,t)=>(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"pending"===e.status?"series-outer-box-pending mt-3":"series-outer-box mt-3 series-outer-box-pending",children:[(0,p.jsxs)("h4",{className:"series-option",onClick:()=>(e=>{const t=new Headers;t.append("Authorization","Bearer "+W);const a={method:"GET",headers:t,redirect:"follow"};fetch("".concat(ee,"getSeries?seriesId=").concat(e),a).then((e=>e.json())).then((e=>{"success"===e.type&&(localStorage.setItem("series",e.series.seriesName),localStorage.setItem("seriesId",e.series._id),v(e.series.seriesName),S(!1),c(!1),"DEVELOPER"===localStorage.getItem("role")&&M("/updateQuestions"),localStorage.getItem(!1)&&M("/candidates"))})).catch((e=>console.error(e)))})(e._id),children:[" ",e.seriesName," (",e.status,")"]},t),"DEVELOPER"===localStorage.getItem("role")?(0,p.jsxs)("div",{className:"edit_series_outer",children:[(0,p.jsx)(r.Yvo,{className:"me-2",onClick:()=>((e,t,a)=>{F(t),v(e),K(a),Y(!0)})(e.seriesName,e._id,e.taskTime)}),(0,p.jsx)(r.b6i,{onClick:()=>{return t=e._id,a=e.seriesName,void i().fire({title:"Are you sure to delete this series?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ce2128",cancelButtonColor:"#333",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&ne(t,a)}));var t,a}})]}):null]})})))]})]})}),(0,p.jsxs)(l.A,{centered:!0,show:L,onHide:le,backdrop:"static",keyboard:!1,className:"modal-inner",children:[(0,p.jsx)(l.A.Header,{closeButton:!0,children:(0,p.jsx)(l.A.Title,{className:"heading",children:"Add new series"})}),(0,p.jsxs)(l.A.Body,{children:[(0,p.jsx)("input",{required:!0,className:"input-field form-control",type:"text",placeholder:"Enter new series",onChange:e=>R(e.target.value)}),(0,p.jsx)("label",{className:"mb-3 new_series_label",children:"Time taken to complete this series test (in minuites)"}),(0,p.jsx)("input",{required:!0,className:"input-field form-control",type:"number",min:0,placeholder:"Enter task time",value:X,onChange:e=>K(e.target.value)})]}),(0,p.jsxs)("div",{className:"language_footer",children:[(0,p.jsx)("button",{onClick:le,className:"modal_close_btn",children:" Close"}),(0,p.jsx)("button",{className:"modal_add_btn cmn_btn_color",onClick:e=>{e.preventDefault();let t=localStorage.getItem("token");t||M("/");let a=localStorage.getItem("languageId");const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+t);const n={method:"POST",headers:s,body:JSON.stringify({seriesName:D,taskTime:X}),redirect:"follow"};fetch("".concat(ee,"createSeries?languageId=").concat(a),n).then((e=>e.json())).then((e=>{"success"===e.type?(U((e=>e+1)),P(!1)):o.Ay.error(e.message)})).catch((e=>console.error(e)))},children:"Add"})]})]}),(0,p.jsxs)(l.A,{centered:!0,show:q,onHide:oe,backdrop:"static",keyboard:!1,className:"modal-inner",children:[(0,p.jsx)(l.A.Header,{closeButton:!0,children:(0,p.jsx)(l.A.Title,{className:"heading",children:"Edit series"})}),(0,p.jsxs)(l.A.Body,{children:[(0,p.jsx)("input",{required:!0,className:"input-field form-control ",type:"text",defaultValue:_,placeholder:"Edit series",onChange:e=>Q(e.target.value)}),(0,p.jsx)("input",{required:!0,className:"input-field form-control",type:"number",min:0,placeholder:"Enter task time",defaultValue:X,onChange:e=>$(e.target.value)})]}),(0,p.jsxs)("div",{className:"language_footer",children:[(0,p.jsx)("button",{onClick:oe,className:"modal_close_btn",children:" Close"}),(0,p.jsx)("button",{className:"modal_add_btn cmn_btn_color",onClick:()=>{let e=localStorage.getItem("token");const t=new Headers;t.append("Content-Type","application/json"),t.append("Authorization","Bearer "+e);const a={method:"PUT",headers:t,body:JSON.stringify({updatedSeries:G||_,taskTime:Z||X}),redirect:"follow"};fetch("".concat(ee,"updateSeries?updateSeriesId=").concat(J),a).then((e=>e.json())).then((e=>{"success"===e.type&&(U((e=>e+1)),Y(!1))})).catch((e=>console.error(e)))},children:"Submit"})]})]})]})]})}}}]);
//# sourceMappingURL=90.0a1529e1.chunk.js.map