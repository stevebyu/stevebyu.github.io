(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(25)},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(10),s=n.n(i),o=(n(19),n(2)),c=n(3),h=n(5),u=n(4),l=n(6),d=n(1),m=(n(7),function(t){function e(){return Object(o.a)(this,e),Object(h.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("p",{className:this.props.selctd,id:this.props.carName,onClick:this.props.setCar},this.props.carName)}}]),e}(a.Component)),p=function(t){function e(){return Object(o.a)(this,e),Object(h.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("span",{className:"infoContainer",onClick:this.props.doShow},r.a.createElement("span",{className:this.props.shown},"[i]"),r.a.createElement("span",{className:this.props.notShown},"STUFF"))}}]),e}(a.Component),w=n(11),f=n.n(w),g=n(8),S=n.n(g),b=n(12),k=n.n(b),O=function(t){function e(t){var n;Object(o.a)(this,e);return(n=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={cars:["gray","whiteSub","greenSub","whiteCoveredTruck","whiteTruck","redTruck","redSedan"],carsSighted:[],sightingDatetime:S()().format(),shown:"info",notShown:"hdn",show:!1},n.setTheCar=n.setTheCar.bind(Object(d.a)(Object(d.a)(n))),n.markSighting=n.markSighting.bind(Object(d.a)(Object(d.a)(n))),n.doShow=n.doShow.bind(Object(d.a)(Object(d.a)(n))),n}return Object(l.a)(e,t),Object(c.a)(e,[{key:"makeArrayUnique",value:function(t){return t.filter(function(t,e,n){return n.indexOf(t)===e})}},{key:"sortArray",value:function(t){return t.sort(function(t,e){return t<e?-1:t>e?1:0}),t}},{key:"setTheCar",value:function(t){var e=t.target.id,n=this.state.carsSighted;n.indexOf(e)>-1?n=n.filter(function(t){return t!==e}):n.push(e);var a=this.makeArrayUnique(n),r=this.sortArray(a);this.setState({carsSighted:r})}},{key:"markSighting",value:function(t){var e="sighting"+S()().format("YYMMDDkkmm"),n=k()(e,this.state.sightingDatetime,this.state.carsSighted,"sightings",f.a);console.log(n),this.setState({carsSighted:[]})}},{key:"doShow",value:function(t){var e=!this.state.show;e?this.setState({shown:"hdn",notShown:"info",show:e}):this.setState({shown:"info",notShown:"hdn",show:e})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Redtruck Sightings",r.a.createElement(p,{shown:this.state.shown,notShown:this.state.notShown,doShow:this.doShow})),this.state.cars.map(function(e,n){var a=t.state.carsSighted.indexOf(e)>-1?"selectedCar":"car";return r.a.createElement(m,{key:n,carName:e,selctd:a,setCar:t.setTheCar})}),r.a.createElement("button",{onClick:this.markSighting},"Save")))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,n){}},[[13,2,1]]]);
//# sourceMappingURL=main.a58d2637.chunk.js.map