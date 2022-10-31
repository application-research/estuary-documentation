"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="estuary-client.AutoretrieveApi",p={unversionedId:"python/docs/AutoretrieveApi",id:"python/docs/AutoretrieveApi",title:"estuary-client.AutoretrieveApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/python/docs/AutoretrieveApi.md",sourceDirName:"python/docs",slug:"/python/docs/AutoretrieveApi",permalink:"/estuary-documentation/clients/python/docs/AutoretrieveApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"estuary-client.AdminApi",permalink:"/estuary-documentation/clients/python/docs/AdminApi"},next:{title:"estuary-client.CollectionsApi",permalink:"/estuary-documentation/clients/python/docs/CollectionsApi"}},l={},u=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Example",id:"example-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Example",id:"example-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"estuary-clientautoretrieveapi"},"estuary-client.AutoretrieveApi"),(0,a.kt)("p",null,"All URIs are relative to ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/python/docs/AutoretrieveApi#admin_autoretrieve_init_post"},(0,a.kt)("strong",{parentName:"a"},"admin_autoretrieve_init_post"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"POST")," /admin/autoretrieve/init"),(0,a.kt)("td",{parentName:"tr",align:null},"Register autoretrieve server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/python/docs/AutoretrieveApi#admin_autoretrieve_list_get"},(0,a.kt)("strong",{parentName:"a"},"admin_autoretrieve_list_get"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"GET")," /admin/autoretrieve/list"),(0,a.kt)("td",{parentName:"tr",align:null},"List autoretrieve servers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/python/docs/AutoretrieveApi#autoretrieve_heartbeat_post"},(0,a.kt)("strong",{parentName:"a"},"autoretrieve_heartbeat_post"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"POST")," /autoretrieve/heartbeat"),(0,a.kt)("td",{parentName:"tr",align:null},"Marks autoretrieve server as up")))),(0,a.kt)("h1",{id:"admin_autoretrieve_init_post"},(0,a.kt)("strong",{parentName:"h1"},"admin_autoretrieve_init_post")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"admin_autoretrieve_init_post(addresses, pub_key)")),(0,a.kt)("p",null,"Register autoretrieve server"),(0,a.kt)("p",null,"This endpoint registers a new autoretrieve server"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import print_function\nimport time\nimport estuary-client\nfrom estuary-client.rest import ApiException\nfrom pprint import pprint\n\n# Configure API key authorization: bearerAuth\nconfiguration = estuary-client.Configuration()\nconfiguration.api_key['Authorization'] = 'YOUR_API_KEY'\n# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n# configuration.api_key_prefix['Authorization'] = 'Bearer'\n\n# create an instance of the API class\napi_instance = estuary-client.AutoretrieveApi(estuary-client.ApiClient(configuration))\naddresses = 'addresses_example' # str | Autoretrieve's comma-separated list of addresses\npub_key = 'pub_key_example' # str | Autoretrieve's public key\n\ntry:\n    # Register autoretrieve server\n    api_instance.admin_autoretrieve_init_post(addresses, pub_key)\nexcept ApiException as e:\n    print(\"Exception when calling AutoretrieveApi->admin_autoretrieve_init_post: %s\\n\" % e)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"addresses")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"str")),(0,a.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s comma-separated list of addresses"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"pub_key")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"str")),(0,a.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s public key"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"return-type"},"Return type"),(0,a.kt)("p",null,"void (empty response body)"),(0,a.kt)("h3",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#documentation-for-models"},"[Back to Model list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/"},"[Back to README]")),(0,a.kt)("h1",{id:"admin_autoretrieve_list_get"},(0,a.kt)("strong",{parentName:"h1"},"admin_autoretrieve_list_get")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"admin_autoretrieve_list_get()")),(0,a.kt)("p",null,"List autoretrieve servers"),(0,a.kt)("p",null,"This endpoint lists all registered autoretrieve servers"),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import print_function\nimport time\nimport estuary-client\nfrom estuary-client.rest import ApiException\nfrom pprint import pprint\n\n# Configure API key authorization: bearerAuth\nconfiguration = estuary-client.Configuration()\nconfiguration.api_key['Authorization'] = 'YOUR_API_KEY'\n# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n# configuration.api_key_prefix['Authorization'] = 'Bearer'\n\n# create an instance of the API class\napi_instance = estuary-client.AutoretrieveApi(estuary-client.ApiClient(configuration))\n\ntry:\n    # List autoretrieve servers\n    api_instance.admin_autoretrieve_list_get()\nexcept ApiException as e:\n    print(\"Exception when calling AutoretrieveApi->admin_autoretrieve_list_get: %s\\n\" % e)\n")),(0,a.kt)("h3",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"This endpoint does not need any parameter."),(0,a.kt)("h3",{id:"return-type-1"},"Return type"),(0,a.kt)("p",null,"void (empty response body)"),(0,a.kt)("h3",{id:"authorization-1"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#documentation-for-models"},"[Back to Model list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/"},"[Back to README]")),(0,a.kt)("h1",{id:"autoretrieve_heartbeat_post"},(0,a.kt)("strong",{parentName:"h1"},"autoretrieve_heartbeat_post")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"autoretrieve_heartbeat_post(token)")),(0,a.kt)("p",null,"Marks autoretrieve server as up"),(0,a.kt)("p",null,"This endpoint updates the lastConnection field for autoretrieve"),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import print_function\nimport time\nimport estuary-client\nfrom estuary-client.rest import ApiException\nfrom pprint import pprint\n\n# Configure API key authorization: bearerAuth\nconfiguration = estuary-client.Configuration()\nconfiguration.api_key['Authorization'] = 'YOUR_API_KEY'\n# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\n# configuration.api_key_prefix['Authorization'] = 'Bearer'\n\n# create an instance of the API class\napi_instance = estuary-client.AutoretrieveApi(estuary-client.ApiClient(configuration))\ntoken = 'token_example' # str | Autoretrieve's auth token\n\ntry:\n    # Marks autoretrieve server as up\n    api_instance.autoretrieve_heartbeat_post(token)\nexcept ApiException as e:\n    print(\"Exception when calling AutoretrieveApi->autoretrieve_heartbeat_post: %s\\n\" % e)\n")),(0,a.kt)("h3",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"str")),(0,a.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s auth token"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"return-type-2"},"Return type"),(0,a.kt)("p",null,"void (empty response body)"),(0,a.kt)("h3",{id:"authorization-2"},"Authorization"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#bearerAuth"},"bearerAuth")),(0,a.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/#documentation-for-models"},"[Back to Model list]")," ",(0,a.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/python/"},"[Back to README]")))}m.isMDXComponent=!0}}]);