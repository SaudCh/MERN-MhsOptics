"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[590],{6590:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var t=a(4165),n=a(5861),r=a(9439),l=a(4569),c=a.n(l),i=a(2791),o=a(3504),d=a(6871),m=a(7008),u=a(349);var p=a.p+"static/media/login.b3e4ff01a10bb42270e13cf86d99284b.svg",h=a(184);function x(){document.title="Login";var e=(0,d.s0)(),s=(0,i.useContext)(m.V),a=(0,i.useContext)(u.p).getWishlist,l=(0,i.useState)(""),x=(0,r.Z)(l,2),f=x[0],g=x[1],j=(0,i.useState)(""),b=(0,r.Z)(j,2),N=b[0],v=b[1],y=(0,i.useState)(""),w=(0,r.Z)(y,2),k=w[0],C=w[1],Z=(0,i.useState)(!1),S=(0,r.Z)(Z,2),E=S[0],L=S[1],P=function(){var r=(0,n.Z)((0,t.Z)().mark((function n(r){var l;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),l={email:f,password:N},L(!0),t.next=5,c().post("".concat("","/api/users/login"),l).then((function(t){s.login(t.data.data.user,t.data.token),a(),e("/")})).catch((function(e){var s,a={};a.api=null!==(s=e.response.data)&&void 0!==s&&s.message?e.response.data.message:e.message,C(a)}));case 5:L(!1);case 6:case"end":return t.stop()}}),n)})));return function(e){return r.apply(this,arguments)}}();return(0,h.jsx)("section",{className:"container-fluid my-5",children:(0,h.jsx)("div",{className:"row justify-content-center align-items-center",children:(0,h.jsxs)("form",{className:"col-11 border py-5 col-md-4",onSubmit:P,children:[(0,h.jsxs)("span",{className:"text-center",children:[(0,h.jsx)("h5",{children:"Login"}),(0,h.jsx)("p",{children:"Please fill in this form to get your account."})]}),(0,h.jsx)("figure",{className:"text-center",children:(0,h.jsx)("img",{src:p,className:"align-self-center col-9",style:{height:"auto"},alt:""})}),k.api&&(0,h.jsx)("div",{className:"alert alert-danger",children:(0,h.jsx)("p",{className:"errors",children:k.api})}),(0,h.jsxs)("div",{className:"my-3",children:[(0,h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),(0,h.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter Email",value:f,onChange:function(e){return g(e.target.value)}})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,h.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",value:N,onChange:function(e){return v(e.target.value)}})]}),E?(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)("div",{className:"spinner-border text-primary",role:"status",children:(0,h.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(0,h.jsx)("button",{type:"submit",className:"btn btn-primary col-12 py-2 mb-3",style:{backgroundColor:"#00aef9",border:"none"},children:"Login"}),(0,h.jsxs)("span",{className:"text-center",children:[(0,h.jsxs)("p",{className:"m-0 p-0",children:[(0,h.jsx)(o.rU,{className:"link-blue",to:"/forgotpassword",children:"Forget Password"}),"."," "]}),(0,h.jsxs)("p",{className:"m-0 p-0 mt-2",children:["don't have an account?"," ",(0,h.jsx)(o.rU,{className:"link-blue",to:"/register",children:"Signup"}),"."]})]})]})})})}}}]);
//# sourceMappingURL=590.9314fd49.chunk.js.map