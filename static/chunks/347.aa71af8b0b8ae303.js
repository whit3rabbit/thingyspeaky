"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{6347:function(e,r,t){function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(r),t.d(r,{default:function(){return s}});var a=t(5893),i=t(7294),c=t(5927),l=t.n(c);var s=function(e){var r,t,n=e.type,c=e.data,s=e.fieldKey,f=i.createRef(),d=c.feeds.map((function(e){var r=Number(e[s]);return isFinite(r)?r:(console.log("Invalid value for fieldKey:",s,"in feed:",e),0)})),u=(r=Math).min.apply(r,o(d)),p=(t=Math).max.apply(t,o(d));return isFinite(u)||(u=0),isFinite(p)||(p=1),u===p&&(u-=1,p+=1),(0,i.useEffect)((function(){if(c&&c.feeds&&Array.isArray(c.feeds)){if(0!==c.feeds.length){var e;c.feeds.forEach((function(e,r){e.hasOwnProperty(s)||console.log("Feed at index ".concat(r," does not have property ").concat(s)),isNaN(Date.parse(e.created_at))&&console.log("Feed at index ".concat(r," has invalid created_at date: ").concat(e.created_at))}));try{var r={series:[{name:c.channel[s],data:c.feeds.map((function(e){var r=Number(e[s]);return isFinite(r)?r:(console.log("Invalid value for fieldKey:",s,"in feed:",e),0)}))}],chart:{height:350,type:n,dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:c.channel[s],align:"left"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},markers:{size:1},xaxis:{categories:c.feeds.map((function(e){return new Date(e.created_at).toLocaleString()}))},yaxis:{title:{text:c.channel[s]},min:u,max:p},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}};(e=new(l())(f.current,r)).render()}catch(t){return void console.error("Error creating or rendering chart:",t)}return function(){try{e&&e.destroy()}catch(t){console.error("Error destroying chart:",t)}}}console.log("No feeds to plot")}else console.log("Invalid data or feeds not an array")}),[c,n,s]),(0,a.jsx)("div",{ref:f})}}}]);