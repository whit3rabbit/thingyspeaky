(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(7568),a=t(4051),c=t.n(a),s=t(5893),u=t(7294),i=t(6154),l=t(1955),o=t(5152),d=t.n(o)()((function(){return Promise.all([t.e(279),t.e(347)]).then(t.bind(t,6347))}),{loadableGenerated:{webpack:function(){return[6347]}},ssr:!1});function h(){var e=(0,u.useState)(null),n=e[0],t=e[1],a=(0,u.useState)(15),o=a[0],h=a[1],f=(0,u.useState)(!0),p=f[0],v=f[1],x=(0,u.useState)("line"),j=x[0],b=x[1],m=(0,u.useRef)(null);(0,u.useEffect)((function(){var e=l.Z.get("apiKey"),n=l.Z.get("channelId"),a=function(){var a=(0,r.Z)(c().mark((function r(){var a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("https://api.thingspeak.com/channels/".concat(n,"/feeds.json?api_key=").concat(e,"&results=5"));case 3:a=r.sent,t(a.data),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching data:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();return e&&n&&p&&(a(),m.current=setInterval(a,1e3*o)),function(){m.current&&clearInterval(m.current)}}),[o,p]);return(0,s.jsx)("div",{className:"flex flex-col justify-center items-center m-4",children:n?(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Data from ThingSpeak:"}),n&&Object.keys(n.channel).filter((function(e){return e.startsWith("field")})).map((function(e,t){return(0,s.jsx)(d,{type:j,data:n,fieldKey:e},t)})),(0,s.jsxs)("select",{value:o,onChange:function(e){h(Number(e.target.value))},className:"mb-4",children:[(0,s.jsx)("option",{value:5,children:"5 seconds"}),(0,s.jsx)("option",{value:10,children:"10 seconds"}),(0,s.jsx)("option",{value:15,children:"15 seconds"}),(0,s.jsx)("option",{value:30,children:"30 seconds"}),(0,s.jsx)("option",{value:60,children:"60 seconds"})]}),(0,s.jsxs)("select",{value:j,onChange:function(e){b(e.target.value)},className:"mb-4",children:[(0,s.jsx)("option",{value:"line",children:"Line"}),(0,s.jsx)("option",{value:"bar",children:"Bar"})]}),(0,s.jsx)("button",{onClick:function(){p&&m.current&&clearInterval(m.current),v(!p)},className:"mb-4 p-2 bg-blue-500 text-white rounded",children:p?"Stop":"Start"})]}):(0,s.jsx)("h2",{children:"Please enter your API key and Channel ID in the sidebar to view data"})})}}},function(e){e.O(0,[549,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);