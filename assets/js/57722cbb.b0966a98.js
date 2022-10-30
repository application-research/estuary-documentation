"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[1609],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(r),k=n,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||o;return r?a.createElement(c,i(i({ref:e},s),{},{components:r})):a.createElement(c,i({ref:e},s))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50967:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},i="AutoretrieveApi",l={unversionedId:"go/docs/AutoretrieveApi",id:"go/docs/AutoretrieveApi",title:"\\AutoretrieveApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/go/docs/AutoretrieveApi.md",sourceDirName:"go/docs",slug:"/go/docs/AutoretrieveApi",permalink:"/estuary-documentation/clients/go/docs/AutoretrieveApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\\AdminApi",permalink:"/estuary-documentation/clients/go/docs/AdminApi"},next:{title:"\\CollectionsApi",permalink:"/estuary-documentation/clients/go/docs/CollectionsApi"}},u={},p=[{value:"Required Parameters",id:"required-parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Required Parameters",id:"required-parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Required Parameters",id:"required-parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}],s={toc:p};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"autoretrieveapi"},"\\AutoretrieveApi"),(0,n.kt)("p",null,"All URIs are relative to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/AutoretrieveApi#AdminAutoretrieveInitPost"},(0,n.kt)("strong",{parentName:"a"},"AdminAutoretrieveInitPost"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Post")," /admin/autoretrieve/init"),(0,n.kt)("td",{parentName:"tr",align:null},"Register autoretrieve server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/AutoretrieveApi#AdminAutoretrieveListGet"},(0,n.kt)("strong",{parentName:"a"},"AdminAutoretrieveListGet"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Get")," /admin/autoretrieve/list"),(0,n.kt)("td",{parentName:"tr",align:null},"List autoretrieve servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/AutoretrieveApi#AutoretrieveHeartbeatPost"},(0,n.kt)("strong",{parentName:"a"},"AutoretrieveHeartbeatPost"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Post")," /autoretrieve/heartbeat"),(0,n.kt)("td",{parentName:"tr",align:null},"Marks autoretrieve server as up")))),(0,n.kt)("h1",{id:"adminautoretrieveinitpost"},(0,n.kt)("strong",{parentName:"h1"},"AdminAutoretrieveInitPost")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"AdminAutoretrieveInitPost(ctx, addresses, pubKey)\nRegister autoretrieve server")),(0,n.kt)("p",null,"This endpoint registers a new autoretrieve server"),(0,n.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ctx")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"context.Context")),(0,n.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"addresses")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s comma-separated list of addresses"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"pubKey")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s public key"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null," (empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,n.kt)("h1",{id:"adminautoretrievelistget"},(0,n.kt)("strong",{parentName:"h1"},"AdminAutoretrieveListGet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"AdminAutoretrieveListGet(ctx, )\nList autoretrieve servers")),(0,n.kt)("p",null,"This endpoint lists all registered autoretrieve servers"),(0,n.kt)("h3",{id:"required-parameters-1"},"Required Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type-1"},"Return type"),(0,n.kt)("p",null," (empty response body)"),(0,n.kt)("h3",{id:"authorization-1"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")),(0,n.kt)("h1",{id:"autoretrieveheartbeatpost"},(0,n.kt)("strong",{parentName:"h1"},"AutoretrieveHeartbeatPost")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"AutoretrieveHeartbeatPost(ctx, token)\nMarks autoretrieve server as up")),(0,n.kt)("p",null,"This endpoint updates the lastConnection field for autoretrieve"),(0,n.kt)("h3",{id:"required-parameters-2"},"Required Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ctx")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"context.Context")),(0,n.kt)("td",{parentName:"tr",align:null},"context for authentication, logging, cancellation, deadlines, tracing, etc."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"token")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s auth token"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"return-type-2"},"Return type"),(0,n.kt)("p",null," (empty response body)"),(0,n.kt)("h3",{id:"authorization-2"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")))}d.isMDXComponent=!0}}]);