"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[106],{9106:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var n=a(4165),t=a(5861),r=a(9439),l=a(4569),i=a.n(l),c=a(2791),o=a(6871),d=a(3504),m=a(7008),u=a(349),h=a(7946),p=a(184);function x(){document.title="Login";var e=(0,o.s0)(),s=(0,c.useContext)(m.V),a=(0,c.useContext)(u.p).getWishlist,l=(0,c.useState)(""),x=(0,r.Z)(l,2),g=x[0],j=x[1],f=(0,c.useState)(""),v=(0,r.Z)(f,2),N=v[0],b=v[1],w=(0,c.useState)(""),y=(0,r.Z)(w,2),k=y[0],C=y[1],Z=(0,c.useState)(!1),S=(0,r.Z)(Z,2),E=S[0],L=S[1],F=function(){var r=(0,t.Z)((0,n.Z)().mark((function t(r){var l;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),l={email:g,password:N},L(!0),n.next=5,i().post("".concat("http://localhost:4000","/api/users/login"),l).then((function(n){s.login(n.data.data.user,n.data.token),a(),e("/")})).catch((function(e){var s,a={};a.api=null!==(s=e.response.data)&&void 0!==s&&s.message?e.response.data.message:e.message,C(a)}));case 5:L(!1);case 6:case"end":return n.stop()}}),t)})));return function(e){return r.apply(this,arguments)}}();return(0,p.jsxs)("section",{className:"container-fluid login-container pt-0",style:{backgroundColor:"rgba(0, 174, 249, 0.2)"},children:[(0,p.jsx)("div",{className:"auth-logo",children:(0,p.jsx)(d.rU,{to:"/",className:"navbar-brand",children:(0,p.jsx)("img",{src:h,style:{width:150},alt:"logo"})})}),(0,p.jsxs)("div",{className:"row justify-content-center align-items-center flex-column-reverse flex-md-row ",style:{minHeight:"100vh"},children:[(0,p.jsx)("form",{className:"col-11 col-md-6 px-md-5 d-flex align-items-center mb-5",onSubmit:F,children:(0,p.jsxs)("div",{className:"w-100",children:[(0,p.jsx)("span",{className:"text-center",children:(0,p.jsx)("h5",{children:"Login"})}),k.api&&(0,p.jsx)("div",{className:"alert alert-danger",children:(0,p.jsx)("p",{className:"errors",children:k.api})}),(0,p.jsxs)("div",{className:"my-3",children:[(0,p.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),(0,p.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter Email",value:g,onChange:function(e){return j(e.target.value)}})]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,p.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",value:N,onChange:function(e){return b(e.target.value)}})]}),E?(0,p.jsx)("div",{className:"text-center",children:(0,p.jsx)("div",{className:"spinner-border text-primary",role:"status",children:(0,p.jsx)("span",{className:"sr-only",children:"Loading..."})})}):(0,p.jsx)("button",{type:"submit",className:"btn btn-primary col-12 py-2 mb-3",style:{backgroundColor:"#00aef9",border:"none"},children:"Login"}),(0,p.jsxs)("span",{className:"text-center",children:[(0,p.jsxs)("p",{className:"m-0 p-0",children:[(0,p.jsx)(d.rU,{className:"link-blue",to:"/forgotpassword",children:"Forget Password"}),"."," "]}),(0,p.jsxs)("p",{className:"m-0 p-0 mt-2",children:["don't have an account?"," ",(0,p.jsx)(d.rU,{className:"link-blue",to:"/register",children:"Signup"}),"."]})]})]})}),(0,p.jsx)("div",{className:"col-12 col-md-6 h-100 login-right-container-main mt-0 pt-0",style:{backgroundColor:"rgba(0, 174, 249, 0.1)"},children:(0,p.jsx)("div",{className:"login-right-container w-100 h-100",style:{minHeight:"50vh"}})})]})]})}}}]);
//# sourceMappingURL=106.569d2dfe.chunk.js.map