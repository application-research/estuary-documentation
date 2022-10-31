"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[7833],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=l.createContext({}),s=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return l.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),y=i,k=u["".concat(c,".").concat(y)]||u[y]||d[y]||r;return n?l.createElement(k,a(a({ref:e},p),{},{components:n})):l.createElement(k,a({ref:e},p))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:i,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35037:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(87462),i=(n(67294),n(3905));const r={},a="Add a file to a collection",o={type:"api",id:"add-a-file-to-a-collection",unversionedId:"add-a-file-to-a-collection",title:"Add a file to a collection",description:"",slug:"/add-a-file-to-a-collection",frontMatter:{},api:{description:"This endpoint adds a file to a collection",tags:["collections"],parameters:[{description:"Collection ID",name:"coluuid",in:"query",required:!0,schema:{type:"string"}},{description:"Content",name:"content",in:"query",required:!0,schema:{type:"string"}},{description:"Path to file",name:"path",in:"query",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"string"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer"},details:{type:"string"},reason:{type:"string"}}}}}}},method:"post",path:"/collections/fs/add",servers:[{url:"//api.estuary.tech"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"apiKey",name:"Authorization",in:"header"}},info:{description:"This is the API for the Estuary application.",title:"Estuary API",termsOfService:"http://estuary.tech",contact:{name:"API Support",url:"https://docs.estuary.tech/feedback"},license:{name:"Apache 2.0 Apache-2.0 OR MIT",url:"https://github.com/application-research/estuary/blob/master/LICENSE.md"},version:"0.0.0"},postman:{name:"Add a file to a collection",description:{content:"This endpoint adds a file to a collection",type:"text/plain"},url:{path:["collections","fs","add"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) Collection ID",type:"text/plain"},key:"coluuid",value:"<string>"},{description:{content:"(Required) Content",type:"text/plain"},key:"content",value:"<string>"},{description:{content:"(Required) Path to file",type:"text/plain"},key:"path",value:"<string>"}],variable:[]},method:"POST"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/estuary-documentation/api/add-a-file-to-a-collection",previous:{title:"Create a new collection",permalink:"/estuary-documentation/api/create-a-new-collection"},next:{title:"Get contents in a collection",permalink:"/estuary-documentation/api/get-contents-in-a-collection"}},c=[],s={toc:c};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-a-file-to-a-collection"},"Add a file to a collection"),(0,i.kt)("p",null,"This endpoint adds a file to a collection"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"coluuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Collection ID")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Content")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"path"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Path to file")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"OK"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"400")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"code"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"reason"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"500")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"code"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"reason"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}p.isMDXComponent=!0}}]);