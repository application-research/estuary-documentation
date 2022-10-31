"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8639],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31889:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i="PublicApi",o={unversionedId:"go/docs/PublicApi",id:"go/docs/PublicApi",title:"\\PublicApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/go/docs/PublicApi.md",sourceDirName:"go/docs",slug:"/go/docs/PublicApi",permalink:"/estuary-documentation/clients/go/docs/PublicApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\\PinningApi",permalink:"/estuary-documentation/clients/go/docs/PinningApi"},next:{title:"\\UserApi",permalink:"/estuary-documentation/clients/go/docs/UserApi"}},p={},u=[{value:"Required Parameters",id:"required-parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Required Parameters",id:"required-parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Required Parameters",id:"required-parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3},{value:"Required Parameters",id:"required-parameters-3",level:3},{value:"Optional Parameters",id:"optional-parameters",level:3},{value:"Return type",id:"return-type-3",level:3},{value:"Authorization",id:"authorization-3",level:3},{value:"HTTP request headers",id:"http-request-headers-3",level:3},{value:"Required Parameters",id:"required-parameters-4",level:3},{value:"Return type",id:"return-type-4",level:3},{value:"Authorization",id:"authorization-4",level:3},{value:"HTTP request headers",id:"http-request-headers-4",level:3},{value:"Required Parameters",id:"required-parameters-5",level:3},{value:"Return type",id:"return-type-5",level:3},{value:"Authorization",id:"authorization-5",level:3},{value:"HTTP request headers",id:"http-request-headers-5",level:3},{value:"Required Parameters",id:"required-parameters-6",level:3},{value:"Return type",id:"return-type-6",level:3},{value:"Authorization",id:"authorization-6",level:3},{value:"HTTP request headers",id:"http-request-headers-6",level:3},{value:"Required Parameters",id:"required-parameters-7",level:3},{value:"Return type",id:"return-type-7",level:3},{value:"Authorization",id:"authorization-7",level:3},{value:"HTTP request headers",id:"http-request-headers-7",level:3},{value:"Required Parameters",id:"required-parameters-8",level:3},{value:"Return type",id:"return-type-8",level:3},{value:"Authorization",id:"authorization-8",level:3},{value:"HTTP request headers",id:"http-request-headers-8",level:3},{value:"Required Parameters",id:"required-parameters-9",level:3},{value:"Return type",id:"return-type-9",level:3},{value:"Authorization",id:"authorization-9",level:3},{value:"HTTP request headers",id:"http-request-headers-9",level:3}],s={toc:u};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publicapi"},"\\PublicApi"),(0,r.kt)("p",null,"All URIs are relative to ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicByCidCidGet"},(0,r.kt)("strong",{parentName:"a"},"PublicByCidCidGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/by-cid/{cid}"),(0,r.kt)("td",{parentName:"tr",align:null},"Get Content by Cid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicInfoGet"},(0,r.kt)("strong",{parentName:"a"},"PublicInfoGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/info"),(0,r.kt)("td",{parentName:"tr",align:null},"Get public node info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicMetricsDealsOnChainGet"},(0,r.kt)("strong",{parentName:"a"},"PublicMetricsDealsOnChainGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/metrics/deals-on-chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Get deal metrics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicMinersDealsMinerGet"},(0,r.kt)("strong",{parentName:"a"},"PublicMinersDealsMinerGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/miners/deals/{miner}"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all miners deals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicMinersFailuresMinerGet"},(0,r.kt)("strong",{parentName:"a"},"PublicMinersFailuresMinerGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/miners/failures/{miner}"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all miners")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicMinersGet"},(0,r.kt)("strong",{parentName:"a"},"PublicMinersGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/miners"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all miners")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicMinersStatsMinerGet"},(0,r.kt)("strong",{parentName:"a"},"PublicMinersStatsMinerGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/miners/stats/{miner}"),(0,r.kt)("td",{parentName:"tr",align:null},"Get miner stats")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicNetAddrsGet"},(0,r.kt)("strong",{parentName:"a"},"PublicNetAddrsGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/net/addrs"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Addrs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicNetPeersGet"},(0,r.kt)("strong",{parentName:"a"},"PublicNetPeersGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/net/peers"),(0,r.kt)("td",{parentName:"tr",align:null},"Net Peers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/PublicApi#PublicStatsGet"},(0,r.kt)("strong",{parentName:"a"},"PublicStatsGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Get")," /public/stats"),(0,r.kt)("td",{parentName:"tr",align:null},"Public stats")))),(0,r.kt)("h1",{id:"publicbycidcidget"},(0,r.kt)("strong",{parentName:"h1"},"PublicByCidCidGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicByCidCidGet(ctx, cid)\nGet Content by Cid")),(0,r.kt)("p",null,"This endpoint returns the content associated with a CID"),(0,r.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"context.Context")),(0,r.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Cid"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicinfoget"},(0,r.kt)("strong",{parentName:"h1"},"PublicInfoGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicInfoGet(ctx, )\nGet public node info")),(0,r.kt)("p",null,"This endpoint returns information about the node"),(0,r.kt)("h3",{id:"required-parameters-1"},"Required Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type-1"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-1"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicmetricsdealsonchainget"},(0,r.kt)("strong",{parentName:"h1"},"PublicMetricsDealsOnChainGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicMetricsDealsOnChainGet(ctx, )\nGet deal metrics")),(0,r.kt)("p",null,"This endpoint is used to get deal metrics"),(0,r.kt)("h3",{id:"required-parameters-2"},"Required Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type-2"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-2"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicminersdealsminerget"},(0,r.kt)("strong",{parentName:"h1"},"PublicMinersDealsMinerGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicMinersDealsMinerGet(ctx, miner, optional)\nGet all miners deals")),(0,r.kt)("p",null,"This endpoint returns all miners deals"),(0,r.kt)("h3",{id:"required-parameters-3"},"Required Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"context.Context")),(0,r.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"miner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by miner"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"optional")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"*PublicApiPublicMinersDealsMinerGetOpts")),(0,r.kt)("td",{parentName:"tr",align:null},"optional parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"nil if no parameters")))),(0,r.kt)("h3",{id:"optional-parameters"},"Optional Parameters"),(0,r.kt)("p",null,"Optional parameters are passed through a pointer to a PublicApiPublicMinersDealsMinerGetOpts struct"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes")))),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"ignoreFailed")," | ",(0,r.kt)("strong",{parentName:"p"},"optional.String"),"| Ignore Failed | "),(0,r.kt)("h3",{id:"return-type-3"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-3"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-3"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicminersfailuresminerget"},(0,r.kt)("strong",{parentName:"h1"},"PublicMinersFailuresMinerGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicMinersFailuresMinerGet(ctx, miner)\nGet all miners")),(0,r.kt)("p",null,"This endpoint returns all miners"),(0,r.kt)("h3",{id:"required-parameters-4"},"Required Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"context.Context")),(0,r.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"miner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by miner"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type-4"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-4"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-4"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicminersget"},(0,r.kt)("strong",{parentName:"h1"},"PublicMinersGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicMinersGet(ctx, )\nGet all miners")),(0,r.kt)("p",null,"This endpoint returns all miners"),(0,r.kt)("h3",{id:"required-parameters-5"},"Required Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type-5"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-5"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-5"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicminersstatsminerget"},(0,r.kt)("strong",{parentName:"h1"},"PublicMinersStatsMinerGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicMinersStatsMinerGet(ctx, miner)\nGet miner stats")),(0,r.kt)("p",null,"This endpoint returns miner stats"),(0,r.kt)("h3",{id:"required-parameters-6"},"Required Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ctx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"context.Context")),(0,r.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"miner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by miner"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type-6"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-6"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-6"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicnetaddrsget"},(0,r.kt)("strong",{parentName:"h1"},"PublicNetAddrsGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[]string PublicNetAddrsGet(ctx, )\nNet Addrs")),(0,r.kt)("p",null,"This endpoint is used to get net addrs"),(0,r.kt)("h3",{id:"required-parameters-7"},"Required Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type-7"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[]string")),(0,r.kt)("h3",{id:"authorization-7"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-7"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicnetpeersget"},(0,r.kt)("strong",{parentName:"h1"},"PublicNetPeersGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[]string PublicNetPeersGet(ctx, )\nNet Peers")),(0,r.kt)("p",null,"This endpoint is used to get net peers"),(0,r.kt)("h3",{id:"required-parameters-8"},"Required Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type-8"},"Return type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[]string")),(0,r.kt)("h3",{id:"authorization-8"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-8"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,r.kt)("h1",{id:"publicstatsget"},(0,r.kt)("strong",{parentName:"h1"},"PublicStatsGet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PublicStatsGet(ctx, )\nPublic stats")),(0,r.kt)("p",null,"This endpoint is used to get public stats."),(0,r.kt)("h3",{id:"required-parameters-9"},"Required Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type-9"},"Return type"),(0,r.kt)("p",null," (empty response body)"),(0,r.kt)("h3",{id:"authorization-9"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-9"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")))}d.isMDXComponent=!0}}]);