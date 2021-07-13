(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[162],{601:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return c}});var a=o(2122),n=o(9756),i=(o(7294),o(3905)),s=["components"],r={sidebar_position:1},l="Getting Started",u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to the Meta-System documentation. Here we will show you the first steps required to run it, teach you about the architecture, in-depth info about functions, and hopefully answer all the questions you might have about the Meta-System.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/meta-system-docs/docs/getting-started",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Sotware Design Behind Meta-System",permalink:"/meta-system-docs/docs/architecture/software-design"}},h=[{value:"What is &quot;Meta System&quot; ?",id:"what-is-meta-system-",children:[]},{value:"Download &amp; Execution",id:"download--execution",children:[{value:"First Steps",id:"first-steps",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"name",id:"name",children:[]},{value:"version",id:"version",children:[]},{value:"protocols",id:"protocols",children:[]},{value:"schemas",id:"schemas",children:[]},{value:"businessOperations",id:"businessoperations",children:[]}]}],d={toc:h};function c(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Welcome to the Meta-System documentation. Here we will show you the first steps required to run it, teach you about the architecture, in-depth info about functions, and hopefully answer all the questions you might have about the Meta-System."),(0,i.kt)("p",null,"So, in order to answer most of those questions, let's begin with the famous three W's: what is it, who is it for and where do you start."),(0,i.kt)("h2",{id:"what-is-meta-system-"},'What is "Meta System" ?'),(0,i.kt)("p",null,'"Meta" loosely stands for "X about X": metalanguage is the language talking about the language; metadata is data about the data. Well, since that is the case, a ',(0,i.kt)("strong",{parentName:"p"},"Meta System must be a System that creates systems!")),(0,i.kt)("p",null,"The idea behind the Meta-System is to simplify the creation and maintenance of simple as well complex systems; from a simple local supermarket backend server to a full blown multinational marketplace. If you are a solitary developer, with low programming knowledge who wants to create an app, meta-system might help you! However, if you represent an already large company which is currently looking to reduce the costs of maintaining a server running properly, well, then Meta-System is also for you and your team!"),(0,i.kt)("p",null,"The idea behind it is to be simple, capable and ",(0,i.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/architecture/extending-functionality"},"extensible"),". Just give the Meta System a configuration file as seen here and watch as it builds http routes, databases, functions and ",(0,i.kt)("em",{parentName:"p"},"voil\xe0!")," your system should be up and running!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"download--execution"},"Download & Execution"),(0,i.kt)("p",null,"So, now you know what it is, what it does and the basics of configuring your system. But how and where do you start?"),(0,i.kt)("h3",{id:"first-steps"},"First Steps"),(0,i.kt)("p",null,"The Meta-System can be downloaded through ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/meta-system"},"NPM"),". If you have node installed you probably already have npm and it is a matter of installing with the command\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g meta-system")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you don't have node and/or npm installed more info on those can be found ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"))),(0,i.kt)("p",null,"After installation all you need to do is have a configuration file (in the json format) and type in the command ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-system path/to/file/<configuration-name>.json"),". As soon as you hit enter Meta-System will begin validating your configuration and, if everything is fine, start your system!"),(0,i.kt)("p",null,"If you want a quick start you can try out our ",(0,i.kt)("inlineCode",{parentName:"p"},"example application"),". Alternatively, if you already have a node project you can have a look at the section ",(0,i.kt)("inlineCode",{parentName:"p"},"Integrating Meta-System to an existing system")," and use it as a NPM package for your project!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to tell the Meta-System what you want it to do, you'll need a special configuration file. This config is made up of the following properties:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: properties shown here are just basic properties and some were not addressed. For a complete, in depth look at the configuration, please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration Section")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Example Configuration Section")," for a quick start.")),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"This is the name of your system, it differentiates you from the crowd, so be creative! Do note however that this has no impact on the system's behavior and can be changed later, so don't worry if you can't come up with a catchy name right away."),(0,i.kt)("h3",{id:"version"},"version"),(0,i.kt)("p",null,"The current version of your system, so you and your colleagues can identify how far you've come. Again, this does not impact the system's behavior, and can be changed later (and should be, as you update your system with new capabilities!)"),(0,i.kt)("h3",{id:"protocols"},"protocols"),(0,i.kt)("p",null,"These determine how your system communicates with the outside world, so it is quite important! Here is where you configure whether your system will use the worldwide spread HTTP or any other type of communication."),(0,i.kt)("p",null,"More info can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Protocols Section"),"."),(0,i.kt)("h3",{id:"schemas"},"schemas"),(0,i.kt)("p",null,"Schemas define the things your system will work with. If you sell cars, a car should be defined with properties that matter to you such as the amount of doors, the engine power and the price. Once that is defined your system will be able to store and manage info about individual cars."),(0,i.kt)("p",null,"More info can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Schemas Section"),"."),(0,i.kt)("h3",{id:"businessoperations"},"businessOperations"),(0,i.kt)("p",null,"BusinessOperations, or BOps as we like to call them, are the heart of your system. They are what define what your system should do with the information it gets and holds. Here is where you can tell your system what it should do when your user tells the system he/she is 500 years old. Should it refuse to save this info or should it store it in your database anyways? In short, here is where the logic, the brains of the operations lives, so take good care of it!"),(0,i.kt)("p",null,"More info can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Business Operations Section"),"."))}c.isMDXComponent=!0}}]);