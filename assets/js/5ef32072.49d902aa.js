(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1005],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7662:function(t,e,n){"use strict";n.d(e,{y7:function(){return a}});n(2122),n(9756),n(7294);var r=n(3905),i=function(t){for(var e=t;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function a(t){var e=t.children.split("| |"),n=e[0].split("||"),a=n[0].split("|").filter((function(t){return""!==t})),o=n[1].split("|").filter((function(t){return""!==t})),l=e.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:a.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,a.map((function(t,e){return e===a.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t)})),o.map((function(t){return(0,r.kt)("th",{style:{borderBottomWidth:3}},t)}))),l.map((function(t){return(0,r.kt)("tr",null,t.split("|").filter((function(t){return""!==t})).map((function(t,e){return e===a.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,i(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,i(t)))})))})))}},8248:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(7662),l=["components"],c={},s="String Concatenate",u={unversionedId:"api-docs/functions/internal-functions/string/string-concat",id:"api-docs/functions/internal-functions/string/string-concat",isDocsHomePage:!1,title:"String Concatenate",description:"This section refers to a feature that will only be available in the v0.2.0 of Meta-System",source:"@site/docs/api-docs/functions/internal-functions/string/string-concat.md",sourceDirName:"api-docs/functions/internal-functions/string",slug:"/api-docs/functions/internal-functions/string/string-concat",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/string-concat",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/internal-functions/string/string-concat.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Replace",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/replace"},next:{title:"String Template",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/string-template"}},p=[{value:"Module Info:",id:"module-info",children:[]},{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-concatenate"},"String Concatenate"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This section refers to a feature that will only be available in the v0.2.0 of Meta-System"))),(0,a.kt)("h3",{id:"module-info"},"Module Info:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "stringConcat"\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"stringConcat")," function receives a number of strings and concatenates all of the string in order."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"strings")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"result")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("p",null,"This functions will, if possible, to convert any given values to a string"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.y7,{mdxType:"ExamplesTable"},'| strings || result | | $ob name: "John", lastName: "Wick" $cb | "JohnWick" | | $ob name: "John ", lastName: "Wick" $cb | "John Wick" | | $ob start: "He is ", age: 16 $cb | "He is 16" |'))}m.isMDXComponent=!0}}]);