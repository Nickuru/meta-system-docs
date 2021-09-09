(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1792],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1526:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:5},p="Modules Dependencies",c={unversionedId:"api-docs/configuring/bops/dependencies",id:"api-docs/configuring/bops/dependencies",isDocsHomePage:!1,title:"Modules Dependencies",description:"Every module in a BOps flow can specify dependencies for it to be executed. Just declare what they are and Meta-System resolves them before the current module.",source:"@site/docs/api-docs/configuring/bops/dependencies.md",sourceDirName:"api-docs/configuring/bops",slug:"/api-docs/configuring/bops/dependencies",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/dependencies",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/bops/dependencies.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Constants and Variables",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/constants-and-variables"},next:{title:"Protocols",permalink:"/meta-system-docs/docs/api-docs/configuring/protocol-config"}},l=[{value:"Dependencies Properties",id:"dependencies-properties",children:[{value:"Origin",id:"origin",children:[]},{value:"Origin Path",id:"origin-path",children:[]},{value:"Target Path",id:"target-path",children:[]}]},{value:"Setting Dependency Type",id:"setting-dependency-type",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules-dependencies"},"Modules Dependencies"),(0,o.kt)("p",null,"Every module in a BOps flow can specify dependencies for it to be executed. Just declare what they are and Meta-System resolves them before the current module."),(0,o.kt)("p",null,"The mechanics of how this works is explained in the Flows page, at this ",(0,o.kt)("a",{parentName:"p",href:"../../architecture/flows/#dependencies"},"section"),"."),(0,o.kt)("h2",{id:"dependencies-properties"},"Dependencies Properties"),(0,o.kt)("p",null,"In each module, the dependencies are an array of Objects that may contain the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"origin"')," - Required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"originPath"')," - Optional"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"targetPath"')," - Optional")),(0,o.kt)("h3",{id:"origin"},"Origin"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"origin"')," is a required field, and its value must be either a number, representing another module in the flow, or an item in the following ENUM:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"constants"')," - If the dependency comes from a constant declared in the same BOps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"variables"')," - If the dependency is from a variable value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"inputs"')," - If the dependency is from an input of the function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"envs"')," - If the dependency is from an environment value set system-wide.")),(0,o.kt)("h3",{id:"origin-path"},"Origin Path"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'"originPath"')," property specifies where in ",(0,o.kt)("inlineCode",{parentName:"p"},'"origin"')," is the wanted value. This must be a string, more precisely, an object path (using dot notation) to the value in the module output."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},'"origin"')," is a number, the path must either start with ",(0,o.kt)("inlineCode",{parentName:"p"},'"result"')," for the function to be executed then to access the result object, or be ",(0,o.kt)("inlineCode",{parentName:"p"},'"module"')," for the origin itself (and its sub dependencies) be passed forward as an argument."),(0,o.kt)("h3",{id:"target-path"},"Target Path"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"targetPath"')," Is where Meta-System maps the output of ",(0,o.kt)("inlineCode",{parentName:"p"},'"originPath"')," to. This property must be a string representing an object path (using dot notation) to map the result to."),(0,o.kt)("h2",{id:"setting-dependency-type"},"Setting Dependency Type"),(0,o.kt)("p",null,"As said in ",(0,o.kt)("a",{parentName:"p",href:"../../architecture/flows/#dependencies"},"the dependencies section"),", there are two kinds, ",(0,o.kt)("strong",{parentName:"p"},"Functional")," and ",(0,o.kt)("strong",{parentName:"p"},"Normal"),"."),(0,o.kt)("p",null,"To set a dependency as Functional, just omit ",(0,o.kt)("inlineCode",{parentName:"p"},'"originPath"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"targetPath"'),". The module will be executed, but its results will not be mapped. If you specify those two properties, the dependency will be Normal."))}u.isMDXComponent=!0}}]);