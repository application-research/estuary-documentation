"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[4836],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),y=a,k=u["".concat(s,".").concat(y)]||u[y]||d[y]||r;return n?l.createElement(k,i(i({ref:e},c),{},{components:n})):l.createElement(k,i({ref:e},c))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27875:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={},i="Estimate the cost of a deal",o={type:"api",id:"estimate-the-cost-of-a-deal",unversionedId:"estimate-the-cost-of-a-deal",title:"Estimate the cost of a deal",description:"",slug:"/estimate-the-cost-of-a-deal",frontMatter:{},api:{description:"This endpoint estimates the cost of a deal",tags:["deals"],requestBody:{content:{"application/json":{schema:{type:"object",properties:{durationBlks:{type:"integer"},replication:{type:"integer"},size:{type:"integer"},verified:{type:"boolean"}}}}},description:"The size of the deal in bytes, the replication factor, and the duration of the deal in blocks",required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"string"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}}},method:"post",path:"/deal/estimate",servers:[{url:"//api.estuary.tech"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"apiKey",name:"Authorization",in:"header"}},jsonRequestBodyExample:{durationBlks:0,replication:0,size:0,verified:!0},info:{description:"This is the API for the Estuary application.",title:"Estuary API",termsOfService:"http://estuary.tech",contact:{name:"API Support",url:"https://docs.estuary.tech/feedback"},license:{name:"Apache 2.0 Apache-2.0 OR MIT",url:"https://github.com/application-research/estuary/blob/master/LICENSE.md"},version:"0.0.0"},postman:{name:"Estimate the cost of a deal",description:{content:"This endpoint estimates the cost of a deal",type:"text/plain"},url:{path:["deal","estimate"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "durationBlks": "<integer>",\n    "replication": "<integer>",\n    "size": "<integer>",\n    "verified": "<boolean>"\n}'}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/estuary-documentation/api/estimate-the-cost-of-a-deal",previous:{title:"Content",permalink:"/estuary-documentation/api/content"},next:{title:"Get Deal Info",permalink:"/estuary-documentation/api/get-deal-info"}},s=[],p={toc:s};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"estimate-the-cost-of-a-deal"},"Estimate the cost of a deal"),(0,a.kt)("p",null,"This endpoint estimates the cost of a deal"),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null,(0,a.kt)("p",null,"The size of the deal in bytes, the replication factor, and the duration of the deal in blocks"))))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"durationBlks"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"replication"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"size"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"verified"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"OK"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"400")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Bad Request"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"code"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"reason"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"500")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Internal Server Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"code"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"reason"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}c.isMDXComponent=!0}}]);