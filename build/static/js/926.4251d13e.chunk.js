"use strict";(self.webpackChunkulterview_frontend=self.webpackChunkulterview_frontend||[]).push([[926],{5930:(e,a,c)=>{c.r(a),c.d(a,{default:()=>m});var s=c(7451),l=c(4282),t=c(2339),n=c(5043),i=c(3023),w=c.n(i),p=c(579);const m=e=>{const[a,c]=(0,n.useState)(""),[i,m]=(0,n.useState)(""),[d,u]=(0,n.useState)(""),h=localStorage.getItem("token");return(0,p.jsxs)("div",{children:[(0,p.jsxs)(s.A,{...e,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,p.jsx)(s.A.Header,{closeButton:!0,children:(0,p.jsx)(s.A.Title,{id:"contained-modal-title-vcenter ",className:"heading",children:"Change Password"})}),(0,p.jsxs)(s.A.Body,{children:[(0,p.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter your password",value:a,onChange:e=>c(e.target.value)}),(0,p.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Enter new password",value:i,onChange:e=>m(e.target.value)}),(0,p.jsx)("input",{className:"candidate-register-input form-control mt-2",placeholder:"Re-type new password",value:d,onChange:e=>u(e.target.value)})]}),(0,p.jsx)(s.A.Footer,{children:(0,p.jsx)(l.A,{onClick:()=>{const c=new Headers;c.append("Content-Type","application/json"),c.append("Authorization","Bearer "+h);const s={method:"PUT",headers:c,body:JSON.stringify({password:a,newPassword:i,confirmPassword:d}),redirect:"follow"};fetch("".concat("http://16.171.41.223:8000/api/v1/","changePassword"),s).then((e=>e.json())).then((a=>{"error"===a.type?t.oR.error(a.message,{duration:3e3}):(w()("Password change successfully!","Thanks","success"),setTimeout((()=>{e.onHide(!1)}),1e3))})).catch((e=>console.error(e)))},children:"Submit"})})]}),(0,p.jsx)(t.l$,{})]})}},926:(e,a,c)=>{c.r(a),c.d(a,{default:()=>m});var s=c(5043),l=c(6528),t=c(3216),n=c(6905),i=c(5930),w=c(3156),p=c(579);const m=()=>{const e=(0,t.Zp)(),[a,c]=(0,s.useState)(!1);return(0,p.jsxs)("header",{className:"header",children:[(0,p.jsx)("div",{className:"logo",children:(0,p.jsx)("img",{src:l,alt:"Company Logo",className:"logo-icon"})}),(0,p.jsxs)(n.A,{children:[(0,p.jsx)(n.A.Toggle,{variant:"success",id:"dropdown-basic",children:(0,p.jsx)(w.v5n,{})}),(0,p.jsxs)(n.A.Menu,{children:[(0,p.jsx)(n.A.Item,{onClick:()=>{localStorage.removeItem("token"),e("/")},children:"Logout"}),(0,p.jsx)(n.A.Item,{onClick:()=>{c(!0)},children:"Change Password"})]})]}),a&&(0,p.jsx)(i.default,{show:a,onHide:()=>c(!1)})]})}},6528:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbMAAAClCAYAAADWFRO1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMS0yOVQxMzo0ODozOCswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTEtMzBUMTE6MDg6MTMrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMzBUMTE6MDg6MTMrMDU6MzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjYxNzdjZjctM2I2NC01MjQ3LWIyNjktMTYxMzlhZjY5NTUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5Mzg2OTk3RDRERTExRUI5MjE3RTdBMjJBNTNCMDMzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzkzODY5OTdENERFMTFFQjkyMTdFN0EyMkE1M0IwMzMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTM4Njk5NEQ0REUxMUVCOTIxN0U3QTIyQTUzQjAzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OTM4Njk5NUQ0REUxMUVCOTIxN0U3QTIyQTUzQjAzMyIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NjE3N2NmNy0zYjY0LTUyNDctYjI2OS0xNjEzOWFmNjk1NTIiIHN0RXZ0OndoZW49IjIwMjEtMTEtMzBUMTE6MDg6MTMrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HPslcAAASDUlEQVR4nO3dfYxlZWHH8e/CLm8iMFRFmgZkwQhWaGXRVipQcWCBSgq2i1Rt7YtdCo3RNiWzqbba2sYd04QoSZFVXkzpG2MTFcrbLvhS0ApstykWaAujUGsQ6y4oUNhlmf7x3Mu87J177n3Oc885z7nfTzLZl3Oec5+ZO3N+87yeFXNzc0iSlLO96q6AJEllGWaSpOwZZpKk7BlmkqTsGWaSpOwZZpKk7BlmkqTsGWaSpOwZZpKk7BlmkqTsGWaSpOwZZpKk7BlmkqTsGWaSpOwZZpKk7BlmkqTs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"}}]);
//# sourceMappingURL=926.4251d13e.chunk.js.map