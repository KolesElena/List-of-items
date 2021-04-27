(this["webpackJsonplist-of-elements"]=this["webpackJsonplist-of-elements"]||[]).push([[0],{24:function(t,n,e){"use strict";e.r(n);var a,o,i,r,c,d,l,s,b,u,m=e(0),j=e(13),p=e.n(j),f=e(9),x=e(4),O=e(5),g=e(2),h=e(3),v=h.a.h1(a||(a=Object(g.a)(["\n\ttext-align: center;\n"]))),w=e(1),D=function(){return Object(w.jsx)(v,{children:" Todo List "})},y=h.a.span(o||(o=Object(g.a)(["\n\tposition: relative;\n\tdisplay: flex;\n"]))),C=h.a.div(i||(i=Object(g.a)(["\n\tposition: absolute;\n\tright: 2%;\n"]))),N=h.a.button(r||(r=Object(g.a)(["\n\tfont-weight: ",";\n\tcolor: ",";\n\twidth: 35px;\n\tmargin: 3px;\n"])),(function(t){return t.important?"bold":"normal"}),(function(t){return t.important?"steelblue":"black"})),T=h.a.span(c||(c=Object(g.a)(["\n\tfont-weight: ",";\n\tcolor: ",";\n\tmargin-left: 1.25rem;\n\tline-height: 35px;\n\tcursor: pointer;\n\tuser-select: none;\n"])),(function(t){return t.important?"bold":"normal"}),(function(t){return t.important?"steelblue":"black"})),k=function(t){var n=t.label,e=t.important,a=t.editing,o=t.onDeleted,i=t.onToggleChange,r=t.onToggleImportant,c=Object(m.useState)(n),d=Object(O.a)(c,2),l=d[0],s=d[1];return Object(w.jsxs)(y,{children:[a?Object(w.jsx)("input",{type:"text",value:l,onChange:function(t){return s(t.target.value)}}):Object(w.jsx)(T,{important:e,children:n}),Object(w.jsxs)(C,{children:[Object(w.jsx)(N,{"data-testid":"important",important:e,className:"btn btn-outline-info btn-sm",onClick:r,children:Object(w.jsx)("i",{className:"fa fa-exclamation"})}),Object(w.jsx)(N,{"data-testid":"edit",important:e,type:"button",className:"btn btn-outline-secondary btn-sm",onClick:function(){i(l)},children:a?Object(w.jsx)("i",{className:"fa fa-check"}):Object(w.jsx)("i",{className:"fa fa-edit"})}),Object(w.jsx)(N,{"data-testid":"delete",important:e,type:"button",className:"btn btn-outline-danger btn-sm",onClick:o,children:Object(w.jsx)("i",{className:"fa fa-trash-o"})})]})]})},I=h.a.ul(d||(d=Object(g.a)(["\n\tpadding-left: 0;\n\tborder-color: #ced4da;\n"]))),L=h.a.li(l||(l=Object(g.a)(["\n  padding: .25rem .75rem;\n  border: 1px solid #ced4da;\n  list-style: none;\n  margin-bottom: -1px;\n\n  :first-child {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n  }\n\n  :last-child {\n    border-bottom-left-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n  }\n"]))),A=function(t){var n=t.todoData,e=t.onDeleted,a=t.onToggleImportant,o=t.onToggleChange,i=n.map((function(t,n){return Object(w.jsx)(L,{children:Object(w.jsx)(k,Object(x.a)(Object(x.a)({},t),{},{onToggleChange:function(t){return o(n,t)},onDeleted:function(){return e(n)},onToggleImportant:function(){return a(n)}}))},n)}));return Object(w.jsx)(I,{children:i})},S=h.a.form(s||(s=Object(g.a)(["\n\tdisplay: flex;\n\tmargin-top: 10px;\n"]))),B=h.a.button(b||(b=Object(g.a)(["\n\tborder: 1px solid #ced4da;\n"]))),J=function(t){var n=t.onAdded,e=Object(m.useState)({newLabel:""}),a=Object(O.a)(e,2),o=a[0],i=a[1];return Object(w.jsxs)(S,{"data-testid":"form",onSubmit:function(t){t.preventDefault(),n(o.newLabel),i({newLabel:""})},children:[Object(w.jsx)("input",{type:"text",placeholder:"What needs to be done",className:"form-control mr-2",onChange:function(t){i({newLabel:t.target.value})},value:o.newLabel}),Object(w.jsx)(B,{className:"btn btn-outline-secondary",children:"Add Item"})]})},E=("@media (max-width: ".concat(768,"px)"),"@media (min-width: ".concat(480,"px)"),"@media (min-width: ".concat(768,"px)")),F=("@media (min-width: ".concat(1024,"px)"),"@media (min-width: ".concat(1025,"px)"),"@media (min-width: ".concat(1200,"px)"),"@media (min-width: ".concat(1440,"px)"),h.a.div(u||(u=Object(g.a)(["\n\tmargin: 2rem .6rem;\n\n\t"," {\n\t\tmargin: 2rem auto 0 auto;\n\t\tmax-width: 400px;\n\t}\n"])),E)),W=function(){var t=function(t){return{label:t,important:!1,editing:!1}},n=Object(m.useState)({todoData:[t("Fill out a tax return"),t("Build an App"),t("Clean the apartment")]}),e=Object(O.a)(n,2),a=e[0],o=e[1];return Object(w.jsxs)(F,{children:[Object(w.jsx)(D,{}),Object(w.jsx)(A,{todoData:a.todoData,onToggleImportant:function(t){var n=a.todoData.map((function(n,e){return t===e?Object(x.a)(Object(x.a)({},n),{},{important:!n.important}):n}));o({todoData:n})},onToggleChange:function(t,n){var e=a.todoData.map((function(e,a){return a===t?Object(x.a)(Object(x.a)({},e),{},{editing:!e.editing,label:n}):e}));o({todoData:e})},onDeleted:function(t){o((function(n){var e=n.todoData,a=e.findIndex((function(n,e){return t===e}));return{todoData:[].concat(Object(f.a)(e.slice(0,a)),Object(f.a)(e.slice(a+1)))}}))}}),Object(w.jsx)(J,{onAdded:function(n){var e=t(n);o((function(t){var n=t.todoData;return{todoData:[].concat(Object(f.a)(n),[e])}}))}})]})};p.a.render(Object(w.jsx)(W,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c24be27f.chunk.js.map