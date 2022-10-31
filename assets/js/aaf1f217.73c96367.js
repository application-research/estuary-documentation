"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[2754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={},l="DefaultApi",o={unversionedId:"java/docs/DefaultApi",id:"java/docs/DefaultApi",title:"DefaultApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/java/docs/DefaultApi.md",sourceDirName:"java/docs",slug:"/java/docs/DefaultApi",permalink:"/estuary-documentation/clients/java/docs/DefaultApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DealsApi",permalink:"/estuary-documentation/clients/java/docs/DealsApi"},next:{title:"MainCreateCollectionBody",permalink:"/estuary-documentation/clients/java/docs/MainCreateCollectionBody"}},p={},u=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defaultapi"},"DefaultApi"),(0,n.kt)("p",null,"All URIs are relative to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/DefaultApi#dealTransferStatusPost"},(0,n.kt)("strong",{parentName:"a"},"dealTransferStatusPost"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"POST")," /deal/transfer/status"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("a",{name:"dealTransferStatusPost"}),"# **dealTransferStatusPost** > dealTransferStatusPost()",(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.DefaultApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nDefaultApi apiInstance = new DefaultApi();\ntry {\n    apiInstance.dealTransferStatusPost();\n} catch (ApiException e) {\n    System.err.println("Exception when calling DefaultApi#dealTransferStatusPost");\n    e.printStackTrace();\n}\n')),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null,"null (empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": Not defined")))}c.isMDXComponent=!0}}]);