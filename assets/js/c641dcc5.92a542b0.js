"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[1600],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(n),y=r,k=d["".concat(o,".").concat(y)]||d[y]||c[y]||a;return n?l.createElement(k,i(i({ref:e},u),{},{components:n})):l.createElement(k,i({ref:e},u))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1967:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var l=n(87462),r=(n(67294),n(3905));const a={},i="Public stats",s={type:"api",id:"public-stats",unversionedId:"public-stats",title:"Public stats",description:"",slug:"/public-stats",frontMatter:{},api:{description:"This endpoint is used to get public stats.",tags:["public"],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"string"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}}},method:"get",path:"/public/stats",servers:[{url:"//api.estuary.tech"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"apiKey",name:"Authorization",in:"header"}},info:{description:"This is the API for the Estuary application.",title:"Estuary API",termsOfService:"http://estuary.tech",contact:{name:"API Support",url:"https://docs.estuary.tech/feedback"},license:{name:"Apache 2.0 Apache-2.0 OR MIT",url:"https://github.com/application-research/estuary/blob/master/LICENSE.md"},version:"0.0.0"},postman:{name:"Public stats",description:{content:"This endpoint is used to get public stats.",type:"text/plain"},url:{path:["public","stats"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/estuary-documentation/api/public-stats",previous:{title:"Net Peers",permalink:"/estuary-documentation/api/net-peers"},next:{title:"Get API keys for a user",permalink:"/estuary-documentation/api/get-api-keys-for-a-user"}},o=[],p={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"public-stats"},"Public stats"),(0,r.kt)("p",null,"This endpoint is used to get public stats."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"400")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"code"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"reason"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"500")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"code"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"reason"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);