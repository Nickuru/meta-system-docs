(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[6009],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7662:function(t,e,n){"use strict";n.d(e,{y7:function(){return o}});n(2122),n(9756),n(7294);var r=n(3905),a=function(t){for(var e=t;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function o(t){var e=t.children.split("| |"),n=e[0].split("||"),o=n[0].split("|").filter((function(t){return""!==t})),i=n[1].split("|").filter((function(t){return""!==t})),c=e.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:i.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,o.map((function(t,e){return e===o.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t)})),i.map((function(t){return(0,r.kt)("th",{style:{borderBottomWidth:3}},t)}))),c.map((function(t){return(0,r.kt)("tr",null,t.split("|").filter((function(t){return""!==t})).map((function(t,e){return e===o.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,a(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,a(t)))})))})))}},1313:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(7662),c=["components"],l={},u="Create",p={unversionedId:"api-docs/functions/internal-functions/object/create",id:"api-docs/functions/internal-functions/object/create",isDocsHomePage:!1,title:"Create",description:"Module Info:",source:"@site/docs/api-docs/functions/internal-functions/object/create.md",sourceDirName:"api-docs/functions/internal-functions/object",slug:"/api-docs/functions/internal-functions/object/create",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/object/create",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/internal-functions/object/create.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Combine Object",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/object/combine"},next:{title:"Get Value",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/object/get-value"}},s=[{value:"Module Info:",id:"module-info",children:[]},{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create"},"Create"),(0,o.kt)("h3",{id:"module-info"},"Module Info:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "createObject"\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createObject")," function receives a key (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),") and a value. Then returns an object with a property key which contains the given value."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"key")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"created")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"object"))))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.y7,{mdxType:"ExamplesTable"},'| key | value || created | | "name" | "John" | $ob name: "John" $cb | | "age" | 44 | $ob age: 44 $cb | | "info" | $ob nick: "jon" $cb | $ob info: $ob nick: "jon" $cb $cb'))}m.isMDXComponent=!0}}]);