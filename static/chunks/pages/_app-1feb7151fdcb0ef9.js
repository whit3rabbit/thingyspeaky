(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2653)}])},2653:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(e){n(t,e,r[e])}))}return t}r.r(e),r.d(e,{default:function(){return E}});var i=r(5893),s=(r(906),r(7294));function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach((function(e){a(t,e,r[e])}))}return t}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var l={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},p={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},f={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},b={zIndex:1,position:"fixed",top:0,bottom:0},v=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},r.overlayClicked=r.overlayClicked.bind(h(h(r))),r.onTouchStart=r.onTouchStart.bind(h(h(r))),r.onTouchMove=r.onTouchMove.bind(h(h(r))),r.onTouchEnd=r.onTouchEnd.bind(h(h(r))),r.onScroll=r.onScroll.bind(h(h(r))),r.saveSidebarRef=r.saveSidebarRef.bind(h(h(r))),r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,u(e,r);var o=n.prototype;return o.componentDidMount=function(){var t=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!t}),this.saveSidebarWidth()},o.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},o.onTouchStart=function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchCurrentX:e.clientX})}},o.onTouchMove=function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX});break}},o.onTouchEnd=function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},o.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},o.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},o.isTouching=function(){return null!==this.state.touchIdentifier},o.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},o.saveSidebarWidth=function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})},o.saveSidebarRef=function(t){this.sidebar=t},o.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},o.render=function(){var t,e=c({},d,this.props.styles.sidebar),r=c({},p,this.props.styles.content),n=c({},f,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,i=this.isTouching(),a={className:this.props.rootClassName,style:c({},l,this.props.styles.root),role:"navigation",id:this.props.rootId},u=this.props.shadow&&(i||this.props.open||this.props.docked);if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",u&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",u&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var h=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-h)+"%)",e.WebkitTransform="translateX("+100*(1-h)+"%)"):(e.transform="translateX(-"+100*(1-h)+"%)",e.WebkitTransform="translateX(-"+100*(1-h)+"%)"),n.opacity=h,n.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?r.right=this.state.sidebarWidth+"px":r.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",n.opacity=1,n.visibility="visible");if(!i&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",r.transition="none",n.transition="none"),o)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var v=c({},b,this.props.styles.dragHandle);v.width=this.props.touchHandleWidth,this.props.pullRight?v.right=0:v.left=0,t=s.createElement("div",{style:v,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return s.createElement("div",a,s.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),s.createElement("div",{className:this.props.overlayClassName,style:n,onClick:this.overlayClicked,id:this.props.overlayId}),s.createElement("div",{className:this.props.contentClassName,style:r,id:this.props.contentId},t,this.props.children))},n}(s.Component);v.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0};var g=v,m=r(1955),y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=s.createContext&&s.createContext(y),S=function(){return S=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},S.apply(this,arguments)},w=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function C(t){return t&&t.map((function(t,e){return s.createElement(t.tag,S({key:e},t.attr),C(t.child))}))}function T(t){return function(e){return s.createElement(k,S({attr:S({},t.attr)},e),C(t.child))}}function k(t){var e=function(e){var r,n=t.attr,o=t.size,i=t.title,a=w(t,["attr","size","title"]),c=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),s.createElement("svg",S({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,a,{className:r,style:S(S({color:t.color||e.color},e.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),t.children)};return void 0!==x?s.createElement(x.Consumer,null,(function(t){return e(t)})):e(y)}function j(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(t)}function O(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(t)}function W(t){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}var X=function(){var t=(0,s.useState)(!1),e=t[0],r=t[1],n=(0,s.useState)(""),o=n[0],a=n[1],c=(0,s.useState)(""),u=c[0],h=c[1],l=(0,s.useState)(!1),d=l[0],p=l[1];return(0,s.useEffect)((function(){var t=m.Z.get("apiKey"),e=m.Z.get("channelId");t&&a(t),e&&h(e)}),[]),(0,i.jsx)(g,{sidebar:(0,i.jsxs)("div",{className:"flex flex-col items-start",children:[(0,i.jsx)("h2",{className:"mb-4",children:"Enter your API key and Channel ID"}),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m.Z.set("apiKey",o),m.Z.set("channelId",u)},className:"space-y-4",children:[(0,i.jsxs)("label",{className:"flex flex-col",children:["API Key:",(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("input",{type:d?"text":"password",value:o,onChange:function(t){return a(t.target.value)},className:"p-2 bg-gray-800 text-white rounded"}),(0,i.jsx)("button",{type:"button",onClick:function(){return p(!d)},className:"absolute right-2 top-1/2 transform -translate-y-1/2",children:d?(0,i.jsx)(j,{size:24}):(0,i.jsx)(O,{size:24})})]})]}),(0,i.jsxs)("label",{className:"flex flex-col",children:["Channel ID:",(0,i.jsx)("input",{type:"text",value:u,onChange:function(t){return h(t.target.value)},className:"p-2 bg-gray-800 text-white rounded"})]}),(0,i.jsx)("button",{type:"submit",className:"mt-4",children:"Submit"})]})]}),open:e,onSetOpen:r,styles:{sidebar:{background:"#2d3748",color:"white",padding:"2em"}},children:(0,i.jsx)("button",{onClick:function(){r(!0)},className:"mb-4 p-2 bg-blue-500 text-white rounded",children:(0,i.jsx)(W,{size:24})})})};r(3456);var E=function(t){var e=t.Component,r=t.pageProps;return(0,i.jsxs)("div",{className:"flex justify-center items-center",children:[(0,i.jsx)(X,{}),(0,i.jsx)(e,o({},r))]})}},3456:function(){},906:function(){},1955:function(t,e,r){"use strict";function n(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}r.d(e,{Z:function(){return o}});var o=function t(e,r){function o(t,o,i){if("undefined"!==typeof document){"number"===typeof(i=n({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in i)i[a]&&(s+="; "+a,!0!==i[a]&&(s+="="+i[a].split(";")[0]));return document.cookie=t+"="+e.write(o,t)+s}}return Object.create({set:o,get:function(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var i=r[o].split("="),s=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(n[a]=e.read(s,a),t===a)break}catch(c){}}return t?n[t]:n}},remove:function(t,e){o(t,"",n({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,n({},this.attributes,e))},withConverter:function(e){return t(n({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1118),e(387)}));var r=t.O();_N_E=r}]);