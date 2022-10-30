"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[7999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,y=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(y,i(i({ref:t},l),{},{components:r})):o.createElement(y,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:2},i="Estuary Swagger Contribution",s={unversionedId:"Estuary API Docs/swagger-contributing",id:"Estuary API Docs/swagger-contributing",title:"Estuary Swagger Contribution",description:"Swagger is the most widely used tooling ecosystem for developing APIs with the OpenAPI Specification(OAS). Not only its an open source tool for build APIs, it's also a collaborative tool that encourage different set of developers to extend APIs that decouples the documentation from the code (client and server stubs).",source:"@site/docs/Estuary API Docs/swagger-contributing.md",sourceDirName:"Estuary API Docs",slug:"/Estuary API Docs/swagger-contributing",permalink:"/estuary-documentation/docs/Estuary API Docs/swagger-contributing",draft:!1,editUrl:"https://github.com/application-research/estuary-documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Estuary API Docs/swagger-contributing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Estuary API Swagger Documentation",permalink:"/estuary-documentation/docs/Estuary API Docs/swagger-intro"},next:{title:"Database Schema",permalink:"/estuary-documentation/docs/Source Code Reference/Database Schema"}},c={},u=[{value:"Identify and plan your extension",id:"identify-and-plan-your-extension",level:2},{value:"Step 1: Checkout estuary-doc",id:"step-1-checkout-estuary-doc",level:2},{value:"Step 2: Open the swagger file for modification",id:"step-2-open-the-swagger-file-for-modification",level:2},{value:"Step 3: Generate your code",id:"step-3-generate-your-code",level:2},{value:"Step 4: Modify the generated code",id:"step-4-modify-the-generated-code",level:2},{value:"Step 5: Commit your changes",id:"step-5-commit-your-changes",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"estuary-swagger-contribution"},"Estuary Swagger Contribution"),(0,n.kt)("p",null,"Swagger is the most widely used tooling ecosystem for developing APIs with the OpenAPI Specification(OAS). Not only its an open source tool for build APIs, it's also a collaborative tool that encourage different set of developers to extend APIs that decouples the documentation from the code (client and server stubs)."),(0,n.kt)("h2",{id:"identify-and-plan-your-extension"},"Identify and plan your extension"),(0,n.kt)("p",null,"Like any other design or software contribution, you need to plan out your endpoints. Make sure that all of these endpoints have the parameters, requests body types, responses, description and summary. Be as detailed as possible but the most important thing is to make the documentation understandable to the developers. "),(0,n.kt)("h2",{id:"step-1-checkout-estuary-doc"},"Step 1: Checkout estuary-doc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/application-research/estuary-docs\n")),(0,n.kt)("h2",{id:"step-2-open-the-swagger-file-for-modification"},"Step 2: Open the swagger file for modification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open /public/static/swagger"),(0,n.kt)("li",{parentName:"ul"},"Create a new version folder example: v1_0_1"),(0,n.kt)("li",{parentName:"ul"},"Add your changes")),(0,n.kt)("h2",{id:"step-3-generate-your-code"},"Step 3: Generate your code"),(0,n.kt)("p",null,"Generate the client or server stubs you need. You can use the swaggerhub for this."),(0,n.kt)("h2",{id:"step-4-modify-the-generated-code"},"Step 4: Modify the generated code"),(0,n.kt)("p",null,"Swagger generated code is not the best (it doesn't comply with any standards) but it does the majority of the work, and it works! Make sure to triple check the generate code, ensure that the code complies with the defined standards of your project."),(0,n.kt)("h2",{id:"step-5-commit-your-changes"},"Step 5: Commit your changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modify the swagger-ui-page.tsx "),(0,n.kt)("li",{parentName:"ul"},"Use the new URL static/swagger/v1_0_1/swagger.json"),(0,n.kt)("li",{parentName:"ul"},"Create the PR and set it for review.")))}d.isMDXComponent=!0}}]);