(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[9777],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8643:function(e,t,n){"use strict";n.d(t,{y7:function(){return l}});n(2122),n(9756),n(7294);var r=n(3905),i=function(e){for(var t=e;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function l(e){var t=e.children.split("| |"),n=t[0].split("||"),l=n[0].split("|").filter((function(e){return""!==e})),o=n[1].split("|").filter((function(e){return""!==e})),a=t.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:l.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,l.map((function(e,t){return t===l.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,r.kt)("th",{style:{borderBottomWidth:3}},e)})),o.map((function(e){return(0,r.kt)("th",{style:{borderBottomWidth:3}},e)}))),a.map((function(e){return(0,r.kt)("tr",null,e.split("|").filter((function(e){return""!==e})).map((function(e,t){return t===l.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,i(e))):(0,r.kt)("td",null,(0,r.kt)("code",null,i(e)))})))})))}},9232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),o=n(8643),a=["components"],s={},c="Is Nill",u={unversionedId:"api-docs/functions-reference/assertion/is-nill",id:"api-docs/functions-reference/assertion/is-nill",isDocsHomePage:!1,title:"Is Nill",description:"Referred as #isNill",source:"@site/docs/api-docs/functions-reference/assertion/is-nill.md",sourceDirName:"api-docs/functions-reference/assertion",slug:"/api-docs/functions-reference/assertion/is-nill",permalink:"/meta-system-docs/docs/api-docs/functions-reference/assertion/is-nill",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions-reference/assertion/is-nill.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Object Definition",permalink:"/meta-system-docs/docs/api-docs/configuring/object-definition"},next:{title:"Bool to Number",permalink:"/meta-system-docs/docs/api-docs/functions-reference/boolean/bool-to-number"}},p=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"is-nill"},"Is Nill"),(0,l.kt)("p",null,"Referred as ",(0,l.kt)("inlineCode",{parentName:"p"},"#isNill")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"isNill")," function receives a value and verifies if it is defined or nill (null or undefined)."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isNill")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.y7,{mdxType:"ExamplesTable"},'| value || isNill | | "a string" | false | | "" | false | | undefined | true | | null | true |'))}f.isMDXComponent=!0}}]);