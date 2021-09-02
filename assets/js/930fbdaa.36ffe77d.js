(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[8796],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8643:function(e,t,r){"use strict";r.d(t,{y7:function(){return i}});r(2122),r(9756),r(7294);var n=r(3905),a=function(e){for(var t=e;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function i(e){var t=e.children.split("| |"),r=t[0].split("||"),i=r[0].split("|").filter((function(e){return""!==e})),o=r[1].split("|").filter((function(e){return""!==e})),l=t.slice(1);return(0,n.kt)("table",{style:{textAlign:"center"}},(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:i.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,n.kt)("th",{colspan:o.length,style:{fontSize:"135%"}}," Outputs ")),(0,n.kt)("tr",null,i.map((function(e,t){return t===i.length-1?(0,n.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,n.kt)("th",{style:{borderBottomWidth:3}},e)})),o.map((function(e){return(0,n.kt)("th",{style:{borderBottomWidth:3}},e)}))),l.map((function(e){return(0,n.kt)("tr",null,e.split("|").filter((function(e){return""!==e})).map((function(e,t){return t===i.length-1?(0,n.kt)("td",{style:{borderRightWidth:4}},(0,n.kt)("code",null,a(e))):(0,n.kt)("td",null,(0,n.kt)("code",null,a(e)))})))})))}},5715:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(8643),l=["components"],u={},c="Higher or Equal",p={unversionedId:"api-docs/functions-reference/logic/higher-or-equal",id:"api-docs/functions-reference/logic/higher-or-equal",isDocsHomePage:!1,title:"Higher or Equal",description:"Referred as #higherOrEqualTo",source:"@site/docs/api-docs/functions-reference/logic/higher-or-equal.md",sourceDirName:"api-docs/functions-reference/logic",slug:"/api-docs/functions-reference/logic/higher-or-equal",permalink:"/meta-system-docs/docs/api-docs/functions-reference/logic/higher-or-equal",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions-reference/logic/higher-or-equal.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Higher Than",permalink:"/meta-system-docs/docs/api-docs/functions-reference/logic/highe-than"},next:{title:"Lower or Equal",permalink:"/meta-system-docs/docs/api-docs/functions-reference/logic/lower-or-equal"}},s=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"higher-or-equal"},"Higher or Equal"),(0,i.kt)("p",null,"Referred as ",(0,i.kt)("inlineCode",{parentName:"p"},"#higherOrEqualTo")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"higherOrEqualTo")," function compares two values and returns true the first value (",(0,i.kt)("inlineCode",{parentName:"p"},"A"),") is higher or equal to the second value (",(0,i.kt)("inlineCode",{parentName:"p"},"B"),")."),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"B")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isHigherOrEqual")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.y7,{mdxType:"ExamplesTable"},"| A | B || isHigherOrEqual | | 42 | 16 | true | | 16 | 42 | false | | 16 | 16 | true | | -16 | -42 | true |"))}m.isMDXComponent=!0}}]);