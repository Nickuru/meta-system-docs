(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1324],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:e},s),{},{components:n})):r.createElement(m,a({ref:e},s))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7662:function(t,e,n){"use strict";n.d(e,{y7:function(){return o}});n(2122),n(9756),n(7294);var r=n(3905),i=function(t){for(var e=t;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function o(t){var e=t.children.split("| |"),n=e[0].split("||"),o=n[0].split("|").filter((function(t){return""!==t})),a=n[1].split("|").filter((function(t){return""!==t})),l=e.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:a.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,o.map((function(t,e){return e===o.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t)})),a.map((function(t){return(0,r.kt)("th",{style:{borderBottomWidth:3}},t)}))),l.map((function(t){return(0,r.kt)("tr",null,t.split("|").filter((function(t){return""!==t})).map((function(t,e){return e===o.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,i(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,i(t)))})))})))}},3185:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(7662),l=["components"],u={},c="Index Of",s={unversionedId:"api-docs/functions/internal-functions/string/index-of",id:"api-docs/functions/internal-functions/string/index-of",isDocsHomePage:!1,title:"Index Of",description:"Module Info:",source:"@site/docs/api-docs/functions/internal-functions/string/index-of.md",sourceDirName:"api-docs/functions/internal-functions/string",slug:"/api-docs/functions/internal-functions/string/index-of",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/index-of",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/internal-functions/string/index-of.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Count",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/count"},next:{title:"Replace",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/replace"}},d=[{value:"Module Info:",id:"module-info",children:[]},{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:d};function f(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"index-of"},"Index Of"),(0,o.kt)("h3",{id:"module-info"},"Module Info:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "indexOf"\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"indexOf")," function receives a string and a search substring, then returns the index of the first occurrence substring inside the primary string. If the substring does not exist inside the string ",(0,o.kt)("inlineCode",{parentName:"p"},"-1")," is returned."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"search")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"index")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number"))))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(a.y7,{mdxType:"ExamplesTable"},'| string | search || index | | "Hello Yellow Submarine" | "e" | 1 | | "Hello Yellow Submarine" | "Yellow" | 6 | | "Hello Yellow Submarine" | "foo" | -1 |'))}f.isMDXComponent=!0}}]);