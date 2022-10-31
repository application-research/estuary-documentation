"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[2841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=p(r),d=n,h=g["".concat(u,".").concat(d)]||g[d]||c[d]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1},i="Estuary API Swagger Documentation",s={unversionedId:"Estuary API Docs/swagger-intro",id:"Estuary API Docs/swagger-intro",title:"Estuary API Swagger Documentation",description:"Swagger is the most widely used tooling ecosystem for developing APIs with the OpenAPI Specification(OAS).",source:"@site/docs/Estuary API Docs/swagger-intro.md",sourceDirName:"Estuary API Docs",slug:"/Estuary API Docs/swagger-intro",permalink:"/estuary-documentation/Estuary API Docs/swagger-intro",draft:!1,editUrl:"https://github.com/application-research/estuary-documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Estuary API Docs/swagger-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Working with Estuary API Swagger Docs",permalink:"/estuary-documentation/Tutorial/tutorial-working-with-swagger"},next:{title:"Estuary Swagger Contribution",permalink:"/estuary-documentation/Estuary API Docs/swagger-contributing"}},u={},p=[{value:"How to get started with Estuary Swagger",id:"how-to-get-started-with-estuary-swagger",level:2},{value:"Step 1: Get your API Key",id:"step-1-get-your-api-key",level:3},{value:"Step 2: Open the Swagger Page on the new tab",id:"step-2-open-the-swagger-page-on-the-new-tab",level:3},{value:"Step 3: Run and test some of the endpoints",id:"step-3-run-and-test-some-of-the-endpoints",level:3},{value:"Additional Reference",id:"additional-reference",level:2}],l={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"estuary-api-swagger-documentation"},"Estuary API Swagger Documentation"),(0,n.kt)("p",null,"Swagger is the most widely used tooling ecosystem for developing APIs with the OpenAPI Specification(OAS)."),(0,n.kt)("p",null,"The Estuary API Swagger to document and extend it's APIs. "),(0,n.kt)("h2",{id:"how-to-get-started-with-estuary-swagger"},"How to get started with Estuary Swagger"),(0,n.kt)("p",null,"Swagger has a great interface that allows developers to test out the endpoints without having to download and run the node. "),(0,n.kt)("h3",{id:"step-1-get-your-api-key"},"Step 1: Get your API Key"),(0,n.kt)("p",null,"You can view the quick guide on how to get an API key ",(0,n.kt)("a",{parentName:"p",href:"../Tutorial/tutorial-get-an-api-key"},"here")),(0,n.kt)("h3",{id:"step-2-open-the-swagger-page-on-the-new-tab"},"Step 2: Open the Swagger Page on the new tab"),(0,n.kt)("p",null,"Open the Estuary API Swagger UI ",(0,n.kt)("a",{parentName:"p",href:"https://docs.estuary.tech/swagger-ui-page"},"here")),(0,n.kt)("p",null,"Once you have the API key, you would need to put this key on the Authorized modal popup."),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"API Key placement",src:r(20555).Z,width:"1358",height:"605"})),(0,n.kt)("h3",{id:"step-3-run-and-test-some-of-the-endpoints"},"Step 3: Run and test some of the endpoints"),(0,n.kt)("p",null,"Go ",(0,n.kt)("a",{parentName:"p",href:"../Tutorial/tutorial-working-with-swagger"},"here")," to test out a few examples."),(0,n.kt)("h2",{id:"additional-reference"},"Additional Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The swagger json is available ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/application-research/estuary/master/docs/swagger.json"},"here")," You can load this in any swagger-ui compliant client to test it with your own set of tools."),(0,n.kt)("li",{parentName:"ul"},"Open the Estuary API Swagger UI ",(0,n.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/swagger-ui-page"},"here")),(0,n.kt)("li",{parentName:"ul"},"Open the SwaggerHub open api for estuary ",(0,n.kt)("a",{parentName:"li",href:"https://app.swaggerhub.com/apis/alvin-reyes/estuary-api/1.0.0"},"here"))))}c.isMDXComponent=!0},20555:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/api_key_here-2a29256d471e0cf54f3e72489acbf080.png"}}]);