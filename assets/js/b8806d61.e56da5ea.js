(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[577],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5449:function(e,t,n){"use strict";n.d(t,{y7:function(){return i}});n(2122),n(9756),n(7294);var r=n(3905),a=function(e){for(var t=e;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function i(e){var t=e.children.split("| |"),n=t[0].split("||"),i=n[0].split("|").filter((function(e){return""!==e})),o=n[1].split("|").filter((function(e){return""!==e})),l=t.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:i.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,i.map((function(e,t){return t===i.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,r.kt)("th",{style:{borderBottomWidth:3}},e)})),o.map((function(e){return(0,r.kt)("th",{style:{borderBottomWidth:3}},e)}))),l.map((function(e){return(0,r.kt)("tr",null,e.split("|").filter((function(e){return""!==e})).map((function(e,t){return t===i.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,a(e))):(0,r.kt)("td",null,(0,r.kt)("code",null,a(e)))})))})))}},7616:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(5449),l=["components"],u={sidebar_position:1},d="Add",c={unversionedId:"functions-reference/math/add",id:"functions-reference/math/add",isDocsHomePage:!1,title:"Add",description:"Referred as #add",source:"@site/docs/functions-reference/math/add.md",sourceDirName:"functions-reference/math",slug:"/functions-reference/math/add",permalink:"/meta-system-docs/docs/functions-reference/math/add",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/functions-reference/math/add.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Execution Flows",permalink:"/meta-system-docs/docs/architecture/flows"},next:{title:"Subtract",permalink:"/meta-system-docs/docs/functions-reference/math/subtract"}},s=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add"},"Add"),(0,i.kt)("p",null,"Referred as ",(0,i.kt)("inlineCode",{parentName:"p"},"#add")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," function takes a list of numbers and return their sum."),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"numbersToAdd")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Array<number>")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"errorMessage")," property will only be defined if any of the items in the input list are not numbers."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.y7,{mdxType:"ExamplesTable"},'| numbersToAdd || result | errorMessage | | [ 4, 3, 2 ] | 9 | undefined | | [ 1, 9 ] | 10 | undefined | | ["foo", 5] | undefined | "One of the arguments provided was not a number" |'))}m.isMDXComponent=!0}}]);