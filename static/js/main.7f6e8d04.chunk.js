(this.webpackJsonpnexpisode=this.webpackJsonpnexpisode||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),o=n.n(a),i=(n(24),n(10)),s=n(18),u=n(1),p=function(e){return e.toLocaleString("en-US",{timeZone:"PST"})},l=function(e){var t=e.match(/\d+/g);return new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5])};var h=function(e,t){return((l(e)-l(t))/6e4).toFixed(2)},d=n(8),f=n.n(d),j=n(11);function b(){return(b=Object(j.a)(f.a.mark((function e(t,n){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("trying to fetch ".concat(n," episode")),e.next=4,fetch("/v4/series/".concat(n),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 4:return c=e.sent,e.abrupt("return",c.json());case 8:throw e.prev=8,e.t0=e.catch(0),console.log("failure getting ".concat(n," episode")),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var O=function(e,t){return b.apply(this,arguments)},g="https://api4.thetvdb.com",v={apikey:"0d51e828-60db-448d-8ec4-2bceb87316d7",pin:"WORUCUTI"},w={"Content-Type":"application/json",accept:"application/json"};function S(){return(S=Object(j.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("trying to fetch jwt token"),console.log("TVDB_API_HOST >",g),e.next=5,fetch("".concat(g,"/v4/login"),{method:"POST",headers:w,body:JSON.stringify(v)});case 5:return t=e.sent,e.abrupt("return",t.json());case 9:throw e.prev=9,e.t0=e.catch(0),console.log("fetch JWT token error"),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var x=function(){return S.apply(this,arguments)},m=(n(26),n(3)),y={bachelor:"70869?year=25",grey:""},D=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("\xaf\\_(\u30c4)_/\xaf"),o=Object(i.a)(a,2),l=o[0],d=o[1],f=Object(c.useState)({iso:(new Date).toISOString(),pst:p(new Date)}),j=Object(i.a)(f,2),b=j[0],g=j[1],v=Object(c.useState)({iso:(new Date).toISOString(),pst:p(new Date)}),w=Object(i.a)(v,2),S=w[0],D=w[1];return Object(c.useEffect)((function(){var e=window.location.pathname.replace(/\W/g,"");e&&r(y[e]),n&&x().then((function(e){console.log(n),O(e.data.token,n).then((function(e){var t=new Date("".concat(e.data.lastAired).concat("T20:00:00")).toISOString();g({iso:t,pst:p(new Date(t))})}))}))}),[n]),Object(c.useEffect)((function(){var e=h(b.iso,S.iso);e>0&&d("".concat(e," mins"));var t=setInterval((function(){return D({iso:(new Date).toISOString(),pst:p(Date())})}),1e3);return function(){return clearInterval(t)}}),[b,S]),Object(m.jsx)(s.a,{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/bachelor",children:Object(m.jsxs)("div",{className:"episode",children:[l,Object(m.jsx)("br",{}),"remaining..."]})}),Object(m.jsx)(u.a,{exact:!0,path:"/grey",children:Object(m.jsxs)("div",{className:"episode",children:[l,Object(m.jsx)("br",{}),"remaining..."]})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),T()}},[[33,1,2]]]);
//# sourceMappingURL=main.7f6e8d04.chunk.js.map