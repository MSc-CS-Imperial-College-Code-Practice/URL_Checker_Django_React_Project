(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=(n(20),n(13)),u=n.n(i),r=(n(24),n(14)),l=n(15),h=n(3),s=n(18),d=n(17),o=n(16),b=n.n(o),j=(n(43),n(1)),f=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={url:""},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleSubmit",value:function(e){b.a.post("/url_checker",this.state.url).then((function(e){alert(e.data)})),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["url:",Object(j.jsx)("input",{type:"text",name:"url",value:this.state.url,onChange:this.handleChange})]}),Object(j.jsx)("input",{type:"submit",value:"Check URL"})]})})})}}]),n}(a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),i(e),u(e)}))};u.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}},[[45,1,2]]]);
//# sourceMappingURL=main.fb4ac676.chunk.js.map