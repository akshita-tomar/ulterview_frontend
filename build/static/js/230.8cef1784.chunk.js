"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[230],{892:(e,s,c)=>{c.r(s),c.d(s,{default:()=>u});var n=c(3519),t=c(1072),i=c(8602),l=c(5043),r=c(3216);const a=c.p+"static/media/empty.339933e2685d9aa9e88f.gif";var d=c(2339),o=c(4842),h=c(579);const u=()=>{var e,s,c,u,x,j,v,m,p,b,N,g;let _=localStorage.getItem("token"),k="http://16.171.41.223:8000/api/v1/",{id:q}=(0,r.g)();const[w,A]=(0,l.useState)([]),[f,C]=(0,l.useState)([]),[y,S]=(0,l.useState)(!1),[Q,I]=(0,l.useState)(0),[O,T]=(0,l.useState)(0),[Y,E]=(0,l.useState)(0),[z,B]=(0,l.useState)({}),H=(0,l.useRef)([]),L=(0,r.Zp)(),P=e=>{var s;null===(s=H.current[e])||void 0===s||s.scrollIntoView({behavior:"smooth"})},R=(e,s)=>{B((c=>({...c,[e]:s})))};(0,l.useEffect)((()=>{const e=Object.values(z).filter((e=>"correct"===e)).length;E(e)}),[z]),(0,l.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+_);const s={method:"GET",headers:e,redirect:"follow"};fetch("".concat(k,"get-dev-candidate-answers?candidatId=").concat(q),s).then((e=>e.json())).then((e=>{"success"===e.type&&(A(e.quesAns.providedQuesAns),C(e.quesAns.retrivedQuesAns),I(e.quesAns.providedQuesAns[0].logical.length+e.quesAns.providedQuesAns[0].objective.length+e.quesAns.providedQuesAns[0].subjective.length),T(e.quesAns.retrivedQuesAns.logical.length+e.quesAns.retrivedQuesAns.objective.length+e.quesAns.retrivedQuesAns.subjective.length)),e.quesAns.retrivedQuesAns.logical.length<1&&e.quesAns.retrivedQuesAns.objective.length<1&&e.quesAns.retrivedQuesAns.subjective.length<1&&S(!0)})).catch((e=>console.error(e)))}),[]);const{show:G}=(0,o.U)();return(0,h.jsxs)("div",{className:"wrapper ".concat(G?"cmn_margin":""," "),children:[(0,h.jsxs)("div",{className:"check-result-header",children:[Y,"/",Q]}),(0,h.jsx)(n.A,{children:(0,h.jsxs)(t.A,{children:[(0,h.jsx)(i.A,{lg:6,md:12,sm:12,children:(0,h.jsxs)("div",{className:"original-ques-ans cmn_ques_outer",children:[(0,h.jsx)("h3",{className:"heading",children:"Original Answers"}),(0,h.jsx)("hr",{}),(0,h.jsx)("h3",{className:"heading-check-result",children:"Objective"}),null===(e=w[0])||void 0===e||null===(s=e.objective)||void 0===s?void 0:s.map(((e,s)=>(0,h.jsxs)("div",{className:"question-wrapper-check-result",ref:s=>H.current[e._id]=s,children:[(0,h.jsx)("h3",{className:"question-text",children:e.question}),(0,h.jsx)("div",{className:"options-wrapper",children:e.options.map(((e,s)=>(0,h.jsx)("label",{className:"option-label",children:e},s)))}),"Correct Answer: ",e.correctAnswer]},e._id))),(0,h.jsx)("h3",{className:"heading-check-result",children:"Subjective"}),null===(c=w[0])||void 0===c||null===(u=c.subjective)||void 0===u?void 0:u.map(((e,s)=>(0,h.jsxs)("div",{className:"question-wrapper-check-result",ref:s=>H.current[e._id]=s,children:[(0,h.jsx)("h3",{className:"question-text",children:e.question}),(0,h.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer})]},e._id))),(0,h.jsx)("h3",{className:"heading-check-result",children:"Logical"}),null===(x=w[0])||void 0===x||null===(j=x.logical)||void 0===j?void 0:j.map(((e,s)=>(0,h.jsxs)("div",{className:"question-wrapper-check-result",ref:s=>H.current[e._id]=s,children:[(0,h.jsx)("h3",{className:"question-text",children:e.question}),(0,h.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer})]},e._id)))]})}),(0,h.jsx)(i.A,{lg:6,md:12,sm:12,children:(0,h.jsxs)("div",{className:"candidate-ques-ans cmn_ques_outer",children:[(0,h.jsx)("h3",{className:"heading",children:"Candidate Response"}),(0,h.jsx)("hr",{}),(null===f||void 0===f||null===(v=f.objective)||void 0===v?void 0:v.length)>0?(0,h.jsx)("h3",{className:"heading-check-result",children:"Objective"}):null,null===f||void 0===f||null===(m=f.objective)||void 0===m?void 0:m.map(((e,s)=>(0,h.jsxs)("div",{className:"question-wrapper-check-result",children:[(0,h.jsxs)("div",{className:"d-flex align-items-center",children:[(0,h.jsxs)("h3",{className:"question-text",children:[e.question," "]}),z[e._id]&&(0,h.jsx)("span",{className:"done-text",children:"correct"===z[e._id]?(0,h.jsx)("p",{children:" \u2714"}):(0,h.jsx)("p",{children:"\u2716"})})]}),(0,h.jsx)("div",{className:"options-wrapper",children:e.options.map(((e,s)=>(0,h.jsx)("label",{className:"option-label",children:e},s)))}),"Correct Answer: ",e.correctAnswer,(0,h.jsxs)("div",{className:"check-btn-outer",children:[" ",(0,h.jsx)("button",{className:"check-button cmn_gray_btn",onClick:()=>P(e._id),children:"Check"},e._id),(0,h.jsx)("button",{className:"correct-opt",onClick:()=>R(e._id,"correct"),children:"Correct"}),(0,h.jsx)("button",{className:"incorrect-opt cmn_btn_color",onClick:()=>R(e._id,"incorrect"),children:"Incorrect"})]})]},e._id))),(null===f||void 0===f||null===(p=f.subjective)||void 0===p?void 0:p.length)>0?(0,h.jsx)("h3",{className:"heading-check-result",children:"Subjective"}):null,null===f||void 0===f||null===(b=f.subjective)||void 0===b?void 0:b.map(((e,s)=>(0,h.jsxs)("div",{className:"question-wrapper-check-result",children:[(0,h.jsxs)("div",{className:"d-flex align-items-center",children:[(0,h.jsx)("h3",{className:"question-text",children:e.question}),z[e._id]&&(0,h.jsx)("span",{className:"done-text",children:"correct"===z[e._id]?(0,h.jsx)("p",{children:" \u2714"}):(0,h.jsx)("p",{children:"\u2716"})})]}),(0,h.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer}),(0,h.jsxs)("div",{className:"check-btn-outer",children:[(0,h.jsx)("button",{className:"check-button cmn_gray_btn",onClick:()=>P(e._id),children:"Check"},e._id),(0,h.jsx)("button",{className:"correct-opt",onClick:()=>R(e._id,"correct"),children:"Correct"}),(0,h.jsx)("button",{className:" cmn_btn_color",onClick:()=>R(e._id,"incorrect"),children:"Incorrect"})]})]},e._id))),(null===f||void 0===f||null===(N=f.logical)||void 0===N?void 0:N.length)>0?(0,h.jsx)("h3",{className:"heading-check-result",children:"Logical"}):null,null===f||void 0===f||null===(g=f.logical)||void 0===g?void 0:g.map((e=>(0,h.jsxs)("div",{className:"question-wrapper-check-result",children:[(0,h.jsxs)("div",{className:"d-flex align-items-center",children:[(0,h.jsx)("h3",{className:"question-text",children:e.question}),z[e._id]&&(0,h.jsx)("span",{className:"done-text",children:"correct"===z[e._id]?(0,h.jsx)("p",{children:" \u2714"}):(0,h.jsx)("p",{children:"\u2716"})})]}),(0,h.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer}),(0,h.jsxs)("div",{className:"check-btn-outer",children:[(0,h.jsx)("button",{className:"check-button cmn_gray_btn",onClick:()=>P(e._id),children:"Check"},e._id),(0,h.jsx)("button",{className:"correct-opt",onClick:()=>R(e._id,"correct"),children:"Correct"}),(0,h.jsx)("button",{className:"incorrect-opt cmn_btn_color",onClick:()=>R(e._id,"incorrect"),children:"Incorrect"})]})]},e._id))),O>0?(0,h.jsx)("button",{type:"submit",className:"submit-button",onClick:()=>{if(Object.keys(z).length<O)d.Ay.error("Please check all the questions done by candidate");else{const e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+_);const s={method:"POST",headers:e,body:JSON.stringify({candidateId:q,totalQuestions:Q,totalCorrectQuestions:Y,checkedAnswerSheet:z}),redirect:"follow"};fetch("".concat(k,"addCheckedSheet"),s).then((e=>e.json())).then((e=>{"success"===e.type&&L("/candidates-performance")})).catch((e=>console.error(e)))}},children:"submit"}):null,y&&(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:a,alt:"loading...",height:"200px",width:"200px"}),(0,h.jsx)("h5",{children:"This candidate not respond any question."})]})]})})]})}),(0,h.jsx)(d.l$,{})]})}}}]);
//# sourceMappingURL=230.8cef1784.chunk.js.map