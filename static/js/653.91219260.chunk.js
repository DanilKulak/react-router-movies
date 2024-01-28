"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[653],{7492:function(e,n,t){t.d(n,{Z:function(){return N}});var r,a,i,u,c,s,o=t(9439),p=t(2791),f=t(7689),l=t(1087),h=t(168),d=t(7686),v={Item:d.Z.li(r||(r=(0,h.Z)(["\n        flex-basis: calc((100% - 96px) / 5);\n    "]))),Image:d.Z.img(a||(a=(0,h.Z)(["\n        height: 268px;\n        margin-bottom: 10px;\n    "]))),Title:d.Z.h2(i||(i=(0,h.Z)(["\n        font-size: 18px;\n        margin-bottom: 6px;\n    "]))),Year:d.Z.p(u||(u=(0,h.Z)([""])))},m=t(9323),x=t.p+"static/media/no-movie-image.baba1a7394e8054d69cf.jpg",g=t(184),Z=v.Item,j=v.Image,b=v.Title,y=v.Year,w=function(e){var n=e.movie,t=n.id,r=n.poster_path,a=n.title,i=n.release_date,u=(0,p.useState)(!1),c=(0,o.Z)(u,2),s=c[0],h=c[1],d=(0,f.TH)();return(0,g.jsx)(Z,{children:(0,g.jsx)(l.rU,{to:"/movies/".concat(t),state:{from:d},children:n&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{src:r?"https://image.tmdb.org/t/p/original".concat(r):x,alt:a,onLoad:function(){return h(!0)}}),s&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{children:a}),(0,g.jsx)(y,{children:m.Z.getYear(i).toString()})]})]})})})},I={Title:d.Z.h1(c||(c=(0,h.Z)(["\n        margin-bottom: 40px;\n    "]))),List:d.Z.ul(s||(s=(0,h.Z)(["\n    display: flex;\n    flex-wrap: wrap;  \n    gap: 24px;\n    margin-top: 40px;\n"])))},k=I.Title,Y=I.List,N=function(e){var n=e.title,t=e.movies,r=t.map((function(e){return(0,g.jsx)(w,{movie:e},e.id)}));return(0,g.jsx)(g.Fragment,{children:t&&(0,g.jsxs)(g.Fragment,{children:[n&&(0,g.jsx)(k,{children:n}),(0,g.jsx)(Y,{children:r})]})})}},9323:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(184),a={getYear:function(e){return new Date(e).getFullYear()},normalizedArr:function(e){return e.map((function(e,n,t){var a=e.name;return(0,r.jsxs)("span",{children:[a,n!==t.length-1?", ":""]},n)}))}}},1566:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,a,i,u,c,s=t(5861),o=t(9439),p=t(4687),f=t.n(p),l=t(7492),h=t(168),d=t(7686),v=t(7462),m={FormWrapper:d.Z.div(r||(r=(0,h.Z)(["\n        display: flex;\n        justify-content: center;\n    "]))),Form:d.Z.form(a||(a=(0,h.Z)(["\n        position: relative;\n    "]))),Input:d.Z.input(i||(i=(0,h.Z)(["\n        width: 300px;\n        height: 36px;\n        outline: transparent;\n        border-radius: 10px;\n        border: 1px solid #afafaf;\n        font-size: 18px;\n        padding: 0px 15px;\n    "]))),SearchButton:d.Z.button(u||(u=(0,h.Z)(["\n        position: absolute;\n        right: 15px;\n        top: 50%;\n        transform: translateY(-50%);\n    "]))),SearchIcon:(0,d.Z)(v.Yfv)(c||(c=(0,h.Z)(["\n        width: 18px;\n        height: 18px;\n        fill: #6e6e6e;\n    "])))},x=t(184),g=m.Form,Z=m.Input,j=m.SearchIcon,b=m.FormWrapper,y=m.SearchButton,w=function(e){var n=e.inputValue,t=e.handleChange,r=e.handleSubmit,a=e.type,i=void 0===a?"submit":a;return(0,x.jsx)(b,{children:(0,x.jsxs)(g,{onSubmit:r,children:[(0,x.jsx)(Z,{type:"text",name:"search",placeholder:"Search...",value:n,onChange:t}),(0,x.jsx)(y,{type:i,children:(0,x.jsx)(j,{})})]})})},I=t(7694),k=(t(7213),t(2791)),Y=t(1087),N=t(1207),S=function(){var e,n=(0,k.useState)(null),t=(0,o.Z)(n,2),r=t[0],a=t[1],i=(0,k.useState)(""),u=(0,o.Z)(i,2),c=u[0],p=u[1],h=(0,Y.lr)(),d=(0,o.Z)(h,2),v=d[0],m=d[1],g=null!==(e=v.get("search"))&&void 0!==e?e:"";(0,k.useEffect)((function(){p(g)}),[g]),(0,k.useEffect)((function(){var e=function(){var e=(0,s.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return I.Loading.standard(),e.prev=3,e.next=6,N.Z.fetchMovieByQuery(g);case 6:if(0!==(null===(n=e.sent)||void 0===n?void 0:n.length)){e.next=11;break}return a(null),I.Notify.failure("Not Found"),e.abrupt("return");case 11:a(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0.message);case 17:return e.prev=17,I.Loading.remove(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w,{inputValue:c,handleChange:function(e){return p(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=e.currentTarget;n.elements.search.value&&m({search:n.elements.search.value})},type:"submit"}),r&&(0,x.jsx)(l.Z,{movies:r})]})},_=function(){return(0,x.jsx)(S,{})}},1207:function(e,n,t){var r=t(5861),a=t(4687),i=t.n(a),u=t(340).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQxZjA4MDA4NmRkZjBkNThjNGJkYzA3ZWY0YTAzNiIsInN1YiI6IjY1YTYzZjQxOWJjZDBmMDEyM2JhNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9KEtiGYN_3JrU51Sf_c_is4ZEHWjNunRsBdl0i-lHic"}}),c={fetchTrendingMovies:function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieById:function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fetchMovieCast:function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fetchMovieReviews:function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fetchMovieByQuery:function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie?query=".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};n.Z=c}}]);
//# sourceMappingURL=653.91219260.chunk.js.map