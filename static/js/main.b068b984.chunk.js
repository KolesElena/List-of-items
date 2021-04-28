(this["webpackJsonplist-of-elements"]=this["webpackJsonplist-of-elements"]||[]).push([[0],{24:function(t,n,e){"use strict";e.r(n);var a,o,i,r,c,d,l,s,b,u,m,j,p=e(0),f=e(13),O=e.n(f),x=e(9),h=e(4),g=e(5),v=e(2),w=e(3),D=w.a.h1(a||(a=Object(v.a)(["\n\ttext-align: center;\n"]))),y=e(1),C=function(){return Object(y.jsx)(D,{children:" Todo List "})},T=w.a.span(o||(o=Object(v.a)(["\n\tposition: relative;\n\tdisplay: flex;\n"]))),N=w.a.div(i||(i=Object(v.a)(["\n\tposition: absolute;\n\tright: 1%;\n"]))),k=w.a.button(r||(r=Object(v.a)(["\n\tfont-weight: ",";\n\tcolor: ",";\n\twidth: 35px;\n\tmargin: 3px;\n"])),(function(t){return t.important?"bold":"normal"}),(function(t){return t.important?"steelblue":"black"})),I=w.a.span(c||(c=Object(v.a)(["\n\tfont-weight: ",";\n\tcolor: ",";\n\tmargin-left: 0;\n\tline-height: 35px;\n\tcursor: pointer;\n\tuser-select: none;\n"])),(function(t){return t.important?"bold":"normal"}),(function(t){return t.important?"steelblue":"black"})),L=function(t){var n=t.label,e=t.important,a=t.editing,o=t.onDeleted,i=t.onToggleChange,r=t.onToggleImportant,c=Object(p.useState)(n),d=Object(g.a)(c,2),l=d[0],s=d[1];return Object(y.jsxs)(T,{children:[a?Object(y.jsx)("input",{type:"text",value:l,onChange:function(t){return s(t.target.value)}}):Object(y.jsx)(I,{important:e,children:n}),Object(y.jsxs)(N,{children:[Object(y.jsx)(k,{"data-testid":"important",important:e,className:"btn btn-outline-info btn-sm",onClick:r,children:Object(y.jsx)("i",{className:"fa fa-exclamation"})}),Object(y.jsx)(k,{"data-testid":"edit",important:e,type:"button",className:"btn btn-outline-secondary btn-sm",onClick:function(){i(l)},children:a?Object(y.jsx)("i",{className:"fa fa-check"}):Object(y.jsx)("i",{className:"fa fa-edit"})}),Object(y.jsx)(k,{"data-testid":"delete",important:e,type:"button",className:"btn btn-outline-danger btn-sm",onClick:o,children:Object(y.jsx)("i",{className:"fa fa-trash-o"})})]})]})},S=w.a.ul(d||(d=Object(v.a)(["\n\tpadding-left: 0;\n\tborder-color: #ced4da;\n"]))),A=w.a.li(l||(l=Object(v.a)(["\n  padding: .25rem .75rem;\n  border: 1px solid #ced4da;\n  list-style: none;\n  margin-bottom: -1px;\n\n  :first-child {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n  }\n\n  :last-child {\n    border-bottom-left-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n  }\n"]))),B=function(t){var n=t.todoData,e=t.onDeleted,a=t.onToggleImportant,o=t.onToggleChange,i=n.map((function(t,n){return Object(y.jsx)(A,{children:Object(y.jsx)(L,Object(h.a)(Object(h.a)({},t),{},{onToggleChange:function(t){return o(n,t)},onDeleted:function(){return e(n)},onToggleImportant:function(){return a(n)}}))},n)}));return Object(y.jsx)(S,{children:i})},J=w.a.form(s||(s=Object(v.a)(["\n\tmargin-top: 10px;\n"]))),q=w.a.button(b||(b=Object(v.a)(["\n\tborder: 1px solid #ced4da;\n"]))),E=w.a.div(u||(u=Object(v.a)(["\n\tcolor: red;\n\tpadding: .25rem .75rem; \n"]))),F=w.a.div(m||(m=Object(v.a)(["\n\tdisplay: flex;\n"]))),W=function(t){var n=t.onAdded,e=Object(p.useState)({newLabel:""}),a=Object(g.a)(e,2),o=a[0],i=a[1],r=Object(p.useState)(!1),c=Object(g.a)(r,2),d=c[0],l=c[1];return Object(y.jsxs)(J,{"data-testid":"form",onSubmit:function(t){t.preventDefault(),o.newLabel?(n(o.newLabel),i({newLabel:""})):l(!0)},children:[Object(y.jsxs)(F,{children:[Object(y.jsx)("input",{type:"text",placeholder:"What needs to be done",className:"form-control mr-2",onChange:function(t){l(!1),i({newLabel:t.target.value})},value:o.newLabel}),Object(y.jsx)(q,{className:"btn btn-outline-secondary",children:"Add Item"})]}),d&&Object(y.jsx)(E,{children:"This field is required!"})]})},z=("@media (max-width: ".concat(768,"px)"),"@media (min-width: ".concat(480,"px)"),"@media (min-width: ".concat(768,"px)")),G=("@media (min-width: ".concat(1024,"px)"),"@media (min-width: ".concat(1025,"px)"),"@media (min-width: ".concat(1200,"px)"),"@media (min-width: ".concat(1440,"px)"),w.a.div(j||(j=Object(v.a)(["\n\tmargin: 2rem .6rem;\n\n\t"," {\n\t\tmargin: 2rem auto 0 auto;\n\t\tmax-width: 400px;\n\t}\n"])),z)),H=function(){var t=function(t){return{label:t,important:!1,editing:!1}},n=Object(p.useState)({todoData:[t("Fill out a tax return"),t("Build an App"),t("Clean the apartment")]}),e=Object(g.a)(n,2),a=e[0],o=e[1];return Object(y.jsxs)(G,{children:[Object(y.jsx)(C,{}),Object(y.jsx)(B,{todoData:a.todoData,onToggleImportant:function(t){var n=a.todoData.map((function(n,e){return t===e?Object(h.a)(Object(h.a)({},n),{},{important:!n.important}):n}));o({todoData:n})},onToggleChange:function(t,n){var e=a.todoData.map((function(e,a){return a===t?Object(h.a)(Object(h.a)({},e),{},{editing:!e.editing,label:n}):e}));o({todoData:e})},onDeleted:function(t){o((function(n){var e=n.todoData,a=e.findIndex((function(n,e){return t===e}));return{todoData:[].concat(Object(x.a)(e.slice(0,a)),Object(x.a)(e.slice(a+1)))}}))}}),Object(y.jsx)(W,{onAdded:function(n){var e=t(n);o((function(t){var n=t.todoData;return{todoData:[].concat(Object(x.a)(n),[e])}}))}})]})};O.a.render(Object(y.jsx)(H,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b068b984.chunk.js.map