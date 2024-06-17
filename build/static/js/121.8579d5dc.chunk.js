"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[121],{242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(5043),s=n(4282),r=n(7451),o=n(2339),d=n(3216),i=n(885),c=n(1833),l=n(579);const h=e=>{let t=localStorage.getItem("token");const n=(0,d.Zp)();let h="http://16.171.41.223:8000/api/v1/";const[u,p]=(0,a.useState)([]),[g,m]=(0,a.useState)(""),[x,j]=(0,a.useState)({series:"",id:""}),[v,f]=(0,a.useState)(!1);let S=e.candidateID,y=e.languageId;(0,a.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+t);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(h,"getSingleCandidate?candidateId=").concat(S),n).then((e=>e.json())).then((e=>{"success"===e.type&&(m(e.isCandidateExist.profile),"completed"!==e.isCandidateExist.testStatus&&"invite_accepted"!==e.isCandidateExist.testStatus&&"invite_sent"!==e.isCandidateExist.testStatus||A())})).catch((e=>console.error(e)))}),[]);const A=()=>{const e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t);const n={method:"POST",headers:e,body:JSON.stringify({candidateId:S}),redirect:"follow"};fetch("".concat(h,"handleResendLink"),n).then((e=>e.json())).then((e=>console.log(e))).catch((e=>console.error(e)))};(0,a.useEffect)((()=>{t||n("/");const e=new Headers;e.append("Authorization","Bearer "+t);const a={method:"GET",headers:e,redirect:"follow"};fetch("".concat(h,"getAllSeries?languageId=").concat(y),a).then((e=>e.json())).then((e=>{"success"===e.type?e.allSeries.length<1?o.Ay.error("No series is created for this language.",{duration:1e3}):p(e.allSeries):o.Ay.error(e.message)})).catch((e=>console.error(e)))}),[]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,l.jsx)(r.A.Header,{closeButton:!0,children:(0,l.jsx)(r.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite"})}),(0,l.jsxs)(r.A.Body,{children:[(0,l.jsx)("div",{className:"loader_outer_wrapper",children:v&&(0,l.jsx)("img",{src:c,height:"50px",width:"50px"})}),(0,l.jsx)("input",{value:g,className:"candidate-register-input  form-control mt-3"}),(0,l.jsxs)("select",{className:"candidate-register-input form-control mt-3",onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,a=e.target.value;j({language:n,id:a})},children:[(0,l.jsx)("option",{value:"",children:"Select series"}),null===u||void 0===u?void 0:u.map((e=>(0,l.jsxs)("option",{disabled:"pending"===e.status,className:"pending"===e.status?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.seriesName,"(",e.status,")"]},e._id)))]})]}),(0,l.jsx)(r.A.Footer,{children:(0,l.jsx)(s.A,{className:"cmn_btn_color",onClick:()=>{const n=new Headers;n.append("Authorization","Bearer "+t);const a={method:"POST",headers:n,redirect:"follow"};fetch("".concat(h,"sendInterviewLink?candidateId=").concat(S,"&seriesId=").concat(x.id),a).then((e=>e.json())).then((n=>{if(console.log(n),"success"===n.type){const n=(0,i.r)(S);console.log("invite candidate id ---",n);const a="".concat("http://16.171.41.223","/interview-questions/:").concat(encodeURIComponent(n));f(!0),console.log("link----",a);const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+t);const r={method:"POST",headers:s,body:JSON.stringify({link:a}),redirect:"follow"};fetch("".concat(h,"sendLinkViaEmail?candidateId=").concat(S),r).then((e=>e.json())).then((t=>{console.log(t),"success"===t.type&&(o.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1),f(!1))})).catch((e=>console.error(e)))}else"Series Id not present."===n.message?o.Ay.error("Please select series."):o.Ay.error(n.message)})).catch((e=>console.error(e)))},children:"Send link"})})]}),(0,l.jsx)(o.l$,{})]})}},4121:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(5043),s=n(3216),r=n(4196),o=n(8387),d=n(8318),i=n(242),c=n(64),l=n.n(c),h=n(6720),u=n(2339),p=n(5749),g=n(4842),m=n(1867),x=n(579);const j=()=>{const e=localStorage.getItem("token"),t=(0,s.Zp)(),[n,c]=(0,a.useState)([]),[j,v]=(0,a.useState)(!1),[f,S]=(0,a.useState)(!1),[y,A]=(0,a.useState)(!1),[C,b]=(0,a.useState)(""),[w,I]=(0,a.useState)(""),[_,N]=(0,a.useState)(0),[E,k]=(0,a.useState)(!1),[H,B]=(0,a.useState)(1),[T,R]=(0,a.useState)(1),z="http://16.171.41.223:8000/api/v1/",P=(0,p.io)("http://16.171.41.223:8000");e||t("/");const O=()=>{const t=new Headers;t.append("Authorization","Bearer "+e);const n={method:"GET",headers:t,redirect:"follow"};fetch("".concat(z,"getCandidates?page=").concat(H,"&limit=10"),n).then((e=>e.json())).then((e=>{c(e.allCandidates),R(e.totalPages)})).catch((e=>console.error(e)))};(0,a.useEffect)((()=>(O(),P.on("Interview_submitted",(()=>{O()})),()=>{P.disconnect()})),[e,z,_,H]);const q=e=>{e>0&&e<=T&&B(e)},U=t=>{const n=new Headers;n.append("Authorization","Bearer "+e);const a={method:"DELETE",headers:n,redirect:"follow"};fetch("".concat(z,"deleteCandidate?candidateId=").concat(t),a).then((e=>e.json())).then((e=>{"success"===e.type&&(u.Ay.success(e.message,{duration:800}),N((e=>e+1)))})).catch((e=>console.error(e)))},D=(e,t)=>{b(e),I(t),A(!0)},G=e=>{b(e),k(!0)},{show:L}=(0,g.U)();return(0,x.jsxs)("div",{className:"wrapper ".concat(L?"cmn_margin":""," "),children:[(0,x.jsx)("div",{className:"text-end mb-3 pe-3",children:(0,x.jsx)("button",{className:"register-btn",onClick:()=>v(!0),children:"Register"})}),(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)(r.A,{striped:!0,bordered:!0,hover:!0,className:"user-table candidate_entry_table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Sr.no"}),(0,x.jsx)("th",{children:"Username"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Profile"}),(0,x.jsx)("th",{children:"Experience"}),(0,x.jsx)("th",{children:"HR round"}),(0,x.jsx)("th",{children:"Invite(HR round)"}),(0,x.jsx)("th",{children:"Technical round"}),(0,x.jsx)("th",{children:"Invite(Tech round)"}),(0,x.jsx)("th",{children:"Result Status"})]})}),(0,x.jsx)("tbody",{children:n.map(((e,t)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:10*(H-1)+t+1}),(0,x.jsx)("td",{children:e.username}),(0,x.jsx)("td",{children:e.email}),(0,x.jsx)("td",{children:e.profile}),(0,x.jsx)("td",{children:e.experience}),(0,x.jsx)("td",{children:e.hrRoundStatus}),(0,x.jsx)("td",{children:"invite_sent"===e.hrRoundStatus||"invite_accepted"===e.hrRoundStatus||"completed"===e.hrRoundStatus||"selected"===e.hrRoundStatus||"rejected"===e.hrRoundStatus?(0,x.jsx)("button",{className:"invite_btn",onClick:()=>G(e._id),children:"Resend"}):(0,x.jsx)("button",{className:"invite_btn",onClick:()=>G(e._id),children:"Invite"})}),(0,x.jsx)("td",{children:e.testStatus}),(0,x.jsx)("td",{children:"completed"===e.testStatus||"invite_sent"===e.testStatus||"invite_accepted"===e.testStatus?(0,x.jsx)("button",{className:"invite_btn",onClick:()=>D(e._id,e.languageId),children:"Resend"}):(0,x.jsx)("button",{className:"invite_btn",onClick:()=>D(e._id,e.languageId),children:"Invite"})}),(0,x.jsxs)("td",{className:"rejected"===e.resultStatus?"rejected-candidate":"selected"===e.resultStatus?"selected-candidate":"",children:[e.resultStatus,(0,x.jsxs)("div",{children:[(0,x.jsx)(h.Yvo,{className:"MdEdit cursor-pointer me-2",onClick:()=>{return t=e._id,b(t),void S(!0);var t}}),(0,x.jsx)(h.b6i,{className:"cursor-pointer MdEdit",onClick:()=>{return t=e._id,void l().fire({title:"Are you sure to delete this Candidate?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ce2128",cancelButtonColor:"#333",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&U(t)}));var t}})]})]})]},t)))})]})}),(0,x.jsxs)("div",{className:"pagination",children:[(0,x.jsx)("button",{onClick:()=>q(H-1),disabled:1===H,children:"Previous"}),(0,x.jsxs)("span",{children:["Page ",H," of ",T]}),(0,x.jsx)("button",{onClick:()=>q(H+1),disabled:H===T,children:"Next"})]}),j&&(0,x.jsx)(o.default,{show:j,onHide:()=>v(!1),handleChange:N}),f&&(0,x.jsx)(d.default,{show:f,onHide:()=>S(!1),candidateId:C,handleChange:N}),y&&(0,x.jsx)(i.default,{show:y,onHide:()=>A(!1),candidateID:C,languageId:w,handleChange:N}),E&&(0,x.jsx)(m.default,{show:E,onHide:()=>k(!1),candidateID:C,handleChange:N}),(0,x.jsx)(u.l$,{})]})}},8387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(5043),s=n(4282),r=n(7451),o=n(2339),d=n(579);const i=e=>{let t=localStorage.getItem("token"),n="http://16.171.41.223:8000/api/v1/";const[i,c]=(0,a.useState)(""),[l,h]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[g,m]=(0,a.useState)([]),[x,j]=(0,a.useState)({language:"",id:""});(0,a.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+t);const a={method:"GET",headers:e,redirect:"follow"};fetch("".concat(n,"getAllLanguages"),a).then((e=>e.json())).then((e=>{"success"===e.type&&m(e.data)})).catch((e=>console.error(e)))}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,d.jsx)(r.A.Header,{closeButton:!0,children:(0,d.jsx)(r.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Register Candidate"})}),(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter candidate name",value:i,onChange:e=>c(e.target.value)}),(0,d.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter candidate email",value:l,onChange:e=>h(e.target.value)}),(0,d.jsxs)("select",{className:"candidate-register-input form-control mt-2",onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,a=e.target.value;j({language:n,id:a})},children:[(0,d.jsx)("option",{value:"",children:"Select profile"}),null===g||void 0===g?void 0:g.map((e=>(0,d.jsx)("option",{value:e._id,children:e.language},e._id)))]}),(0,d.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter total experience",value:u,onChange:e=>p(e.target.value)})]}),(0,d.jsx)(r.A.Footer,{children:(0,d.jsx)(s.A,{onClick:()=>{const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+t);const s={method:"POST",headers:a,body:JSON.stringify({username:i,email:l,profile:x.language,experience:u,languageId:x.id}),redirect:"follow"};fetch("".concat(n,"registerCandidate"),s).then((e=>e.json())).then((t=>{"error"===t.type&&o.Ay.error(t.message,{duration:1e3}),"success"===t.type&&(o.Ay.success(t.message,{duration:1e3}),c(""),h(""),p(""),e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},className:"cmn_btn_color",children:"Submit"})})]}),(0,d.jsx)(o.l$,{})]})}},1867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(4282),s=n(7451),r=n(1833),o=n(5043),d=n(885),i=n(2339),c=n(579);const l=e=>{let t="http://16.171.41.223:8000/api/v1/";const[n,l]=(0,o.useState)(!1),[h,u]=(0,o.useState)([]),[p,g]=(0,o.useState)("");let m=localStorage.getItem("token");(0,o.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+m);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(t,"getHrRoundSeries"),n).then((e=>e.json())).then((e=>{u(e.allSeries)})).catch((e=>console.error(e)))}),[]);return(0,c.jsx)("div",{children:(0,c.jsxs)(s.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,c.jsx)(s.A.Header,{closeButton:!0,children:(0,c.jsx)(s.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite for HR Round"})}),(0,c.jsxs)(s.A.Body,{children:[(0,c.jsx)("div",{className:"loader_outer_wrapper",children:n&&(0,c.jsx)("img",{src:r,height:"50px",width:"50px"})}),(0,c.jsxs)("select",{className:"candidate-register-input form-control mt-3",value:p,onChange:e=>{g(e.target.value)},children:[(0,c.jsx)("option",{value:"",children:"Select series"}),null===h||void 0===h?void 0:h.map((e=>{var t,n,a;return(0,c.jsxs)("option",{disabled:(null===(t=e.questions)||void 0===t?void 0:t.length)<3||void 0===e.questions,className:(null===(n=e.questions)||void 0===n?void 0:n.length)<3||void 0===e.questions?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.questionSeries," ",(null===(a=e.questions)||void 0===a?void 0:a.length)<1||void 0===e.questions?"(pending)":null]},e._id)}))]})]}),(0,c.jsx)(s.A.Footer,{children:(0,c.jsx)(a.A,{className:"cmn_btn_color",onClick:()=>{const n=(0,d.r)(e.candidateID),a="".concat("http://16.171.41.223","/hr-round/:").concat(encodeURIComponent(n));console.log("test link ---",a);const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+m);const r={method:"POST",headers:s,body:JSON.stringify({candidateId:e.candidateID,seriesId:p,link:a}),redirect:"follow"};fetch("".concat(t,"sendHrRoundQuesAns"),r).then((e=>e.json())).then((t=>{"success"===t.type?(i.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1)):"Series Id not present."===t.message?i.Ay.error("Please enter series",{duration:2e3}):i.Ay.error(t.message)})).catch((e=>console.error(e)))},children:"Send link"})})]})})}},8318:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(5043),s=n(4282),r=n(7451),o=n(2339),d=n(579);const i=e=>{const[t,n]=(0,a.useState)([]),[i,c]=(0,a.useState)(""),[l,h]=(0,a.useState)(""),[u,p]=(0,a.useState)(""),[g,m]=(0,a.useState)([]),[x,j]=(0,a.useState)({language:"",id:""}),v=localStorage.getItem("token");let f=e.candidateId,S="http://16.171.41.223:8000/api/v1/";(0,a.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+v);const t={method:"GET",headers:e,redirect:"follow"};fetch("".concat(S,"getAllLanguages"),t).then((e=>e.json())).then((e=>{"success"===e.type&&m(e.data)})).catch((e=>console.error(e)))}),[]),(0,a.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+v);const t={method:"GET",headers:e,redirect:"follow"};fetch("".concat(S,"getSingleCandidate?candidateId=").concat(f),t).then((e=>e.json())).then((e=>{"success"===e.type&&n(e.isCandidateExist)})).catch((e=>console.error(e)))}),[f]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,d.jsx)(r.A.Header,{closeButton:!0,children:(0,d.jsx)(r.A.Title,{id:"contained-modal-title-vcenter heading",children:"Update Candidate"})}),(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)("input",{className:"candidate-register-input mt-3 form-control",placeholder:"Enter candidate name",defaultValue:t.username,onChange:e=>c(e.target.value)}),(0,d.jsx)("input",{className:"candidate-register-input mt-3 form-control",placeholder:"Enter candidate email",defaultValue:t.email,onChange:e=>h(e.target.value)}),(0,d.jsx)("select",{className:"candidate-register-input mt-3 form-control",defaultValue:t.profile,onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,a=e.target.value;j({language:n,id:a})},children:null===g||void 0===g?void 0:g.map((e=>(0,d.jsx)("option",{value:e._id,children:e.language},e._id)))}),(0,d.jsx)("input",{className:"candidate-register-input mt-3 form-control",placeholder:"Enter total experience",defaultValue:t.experience,onChange:e=>p(e.target.value)})]}),(0,d.jsx)(r.A.Footer,{children:(0,d.jsx)(s.A,{className:"cmn_btn_color",onClick:()=>(n=>{const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+v);const s={method:"PUT",headers:a,body:JSON.stringify({username:i||t.username,email:l||t.email,profile:x.language?x.language:t.profile,experience:u||t.experience,languageId:x.id?x.id:t.languageId}),redirect:"follow"};fetch("".concat(S,"updateCandidate?candidateId=").concat(n),s).then((e=>e.json())).then((t=>{"success"===t.type&&(o.Ay.success(t.message,{duration:700}),e.handleChange((e=>e+1)),e.onHide(!1)),"error"===t.type&&o.Ay.error(t.message)})).catch((e=>console.error(e)))})(t._id),children:"Update"})})]}),(0,d.jsx)(o.l$,{})]})}},885:(e,t,n)=>{n.d(t,{r:()=>o,x:()=>d});var a=n(8698),s=n.n(a);const r="your-secret-key",o=e=>{try{return s().encrypt(r,e)}catch(t){return console.error("Encryption error:",t),null}},d=e=>{try{return s().decrypt(r,e)}catch(t){return console.error("Decryption error:",t),null}}},4282:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(8139),s=n.n(a),r=n(5043),o=n(4140),d=n(7852),i=n(579);const c=r.forwardRef(((e,t)=>{let{as:n,bsPrefix:a,variant:r="primary",size:c,active:l=!1,disabled:h=!1,className:u,...p}=e;const g=(0,d.oU)(a,"btn"),[m,{tagName:x}]=(0,o.Am)({tagName:n,disabled:h,...p}),j=x;return(0,i.jsx)(j,{...m,...p,ref:t,disabled:h,className:s()(u,g,l&&"active",r&&"".concat(g,"-").concat(r),c&&"".concat(g,"-").concat(c),p.href&&h&&"disabled")})}));c.displayName="Button";const l=c}}]);
//# sourceMappingURL=121.8579d5dc.chunk.js.map