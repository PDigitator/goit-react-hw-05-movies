"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[132],{1454:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(8402),a=t(168),c=t(6444).ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: calc(50% - 48px);\n  left: calc(50% - 48px);\n  z-index: 1100;\n"]))),o=t(184),u=function(){return(0,o.jsx)(c,{children:(0,o.jsx)(i.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},8657:function(n,e,t){t.d(e,{C:function(){return m},Dr:function(){return g},Ee:function(){return l},VG:function(){return v},bU:function(){return h},im:function(){return f},wC:function(){return w},xv:function(){return Z}});var r,i,a,c,o,u,s,p,d=t(168),x=t(6444),f=x.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  max-width: 1408px;\n\n  margin-bottom: 20px;\n  padding: 12px;\n\n  border: 1px solid #e5eaf1;\n  border-radius: 8px;\n\n  background-color: #f3f6f9;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  @media screen and (max-width: 767.99px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),h=x.ZP.div(i||(i=(0,d.Z)(["\n  max-width: 500px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    min-width: 375px;\n  }\n"]))),l=x.ZP.img(a||(a=(0,d.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),m=x.ZP.div(c||(c=(0,d.Z)([""]))),v=x.ZP.h2(o||(o=(0,d.Z)(["\n  margin-bottom: 32px;\n  color: #112236;\n  text-shadow: 2px 4px 4px rgb(44 101 158);\n\n  font-weight: 700;\n  font-size: 28px;\n  line-height: calc(32 / 28);\n  letter-spacing: 0.02em;\n\n  @media screen and (max-width: 382px) {\n    font-size: 4.7vw;\n  }\n"]))),g=x.ZP.span(u||(u=(0,d.Z)(["\n  font-style: italic;\n"]))),w=x.ZP.h3(s||(s=(0,d.Z)(["\n  margin-bottom: 32px;\n\n  color: #112236;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: calc(28 / 24);\n  letter-spacing: 0.02em;\n\n  @media screen and (max-width: 382px) {\n    font-size: 4.7vw;\n  }\n"]))),Z=x.ZP.p(p||(p=(0,d.Z)(["\n  margin-bottom: 44px;\n\n  color: #516174;\n  font-size: 20px;\n  line-height: calc(24 / 20);\n  letter-spacing: 0.02em;\n\n  @media screen and (max-width: 382px) {\n    font-size: 4.18vw;\n\n    hyphens: auto;\n  }\n"])))},4409:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i=t(5861),a=t(9439),c=t(7757),o=t.n(c),u=t(2791),s=t(7689),p=t(5264),d=t(5299),x=t(6436),f=t(1454),h=t.p+"static/media/userAvatarIcon-512x512.476201c83777c97393af.png",l=t(1210),m=t(184),v=function(n){var e=n.element,t=e.author,r=e.content;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(l.im,{children:[(0,m.jsx)(l.bU,{children:(0,m.jsx)(l.Ee,{src:h,alt:t})}),(0,m.jsxs)(l.C,{children:[(0,m.jsx)(l.VG,{children:t}),(0,m.jsx)(l.xv,{children:r})]})]})})},g=t(168),w=t(6444).ZP.ul(r||(r=(0,g.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, max(1408px, 1fr));\n  grid-gap: 16px;\n\n  padding: 0;\n"]))),Z=function(n){var e=n.data;return(0,m.jsx)(w,{children:e.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(v,{element:n})},n.id)}))})},b=t(8657),y=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],c=(0,u.useState)(!1),h=(0,a.Z)(c,2),l=h[0],v=h[1],g=(0,s.UO)().movieId;return(0,u.useEffect)((function(){if(g){var n=function(){var n=(0,i.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),n.prev=1,n.next=4,(0,x.Hx)(g);case 4:t=n.sent,r=t.data.results,e(r),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("ERROR",n.t0),d.Report.failure("ERROR","".concat(n.t0.message),"Close");case 13:return n.prev=13,v(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,9,13,16]])})));return function(){return n.apply(this,arguments)}}(),e=function(n){0!==n.length?r(n):p.Notify.failure("Sorry, there are no movie reviews.")};n()}}),[g]),(0,m.jsxs)(m.Fragment,{children:[0!==t.length?(0,m.jsx)(Z,{data:t}):(0,m.jsx)(b.xv,{children:"We don't have any reviews for this movie. But you can keep yours..."}),l&&(0,m.jsx)(f.Z,{})]})}},1210:function(n,e,t){t.d(e,{C:function(){return h},Ee:function(){return f},VG:function(){return l},bU:function(){return x},im:function(){return d},xv:function(){return m}});var r,i,a,c,o,u,s=t(168),p=t(6444),d=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  gap: 16px;\n  max-width: 1408px;\n  width: 100%;\n  padding: 12px;\n\n  border: 1px solid #e5eaf1;\n  border-radius: 8px;\n\n  background-color: #f3f6f9;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  @media screen and (max-width: 532px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),x=p.ZP.div(i||(i=(0,s.Z)(["\n  overflow: hidden;\n\n  min-width: 125px;\n  height: 125px;\n  background-color: #fafafa;\n\n  border: 1px solid #e5eaf1;\n  border-radius: 50%;\n"]))),f=p.ZP.img(a||(a=(0,s.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),h=p.ZP.div(c||(c=(0,s.Z)([""]))),l=p.ZP.h2(o||(o=(0,s.Z)(["\n  margin-bottom: 8px;\n  color: #112236;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n  letter-spacing: 0.02em;\n\n  @media screen and (max-width: 382px) {\n    font-size: 4.7vw;\n  }\n"]))),m=p.ZP.p(u||(u=(0,s.Z)(["\n  color: #516174;\n\n  font-size: 16px;\n  line-height: calc(20 / 16);\n  letter-spacing: 0.02em;\n\n  @media screen and (max-width: 382px) {\n    font-size: 4.18vw;\n\n    hyphens: auto;\n  }\n"])))},6436:function(n,e,t){t.d(e,{Hx:function(){return f},Y5:function(){return d},_k:function(){return s},uV:function(){return x},vw:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),c=t(1243),o="https://api.themoviedb.org/3",u={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMzNTQwNWIzNDUyMzNmMmEzZGJlY2FiZDA2MDNlNiIsInN1YiI6IjY0YTMwMjdiZTlkYTY5MDBhZTJmMTRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-JNYq0lLf2QZFKI9PWQ6B2ydwjA4oq3z-bATNKk5WQ"}},s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",t=new URLSearchParams({page:e}),n.next=4,c.Z.request("".concat(o).concat("/trending/movie/day","?").concat(t),u);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",r=new URLSearchParams({query:e,include_adult:"true",page:t}),n.next=4,c.Z.request("".concat(o).concat("/search/movie","?").concat(r),u);case 4:return i=n.sent,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e),n.next=3,c.Z.request("".concat(o).concat(t),u);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/credits"),n.next=3,c.Z.request("".concat(o).concat(t),u);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/reviews"),r=new URLSearchParams({page:1}),n.next=4,c.Z.request("".concat(o).concat(t,"?").concat(r),u);case 4:return i=n.sent,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=132.8ca83617.chunk.js.map