import{_ as f,r as n,o as _,f as S,w as r,c as a,i as m,F as s,b as d,k as v,g as k,n as c,a6 as V,a as u,d as I}from"../app.5df2fa38.js";const $={};function C(b,l){const o=n("el-scrollbar");return _(),S(o,{height:"400px"},{default:r(()=>[(_(),a(s,null,m(20,e=>d("p",{key:e,class:"scrollbar-demo-item"},v(e),1)),64))]),_:1})}var M=f($,[["render",C],["__scopeId","data-v-c89b7d76"]]),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const j={},B={class:"scrollbar-flex-content"};function O(b,l){const o=n("el-scrollbar");return _(),S(o,null,{default:r(()=>[d("div",B,[(_(),a(s,null,m(50,e=>d("p",{key:e,class:"scrollbar-demo-item"},v(e),1)),64))])]),_:1})}var R=f(j,[["render",O],["__scopeId","data-v-7b938c1c"]]),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const w=k({setup(b){const l=c(0),o=c(0),e=c(),g=c();V(()=>{l.value=e.value.clientHeight-380});const y=t=>{g.value.setScrollTop(t)},p=({scrollTop:t})=>{o.value=t},x=t=>`${t} px`;return(t,h)=>{const T=n("el-scrollbar"),z=n("el-slider");return _(),a(s,null,[u(T,{ref_key:"scrollbarRef",ref:g,height:"400px",always:"",onScroll:p},{default:r(()=>[d("div",{ref_key:"innerRef",ref:e},[(_(),a(s,null,m(20,i=>d("p",{key:i,class:"scrollbar-demo-item"},v(i),1)),64))],512)]),_:1},512),u(z,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=i=>o.value=i),max:l.value,"format-tooltip":x,onInput:y},null,8,["modelValue","max"])],64)}}});var D=f(w,[["__scopeId","data-v-3d4733d8"]]),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const H=I("Add Item"),N=I("Delete Item"),U=k({setup(b){const l=c(3),o=()=>{l.value++},e=()=>{l.value>0&&l.value--};return(g,y)=>{const p=n("el-button"),x=n("el-scrollbar");return _(),a(s,null,[u(p,{onClick:o},{default:r(()=>[H]),_:1}),u(p,{onClick:e},{default:r(()=>[N]),_:1}),u(x,{"max-height":"400px"},{default:r(()=>[(_(!0),a(s,null,m(l.value,t=>(_(),a("p",{key:t,class:"scrollbar-demo-item"},v(t),1))),128))]),_:1})],64)}}});var F=f(U,[["__scopeId","data-v-573bb73b"]]),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{E as _,L as a,q as b,G as c};
