"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8953],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(c,l(l({ref:e},u),{},{components:n})):a.createElement(c,l({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77313:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="PinningApi",p={unversionedId:"bash/docs/PinningApi",id:"bash/docs/PinningApi",title:"PinningApi",description:"All URIs are relative to",source:"@site/clients/bash/docs/PinningApi.md",sourceDirName:"bash/docs",slug:"/bash/docs/PinningApi",permalink:"/estuary-documentation/clients/bash/docs/PinningApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PeersApi",permalink:"/estuary-documentation/clients/bash/docs/PeersApi"},next:{title:"PublicApi",permalink:"/estuary-documentation/clients/bash/docs/PublicApi"}},o={},s=[{value:"<strong>pinningPinsGet</strong>",id:"pinningpinsget",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"<strong>pinningPinsPinidDelete</strong>",id:"pinningpinspiniddelete",level:2},{value:"Example",id:"example-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"<strong>pinningPinsPinidGet</strong>",id:"pinningpinspinidget",level:2},{value:"Example",id:"example-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3},{value:"<strong>pinningPinsPinidPost</strong>",id:"pinningpinspinidpost",level:2},{value:"Example",id:"example-3",level:3},{value:"Parameters",id:"parameters-3",level:3},{value:"Return type",id:"return-type-3",level:3},{value:"Authorization",id:"authorization-3",level:3},{value:"HTTP request headers",id:"http-request-headers-3",level:3},{value:"<strong>pinningPinsPost</strong>",id:"pinningpinspost",level:2},{value:"Example",id:"example-4",level:3},{value:"Parameters",id:"parameters-4",level:3},{value:"Return type",id:"return-type-4",level:3},{value:"Authorization",id:"authorization-4",level:3},{value:"HTTP request headers",id:"http-request-headers-4",level:3}],u={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pinningapi"},"PinningApi"),(0,r.kt)("p",null,"All URIs are relative to **"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/bash/docs/PinningApi#pinningPinsGet"},(0,r.kt)("strong",{parentName:"a"},"pinningPinsGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /pinning/pins"),(0,r.kt)("td",{parentName:"tr",align:null},"List all pin status objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/bash/docs/PinningApi#pinningPinsPinidDelete"},(0,r.kt)("strong",{parentName:"a"},"pinningPinsPinidDelete"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DELETE")," /pinning/pins/{pinid}"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a pinned object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/bash/docs/PinningApi#pinningPinsPinidGet"},(0,r.kt)("strong",{parentName:"a"},"pinningPinsPinidGet"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"GET")," /pinning/pins/{pinid}"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a pin status object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/bash/docs/PinningApi#pinningPinsPinidPost"},(0,r.kt)("strong",{parentName:"a"},"pinningPinsPinidPost"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /pinning/pins/{pinid}"),(0,r.kt)("td",{parentName:"tr",align:null},"Replace a pinned object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/bash/docs/PinningApi#pinningPinsPost"},(0,r.kt)("strong",{parentName:"a"},"pinningPinsPost"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"POST")," /pinning/pins"),(0,r.kt)("td",{parentName:"tr",align:null},"Add and pin object")))),(0,r.kt)("h2",{id:"pinningpinsget"},(0,r.kt)("strong",{parentName:"h2"},"pinningPinsGet")),(0,r.kt)("p",null,"List all pin status objects"),(0,r.kt)("p",null,"This endpoint lists all pin status objects"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pinningPinsGet\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"This endpoint does not need any parameter."),(0,r.kt)("h3",{id:"return-type"},"Return type"),(0,r.kt)("p",null,"(empty response body)"),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not Applicable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/"},"[Back to README]")),(0,r.kt)("h2",{id:"pinningpinspiniddelete"},(0,r.kt)("strong",{parentName:"h2"},"pinningPinsPinidDelete")),(0,r.kt)("p",null,"Delete a pinned object"),(0,r.kt)("p",null,"This endpoint deletes a pinned object."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pinningPinsPinidDelete pinid=value\n")),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pinid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Pin ID"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type-1"},"Return type"),(0,r.kt)("p",null,"(empty response body)"),(0,r.kt)("h3",{id:"authorization-1"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not Applicable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/"},"[Back to README]")),(0,r.kt)("h2",{id:"pinningpinspinidget"},(0,r.kt)("strong",{parentName:"h2"},"pinningPinsPinidGet")),(0,r.kt)("p",null,"Get a pin status object"),(0,r.kt)("p",null,"This endpoint returns a pin status object."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pinningPinsPinidGet pinid=value\n")),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pinid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"cid"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type-2"},"Return type"),(0,r.kt)("p",null,"(empty response body)"),(0,r.kt)("h3",{id:"authorization-2"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not Applicable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/"},"[Back to README]")),(0,r.kt)("h2",{id:"pinningpinspinidpost"},(0,r.kt)("strong",{parentName:"h2"},"pinningPinsPinidPost")),(0,r.kt)("p",null,"Replace a pinned object"),(0,r.kt)("p",null,"This endpoint replaces a pinned object."),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pinningPinsPinidPost pinid=value\n")),(0,r.kt)("h3",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pinid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Pin ID"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type-3"},"Return type"),(0,r.kt)("p",null,"(empty response body)"),(0,r.kt)("h3",{id:"authorization-3"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-3"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not Applicable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/"},"[Back to README]")),(0,r.kt)("h2",{id:"pinningpinspost"},(0,r.kt)("strong",{parentName:"h2"},"pinningPinsPost")),(0,r.kt)("p",null,"Add and pin object"),(0,r.kt)("p",null,"This endpoint adds a pin to the IPFS daemon."),(0,r.kt)("h3",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pinningPinsPost cid=value name=value\n")),(0,r.kt)("h3",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"cid"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-type-4"},"Return type"),(0,r.kt)("p",null,"(empty response body)"),(0,r.kt)("h3",{id:"authorization-4"},"Authorization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#bearerAuth"},"bearerAuth")),(0,r.kt)("h3",{id:"http-request-headers-4"},"HTTP request headers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type"),": Not Applicable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-models"},"[Back to Model list]")," ",(0,r.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/"},"[Back to README]")))}d.isMDXComponent=!0}}]);