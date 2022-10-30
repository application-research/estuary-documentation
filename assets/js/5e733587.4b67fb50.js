"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[9975],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},l="SwaggerClient::MetricsApi",o={unversionedId:"ruby/docs/MetricsApi",id:"ruby/docs/MetricsApi",title:"SwaggerClient::MetricsApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/ruby/docs/MetricsApi.md",sourceDirName:"ruby/docs",slug:"/ruby/docs/MetricsApi",permalink:"/estuary-documentation/clients/ruby/docs/MetricsApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SwaggerClient::MainUserStatsResponse",permalink:"/estuary-documentation/clients/ruby/docs/MainUserStatsResponse"},next:{title:"SwaggerClient::MinerApi",permalink:"/estuary-documentation/clients/ruby/docs/MinerApi"}},c={},p=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swaggerclientmetricsapi"},"SwaggerClient::MetricsApi"),(0,a.kt)("p",null,"All URIs are relative to ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/ruby/docs/MetricsApi#public_metrics_deals_on_chain_get"},(0,a.kt)("strong",{parentName:"a"},"public_metrics_deals_on_chain_get"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"GET")," /public/metrics/deals-on-chain"),(0,a.kt)("td",{parentName:"tr",align:null},"Get deal metrics")))),(0,a.kt)("h1",{id:"public_metrics_deals_on_chain_get"},(0,a.kt)("strong",{parentName:"h1"},"public_metrics_deals_on_chain_get")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"public_metrics_deals_on_chain_get")),(0,a.kt)("p",null,"Get deal metrics"),(0,a.kt)("p",null,"This endpoint is used to get deal metrics"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# load the gem\nrequire 'swagger_client'\n# setup authorization\nSwaggerClient.configure do |config|\n  # Configure API key authorization: bearerAuth\n  config.api_key['Authorization'] = 'YOUR API KEY'\n  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)\n  #config.api_key_prefix['Authorization'] = 'Bearer'\nend\n\napi_instance = SwaggerClient::MetricsApi.new\n\nbegin\n  #Get deal metrics\n  api_instance.public_metrics_deals_on_chain_get\nrescue SwaggerClient::ApiError => e\n  puts \"Exception when calling MetricsApi->public_metrics_deals_on_chain_get: #{e}\"\nend\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This endpoint does not need any parameter."),(0,a.kt)("h3",{id:"return-type"},"Return type"),(0,a.kt)("p",null,"nil (empty response body)"),(0,a.kt)("h3",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/ruby/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")))}u.isMDXComponent=!0}}]);