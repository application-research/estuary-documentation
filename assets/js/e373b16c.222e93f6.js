"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},l="DefaultApi",i={unversionedId:"go/docs/DefaultApi",id:"go/docs/DefaultApi",title:"\\DefaultApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/go/docs/DefaultApi.md",sourceDirName:"go/docs",slug:"/go/docs/DefaultApi",permalink:"/estuary-documentation/clients/go/docs/DefaultApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\\DealsApi",permalink:"/estuary-documentation/clients/go/docs/DealsApi"},next:{title:"MainCreateCollectionBody",permalink:"/estuary-documentation/clients/go/docs/MainCreateCollectionBody"}},u={},p=[{value:"Required Parameters",id:"required-parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defaultapi"},"\\DefaultApi"),(0,n.kt)("p",null,"All URIs are relative to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/go/docs/DefaultApi#DealTransferStatusPost"},(0,n.kt)("strong",{parentName:"a"},"DealTransferStatusPost"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Post")," /deal/transfer/status"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h1",{id:"dealtransferstatuspost"},(0,n.kt)("strong",{parentName:"h1"},"DealTransferStatusPost")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"DealTransferStatusPost(ctx, )")),(0,n.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null," (empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": Not defined")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/#documentation-for-models"},"[Back to Model list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/go/"},"[Back to README]")))}c.isMDXComponent=!0}}]);