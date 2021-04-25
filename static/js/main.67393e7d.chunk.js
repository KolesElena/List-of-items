(this["webpackJsonplist-of-elements"]=this["webpackJsonplist-of-elements"]||[]).push([[0],{25:function(t,n,e){"use strict";e.r(n);var a,o,r,i,c,l,d,b,s=e(0),u=e(13),j=e.n(u),m=e(9),p=e(4),f=e(5),O=e(2),g=e(3),h=g.a.h1(a||(a=Object(O.a)(["\n\ttext-align: center;\n"]))),x=e(1),v=function(){return Object(x.jsx)(h,{children:" Todo List "})},D=e(17),w=g.a.button(o||(o=Object(O.a)(["\n\tfont-weight: ",";\n\tcolor: ",";\n\twidth: 35px;\n\tmargin: 3px;\n"])),(function(t){return t.important?"bold":"normal"}),(function(t){return t.important?"steelblue":"black"})),C=g.a.span(r||(r=Object(O.a)(["\n\tfont-weight: ",";\n\tcolor: ",";\n\tmargin-left: 1.25rem;\n\tline-height: 35px;\n\tcursor: pointer;\n\tuser-select: none;\n"])),(function(t){return t.important?"bold":"normal"}),(function(t){return t.important?"steelblue":"black"})),N=function(t){var n=Object(s.useState)(t.label),e=Object(f.a)(n,2),a=e[0],o=e[1];return Object(x.jsxs)("span",{className:"todo-list-item",children:[t.editing?Object(x.jsx)("input",{type:"text",value:a,onChange:function(t){return o(t.target.value)}}):Object(x.jsx)(C,{important:t.important,children:t.label}),Object(x.jsx)(w,{important:t.important,className:"btn btn-outline-info btn-sm float-right",onClick:t.onToggleImportant,children:Object(x.jsx)("i",{className:"fa fa-exclamation"})}),Object(x.jsx)(w,{"data-testid":"edit",important:t.important,type:"button",className:"btn btn-outline-secondary btn-sm float-right",onClick:function(){return t.onToggleChange(a)},children:t.editing?Object(x.jsx)("i",{className:"fa fa-check"}):Object(x.jsx)("i",{className:"fa fa-edit"})}),Object(x.jsx)(w,{important:t.important,type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:t.onDeleted,children:Object(x.jsx)("i",{className:"fa fa-trash-o"})})]})},y=g.a.ul(i||(i=Object(O.a)(["\n\tpadding-left: 0;\n\tborder-color: #ced4da;\n"]))),T=g.a.li(c||(c=Object(O.a)(["\n  padding: .25rem .75rem;\n  border: 1px solid #ced4da;\n  list-style: none;\n  margin-bottom: -1px;\n\n  :first-child {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n  }\n\n  :last-child {\n    border-bottom-left-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n  }\n"]))),k=function(t){var n=t.todoData,e=t.onDeleted,a=t.onToggleImportant,o=t.onToggleChange,r=n.map((function(t){var n=t.id,r=Object(D.a)(t,["id"]);return Object(x.jsx)(T,{children:Object(x.jsx)(N,Object(p.a)(Object(p.a)({},r),{},{onToggleChange:function(t){return o(n,t)},onDeleted:function(){return e(n)},onToggleImportant:function(){return a(n)}}))},t.id)}));return Object(x.jsx)(y,{children:r})},I=g.a.form(l||(l=Object(O.a)(["\n\tdisplay: flex;\n\tmargin-top: 10px;\n"]))),L=g.a.button(d||(d=Object(O.a)(["\n\tborder: 1px solid #ced4da;\n"]))),A=function(t){var n=t.onAdded,e=Object(s.useState)({newLabel:""}),a=Object(f.a)(e,2),o=a[0],r=a[1];return Object(x.jsxs)(I,{onSubmit:function(t){t.preventDefault(),n(o.newLabel),r({newLabel:""})},children:[Object(x.jsx)("input",{type:"text",placeholder:"What needs to be done",className:"form-control mr-2",onChange:function(t){r({newLabel:t.target.value})},value:o.newLabel}),Object(x.jsx)(L,{className:"btn btn-outline-secondary",children:"Add Item"})]})},S=g.a.div(b||(b=Object(O.a)(["\n\tmargin: 2rem auto 0 auto;\n\tmax-width: 400px;\n"]))),B=function(){var t=100,n=function(n){return{label:n,important:!1,editing:!1,done:!1,id:t++}},e=Object(s.useState)({todoData:[n("Fill out a tax return"),n("Build an App"),n("Clean the apartment")],term:""}),a=Object(f.a)(e,2),o=a[0],r=a[1],i=o.todoData;return Object(x.jsxs)(S,{children:[Object(x.jsx)(v,{}),Object(x.jsx)(k,{todoData:i,onToggleImportant:function(t){var n=o.todoData.map((function(n){return n.id===t?Object(p.a)(Object(p.a)({},n),{},{important:!n.important}):n}));r(Object(p.a)(Object(p.a)({},o),{},{todoData:n}))},onToggleChange:function(t,n){var e=o.todoData.map((function(e){return e.id===t?Object(p.a)(Object(p.a)({},e),{},{editing:!e.editing,label:n}):e}));r(Object(p.a)(Object(p.a)({},o),{},{todoData:e}))},onDeleted:function(t){r((function(n){var e=n.todoData,a=e.findIndex((function(n){return n.id===t}));return{todoData:[].concat(Object(m.a)(e.slice(0,a)),Object(m.a)(e.slice(a+1)))}}))}}),Object(x.jsx)(A,{onAdded:function(t){var e=n(t);r((function(t){var n=t.todoData;return{todoData:[].concat(Object(m.a)(n),[e])}}))}})]})};j.a.render(Object(x.jsx)(B,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.67393e7d.chunk.js.map