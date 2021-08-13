(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[142],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4722:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="Extending Functionality",u={unversionedId:"architecture/extending-functionality",id:"architecture/extending-functionality",isDocsHomePage:!1,title:"Extending Functionality",description:"As explained in Software Design, Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the source code.",source:"@site/docs/architecture/extending-functionality.md",sourceDirName:"architecture",slug:"/architecture/extending-functionality",permalink:"/meta-system-docs/docs/architecture/extending-functionality",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/architecture/extending-functionality.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sotware Design Behind Meta-System",permalink:"/meta-system-docs/docs/architecture/software-design"},next:{title:"Execution Flows",permalink:"/meta-system-docs/docs/architecture/flows"}},l=[{value:"What is Extensible?",id:"what-is-extensible",children:[]},{value:"Beyond the Built In Functions",id:"beyond-the-built-in-functions",children:[]},{value:"Future Releases",id:"future-releases",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extending-functionality"},"Extending Functionality"),(0,o.kt)("p",null,"As explained in ",(0,o.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/architecture/software-design"},"Software Design"),", Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapikit/meta-system"},"source code"),"."),(0,o.kt)("h2",{id:"what-is-extensible"},"What is Extensible?"),(0,o.kt)("p",null,"Meta-System's architecture shares many similarities with a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_programming"},"functional programming language"),", it is the foundation for every action in a Business Operation flow."),(0,o.kt)("p",null,"Each flow uses small pieces of code to execute specific tasks in each step, to then achieve the desired functionality. Since such tasks are no different from eachother for the engine behind the execution of them, ",(0,o.kt)("strong",{parentName:"p"},"you may add any custom function to extend functionalities in the system"),"."),(0,o.kt)("h2",{id:"beyond-the-built-in-functions"},"Beyond the Built In Functions"),(0,o.kt)("p",null,"Directly on the source code, Meta-System comes packed with many functions that only by themselves, can be used to compose plenty of systems. However, there may be something that either cannot be done with the built in functions or is too complex to do using them."),(0,o.kt)("p",null,"In theses cases, it is possible to create a function and import it through an NPM repository, or directly add it to the Function Manager in runtime, before your Business Operation (BOp) is computed and validated."),(0,o.kt)("h2",{id:"future-releases"},"Future Releases"),(0,o.kt)("p",null,"We are planning, on the next releases, to make Meta-System possible to be extended in the protocols as well. You will be able to read messages from Kafka and SQS, and even implement your own IoT custom protocol. This is planned to be released on the ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.2.0"),"."))}p.isMDXComponent=!0}}]);