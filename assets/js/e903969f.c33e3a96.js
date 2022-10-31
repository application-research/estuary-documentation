"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[4166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),m=o,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var r=a(87462),o=(a(67294),a(3905));const n={sidebar_position:3},s="FAQ",l={unversionedId:"Learn/faq",id:"Learn/faq",title:"FAQ",description:"Does Estuary support private storage?",source:"@site/docs/Learn/faq.md",sourceDirName:"Learn",slug:"/Learn/faq",permalink:"/estuary-documentation/Learn/faq",draft:!1,editUrl:"https://github.com/application-research/estuary-documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Learn/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"What is Estuary?",permalink:"/estuary-documentation/Learn/what-is-estuary"},next:{title:"Get an invite",permalink:"/estuary-documentation/Learn/get-invite-key"}},u={},i=[],p={toc:i};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Does Estuary support private storage?")),(0,o.kt)("p",null,"Estuary does not encrypt or provide any protection for your data. The safety of your data is your own responsibility."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Is Estuary {insert any compliance} compliant?")),(0,o.kt)("p",null,"When you run your own Estuary Node, you can make your Estuary Node compliant. Our Estuary Node may not be and does not make any promises about compliance."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can you guarantee the location of our data?")),(0,o.kt)("p",null,"No."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can you guarantee all of my data ends up on a specific storage provider?")),(0,o.kt)("p",null,"No. But you may be able to if you run your own Estuary Node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the mechanism for choosing storage providers? ")),(0,o.kt)("p",null,"You decide, we try against 3 of the storage providers with the best performance, and 3 random ones. You can modify this and can also contribute better ways to select providers, and make open source contributions to the repo itself."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is Estuary's take on storage provider reputation, and what are some key reputation metrics that Estuary focuses on?")),(0,o.kt)("p",null,"Estuary's take is one based on real performance, to attempt to simulate real world requirements as much as possible."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Are the existing storage providers' information shared by all estuary nodes, or does each node have its own list of storage providers?")),(0,o.kt)("p",null,"Each Estuary node has its own list, in a SQL database."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is the process for a storage provider to connect to Estuary?")),(0,o.kt)("p",null,"Add the storage provider to the list that your Estuary node keeps. You will have an admin dashboard, and can manage your providers from a GUI or API call."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can I use Estuary over the command line?")),(0,o.kt)("p",null,"Yes, use CURL."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"How is Estuary different than Web3 Storage or NFT Storage?")),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://estuary.tech/comparisons-web3"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"How does Estuary compare to cloud storage?")),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://estuary.tech/comparisons"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"How do we make sure providers are able to accept these deals? Do they need advance warning?")),(0,o.kt)("p",null,"Providers should not need advance warning, if there are problems with the deal they should have the mechanisms in place to reject it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can providers handle the Estuary Node rate of deals?")),(0,o.kt)("p",null,"Estuary as of September 1st is capable of making 600 storage deals an hour."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"How does Estuary fit into indexing plans for discovering Filecoin data on providers?")),(0,o.kt)("p",null,"Estuary uses ",(0,o.kt)("a",{parentName:"p",href:"https://multiformats.io/multihash/"},"multihashes"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Are all pieces of data referenced by mulithash?")),(0,o.kt)("p",null,"Everything is referenced by a content identifer (CID). IPFS does not distinguish between CIDs with the same multihash."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Does Estuary have a plan for deal renewals?")),(0,o.kt)("p",null,"There is no way to extend an existing deal, Estuary will make a new deal on the users behalf."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Are deals importable and exportable?")),(0,o.kt)("p",null,"Yes, but the API is not exposed."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once a deal is made, how does Estuary help clients monitor storage status and facilitate retrieval?")),(0,o.kt)("p",null,"Your Estuary node runs with a web server that polls against each storage provider per deal ID, and checks the status. If a deal is slashed, it will continue to try and make Estuary deals until there are 6. This process is automated."),(0,o.kt)("p",null,"Estuary will attempt retrieval to fix lost CIDs on the IPFS node. Currently, since everything you upload is also pinned, users can retrieve anything uploaded through Estuary through any IPFS gateway via HTTP."))}c.isMDXComponent=!0}}]);