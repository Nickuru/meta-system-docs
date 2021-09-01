(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[325],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6754:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},c="Software Design Behind Meta-System",l={unversionedId:"api-docs/architecture/software-design",id:"api-docs/architecture/software-design",isDocsHomePage:!1,title:"Software Design Behind Meta-System",description:"Meta-System was built from the ground up to be as extensible and modular as possible. If you strip all the extras and helpers built in, this software can be understood as a function-based flow executor.",source:"@site/docs/api-docs/architecture/software-design.md",sourceDirName:"api-docs/architecture",slug:"/api-docs/architecture/software-design",permalink:"/meta-system-docs/docs/api-docs/architecture/software-design",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/architecture/software-design.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Getting Started",permalink:"/meta-system-docs/docs/api-docs/getting-started"},next:{title:"Extending Functionality",permalink:"/meta-system-docs/docs/api-docs/architecture/extending-functionality"}},u=[{value:"Theory",id:"theory",children:[]},{value:"The Building Blocks",id:"the-building-blocks",children:[]},{value:"Modularity",id:"modularity",children:[{value:"Reusability of BOps and Schemas",id:"reusability-of-bops-and-schemas",children:[]},{value:"Modularity Within Business Operations",id:"modularity-within-business-operations",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"software-design-behind-meta-system"},"Software Design Behind Meta-System"),(0,i.kt)("p",null,"Meta-System was built from the ground up to be as extensible and modular as possible. If you strip all the extras and helpers built in, this software can be understood as a function-based flow executor."),(0,i.kt)("h2",{id:"theory"},"Theory"),(0,i.kt)("p",null,"In order to build a structure capable of representing any software, we needed to come up with a theory. We believe that any system in the world is composed of three things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data"),(0,i.kt)("li",{parentName:"ul"},"Rules"),(0,i.kt)("li",{parentName:"ul"},"Protocols")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Data")," is contextualized information, such as in a car (context), how many seats there are (information). The ",(0,i.kt)("strong",{parentName:"p"},"Rules")," are logic constraints that apply while acting upon information. For instance, it is not possible to put more seats in a car than what its interior space allows. Lastly, the ",(0,i.kt)("strong",{parentName:"p"},"Protocols")," are the bridge that allows communication with outside the boundaries of the system, be it the internet, a Bluetooth device, a step motor, or even the UI of a fancy app."),(0,i.kt)("p",null,"With chaining and defining each of this things, it is possible, in theory, to create any system, and that is what we wanted Meta-System to be capable of."),(0,i.kt)("h2",{id:"the-building-blocks"},"The Building Blocks"),(0,i.kt)("p",null,"In the Meta-System, the data is called ",(0,i.kt)("strong",{parentName:"p"},"Schemas"),", the rules are called ",(0,i.kt)("strong",{parentName:"p"},"Business Operations"),", and the ",(0,i.kt)("strong",{parentName:"p"},"Protocols")," retained its name."),(0,i.kt)("p",null,"Shortly explained, by declaring ",(0,i.kt)("strong",{parentName:"p"},"Schemas"),", you are defining the context of informations and assigning it a name, which will be how Meta-System will know the data structure."),(0,i.kt)("p",null,"Defining the ",(0,i.kt)("strong",{parentName:"p"},"Business Operations (BOps)")," consists in organizing rules and actions in a specific sequence and conditions."),(0,i.kt)("p",null,"Finally, declaring a ",(0,i.kt)("strong",{parentName:"p"},"Protocol")," means creating an opening for interactions in the external boundaries of the Meta-System."),(0,i.kt)("p",null,"Those components can be configured to interact with eachother: A ",(0,i.kt)("strong",{parentName:"p"},"Protocol")," communicates to a ",(0,i.kt)("strong",{parentName:"p"},"Business Operation"),", which in its flow and rules, accesses a ",(0,i.kt)("strong",{parentName:"p"},"Schema")," to operate with its data."),(0,i.kt)("h2",{id:"modularity"},"Modularity"),(0,i.kt)("p",null,"The modularity in the Meta-System comes from the decoupled nature of each element (the Schemas, BOps, and Protocols) in its configuration. Although there are many ways to connect them, unless declared, no component depends on another."),(0,i.kt)("h3",{id:"reusability-of-bops-and-schemas"},"Reusability of BOps and Schemas"),(0,i.kt)("p",null,"Schemas and BOps are reusable once declared. It is possible to create a BOps ",(0,i.kt)("inlineCode",{parentName:"p"},'"A"')," and another ",(0,i.kt)("inlineCode",{parentName:"p"},'"B"'),", with both of them using the same schema ",(0,i.kt)("inlineCode",{parentName:"p"},'"Z"')," without needing to redeclare the latter."),(0,i.kt)("p",null,"With a single declaration, BOps can also be used as dependencies for multiple other BOps, which is great for componentization of common logics and, therefore, increases maintainability."),(0,i.kt)("h3",{id:"modularity-within-business-operations"},"Modularity Within Business Operations"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"BOps Documentation")," for a more in-depth explanation of flows and reusing BOps inside another BOps.")),(0,i.kt)("p",null,"Each step of the flow in a Business Operation is a function that chains with the next neighbor to compose the logic of the said flow."),(0,i.kt)("p",null,"Initially, the functions available to be used are only the built in ones, and those which were generated by a Schema (See Schema BOps Functions). However, Meta-System allows for adding new functions (from NPM packages) directly through the system configuration file. If there is anything that Meta-System currently does not do, you can create any new function that suits your needs, or download compatible solutions from the NPM registry."),(0,i.kt)("p",null,"We treat this topic more in depth in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Extending Meta-System Functionality")," page."))}d.isMDXComponent=!0}}]);