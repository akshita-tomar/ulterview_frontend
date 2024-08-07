"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[262],{7533:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var r=t(5043),o=t(3216);const s=t.p+"static/media/empty.339933e2685d9aa9e88f.gif";var a=t(4842),i=t(8139),c=t.n(i),l=t(1969),d=t(7852),u=t(8747),p=t(8062),f=t(3492);const h=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)};var m=t(2643),v=t(865),y=t(579);const x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function g(e,n){const t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=x[e];return t+parseInt((0,u.A)(n,r[0]),10)+parseInt((0,u.A)(n,r[1]),10)}const E={[p.kp]:"collapse",[p.ze]:"collapsing",[p.ns]:"collapsing",[p._K]:"collapse show"},j=r.forwardRef(((e,n)=>{let{onEnter:t,onEntering:o,onEntered:s,onExit:a,onExiting:i,className:l,children:d,dimension:u="height",in:p=!1,timeout:x=300,mountOnEnter:j=!1,unmountOnExit:w=!1,appear:b=!1,getDimensionValue:N=g,...A}=e;const C="function"===typeof u?u():u,S=(0,r.useMemo)((()=>h((e=>{e.style[C]="0"}),t)),[C,t]),_=(0,r.useMemo)((()=>h((e=>{const n="scroll".concat(C[0].toUpperCase()).concat(C.slice(1));e.style[C]="".concat(e[n],"px")}),o)),[C,o]),O=(0,r.useMemo)((()=>h((e=>{e.style[C]=null}),s)),[C,s]),k=(0,r.useMemo)((()=>h((e=>{e.style[C]="".concat(N(C,e),"px"),(0,m.A)(e)}),a)),[a,N,C]),R=(0,r.useMemo)((()=>h((e=>{e.style[C]=null}),i)),[C,i]);return(0,y.jsx)(v.A,{ref:n,addEndListener:f.A,...A,"aria-expanded":A.role?p:null,onEnter:S,onEntering:_,onEntered:O,onExit:k,onExiting:R,childRef:d.ref,in:p,timeout:x,mountOnEnter:j,unmountOnExit:w,appear:b,children:(e,n)=>r.cloneElement(d,{...n,className:c()(l,d.props.className,E[e],"width"===C&&"collapse-horizontal")})})}));function w(e,n){return Array.isArray(e)?e.includes(n):e===n}const b=r.createContext({});b.displayName="AccordionContext";const N=b,A=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,children:a,eventKey:i,...l}=e;const{activeEventKey:u}=(0,r.useContext)(N);return o=(0,d.oU)(o,"accordion-collapse"),(0,y.jsx)(j,{ref:n,in:w(u,i),...l,className:c()(s,o),children:(0,y.jsx)(t,{children:r.Children.only(a)})})}));A.displayName="AccordionCollapse";const C=A,S=r.createContext({eventKey:""});S.displayName="AccordionItemContext";const _=S,O=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,onEnter:a,onEntering:i,onEntered:l,onExit:u,onExiting:p,onExited:f,...h}=e;o=(0,d.oU)(o,"accordion-body");const{eventKey:m}=(0,r.useContext)(_);return(0,y.jsx)(C,{eventKey:m,onEnter:a,onEntering:i,onEntered:l,onExit:u,onExiting:p,onExited:f,children:(0,y.jsx)(t,{ref:n,...h,className:c()(s,o)})})}));O.displayName="AccordionBody";const k=O;const R=r.forwardRef(((e,n)=>{let{as:t="button",bsPrefix:o,className:s,onClick:a,...i}=e;o=(0,d.oU)(o,"accordion-button");const{eventKey:l}=(0,r.useContext)(_),u=function(e,n){const{activeEventKey:t,onSelect:o,alwaysOpen:s}=(0,r.useContext)(N);return r=>{let a=e===t?null:e;s&&(a=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==o||o(a,r),null==n||n(r)}}(l,a),{activeEventKey:p}=(0,r.useContext)(N);return"button"===t&&(i.type="button"),(0,y.jsx)(t,{ref:n,onClick:u,...i,"aria-expanded":Array.isArray(p)?p.includes(l):l===p,className:c()(s,o,!w(p,l)&&"collapsed")})}));R.displayName="AccordionButton";const K=R,P=r.forwardRef(((e,n)=>{let{as:t="h2",bsPrefix:r,className:o,children:s,onClick:a,...i}=e;return r=(0,d.oU)(r,"accordion-header"),(0,y.jsx)(t,{ref:n,...i,className:c()(o,r),children:(0,y.jsx)(K,{onClick:a,children:s})})}));P.displayName="AccordionHeader";const T=P,I=r.forwardRef(((e,n)=>{let{as:t="div",bsPrefix:o,className:s,eventKey:a,...i}=e;o=(0,d.oU)(o,"accordion-item");const l=(0,r.useMemo)((()=>({eventKey:a})),[a]);return(0,y.jsx)(_.Provider,{value:l,children:(0,y.jsx)(t,{ref:n,...i,className:c()(s,o)})})}));I.displayName="AccordionItem";const U=I,B=r.forwardRef(((e,n)=>{const{as:t="div",activeKey:o,bsPrefix:s,className:a,onSelect:i,flush:u,alwaysOpen:p,...f}=(0,l.Zw)(e,{activeKey:"onSelect"}),h=(0,d.oU)(s,"accordion"),m=(0,r.useMemo)((()=>({activeEventKey:o,onSelect:i,alwaysOpen:p})),[o,i,p]);return(0,y.jsx)(N.Provider,{value:m,children:(0,y.jsx)(t,{ref:n,...f,className:c()(a,h,u&&"".concat(h,"-flush"))})})}));B.displayName="Accordion";const D=Object.assign(B,{Button:K,Collapse:C,Item:U,Header:T,Body:k}),H=()=>{const{show:e}=(0,a.U)();let n=(0,o.Zp)(),t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL,i=localStorage.getItem("token");const{id:c}=(0,o.g)(),[l,d]=(0,r.useState)([]),[u,p]=(0,r.useState)([]),[f,h]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=new Headers;e.append("Authorization","Bearer "+i);const n={method:"GET",headers:e,redirect:"follow"};fetch("".concat(t,"hrRoundCandidateAnswers?candidateId=").concat(c),n).then((e=>e.json())).then((e=>{var n;"success"===e.type&&((null===(n=e.answers)||void 0===n?void 0:n.length)<1&&h(!0),d(e.questions),p(e.answers))})).catch((e=>console.error(e)))}),[c,i,t]);const m=e=>{const r=new Headers;r.append("Content-Type","application/json"),r.append("Authorization","Bearer "+i);const o={method:"POST",headers:r,body:JSON.stringify({candidateId:c,hrResponse:e}),redirect:"follow"};fetch("".concat(t,"hrRoundSelectReject"),o).then((e=>e.json())).then((e=>{"success"===e.type&&n("/hr-round-response")})).catch((e=>console.error(e)))};return(0,y.jsxs)("div",{className:"wrapper ".concat(e?"cmn_margin":""),children:[(0,y.jsx)("div",{className:"back-btn-outer",children:(0,y.jsx)("button",{className:"back-btn-checkans",onClick:()=>{n("/hr-round-response")},children:"Back"})}),(0,y.jsx)("div",{className:"hrcheckans-heading",children:"Asked Questions"}),(0,y.jsx)(D,{defaultActiveKey:"0",children:l.map(((e,n)=>{var t;return(0,y.jsxs)(D.Item,{eventKey:n.toString(),children:[(0,y.jsx)(D.Header,{children:e.question}),(0,y.jsx)(D.Body,{children:(0,y.jsx)("textarea",{className:"text-input form-control",placeholder:"Your answer here",value:(null===(t=u.find((n=>n._id===e._id)))||void 0===t?void 0:t.answer)||"",readOnly:!0})})]},e._id)}))}),(0,y.jsx)("br",{}),f&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{src:s,alt:"No Data"}),(0,y.jsx)("h4",{children:"Not completed even a single question"})]}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("button",{type:"submit",className:"submit-button",onClick:()=>m("selected"),children:"Select"})," \xa0",(0,y.jsx)("button",{type:"submit",className:"reject-btn",onClick:()=>m("rejected"),children:"Reject"})]})]})}},2740:e=>{e.exports=function(e,n,t,r,o,s,a,i){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,s,a,i],d=0;(c=new Error(n.replace(/%s/g,(function(){return l[d++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},1969:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Zw:()=>c});var o=t(8587),s=t(5043);t(2740);function a(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function i(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n){return Object.keys(n).reduce((function(t,c){var l,d=t,u=d[a(c)],p=d[c],f=(0,o.A)(d,[a(c),c].map(i)),h=n[c],m=function(e,n,t){var r=(0,s.useRef)(void 0!==e),o=(0,s.useState)(n),a=o[0],i=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&a!==n&&i(n),[c?e:a,(0,s.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),i(e)}),[t])]}(p,u,e[h]),v=m[0],y=m[1];return r({},f,((l={})[c]=v,l[h]=y,l))}),e)}function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function d(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function u(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}l.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=262.e154ba40.chunk.js.map