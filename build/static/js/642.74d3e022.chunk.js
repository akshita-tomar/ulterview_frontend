"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[642],{5642:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var o=n(5043),a=n(3216),s=n(2339),i=n(3023),r=n.n(i),l=n(64),c=n.n(l),d=n(4842),u=n(579);const p=()=>{var e,t,n,i,l,p,m,h,f,g,v,b,y,x,j,w,q,E,N,C,_,k,A,T;const S=(0,a.Zp)(),[I,O]=(0,o.useState)(0),[D,z]=(0,o.useState)([]),[P,U]=(0,o.useState)(""),[F,B]=(0,o.useState)(""),[H,L]=(0,o.useState)(),[Q,V]=(0,o.useState)(["","","",""]),[M,Y]=(0,o.useState)(!0),[J,$]=(0,o.useState)(!1),[R,Z]=(0,o.useState)(!1);let G=localStorage.getItem("seriesId"),W=localStorage.getItem("token");const K="http://16.171.41.223:8000/api/v1/";(0,o.useEffect)((()=>{W||S("/");const e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+W);const t={method:"GET",headers:e,redirect:"follow"};fetch("".concat(K,"getQuestionsSeriesWise?seriesId=").concat(G),t).then((e=>e.json())).then((e=>{"No questions found"===e.message&&r()("This series is empty for now. You can add questions!","Thanks!","success"),z(e)})).catch((e=>console.error(e)))}),[G,I]);const X=(e,t)=>{c().fire({title:"Are you sure to delete this Question?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ce2128",cancelButtonColor:"#333",confirmButtonText:"Yes, delete it!"}).then((n=>{n.isConfirmed&&ee(e,t)}))},ee=(e,t)=>{const n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization","Bearer "+W);const o={method:"DELETE",headers:n,body:JSON.stringify({questionType:e}),redirect:"follow"};fetch("".concat(K,"DeleteQuestionAnswer?questionId=").concat(t),o).then((e=>e.json())).then((e=>{O((e=>e+1)),s.Ay.success("Document delted successfully.")})).catch((e=>console.error(e)))},{show:te}=(0,d.U)();return(0,u.jsxs)("div",{className:"wrapper ".concat(te?"cmn_margin":""),children:[(0,u.jsxs)("div",{className:"cmn_container",children:[(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"add_question_wrapper",children:[(0,u.jsxs)("h1",{className:"heading",children:[localStorage.getItem("series")," (",localStorage.getItem("language"),") "]}),"  ",(0,u.jsx)("button",{className:"edit-series-button",onClick:()=>{S("/create-task")},children:"Add Question"})]}),(null===D||void 0===D||null===(e=D.questions)||void 0===e||null===(t=e.objective)||void 0===t?void 0:t.length)<3&&(null===D||void 0===D||null===(n=D.questions)||void 0===n||null===(i=n.subjective)||void 0===i?void 0:i.length)<2&&(null===D||void 0===D||null===(l=D.questions)||void 0===l||null===(p=l.logical)||void 0===p?void 0:p.length)<2?(0,u.jsx)("h6",{className:"message",children:" Your have to add minimum 3 objective, 2 subjective and 2 logical to complete this series"}):null,(0,u.jsxs)("div",{className:"sub-obj-log-heading",children:[(null===D||void 0===D||null===(m=D.questions)||void 0===m||null===(h=m.objective)||void 0===h?void 0:h.length)>0&&(0,u.jsxs)("div",{onClick:()=>{localStorage.setItem("questionType","mcq"),$(!1),Z(!1),Y(!0)},className:"heading-objective_tab ".concat(!0===M?"heading-objective-active ":"heading-objective"),children:["Objective ",null===D||void 0===D||null===(f=D.questions)||void 0===f||null===(g=f.objective)||void 0===g?void 0:g.length]}),(null===D||void 0===D||null===(v=D.questions)||void 0===v||null===(b=v.subjective)||void 0===b?void 0:b.length)>0&&(0,u.jsxs)("div",{className:"heading-objective_tab ".concat(!0===J?"heading-objective-active":"heading-objective"),onClick:()=>{localStorage.setItem("questionType","subjective"),Z(!1),Y(!1),$(!0)},children:["Subjective ",null===D||void 0===D||null===(y=D.questions)||void 0===y||null===(x=y.subjective)||void 0===x?void 0:x.length]}),(null===D||void 0===D||null===(j=D.questions)||void 0===j||null===(w=j.logical)||void 0===w?void 0:w.length)>0&&(0,u.jsxs)("div",{className:"heading-objective_tab ".concat(!0===R?"heading-objective-active":"heading-objective"),onClick:()=>{localStorage.setItem("questionType","logical"),Y(!1),$(!1),Z(!0)},children:["Logical ",null===D||void 0===D||null===(q=D.questions)||void 0===q||null===(E=q.logical)||void 0===E?void 0:E.length]})]}),M&&(null===D||void 0===D||null===(N=D.questions)||void 0===N||null===(C=N.objective)||void 0===C?void 0:C.map(((e,t)=>{var n,o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("input",{className:"mcq-question-edit form-control",type:"text",placeholder:"Enter question",defaultValue:e.question,onChange:e=>U(e.target.value)}),null===e||void 0===e||null===(n=e.options)||void 0===n?void 0:n.map(((t,n)=>(0,u.jsx)("input",{className:"mcq-options form-control mt-4",type:"text",placeholder:"Option ".concat(n+1),defaultValue:t,onChange:t=>((e,t,n)=>{n[e]=t,V(n)})(n,t.target.value,null===e||void 0===e?void 0:e.options)},n))),(0,u.jsxs)("div",{className:"correct_ans_outer d-flex gap-3 align-items-center justify-content-center",children:[(0,u.jsx)("label",{className:"cmn_text",children:"Select correct answer:"}),(0,u.jsx)("select",{defaultValue:e.correctAnswer,onChange:e=>L(parseInt(e.target.value)),children:null===e||void 0===e||null===(o=e.options)||void 0===o?void 0:o.map(((e,t)=>(0,u.jsx)("option",{value:t+1,children:t+1},t)))})]}),(0,u.jsxs)("div",{className:"Update_btn_outer",children:[(0,u.jsx)("button",{className:" cmn_btn_color me-3",onClick:()=>X("objective",e._id),children:"DELETE"}),(0,u.jsx)("button",{className:"cmn_gray_btn",onClick:()=>((e,t,n,o,a)=>{const i=new Headers;i.append("Content-Type","application/json"),i.append("Authorization","Bearer "+W);const r=Q.filter((e=>""!==e.trim())),l={method:"PUT",headers:i,body:JSON.stringify({questionType:e,question:P||n,options:r.length>0?r:o,correctAnswer:H||a}),redirect:"follow"};fetch("".concat(K,"updateQuestionAnswer?questionId=").concat(t),l).then((e=>e.json())).then((e=>{"success"===e.type?(O((e=>e+1)),U(""),B(""),L(),V(["","","",""]),s.Ay.success("Document updated successfully.",{duration:1e3})):s.Ay.error(e.message)})).catch((e=>console.error(e)))})("objective",e._id,e.question,null===e||void 0===e?void 0:e.options,e.correctAnswer),children:"UPDATE"})]})]})})))]}),(0,u.jsx)(u.Fragment,{children:J&&(null===D||void 0===D||null===(_=D.questions)||void 0===_||null===(k=_.subjective)||void 0===k?void 0:k.map(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("input",{className:"mcq-question-edit form-control",type:"text",placeholder:"Enter subjective question",defaultValue:e.question,onChange:e=>U(e.target.value)}),(0,u.jsx)("textarea",{className:"testbox-textarea form-control mt-4",type:"text",placeholder:"Enter answer",defaultValue:e.answer,onChange:e=>B(e.target.value)}),(0,u.jsxs)("div",{className:"Update_btn_outer mt-4",children:[(0,u.jsx)("button",{className:"cmn_btn_color me-3",onClick:()=>X("subjective",e._id),children:"DELETE"}),(0,u.jsx)("button",{className:"cmn_gray_btn",onClick:()=>((e,t,n,o)=>{const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+W);const i={method:"PUT",headers:a,body:JSON.stringify({questionType:e,answer:F||o,question:P||n}),redirect:"follow"};fetch("".concat(K,"updateQuestionAnswer?questionId=").concat(t),i).then((e=>e.json())).then((e=>{"success"===e.type&&(O((e=>e+1)),U(""),B(""),L(),V(["","","",""]),s.Ay.success("Document updated successfully.",{duration:1e3}))})).catch((e=>console.error(e)))})("subjective",e._id,e.question,e.answer),children:"UPDATE"})]})]}))))}),(0,u.jsx)(u.Fragment,{children:R&&(null===D||void 0===D||null===(A=D.questions)||void 0===A||null===(T=A.logical)||void 0===T?void 0:T.map(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("textarea",{type:"text",className:"testbox-textarea-logical-edit form-control",placeholder:"Enter logical question",defaultValue:e.question,onChange:e=>U(e.target.value)}),(0,u.jsx)("textarea",{className:"testbox-textarea form-control mt-4",type:"text",placeholder:"Enter answer",defaultValue:e.answer,onChange:e=>B(e.target.value)}),(0,u.jsxs)("div",{className:"Update_btn_outer mt-4",children:[(0,u.jsx)("button",{className:"cmn_btn_color me-3",onClick:()=>X("logical",e._id),children:"DELETE"}),(0,u.jsx)("button",{className:"cmn_gray_btn ",onClick:()=>((e,t,n,o)=>{const a=new Headers;a.append("Content-Type","application/json"),a.append("Authorization","Bearer "+W);const i={method:"PUT",headers:a,body:JSON.stringify({questionType:e,answer:F||o,question:P||n}),redirect:"follow"};fetch("".concat(K,"updateQuestionAnswer?questionId=").concat(t),i).then((e=>e.json())).then((e=>{"success"===e.type&&(O((e=>e+1)),U(""),B(""),L(),V(["","","",""]),s.Ay.success("Doucument updated successfully.",{duration:1e3}))})).catch((e=>console.error(e)))})("logical",e._id,e.question,e.answer),children:"UPDATE"})]})]}))))})]}),(0,u.jsx)(s.l$,{})]})}},2339:(e,t,n)=>{function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{l$:()=>ye,Ay:()=>xe,oR:()=>R});var a=n(5043);let s={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,r=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let n="",o="",a="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?n=s+" "+i+";":o+="f"==s[1]?d(i,s):s+"{"+d(i,"k"==s[1]?"":t)+"}":"object"==typeof i?o+=d(i,t?t.replace(/([^,])+/g,(e=>s.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(s,i):s+":"+i+";")}return n+(t&&a?t+"{"+a+"}":a)+o},u={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},m=(e,t,n,o,a)=>{let s=p(e),i=u[s]||(u[s]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(s));if(!u[i]){let t=s!==e?e:(e=>{let t,n,o=[{}];for(;t=r.exec(e.replace(l,""));)t[4]?o.shift():t[3]?(n=t[3].replace(c," ").trim(),o.unshift(o[0][n]=o[0][n]||{})):o[0][t[1]]=t[2].replace(c," ").trim();return o[0]})(e);u[i]=d(a?{["@keyframes "+i]:t}:t,n?"":"."+i)}let m=n&&u.g?u.g:null;return n&&(u.g=u[i]),((e,t,n,o)=>{o?t.data=t.data.replace(o,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(u[i],t,o,m),i},h=(e,t,n)=>e.reduce(((e,o,a)=>{let s=t[a];if(s&&s.call){let e=s(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+o+(null==s?"":s)}),"");function f(e){let t=this||{},n=e.call?e(t.p):e;return m(n.unshift?n.raw?h(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,i(t.target),t.g,t.o,t.k)}f.bind({g:1});let g,v,b,y=f.bind({k:1});function x(e,t){let n=this||{};return function(){let o=arguments;function a(s,i){let r=Object.assign({},s),l=r.className||a.className;n.p=Object.assign({theme:v&&v()},r),n.o=/ *go\d+/.test(l),r.className=f.apply(n,o)+(l?" "+l:""),t&&(r.ref=i);let c=e;return e[0]&&(c=r.as||e,delete r.as),b&&c[0]&&b(r),g(c,r)}return t?t(a):a}}var j,w,q,E,N,C,_,k,A,T,S,I,O,D,z,P,U=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,F=(()=>{let e=0;return()=>(++e).toString()})(),B=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),H=new Map,L=e=>{if(H.has(e))return;let t=setTimeout((()=>{H.delete(e),Y({type:4,toastId:e})}),1e3);H.set(e,t)},Q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=H.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?Q(e,{type:1,toast:n}):Q(e,{type:0,toast:n});case 3:let{toastId:o}=t;return o?L(o):e.toasts.forEach((e=>{L(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===o||void 0===o?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+a})))}}},V=[],M={toasts:[],pausedAt:void 0},Y=e=>{M=Q(M,e),V.forEach((e=>{e(M)}))},J={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=e=>(t,n)=>{let o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||F()}}(t,e,n);return Y({type:2,toast:o}),o.id},R=(e,t)=>$("blank")(e,t);R.error=$("error"),R.success=$("success"),R.loading=$("loading"),R.custom=$("custom"),R.dismiss=e=>{Y({type:3,toastId:e})},R.remove=e=>Y({type:4,toastId:e}),R.promise=(e,t,n)=>{let o=R.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(R.success(U(t.success,e),{id:o,...n,...null==n?void 0:n.success}),e))).catch((e=>{R.error(U(t.error,e),{id:o,...n,...null==n?void 0:n.error})})),e};var Z=(e,t)=>{Y({type:1,toast:{id:e,height:t}})},G=()=>{Y({type:5,time:Date.now()})},W=e=>{let{toasts:t,pausedAt:n}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,a.useState)(M);(0,a.useEffect)((()=>(V.push(n),()=>{let e=V.indexOf(n);e>-1&&V.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var n,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||J[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}}));return{...t,toasts:o}}(e);(0,a.useEffect)((()=>{if(n)return;let e=Date.now(),o=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>R.dismiss(t.id)),n);t.visible&&R.dismiss(t.id)}));return()=>{o.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let o=(0,a.useCallback)((()=>{n&&Y({type:6,time:Date.now()})}),[n]),s=(0,a.useCallback)(((e,n)=>{let{reverseOrder:o=!1,gutter:a=8,defaultPosition:s}=n||{},i=t.filter((t=>(t.position||s)===(e.position||s)&&t.height)),r=i.findIndex((t=>t.id===e.id)),l=i.filter(((e,t)=>t<r&&e.visible)).length;return i.filter((e=>e.visible)).slice(...o?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+a),0)}),[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:G,endPause:o,calculateOffset:s}}},K=y(j||(j=o(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),X=y(w||(w=o(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ee=y(q||(q=o(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),te=x("div")(E||(E=o(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(e=>e.primary||"#ff4b4b"),K,X,(e=>e.secondary||"#fff"),ee),ne=y(N||(N=o(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),oe=x("div")(C||(C=o(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(e=>e.secondary||"#e0e0e0"),(e=>e.primary||"#616161"),ne),ae=y(_||(_=o(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),se=y(k||(k=o(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),ie=x("div")(A||(A=o(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(e=>e.primary||"#61d345"),ae,se,(e=>e.secondary||"#fff")),re=x("div")(T||(T=o(["\n  position: absolute;\n"]))),le=x("div")(S||(S=o(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ce=y(I||(I=o(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),de=x("div")(O||(O=o(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ce),ue=e=>{let{toast:t}=e,{icon:n,type:o,iconTheme:s}=t;return void 0!==n?"string"==typeof n?a.createElement(de,null,n):n:"blank"===o?null:a.createElement(le,null,a.createElement(oe,{...s}),"loading"!==o&&a.createElement(re,null,"error"===o?a.createElement(te,{...s}):a.createElement(ie,{...s})))},pe=e=>"\n0% {transform: translate3d(0,".concat(-200*e,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"),me=e=>"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*e,"%,-1px) scale(.6); opacity:0;}\n"),he=x("div")(D||(D=o(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),fe=x("div")(z||(z=o(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),ge=a.memo((e=>{let{toast:t,position:n,style:o,children:s}=e,i=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[o,a]=B()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[pe(n),me(n)];return{animation:t?"".concat(y(o)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(y(a)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}})(t.position||n||"top-center",t.visible):{opacity:0},r=a.createElement(ue,{toast:t}),l=a.createElement(fe,{...t.ariaProps},U(t.message,t));return a.createElement(he,{className:t.className,style:{...i,...o,...t.style}},"function"==typeof s?s({icon:r,message:l}):a.createElement(a.Fragment,null,r,l))}));!function(e,t,n,o){d.p=t,g=e,v=n,b=o}(a.createElement);var ve=e=>{let{id:t,className:n,style:o,onHeightUpdate:s,children:i}=e,r=a.useCallback((e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;s(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,s]);return a.createElement("div",{ref:r,className:n,style:o},i)},be=f(P||(P=o(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),ye=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:o,gutter:s,children:i,containerStyle:r,containerClassName:l}=e,{toasts:c,handlers:d}=W(o);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let o=e.position||n,r=((e,t)=>{let n=e.includes("top"),o=n?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:B()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(n?1:-1),"px)"),...o,...a}})(o,d.calculateOffset(e,{reverseOrder:t,gutter:s,defaultPosition:n}));return a.createElement(ve,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?be:"",style:r},"custom"===e.type?U(e.message,e):i?i(e):a.createElement(ge,{toast:e,position:o}))})))},xe=R}}]);
//# sourceMappingURL=642.74d3e022.chunk.js.map