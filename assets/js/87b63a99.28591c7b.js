"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[963],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(n),y=l,m=d["".concat(o,".").concat(y)]||d[y]||c[y]||i;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function y(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41549:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(87462),l=(n(67294),n(3905));const i={},a="Get miner stats",s={type:"api",id:"get-miner-stats",unversionedId:"get-miner-stats",title:"Get miner stats",description:"",slug:"/get-miner-stats",frontMatter:{},api:{description:"This endpoint returns miner stats",tags:["public","miner"],parameters:[{description:"Filter by miner",name:"miner",in:"path",schema:{type:"string"},required:!0}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"string"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}}},method:"get",path:"/public/miners/stats/{miner}",servers:[{url:"//api.estuary.tech"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"apiKey",name:"Authorization",in:"header"}},info:{description:"This is the API for the Estuary application.",title:"Estuary API",termsOfService:"http://estuary.tech",contact:{name:"API Support",url:"https://docs.estuary.tech/feedback"},license:{name:"Apache 2.0 Apache-2.0 OR MIT",url:"https://github.com/application-research/estuary/blob/master/LICENSE.md"},version:"0.0.0"},postman:{name:"Get miner stats",description:{content:"This endpoint returns miner stats",type:"text/plain"},url:{path:["public","miners","stats",":miner"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) Filter by miner",type:"text/plain"},type:"any",value:"<string>",key:"miner"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/estuary-documentation/api/get-miner-stats",previous:{title:"Get all miners",permalink:"/estuary-documentation/api/get-all-miners-1"},next:{title:"Query Ask",permalink:"/estuary-documentation/api/query-ask-1"}},o=[],p={toc:o};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-miner-stats"},"Get miner stats"),(0,l.kt)("p",null,"This endpoint returns miner stats"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"miner"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Filter by miner")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"OK"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"400")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"code"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"details"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"reason"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"500")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"code"),(0,l.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"details"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"reason"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);