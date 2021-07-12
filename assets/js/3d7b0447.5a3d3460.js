(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[142],{4722:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var i=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],r={sidebar_position:2},c="Extending Functionality",u={unversionedId:"architecture/extending-functionality",id:"architecture/extending-functionality",isDocsHomePage:!1,title:"Extending Functionality",description:"As explained in Software Design, Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the source code.",source:"@site/docs/architecture/extending-functionality.md",sourceDirName:"architecture",slug:"/architecture/extending-functionality",permalink:"/meta-system-docs/docs/architecture/extending-functionality",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/architecture/extending-functionality.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sotware Design Behind Meta-System",permalink:"/meta-system-docs/docs/architecture/software-design"},next:{title:"Execution Flows",permalink:"/meta-system-docs/docs/architecture/flows"}},d=[{value:"What is Extensible?",id:"what-is-extensible",children:[]},{value:"Beyond the Built In Functions",id:"beyond-the-built-in-functions",children:[]},{value:"Future Releases",id:"future-releases",children:[]}],l={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"extending-functionality"},"Extending Functionality"),(0,s.kt)("p",null,"As explained in ",(0,s.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/architecture/software-design"},"Software Design"),", Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mapikit/meta-system"},"source code"),"."),(0,s.kt)("h2",{id:"what-is-extensible"},"What is Extensible?"),(0,s.kt)("p",null,"Meta-System's architecture shares many similarities with a ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_programming"},"functional programming language"),", it is the foundation for every action in a Business Operation flow."),(0,s.kt)("p",null,"Each flow uses small pieces of code to execute specific tasks in each step, to then achieve the desired functionality. Since such tasks are no different from eachother for the engine behind the execution of them, ",(0,s.kt)("strong",{parentName:"p"},"you may add any custom function to extend functionalities in the system"),"."),(0,s.kt)("h2",{id:"beyond-the-built-in-functions"},"Beyond the Built In Functions"),(0,s.kt)("p",null,"Directly on the source code, Meta-System comes packed with many functions that only by themselves, can be used to compose plenty of systems. However, there may be something that either cannot be done with the built in functions or is too complex to do using them."),(0,s.kt)("p",null,"In theses cases, it is possible to create a function and import it through an NPM repository, or directly add it to the Function Manager in runtime, before your Business Operation (BOp) is computed and validated."),(0,s.kt)("h2",{id:"future-releases"},"Future Releases"),(0,s.kt)("p",null,"We are planning, on the next releases, to make Meta-System possible to be extended in the protocols as well. You will be able to read messages from Kafka and SQS, and even implement your own IoT custom protocol. This is planned to be released on the ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.2.0"),"."))}h.isMDXComponent=!0}}]);