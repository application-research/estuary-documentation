"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[1111],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50477:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={},o="EstuaryClient.CollectionsApi",i={unversionedId:"javascript/CollectionsApi",id:"javascript/CollectionsApi",title:"EstuaryClient.CollectionsApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/javascript/CollectionsApi.md",sourceDirName:"javascript",slug:"/javascript/CollectionsApi",permalink:"/estuary-documentation/clients/javascript/CollectionsApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EstuaryClient.AutoretrieveApi",permalink:"/estuary-documentation/clients/javascript/AutoretrieveApi"},next:{title:"EstuaryClient.CollectionsCollection",permalink:"/estuary-documentation/clients/javascript/CollectionsCollection"}},u={},p=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Example",id:"example-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Example",id:"example-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3},{value:"Example",id:"example-3",level:3},{value:"Parameters",id:"parameters-3",level:3},{value:"Return type",id:"return-type-3",level:3},{value:"Authorization",id:"authorization-3",level:3},{value:"HTTP request headers",id:"http-request-headers-3",level:3},{value:"Example",id:"example-4",level:3},{value:"Parameters",id:"parameters-4",level:3},{value:"Return type",id:"return-type-4",level:3},{value:"Authorization",id:"authorization-4",level:3},{value:"HTTP request headers",id:"http-request-headers-4",level:3},{value:"Example",id:"example-5",level:3},{value:"Parameters",id:"parameters-5",level:3},{value:"Return type",id:"return-type-5",level:3},{value:"Authorization",id:"authorization-5",level:3},{value:"HTTP request headers",id:"http-request-headers-5",level:3},{value:"Example",id:"example-6",level:3},{value:"Parameters",id:"parameters-6",level:3},{value:"Return type",id:"return-type-6",level:3},{value:"Authorization",id:"authorization-6",level:3},{value:"HTTP request headers",id:"http-request-headers-6",level:3},{value:"Example",id:"example-7",level:3},{value:"Parameters",id:"parameters-7",level:3},{value:"Return type",id:"return-type-7",level:3},{value:"Authorization",id:"authorization-7",level:3},{value:"HTTP request headers",id:"http-request-headers-7",level:3}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"estuaryclientcollectionsapi"},"EstuaryClient.CollectionsApi"),(0,l.kt)("p",null,"All URIs are relative to ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsColuuidCommitPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidCommitPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/{coluuid}/commit"),(0,l.kt)("td",{parentName:"tr",align:null},"Produce a CID of the collection contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsColuuidContentsDelete"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidContentsDelete"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DELETE")," /collections/{coluuid}/contents"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a content from a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsColuuidDelete"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidDelete"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DELETE")," /collections/{coluuid}"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsColuuidGet"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidGet"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"GET")," /collections/{coluuid}"),(0,l.kt)("td",{parentName:"tr",align:null},"Get contents in a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsColuuidPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/{coluuid}"),(0,l.kt)("td",{parentName:"tr",align:null},"Add contents to a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsFsAddPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsFsAddPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/fs/add"),(0,l.kt)("td",{parentName:"tr",align:null},"Add a file to a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsGet"},(0,l.kt)("strong",{parentName:"a"},"collectionsGet"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"GET")," /collections/"),(0,l.kt)("td",{parentName:"tr",align:null},"List all collections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/CollectionsApi#collectionsPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a new collection")))),(0,l.kt)("a",{name:"collectionsColuuidCommitPost"}),"# **collectionsColuuidCommitPost** > 'String' collectionsColuuidCommitPost(coluuid)",(0,l.kt)("p",null,"Produce a CID of the collection contents"),(0,l.kt)("p",null,"This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar coluuid = \"coluuid_example\"; // String | coluuid\n\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napiInstance.collectionsColuuidCommitPost(coluuid, callback);\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"coluuid"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"'String'")),(0,l.kt)("h3",{id:"authorization"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsColuuidContentsDelete"}),"# **collectionsColuuidContentsDelete** > 'String' collectionsColuuidContentsDelete(coluuid, contentid, body)",(0,l.kt)("p",null,"Deletes a content from a collection"),(0,l.kt)("p",null,"This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path"),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar coluuid = \"coluuid_example\"; // String | Collection ID\n\nvar contentid = \"contentid_example\"; // String | Content ID\n\nvar body = new EstuaryClient.MainDeleteContentFromCollectionBody(); // MainDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either 'path' or 'content_id')\n\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napiInstance.collectionsColuuidContentsDelete(coluuid, contentid, body, callback);\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"contentid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Content ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"body")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/MainDeleteContentFromCollectionBody"},(0,l.kt)("strong",{parentName:"a"},"MainDeleteContentFromCollectionBody"))),(0,l.kt)("td",{parentName:"tr",align:null},"Variable to use when filtering for files (must be either 'path' or 'content_id')"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-1"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"'String'")),(0,l.kt)("h3",{id:"authorization-1"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsColuuidDelete"}),"# **collectionsColuuidDelete** > collectionsColuuidDelete(coluuid)",(0,l.kt)("p",null,"Deletes a collection"),(0,l.kt)("p",null,"This endpoint is used to delete an existing collection."),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar coluuid = \"coluuid_example\"; // String | Collection ID\n\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully.');\n  }\n};\napiInstance.collectionsColuuidDelete(coluuid, callback);\n")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-2"},"Return type"),(0,l.kt)("p",null,"null (empty response body)"),(0,l.kt)("h3",{id:"authorization-2"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": Not defined")),(0,l.kt)("a",{name:"collectionsColuuidGet"}),"# **collectionsColuuidGet** > 'String' collectionsColuuidGet(coluuid, opts)",(0,l.kt)("p",null,"Get contents in a collection"),(0,l.kt)("p",null,"This endpoint is used to get contents in a collection. If no colpath query param is passed"),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar coluuid = \"coluuid_example\"; // String | coluuid\n\nvar opts = { \n  'dir': \"dir_example\" // String | Directory\n};\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napiInstance.collectionsColuuidGet(coluuid, opts, callback);\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"coluuid"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"dir")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Directory"),(0,l.kt)("td",{parentName:"tr",align:null},"[optional]")))),(0,l.kt)("h3",{id:"return-type-3"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"'String'")),(0,l.kt)("h3",{id:"authorization-3"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-3"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<a name=\"collectionsColuuidPost\"></a>\n# **collectionsColuuidPost**\n> {'String': 'String'} collectionsColuuidPost(coluuid, contentIDs)\n")),(0,l.kt)("p",null,"Add contents to a collection"),(0,l.kt)("p",null,"This endpoint adds already-pinned contents (that have ContentIDs) to a collection."),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar coluuid = \"coluuid_example\"; // String | coluuid\n\nvar contentIDs = [new EstuaryClient.[Number]()]; // [Number] | Content IDs to add to collection\n\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napiInstance.collectionsColuuidPost(coluuid, contentIDs, callback);\n")),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"coluuid"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"contentIDs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[Number]")),(0,l.kt)("td",{parentName:"tr",align:null},"Content IDs to add to collection"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-4"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"{'String': 'String'}")),(0,l.kt)("h3",{id:"authorization-4"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-4"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": application/json"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsFsAddPost"}),"# **collectionsFsAddPost** > collectionsFsAddPost(coluuid, content, path)",(0,l.kt)("p",null,"Add a file to a collection"),(0,l.kt)("p",null,"This endpoint adds a file to a collection"),(0,l.kt)("h3",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar coluuid = \"coluuid_example\"; // String | Collection ID\n\nvar content = \"content_example\"; // String | Content\n\nvar path = \"path_example\"; // String | Path to file\n\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully.');\n  }\n};\napiInstance.collectionsFsAddPost(coluuid, content, path, callback);\n")),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Content"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to file"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-5"},"Return type"),(0,l.kt)("p",null,"null (empty response body)"),(0,l.kt)("h3",{id:"authorization-5"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-5"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsGet"}),"# **collectionsGet** > [CollectionsCollection] collectionsGet()",(0,l.kt)("p",null,"List all collections"),(0,l.kt)("p",null,"This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user."),(0,l.kt)("h3",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napiInstance.collectionsGet(callback);\n")),(0,l.kt)("h3",{id:"parameters-6"},"Parameters"),(0,l.kt)("p",null,"This endpoint does not need any parameter."),(0,l.kt)("h3",{id:"return-type-6"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/javascript/CollectionsCollection"},(0,l.kt)("strong",{parentName:"a"},"[CollectionsCollection]"))),(0,l.kt)("h3",{id:"authorization-6"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-6"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsPost"}),"# **collectionsPost** > CollectionsCollection collectionsPost(body)",(0,l.kt)("p",null,"Create a new collection"),(0,l.kt)("p",null,"This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection."),(0,l.kt)("h3",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var EstuaryClient = require('estuary-client');\nvar defaultClient = EstuaryClient.ApiClient.instance;\n\n// Configure API key authorization: bearerAuth\nvar bearerAuth = defaultClient.authentications['bearerAuth'];\nbearerAuth.apiKey = 'YOUR API KEY';\n// Uncomment the following line to set a prefix for the API key, e.g. \"Token\" (defaults to null)\n//bearerAuth.apiKeyPrefix = 'Token';\n\nvar apiInstance = new EstuaryClient.CollectionsApi();\n\nvar body = new EstuaryClient.MainCreateCollectionBody(); // MainCreateCollectionBody | Collection name and description\n\n\nvar callback = function(error, data, response) {\n  if (error) {\n    console.error(error);\n  } else {\n    console.log('API called successfully. Returned data: ' + data);\n  }\n};\napiInstance.collectionsPost(body, callback);\n")),(0,l.kt)("h3",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"body")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/javascript/MainCreateCollectionBody"},(0,l.kt)("strong",{parentName:"a"},"MainCreateCollectionBody"))),(0,l.kt)("td",{parentName:"tr",align:null},"Collection name and description"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-7"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/javascript/CollectionsCollection"},(0,l.kt)("strong",{parentName:"a"},"CollectionsCollection"))),(0,l.kt)("h3",{id:"authorization-7"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../README.md#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-7"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")))}c.isMDXComponent=!0}}]);