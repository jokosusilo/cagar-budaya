(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"add1b7cf"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/cagar-budaya/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"flex items-center justify-between bg-white shadow py-4 px-8"},[a("router-link",{staticClass:"no-underline",attrs:{to:"/"}},[a("h1",{staticClass:"text-grey-darkest font-normal text-2xl"},[t._v("Cagar Budaya")])]),a("div",{staticClass:"flex justify-end"},[a("router-link",{staticClass:"block py-2 px-1 md:px-4 text-sm no-underline tracking-wide text-grey-darkest",attrs:{to:"/about"}},[a("svg",{staticClass:"feather feather-info sc-dnqmqq jxshSx h-4 inline-block align-middle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),a("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"12"}}),a("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"8"}})]),a("span",{staticClass:"align-middle hidden md:inline-block"},[t._v("About")])])],1)],1),a("div",{attrs:{id:"content"}},[a("router-view")],1)])},o=[],i=a("2877"),s={},l=Object(i["a"])(s,r,o,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-64"},[a("div",{staticClass:"absolute pin-r w-1/4 bg-white py-6 px-4 m-8 shadow h-32 z-10",attrs:{id:"control-panel"}},[a("form",{attrs:{action:""}},[a("label",{staticClass:"block text-grey-darker text-sm font-bold mb-2",attrs:{for:"province"}},[t._v("Select Province")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedProvince,expression:"selectedProvince"}],staticClass:"block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey",attrs:{id:"province"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedProvince=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("-- Select --")]),t._l(t.provinceList,(function(e){return a("option",{key:e.kode_wilayah,domProps:{value:e.kode_wilayah}},[t._v("\n            "+t._s(e.nama)+"\n          ")])}))],2)])]),a("GoogleMaps",{attrs:{name:"cagar-budaya"}}),t.cagarBudayaList.length>0?a("div",{staticClass:"p-8",attrs:{id:"cagar-budaya"}},[a("div",{staticClass:"flex items-center justify-between mb-3"},[t._m(0),a("div",[a("p",{staticClass:"text-sm text-grey-darker"},[t._v("Found "+t._s(t.countCagarBudaya)+" Cagar Budaya")])])]),a("div",{staticClass:"flex flex-wrap -m-2"},t._l(t.cagarBudayaList,(function(e){return a("div",{staticClass:"w-full"},[a("div",{staticClass:"m-2 p-4 bg-white shadow relative"},[a("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(e.nama))]),a("p",{staticClass:"text-grey-darker text-base"},[t._v("\n              "+t._s(t.concatAlamat(e))+"\n            ")])])])})),0)]):t._e()],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"font-normal leading-thight"},[t._v("List Cagar Budaya")])])}],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full p-8",staticStyle:{height:"400px"},attrs:{id:"map",id:t.mapName}})},m=[],h=(a("ac6a"),a("7f7f"),{name:"GoogleMaps",props:["name"],data:function(){return{mapName:this.name+"-map",map:null,mapCenter:{latitude:-.9396183,longitude:121.4729925},bounds:null,markers:[]}},mounted:function(){var t=this;this.bounds=new google.maps.LatLngBounds,this.map=new google.maps.Map(document.getElementById(this.mapName),{center:new google.maps.LatLng(this.mapCenter.latitude,this.mapCenter.longitude),zoom:4.5,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,rotateControl:!0,fullscreenControl:!1}),_.$on("renderMap",(function(e){t.clearMarker(),e.forEach((function(e){var a=new google.maps.LatLng(e.lintang,e.bujur),n=new google.maps.Marker({position:a,map:t.map});t.markers.push(n),t.map.fitBounds(t.bounds.extend(a))}))}))},methods:{clearMarker:function(){for(var t=0;t<this.markers.length;t++)this.markers[t].setMap(null);this.markers=[]},renderMarker:function(){}}}),v=h,g=Object(i["a"])(v,f,m,!1,null,null,null),y=g.exports,b={name:"home",components:{GoogleMaps:y},data:function(){return{selectedProvince:"",provinceList:[],cagarBudayaList:[]}},computed:{countCagarBudaya:function(){return this.cagarBudayaList.length}},methods:{fetchDataProvince:function(){var t=this;fetch("data/province.json").then((function(t){return t.json()})).then((function(e){t.provinceList=e.data}))},concatAlamat:function(t){var e=[t.alamat_jalan,t.desa_kelurahan,t.kecamatan,t.propinsi].filter((function(t){return"-"!=t}));return e.join(", ")}},mounted:function(){this.fetchDataProvince()},watch:{selectedProvince:function(t){var e=this;t&&(_.$emit("showLoading",this.cagarBudayaList),fetch("data/".concat(t.trim(),".json")).then((function(t){return t.json()})).then((function(t){e.cagarBudayaList=[].concat(t.data),_.$emit("renderMap",e.cagarBudayaList)})))}}},w=b,x=Object(i["a"])(w,d,p,!1,null,null,null),C=x.exports;n["a"].use(u["a"]);var k=new u["a"]({mode:"history",base:"/cagar-budaya/",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});a.d(e,"serverBus",(function(){return _})),n["a"].config.productionTip=!1;var _=new n["a"];new n["a"]({router:k,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.44658335.js.map