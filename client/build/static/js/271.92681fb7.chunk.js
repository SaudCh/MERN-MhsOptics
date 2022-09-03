"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[271],{7647:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(2791),r=t(6871),l=t(349),c=t(8624),s=t(184);function i(e){var n=e.item,t=(0,r.s0)(),i=(0,a.useContext)(l.p),o=i.addToWishlist,d=i.wishlist,u=i.removeFromWishlist,m=d.find((function(e){return e.product===n._id}));return(0,s.jsxs)("div",{className:"col-4 col-md-2 home-best-items py-2 position-relative",children:[(0,s.jsx)("span",{className:"position-absolute",style:{right:20,top:20,zIndex:"10"},children:m?(0,s.jsx)("button",{style:{backgroundColor:"transparent",border:"none"},onClick:function(){return u(n.id)},children:(0,s.jsx)(c.qC,{style:{fontSize:"22px"}})}):(0,s.jsx)("button",{style:{backgroundColor:"transparent",border:"none"},onClick:function(){return o(n.id)},children:(0,s.jsx)(c.ZJ,{style:{fontSize:"22px"}})})}),(0,s.jsxs)("div",{className:"border rounded",onClick:function(){return t("/product/".concat(n.id))},children:[(0,s.jsx)("figure",{className:"d-flex justify-content-center align-item-center p-0 m-0",style:{height:"200px"},children:(0,s.jsx)("img",{src:"".concat("","/img/products/").concat(n.images[0]),className:"m-0 p-3 col-11 item-image",alt:""})}),(0,s.jsx)("p",{className:"text-center p-0 m-0",children:n.title}),(0,s.jsxs)("p",{className:"text-success text-center fw-bold p-0 m-0 mb-2",children:[n.price,"$"]})]})]})}},3271:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(2791),r=t(7647),l=t(7975),c=t(4165),s=t(5861),i=t(3433),o=t(9439),d=t(4569),u=t.n(d);var m=t(3168),h=t(184);function p(e){var n=e.changeGender,t=e.changeFtype,a=e.changeShape,r=e.changeColor,l=e.changeFMaterial,c=(0,m.$)().t;return(0,h.jsx)("section",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"d-flex flex-wrap justify-content-center",children:[(0,h.jsx)("div",{className:"me-2 me-md-5 mt-2",children:(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn border dropdown-toggle",type:"button",id:"genderDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:c("gender")}),(0,h.jsx)("ul",{className:"dropdown-menu px-2","aria-labelledby":"genderDropdown",children:[{value:"men",title:"Men"},{value:"women",title:"Women"},{value:"kids",title:"Kids"}].map((function(e){return(0,h.jsxs)("div",{className:"form-check",children:[(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",value:e.value,name:"gender",onChange:function(e){return n(e)}}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"men",children:c(e.title)})]})}))})]})}),(0,h.jsx)("div",{className:"me-2 me-md-5 mt-2",children:(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn border dropdown-toggle",type:"button",id:"genderDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:c("Frame_type")}),(0,h.jsx)("ul",{className:"dropdown-menu px-2","aria-labelledby":"genderDropdown",children:[{value:"full",title:"fullrim"},{value:"half",title:"halfrim"},{value:"less",title:"rimless"}].map((function(e){return(0,h.jsxs)("div",{className:"form-check",children:[(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",value:e.value,name:"ftype",onChange:function(e){return t(e)}}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"fullrim",children:c(e.title)})]})}))})]})}),(0,h.jsx)("div",{className:"me-2 me-md-5 mt-2",children:(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn border dropdown-toggle",type:"button",id:"genderDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:c("Shapes")}),(0,h.jsx)("ul",{className:"dropdown-menu px-2","aria-labelledby":"genderDropdown",children:[{value:"pilot",title:"pilot"},{value:"round",title:"round"},{value:"square",title:"square"},{value:"rectangl",title:"rectangular"},{value:"browline",title:"browline"}].map((function(e){return(0,h.jsxs)("div",{className:"form-check",children:[(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",value:e.value,name:"shape",onChange:function(e){return a(e)}}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"pilot",children:c(e.title)})]})}))})]})}),(0,h.jsx)("div",{className:"me-2 me-md-5 mt-2",children:(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn border dropdown-toggle",type:"button",id:"genderDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:c("Frame_colour")}),(0,h.jsx)("ul",{className:"dropdown-menu px-2","aria-labelledby":"genderDropdown",children:[{name:"black"},{name:"blue"},{name:"brown"},{name:"gold"},{name:"green"},{name:"gray"},{name:"orange"},{name:"pink"},{name:"purple"},{name:"red"},{name:"silver"},{name:"white"},{name:"yellow"},{name:"transparent"}].map((function(e){var n=e.name;return(0,h.jsxs)("div",{className:"form-check",children:[(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",value:n,onChange:function(e){return r(e)}}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"black",children:n})]})}))})]})}),(0,h.jsx)("div",{className:"me-2 me-md-5 mt-2",children:(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn border dropdown-toggle",type:"button",id:"genderDropdown","data-bs-toggle":"dropdown","aria-expanded":"false",children:c("Frame material")}),(0,h.jsx)("ul",{className:"dropdown-menu px-2","aria-labelledby":"genderDropdown",children:[{value:"metal",title:"metal"},{value:"plastic",title:"plastic"},{value:"titanium",title:"titanium"}].map((function(e){return(0,h.jsxs)("div",{className:"form-check",children:[(0,h.jsx)("input",{className:"form-check-input",type:"checkbox",value:e.value,id:"metal",name:"fMaterial",onChange:function(e){return l(e)}}),(0,h.jsx)("label",{className:"form-check-label",htmlFor:"metal",children:"metal"})]})}))})]})})]})})}function f(){var e=function(){var e=(0,a.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],l=(0,a.useState)([]),d=(0,o.Z)(l,2),m=d[0],h=d[1],p=(0,a.useState)(""),f=(0,o.Z)(p,2),g=f[0],x=f[1],v=(0,a.useState)([]),j=(0,o.Z)(v,2),b=j[0],N=j[1],w=(0,a.useState)([]),y=(0,o.Z)(w,2),k=y[0],C=y[1],S=(0,a.useState)([]),Z=(0,o.Z)(S,2),F=Z[0],D=Z[1],M=(0,a.useState)([]),G=(0,o.Z)(M,2),z=G[0],q=G[1],E=(0,a.useState)([]),L=(0,o.Z)(E,2),W=L[0],_=L[1];return(0,a.useEffect)((function(){document.title="Search",r([]);var e=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat("","/api/products/")).then((function(e){r(e.data.data.data),h(e.data.data.data),console.log(e.data.data.data)})).catch((function(e){var n;null!==(n=e.response.data)&&void 0!==n&&n.message?e.response.data.message:e.message}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,a.useEffect)((function(){var e=[],n=t.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())}));b.length>0?b.forEach((function(t){n.filter((function(n){return n.productGender.toLowerCase().includes(t)?e.push(n):null}))})):e=n,h(e)}),[b,t,g]),{filter:m,searchProduct:function(e){var n=e.target.value;x(n)},changeGender:function(e){e.target.checked?N([].concat((0,i.Z)(b),[e.target.value])):N(b.filter((function(n){return n!==e.target.value})))},changeFtype:function(e){e.target.checked?C([].concat((0,i.Z)(k),[e.target.value])):C(k.filter((function(n){return n!==e.target.value})))},changeShape:function(e){e.target.checked?D([].concat((0,i.Z)(F),[e.target.value])):D(F.filter((function(n){return n!==e.target.value})))},changeColor:function(e){e.target.checked?q([].concat((0,i.Z)(z),[e.target.value])):q(z.filter((function(n){return n!==e.target.value})))},changeFMaterial:function(e){e.target.checked?_([].concat((0,i.Z)(W),[e.target.value])):_(W.filter((function(n){return n!==e.target.value})))}}}(),n=e.filter,t=e.searchProduct,d=e.changeGender,m=e.changeFtype,f=e.changeShape,g=e.changeColor,x=e.changeFMaterial;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"container-fluid mt-4",children:(0,h.jsxs)("div",{className:"row justify-content-center",children:[(0,h.jsx)("div",{className:"col-5",children:(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:l,className:"w-100",alt:"item"})})}),(0,h.jsx)("div",{className:"col-5 d-flex align-items-center justify-content-center",children:(0,h.jsx)("h1",{className:"text-secondary",style:{fontSize:50},children:"Search"})})]})})}),(0,h.jsx)("section",{className:"container-fluid",children:(0,h.jsx)("div",{class:"row justify-content-center",children:(0,h.jsx)("div",{class:"form-outline col-9",children:(0,h.jsx)("input",{type:"search",placeholder:"Search",id:"search",class:"form-control",onChange:function(e){return t(e)}})})})}),(0,h.jsx)(p,{changeGender:d,changeFtype:m,changeShape:f,changeColor:g,changeFMaterial:x}),(0,h.jsx)("section",{className:"container-fluid",children:(0,h.jsx)("div",{className:"row",children:n.length>0?n.map((function(e){return(0,h.jsx)(r.Z,{item:e})})):(0,h.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{minHeight:"30vh"},children:(0,h.jsx)("h1",{className:"text-center mt-5 text-secondary",children:"No products found"})})})})]})}},7975:function(e,n,t){e.exports=t.p+"static/media/identifletters.c524dd8d950c736c6915.jpg"}}]);
//# sourceMappingURL=271.92681fb7.chunk.js.map