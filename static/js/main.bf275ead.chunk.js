(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),r=c(7),d=c.n(r),i=(c(13),c(14),c(5)),s=c(3),a=c(0),l=Object(o.createContext)(),j=function(e){var t=Object(o.useState)([{id:1,title:"Todo 1",completed:!0}]),c=Object(i.a)(t,2),n=c[0],r=c[1];Object(o.useEffect)((function(){var e=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[];r(Object(s.a)(e))}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var d={todos:n,addTodo:function(e){r([e].concat(Object(s.a)(n)))},removeTodo:function(e){var t=n.filter((function(t){return t.id!==e}));r(Object(s.a)(t))},toggleTodo:function(e){var t=n.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));r(Object(s.a)(t))}};return Object(a.jsx)(l.Provider,{value:d,children:e.children})},u=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(o.useContext)(l).addTodo;return Object(a.jsxs)("div",{className:"add-todo",children:[Object(a.jsx)("label",{htmlFor:"add-todo",children:"Add todo"}),Object(a.jsx)("input",{type:"text",value:c,onChange:function(e){return n(e.target.value)},id:"add-todo",onKeyDown:function(e){return function(e){""!==c&&"Enter"===e.key&&(r({id:+new Date,title:c,completed:!1}),n(""))}(e)}})]})},b=c(8),O=function(e){var t=Object(o.useContext)(l),c=t.toggleTodo,n=t.removeTodo,r=e.id,d=e.title,i=["collection-item"];return e.completed&&i.push("completed"),Object(a.jsxs)("div",{className:i.join(" "),children:[Object(a.jsx)("h4",{onClick:function(){return c(r)},children:d}),Object(a.jsx)("button",{className:"no-btn",onClick:function(){return n(r)},children:Object(a.jsx)("i",{className:"material-icons remove",children:"remove_circle"})})]})},m=function(){var e=Object(o.useContext)(l).todos;return Object(a.jsx)("div",{className:"todos-list",children:e.length?Object(a.jsx)("ul",{className:"collection",children:e.map((function(e){return Object(a.jsx)(O,Object(b.a)({},e),e.id)}))}):Object(a.jsx)("h2",{children:"No todos..."})})};var h=function(){return Object(a.jsx)(j,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h2",{children:"Todos"})}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(u,{}),Object(a.jsx)(m,{})]})]})})};d.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bf275ead.chunk.js.map