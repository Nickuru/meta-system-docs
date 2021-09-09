(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[8292],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2167:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={},c="For Loop",u={unversionedId:"api-docs/functions/internal-functions/flux-control/for-loop",id:"api-docs/functions/internal-functions/flux-control/for-loop",isDocsHomePage:!1,title:"For Loop",description:"Module Info:",source:"@site/docs/api-docs/functions/internal-functions/flux-control/for-loop.md",sourceDirName:"api-docs/functions/internal-functions/flux-control",slug:"/api-docs/functions/internal-functions/flux-control/for-loop",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/flux-control/for-loop",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/internal-functions/flux-control/for-loop.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Array Push",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/array/push"},next:{title:"If",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/flux-control/if"}},p=[{value:"Module Info:",id:"module-info",children:[]},{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]}],d={toc:p};function s(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for-loop"},"For Loop"),(0,a.kt)("h3",{id:"module-info"},"Module Info:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "forLoop"\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forLoop")," function is one of the more advanced ones: it receives a number and a function, then it executes the function n times, n being the given number. Optionally you can also give two more functions: one that is executed everytime after the main function and another one that is executed after everything is done."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"module")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"quantity")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"postEach")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"red"}}," \u2716 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"postAll")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"red"}}," \u2716 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lastIndexValue")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))))}s.isMDXComponent=!0}}]);