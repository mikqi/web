(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{174:function(t){t.exports=JSON.parse('{"special-region-of-aceh":{"name":"Aceh"},"north-sumatera":{"name":"Sumatera Utara"},"west-sumatera":{"name":"Sumatera Barat"},"riau":{"name":"Riau"},"jambi":{"name":"Jambi"},"south-sumatera":{"name":"Sumatera Selatan"},"bengkulu":{"name":"Bengkulu"},"lampung":{"name":"Lampung"},"bangka-belitung-islands":{"name":"Bangka Belitung"},"riau-islands":{"name":"Kepulauan Riau"},"jakarta-special-capital-region":{"name":"DKI Jakarta"},"west-java":{"name":"Jawa Barat"},"central-java":{"name":"Jawa Tengah"},"special-region-of-yogyakarta":{"name":"Yogyakarta"},"east-java":{"name":"Jawa Timur"},"banten":{"name":"Banten"},"bali":{"name":"Bali"},"west-nusa-tenggara":{"name":"Nusa Tenggara Barat"},"east-nusa-tenggara":{"name":"Nusa Tenggara Timur"},"west-kalimantan":{"name":"Kalimantan Barat"},"central-kalimantan":{"name":"Kalimantan Tengah"},"south-kalimantan":{"name":"Kalimantan Selatan"},"east-kalimantan":{"name":"Kalimantan Timur"},"north-kalimantan":{"name":"Kalimantan Utara"},"north-sulawesi":{"name":"Sulawesi Utara"},"central-sulawesi":{"name":"Sulawesi Tengah"},"south-sulawesi":{"name":"Sulawesi Selatan"},"southeast-sulawesi":{"name":"Sulawesi Tenggara"},"gorontalo":{"name":"Gorontalo"},"west-sulawesi":{"name":"Sulawesi Barat"},"maluku":{"name":"Maluku"},"north-maluku":{"name":"Maluku Utara"},"special-region-of-west-papua":{"name":"Papua Barat"},"special-region-of-papua":{"name":"Papua"}}')},176:function(t,a,e){},194:function(t){t.exports=JSON.parse('[{"population":234450521,"total_cases":65725,"total_deaths":597,"year":2011},{"population":243185460,"total_cases":90245,"total_deaths":816,"year":2012},{"population":245394250,"total_cases":112511,"total_deaths":871,"year":2013},{"population":252124458,"total_cases":100347,"total_deaths":907,"year":2014},{"population":255461686,"total_cases":129650,"total_deaths":1071,"year":2015},{"population":258946860,"total_cases":201885,"total_deaths":1585,"year":2016},{"population":261890872,"total_cases":59047,"total_deaths":444,"year":2017},{"population":265256872,"total_cases":65602,"total_deaths":462,"year":2018}]')},195:function(t,a,e){"use strict";var n=e(176);e.n(n).a},203:function(t,a,e){"use strict";e.r(a);e(27),e(72);var n=e(194),r=e(174),s={props:{selectorPrefix:{type:String,default:"tndv"}},computed:{legendText:function(){return{total_cases:"total cases",total_deaths:"total deaths",incident_rate:"incident rate",fatality_rate:"fatality rate (%)"}[this.currentType]}},data:function(){return{types:["total_cases","total_deaths"],provinces:r,currentType:"total_cases"}},mounted:function(){this.render(this.currentType)},watch:{currentType:function(t){this.render(t)}},methods:{getSelector:function(t){return".".concat(this.selectorPrefix," ").concat(t)},getId:function(t){return"".concat(this.selectorPrefix,"-").concat(t)},getMaxValueFromType:function(t){var a=n.map((function(a){return a[t]}));return this.$d3.max(a)},createLinearGradient:function(t,a,e,n){var r=this.getId(a),s=t.append("defs").attr("class","linear-gradient-wrapper").append("linearGradient").attr("id",r).attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%");return s.append("stop").attr("class","start").attr("offset","0%").attr("stop-color",e).attr("stop-opacity",1),s.append("stop").attr("class","end").attr("offset","100%").attr("stop-color",n).attr("stop-opacity",1),r},render:function(t){var a=this.getSelector(".content");this.$d3.select(a).selectAll("*").remove();var e=this.$d3.select(a).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 900 500").append("g").attr("transform","translate(100, 50)"),r=this.createLinearGradient(e,"linear-gradient","#2c5282","#1a202c"),s=this.$d3.scalePoint().domain(n.map((function(t){return+t.year}))).range([0,700]),i=this.$d3.scaleLinear().domain([0,this.getMaxValueFromType(t)]).range([400,0]);e.append("path").datum(n).attr("class","area").attr("fill","url(#".concat(r,")")).attr("d",this.$d3.area().x((function(t){return s(+t.year)})).y0(400).y1((function(a){return i(+a[t])})).curve(this.$d3.curveMonotoneX)),e.append("path").datum(n).attr("class","line").attr("d",this.$d3.line().x((function(t){return s(+t.year)})).y((function(a){return i(+a[t])})).curve(this.$d3.curveMonotoneX)),e.selectAll("dot").data(n).enter().append("circle").attr("class","circle").attr("cx",(function(t){return s(+t.year)})).attr("cy",(function(a){return i(+a[t])})).attr("r",5),e.selectAll("circle-pad").data(n).enter().append("circle").attr("class","circle-pad").attr("data-tooltip",(function(a){return a[t]})).attr("cx",(function(t){return s(+t.year)})).attr("cy",(function(a){return i(+a[t])})).attr("r",12),e.append("g").attr("transform","translate(0, 400)").style("font","1rem Manrope").call(this.$d3.axisBottom(s)),e.append("g").style("font","1rem Manrope").call(this.$d3.axisLeft(i).ticks(5)),this.$tippy(this.getSelector(".circle-pad"),{content:function(t){return t.getAttribute("data-tooltip")}})}}},i=(e(195),e(31)),l=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{class:t.selectorPrefix+" max-w-4xl mb-24 mx-auto overflow-x-hidden"},[e("header",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"w-full lg:w-2/3"},[e("h2",{staticClass:"font-semibold text-2xl mx-5 lg:mx-0 pt-4 mb-4",attrs:{id:"trend-of-dengue-fever"}},[t._v("\n        National trend of "+t._s(t.legendText)+"\n      ")]),e("p",{staticClass:"mx-5 lg:mx-0 mb-5 text-gray-500"},["total_cases"===t.currentType?[t._v("\n          In 2016, Indonesia saw a record breaking number with a total of more than 200.000 cases. However in the following year, the figure immediately fall into the smallest record in the period.\n        ")]:t._e(),"total_deaths"===t.currentType?[t._v("\n          The total deaths figure has a similar pattern with the total cases trend. The death toll saw the highest record with over 1500 cases which also happened in 2016.\n        ")]:t._e()],2)]),e("div",{staticClass:"mb-5 lg:mb-0 flex-none w-full lg:w-1/3"},[e("div",{staticClass:"mx-5 lg:mx-0 flex items-center justify-start lg:justify-center"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentType,expression:"currentType"}],staticClass:"text-gray-800",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentType=a.target.multiple?e:e[0]}}},t._l(t.types,(function(a){return e("option",{key:"type-"+a,domProps:{value:a}},[t._v("\n            "+t._s(a.replace("_"," "))+"\n          ")])})),0)])])]),t._m(0)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"overflow-x-auto"},[a("div",{staticClass:"content min-w-2xl max-w-3xl"})])}],!1,null,null,null);a.default=l.exports}}]);