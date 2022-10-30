"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[1297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||i;return r?a.createElement(c,l(l({ref:t},s),{},{components:r})):a.createElement(c,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},l="SwaggerClient::AutoretrieveApi",o={unversionedId:"ruby/docs/AutoretrieveApi",id:"ruby/docs/AutoretrieveApi",title:"SwaggerClient::AutoretrieveApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/ruby/docs/AutoretrieveApi.md",sourceDirName:"ruby/docs",slug:"/ruby/docs/AutoretrieveApi",permalink:"/estuary-documentation/clients/ruby/docs/AutoretrieveApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SwaggerClient::AdminApi",permalink:"/estuary-documentation/clients/ruby/docs/AdminApi"},next:{title:"SwaggerClient::CollectionsApi",permalink:"/estuary-documentation/clients/ruby/docs/CollectionsApi"}},u={},p=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Example",id:"example-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Example",id:"example-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"swaggerclientautoretrieveapi"},"SwaggerClient::AutoretrieveApi"),(0,n.kt)("p",null,"All URIs are relative to ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/ruby/docs/AutoretrieveApi#admin_autoretrieve_init_post"},(0,n.kt)("strong",{parentName:"a"},"admin_autoretrieve_init_post"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"POST")," /admin/autoretrieve/init"),(0,n.kt)("td",{parentName:"tr",align:null},"Register autoretrieve server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/ruby/docs/AutoretrieveApi#admin_autoretrieve_list_get"},(0,n.kt)("strong",{parentName:"a"},"admin_autoretrieve_list_get"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"GET")," /admin/autoretrieve/list"),(0,n.kt)("td",{parentName:"tr",align:null},"List autoretrieve servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/ruby/docs/AutoretrieveApi#autoretrieve_heartbeat_post"},(0,n.kt)("strong",{parentName:"a"},"autoretrieve_heartbeat_post"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"POST")," /autoretrieve/heartbeat"),(0,n.kt)("td",{parentName:"tr",align:null},"Marks autoretrieve server as up")))),(0,n.kt)("h1",{id:"admin_autoretrieve_init_post"},(0,n.kt)("strong",{parentName:"h1"},"admin_autoretrieve_init_post")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"admin_autoretrieve_init_post(addresses, pub_key)")),(0,n.kt)("p",null,"Register autoretrieve server"),(0,n.kt)("p",null,"This endpoint registers a new autoretrieve server"),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# load the gem\nrequire 'swagger_client'\n# setup authorization\nSwaggerClient.configure do |config|\n  # Configure API key authorization: bearerAuth\n  config.api_key['Authorization'] = 'YOUR API KEY'\n  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)\n  #config.api_key_prefix['Authorization'] = 'Bearer'\nend\n\napi_instance = SwaggerClient::AutoretrieveApi.new\n\naddresses = 'addresses_example' # String | Autoretrieve's comma-separated list of addresses\n\npub_key = 'pub_key_example' # String | Autoretrieve's public key\n\n\nbegin\n  #Register autoretrieve server\n  api_instance.admin_autoretrieve_init_post(addresses, pub_key)\nrescue SwaggerClient::ApiError => e\n  puts \"Exception when calling AutoretrieveApi->admin_autoretrieve_init_post: #{e}\"\nend\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"addresses")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s comma-separated list of addresses"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"pub_key")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s public key"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null,"nil (empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/ruby/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,n.kt)("h1",{id:"admin_autoretrieve_list_get"},(0,n.kt)("strong",{parentName:"h1"},"admin_autoretrieve_list_get")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"admin_autoretrieve_list_get")),(0,n.kt)("p",null,"List autoretrieve servers"),(0,n.kt)("p",null,"This endpoint lists all registered autoretrieve servers"),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# load the gem\nrequire 'swagger_client'\n# setup authorization\nSwaggerClient.configure do |config|\n  # Configure API key authorization: bearerAuth\n  config.api_key['Authorization'] = 'YOUR API KEY'\n  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)\n  #config.api_key_prefix['Authorization'] = 'Bearer'\nend\n\napi_instance = SwaggerClient::AutoretrieveApi.new\n\nbegin\n  #List autoretrieve servers\n  api_instance.admin_autoretrieve_list_get\nrescue SwaggerClient::ApiError => e\n  puts \"Exception when calling AutoretrieveApi->admin_autoretrieve_list_get: #{e}\"\nend\n")),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type-1"},"Return type"),(0,n.kt)("p",null,"nil (empty response body)"),(0,n.kt)("h3",{id:"authorization-1"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/ruby/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,n.kt)("h1",{id:"autoretrieve_heartbeat_post"},(0,n.kt)("strong",{parentName:"h1"},"autoretrieve_heartbeat_post")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"autoretrieve_heartbeat_post(token)")),(0,n.kt)("p",null,"Marks autoretrieve server as up"),(0,n.kt)("p",null,"This endpoint updates the lastConnection field for autoretrieve"),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"# load the gem\nrequire 'swagger_client'\n# setup authorization\nSwaggerClient.configure do |config|\n  # Configure API key authorization: bearerAuth\n  config.api_key['Authorization'] = 'YOUR API KEY'\n  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)\n  #config.api_key_prefix['Authorization'] = 'Bearer'\nend\n\napi_instance = SwaggerClient::AutoretrieveApi.new\n\ntoken = 'token_example' # String | Autoretrieve's auth token\n\n\nbegin\n  #Marks autoretrieve server as up\n  api_instance.autoretrieve_heartbeat_post(token)\nrescue SwaggerClient::ApiError => e\n  puts \"Exception when calling AutoretrieveApi->autoretrieve_heartbeat_post: #{e}\"\nend\n")),(0,n.kt)("h3",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"token")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Autoretrieve","'","s auth token"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"return-type-2"},"Return type"),(0,n.kt)("p",null,"nil (empty response body)"),(0,n.kt)("h3",{id:"authorization-2"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/ruby/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": application/json")))}d.isMDXComponent=!0}}]);