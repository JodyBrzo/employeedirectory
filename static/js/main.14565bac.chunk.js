(this.webpackJsonpreactemployeedirectory=this.webpackJsonpreactemployeedirectory||[]).push([[0],{21:function(e,r,t){},40:function(e,r,t){},42:function(e,r,t){},46:function(e,r,t){},47:function(e,r,t){},48:function(e,r,t){},50:function(e,r,t){"use strict";t.r(r);var c=t(1),n=t.n(c),a=t(14),s=t.n(a),o=(t(21),t(16)),i=t(15),l=t.n(i),d=function(){return l.a.get("https://randomuser.me/api/?results=100&nat=us")},j=(t(40),t(0));var u=function(e){return Object(j.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var b=function(e){return Object(j.jsx)("div",{className:"container",style:e.style,children:e.children})};var h=function(e){return Object(j.jsx)("div",{className:"row",children:e.children})};var O=function(e){var r=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(j.jsx)("div",{className:r,children:e.children})},m=t(3),p=(t(42),t(4));function x(e){var r=e.column,t=r.filterValue,c=r.preFilteredRows,n=r.setFilter,a=c.length;return Object(j.jsx)("input",{value:t||"",onChange:function(e){n(e.target.value||void 0)},placeholder:"Search ".concat(a," records...")})}var f=function(e){var r=e.columns,t=e.data,c=n.a.useMemo((function(){return{Filter:x}}),[]),a=Object(p.useTable)({columns:r,data:t,defaultColumn:c},p.useFilters,p.useSortBy),s=a.getTableProps,o=a.getTableBodyProps,i=a.headerGroups,l=a.rows,d=a.prepareRow,u=l.slice(0,100);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("table",Object(m.a)(Object(m.a)({},s()),{},{children:[Object(j.jsx)("thead",{children:i.map((function(e){return Object(j.jsx)("tr",Object(m.a)(Object(m.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsxs)("th",Object(m.a)(Object(m.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(j.jsx)("div",{children:e.canFilter?e.render("Filter"):null}),Object(j.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(j.jsx)("tbody",Object(m.a)(Object(m.a)({},o()),{},{children:u.map((function(e,r){return d(e),Object(j.jsx)("tr",Object(m.a)(Object(m.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(j.jsx)("td",Object(m.a)(Object(m.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))})};var g=function(){var e=Object(c.useState)([]),r=Object(o.a)(e,2),t=r[0],a=r[1],s=n.a.useMemo((function(){return[{Header:"Name",columns:[{Header:"First Name",accessor:"name.first",filter:"text"},{Header:"Last Name",accessor:"name.last"}]},{Header:"Info",columns:[{Header:"Phone",accessor:"cell"},{Header:"Email",accessor:"email"},{Header:"Years Employeed",accessor:"registered.age"},{Header:"Location",accessor:"location.city"}]}]}),[]);return Object(c.useEffect)((function(){d().then((function(e){a(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)(u,{backgroundImage:"https://i.imgur.com/Huyuoy1.jpg",children:[Object(j.jsx)("h1",{children:"Employee Directory"}),Object(j.jsx)("h2",{children:"World Headquarters"})]}),Object(j.jsxs)(b,{style:{marginTop:30},children:[Object(j.jsx)(h,{children:Object(j.jsxs)(O,{size:"md-12",children:[Object(j.jsx)("h1",{children:"Global Company Search Directory"}),Object(j.jsx)("span",{children:"Click a column name to display sort indicator.  Filtering can be done on any column."})]})}),Object(j.jsx)(h,{children:Object(j.jsxs)(O,{size:"md-12",children:[console.log("employees = ",t),Object(j.jsx)(f,{columns:s,data:t})]})})]})]})};t(46);var v=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsx)("div",{className:"navbar-brand",to:"/",children:"DayRec, Inc"})})};t(47);var y=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("span",{children:"DayRec, Inc. Employee Directory Copyright 2021"})})};t(48);var H=function(e){return Object(j.jsx)("main",{className:"wrapper",children:e.children})};var N=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{}),Object(j.jsx)(H,{children:Object(j.jsx)(g,{})}),Object(j.jsx)(y,{})]})};t(49);s.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.14565bac.chunk.js.map