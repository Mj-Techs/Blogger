(this.webpackJsonpblogger=this.webpackJsonpblogger||[]).push([[0],{55:function(t,e,c){"use strict";c.r(e);var s=c(1),n=c(0),a=c(26),o=c.n(a),r=c(4),j=c(2),i=c(10),h=c(9),d=c.n(h),u=function(t){var e=Object(n.useState)([]),c=Object(i.a)(e,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var e=t.data;o(e)})).catch((function(t){alert(t.message)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["USERS LIST:",a.length]}),Object(s.jsx)("ul",{children:a.map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/users/".concat(t.id),children:t.name})},t.id)}))})]})},b=function(t){var e=t.match.params.id,c=Object(n.useState)(""),a=Object(i.a)(c,2),o=a[0],j=a[1],h=Object(n.useState)([]),u=Object(i.a)(h,2),b=u[0],l=u[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(t){var e=t.data.name;j(e)})).catch((function(t){alert(t.message)})),d.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(e)).then((function(t){var e=t.data;l(e)})).catch((function(t){alert(t.message)}))}),[e]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["USER NAME:",o]}),Object(s.jsx)("h2",{children:"POSTS WRITTEN BY USER"}),Object(s.jsx)("ul",{children:b.map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/posts/".concat(t.id),children:t.title})},t.id)}))})]})},l=function(t){var e=Object(n.useState)([]),c=Object(i.a)(e,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){var e=t.data;o(e)})).catch((function(t){alert(t.message)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Total Posts:",a.length]}),Object(s.jsx)("ul",{children:a.map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)(r.b,{to:"/posts/".concat(t.id),children:t.title})},t.id)}))})]})},O=function(t){var e=t.match.params.id,c=Object(n.useState)([]),a=Object(i.a)(c,2),o=a[0],j=a[1],h=Object(n.useState)(""),u=Object(i.a)(h,2),b=u[0],l=u[1],O=Object(n.useState)([]),p=Object(i.a)(O,2),f=p[0],x=p[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/posts?id=".concat(e)).then((function(t){var e=t.data[0];j(e)})).catch((function(t){alert(t.message)})),d.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(e)).then((function(t){var e=t.data;x(e)})).catch((function(t){alert(t.message)}))}),[e]),Object(n.useEffect)((function(){o.userId&&d.a.get("https://jsonplaceholder.typicode.com/users/".concat(o.userId)).then((function(t){var e=t.data.name;l(e)})).catch((function(t){alert(t.message)}))}),[o.userId]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["USER NAME:",b]}),Object(s.jsxs)("h1",{children:["TITLE:",o.title]}),Object(s.jsxs)("h2",{children:["BODY:",o.body]}),Object(s.jsx)("hr",{}),Object(s.jsx)("h1",{children:"COMMENTS"}),Object(s.jsx)("ul",{children:f.map((function(t){return Object(s.jsx)("li",{children:t.body},t.id)}))}),Object(s.jsx)("hr",{}),Object(s.jsxs)(r.b,{to:"/users/".concat(o.userId),children:["More posts of author:",b]})]})},p=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(r.b,{to:"/",children:"Home |"}),Object(s.jsx)(r.b,{to:"/users",children:"Users |"}),Object(s.jsx)(r.b,{to:"/posts",children:"Posts"}),Object(s.jsx)(j.a,{path:"/users",component:u,exact:!0}),Object(s.jsx)(j.a,{path:"/users/:id",component:b}),Object(s.jsx)(j.a,{path:"/posts",component:l,exact:!0}),Object(s.jsx)(j.a,{path:"/posts/:id",component:O})]})};o.a.render(Object(s.jsx)(r.a,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.808ece5a.chunk.js.map