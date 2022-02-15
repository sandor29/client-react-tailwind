import{j as y,r as m,C as S,a as f,b,L as d,c as r,R as C,X as N,D as O,O as $,M as w,P as x,d as j,I,E as z,e as R,f as E,g as D,h,i as P,B as A}from"./vendor.d84171be.js";const L=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}};L();const e=y.exports.jsx,s=y.exports.jsxs,n=y.exports.Fragment,H=({drawer:a})=>{let[l,i]=m.exports.useState(!1);return e(n,{children:s("div",{children:[s("a",{href:"#",className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",onClick:()=>i(!l),children:[e(S,{className:"h-7 w-7"}),e("span",{className:"font-medium",children:"Design"}),l?e(f,{className:"h-5 w-5 absolute right-5"}):e(b,{className:"h-5 w-5 absolute right-5"})]}),l&&e("div",{className:"pl-5",children:[["Accordion","accordion"],["Alert","alert"],["Dialog","dialog"],["Dropdown","dropdown"],["Tab","tab"]].map(([t,c])=>e(d,{to:c,onClick:()=>{a(!1),i(!1)},children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-7 w-7"}),e("span",{className:"font-medium",children:t})]})},t))})]})})},p=({isOpen:a})=>e(n,{children:e("div",{className:"fixed inset-0 opacity-10 bg-black z-40",onClick:()=>a(!1)})}),M=()=>{let[a,l]=C.useState(!1);return s(n,{children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>l(!0),children:e(r,{className:"h-7 w-7"})}),s("div",{className:`s-transform top-0 left-0 h-screen w-80 overflow-y-auto z-50 bg-white 
                     ${a?"translate-x-0":"-translate-x-full"}`,children:[e("button",{type:"button",className:"absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100",onClick:()=>l(!1),children:e(N,{className:"h-6 w-6"})}),s("div",{className:"flex flex-col items-center justify-center m-5",children:[e("img",{className:"rounded-full h-32 w-32 m-3",src:"/images/security.jpeg",alt:"React"}),e("span",{className:"font-medium",children:"Sandor Escobar Ruiz"}),e("p",{className:"text-sm text-slate-500",children:"sandor.ser@gmail.com"})]}),e(d,{to:"/",onClick:()=>l(!1),children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-7 w-7"}),e("span",{className:"font-medium",children:"Home"})]})}),e(H,{drawer:l}),e(d,{to:"/about",onClick:()=>l(!1),children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-7 w-7"}),e("span",{className:"font-medium",children:"About"})]})}),e("div",{className:"flex justify-center border-t m-6 p-3",children:e("span",{className:"text-sm",children:"Vite Js + React Js + Tailwind Css"})})]}),a&&e(p,{isOpen:l})]})},T=()=>{let[a,l]=C.useState(!1);return s(n,{children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>l(!0),children:e(O,{className:"h-7 w-7"})}),e("div",{className:`s-transform origin-top top-0 right-0 m-2 rounded w-56 z-50 bg-white
                    ${a?"scale-y-100":"scale-y-0"}`,children:s("div",{className:"space-y-1 my-1",children:[e(d,{to:"/",onClick:()=>l(!1),children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-6 w-6"}),e("span",{className:"font-medium",children:"Home"})]})}),e(d,{to:"/",onClick:()=>l(!1),children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-6 w-6"}),e("span",{className:"font-medium",children:"Home"})]})}),e(d,{to:"/",onClick:()=>l(!1),children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-6 w-6"}),e("span",{className:"font-medium",children:"Home"})]})}),e(d,{to:"/",onClick:()=>l(!1),children:s("div",{className:"flex items-center space-x-3 px-5 py-3 hover:bg-slate-100",children:[e(r,{className:"h-6 w-6"}),e("span",{className:"font-medium",children:"Home"})]})})]})}),a&&e(p,{isOpen:l})]})},F=()=>e(n,{children:e("header",{className:"fixed border-b top-0 w-screen bg-white",children:s("div",{className:"flex p-1",children:[e("div",{className:"flex-none",children:e(M,{})}),e("div",{className:"grow p-2",children:e("p",{className:"text-center text-lg font-medium uppercase",children:"todo x uno"})}),e("div",{className:"flex-none",children:e(T,{})})]})})}),B=()=>e(n,{children:e("footer",{className:"fixed border-t bottom-0 w-screen bg-white",children:s("nav",{className:"flex justify-evenly p-1",children:[e(d,{to:"/",children:e("div",{className:"rounded p-2 hover:bg-gray-100",children:e(r,{className:"h-7 w-7"})})}),e(d,{to:"/",children:e("div",{className:"rounded p-2 hover:bg-gray-100",children:e(r,{className:"h-7 w-7"})})}),e(d,{to:"/",children:e("div",{className:"rounded p-2 hover:bg-gray-100",children:e(r,{className:"h-7 w-7"})})}),e(d,{to:"/",children:e("div",{className:"rounded p-2 hover:bg-gray-100",children:e(r,{className:"h-7 w-7"})})})]})})}),V=()=>s(n,{children:[e(F,{}),e($,{}),e(B,{})]}),X=()=>e(n,{children:e("main",{className:""})}),J=()=>e(n,{children:e("main",{className:""})}),U=()=>e(n,{children:e("main",{className:""})}),Y=()=>{let[a,l]=m.exports.useState(-1);return e(n,{children:s("main",{className:"s-page s-grid-4",children:[e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"divide-y p-5 w-full bg-white",children:[s("a",{href:"#",className:"flex items-center justify-between px-3 py-2",onClick:()=>a!=1?l(1):l(-1),children:[e("span",{className:"font-medium",children:"Success"}),a==1?e(w,{className:"h-5 w-5"}):e(x,{className:"h-5 w-5"})]}),a==1&&e("div",{className:"p-10",children:"Sandor"}),s("a",{href:"#",className:"flex items-center justify-between px-3 py-2",onClick:()=>a!=2?l(2):l(-1),children:[e("span",{className:"font-medium",children:"Success"}),a==2?e(w,{className:"h-5 w-5"}):e(x,{className:"h-5 w-5"})]}),a==2&&e("div",{className:"p-10",children:"Escobar"}),s("a",{href:"#",className:"flex items-center justify-between px-3 py-2",onClick:()=>a!=3?l(3):l(-1),children:[e("span",{className:"font-medium",children:"Success"}),a==3?e(w,{className:"h-5 w-5"}):e(x,{className:"h-5 w-5"})]}),a==3&&e("div",{className:"p-10",children:"Ruiz"})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"divide-y p-5 w-full bg-white",children:[s("div",{className:"flex items-center justify-between px-3 py-2",onClick:()=>a!=1?l(1):l(-1),children:[e("span",{className:"font-medium",children:"Success"}),a==1?e(f,{className:"h-5 w-5"}):e(b,{className:"h-5 w-5"})]}),a==1&&e("div",{className:"p-10",children:"Sandor"}),s("div",{className:"flex items-center justify-between px-3 py-2",onClick:()=>a!=2?l(2):l(-1),children:[e("span",{className:"font-medium",children:"Success"}),a==2?e(f,{className:"h-5 w-5"}):e(b,{className:"h-5 w-5"})]}),a==2&&e("div",{className:"p-10",children:"Escobar"}),s("div",{className:"flex items-center justify-between px-3 py-2",onClick:()=>a!=3?l(3):l(-1),children:[e("span",{className:"font-medium",children:"Success"}),a==3?e(f,{className:"h-5 w-5"}):e(b,{className:"h-5 w-5"})]}),a==3&&e("div",{className:"p-10",children:"Ruiz"})]})})]})})},q=()=>e(n,{children:s("main",{className:"s-page s-grid-4",children:[e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"flex items-center space-x-3 shadow rounded-xl p-3 bg-white",children:[e(j,{className:"h-7 w-7 text-green-500"}),s("div",{children:[e("span",{className:"font-medium text-green-500",children:"Success"}),e("p",{className:"text-sm text-slate-500",children:"You finished the tasks."})]})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"flex items-center space-x-3 shadow rounded-xl p-3 bg-white",children:[e(I,{className:"h-7 w-7 text-blue-500"}),s("div",{children:[e("span",{className:"font-medium text-blue-500",children:"Info"}),e("p",{className:"text-sm text-slate-500",children:"Update your avatar."})]})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"flex items-center space-x-3 shadow rounded-xl p-3 bg-white",children:[e(z,{className:"h-7 w-7 text-yellow-500"}),s("div",{children:[e("span",{className:"font-medium text-yellow-500",children:"Warning"}),e("p",{className:"text-sm text-slate-500",children:"This version is not supported."})]})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"flex items-center space-x-3 shadow rounded-xl p-3 bg-white",children:[e(R,{className:"h-7 w-7 text-red-500"}),s("div",{children:[e("span",{className:"font-medium text-red-500",children:"Error"}),e("p",{className:"text-sm text-slate-500",children:"Validation Error."})]})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"flex items-center space-x-3 shadow rounded-xl p-3 bg-white",children:[e(E,{className:"h-7 w-7 text-pink-500"}),s("div",{children:[e("span",{className:"font-medium text-pink-500",children:"Messenger"}),e("p",{className:"text-sm text-slate-500",children:"Your account was registered!"})]})]})})]})}),K=()=>{let[a,l]=m.exports.useState(!1),[i,o]=m.exports.useState(!1),[t,c]=m.exports.useState(!1),[u,g]=m.exports.useState(!1),[k,v]=m.exports.useState(!1);return e(n,{children:s("main",{className:"s-page s-grid-4",children:[s("div",{className:"s-center p-5 bg-slate-50",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>l(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-80 w-11/12 sm:w-96 rounded-xl overflow-y-auto z-50 bg-white 
                             ${a?"scale-100":"scale-0"}`,children:e("button",{type:"button",className:"absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100",onClick:()=>l(!1),children:e(N,{className:"h-6 w-6"})})}),a&&e(p,{isOpen:l})]}),s("div",{className:"s-center p-5 bg-slate-50",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>o(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform top-0 left-0 h-screen w-80 overflow-y-auto z-50 bg-white 
                             ${i?"translate-x-0":"-translate-x-full"}`,children:e("button",{type:"button",className:"absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100",onClick:()=>o(!1),children:e(N,{className:"h-6 w-6"})})}),i&&e(p,{isOpen:o})]}),s("div",{className:"s-center p-5 bg-slate-50",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>c(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform top-0 right-0 h-screen w-80 overflow-y-auto z-50 bg-white 
                             ${t?"-translate-x-0":"translate-x-full"}`,children:e("button",{type:"button",className:"absolute rounded-full left-0 m-2 p-2 hover:bg-gray-100",onClick:()=>c(!1),children:e(N,{className:"h-6 w-6"})})}),t&&e(p,{isOpen:c})]}),s("div",{className:"s-center p-5 bg-slate-50",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>g(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform top-0 left-1/2 -translate-x-1/2 h-80 w-11/12 sm:w-96 rounded-xl overflow-y-auto z-50 bg-white 
                             ${u?"translate-y-0":"-translate-y-full"}`,children:e("button",{type:"button",className:"absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100",onClick:()=>g(!1),children:e(N,{className:"h-6 w-6"})})}),u&&e(p,{isOpen:g})]}),s("div",{className:"s-center p-5 bg-slate-50",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>v(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform bottom-0 left-1/2 -translate-x-1/2 h-80 w-11/12 sm:w-96 rounded-xl overflow-y-auto z-50 bg-white 
                             ${k?"-translate-y-0":"translate-y-full"}`,children:e("button",{type:"button",className:"absolute rounded-full right-0 m-2 p-2 hover:bg-gray-100",onClick:()=>v(!1),children:e(N,{className:"h-6 w-6"})})}),k&&e(p,{isOpen:v})]})]})})},W=()=>{let[a,l]=m.exports.useState(!1),[i,o]=m.exports.useState(!1);return e(n,{children:s("main",{className:"s-page s-grid-4",children:[e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>l(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform origin-top rounded z-50 bg-white 
                             ${a?"scale-y-100":"scale-y-0"}`,children:e("div",{className:"h-56 w-56"})}),a&&e(p,{isOpen:l})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"",children:[e("button",{type:"button",className:"rounded p-2 hover:bg-gray-100",onClick:()=>o(!0),children:e(r,{className:"h-7 w-7"})}),e("div",{className:`s-transform origin-top -translate-x-44 m-1 rounded z-50 bg-white 
                             ${i?"scale-y-100":"scale-y-0"}`,children:e("div",{className:"h-56 w-56"})}),i&&e(p,{isOpen:o})]})})]})})},G=()=>{let[a,l]=m.exports.useState(1);return e(n,{children:s("main",{className:"s-page s-grid-4",children:[e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"w-full",children:[s("div",{className:"flex overflow-x-auto bg-white",children:[e("a",{href:"#",className:`s-center p-2 border-b-2 w-full ${a==1?"border-red-400":"border-slate-100"}`,onClick:()=>l(1),children:e("span",{className:"font-medium",children:"Primero"})}),e("a",{href:"#",className:`s-center p-2 border-b-2 w-full ${a==2?"border-red-400":"border-slate-100"}`,onClick:()=>l(2),children:e("span",{className:"font-medium",children:"Segundo"})}),e("a",{href:"#",className:`s-center p-2 border-b-2 w-full ${a==3?"border-red-400":"border-slate-100"}`,onClick:()=>l(3),children:e("span",{className:"font-medium",children:"Tercero"})})]}),s("div",{className:"bg-white w-full",children:[a==1&&e("div",{className:"p-5",children:"Sandor"}),a==2&&e("div",{className:"p-5",children:"Escobar"}),a==3&&e("div",{className:"p-5",children:"Ruiz"})]})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"w-full",children:[s("div",{className:"flex overflow-x-auto bg-white",children:[s("a",{href:"#",className:`s-center space-x-2 p-2 border-b-2 w-full ${a==1?"border-red-400":"border-slate-100"}`,onClick:()=>l(1),children:[e(r,{className:"h-5 w-5"}),e("span",{className:"font-medium",children:"Primero"})]}),s("a",{href:"#",className:`s-center space-x-2 p-2 border-b-2 w-full ${a==2?"border-red-400":"border-slate-100"}`,onClick:()=>l(2),children:[e(r,{className:"h-5 w-5"}),e("span",{className:"font-medium",children:"Segundo"})]}),s("a",{href:"#",className:`s-center space-x-2 p-2 border-b-2 w-full ${a==3?"border-red-400":"border-slate-100"}`,onClick:()=>l(3),children:[e(r,{className:"h-5 w-5"}),e("span",{className:"font-medium",children:"Tercero"})]})]}),s("div",{className:"bg-white w-full",children:[a==1&&e("div",{className:"p-5",children:"Sandor"}),a==2&&e("div",{className:"p-5",children:"Escobar"}),a==3&&e("div",{className:"p-5",children:"Ruiz"})]})]})}),e("div",{className:"s-center p-5 bg-slate-50",children:s("div",{className:"w-full",children:[s("div",{className:"bg-white w-full",children:[a==1&&e("div",{className:"p-5",children:"Sandor"}),a==2&&e("div",{className:"p-5",children:"Escobar"}),a==3&&e("div",{className:"p-5",children:"Ruiz"})]}),s("div",{className:"flex overflow-x-auto bg-white",children:[e("a",{href:"#",className:`s-center p-2 border-t-2 w-full ${a==1?"border-red-400":"border-slate-100"}`,onClick:()=>l(1),children:e("span",{className:"font-medium",children:"Primero"})}),e("a",{href:"#",className:`s-center p-2 border-t-2 w-full ${a==2?"border-red-400":"border-slate-100"}`,onClick:()=>l(2),children:e("span",{className:"font-medium",children:"Segundo"})}),e("a",{href:"#",className:`s-center p-2 border-t-2 w-full ${a==3?"border-red-400":"border-slate-100"}`,onClick:()=>l(3),children:e("span",{className:"font-medium",children:"Tercero"})})]})]})})]})})},Q=()=>e(n,{children:e(D,{children:s(h,{path:"/",element:e(V,{}),children:[e(h,{index:!0,element:e(X,{})}),e(h,{path:"about",element:e(J,{})}),e(h,{path:"*",element:e(U,{})}),e(h,{path:"accordion",element:e(Y,{})}),e(h,{path:"alert",element:e(q,{})}),e(h,{path:"dialog",element:e(K,{})}),e(h,{path:"dropdown",element:e(W,{})}),e(h,{path:"tab",element:e(G,{})})]})})});P.render(e(C.StrictMode,{children:e(A,{children:e(Q,{})})}),document.getElementById("root"));
