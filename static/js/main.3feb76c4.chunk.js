(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(14),a(4)),m=a(1);a(16);function s(e){return e.alert.visible&&l.a.createElement("div",{className:"alert alert-success alert-dismissible fade show d-flex justify-content-between",role:"alert"},l.a.createElement("div",null,l.a.createElement("strong",null,"Change!")," Your mode has been changed."),l.a.createElement("button",{onClick:e.hideAlert,className:"close","data-dismiss":"alert","aria-label":"close"},"\u274c"))}function i(e){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-".concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand text-".concat(e.text),href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 "},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active text-".concat(e.text),"aria-current":"page",href:"#"},"Home"))),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search")),l.a.createElement("div",{className:"color checker mx-2"},l.a.createElement("input",{type:"color",id:"color",name:"head",onChange:e.changeTheme,value:e.theme})," "),l.a.createElement("div",{className:"form-check form-switch mx-2"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label text-".concat(e.text),htmlFor:"flexSwitchCheckDefault"},"Change Mode"))))))}function u(e){var t=Object(n.useState)("Enter text here"),a=Object(m.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:e.text}},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("h1",null,e.heading),l.a.createElement("label",{htmlFor:"mybox"},"Email address"),l.a.createElement("textarea",{className:"form-control",onChange:function(e){c(e.target.value)},id:"mybox",rows:"3",value:r}),l.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),c(r.toUpperCase())}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(e){e.preventDefault(),c(r.toLowerCase())}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary ",onClick:function(e){e.preventDefault(),c("")}},"Clear")))),l.a.createElement("div",{className:"container my-3",style:{color:e.text}},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,"words ",r.split(" ").filter(function(e){return e.length>0}).length," characters ",r.length," "),l.a.createElement("p",null," time to read ",.008*r.split(" ").filter(function(e){return e.length>0}).length),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r)))}i.defaultProps={title:"Put title",about:"put about"};var b=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("light"),b=Object(m.a)(c,2),d=b[0],h=b[1],p=Object(n.useState)("dark"),g=Object(m.a)(p,2),f=g[0],E=g[1],v=Object(n.useState)({msg:"",type:"",visible:!1}),x=Object(m.a)(v,2),y=x[0],N=x[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"project",about:"about",mode:d,toggleMode:function(){N({msg:"mode change",type:"dismissible",visible:!0}),"dark"===d?(document.body.style.backgroundColor="white",document.title="Text Utility",h("light"),E("black")):(document.body.style.backgroundColor="#342158",document.title="Text Utility-Dark mode",h("dark"),E("white"))},text:f,theme:a,changeTheme:function(e){r(e.target.value),document.body.style.backgroundColor=a}}),l.a.createElement(s,{alert:y,hideAlert:function(){N(Object(o.a)({},y,{visible:!1}))}}),l.a.createElement(u,{text:f}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),d()},5:function(e,t,a){e.exports=a(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.3feb76c4.chunk.js.map