"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{5920:function(n,e,t){t.d(e,{Z:function(){return s}});var r,c=t(501),o=t(6871),u=t(168),a=t(6031).ZP.ol(r||(r=(0,u.Z)(["\n  color: black;\n"]))),i=t(184);function s(n){var e=n.movies,t=(0,o.TH)();return(0,i.jsx)(a,{children:e.map((function(n){var e=n.original_title,r=n.id;return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:e})},r)}))})}},5186:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(885),c=t(2791),o=t(501),u=t(6871),a=t(6066),i=t(184);function s(n){var e=n.onSubmit,t=(0,c.useState)(""),o=(0,r.Z)(t,2),u=o[0],s=o[1];return(0,i.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==u.trim()?(e(u),s("")):a.Am.error("Please enter search request",{position:a.Am.POSITION.TOP_RIGHT})},children:[(0,i.jsx)("label",{children:(0,i.jsx)("input",{type:"text",name:"search",value:u,onChange:function(n){s(n.target.value)}})}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})}var f=t(5920),l=t(5802),d=t(3775);function h(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],a=e[1],h=(0,c.useState)("idle"),m=(0,r.Z)(h,2),v=m[0],p=m[1],g=(0,o.lr)(),k=(0,r.Z)(g,1)[0],y=(0,u.s0)(),S=k.get("query");return(0,c.useEffect)((function(){S&&(0,l.FE)(S).then((function(n){a(n),0===n.length?p("noFound"):p("resolved")}))}),[S]),(0,i.jsxs)(d.Kr,{children:[(0,i.jsx)(s,{onSubmit:function(n){y({search:"query=".concat(n)})}}),"resolved"===v&&(0,i.jsx)(f.Z,{movies:t}),"noFound"===v&&(0,i.jsx)(d.v3,{children:"Sorry, no movie found on your request"})]})}},5802:function(n,e,t){t.d(e,{Mc:function(){return s},hC:function(){return f},oJ:function(){return l},FE:function(){return i},_k:function(){return a}});var r=t(4569),c=t.n(r),o="https://api.themoviedb.org/3/",u="0e5524da41e4e049b8581d81c783bc71",a=function(){return c()("".concat(o,"trending/movie/day?api_key=").concat(u)).then((function(n){return n.data.results}))},i=function(n){return c()("".concat(o,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n)).then((function(n){return n.data.results}))},s=function(n){return c()("".concat(o,"movie/").concat(n,"?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}))},f=function(n){return c()("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data.cast}))},l=function(n){return c()("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=movies.f9270681.chunk.js.map