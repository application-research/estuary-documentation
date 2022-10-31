"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[7065],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12078:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="MinerApi",o={unversionedId:"go/docs/MinerApi",id:"go/docs/MinerApi",title:"\\MinerApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/go/docs/MinerApi.md",sourceDirName:"go/docs",slug:"/go/docs/MinerApi",permalink:"/estuary-documentation/clients/go/docs/MinerApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\\MetricsApi",permalink:"/estuary-documentation/clients/go/docs/MetricsApi"},next:{title:"\\NetApi",permalink:"/estuary-documentation/clients/go/docs/NetApi"}},p={},u=[{value:"Required Parameters",id:"required-parameters",level:3},{value:"Optional Parameters",id:"optional-parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Required Parameters",id:"required-parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minerapi"},"\\MinerApi"),(0,a.kt)("p",null,"All URIs are relative to ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/MinerApi#PublicMinersDealsMinerGet"},(0,a.kt)("strong",{parentName:"a"},"PublicMinersDealsMinerGet"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Get")," /public/miners/deals/{miner}"),(0,a.kt)("td",{parentName:"tr",align:null},"Get all miners deals")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/MinerApi#PublicMinersStatsMinerGet"},(0,a.kt)("strong",{parentName:"a"},"PublicMinersStatsMinerGet"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Get")," /public/miners/stats/{miner}"),(0,a.kt)("td",{parentName:"tr",align:null},"Get miner stats")))),(0,a.kt)("h1",{id:"publicminersdealsminerget"},(0,a.kt)("strong",{parentName:"h1"},"PublicMinersDealsMinerGet")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PublicMinersDealsMinerGet(ctx, miner, optional)\nGet all miners deals")),(0,a.kt)("p",null,"This endpoint returns all miners deals"),(0,a.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"context.Context")),(0,a.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"miner")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Filter by miner"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"optional")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"*MinerApiPublicMinersDealsMinerGetOpts")),(0,a.kt)("td",{parentName:"tr",align:null},"optional parameters"),(0,a.kt)("td",{parentName:"tr",align:null},"nil if no parameters")))),(0,a.kt)("h3",{id:"optional-parameters"},"Optional Parameters"),(0,a.kt)("p",null,"Optional parameters are passed through a pointer to a MinerApiPublicMinersDealsMinerGetOpts struct"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes")))),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"ignoreFailed")," | ",(0,a.kt)("strong",{parentName:"p"},"optional.String"),"| Ignore Failed | "),(0,a.kt)("h3",{id:"return-type"},"Return type"),(0,a.kt)("p",null," (empty response body)"),(0,a.kt)("h3",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,a.kt)("h1",{id:"publicminersstatsminerget"},(0,a.kt)("strong",{parentName:"h1"},"PublicMinersStatsMinerGet")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PublicMinersStatsMinerGet(ctx, miner)\nGet miner stats")),(0,a.kt)("p",null,"This endpoint returns miner stats"),(0,a.kt)("h3",{id:"required-parameters-1"},"Required Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"context.Context")),(0,a.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"miner")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Filter by miner"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"return-type-1"},"Return type"),(0,a.kt)("p",null," (empty response body)"),(0,a.kt)("h3",{id:"authorization-1"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")))}m.isMDXComponent=!0}}]);