(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(4),i=n.n(o),r=(n(17),n(5)),c=n(6),s=n(9),u=n(7),m=n(10),p=n(1),d=(n(19),n(8)),h=n.n(d),E=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={lateness:"",displayEvent:"",message:"",hour:"12",minute:"00",meridian:"am",eventKind:"general"},n.setHour=n.setHour.bind(Object(p.a)(Object(p.a)(n))),n.setMinute=n.setMinute.bind(Object(p.a)(Object(p.a)(n))),n.setMeridian=n.setMeridian.bind(Object(p.a)(Object(p.a)(n))),n.setEventKind=n.setEventKind.bind(Object(p.a)(Object(p.a)(n))),n.checkFashionablyLateness=n.checkFashionablyLateness.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"checkFashionablyLateness",value:function(){var e=this.state.hour+":"+this.state.minute+" "+this.state.meridian,t=h()(e,this.state.eventKind);this.setState({lateness:t.lateness,message:t.message,displayEvent:this.state.eventKind})}},{key:"setHour",value:function(e){this.setState({hour:e.target.value})}},{key:"setMinute",value:function(e){this.setState({minute:e.target.value})}},{key:"setMeridian",value:function(e){this.setState({meridian:e.target.value})}},{key:"setEventKind",value:function(e){this.setState({eventKind:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"Fashionably Late"),l.a.createElement("p",null,"event: ",this.state.displayEvent),l.a.createElement("p",null,"result: ",this.state.lateness),l.a.createElement("p",null,this.state.message)),l.a.createElement("div",{className:"App-content"},l.a.createElement("div",{className:"App-time"},l.a.createElement("select",{className:"App-hour",style:{float:"left"},onChange:this.setHour},l.a.createElement("option",null,"12"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11")),l.a.createElement("select",{className:"App-minute",style:{float:"left"},onChange:this.setMinute},l.a.createElement("option",null,"00"),l.a.createElement("option",null,"05"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"25"),l.a.createElement("option",null,"30"),l.a.createElement("option",null,"35"),l.a.createElement("option",null,"40"),l.a.createElement("option",null,"45"),l.a.createElement("option",null,"50"),l.a.createElement("option",null,"55")),l.a.createElement("select",{className:"App-meridian",style:{float:"left"},onChange:this.setMeridian},l.a.createElement("option",null,"am"),l.a.createElement("option",null,"pm"))),l.a.createElement("div",{className:"App-event-container"},l.a.createElement("select",{className:"App-event",style:{float:"clear"},onChange:this.setEventKind},l.a.createElement("option",null,"general"),l.a.createElement("option",null,"fundraiser"),l.a.createElement("option",null,"gala"),l.a.createElement("option",null,"party/dance"),l.a.createElement("option",null,"dinner party"),l.a.createElement("option",null,"bridal shower"),l.a.createElement("option",null,"baby shower"),l.a.createElement("option",null,"wedding"),l.a.createElement("option",null,"funeral"),l.a.createElement("option",null,"graduation"),l.a.createElement("option",null,"play"),l.a.createElement("option",null,"church service"),l.a.createElement("option",null,"job interview"),l.a.createElement("option",null,"movie"),l.a.createElement("option",null,"symphony"))),l.a.createElement("div",{className:"App-button-container"},l.a.createElement("button",{className:"App-check",onClick:this.checkFashionablyLateness},"check"))))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rfl",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rfl","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):f(t,e)})}}()}},[[11,2,1]]]);
//# sourceMappingURL=main.209aef21.chunk.js.map