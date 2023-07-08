"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[322],{2940:function(n,t,e){e.d(t,{Z:function(){return c}});var r,a=e(168),i=e(6444).ZP.button(r||(r=(0,a.Z)(["\n  display: block;\n  min-width: 250px;\n\n  margin: 0 auto;\n  padding: 8px 0;\n\n  border: 2px solid #0967c2;\n  border-radius: 20px;\n  background-color: #e1eefd;\n  text-align: center;\n\n  color: #0967c2;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: calc(22 / 18);\n  letter-spacing: 0.02em;\n\n  transition: all var(--animation-duration) var(--timing-function);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n\n    color: #fafafa;\n    background-color: #0967c2;\n    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),o=e(184),c=function(n){var t=n.text,e=n.onClickBtn;return(0,o.jsx)(i,{type:"button",onClick:e,children:t})}},1454:function(n,t,e){e.d(t,{Z:function(){return u}});var r,a=e(8402),i=e(168),o=e(6444).ZP.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: calc(50% - 48px);\n  left: calc(50% - 48px);\n  z-index: 1100;\n"]))),c=e(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},4761:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,i,o,c,u,s=e(7689),p=e(1087),l=e(8137),f=e(168),d=e(6444),x=d.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 250px;\n  height: 100%;\n\n  border: 1px solid #e5eaf1;\n  border-radius: 8px;\n  overflow: hidden;\n\n  background-color: #f3f6f9;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  transition: all var(--animation-duration) var(--timing-function);\n\n  &:hover,\n  &:focus {\n    color: #0967c2;\n    background-color: #e1eefd;\n    border-color: #0967c2;\n    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),h=d.ZP.div(a||(a=(0,f.Z)(["\n  max-width: 250px;\n"]))),g=d.ZP.img(i||(i=(0,f.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n\n  transition: transform var(--animation-duration) var(--timing-function);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),m=d.ZP.div(o||(o=(0,f.Z)(["\n  flex-grow: 1;\n\n  padding: 8px;\n"]))),v=d.ZP.h2(c||(c=(0,f.Z)(["\n  color: #112236;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: calc(24 / 20);\n  letter-spacing: 0.02em;\n"]))),b=e(184),Z=function(n){var t=n.element,e=t.id,r=t.poster_path,a=t.title,i=(0,s.TH)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(p.rU,{to:"/movies/".concat(e),state:{from:i},children:(0,b.jsxs)(x,{children:[(0,b.jsx)(h,{children:r?(0,b.jsx)(g,{loading:"lazy",src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:a}):(0,b.jsx)(g,{src:l,alt:a})}),(0,b.jsx)(m,{children:(0,b.jsx)(v,{children:a})})]})})})},w=d.ZP.ul(u||(u=(0,f.Z)(["\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 39px;\n\n  margin-bottom: 32px;\n  padding: 0;\n"]))),y=function(n){var t=n.data;return(0,b.jsx)(w,{children:t.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(Z,{element:n})},n.id)}))})}},4814:function(n,t,e){e.d(t,{Z:function(){return f}});var r,a,i,o=e(168),c=e(6444),u=c.ZP.section(r||(r=(0,o.Z)(["\n  padding: 20px 0;\n"]))),s=c.ZP.div(a||(a=(0,o.Z)(["\n  max-width: 1440px;\n  padding-right: 16px;\n  padding-left: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),p=c.ZP.h1(i||(i=(0,o.Z)(["\n  margin-bottom: 20px;\n  color: #112236;\n  text-shadow: 2px 4px 4px rgb(44 101 158);\n  font-size: 32px;\n  line-height: calc(36 / 32);\n  letter-spacing: 0.02em;\n"]))),l=e(184),f=function(n){var t=n.title,e=n.children;return(0,l.jsx)(u,{children:(0,l.jsxs)(s,{children:[t&&(0,l.jsx)(p,{children:t}),e]})})}},6436:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return l},_k:function(){return s},uV:function(){return f},vw:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243),c="https://api.themoviedb.org/3",u={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMzNTQwNWIzNDUyMzNmMmEzZGJlY2FiZDA2MDNlNiIsInN1YiI6IjY0YTMwMjdiZTlkYTY5MDBhZTJmMTRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-JNYq0lLf2QZFKI9PWQ6B2ydwjA4oq3z-bATNKk5WQ"}},s=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",e=new URLSearchParams({page:t}),n.next=4,o.Z.request("".concat(c).concat("/trending/movie/day","?").concat(e),u);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",r=new URLSearchParams({query:t,include_adult:"true",page:e}),n.next=4,o.Z.request("".concat(c).concat("/search/movie","?").concat(r),u);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.next=3,o.Z.request("".concat(c).concat(e),u);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.next=3,o.Z.request("".concat(c).concat(e),u);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),r=new URLSearchParams({page:1}),n.next=4,o.Z.request("".concat(c).concat(e,"?").concat(r),u);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7322:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,a=e(3433),i=e(5861),o=e(9439),c=e(7757),u=e.n(c),s=e(2791),p=e(1087),l=e(5264),f=e(5299),d=e(6436),x=["title","titleId"];function h(){return h=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},h.apply(this,arguments)}function g(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function m(n,t){var e=n.title,a=n.titleId,i=g(n,x);return s.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 50 50",ref:t,"aria-labelledby":a},i),e?s.createElement("title",{id:a},e):null,r||(r=s.createElement("path",{d:"M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z"})))}var v,b,Z,w,y=s.forwardRef(m),j=(e.p,e(168)),k=e(6444),P=k.ZP.form(v||(v=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px;\n  padding: 25px auto;\n\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 25px;\n  overflow: hidden;\n\n  background-color: #fafafa;\n"]))),I=k.ZP.input(b||(b=(0,j.Z)(["\n  flex-grow: 1;\n  padding: 0;\n  padding-left: 16px;\n\n  border: none;\n  outline: none;\n  height: 30px;\n\n  background-color: #fafafa;\n\n  font: inherit;\n  font-size: 20px;\n  letter-spacing: 0.02em;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),S=k.ZP.button(Z||(Z=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  width: 50px;\n\n  cursor: pointer;\n\n  background-color: transparent;\n\n  opacity: 0.6;\n  transition: all var(--animation-duration) var(--timing-function);\n\n  &:hover {\n    opacity: 1;\n    transform: scale(1.05);\n    color: #0967c2;\n  }\n"]))),z=k.ZP.span(w||(w=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),C=e(184),N=function(n){var t=n.getQuery,e=(0,s.useState)(""),r=(0,o.Z)(e,2),a=r[0],i=r[1];return(0,C.jsxs)(P,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.query.value.toLowerCase().trim();t(e),i("")},children:[(0,C.jsx)(I,{type:"text",name:"query",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Movie name",onChange:function(n){var t=n.target.value;i(t)}}),(0,C.jsx)(S,{type:"submit","aria-label":"Search",children:(0,C.jsx)(z,{children:(0,C.jsx)(y,{width:"24",height:"24",fill:"currentColor"})})})]})},O=e(4761),q=e(4814),R=e(1454),_=e(2940),J=function(){var n,t=(0,p.lr)(),e=(0,o.Z)(t,2),r=e[0],c=e[1],x=(0,s.useState)(1),h=(0,o.Z)(x,2),g=h[0],m=h[1],v=(0,s.useState)(0),b=(0,o.Z)(v,2),Z=b[0],w=b[1],y=(0,s.useState)([]),j=(0,o.Z)(y,2),k=j[0],P=j[1],I=(0,s.useState)(!1),S=(0,o.Z)(I,2),z=S[0],J=S[1],M=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,s.useEffect)((function(){if(M){var n=function(){var n=(0,i.Z)(u().mark((function n(){var e,r,a,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return J(!0),n.prev=1,n.next=4,(0,d.vw)(M,g);case 4:e=n.sent,r=e.data,a=r.results,i=r.total_pages,t(a,i),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("ERROR",n.t0),f.Report.failure("ERROR","".concat(n.t0.message),"Close");case 15:return n.prev=15,J(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,11,15,18]])})));return function(){return n.apply(this,arguments)}}(),t=function(n,t){0!==n.length?(P((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(n))})),w(t)):l.Notify.failure("Sorry, there are no movies matching your search query. Please try again.")};n()}}),[g,M]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(q.Z,{children:[(0,C.jsx)(N,{getQuery:function(n){n?(c({query:n}),P([]),m(1)):l.Notify.info("Sorry, you need to fill in the search field to search for movies.")}}),k.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(O.Z,{data:k}),g<Z&&!z&&(0,C.jsx)(_.Z,{text:"Load more",onClickBtn:function(){m((function(n){return n+1}))}})]})]}),z&&(0,C.jsx)(R.Z,{})]})}},8137:function(n,t,e){n.exports=e.p+"static/media/noImageIcon-250x375.74601c7a85308d27ba89.png"}}]);
//# sourceMappingURL=322.34c4e51e.chunk.js.map