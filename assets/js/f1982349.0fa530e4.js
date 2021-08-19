(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[564],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return l},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return o?n.createElement(f,a(a({ref:t},l),{},{components:o})):n.createElement(f,a({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8013:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],s={},c="Intro to Configuration (WIP)",u={unversionedId:"intro-to-configuration",id:"intro-to-configuration",isDocsHomePage:!1,title:"Intro to Configuration (WIP)",description:"Note: properties shown here are just basic properties and some were not addressed. For a complete, in depth look at the configuration, please refer to the Configuration Section or Example Configuration Section for a quick start.",source:"@site/docs/intro-to-configuration.md",sourceDirName:".",slug:"/intro-to-configuration",permalink:"/meta-system-docs/docs/intro-to-configuration",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/intro-to-configuration.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"String to Number",permalink:"/meta-system-docs/docs/functions-reference/string/to-number"}},l=[{value:"name",id:"name",children:[]},{value:"version",id:"version",children:[]},{value:"protocols",id:"protocols",children:[]},{value:"schemas",id:"schemas",children:[]},{value:"businessOperations",id:"businessoperations",children:[]}],p={toc:l};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro-to-configuration-wip"},"Intro to Configuration (WIP)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: properties shown here are just basic properties and some were not addressed. For a complete, in depth look at the configuration, please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration Section")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Example Configuration Section")," for a quick start.")),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"This is the name of your system, it differentiates you from the crowd, so be creative! Do note however that this has no impact on the system's behavior and can be changed later, so don't worry if you can't come up with a catchy name right away."),(0,i.kt)("h3",{id:"version"},"version"),(0,i.kt)("p",null,"The current version of your system, so you and your colleagues can identify how far you've come. Again, this does not impact the system's behavior, and can be changed later (and should be, as you update your system with new capabilities!)"),(0,i.kt)("h3",{id:"protocols"},"protocols"),(0,i.kt)("p",null,"These determine how your system communicates with the outside world, so it is quite important! Here is where you configure whether your system will use the worldwide spread HTTP or any other type of communication."),(0,i.kt)("p",null,"More info can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Protocols Section"),"."),(0,i.kt)("h3",{id:"schemas"},"schemas"),(0,i.kt)("p",null,"Schemas define the things your system will work with. If you sell cars, a car should be defined with properties that matter to you such as the amount of doors, the engine power and the price. Once that is defined your system will be able to store and manage info about individual cars."),(0,i.kt)("p",null,"More info can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Schemas Section"),"."),(0,i.kt)("h3",{id:"businessoperations"},"businessOperations"),(0,i.kt)("p",null,"BusinessOperations, or BOps as we like to call them, are the heart of your system. They are what define what your system should do with the information it gets and holds. Here is where you can tell your system what it should do when your user tells the system he/she is 500 years old. Should it refuse to save this info or should it store it in your database anyways? In short, here is where the logic, the brains of the operations lives, so take good care of it!"),(0,i.kt)("p",null,"More info can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Business Operations Section"),"."))}d.isMDXComponent=!0}}]);