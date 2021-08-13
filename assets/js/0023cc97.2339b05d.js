(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[61],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=d(n),m=l,k=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1326:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),o=["components"],u={},i="Round",d={unversionedId:"functions-reference/math/round",id:"functions-reference/math/round",isDocsHomePage:!1,title:"Round",description:"Referred as #round",source:"@site/docs/functions-reference/math/round.md",sourceDirName:"functions-reference/math",slug:"/functions-reference/math/round",permalink:"/meta-system-docs/docs/functions-reference/math/round",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/functions-reference/math/round.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modulus",permalink:"/meta-system-docs/docs/functions-reference/math/modulus"},next:{title:"Square Root",permalink:"/meta-system-docs/docs/functions-reference/math/square-root"}},c=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"round"},"Round"),(0,a.kt)("p",null,"Referred as ",(0,a.kt)("inlineCode",{parentName:"p"},"#round")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"round")," function rounds a number to the nearest value within the given precision. If no precision is given, a precision of ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," will be used."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"input")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"red"}}," \u2716 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"precision")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 ")," ",(0,a.kt)("em",{parentName:"td"},"(Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"1"),")"))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"result")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"errorNaN")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errorNaN")," property will only be defined if either ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"precision")," are not numbers."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("table",{style:{textAlign:"center"}},(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Inputs"),(0,a.kt)("th",{colspan:"2"},"Outputs")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"input"),(0,a.kt)("th",null,"precision"),(0,a.kt)("th",null,"result"),(0,a.kt)("th",null,"errorNaN")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"3.435")),(0,a.kt)("td",null,(0,a.kt)("code",null,"0.5")),(0,a.kt)("td",null,(0,a.kt)("code",null,"3.5")),(0,a.kt)("td",null,(0,a.kt)("code",null,"undefined"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"3.435")),(0,a.kt)("td",null,(0,a.kt)("code",null,"1")),(0,a.kt)("td",null,(0,a.kt)("code",null,"3")),(0,a.kt)("td",null,(0,a.kt)("code",null,"undefined"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"3.435")),(0,a.kt)("td",null,(0,a.kt)("code",null,"0.2")),(0,a.kt)("td",null,(0,a.kt)("code",null,"3.4")),(0,a.kt)("td",null,(0,a.kt)("code",null,"undefined"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"3.435")),(0,a.kt)("td",null,(0,a.kt)("code",null,'"foo"')),(0,a.kt)("td",null,(0,a.kt)("code",null,"undefined")),(0,a.kt)("td",null,(0,a.kt)("code",null,'"One of the arguments provided was not a number"')))))}s.isMDXComponent=!0}}]);