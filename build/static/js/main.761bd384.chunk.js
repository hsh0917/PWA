(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,a){e.exports=a.p+"static/media/landing_image.05329b7c.jpg"},245:function(e,t,a){e.exports=a(496)},494:function(e,t,a){},495:function(e,t,a){},496:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(17),c=a.n(r),o=a(12),i=a(13),s=a(15),m=a(14),u=a(16),d=a(20),h=a(24),p=a(202),E=a(45),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-ohri navbar-dark justify-content-end"},l.a.createElement("div",{className:"container"},l.a.createElement(d.c,{to:"/Main_menu"},l.a.createElement("p",{className:"mainBtn"},l.a.createElement(h.a,{icon:p.a,size:"1x"})," Main Menu")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse flex-grow-0",id:"collapsibleNavbar"},l.a.createElement("ul",{className:"navbar-nav text-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.c,{to:"/self_assessment"},l.a.createElement("a",{className:"nav-link"},"Self-Assessment"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.c,{to:"/resiliency_resources"},l.a.createElement("a",{className:"nav-link"},"Resiliency"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.c,{to:"/help"},l.a.createElement("a",{className:"nav-link"},"Get Help"))))))))}}]),t}(n.Component),v=Object(E.f)(b),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("h6",null,"Developed by OHRI"),l.a.createElement("img",{className:"toh_logo",alt:"logo",title:"toh logo",src:"https://res.cloudinary.com/ottawa-hospital-research-institute/image/upload/v1556026839/TOH_App/Ottawa_Hospital_Research_Institute_Horizontal_Colour.png"}))))}}]),t}(n.Component),g=a(205),y=a.n(g),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.id=setTimeout(function(){return e.setState({redirect:!0})},4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(E.a,{to:"/about"}):l.a.createElement("div",{className:"landing_container",style:{background:"url(".concat(y.a,") no-repeat center center fixed")}},l.a.createElement("div",{className:"landing_centered"},l.a.createElement("h1",null,"Welcome"),l.a.createElement("h1",null,"to"),l.a.createElement("h1",null,"TOH Resiliency App")))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about_container"},l.a.createElement("div",{className:"about_centered"},l.a.createElement("h1",null,"TOH Resiliency App"),l.a.createElement("h3",null,"Some text here talking about how great the app is and mybe how it helps you manage your mental health"),l.a.createElement(d.b,{to:"/login",className:"btn btn-primary"},"Let's begin")))}}]),t}(n.Component),j=a(33),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login_container"},l.a.createElement("div",{className:"login_centered"},l.a.createElement("h1",null,"TOH Resiliency App"),l.a.createElement(d.b,{to:"/main_menu",className:"btn btn-primary"},"Get help right now"),l.a.createElement("h3",null,"or"),l.a.createElement("h3",null,"Login"),l.a.createElement("button",{className:"btn btn-primary"},l.a.createElement(h.a,{icon:j.b,style:{color:"white"},size:"2x"})," Login with Facebook"),l.a.createElement("button",{className:"btn btn-danger"},l.a.createElement(h.a,{icon:j.c,style:{color:"white"},size:"2x"})," Login with Google"),l.a.createElement("button",{className:"btn btn-info"},l.a.createElement(h.a,{icon:j.e,style:{color:"white"},size:"2x"})," Login with Twitter"),l.a.createElement("button",{className:"btn btn-warning"},l.a.createElement(h.a,{icon:j.d,style:{color:"white"},size:"2x"})," Login with LinkdIn")))}}]),t}(n.Component),k=a(64),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={gender:"",age:""},a.genderHandleChange=a.genderHandleChange.bind(Object(k.a)(a)),a.ageHandleChange=a.ageHandleChange.bind(Object(k.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"genderHandleChange",value:function(e){this.setState({gender:e.target.value})}},{key:"ageHandleChange",value:function(e){this.setState({age:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container registration_container"},l.a.createElement("form",{className:"needs-validation",novalidate:!0},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gender:",l.a.createElement("input",{className:"form-control",type:"text",value:this.state.gender,onChange:this.genderHandleChange,placeholder:"Male/Female",required:!0}),l.a.createElement("div",{className:"valid-feedback"},"Valid."))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Age:",l.a.createElement("input",{className:"form-control",type:"text",value:this.state.age,onChange:this.ageHandleChange,placeholder:"32",required:!0}))),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main_menu_container"},l.a.createElement("div",{className:"main_menu_centered"},l.a.createElement("h1",null,"TOH Resiliency App"),l.a.createElement("h3",null,"Welcome, Name"),l.a.createElement("h3",null,"We have created an account for you"),l.a.createElement("h3",null,"You can start by selecting an option below"),l.a.createElement(d.b,{to:"/self_assessment",className:"btn btn-primary"},"Begin a self assessment"),l.a.createElement(d.b,{to:"/help",Style:{color:"red"},className:"btn btn-primary"},"Get help right now"),l.a.createElement(d.b,{to:"/resiliency_resources",className:"btn btn-primary"},"Learn about resiliency")))}}]),t}(n.Component),C=a(47),A=(a(313),a(23)),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.history.push("/health_Report")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"container selfAssessment_container"},l.a.createElement("form",{className:"needs-validation",noValidate:!0,onSubmit:this.submitForm.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("h2",{className:"mb-4"},"How are you today?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"}),l.a.createElement("div",{className:"col-9 emoji"},l.a.createElement("div",null,l.a.createElement(h.a,{icon:A.a,style:{color:"red"},size:"2x"})),l.a.createElement("div",null,l.a.createElement(h.a,{icon:A.c,size:"2x"})),l.a.createElement("div",null,l.a.createElement(h.a,{icon:A.b,style:{color:"green"},size:"2x"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Gratitude")),l.a.createElement("div",{className:"col-9"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Health")),l.a.createElement("div",{className:"col-9"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Sleep")),l.a.createElement("div",{className:"col-9"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Mood")),l.a.createElement("div",{className:"col-9"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Anxiety")),l.a.createElement("div",{className:"col-9"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Nutrition")),l.a.createElement("div",{className:"col-9"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Physical Symptoms")),l.a.createElement("div",{className:"col-9 last"},l.a.createElement(C.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"mt-3"},l.a.createElement("label",{htmlFor:"comment"},"Notes (optional)"),l.a.createElement("textarea",{className:"form-control",rows:"2",id:"comment"})),l.a.createElement("div",{className:"mt-3 selfAssessment_submit"},l.a.createElement("input",{className:"btn btn-primary",type:"submit"}))))))}}]),t}(n.Component),S=Object(E.f)(H),R=a(34),z=[{name:"Jan",Avg:245,Sleep:400,Health:300,amt:2400},{name:"Feb",Avg:300,Sleep:398,Health:600,amt:2210},{name:"Mar",Avg:400,Sleep:800,Health:200,amt:2290},{name:"Apr",Avg:780,Sleep:908,Health:100,amt:2e3},{name:"May",Avg:890,Sleep:600,Health:500,amt:2181},{name:"Jun",Avg:390,Sleep:800,Health:330,amt:2500}],L=(n.Component,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(R.e,{width:"100%",height:180},l.a.createElement(R.d,{data:z,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(R.a,{strokeDasharray:"3 3"}),l.a.createElement(R.g,{dataKey:"name"}),l.a.createElement(R.f,null),l.a.createElement(R.b,null),l.a.createElement(R.c,{type:"monotone",dataKey:"Avg",stroke:"#8884d8"}),l.a.createElement(R.c,{type:"monotone",dataKey:"Sleep",stroke:"#82ca9d"}),l.a.createElement(R.c,{type:"monotone",dataKey:"Health",stroke:"#adff2f"})))}}]),t}(n.Component)),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"container healthReport_container"},l.a.createElement("h2",null,"Your Health Report"),l.a.createElement("div",{className:"healthReport_chart"},l.a.createElement("h4",null,"Six month overview"),l.a.createElement("span",{className:"healthchart_icon_happy"},l.a.createElement(h.a,{icon:A.b,style:{color:"green"},size:"2x"})),l.a.createElement("span",{className:"healthchart_icon_sad"},l.a.createElement(h.a,{icon:A.a,style:{color:"red"},size:"2x"})),l.a.createElement(L,null)),l.a.createElement("div",{className:"healthReport_achievement"},l.a.createElement("h4",null,"Achievenments"),l.a.createElement("div",{className:"healthReport_achievement_icons"},l.a.createElement("img",{src:"https://img.icons8.com/dusk/80/000000/prize.png"}),l.a.createElement("img",{src:"https://img.icons8.com/doodle/80/000000/laurel-wreath.png"}),l.a.createElement("img",{src:"https://img.icons8.com/dusk/80/000000/trophy.png"}))),l.a.createElement("div",{className:"healthReport_Recommendations"},l.a.createElement("h4",null,"Recommendations"),l.a.createElement("p",null,"Some text here to talk about areas where the user can improve their numbers. Links to Other sections of the app, Some text here to talk about areas where the user can improve their numbers. Links to Other sections of the app"))))}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"help_container"},l.a.createElement("div",{className:"circle_div1"},l.a.createElement("a",{className:"btn btn-primary btn-circle1 d-flex justify-content-center align-items-center","data-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Breathe")),l.a.createElement("div",{className:"circle_div2"},l.a.createElement("a",{className:"btn btn-danger btn-circle2 d-flex justify-content-center align-items-center","data-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Break")),l.a.createElement("div",{className:"circle_div3"},l.a.createElement("a",{className:"btn btn-warning btn-circle3 d-flex justify-content-center align-items-center","data-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Reach Out"))))}}]),t}(n.Component),V=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"resiliency_resources_container"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Coming soon!"))))}}]),t}(n.Component),M=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return"/"==this.props.location.pathname?l.a.createElement("div",{className:"main_container"},l.a.createElement(E.d,null,l.a.createElement(E.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(N,null)}}),l.a.createElement(E.b,{path:"/about",render:function(e){return l.a.createElement(O,null)}}),l.a.createElement(E.b,{path:"/login",render:function(e){return l.a.createElement(w,null)}}),l.a.createElement(E.b,{path:"/registration",render:function(e){return l.a.createElement(_,null)}}),l.a.createElement(E.b,{path:"/main_menu",render:function(e){return l.a.createElement(x,null)}}),l.a.createElement(E.b,{path:"/self_assessment",render:function(e){return l.a.createElement(S,null)}}),l.a.createElement(E.b,{path:"/health_Report",render:function(e){return l.a.createElement(W,null)}}),l.a.createElement(E.b,{path:"/help",render:function(e){return l.a.createElement(T,null)}}),l.a.createElement(E.b,{path:"/resiliency_resources",render:function(e){return l.a.createElement(V,null)}}))):l.a.createElement("div",{className:"main_container"},l.a.createElement(E.d,null,l.a.createElement(E.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(N,null)}}),l.a.createElement(E.b,{path:"/about",render:function(e){return l.a.createElement(O,null)}}),l.a.createElement(E.b,{path:"/login",render:function(e){return l.a.createElement(w,null)}}),l.a.createElement(E.b,{path:"/registration",render:function(e){return l.a.createElement(_,null)}}),l.a.createElement(E.b,{path:"/main_menu",render:function(e){return l.a.createElement(x,null)}}),l.a.createElement(E.b,{path:"/self_assessment",render:function(e){return l.a.createElement(S,null)}}),l.a.createElement(E.b,{path:"/health_Report",render:function(e){return l.a.createElement(W,null)}}),l.a.createElement(E.b,{path:"/help",render:function(e){return l.a.createElement(T,null)}}),l.a.createElement(E.b,{path:"/resiliency_resources",render:function(e){return l.a.createElement(V,null)}})),l.a.createElement(f,null))}}]),t}(n.Component),B=Object(E.f)(M);a(74).b.add(A.b,A.c,A.a,j.a);var F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(B,null)))}}]),t}(n.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){if("serviceWorker"in navigator){if(new URL("https://toh-pwa-app.herokuapp.com/#",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("https://toh-pwa-app.herokuapp.com/#","/service-worker.js");G?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):U(t,e)})}}function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var I=a(220),J=a.n(I);a(493),a(494),a(495);c.a.render(l.a.createElement(F,null),document.getElementById("root")),D(),D({onUpdate:function(e){return J()(e,{textContent:"A new version of this app is available. Click here!",className:"btn btn-warning workbox-refresh animateOpen"})}})}},[[245,1,2]]]);
//# sourceMappingURL=main.761bd384.chunk.js.map