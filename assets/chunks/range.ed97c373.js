import{g as i,n as s,r as c,o as m,c as p,a as _}from"../app.5df2fa38.js";const b={class:"example-basic"},g=i({setup(v){const a=s(new Date(2016,9,10,18,30)),l=(e,n)=>{const u=[];for(let r=e;r<=n;r++)u.push(r);return u},d=()=>l(0,16).concat(l(19,23)),t=e=>{if(e===17)return l(0,29);if(e===18)return l(31,59)},o=(e,n)=>{if(e===18&&n===30)return l(1,59)};return(e,n)=>{const u=c("el-time-picker");return m(),p("div",b,[_(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),"disabled-hours":d,"disabled-minutes":t,"disabled-seconds":o,placeholder:"Arbitrary time"},null,8,["modelValue"])])}}});var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});const f={class:"example-basic"},V=i({setup(v){const a=s(),l=s();return(d,t)=>{const o=c("el-time-picker");return m(),p("div",f,[_(o,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:"Arbitrary time"},null,8,["modelValue"]),_(o,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),"arrow-control":"",placeholder:"Arbitrary time"},null,8,["modelValue"])])}}});var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const y={class:"demo-range"},k=i({setup(v){const a=s([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]),l=s([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]);return(d,t)=>{const o=c("el-time-picker");return m(),p("div",y,[_(o,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),"is-range":"","range-separator":"To","start-placeholder":"Start time","end-placeholder":"End time"},null,8,["modelValue"]),_(o,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),"is-range":"","arrow-control":"","range-separator":"To","start-placeholder":"Start time","end-placeholder":"End time"},null,8,["modelValue"])])}}});var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});export{S as _,w as a,D as b};
