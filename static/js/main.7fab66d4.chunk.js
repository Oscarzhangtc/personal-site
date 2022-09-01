(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),a=t(1),i=t(16),s=t(3),l=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&l.a.initialize(o);var b=function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},h=t(5),u=t(23),d=[{index:!0,label:"Oscar Zhang",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return t.e(4).then(t.t.bind(null,165,7))})),m=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsx)("section",{id:"intro",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Oscar Zhang"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:oscarzhang3279@gmail.com",children:"oscarzhang3279@gmail.com"})})]})}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Oscar. I am passionate about building net-postive products. I am a student at ",Object(c.jsx)("a",{href:"https://entrepreneurship.babson.edu/babson-number-one-entrepreneurship/#:~:text=Babson%20College%20was%20named%20the,by%20U.S.%20News%20%26%20World%20Report.",children:"Babson College"})," and",Object(c.jsx)("a",{href:"https://www.newswise.com/articles/mit-study-names-olin-college-world-leader-in-engineering-education",children:" Olin School of Engineering "}),". I have worked in multiple industries and companies including ",Object(c.jsx)("a",{href:"https://aws.amazon.com/",children:"AWS"}),", ",Object(c.jsx)("a",{href:"https://sosv.com/",children:"SOSV"}),", ",Object(c.jsx)("a",{href:"https://corporate.jd.com/home",children:"JD.com"}),", ",Object(c.jsx)("a",{href:"https://www.safran-group.com/",children:"Safran"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Oscar Zhang ",Object(c.jsx)(h.b,{to:"/",children:"zhangoscar.com"}),"."]})]})]})},g=function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Oscar Zhang",defaultTitle:"Oscar Zhang",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Oscar's Zhang Web Presence"};n.a=v},25:function(e,n,t){"use strict";var c=t(0),a=(t(1),t(29)),i=t(30),s=t(31),l=t(32),r=[{link:"https://github.com/oscarzhangtc",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/oscarzhangtc",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:oscarzhang@3279.com",label:"Email",icon:l.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),s=t(15),l=t(5),r=t(3),j=t(21),o=(t(45),Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,162))}))),b=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,169))})),h=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,163))})),u=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,164))})),d=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,168))})),O=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,166))})),m=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,167))})),x=function(){return Object(c.jsx)(l.a,{basename:"",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:u,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(p,{}),f):Object(s.render)(Object(c.jsx)(p,{}),f)}},[[46,1,3]]]);
//# sourceMappingURL=main.7fab66d4.chunk.js.map