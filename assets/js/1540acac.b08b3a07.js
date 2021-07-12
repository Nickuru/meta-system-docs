(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[316],{5725:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var i=n(2122),a=n(9756),s=(n(7294),n(3905)),o=["components"],r={sidebar_position:3},d="Execution Flows",c={unversionedId:"architecture/flows",id:"architecture/flows",isDocsHomePage:!1,title:"Execution Flows",description:"What are Flows",source:"@site/docs/architecture/flows.md",sourceDirName:"architecture",slug:"/architecture/flows",permalink:"/meta-system-docs/docs/architecture/flows",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/architecture/flows.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Extending Functionality",permalink:"/meta-system-docs/docs/architecture/extending-functionality"}},l=[{value:"What are Flows",id:"what-are-flows",children:[]},{value:"Declaring BOps",id:"declaring-bops",children:[{value:"Dependencies",id:"dependencies",children:[]},{value:"Dependencies During Runtime",id:"dependencies-during-runtime",children:[]}]},{value:"BOps Engine: Using Declared BOps",id:"bops-engine-using-declared-bops",children:[{value:"Runtime details",id:"runtime-details",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"execution-flows"},"Execution Flows"),(0,s.kt)("h2",{id:"what-are-flows"},"What are Flows"),(0,s.kt)("p",null,"All systems are made of execution flows, tailored to the needs of the business they are serving. Flows are what makes the business have its shape, and work like it does."),(0,s.kt)("p",null,"The Meta-System provides a framework for planning your flows and reusing common steps in the operation. This is what we call Business Operations, or ",(0,s.kt)("strong",{parentName:"p"},"BOps")," for short."),(0,s.kt)("p",null,'Those operations are composed of small steps called "modules" or "BOps Functions". By chaining them together we can build any functionality a system may perform.'),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Glossary Disambiguation")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"By saying ",(0,s.kt)("strong",{parentName:"p"},"BOps"),", we're refferring to the flows. By saying ",(0,s.kt)("strong",{parentName:"p"},"module")," or ",(0,s.kt)("strong",{parentName:"p"},"BOps Function"),', we are talking about each of the said "steps" of a BOps function. Finally, ',(0,s.kt)("strong",{parentName:"p"},"BOps Engine"),' is the engine responsible for "compiling" your configuration, ',(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"#bops-engine-using-declared-bops"},"see below")),"."))),(0,s.kt)("h2",{id:"declaring-bops"},"Declaring BOps"),(0,s.kt)("p",null,"When configuring a BOps, we must specify each function that needs to be executed in that specific BOp. This takes place in the property ",(0,s.kt)("inlineCode",{parentName:"p"},"configuration")," on your business operation data."),(0,s.kt)("p",null,"For Meta-System this property is a list that contains every function, their dependencies, and an ",(0,s.kt)("strong",{parentName:"p"},"attributed key"),". This means that you don't explicitly describe the flow, you declare the BOps Functions that need to be executed, what their input data is, and their ",(0,s.kt)("strong",{parentName:"p"},"functional dependencies"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"The key of a function")," is what Meta-System uses internally to know what function a dependency is refferring to, as it is possible to contain multiple functions with the same body (Eg: A multiplication function), but different dependencies and outputs in the same flow.")),(0,s.kt)("h3",{id:"dependencies"},"Dependencies"),(0,s.kt)("p",null,"Every BOps function may have dependencies bound to them, and each dependency is resolved before the current function is executed."),(0,s.kt)("p",null,"The dependencies can be either ",(0,s.kt)("strong",{parentName:"p"},"functional")," (when the dependency data is not needed, but its execution is required), or ",(0,s.kt)("strong",{parentName:"p"},"normal"),", when the data is required and mapped to the input of the next function."),(0,s.kt)("h3",{id:"dependencies-during-runtime"},"Dependencies During Runtime"),(0,s.kt)("p",null,"Meta-System validates that there are no circular dependencies declarations, for in such case, there is no final point that must be executed first."),(0,s.kt)("p",null,"For example, in a BOps in which there is a function ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," that depends on ",(0,s.kt)("inlineCode",{parentName:"p"},"B"),", which depends on ",(0,s.kt)("inlineCode",{parentName:"p"},"C"),", that depends on ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," again, it is not possible to solve dependencies."),(0,s.kt)("p",null,"On the other hand, in a valid configuration which contains the module ",(0,s.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"B"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"C"),", and that ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," has a declared dependency on ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"C"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"B")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"C")," are executed in a sequence that depends on their order in the dependencies list."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"A")," is executed.")),(0,s.kt)("h2",{id:"bops-engine-using-declared-bops"},"BOps Engine: Using Declared BOps"),(0,s.kt)("p",null,"The name of the mechanism behind this feature in Meta-System is called ",(0,s.kt)("strong",{parentName:"p"},"BOps Engine"),". It is responsible for binding the data and functions together, and outputs a single JavaScript function with the interface specified in its configuration."),(0,s.kt)("p",null,"Furthermore, the BOps Engine takes care of transforming the Functions List in the flow to be used by the system. The resulting function contains the modules to be executed in the correct order and conditions."),(0,s.kt)("h3",{id:"runtime-details"},"Runtime details"),(0,s.kt)("p",null,"In order to avoid a single module being executed multiple times din a case where it is a dependency for multiple other functions, Meta-System caches the result of each function. In other words: A function is only executed once, given if that it is a same key being required twice."))}u.isMDXComponent=!0}}]);