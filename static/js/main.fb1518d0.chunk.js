(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},126:function(e,t,a){},130:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(23),i=a.n(o),s=(a(79),a(15)),l=a(16),c=a(18),m=a(17),u=a(19),d=(a(81),a(49)),h=a(33),p=a(21),g=a(151),b=(a(86),a(148)),f=a(149),E=a(150),k=a(44),y=a.n(k),w=(a(92),a(65)),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",{id:"about"},"Here's what I'm up to"),r.a.createElement("ul",{id:"about-field"},w.map(function(e,t){return r.a.createElement(b.a,null,r.a.createElement(y.a,{once:!0},r.a.createElement(f.a,{align:"center",xs:12,sm:2,md:2,smOffset:3,mdOffset:3},r.a.createElement(E.a,{src:e.imageurl,className:"about-photo"})),r.a.createElement(f.a,{xs:12,sm:5,md:5,className:"about-tag"},r.a.createElement("h2",null,e.title),r.a.createElement("h4",null,e.subtitle),r.a.createElement("p",null,e.desc),""!=e.extras&&r.a.createElement("p",null,r.a.createElement("a",{href:e.link,target:"_blank"},e.extras)))))})))}}]),t}(n.Component),v=(a(124),a(69)),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement("h1",{id:"projects"},"Here are some of my projects"),function(){var e=[],t=[];return v.map(function(a,n){n%3==2?(e.push(r.a.createElement(f.a,{className:"project-post",align:"center",xs:12,sm:4,md:4,lg:4},r.a.createElement(E.a,{src:a.imageurl,className:"projects-photo"}),r.a.createElement("h2",null,a.title),""!=a.extras&&r.a.createElement("h4",null,a.extras),r.a.createElement("p",null,a.desc),r.a.createElement("h4",null,""!=a.codelink&&r.a.createElement("a",{href:a.codelink,target:"_blank"},"Github"),""!=a.demolink&&r.a.createElement("a",{href:a.demolink,target:"_blank"},"Demo")))),t.push(r.a.createElement(b.a,{className:"project-row"},e)),e=[]):e.push(r.a.createElement(f.a,{className:"project-post",align:"center",xs:12,sm:4,md:4,lg:4},r.a.createElement(E.a,{src:a.imageurl,className:"projects-photo"}),r.a.createElement("h2",null,a.title),""!=a.extras&&r.a.createElement("h4",null,a.extras),r.a.createElement("p",null,a.desc),r.a.createElement("h4",null,""!=a.codelink&&r.a.createElement("a",{href:a.codelink,target:"_blank"},"Github"),""!=a.demolink&&r.a.createElement("a",{href:a.demolink,target:"_blank"},"Demo"))))}),r.a.createElement("div",null,t,r.a.createElement(b.a,{className:"project-row"},e))}())}}]),t}(n.Component),x=(a(126),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact",align:"center"},r.a.createElement(b.a,null,r.a.createElement("h1",{id:"contact"},"Contact me!"),r.a.createElement("a",{href:"https://www.linkedin.com/in/nicholas-lin-2758ba156/",target:"_blank"},r.a.createElement(E.a,{src:"assets/linkedin.png",className:"logo",id:"linkedin"})),r.a.createElement("a",{href:"https://www.github.com/nicklin37"},r.a.createElement(E.a,{src:"assets/github.png",className:"logo"})),r.a.createElement("a",{href:"mailto:nlinucla@gmail.com"},r.a.createElement(E.a,{src:"assets/email.png",className:"logo"}))))}}]),t}(n.Component)),C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainbackground"},r.a.createElement("div",{className:"picture"},r.a.createElement("h2",null,"Nicholas Lin"),r.a.createElement(p.HashLink,{to:"#about"},r.a.createElement("div",{id:"button"},r.a.createElement(g.a,{componentClass:p.HashLink,bsStyle:"primary",href:"#about",to:"/website#about"},"Explore")))),r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(x,null))}}]),t}(n.Component),I=a(153),H=a(154),N=a(152),S=(a(130),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I.a,{default:!0,collapseOnSelect:!0},r.a.createElement(I.a.Header,null,r.a.createElement(I.a.Brand,null,r.a.createElement(p.HashLink,{to:"/website"},"Welcome"))),r.a.createElement(I.a.Collapse,null,r.a.createElement(H.a,{pullRight:!0},r.a.createElement(N.a,{eventKey:1,componentClass:p.HashLink,href:"#about",to:"/website#about"},"About"),r.a.createElement(N.a,{eventKey:2,componentClass:p.HashLink,href:"#projects",to:"/website#projects"},"Projects"),r.a.createElement(N.a,{eventKey:3,componentClass:p.HashLink,href:"#contact",to:"/website#contact"},"Contact")))))}}]),t}(n.Component)),A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(h.a,{exact:!0,path:"/website",component:C}),r.a.createElement(h.a,{path:"/website#about",component:j}),r.a.createElement(h.a,{path:"/website#projects",component:O}),r.a.createElement("route",{path:"/website#contact",component:x})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e){e.exports=[{id:1,imageurl:"assets/ucla.jpg",title:"University of California, Los Angeles",subtitle:"B.S. in Computer Science, Graduating June 2021",desc:"Highlighted coursework: Algorithms, Programming Languages, Operating Systems, Database Systems, Probability Theory, Linear Algebra, Computer Architecture",extras:"",link:""},{id:2,imageurl:"assets/ehealth.jpg",title:"E-Health Research Lab, UCLA",subtitle:"Software Developer, May 2018 - Present",desc:"BREATHE is a project that utilizes sensor-based research to prevent asthma attacks in pediatric patients. I work on server-side development in a Python-Flask environment with a NoSQL database. I've implemented database redesigns, enhanced security features, and server encryption.",extras:"Check out my lab!",link:"http://er.cs.ucla.edu/"},{id:3,imageurl:"assets/esuc.png",title:"Engineering Society of UCLA",subtitle:"President, 2019 - Present \nExternal Vice President, 2018 - 2019",desc:"As President of the Engineering Society, I lead a board of 22 engineers aimed at connecting engineering students with the School of Engineering, industry, and one another. I've coordinated events for over 600 engineers, hosted company info sessions, and advocated for engineering students alongside the Associate Dean.",extras:"See what ESUC is about",link:"http://www.esuc.ucla.edu/"},{id:4,imageurl:"assets/db.png",title:"Daily Bruin",subtitle:"Software Engineer, March 2018-May 2019",desc:"Back-end developer for Meow, an internal tool utilized by journalists to publish their news articles across various social media platforms. I've added features to improve productivity for users and migrated front-end features to React",extras:"",link:""}]},69:function(e){e.exports=[{id:1,imageurl:"assets/pic-it.png",title:"Pic-It",desc:"Decide amongst your friends where to eat and find local results! Join or host a lobby with your friends to vote on random pictures of food. I worked on connecting Google Firebase to our application to use it as both a server and database. I also implemented the algorithm for computing the results of food picture polling. Technologies: Android, Java, Google Firebase",extras:"",demolink:"",codelink:"https://github.com/nicklin37/Pic-It"},{id:2,imageurl:"assets/translate.png",title:"translate.jpg",desc:"translate.jpg is a language learning app designed to allow the user to take a picture and then see the translations of objects in the photo. I connected our application with the Google Cloud Vision API and Google Translate API, and I parsed the results to output accurate translations. Technologies: Android, Java, Google Vision API, Google Translate API",extras:"",demolink:"",codelink:"https://github.com/nicklin37/translate.jpg"},{id:3,imageurl:"assets/orchestrate.png",title:"Orchestrate",desc:"Record yourself singing, and Orchestrate will automatically generate a background track matching the key and tempo that you're singing at. I implemented the algorithms for determining the key and tempo of a recorded audio file by utilizing Fourier transforms and a Python Tempo API. Winner of Best Web Hack. Technologies: Java, Python",extras:"Winner of Hack on the Hill IV",demolink:"",codelink:"https://github.com/nicklin37/Orchestrate"},{id:4,imageurl:"assets/crimerate.png",title:"Crime Rate Heat Map",desc:"View crime rates as heat signatures in an interactive map from data that has been scraped from official crime report websites. I connected Google Maps with our web application and used Google Firebase to store data points that are viewed as heat signatures. Technologies: NodeJS, Google Maps API, Google Firebase, HTML/CSS",extras:"",demolink:"",codelink:"https://github.com/nicklin37/SBHacks2018"},{id:5,imageurl:"assets/hiddengems.png",title:"Hidden Gems",desc:'Find underrated local food and recreation spots from crowd sourced data, and rate your own "hidden gems" for others to see. I designed and styled the front-end user interface for both the landing page and interactive map. Technologies: NodeJS, Google Maps API, HTML/CSS',extras:"",demolink:"",codelink:"https://github.com/nicklin37/HiddenGems"},{id:6,imageurl:"assets/hungryme.jpg",title:"Hungry Me",desc:"Manage the contents of your fridge, find recipes for what you have, and make shopping lists! This project is still being built... check back soon for updates!",extras:"",demolink:"",codelink:"https://github.com/nicklin37/HungryMe"},{id:7,imageurl:"assets/nachenblaster.png",title:"NachenBlaster",desc:"A good old survival game where the player has to blast the ships to get more points. I implemented all the gameplay features in object-oriented style. Technologies: C++",extras:"",demolink:"",codelink:""}]},73:function(e,t,a){e.exports=a(147)},79:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){},92:function(e,t,a){}},[[73,2,1]]]);
//# sourceMappingURL=main.fb1518d0.chunk.js.map