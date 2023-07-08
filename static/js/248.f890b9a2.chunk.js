"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[248],{8248:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,a,c,i,o,u,s,p=r(5861),f=r(9439),l=r(7757),d=r.n(l),h=r(2791),x=r(7689),m=r(5264),v=r(5299),g=r(6436),Z=r(1454),w=r(8137),j=r(168),b=r(6444),y=b.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 125px;\n  height: 100%;\n\n  border: 1px solid #e5eaf1;\n  border-radius: 4px;\n  overflow: hidden;\n\n  background-color: #f3f6f9;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    overflow: visible;\n  }\n"]))),k=b.ZP.div(a||(a=(0,j.Z)(["\n  max-width: 125px;\n"]))),I=b.ZP.img(c||(c=(0,j.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n\n  transition: transform var(--animation-duration) var(--timing-function);\n\n  &:hover,\n  &:focus {\n    transform: scale(2);\n    cursor: zoom-in;\n  }\n"]))),N=b.ZP.div(i||(i=(0,j.Z)(["\n  flex-grow: 1;\n\n  padding: 8px;\n"]))),z=b.ZP.h2(o||(o=(0,j.Z)(["\n  color: #112236;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n  letter-spacing: 0.02em;\n"]))),P=b.ZP.p(u||(u=(0,j.Z)(["\n  color: #516174;\n\n  font-size: 16px;\n  line-height: calc(20 / 16);\n  letter-spacing: 0.02em;\n"]))),J=r(184),R=function(n){var e=n.element,r=e.profile_path,t=e.name,a=e.character;return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(y,{children:[(0,J.jsx)(k,{children:r?(0,J.jsx)(I,{loading:"lazy",src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:t}):(0,J.jsx)(I,{src:w,alt:t})}),(0,J.jsxs)(N,{children:[(0,J.jsx)(z,{children:t}),a&&(0,J.jsxs)(P,{children:["Character: ",a]})]})]})})},_=b.ZP.ul(s||(s=(0,j.Z)(["\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));\n  grid-gap: 17px;\n\n  padding: 0;\n"]))),q=function(n){var e=n.data;return(0,J.jsx)(_,{children:e.map((function(n){return(0,J.jsx)("li",{children:(0,J.jsx)(R,{element:n})},n.id)}))})},M=function(){var n=(0,h.useState)([]),e=(0,f.Z)(n,2),r=e[0],t=e[1],a=(0,h.useState)(!1),c=(0,f.Z)(a,2),i=c[0],o=c[1],u=(0,x.UO)().movieId;return(0,h.useEffect)((function(){if(u){var n=function(){var n=(0,p.Z)(d().mark((function n(){var r,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,(0,g.uV)(u);case 4:r=n.sent,t=r.data.cast,e(t),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("ERROR",n.t0),v.Report.failure("ERROR","".concat(n.t0.message),"Close");case 13:return n.prev=13,o(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})));return function(){return n.apply(this,arguments)}}(),e=function(n){0!==n.length?t(n):m.Notify.failure("Sorry, there are no movie cast.")};n()}}),[u]),(0,J.jsxs)(J.Fragment,{children:[0!==r.length&&(0,J.jsx)(q,{data:r}),i&&(0,J.jsx)(Z.Z,{})]})}},1454:function(n,e,r){r.d(e,{Z:function(){return u}});var t,a=r(8402),c=r(168),i=r(6444).ZP.div(t||(t=(0,c.Z)(["\n  position: fixed;\n  top: calc(50% - 48px);\n  left: calc(50% - 48px);\n  z-index: 1100;\n"]))),o=r(184),u=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},6436:function(n,e,r){r.d(e,{Hx:function(){return d},Y5:function(){return f},_k:function(){return s},uV:function(){return l},vw:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),i=r(1243),o="https://api.themoviedb.org/3",u={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMzNTQwNWIzNDUyMzNmMmEzZGJlY2FiZDA2MDNlNiIsInN1YiI6IjY0YTMwMjdiZTlkYTY5MDBhZTJmMTRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-JNYq0lLf2QZFKI9PWQ6B2ydwjA4oq3z-bATNKk5WQ"}},s=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",r=new URLSearchParams({page:e}),n.next=4,i.Z.request("".concat(o).concat("/trending/movie/day","?").concat(r),u);case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e,r){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",t=new URLSearchParams({query:e,include_adult:"true",page:r}),n.next=4,i.Z.request("".concat(o).concat("/search/movie","?").concat(t),u);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e),n.next=3,i.Z.request("".concat(o).concat(r),u);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"/credits"),n.next=3,i.Z.request("".concat(o).concat(r),u);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"/reviews"),t=new URLSearchParams({page:1}),n.next=4,i.Z.request("".concat(o).concat(r,"?").concat(t),u);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8137:function(n,e,r){n.exports=r.p+"static/media/noImageIcon-250x375.74601c7a85308d27ba89.png"}}]);
//# sourceMappingURL=248.f890b9a2.chunk.js.map