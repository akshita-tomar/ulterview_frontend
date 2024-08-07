"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[272],{2272:(e,s,c)=>{c.r(s),c.d(s,{default:()=>h});var l=c(5043),n=c(3216),i=c(3519),t=c(1072),a=c(8602),r=c(2339),d=c(4842),o=c(579);const h=()=>{var e,s,c,h,u,v,x,j,m,p,N,g;const{id:k}=(0,n.g)(),_=(0,l.useRef)([]);let b=localStorage.getItem("token");const[w,q]=(0,l.useState)([]),[A,f]=(0,l.useState)([]),[C,S]=(0,l.useState)(0),[y,Q]=(0,l.useState)(0),[O,Y]=(0,l.useState)({}),[I,B]=(0,l.useState)(""),E=e=>{var s;null===(s=_.current[e])||void 0===s||s.scrollIntoView({behavior:"smooth"})};(0,l.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+b);const s={method:"GET",headers:e,redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","get-dev-candidate-answers?candidatId=").concat(k),s).then((e=>e.json())).then((e=>{q(e.quesAns.providedQuesAns),f(e.quesAns.retrivedQuesAns),S(e.quesAns.providedQuesAns[0].logical.length+e.quesAns.providedQuesAns[0].objective.length+e.quesAns.providedQuesAns[0].subjective.length),Y(e.quesAns.checkedAnswerSheet),B(e.quesAns.checkedBy);const s=e.quesAns.checkedAnswerSheet,c=Object.values(s).filter((e=>"correct"===e)).length;Q(c)})).catch((e=>console.error(e)))}),[]);const{show:L}=(0,d.U)();return(0,o.jsxs)("div",{className:"wrapper ".concat(L?"cmn_margin":""),children:[(0,o.jsxs)("div",{className:"check-result-header",children:[y,"/",C," checked by: ",I]}),(0,o.jsx)(i.A,{children:(0,o.jsxs)(t.A,{children:[(0,o.jsx)(a.A,{lg:6,md:12,sm:12,children:(0,o.jsxs)("div",{className:"original-ques-ans p-3 cmn_ques_outer",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h3",{children:"Original Answers"})}),(0,o.jsx)("hr",{}),(0,o.jsx)("h3",{className:"heading-check-result",children:"Objective"}),null===(e=w[0])||void 0===e||null===(s=e.objective)||void 0===s?void 0:s.map(((e,s)=>(0,o.jsxs)("div",{className:"question-wrapper-check-result",ref:s=>_.current[e._id]=s,children:[(0,o.jsx)("h3",{className:"question-text",children:e.question}),(0,o.jsx)("div",{className:"options-wrapper",children:e.options.map(((e,s)=>(0,o.jsx)("label",{className:"option-label",children:e},s)))}),"Correct Answer: ",e.correctAnswer]},e._id))),(0,o.jsx)("h3",{className:"heading-check-result",children:"Subjective"}),null===(c=w[0])||void 0===c||null===(h=c.subjective)||void 0===h?void 0:h.map(((e,s)=>(0,o.jsxs)("div",{className:"question-wrapper-check-result",ref:s=>_.current[e._id]=s,children:[(0,o.jsx)("h3",{className:"question-text",children:e.question}),(0,o.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer})]},e._id))),(0,o.jsx)("h3",{className:"heading-check-result",children:"Logical"}),null===(u=w[0])||void 0===u||null===(v=u.logical)||void 0===v?void 0:v.map(((e,s)=>(0,o.jsxs)("div",{className:"question-wrapper-check-result",ref:s=>_.current[e._id]=s,children:[(0,o.jsx)("h3",{className:"question-text",children:e.question}),(0,o.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer})]},e._id)))]})}),(0,o.jsx)(a.A,{lg:6,md:12,sm:12,children:(0,o.jsxs)("div",{className:"candidate-ques-ans p-3 cmn_ques_outer",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h3",{children:"Candidate Response"})}),(0,o.jsx)("hr",{}),(null===A||void 0===A||null===(x=A.objective)||void 0===x?void 0:x.length)>0?(0,o.jsx)("h3",{className:"heading-check-result",children:"Objective"}):null,null===A||void 0===A||null===(j=A.objective)||void 0===j?void 0:j.map(((e,s)=>(0,o.jsxs)("div",{className:"question-wrapper-check-result",children:[(0,o.jsxs)("div",{className:"d-flex align-items-center'",children:[(0,o.jsxs)("h3",{className:"question-text",children:[e.question," "]}),O[e._id]&&(0,o.jsx)("span",{className:"done-text",children:"correct"===O[e._id]?(0,o.jsx)("p",{children:" \u2714"}):(0,o.jsx)("p",{children:"\u2716"})})]}),(0,o.jsx)("div",{className:"options-wrapper",children:null===e||void 0===e?void 0:e.options.map(((e,s)=>(0,o.jsx)("label",{className:"option-label",children:e},s)))}),"Correct Answer: ",e.correctAnswer,(0,o.jsxs)("div",{className:"check-btn-outer",children:[" ",(0,o.jsx)("button",{className:"check-button cmn_gray_btn",onClick:()=>E(e._id),children:"Check"},e._id)]})]},e._id))),(null===A||void 0===A||null===(m=A.subjective)||void 0===m?void 0:m.length)>0?(0,o.jsx)("h3",{className:"heading-check-result",children:"Subjective"}):null,null===A||void 0===A||null===(p=A.subjective)||void 0===p?void 0:p.map(((e,s)=>(0,o.jsxs)("div",{className:"question-wrapper-check-result",children:[(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("h3",{className:"question-text",children:e.question}),O[e._id]&&(0,o.jsx)("span",{className:"done-text",children:"correct"===O[e._id]?(0,o.jsx)("p",{children:" \u2714"}):(0,o.jsx)("p",{children:"\u2716"})})]}),(0,o.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer}),(0,o.jsxs)("div",{className:"check-btn-outer",children:[" ",(0,o.jsx)("button",{className:"check-button cmn_gray_btn",onClick:()=>E(e._id),children:"Check"},e._id)]})]},e._id))),(null===A||void 0===A||null===(N=A.logical)||void 0===N?void 0:N.length)>0?(0,o.jsx)("h3",{className:"heading-check-result",children:"Logical"}):null,null===A||void 0===A||null===(g=A.logical)||void 0===g?void 0:g.map((e=>(0,o.jsxs)("div",{className:"question-wrapper-check-result",children:[(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("h3",{className:"question-text",children:e.question}),O[e._id]&&(0,o.jsx)("span",{className:"done-text",children:"correct"===O[e._id]?(0,o.jsx)("p",{children:" \u2714"}):(0,o.jsx)("p",{children:"\u2716"})})]}),(0,o.jsx)("textarea",{className:"text-input",placeholder:"Your answer here",value:e.answer}),(0,o.jsxs)("div",{className:"check-btn-outer",children:[" ",(0,o.jsx)("button",{className:"check-button cmn_gray_btn",onClick:()=>E(e._id),children:"Check"},e._id)]})]},e._id)))]})})]})}),(0,o.jsx)(r.l$,{})]})}}}]);
//# sourceMappingURL=272.cb51461e.chunk.js.map