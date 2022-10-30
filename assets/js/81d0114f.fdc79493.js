"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},o="MetricsApi",l={unversionedId:"go/docs/MetricsApi",id:"go/docs/MetricsApi",title:"\\MetricsApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/go/docs/MetricsApi.md",sourceDirName:"go/docs",slug:"/go/docs/MetricsApi",permalink:"/estuary-documentation/clients/go/docs/MetricsApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MainUserStatsResponse",permalink:"/estuary-documentation/clients/go/docs/MainUserStatsResponse"},next:{title:"\\MinerApi",permalink:"/estuary-documentation/clients/go/docs/MinerApi"}},s={},c=[{value:"Required Parameters",id:"required-parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metricsapi"},"\\MetricsApi"),(0,a.kt)("p",null,"All URIs are relative to ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/MetricsApi#PublicMetricsDealsOnChainGet"},(0,a.kt)("strong",{parentName:"a"},"PublicMetricsDealsOnChainGet"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Get")," /public/metrics/deals-on-chain"),(0,a.kt)("td",{parentName:"tr",align:null},"Get deal metrics")))),(0,a.kt)("h1",{id:"publicmetricsdealsonchainget"},(0,a.kt)("strong",{parentName:"h1"},"PublicMetricsDealsOnChainGet")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PublicMetricsDealsOnChainGet(ctx, )\nGet deal metrics")),(0,a.kt)("p",null,"This endpoint is used to get deal metrics"),(0,a.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,a.kt)("p",null,"This endpoint does not need any parameter."),(0,a.kt)("h3",{id:"return-type"},"Return type"),(0,a.kt)("p",null," (empty response body)"),(0,a.kt)("h3",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")))}u.isMDXComponent=!0}}]);