"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[347],{242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(5043),a=n(4282),r=n(7451),c=n(2339),d=n(3216),o=n(885),i=n(1833),l=n(579);const h=e=>{let t=localStorage.getItem("token");const n=(0,d.Zp)();let h="http://16.171.41.223:8000/api/v1/";const[u,p]=(0,s.useState)([]),[m,g]=(0,s.useState)(""),[x,j]=(0,s.useState)({series:"",id:""}),[v,f]=(0,s.useState)(!1);let S=e.candidateID,C=e.languageId;(0,s.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+t);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(h,"getSingleCandidate?candidateId=").concat(S),n).then((e=>e.json())).then((e=>{"success"===e.type&&(g(e.isCandidateExist.profile),"completed"!==e.isCandidateExist.testStatus&&"invite_accepted"!==e.isCandidateExist.testStatus&&"invite_sent"!==e.isCandidateExist.testStatus||b())})).catch((e=>console.error(e)))}),[]);const b=()=>{const e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t);const n={method:"POST",headers:e,body:JSON.stringify({candidateId:S}),redirect:"follow"};fetch("".concat(h,"handleResendLink"),n).then((e=>e.json())).then((e=>console.log(e))).catch((e=>console.error(e)))};(0,s.useEffect)((()=>{t||n("/");const e=new Headers;e.append("Authorization","Bearer "+t);const s={method:"GET",headers:e,redirect:"follow"};fetch("".concat(h,"getAllSeries?languageId=").concat(C),s).then((e=>e.json())).then((e=>{"success"===e.type?e.allSeries.length<1?c.Ay.error("No series is created for this language.",{duration:1e3}):p(e.allSeries):c.Ay.error(e.message)})).catch((e=>console.error(e)))}),[]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,l.jsx)(r.A.Header,{closeButton:!0,children:(0,l.jsx)(r.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite"})}),(0,l.jsxs)(r.A.Body,{children:[(0,l.jsx)("div",{className:"loader_outer_wrapper",children:v&&(0,l.jsx)("img",{src:i,height:"50px",width:"50px"})}),(0,l.jsx)("input",{value:m,className:"candidate-register-input  form-control mt-3"}),(0,l.jsxs)("select",{className:"candidate-register-input form-control mt-3",onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,s=e.target.value;j({language:n,id:s})},children:[(0,l.jsx)("option",{value:"",children:"Select series"}),null===u||void 0===u?void 0:u.map((e=>(0,l.jsxs)("option",{disabled:"pending"===e.status,className:"pending"===e.status?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.seriesName,"(",e.status,")"]},e._id)))]})]}),(0,l.jsx)(r.A.Footer,{children:(0,l.jsx)(a.A,{className:"cmn_btn_color",onClick:()=>{const n=new Headers;n.append("Authorization","Bearer "+t);const s={method:"POST",headers:n,redirect:"follow"};fetch("".concat(h,"sendInterviewLink?candidateId=").concat(S,"&seriesId=").concat(x.id),s).then((e=>e.json())).then((n=>{if(console.log(n),"success"===n.type){const n=(0,o.r)(S);console.log("invite candidate id ---",n);const s="".concat("http://16.171.41.223","/interview-questions/:").concat(encodeURIComponent(n));f(!0),console.log("link----",s);const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+t);const r={method:"POST",headers:a,body:JSON.stringify({link:s}),redirect:"follow"};fetch("".concat(h,"sendLinkViaEmail?candidateId=").concat(S),r).then((e=>e.json())).then((t=>{console.log(t),"success"===t.type&&(c.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1),f(!1))})).catch((e=>console.error(e)))}else"Series Id not present."===n.message?c.Ay.error("Please select series."):c.Ay.error(n.message)})).catch((e=>console.error(e)))},children:"Send link"})})]}),(0,l.jsx)(c.l$,{})]})}},7347:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(5043),a=n(3216),r=n(9853),c=n(4196),d=n(7491),o=n(8387),i=n(8318),l=n(242),h=n(64),u=n.n(h),p=n(6720),m=n(2339),g=n(5749),x=n(4842),j=n(1867),v=n(579);const f=e=>{let{title:t,children:n}=e;const[a,r]=(0,s.useState)(!1),[c,d]=(0,s.useState)(null);return(0,v.jsxs)("div",{className:"dropdown ",children:[(0,v.jsx)("button",{className:"dropdown-toggle cmn_btn_color",onClick:()=>{r(!a)},children:t}),a&&(0,v.jsx)("div",{className:"dropdown-menu",children:s.Children.map(n,(e=>e.type===C?s.cloneElement(e,{isOpen:c===e.props.id,onToggle:()=>{return t=e.props.id,void d(c===t?null:t);var t}}):e))})]})},S=e=>{let{children:t,onClick:n}=e;return(0,v.jsx)("div",{className:"dropdown-item",onClick:n,children:t})},C=e=>{let{title:t,children:n,isOpen:s,onToggle:a}=e;return console.log(n,"children"),(0,v.jsxs)("div",{className:"dropdown-submenu",children:[(0,v.jsx)("div",{className:"submenu-title",onClick:a,children:t}),s&&(0,v.jsx)("div",{className:"submenu-content",children:n})]})};var b=n(423);const y=()=>{const e=localStorage.getItem("token"),t=(0,a.Zp)(),[n,h]=(0,s.useState)([]),[y,A]=(0,s.useState)(!1),[_,N]=(0,s.useState)(!1),[w,I]=(0,s.useState)(!1),[k,E]=(0,s.useState)(""),[H,T]=(0,s.useState)(""),[B,R]=(0,s.useState)(0),[z,O]=(0,s.useState)(!1),[P,q]=(0,s.useState)(1),[D,F]=(0,s.useState)(1),G="http://16.171.41.223:8000/api/v1/",U=(0,g.io)("http://16.171.41.223:8000"),[L,J]=(0,s.useState)(""),[V,$]=(0,s.useState)(""),[Y,M]=(0,s.useState)("");e||t("/");const Z=()=>{const t=new Headers;t.append("Authorization","Bearer "+e);const n={method:"GET",headers:t,redirect:"follow"};fetch("".concat(G,"getCandidates?page=").concat(P,"&limit=10&search=").concat(L,"&selectedField=").concat(V,"&selectedStatus=").concat(Y),n).then((e=>e.json())).then((e=>{h(e.allCandidates),F(e.totalPages)})).catch((e=>console.error(e)))};(0,s.useEffect)((()=>(Z(),U.on("Interview_submitted",(()=>{Z()})),()=>{U.disconnect()})),[e,G,B,P,L,V,Y]);const Q=e=>{e>0&&e<=D&&q(e)},K=t=>{const n=new Headers;n.append("Authorization","Bearer "+e);const s={method:"DELETE",headers:n,redirect:"follow"};fetch("".concat(G,"deleteCandidate?candidateId=").concat(t),s).then((e=>e.json())).then((e=>{"success"===e.type&&(m.Ay.success(e.message,{duration:800}),R((e=>e+1)))})).catch((e=>console.error(e)))},W=(e,t)=>{E(e),T(t),I(!0)},X=e=>{E(e),O(!0)},{show:ee}=(0,x.U)(),te=(e,t)=>{M(e),$(t)};return(0,v.jsxs)("div",{className:"wrapper ".concat(ee?"cmn_margin":""," "),children:[(0,v.jsxs)("div",{className:"page-headers",children:[" ",(0,v.jsx)("h5",{children:"Candidate Records"})]}),(0,v.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3 pe-3 teamhub",children:[(0,v.jsxs)("div",{className:"d-flex gap-4",children:[(0,v.jsx)("div",{className:"searchbox-hr-feedback-teamhub",children:(0,v.jsx)(r.A.Control,{type:"text",placeholder:"Search",value:L,onChange:e=>{J(e.target.value)}})}),(0,v.jsxs)(f,{title:"Select status type",children:[(0,v.jsx)(S,{className:""===Y&&""===V?"selected":"",onClick:()=>te("",""),children:"All"}),(0,v.jsx)(C,{title:"HR round",id:"submenu1",children:["invite_sent","invite_accepted","completed","selected","rejected","pending"].map((e=>(0,v.jsx)(S,{className:Y===e&&"hr"===V?"selected":"",onClick:()=>te(e,"hr"),children:e},e)))}),(0,v.jsx)(C,{title:"Technical Round",id:"submenu2",children:["invite_sent","invite_accepted","completed","pending"].map((e=>(0,v.jsx)(S,{className:Y===e&&"technical"===V?"selected":"",onClick:()=>te(e,"technical"),children:e},e)))}),(0,v.jsx)(C,{title:"Final Result",id:"submenu3",children:["selected","rejected","pending"].map((e=>(0,v.jsx)(S,{className:Y===e&&"final"===V?"selected":"",onClick:()=>te(e,"final"),children:e},e)))})]})]}),(0,v.jsxs)("button",{className:"register-btn cmn_btn_color",onClick:()=>A(!0),children:[(0,v.jsx)(b.t50,{className:"me-2"}),"Register"]})]}),(0,v.jsx)("div",{className:"table-responsive candidate_table_outer",children:(0,v.jsxs)(c.A,{hover:!0,className:"user-table candidate_entry_table",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Sr.no"}),(0,v.jsx)("th",{children:"Username"}),(0,v.jsx)("th",{children:"Email"}),(0,v.jsx)("th",{children:"Profile"}),(0,v.jsx)("th",{children:"Experience"}),(0,v.jsx)("th",{children:"HR round"}),(0,v.jsx)("th",{children:"Invite(HR round)"}),(0,v.jsx)("th",{children:"Technical round"}),(0,v.jsx)("th",{children:"Invite(Tech round)"}),(0,v.jsx)("th",{children:"Final Result"}),(0,v.jsx)("th",{children:"Actions"})]})}),(0,v.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map(((e,t)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:10*(P-1)+t+1}),(0,v.jsx)("td",{children:e.username}),(0,v.jsx)("td",{children:e.email}),(0,v.jsx)("td",{children:e.profile}),(0,v.jsx)("td",{children:e.experience}),(0,v.jsx)("td",{className:"rejected"===e.hrRoundStatus?"rejected-candidate":"selected"===e.hrRoundStatus?"selected-candidate":"",children:e.hrRoundStatus}),(0,v.jsx)("td",{children:"invite_sent"===e.hrRoundStatus||"invite_accepted"===e.hrRoundStatus||"completed"===e.hrRoundStatus||"selected"===e.hrRoundStatus||"rejected"===e.hrRoundStatus?(0,v.jsx)("button",{className:"invite_btn  resend_btn",onClick:()=>X(e._id),children:"Resend"}):(0,v.jsx)("button",{className:"invite_btn cmn_btn_color",onClick:()=>X(e._id),children:"Invite"})}),(0,v.jsx)("td",{children:e.testStatus}),(0,v.jsx)("td",{children:"completed"===e.testStatus||"invite_sent"===e.testStatus||"invite_accepted"===e.testStatus?(0,v.jsx)("button",{className:"invite_btn  resend_btn",onClick:()=>W(e._id,e.languageId),children:"Resend"}):(0,v.jsx)("button",{className:"invite_btn cmn_btn_color",onClick:()=>W(e._id,e.languageId),children:"Invite"})}),(0,v.jsx)("td",{className:"rejected"===e.resultStatus?"rejected-candidate":"selected"===e.resultStatus?"selected-candidate":"",children:e.resultStatus}),(0,v.jsx)("td",{children:(0,v.jsxs)("div",{children:[(0,v.jsx)(p.Yvo,{className:"MdEdit cursor-pointer me-2",onClick:()=>{return t=e._id,E(t),void N(!0);var t}}),(0,v.jsx)(p.b6i,{className:"cursor-pointer MdEdit",onClick:()=>{return t=e._id,void u().fire({title:"Are you sure to delete this Candidate?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ce2128",cancelButtonColor:"#333",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&K(t)}));var t}})]})})]},t)))})]})}),(0,v.jsxs)(d.A,{className:"justify-content-center",children:[(0,v.jsx)(d.A.Prev,{onClick:()=>Q(P-1),disabled:1===P}),[...Array(D)].map(((e,t)=>(0,v.jsx)(d.A.Item,{active:t+1===P,onClick:()=>Q(t+1),children:t+1},t))),(0,v.jsx)(d.A.Next,{onClick:()=>Q(P+1),disabled:P===D})]}),y&&(0,v.jsx)(o.default,{show:y,onHide:()=>A(!1),handleChange:R}),_&&(0,v.jsx)(i.default,{show:_,onHide:()=>N(!1),candidateId:k,handleChange:R}),w&&(0,v.jsx)(l.default,{show:w,onHide:()=>I(!1),candidateID:k,languageId:H,handleChange:R}),z&&(0,v.jsx)(j.default,{show:z,onHide:()=>O(!1),candidateID:k,handleChange:R}),(0,v.jsx)(m.l$,{})]})}},8387:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(5043),a=n(4282),r=n(7451),c=n(2339),d=n(579);const o=e=>{let t=localStorage.getItem("token"),n="http://16.171.41.223:8000/api/v1/";const[o,i]=(0,s.useState)(""),[l,h]=(0,s.useState)(""),[u,p]=(0,s.useState)(""),[m,g]=(0,s.useState)([]),[x,j]=(0,s.useState)({language:"",id:""});(0,s.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+t);const s={method:"GET",headers:e,redirect:"follow"};fetch("".concat(n,"getAllLanguages"),s).then((e=>e.json())).then((e=>{"success"===e.type&&g(e.data)})).catch((e=>console.error(e)))}),[]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,d.jsx)(r.A.Header,{closeButton:!0,children:(0,d.jsx)(r.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Register Candidate"})}),(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter candidate name",value:o,onChange:e=>i(e.target.value)}),(0,d.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter candidate email",value:l,onChange:e=>h(e.target.value)}),(0,d.jsxs)("select",{className:"candidate-register-input form-control mt-2",onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,s=e.target.value;j({language:n,id:s})},children:[(0,d.jsx)("option",{value:"",children:"Select profile"}),null===m||void 0===m?void 0:m.map((e=>(0,d.jsx)("option",{value:e._id,children:e.language},e._id)))]}),(0,d.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter total experience",value:u,onChange:e=>p(e.target.value)})]}),(0,d.jsx)(r.A.Footer,{children:(0,d.jsx)(a.A,{onClick:()=>{const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+t);const a={method:"POST",headers:s,body:JSON.stringify({username:o,email:l,profile:x.language,experience:u,languageId:x.id}),redirect:"follow"};fetch("".concat(n,"registerCandidate"),a).then((e=>e.json())).then((t=>{"error"===t.type&&c.Ay.error(t.message,{duration:1e3}),"success"===t.type&&(c.Ay.success(t.message,{duration:1e3}),i(""),h(""),p(""),e.handleChange((e=>e+1)),e.onHide(!1))})).catch((e=>console.error(e)))},className:"cmn_btn_color",children:"Submit"})})]}),(0,d.jsx)(c.l$,{})]})}},1867:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(4282),a=n(7451),r=n(1833),c=n(5043),d=n(885),o=n(2339),i=n(579);const l=e=>{let t="http://16.171.41.223:8000/api/v1/";const[n,l]=(0,c.useState)(!1),[h,u]=(0,c.useState)([]),[p,m]=(0,c.useState)("");let g=localStorage.getItem("token");(0,c.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+g);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(t,"getHrRoundSeries"),n).then((e=>e.json())).then((e=>{u(e.allSeries)})).catch((e=>console.error(e)))}),[]);return(0,i.jsx)("div",{children:(0,i.jsxs)(a.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter Invite_candidate_modal",centered:!0,children:[(0,i.jsx)(a.A.Header,{closeButton:!0,children:(0,i.jsx)(a.A.Title,{id:"contained-modal-title-vcenter heading",children:"Invite for HR Round"})}),(0,i.jsxs)(a.A.Body,{children:[(0,i.jsx)("div",{className:"loader_outer_wrapper",children:n&&(0,i.jsx)("img",{src:r,height:"50px",width:"50px"})}),(0,i.jsxs)("select",{className:"candidate-register-input form-control mt-3",value:p,onChange:e=>{m(e.target.value)},children:[(0,i.jsx)("option",{value:"",children:"Select series"}),null===h||void 0===h?void 0:h.map((e=>{var t,n,s;return(0,i.jsxs)("option",{disabled:(null===(t=e.questions)||void 0===t?void 0:t.length)<3||void 0===e.questions,className:(null===(n=e.questions)||void 0===n?void 0:n.length)<3||void 0===e.questions?"series-outer-box-pending":"series-outer-box",value:e._id,children:[e.questionSeries," ",(null===(s=e.questions)||void 0===s?void 0:s.length)<1||void 0===e.questions?"(pending)":null]},e._id)}))]})]}),(0,i.jsx)(a.A.Footer,{children:(0,i.jsx)(s.A,{className:"cmn_btn_color",onClick:()=>{const n=(0,d.r)(e.candidateID),s="".concat("http://16.171.41.223","/hr-round/:").concat(encodeURIComponent(n));console.log("test link ---",s);const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+g);const r={method:"POST",headers:a,body:JSON.stringify({candidateId:e.candidateID,seriesId:p,link:s}),redirect:"follow"};fetch("".concat(t,"sendHrRoundQuesAns"),r).then((e=>e.json())).then((t=>{"success"===t.type?(o.Ay.success(t.message),e.handleChange((e=>e+1)),e.onHide(!1)):"Series Id not present."===t.message?o.Ay.error("Please enter series",{duration:2e3}):o.Ay.error(t.message)})).catch((e=>console.error(e)))},children:"Send link"})})]})})}},8318:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(5043),a=n(4282),r=n(7451),c=n(2339),d=n(579);const o=e=>{const[t,n]=(0,s.useState)([]),[o,i]=(0,s.useState)(""),[l,h]=(0,s.useState)(""),[u,p]=(0,s.useState)(""),[m,g]=(0,s.useState)([]),[x,j]=(0,s.useState)({language:"",id:""}),v=localStorage.getItem("token");let f=e.candidateId,S="http://16.171.41.223:8000/api/v1/";(0,s.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+v);const t={method:"GET",headers:e,redirect:"follow"};fetch("".concat(S,"getAllLanguages"),t).then((e=>e.json())).then((e=>{"success"===e.type&&g(e.data)})).catch((e=>console.error(e)))}),[]),(0,s.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+v);const t={method:"GET",headers:e,redirect:"follow"};fetch("".concat(S,"getSingleCandidate?candidateId=").concat(f),t).then((e=>e.json())).then((e=>{"success"===e.type&&n(e.isCandidateExist)})).catch((e=>console.error(e)))}),[f]);return console.log("details of user ----------",t),(0,d.jsxs)("div",{children:[(0,d.jsxs)(r.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,d.jsx)(r.A.Header,{closeButton:!0,children:(0,d.jsx)(r.A.Title,{id:"contained-modal-title-vcenter heading",children:"Update Candidate"})}),(0,d.jsxs)(r.A.Body,{children:[(0,d.jsx)("input",{className:"candidate-register-input mt-3 form-control",placeholder:"Enter candidate name",defaultValue:t.username,onChange:e=>i(e.target.value)}),(0,d.jsx)("input",{className:"candidate-register-input mt-3 form-control",placeholder:"Enter candidate email",defaultValue:t.email,onChange:e=>h(e.target.value)}),(0,d.jsx)("select",{className:"candidate-register-input mt-3 form-control",value:t.languageId,onChange:e=>{const t=e.target.options.selectedIndex,n=e.target.options[t].text,s=e.target.value;j({language:n,id:s})},children:null===m||void 0===m?void 0:m.map((e=>(0,d.jsx)("option",{value:e._id,children:e.language},e._id)))}),(0,d.jsx)("input",{className:"candidate-register-input mt-3 form-control",placeholder:"Enter total experience",defaultValue:t.experience,onChange:e=>p(e.target.value)})]}),(0,d.jsx)(r.A.Footer,{children:(0,d.jsx)(a.A,{className:"cmn_btn_color",onClick:()=>(n=>{const s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+v);const a={method:"PUT",headers:s,body:JSON.stringify({username:o||t.username,email:l||t.email,profile:x.language?x.language:t.profile,experience:u||t.experience,languageId:x.id?x.id:t.languageId}),redirect:"follow"};fetch("".concat(S,"updateCandidate?candidateId=").concat(n),a).then((e=>e.json())).then((t=>{"success"===t.type&&(c.Ay.success(t.message,{duration:700}),e.handleChange((e=>e+1)),e.onHide(!1)),"error"===t.type&&c.Ay.error(t.message)})).catch((e=>console.error(e)))})(t._id),children:"Update"})})]}),(0,d.jsx)(c.l$,{})]})}},885:(e,t,n)=>{n.d(t,{r:()=>c,x:()=>d});var s=n(8698),a=n.n(s);const r="your-secret-key",c=e=>{try{return a().encrypt(r,e)}catch(t){return console.error("Encryption error:",t),null}},d=e=>{try{return a().decrypt(r,e)}catch(t){return console.error("Decryption error:",t),null}}}}]);
//# sourceMappingURL=347.2323e0da.chunk.js.map