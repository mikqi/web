(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(t,e,a){var r=a(3);e.f=r},166:function(t,e,a){"use strict";var r=a(4),n=a(1),s=a(23),i=a(19),o=a(12),l=a(77),c=a(126),u=a(2),p=a(11),d=a(32),f=a(10),m=a(7),h=a(21),v=a(20),y=a(36),g=a(35),x=a(48),w=a(73),_=a(46),A=a(167),b=a(76),$=a(22),k=a(13),C=a(74),S=a(17),M=a(14),T=a(75),j=a(50),P=a(47),N=a(71),E=a(3),L=a(165),D=a(168),I=a(49),O=a(28),R=a(72).forEach,U=j("hidden"),B=E("toPrimitive"),G=O.set,K=O.getterFor("Symbol"),W=Object.prototype,J=n.Symbol,X=s("JSON","stringify"),q=$.f,H=k.f,Y=A.f,z=C.f,F=T("symbols"),Q=T("op-symbols"),V=T("string-to-symbol-registry"),Z=T("symbol-to-string-registry"),tt=T("wks"),et=n.QObject,at=!et||!et.prototype||!et.prototype.findChild,rt=o&&u((function(){return 7!=x(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=q(W,e);r&&delete W[e],H(t,e,a),r&&t!==W&&H(W,e,r)}:H,nt=function(t,e){var a=F[t]=x(J.prototype);return G(a,{type:"Symbol",tag:t,description:e}),o||(a.description=e),a},st=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},it=function(t,e,a){t===W&&it(Q,e,a),m(t);var r=y(e,!0);return m(a),p(F,r)?(a.enumerable?(p(t,U)&&t[U][r]&&(t[U][r]=!1),a=x(a,{enumerable:g(0,!1)})):(p(t,U)||H(t,U,g(1,{})),t[U][r]=!0),rt(t,r,a)):H(t,r,a)},ot=function(t,e){m(t);var a=v(e),r=w(a).concat(pt(a));return R(r,(function(e){o&&!lt.call(a,e)||it(t,e,a[e])})),t},lt=function(t){var e=y(t,!0),a=z.call(this,e);return!(this===W&&p(F,e)&&!p(Q,e))&&(!(a||!p(this,e)||!p(F,e)||p(this,U)&&this[U][e])||a)},ct=function(t,e){var a=v(t),r=y(e,!0);if(a!==W||!p(F,r)||p(Q,r)){var n=q(a,r);return!n||!p(F,r)||p(a,U)&&a[U][r]||(n.enumerable=!0),n}},ut=function(t){var e=Y(v(t)),a=[];return R(e,(function(t){p(F,t)||p(P,t)||a.push(t)})),a},pt=function(t){var e=t===W,a=Y(e?Q:v(t)),r=[];return R(a,(function(t){!p(F,t)||e&&!p(W,t)||r.push(F[t])})),r};(l||(M((J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),a=function(t){this===W&&a.call(Q,t),p(this,U)&&p(this[U],e)&&(this[U][e]=!1),rt(this,e,g(1,t))};return o&&at&&rt(W,e,{configurable:!0,set:a}),nt(e,t)}).prototype,"toString",(function(){return K(this).tag})),M(J,"withoutSetter",(function(t){return nt(N(t),t)})),C.f=lt,k.f=it,$.f=ct,_.f=A.f=ut,b.f=pt,L.f=function(t){return nt(E(t),t)},o&&(H(J.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),i||M(W,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:J}),R(w(tt),(function(t){D(t)})),r({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=String(t);if(p(V,e))return V[e];var a=J(e);return V[e]=a,Z[a]=e,a},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(p(Z,t))return Z[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!o},{create:function(t,e){return void 0===e?x(t):ot(x(t),e)},defineProperty:it,defineProperties:ot,getOwnPropertyDescriptor:ct}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ut,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){b.f(1)}))},{getOwnPropertySymbols:function(t){return b.f(h(t))}}),X)&&r({target:"JSON",stat:!0,forced:!l||u((function(){var t=J();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}))},{stringify:function(t,e,a){for(var r,n=[t],s=1;arguments.length>s;)n.push(arguments[s++]);if(r=e,(f(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),n[1]=e,X.apply(null,n)}});J.prototype[B]||S(J.prototype,B,J.prototype.valueOf),I(J,"Symbol"),P[U]=!0},167:function(t,e,a){var r=a(20),n=a(46).f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?function(t){try{return n(t)}catch(t){return i.slice()}}(t):n(r(t))}},168:function(t,e,a){var r=a(125),n=a(11),s=a(165),i=a(13).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});n(e,t)||i(e,t,{value:s.f(t)})}},169:function(t,e,a){"use strict";var r=a(4),n=a(12),s=a(1),i=a(11),o=a(10),l=a(13).f,c=a(124),u=s.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(p[e]=!0),e};c(d,u);var f=d.prototype=u.prototype;f.constructor=d;var m=f.toString,h="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=m.call(t);if(i(p,t))return"";var a=h?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:d})}},170:function(t,e,a){var r=a(14),n=Date.prototype,s=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r(n,"toString",(function(){var t=i.call(this);return t==t?s.call(this):"Invalid Date"}))},177:function(t,e,a){},178:function(t,e,a){},179:function(t,e,a){},180:function(t,e){},198:function(t,e,a){"use strict";var r=a(177);a.n(r).a},199:function(t,e,a){"use strict";var r=a(4),n=a(72).filter,s=a(52),i=a(40),o=s("filter"),l=i("filter");r({target:"Array",proto:!0,forced:!o||!l},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},200:function(t,e,a){"use strict";var r=a(178);a.n(r).a},201:function(t,e,a){"use strict";var r=a(179);a.n(r).a},202:function(t,e,a){"use strict";var r=a(180),n=a.n(r);e.default=n.a},212:function(t,e,a){"use strict";a.r(e);a(166),a(169),a(27),a(33),a(81),a(78),a(51),a(186),a(29),a(80),a(34),a(127),a(171);var r=a(172),n=a(86),s={props:{selectorPrefix:{type:String,default:"mcv"},daily:{type:Array,required:!0},provinces:{type:Object,required:!0}},computed:{colorRange:function(){return{total_cases:[0,1e3]}[this.currentType]},stopRange:function(){return{total_cases:[0,150,300,450,600,750,900,1e3]}[this.currentType]},legendText:function(){return{total_cases:"Number of total cases"}[this.currentType]}},data:function(){return{currentType:"total_cases"}},mounted:function(){var t=this;this.fetchResources().then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transformToMap(t.daily[t.daily.length-1].data),e.t0=t,e.t1=t,e.next=5,a.json();case 5:e.t2=e.sent,e.t3=r,e.t4=e.t1.render.call(e.t1,e.t2,e.t3),e.t0.renderLegend.call(e.t0,e.t4),t.$tippy(t.getSelector(".province"),{followCursor:!0,plugins:[n.b],content:function(t){return t.getAttribute("data-tooltip")}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},methods:{getSelector:function(t){return".".concat(this.selectorPrefix," ").concat(t)},getId:function(t){return"".concat(this.selectorPrefix,"-").concat(t)},render:function(t,e){var a=this,r=this.$d3.geoEquirectangular().scale(1e3).translate([-1650,120]),n=this.$d3.geoPath().projection(r),s=this.$d3.select(this.getSelector(".content")).append("svg").attr("viewBox",[0,0,800,400]),i=this.$d3;return s.append("g").selectAll("path").data(t.features).join("path").attr("fill",(function(t){return a.color(e.get(t.properties.slug).value)})).attr("data-tooltip",(function(t){return"".concat(e.get(t.properties.slug).name," ").concat(e.get(t.properties.slug).value)})).attr("stroke","#22292f").attr("stroke-linejoin","round").attr("d",n).attr("id",(function(t){return a.getId(t.properties.slug)})).attr("class","province").on("mouseover",(function(){s.selectAll(".province").transition().style("opacity",.5).attr("stroke","#22292f"),i.select(this).transition().style("opacity",1).attr("stroke","black")})).on("mouseleave",(function(){s.selectAll(".province").transition().style("opacity",1).attr("stroke","#22292f")})),s},renderLegend:function(t){var e=this,a=this.getId("linear-gradient"),r=t.append("defs").attr("class","linear-gradient-wrapper").append("linearGradient").attr("id",a).attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%"),n=this.stopRange;r.selectAll("stop").data(n).join("stop").attr("offset",(function(t,e){return"".concat(Math.floor((e+1)/n.length*100),"%")})).attr("stop-color",(function(t){return e.color(t)}));var s=t.append("g").attr("class","legend-wrapper").style("transform","translate(calc(50% - 150px), 375px)");s.append("rect").attr("width",300).attr("height",5).style("fill","url(#".concat(a,")"));var i=n.slice(0,n.length-1),o=s.append("g").attr("transform","translate(-35, 20)");return i.forEach((function(t,e){e%2==0&&o.append("text").attr("x",Math.floor((e+1)/n.length*300)).attr("y",0).style("text-anchor","middle").style("fill","#edf2f7").attr("class","legend-stop").text(t)})),s.append("text").style("text-anchor","middle").style("fill","#edf2f7").attr("x",150).attr("y",-12).attr("class","legend-title").text(this.legendText),t},getResourceUrl:function(t){return this.$devMode?t:this.$url(t)},fetchResources:function(){var t=this.getResourceUrl("/id.geojson");return fetch(t)},color:function(t){return this.$d3.scaleQuantize(this.colorRange,this.$d3.schemeBlues[7])(t)},transformToMap:function(t){var e=this,a=[];return t.forEach((function(t){var r=e.provinces[t.key];r&&a.push([r.slug,{value:t.total_cases,name:r.name}])})),new Map(a)}}},i=a(31),o=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.selectorPrefix+" max-w-4xl mb-24 mx-auto overflow-x-hidden"},[this._m(0),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",{staticClass:"font-semibold text-2xl mx-5 lg:mx-0 my-4",attrs:{id:"map-of-coronavirus"}},[this._v("\n      Map of total cases\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overflow-x-auto"},[e("div",{staticClass:"content min-w-2xl"})])}],!1,null,null,null).exports,l=a(70);function c(t){return t[t.length-1].jumlah_positif_kum.value}function u(t){var e=t[t.length-1].data,a=0,r="";return e.forEach((function(t){t.cases>a&&(a=t.cases,r=t.key)})),{value:a,province:r}}var p={props:{daily:{type:Array,required:!0},provinceDaily:{type:Array,required:!0},provinces:{type:Object,required:!0}},computed:{summary:function(){var t,e,a,r,n=function(t){var e=t[t.length-1].jumlah_positif.value,a=t[t.length-2].jumlah_positif.value;return[e,(e-a)/a*100]}(this.daily),s=Object(l.a)(n,2),i=s[0],o=s[1],p=(t=this.daily,e=(t[t.length-1].jumlah_positif_kum.value-t[t.length-7].jumlah_positif_kum.value)/7,a=t.slice(0,t.length-7),r=(a[a.length-1].jumlah_positif_kum.value-a[a.length-7].jumlah_positif_kum.value)/7,[e,(e-r)/r*100]),d=Object(l.a)(p,2),f=d[0],m=d[1];return{totalCases:c(this.daily),newCases:i,percentMarginNewCasesPastDay:o,avgCasesOneWeek:f,percentMarginAvgCasesOneWeek:m,highestNewCasesInProvince:u(this.provinceDaily)}}}},d=Object(i.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:"max-w-4xl mb-10 mx-auto overflow-x-hidden"},[t._m(0),a("ul",{staticClass:"flex flex-wrap -mx-5 px-5 lg:px-0"},[a("li",{staticClass:"mb-5 w-full lg:w-1/4"},[a("div",{staticClass:"mx-5"},[a("p",{staticClass:"mb-2"},[t._v("Total confirmed cases")]),a("p",{staticClass:"text-4xl text-blue-400 leading-none"},[t._v(t._s(t.$delimiter(t.summary.totalCases)))])])]),a("li",{staticClass:"mb-5 w-full lg:w-1/4"},[a("div",{staticClass:"mx-5"},[a("p",{staticClass:"mb-2"},[t._v("New cases")]),a("p",{staticClass:"mb-2 text-4xl text-blue-400 leading-none"},[t._v(t._s(t.$delimiter(t.summary.newCases)))]),a("p",{staticClass:"text-gray-500"},[a("span",{class:t.summary.percentMarginNewCasesPastDay>0?"text-red-500":"text-green-500"},[t._v("\n          "+t._s(t.summary.percentMarginNewCasesPastDay>0?"+":"")+t._s(Math.ceil(t.summary.percentMarginNewCasesPastDay))+"%\n        ")]),t._v("\n        from previous day\n        ")])])]),a("li",{staticClass:"mb-5 w-full lg:w-1/4"},[a("div",{staticClass:"mx-5"},[a("p",{staticClass:"mb-2"},[t._v("Avg cases in one week")]),a("p",{staticClass:"mb-2 text-4xl text-blue-400 leading-none"},[t._v(t._s(t.$delimiter(Math.ceil(t.summary.avgCasesOneWeek))))]),a("p",{staticClass:"text-gray-500"},[a("span",{class:t.summary.percentMarginAvgCasesOneWeek>0?"text-red-500":"text-green-500"},[t._v("\n          "+t._s(t.summary.percentMarginAvgCasesOneWeek>0?"+":"")+t._s(Math.ceil(t.summary.percentMarginAvgCasesOneWeek))+"%\n        ")]),t._v("\n        from previous week\n        ")])])]),a("li",{staticClass:"mb-5 w-full lg:w-1/4"},[a("div",{staticClass:"mx-5"},[a("p",{staticClass:"mb-2"},[t._v("Highest new cases")]),a("p",{staticClass:"mb-2 text-4xl text-blue-400 leading-none"},[t._v("\n        "+t._s(t.summary.highestNewCasesInProvince.value)+"\n        ")]),t.summary.highestNewCasesInProvince.province?a("p",{staticClass:"text-gray-500"},[t._v("\n        in "+t._s(t.provinces[t.summary.highestNewCasesInProvince.province].name)+"\n        ")]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",{staticClass:"font-semibold text-2xl mx-5 lg:mx-0 my-4",attrs:{id:"summary-of-coronavirus"}},[this._v("\n      Summary\n    ")])])}],!1,null,null,null).exports,f=(a(170),{props:{selectorPrefix:{type:String,default:"cvs"},daily:{type:Array,required:!0}},mounted:function(){this.render()},methods:{getSelector:function(t){return".".concat(this.selectorPrefix," ").concat(t)},getId:function(t){return"".concat(this.selectorPrefix,"-").concat(t)},render:function(){var t=this.daily,e=this.daily,a=this.daily,r=this.getSelector(".content");this.$d3.select(r).selectAll("*").remove();var n=this.$d3.select(r).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 900 500").append("g").attr("transform","translate(100, 50)"),s=this.createLinearGradient(n,"linear-gradient","#2c5282","#1a202c"),i=this.createLinearGradient(n,"linear-gradient-inv","#9c4221","#1a202c"),o=this.createLinearGradient(n,"linear-gradient-suc","#285e61","#1a202c"),l=this.$d3.scaleTime().domain(this.$d3.extent(t,(function(t){return new Date(t.key)}))).range([0,700]),c=this.$d3.scaleLinear().domain([0,this.$d3.max(t,(function(t){return t.jumlah_positif_kum.value}))]).range([400,0]);n.append("path").datum(t).attr("class","area").attr("fill","url(#".concat(s,")")).attr("d",this.$d3.area().x((function(t){return l(new Date(t.key))})).y0(400).y1((function(t){return c(t.jumlah_positif_kum.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(t).attr("class","line").attr("d",this.$d3.line().x((function(t){return l(new Date(t.key))})).y((function(t){return c(t.jumlah_positif_kum.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(a).attr("class","area").attr("fill","url(#".concat(o,")")).attr("d",this.$d3.area().x((function(t){return l(new Date(t.key))})).y0(400).y1((function(t){return c(t.jumlah_sembuh_kum.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(a).attr("class","line-suc").attr("d",this.$d3.line().x((function(t){return l(new Date(t.key))})).y((function(t){return c(t.jumlah_sembuh_kum.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(e).style("opacity","0.8").attr("class","area").attr("fill","url(#".concat(i,")")).attr("d",this.$d3.area().x((function(t){return l(new Date(t.key))})).y0(400).y1((function(t){return c(t.jumlah_meninggal_kum.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(e).style("opacity","0.8").attr("class","line-inv").attr("d",this.$d3.line().x((function(t){return l(new Date(t.key))})).y((function(t){return c(t.jumlah_meninggal_kum.value)})).curve(this.$d3.curveMonotoneX));var u=n.append("g").attr("class","mouse-over-effect"),p=u.append("g").attr("class","mouse-per-line-confirmed");p.append("circle").attr("r",5).attr("class","circle").style("opacity","0"),p.append("text").attr("class","text").attr("transform","translate(10,3)");var d=u.append("g").attr("class","mouse-per-line-recovered");d.append("circle").attr("r",5).attr("class","circle").style("opacity","0"),d.append("text").attr("class","text").attr("transform","translate(10,3)");var f=u.append("g").attr("class","mouse-per-line-deaths");f.append("circle").attr("r",5).attr("class","circle").style("opacity","0"),f.append("text").attr("class","text").attr("transform","translate(10,3)");var m=this;u.append("rect").attr("width",700).attr("height",400).attr("fill","none").attr("pointer-events","all").on("mouseout",(function(){n.select(".mouse-per-line-confirmed circle").style("opacity","0"),n.select(".mouse-per-line-confirmed text").style("opacity","0"),n.select(".mouse-per-line-recovered circle").style("opacity","0"),n.select(".mouse-per-line-recovered text").style("opacity","0"),n.select(".mouse-per-line-deaths circle").style("opacity","0"),n.select(".mouse-per-line-deaths text").style("opacity","0")})).on("mouseover",(function(){n.select(".mouse-per-line-confirmed circle").style("opacity","1"),n.select(".mouse-per-line-confirmed text").style("opacity","1"),n.select(".mouse-per-line-recovered circle").style("opacity","1"),n.select(".mouse-per-line-recovered text").style("opacity","1"),n.select(".mouse-per-line-deaths circle").style("opacity","1"),n.select(".mouse-per-line-deaths text").style("opacity","1")})).on("mousemove",(function(){var r=m.$d3.mouse(this);n.select(".mouse-per-line-confirmed").attr("transform",(function(e,a){var n=l.invert(r[0]),s=(0,m.$d3.bisector((function(t){return new Date(t.key)})).left)(t,n);return m.$d3.select(this).select("text").text(Math.ceil(c.invert(c(t[s].jumlah_positif_kum.value)))),"translate(".concat(l(new Date(t[s].key)),", ").concat(c(t[s].jumlah_positif_kum.value),")")})),n.select(".mouse-per-line-recovered").attr("transform",(function(e,n){var s=l.invert(r[0]),i=(0,m.$d3.bisector((function(t){return new Date(t.key)})).left)(a,s);return m.$d3.select(this).select("text").text(Math.ceil(c.invert(c(t[i].jumlah_sembuh_kum.value)))),"translate(".concat(l(new Date(t[i].key)),", ").concat(c(t[i].jumlah_sembuh_kum.value),")")})),n.select(".mouse-per-line-deaths").attr("transform",(function(a,n){var s=l.invert(r[0]),i=(0,m.$d3.bisector((function(t){return new Date(t.key)})).left)(e,s);return m.$d3.select(this).select("text").text(Math.ceil(c.invert(c(t[i].jumlah_meninggal_kum.value)))),"translate(".concat(l(new Date(t[i].key)),", ").concat(c(t[i].jumlah_meninggal_kum.value),")")}))})),n.append("g").attr("transform","translate(0, 400)").style("font","1rem Manrope").call(this.$d3.axisBottom(l).ticks(5)),n.append("g").style("font","1rem Manrope").call(this.$d3.axisLeft(c).ticks(5)),this.renderLegend(n)},createLinearGradient:function(t,e,a,r){var n=this.getId(e),s=t.append("defs").attr("class","linear-gradient-wrapper").append("linearGradient").attr("id",n).attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%");return s.append("stop").attr("class","start").attr("offset","0%").attr("stop-color",a).attr("stop-opacity",1),s.append("stop").attr("class","end").attr("offset","100%").attr("stop-color",r).attr("stop-opacity",1),n},renderLegend:function(t){var e=t.append("g").attr("class","legend-wrapper").style("transform","translate(20px, 0)");e.append("rect").attr("x",0).attr("y",0).attr("width",15).attr("height",15).style("fill","#3182ce"),e.append("text").attr("x",25).attr("y",13).style("fill","#edf2f7").text("total cases"),e.append("rect").attr("x",0).attr("y",25).attr("width",15).attr("height",15).style("fill","#319795"),e.append("text").attr("x",25).attr("y",38).style("fill","#edf2f7").text("recovered"),e.append("rect").attr("x",0).attr("y",50).attr("width",15).attr("height",15).style("fill","#dd6b20"),e.append("text").attr("x",25).attr("y",63).style("fill","#edf2f7").text("deaths")}}}),m=(a(198),Object(i.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.selectorPrefix+" max-w-4xl mb-24 mx-auto overflow-x-hidden"},[this._m(0),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",{staticClass:"font-semibold text-2xl mx-5 lg:mx-0 my-4",attrs:{id:"trend-of-coronavirus"}},[this._v("\n      Trend of total cases\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overflow-x-auto"},[e("div",{staticClass:"content min-w-2xl max-w-3xl"})])}],!1,null,null,null).exports),h=(a(199),{props:{selectorPrefix:{type:String,default:"cnpvs"},daily:{type:Array,required:!0},provinces:{type:Object,required:!0}},data:function(){return{currentProvince:"DKI JAKARTA"}},mounted:function(){this.render()},watch:{currentProvince:function(){this.render()}},methods:{getSelector:function(t){return".".concat(this.selectorPrefix," ").concat(t)},getId:function(t){return"".concat(this.selectorPrefix,"-").concat(t)},render:function(){var t=this,e=this.daily,a=this.getSelector(".content");this.$d3.select(a).selectAll("*").remove();var r=this.$d3.select(a).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 900 500").append("g").attr("transform","translate(100, 50)"),n=this.createLinearGradient(r,"linear-gradient","#2c5282","#1a202c"),s=this.$d3.scaleTime().domain(this.$d3.extent(e,(function(t){return new Date(t.date)}))).range([0,700]),i=this.$d3.scaleLinear().domain([0,400]).range([400,0]);r.append("path").datum(e).attr("class","area").attr("fill","url(#".concat(n,")")).attr("d",this.$d3.area().x((function(t){return s(new Date(t.date))})).y0(400).y1((function(e){return i(e.data.filter((function(e){return e.key===t.currentProvince}))[0].cases)})).curve(this.$d3.curveMonotoneX)),r.append("path").datum(e).attr("class","line").attr("d",this.$d3.line().x((function(t){return s(new Date(t.date))})).y((function(e){return i(e.data.filter((function(e){return e.key===t.currentProvince}))[0].cases)})).curve(this.$d3.curveMonotoneX));var o=r.append("g").attr("class","mouse-over-effect"),l=o.append("g").attr("class","mouse-per-line-confirmed");l.append("circle").attr("r",5).attr("class","circle"),l.append("text").attr("class","text").attr("transform","translate(10,3)");var c=this;o.append("rect").attr("width",700).attr("height",400).attr("fill","none").attr("pointer-events","all").on("mouseout",(function(){r.select(".mouse-per-line-confirmed circle").style("opacity","0"),r.select(".mouse-per-line-confirmed text").style("opacity","0")})).on("mouseover",(function(){r.select(".mouse-per-line-confirmed circle").style("opacity","1"),r.select(".mouse-per-line-confirmed text").style("opacity","1")})).on("mousemove",(function(){var t=c.$d3.mouse(this);r.select(".mouse-per-line-confirmed").attr("transform",(function(a,r){var n=s.invert(t[0]),o=(0,c.$d3.bisector((function(t){return new Date(t.date)})).left)(e,n);return c.$d3.select(this).select("text").text(Math.ceil(i.invert(i(e[o].data.filter((function(t){return t.key===c.currentProvince}))[0].cases)))),"translate(".concat(s(new Date(e[o].date)),", ").concat(i(e[o].data.filter((function(t){return t.key===c.currentProvince}))[0].cases),")")}))})),r.append("g").attr("transform","translate(0, 400)").style("font","1rem Manrope").call(this.$d3.axisBottom(s).ticks(5)),r.append("g").style("font","1rem Manrope").call(this.$d3.axisLeft(i).ticks(5))},createLinearGradient:function(t,e,a,r){var n=this.getId(e),s=t.append("defs").attr("class","linear-gradient-wrapper").append("linearGradient").attr("id",n).attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%");return s.append("stop").attr("class","start").attr("offset","0%").attr("stop-color",a).attr("stop-opacity",1),s.append("stop").attr("class","end").attr("offset","100%").attr("stop-color",r).attr("stop-opacity",1),n},renderLegend:function(t){var e=t.append("g").attr("class","legend-wrapper").style("transform","translate(20px, 0)");e.append("rect").attr("x",0).attr("y",0).attr("width",15).attr("height",15).style("fill","#3182ce"),e.append("text").attr("x",25).attr("y",13).style("fill","#edf2f7").text("total cases"),e.append("rect").attr("x",0).attr("y",25).attr("width",15).attr("height",15).style("fill","#319795"),e.append("text").attr("x",25).attr("y",38).style("fill","#edf2f7").text("recovered"),e.append("rect").attr("x",0).attr("y",50).attr("width",15).attr("height",15).style("fill","#dd6b20"),e.append("text").attr("x",25).attr("y",63).style("fill","#edf2f7").text("deaths")}}}),v=(a(200),Object(i.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:t.selectorPrefix+" max-w-4xl mb-24 mx-auto overflow-x-hidden"},[a("header",{staticClass:"flex flex-wrap items-center"},[t._m(0),a("div",{staticClass:"mb-5 lg:mb-0 flex-none flex items-center justify-start lg:justify-end w-full lg:w-1/3"},[a("div",{staticClass:"mx-5 lg:mx-0"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentProvince,expression:"currentProvince"}],staticClass:"text-gray-800 mr-5",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentProvince=e.target.multiple?a:a[0]}}},t._l(t.provinces,(function(e,r){return a("option",{key:"province-"+e.slug,domProps:{value:r}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)])])]),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full lg:w-2/3"},[e("h2",{staticClass:"font-semibold text-2xl mx-5 lg:mx-0 my-4",attrs:{id:"trend-of-coronavirus-by-province"}},[this._v("\n        Trend of new cases by province\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overflow-x-auto"},[e("div",{staticClass:"content min-w-2xl max-w-3xl"})])}],!1,null,null,null).exports),y={props:{selectorPrefix:{type:String,default:"ctnvs"},daily:{type:Array,required:!0}},mounted:function(){this.render()},methods:{getSelector:function(t){return".".concat(this.selectorPrefix," ").concat(t)},getId:function(t){return"".concat(this.selectorPrefix,"-").concat(t)},render:function(){var t=this.daily,e=this.daily,a=this.daily,r=this.getSelector(".content");this.$d3.select(r).selectAll("*").remove();var n=this.$d3.select(r).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 900 500").append("g").attr("transform","translate(100, 50)"),s=this.createLinearGradient(n,"linear-gradient","#2c5282","#1a202c"),i=this.createLinearGradient(n,"linear-gradient-inv","#9c4221","#1a202c"),o=this.createLinearGradient(n,"linear-gradient-suc","#285e61","#1a202c"),l=this.$d3.scaleTime().domain(this.$d3.extent(t,(function(t){return new Date(t.key)}))).range([0,700]),c=this.$d3.scaleLinear().domain([0,this.$d3.max(t,(function(t){return t.jumlah_positif.value}))]).range([400,0]);n.append("path").datum(t).attr("class","area").attr("fill","url(#".concat(s,")")).attr("d",this.$d3.area().x((function(t){return l(new Date(t.key))})).y0(400).y1((function(t){return c(t.jumlah_positif.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(t).attr("class","line").attr("d",this.$d3.line().x((function(t){return l(new Date(t.key))})).y((function(t){return c(t.jumlah_positif.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(a).attr("class","area").attr("fill","url(#".concat(o,")")).attr("d",this.$d3.area().x((function(t){return l(new Date(t.key))})).y0(400).y1((function(t){return c(t.jumlah_sembuh.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(a).attr("class","line-suc").attr("d",this.$d3.line().x((function(t){return l(new Date(t.key))})).y((function(t){return c(t.jumlah_sembuh.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(e).style("opacity","0.8").attr("class","area").attr("fill","url(#".concat(i,")")).attr("d",this.$d3.area().x((function(t){return l(new Date(t.key))})).y0(400).y1((function(t){return c(t.jumlah_meninggal.value)})).curve(this.$d3.curveMonotoneX)),n.append("path").datum(e).style("opacity","0.8").attr("class","line-inv").attr("d",this.$d3.line().x((function(t){return l(new Date(t.key))})).y((function(t){return c(t.jumlah_meninggal.value)})).curve(this.$d3.curveMonotoneX));var u=n.append("g").attr("class","mouse-over-effect"),p=u.append("g").attr("class","mouse-per-line-confirmed");p.append("circle").attr("r",5).attr("class","circle").style("opacity","0"),p.append("text").attr("class","text").attr("transform","translate(10,3)");var d=u.append("g").attr("class","mouse-per-line-recovered");d.append("circle").attr("r",5).attr("class","circle").style("opacity","0"),d.append("text").attr("class","text").attr("transform","translate(10,3)");var f=u.append("g").attr("class","mouse-per-line-deaths");f.append("circle").attr("r",5).attr("class","circle").style("opacity","0"),f.append("text").attr("class","text").attr("transform","translate(10,3)");var m=this;u.append("rect").attr("width",700).attr("height",400).attr("fill","none").attr("pointer-events","all").on("mouseout",(function(){n.select(".mouse-per-line-confirmed circle").style("opacity","0"),n.select(".mouse-per-line-confirmed text").style("opacity","0"),n.select(".mouse-per-line-recovered circle").style("opacity","0"),n.select(".mouse-per-line-recovered text").style("opacity","0"),n.select(".mouse-per-line-deaths circle").style("opacity","0"),n.select(".mouse-per-line-deaths text").style("opacity","0")})).on("mouseover",(function(){n.select(".mouse-per-line-confirmed circle").style("opacity","1"),n.select(".mouse-per-line-confirmed text").style("opacity","1"),n.select(".mouse-per-line-recovered circle").style("opacity","1"),n.select(".mouse-per-line-recovered text").style("opacity","1"),n.select(".mouse-per-line-deaths circle").style("opacity","1"),n.select(".mouse-per-line-deaths text").style("opacity","1")})).on("mousemove",(function(){var r=m.$d3.mouse(this);n.select(".mouse-per-line-confirmed").attr("transform",(function(e,a){var n=l.invert(r[0]),s=(0,m.$d3.bisector((function(t){return new Date(t.key)})).left)(t,n);return m.$d3.select(this).select("text").text(Math.ceil(c.invert(c(t[s].jumlah_positif.value)))),"translate(".concat(l(new Date(t[s].key)),", ").concat(c(t[s].jumlah_positif.value),")")})),n.select(".mouse-per-line-recovered").attr("transform",(function(e,n){var s=l.invert(r[0]),i=(0,m.$d3.bisector((function(t){return new Date(t.key)})).left)(a,s);return m.$d3.select(this).select("text").text(Math.ceil(c.invert(c(t[i].jumlah_sembuh.value)))),"translate(".concat(l(new Date(t[i].key)),", ").concat(c(t[i].jumlah_sembuh.value),")")})),n.select(".mouse-per-line-deaths").attr("transform",(function(a,n){var s=l.invert(r[0]),i=(0,m.$d3.bisector((function(t){return new Date(t.key)})).left)(e,s);return m.$d3.select(this).select("text").text(Math.ceil(c.invert(c(t[i].jumlah_meninggal.value)))),"translate(".concat(l(new Date(t[i].key)),", ").concat(c(t[i].jumlah_meninggal.value),")")}))})),n.append("g").attr("transform","translate(0, 400)").style("font","1rem Manrope").call(this.$d3.axisBottom(l).ticks(5)),n.append("g").style("font","1rem Manrope").call(this.$d3.axisLeft(c).ticks(5)),this.renderLegend(n)},createLinearGradient:function(t,e,a,r){var n=this.getId(e),s=t.append("defs").attr("class","linear-gradient-wrapper").append("linearGradient").attr("id",n).attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%");return s.append("stop").attr("class","start").attr("offset","0%").attr("stop-color",a).attr("stop-opacity",1),s.append("stop").attr("class","end").attr("offset","100%").attr("stop-color",r).attr("stop-opacity",1),n},renderLegend:function(t){var e=t.append("g").attr("class","legend-wrapper").style("transform","translate(20px, 0)");e.append("rect").attr("x",0).attr("y",0).attr("width",15).attr("height",15).style("fill","#3182ce"),e.append("text").attr("x",25).attr("y",13).style("fill","#edf2f7").text("new cases"),e.append("rect").attr("x",0).attr("y",25).attr("width",15).attr("height",15).style("fill","#319795"),e.append("text").attr("x",25).attr("y",38).style("fill","#edf2f7").text("recovered"),e.append("rect").attr("x",0).attr("y",50).attr("width",15).attr("height",15).style("fill","#dd6b20"),e.append("text").attr("x",25).attr("y",63).style("fill","#edf2f7").text("deaths")}}},g=(a(201),{metaInfo:function(){return this.meta},components:{CoronavirusMap:o,CoronavirusSummary:d,CoronavirusTrend:m,CoronavirusTrendByProvince:v,CoronavirusTrendNewCases:Object(i.a)(y,(function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.selectorPrefix+" max-w-4xl mb-24 mx-auto overflow-x-hidden"},[this._m(0),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",{staticClass:"font-semibold text-2xl mx-5 lg:mx-0 my-4",attrs:{id:"trend-of-coronavirus-new-cases"}},[this._v("\n      Trend of new cases per day\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overflow-x-auto"},[e("div",{staticClass:"content min-w-2xl max-w-3xl"})])}],!1,null,null,null).exports},computed:{meta:function(){return{title:this.title,meta:this.$generateMeta(this.title,this.description,this.$page.metadata.siteUrl,this.url)}},provinces:function(){return x},title:function(){return"Coronavirus In Indonesia - Nusadata"},description:function(){return"Indonesia is the second worst affected country in Southeast Asia by covid-19. This page provides visualizations about the trend of daily new cases, the spread of diseases in all provinces from day one until today and many more."},url:function(){return"".concat(this.$page.metadata.siteUrl,"/coronavirus/")}}}),x={ACEH:{slug:"special-region-of-aceh",name:"Aceh"},"SUMATERA UTARA":{slug:"north-sumatera",name:"Sumatera Utara"},"SUMATERA BARAT":{slug:"west-sumatera",name:"Sumatera Barat"},RIAU:{slug:"riau",name:"Riau"},JAMBI:{slug:"jambi",name:"Jambi"},"SUMATERA SELATAN":{slug:"south-sumatera",name:"Sumatera Selatan"},BENGKULU:{slug:"bengkulu",name:"Bengkulu"},LAMPUNG:{slug:"lampung",name:"Lampung"},"KEPULAUAN BANGKA BELITUNG":{slug:"bangka-belitung-islands",name:"Bangka Belitung"},"KEPULAUAN RIAU":{slug:"riau-islands",name:"Kepulauan Riau"},"DKI JAKARTA":{slug:"jakarta-special-capital-region",name:"DKI Jakarta"},"JAWA BARAT":{slug:"west-java",name:"Jawa Barat"},"JAWA TENGAH":{slug:"central-java",name:"Jawa Tengah"},"DAERAH ISTIMEWA YOGYAKARTA":{slug:"special-region-of-yogyakarta",name:"Yogyakarta"},"JAWA TIMUR":{slug:"east-java",name:"Jawa Timur"},BANTEN:{slug:"banten",name:"Banten"},BALI:{slug:"bali",name:"Bali"},"NUSA TENGGARA BARAT":{slug:"west-nusa-tenggara",name:"Nusa Tenggara Barat"},"NUSA TENGGARA TIMUR":{slug:"east-nusa-tenggara",name:"Nusa Tenggara Timur"},"KALIMANTAN BARAT":{slug:"west-kalimantan",name:"Kalimantan Barat"},"KALIMANTAN TENGAH":{slug:"central-kalimantan",name:"Kalimantan Tengah"},"KALIMANTAN SELATAN":{slug:"south-kalimantan",name:"Kalimantan Selatan"},"KALIMANTAN TIMUR":{slug:"east-kalimantan",name:"Kalimantan Timur"},"KALIMANTAN UTARA":{slug:"north-kalimantan",name:"Kalimantan Utara"},"SULAWESI UTARA":{slug:"north-sulawesi",name:"Sulawesi Utara"},GORONTALO:{slug:"gorontalo",name:"Gorontalo"},"SULAWESI BARAT":{slug:"west-sulawesi",name:"Sulawesi Barat"},"SULAWESI TENGAH":{slug:"central-sulawesi",name:"Sulawesi Tengah"},"SULAWESI TENGGARA":{slug:"southeast-sulawesi",name:"Sulawesi Tenggara"},"SULAWESI SELATAN":{slug:"south-sulawesi",name:"Sulawesi Selatan"},MALUKU:{slug:"maluku",name:"Maluku"},"MALUKU UTARA":{slug:"north-maluku",name:"Maluku Utara"},PAPUA:{slug:"special-region-of-papua",name:"Papua"},"PAPUA BARAT":{slug:"special-region-of-west-papua",name:"Papua Barat"}},w=g,_=a(202),A=Object(i.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("main",{attrs:{role:"main"}},[a("section",{staticClass:"mt-5 px-5 lg:px-0 py-10 max-w-4xl mx-auto"},[a("header",{staticClass:"mb-2"},[a("h1",{staticClass:"text-3xl font-bold"},[a("span",{staticClass:"text-blue-500"},[t._v("Coronavirus")]),t._v("\n          in Indonesia\n        ")])]),a("p",{staticClass:"text-gray-500"},[t._v("\n        Indonesia is the second worst affected country in Southeast Asia by covid-19. This page provides visualizations about the trend of daily new cases, the spread of diseases in all provinces from day one until today and many more.\n      ")])]),a("CoronavirusSummary",{attrs:{daily:t.$page.allCoronavirus.edges[0].node.daily,"province-daily":t.$page.byProvince.edges[0].node.list,provinces:t.provinces}}),a("CoronavirusTrendNewCases",{attrs:{daily:t.$page.allCoronavirus.edges[0].node.daily}}),a("CoronavirusTrendByProvince",{attrs:{daily:t.$page.byProvince.edges[0].node.list,provinces:t.provinces}}),a("CoronavirusMap",{attrs:{daily:t.$page.byProvince.edges[0].node.list,provinces:t.provinces}}),a("CoronavirusTrend",{attrs:{daily:t.$page.allCoronavirus.edges[0].node.daily}})],1)])}),[],!1,null,null,null);"function"==typeof _.default&&Object(_.default)(A);e.default=A.exports}}]);