(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){e.exports=a.p+"static/media/landing_image.05329b7c.jpg"},243:function(e,t,a){e.exports=a(494)},492:function(e,t,a){},493:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(17),r=a.n(c),i=a(12),o=a(13),s=a(15),m=a(14),u=a(16),d=a(20),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-ohri navbar-dark justify-content-end"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"TOH Resiliency App"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse flex-grow-0",id:"collapsibleNavbar"},l.a.createElement("ul",{className:"navbar-nav text-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.c,{to:"/self_assessment"},l.a.createElement("a",{className:"nav-link"},"Self-Assessment"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.c,{to:"/resiliency_resources"},l.a.createElement("a",{className:"nav-link"},"Resiliency"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.c,{to:"/help"},l.a.createElement("a",{className:"nav-link"},"Get Help"))))))))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("h6",null,"Developed by OHRI"),l.a.createElement("img",{className:"toh_logo",alt:"logo",title:"toh logo",src:"https://res.cloudinary.com/ottawa-hospital-research-institute/image/upload/v1556026839/TOH_App/Ottawa_Hospital_Research_Institute_Horizontal_Colour.png"}))))}}]),t}(n.Component),b=a(45),p=a(204),v=a.n(p),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={redirect:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.id=setTimeout(function(){return e.setState({redirect:!0})},4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(b.a,{to:"/about"}):l.a.createElement("div",{className:"landing_container",style:{background:"url(".concat(v.a,") no-repeat center center fixed")}},l.a.createElement("div",{className:"landing_centered"},l.a.createElement("h1",null,"Welcome"),l.a.createElement("h1",null,"to"),l.a.createElement("h1",null,"TOH Resiliency App")))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about_container"},l.a.createElement("div",{className:"about_centered"},l.a.createElement("h1",null,"TOH Resiliency App"),l.a.createElement("h3",null,"Some text here talking about how great the app is and mybe how it helps you manage your mental health"),l.a.createElement(d.b,{to:"/login",className:"btn btn-primary"},"Let's begin")))}}]),t}(n.Component),y=a(25),N=a(33),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login_container"},l.a.createElement("div",{className:"login_centered"},l.a.createElement("h1",null,"TOH Resiliency App"),l.a.createElement(d.b,{to:"/main_menu",className:"btn btn-primary"},"Get help right now"),l.a.createElement("h3",null,"or"),l.a.createElement("h3",null,"Login"),l.a.createElement("button",{className:"btn btn-primary"},l.a.createElement(y.a,{icon:N.b,style:{color:"white"},size:"2x"})," Login with Facebook"),l.a.createElement("button",{className:"btn btn-danger"},l.a.createElement(y.a,{icon:N.c,style:{color:"white"},size:"2x"})," Login with Google"),l.a.createElement("button",{className:"btn btn-info"},l.a.createElement(y.a,{icon:N.e,style:{color:"white"},size:"2x"})," Login with Twitter"),l.a.createElement("button",{className:"btn btn-warning"},l.a.createElement(y.a,{icon:N.d,style:{color:"white"},size:"2x"})," Login with LinkdIn")))}}]),t}(n.Component),j=a(64),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={gender:"",age:""},a.genderHandleChange=a.genderHandleChange.bind(Object(j.a)(a)),a.ageHandleChange=a.ageHandleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"genderHandleChange",value:function(e){this.setState({gender:e.target.value})}},{key:"ageHandleChange",value:function(e){this.setState({age:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container registration_container"},l.a.createElement("form",{className:"needs-validation",novalidate:!0},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gender:",l.a.createElement("input",{className:"form-control",type:"text",value:this.state.gender,onChange:this.genderHandleChange,placeholder:"Male/Female",required:!0}),l.a.createElement("div",{className:"valid-feedback"},"Valid."))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Age:",l.a.createElement("input",{className:"form-control",type:"text",value:this.state.age,onChange:this.ageHandleChange,placeholder:"32",required:!0}))),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main_menu_container"},l.a.createElement("div",{className:"main_menu_centered"},l.a.createElement("h1",null,"TOH Resiliency App"),l.a.createElement("h3",null,"Welcome, Name"),l.a.createElement("h3",null,"We have created an account for you"),l.a.createElement("h3",null,"You can start by selecting an option below"),l.a.createElement(d.b,{to:"/self_assessment",className:"btn btn-primary"},"Begin a self assessment"),l.a.createElement(d.b,{to:"/help",activeStyle:{color:"red"},className:"btn btn-primary"},"Get help right now"),l.a.createElement(d.b,{to:"/resiliency_resources",className:"btn btn-primary"},"Learn about resiliency")))}}]),t}(n.Component),_=a(47),x=(a(311),a(23)),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.history.push("/health_Report")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"container selfAssessment_container"},l.a.createElement("form",{className:"needs-validation",novalidate:!0,onSubmit:this.submitForm.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("h2",{className:"mb-4"},"How are you today?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"}),l.a.createElement("div",{className:"col-9 emoji"},l.a.createElement("div",null,l.a.createElement(y.a,{icon:x.a,style:{color:"red"},size:"2x"})),l.a.createElement("div",null,l.a.createElement(y.a,{icon:x.c,size:"2x"})),l.a.createElement("div",null,l.a.createElement(y.a,{icon:x.b,style:{color:"green"},size:"2x"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Gratitude")),l.a.createElement("div",{className:"col-9"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Health")),l.a.createElement("div",{className:"col-9"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Sleep")),l.a.createElement("div",{className:"col-9"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Mood")),l.a.createElement("div",{className:"col-9"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Anxiety")),l.a.createElement("div",{className:"col-9"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Nutrition")),l.a.createElement("div",{className:"col-9"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("label",null,"Physical Symptoms")),l.a.createElement("div",{className:"col-9 last"},l.a.createElement(_.a,{dots:!0,step:20,defaultValue:0}))),l.a.createElement("div",{className:"mt-5"},l.a.createElement("label",{for:"comment"},"Notes (optional)"),l.a.createElement("textarea",{class:"form-control",rows:"3",id:"comment"})),l.a.createElement("div",{className:"mt-3 selfAssessment_submit"},l.a.createElement("input",{type:"submit"}))))))}}]),t}(n.Component),A=Object(b.f)(C),H=a(34),S=[{name:"Jan",Avg:245,Sleep:400,Health:300,amt:2400},{name:"Feb",Avg:300,Sleep:398,Health:600,amt:2210},{name:"Mar",Avg:400,Sleep:800,Health:200,amt:2290},{name:"Apr",Avg:780,Sleep:908,Health:100,amt:2e3},{name:"May",Avg:890,Sleep:600,Health:500,amt:2181},{name:"Jun",Avg:390,Sleep:800,Health:330,amt:2500}],z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cx,a=e.cy;e.stroke,e.payload;return e.value>500?l.a.createElement("svg",{x:t-10,y:a-10,width:20,height:20,fill:"green",viewBox:"0 0 1024 1024"},l.a.createElement("path",{d:"M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"})):l.a.createElement("svg",{x:t-10,y:a-10,width:20,height:20,fill:"red",viewBox:"0 0 1024 1024"},l.a.createElement("path",{d:"M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z"}))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(H.e,{width:"90%",height:230},l.a.createElement(H.d,{data:S,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(H.a,{strokeDasharray:"3 3"}),l.a.createElement(H.g,{dataKey:"name"}),l.a.createElement(H.f,null),l.a.createElement(H.b,null),l.a.createElement(H.c,{type:"monotone",dataKey:"Avg",stroke:"#8884d8",dot:l.a.createElement(z,null)}),l.a.createElement(H.c,{type:"monotone",dataKey:"Sleep",stroke:"#82ca9d"}),l.a.createElement(H.c,{type:"monotone",dataKey:"Health",stroke:"#adff2f"})))}}]),t}(n.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"container healthReport_container"},l.a.createElement("h2",null,"Your Health Report"),l.a.createElement("div",{className:"healthReport_chart"},l.a.createElement("h4",null,"Six month overview"),l.a.createElement("span",{className:"healthchart_icon_happy"},l.a.createElement(y.a,{icon:x.b,style:{color:"green"},size:"2x"})),l.a.createElement("span",{className:"healthchart_icon_sad"},l.a.createElement(y.a,{icon:x.a,style:{color:"red"},size:"2x"})),l.a.createElement(R,null)),l.a.createElement("div",null,l.a.createElement("h4",null,"Achievenments")),l.a.createElement("div",null,l.a.createElement("h4",null,"Recommendations"))))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"help_container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"circle_div1"},l.a.createElement("a",{className:"btn btn-primary btn-circle1 d-flex justify-content-center align-items-center","data-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Breathe")),l.a.createElement("div",{className:"circle_div2"},l.a.createElement("a",{className:"btn btn-danger btn-circle2 d-flex justify-content-center align-items-center","data-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Break")),l.a.createElement("div",{className:"circle_div3"},l.a.createElement("a",{className:"btn btn-warning btn-circle3 d-flex justify-content-center align-items-center","data-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Reach Out")))))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"resiliency_resources_container"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Coming soon!"))))}}]),t}(n.Component),W=Object(b.f)(function(e){return l.a.createElement("div",{className:"main_container"},l.a.createElement(b.d,null,l.a.createElement(b.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(f,null)}}),l.a.createElement(b.b,{path:"/about",render:function(e){return l.a.createElement(g,null)}}),l.a.createElement(b.b,{path:"/login",render:function(e){return l.a.createElement(O,null)}}),l.a.createElement(b.b,{path:"/registration",render:function(e){return l.a.createElement(w,null)}}),l.a.createElement(b.b,{path:"/main_menu",render:function(e){return l.a.createElement(k,null)}}),l.a.createElement(b.b,{path:"/self_assessment",render:function(e){return l.a.createElement(A,null)}}),l.a.createElement(b.b,{path:"/health_Report",render:function(e){return l.a.createElement(q,null)}}),l.a.createElement(b.b,{path:"/help",render:function(e){return l.a.createElement(M,null)}}),l.a.createElement(b.b,{path:"/resiliency_resources",render:function(e){return l.a.createElement(T,null)}})))});a(74).b.add(x.b,x.c,x.a,N.a);var L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(W,null),l.a.createElement(E,null)))}}]),t}(n.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(491),a(492),a(493);r.a.render(l.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("http://localhost:5000",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("http://localhost:5000","/service-worker.js");V?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)})}}()}},[[243,1,2]]]);
//# sourceMappingURL=main.a66c160a.chunk.js.map