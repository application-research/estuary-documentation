"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[9300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Introduction",slug:"/"},i="Welcome to Estuary",s={unversionedId:"Learn/intro",id:"Learn/intro",title:"Welcome to Estuary",description:"Estuary is a decentralized data storage service built on key d-web protocols such as IPFS and Filecoin. Users can:",source:"@site/docs/Learn/intro.md",sourceDirName:"Learn",slug:"/",permalink:"/estuary-documentation/",draft:!1,editUrl:"https://github.com/application-research/estuary-documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Learn/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",slug:"/"},sidebar:"defaultSidebar",next:{title:"What is Estuary?",permalink:"/estuary-documentation/Learn/what-is-estuary"}},l={},u=[{value:"Alpha phase",id:"alpha-phase",level:2},{value:"How Estuary works",id:"how-estuary-works",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-estuary"},"Welcome to Estuary"),(0,n.kt)("p",null,"Estuary is a decentralized data storage service built on key d-web protocols such as IPFS and Filecoin. Users can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Store and retrieve content quickly using IPFS."),(0,n.kt)("li",{parentName:"ul"},"Use an IPFS API that adheres to the ",(0,n.kt)("a",{parentName:"li",href:"https://ipfs.github.io/pinning-services-api-spec/"},"IPFS Pinning Services API Spec"),"."),(0,n.kt)("li",{parentName:"ul"},"Store content on Filecoin with proposition receipts and successful deal receipts.")),(0,n.kt)("h2",{id:"alpha-phase"},"Alpha phase"),(0,n.kt)("p",null,"Estuary is currently in its alpha testing phase. Because of this, there are some restrictions to the service:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A maximum of 32 GB per upload. This limit will increase soon."),(0,n.kt)("li",{parentName:"ul"},"The service is temporarily limited to users wanting to store meaningful public data. ",(0,n.kt)("a",{parentName:"li",href:"../Learn/get-invite-key"},"You can apply for an invite \u2192")),(0,n.kt)("li",{parentName:"ul"},"We can not guarantee physically ",(0,n.kt)("em",{parentName:"li"},"where")," your data ends up. It may be on an Estuary node in your city or on another continent. We're working on this.")),(0,n.kt)("h2",{id:"how-estuary-works"},"How Estuary works"),(0,n.kt)("p",null,"Estuary uses two major decentralized data-storage protocols: the ",(0,n.kt)("a",{parentName:"p",href:"https://filecoin.io"},"Filecoin network")," and ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io"},"IPFS"),". The Filecoin network allows for ",(0,n.kt)("em",{parentName:"p"},"persistent"),", ",(0,n.kt)("em",{parentName:"p"},"interoperable"),", ",(0,n.kt)("em",{parentName:"p"},"verifiable"),", and ",(0,n.kt)("em",{parentName:"p"},"provable")," decentralized storage. IPFS is used for content addressing and cached retrievals."),(0,n.kt)("p",null,"When you store data using Estuary, that data will go to an Estuary ",(0,n.kt)("em",{parentName:"p"},"node"),". Initially, all data is stored in ",(0,n.kt)("em",{parentName:"p"},"hot-storage")," using IPFS. While this data is stored, each node will look through a curated list of Filecoin storage providers and initiate storage deals to move hot-storage data into long term cold-storage."),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"There's a lot to dive into, and things can get a bit overwhelming. Your first step is to ",(0,n.kt)("a",{parentName:"p",href:"../Learn/get-invite-key"},"request an invite")," to get an API key. Once you've got that, take a look at the ",(0,n.kt)("a",{parentName:"p",href:"../Tutorial/tutorial-uploading-your-first-file"},"Upload data")," tutorial to get started with storing things on Estuary."))}c.isMDXComponent=!0}}]);