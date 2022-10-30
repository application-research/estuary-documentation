"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={},o="WWW::SwaggerClient::DefaultApi",i={unversionedId:"perl/docs/DefaultApi",id:"perl/docs/DefaultApi",title:"WWW::SwaggerClient::DefaultApi",description:"Load the API package",source:"@site/clients/perl/docs/DefaultApi.md",sourceDirName:"perl/docs",slug:"/perl/docs/DefaultApi",permalink:"/estuary-documentation/clients/perl/docs/DefaultApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WWW::SwaggerClient::DealsApi",permalink:"/estuary-documentation/clients/perl/docs/DealsApi"},next:{title:"WWW::SwaggerClient::Object::MainCreateCollectionBody",permalink:"/estuary-documentation/clients/perl/docs/MainCreateCollectionBody"}},p={},u=[{value:"Load the API package",id:"load-the-api-package",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wwwswaggerclientdefaultapi"},"WWW::SwaggerClient::DefaultApi"),(0,n.kt)("h2",{id:"load-the-api-package"},"Load the API package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"use WWW::SwaggerClient::Object::DefaultApi;\n")),(0,n.kt)("p",null,"All URIs are relative to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/perl/docs/DefaultApi#deal_transfer_status_post"},(0,n.kt)("strong",{parentName:"a"},"deal_transfer_status_post"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"POST")," /deal/transfer/status"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h1",{id:"deal_transfer_status_post"},(0,n.kt)("strong",{parentName:"h1"},"deal_transfer_status_post")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"deal_transfer_status_post()")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-perl"},"use Data::Dumper;\nuse WWW::SwaggerClient::DefaultApi;\nmy $api_instance = WWW::SwaggerClient::DefaultApi->new(\n\n    # Configure API key authorization: bearerAuth\n    api_key => {'Authorization' => 'YOUR_API_KEY'},\n    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n    #api_key_prefix => {'Authorization' => 'Bearer'},\n);\n\n\neval { \n    $api_instance->deal_transfer_status_post();\n};\nif ($@) {\n    warn \"Exception when calling DefaultApi->deal_transfer_status_post: $@\\n\";\n}\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null,"void (empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/perl/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": Not defined")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/perl/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/perl/#documentation-for-models"},"[Back to Model list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/perl/"},"[Back to README]")))}c.isMDXComponent=!0}}]);