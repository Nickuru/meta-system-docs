(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[30],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5449:function(t,e,n){"use strict";n.d(e,{y7:function(){return a}});n(2122),n(9756),n(7294);var r=n(3905),i=function(t){for(var e=t;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function a(t){var e=t.children.split("| |"),n=e[0].split("||"),a=n[0].split("|").filter((function(t){return""!==t})),o=n[1].split("|").filter((function(t){return""!==t})),l=e.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:a.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,a.map((function(t,e){return e===a.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t)})),o.map((function(t){return(0,r.kt)("th",{style:{borderBottomWidth:3}},t)}))),l.map((function(t){return(0,r.kt)("tr",null,t.split("|").filter((function(t){return""!==t})).map((function(t,e){return e===a.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,i(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,i(t)))})))})))}},7390:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(5449),l=["components"],u={},c="Count",s={unversionedId:"functions-reference/string/count",id:"functions-reference/string/count",isDocsHomePage:!1,title:"Count",description:"Referred as #countString",source:"@site/docs/functions-reference/string/count.md",sourceDirName:"functions-reference/string",slug:"/functions-reference/string/count",permalink:"/meta-system-docs/docs/functions-reference/string/count",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/functions-reference/string/count.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Char At",permalink:"/meta-system-docs/docs/functions-reference/string/char-at"},next:{title:"Index Of",permalink:"/meta-system-docs/docs/functions-reference/string/index-of"}},p=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"count"},"Count"),(0,a.kt)("p",null,"Referred as ",(0,a.kt)("inlineCode",{parentName:"p"},"#countString")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"countString")," function receives a string and a substring and counts how many times the substring appears in the string."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"search")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"count")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.y7,{mdxType:"ExamplesTable"},'| string | search || count | | "Hello Yellow Submarine" | "e" | 3 | | "Hello Yellow Submarine" | "ello" | 2 | | "Hello Yellow Submarine" | "foo" | 0 |'))}m.isMDXComponent=!0}}]);