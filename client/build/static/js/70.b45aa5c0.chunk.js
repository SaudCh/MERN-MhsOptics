"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[70],{873:function(A,e,s){s.d(e,{x:function(){return c}});var c=function(A){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(A)}},5070:function(A,e,s){s.r(e),s.d(e,{default:function(){return E}});var c=s(4165),t=s(5861),i=s(9439),n=s(4569),l=s.n(n),a=s(2791),d=s(6871),r=s(873),o=s(8624);var g=s.p+"static/media/glassSize.ee443f159989d7fa603bbcb61e19f1f2.svg";var m=s.p+"static/media/dimensionOne.f063ac990b19f926d017e60ed116b7f8.svg";var Q=s.p+"static/media/dimensionTwo.20a50c81ccfd61410945a4b12624bb4c.svg";var B=s.p+"static/media/dimensionThree.23c15ece79751d6acd8761ed9d5d29e7.svg",C=s(9707),h=s(349),D=s(184);function E(){var A=(0,a.useContext)(h.p),e=A.addToWishlist,s=A.wishlist,n=A.removeFromWishlist,E=(0,d.UO)().id,I=(0,a.useState)({}),x=(0,i.Z)(I,2),u=x[0],w=x[1],p=(0,a.useState)([]),j=(0,i.Z)(p,2),f=j[0],N=j[1],M=(0,a.useState)(1),b=(0,i.Z)(M,2),k=b[0],S=b[1],G=(0,a.useState)(""),y=(0,i.Z)(G,2),F=y[0],J=y[1],Y=(0,a.useContext)(C.A),v=(0,a.useState)(!1),K=(0,i.Z)(v,2),H=K[0],O=K[1];return(0,a.useEffect)((function(){var A=function(){var A=(0,t.Z)((0,c.Z)().mark((function A(){return(0,c.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,l().get("".concat("http://localhost:4000","/api/products/").concat(E)).then((function(A){N(A.data.data.data.images[0]),w(A.data.data.data),O(s.find((function(e){return e.product===A.data.data.data._id}))),document.title=A.data.data.data.title})).catch((function(A){var e,s={};null!==(e=A.response.data)&&void 0!==e&&e.message?s.api=A.response.data.message:s.network=A.message,J(s)}));case 2:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();A()}),[E,s]),F?(0,D.jsx)("div",{style:{height:"80vh"},className:"d-flex justify-content-center align-items-center",children:(0,D.jsxs)("div",{className:"text-center",children:[(0,D.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:100}),F.network?(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("p",{children:F.network})}):(0,D.jsx)("p",{className:"h3 fw-bold text-secondary",children:"No Item Found For that Id"})]})}):(0,D.jsx)("div",{children:(0,D.jsxs)("div",{className:"container-fluid mt-4",children:[(0,D.jsxs)("div",{className:"row align-item-center justify-content-center",children:[(0,D.jsxs)("div",{className:"col-12 col-md-5 d-flex p-2 justify-content-between align-item-center",children:[(0,D.jsx)("div",{className:"col-9",children:(0,D.jsx)("figure",{className:"pd-selected-img-container",children:(0,D.jsx)("img",{src:"".concat("http://localhost:4000","/img/products/").concat(f),alt:"product",className:"img-fluid col-12 product-details-selected-img"})})}),(0,D.jsx)("div",{className:"col-2",children:u.images?u.images.filter((function(A){return A!==f})).map((function(A){return(0,D.jsx)("div",{className:"my-2 col-12 border overflow-hidden position-relative d-flex justify-content-center align-items-center",onClick:function(){return N(A)},style:{height:"100px"},children:(0,D.jsxs)("figure",{className:"pd-all-image-container p-0 m-0",children:[(0,D.jsx)("div",{className:"pd-div-1"}),(0,D.jsx)("img",{src:"".concat("http://localhost:4000","/img/products/").concat(A),alt:"",className:"image-fluid pd-all-images col-12"})]})},A)})):null})]}),(0,D.jsxs)("div",{className:"col-12 col-md-6 mt-2",children:[(0,D.jsx)("h2",{className:"m-0",children:u.title}),(0,D.jsx)("p",{className:"text-green m-0",children:"In Stock"}),(0,D.jsx)("p",{className:"fw-bold text-success p-0 m-0",children:(0,r.x)(u.price)}),(0,D.jsxs)("div",{className:"add-to-cart-container d-flex flex-column align-items-center flex-md-row",children:[(0,D.jsxs)("div",{className:"d-flex border",children:[(0,D.jsx)("button",{className:"btn px-2 py-1 bg-light cart-icon",style:{borderRadius:"0",borderColor:"#F8F9FA"},onClick:function(){return S((function(A){return A>1?A-1:1}))},children:(0,D.jsx)(o.Sb,{})}),(0,D.jsx)("div",{children:(0,D.jsx)("p",{className:"m-0 px-3 py-1",children:k})}),(0,D.jsx)("button",{className:"btn px-2 py-1 bg-light cart-icon",style:{borderRadius:"0",borderColor:"#F8F9FA"},onClick:function(){return S((function(A){return A+1}))},children:(0,D.jsx)(o.xY,{})})]}),(0,D.jsx)("div",{className:"add-to-cart-btn mt-2 mt-md-0 ms-md-2",children:(0,D.jsx)("button",{onClick:function(){return Y.addToCart(u,k)},className:"btn text-white",style:{backgroundColor:"#373B3C"},children:"Add to Cart"})}),(0,D.jsx)("div",{className:"add-to-cart-btn mt-2 mt-md-0  ms-md-2",children:H?(0,D.jsx)("button",{className:"btn",style:{borderColor:"#373B3C",color:"#373B3C"},onClick:function(){return n(u.id)},children:"Remove from Wishlist"}):(0,D.jsx)("button",{className:"btn",style:{borderColor:"#373B3C",color:"#373B3C"},onClick:function(){return e(u.id)},children:"Add to Wishlist"})})]}),(0,D.jsx)("div",{className:"mt-1",children:(0,D.jsxs)("p",{children:[(0,D.jsx)("span",{className:"fw-bold",children:"Description: "}),u.description]})})]})]}),(0,D.jsxs)("div",{className:"border-top row pt-3",children:[(0,D.jsxs)("div",{className:"col-12 col-md-4",children:[(0,D.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Gender:"}),(0,D.jsx)("p",{className:"p-0 m-0 mt-1",children:u.productGender})]}),(0,D.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Shape:"}),(0,D.jsx)("p",{className:"p-0 m-0 mt-1",children:u.shape})]}),(0,D.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Frame Color:"}),(0,D.jsx)("p",{className:"p-0 m-0 mt-1",children:u.colors})]}),(0,D.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Temple Color:"}),(0,D.jsx)("p",{className:"p-0 m-0 mt-1",children:u.templeColor})]}),(0,D.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Frame material:"}),(0,D.jsx)("p",{className:"p-0 m-0 mt-1",children:u.frameMatirial})]})]}),(0,D.jsx)("div",{className:"col-12 col-md-1"}),(0,D.jsxs)("div",{className:"col-12 col-md-4",children:[(0,D.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,D.jsx)("div",{children:(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Glass size:"})}),(0,D.jsxs)("div",{className:"p-0 m-0 mt-1 text-center",children:[(0,D.jsx)("img",{src:g,alt:""}),(0,D.jsxs)("p",{className:"p-0 m-0",children:[u.glassWidth,"mm"]})]})]}),(0,D.jsx)("div",{children:(0,D.jsx)("p",{className:"p-0 m-0 mt-1 fw-bold",children:"Dimensions:"})}),(0,D.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-1",children:[(0,D.jsxs)("div",{className:"p-0 m-0 mt-1 text-center",children:[(0,D.jsx)("img",{src:m,alt:""}),(0,D.jsxs)("p",{className:"p-0 m-0",children:[u.noasSize,"mm"]})]}),(0,D.jsxs)("div",{className:"p-0 m-0 mt-1 text-center",children:[(0,D.jsx)("img",{src:Q,alt:""}),(0,D.jsxs)("p",{className:"p-0 m-0",children:[u.sideSize,"mm"]})]}),(0,D.jsxs)("div",{className:"p-0 m-0 mt-1 text-center",children:[(0,D.jsx)("img",{src:B,alt:""}),(0,D.jsx)("br",{}),(0,D.jsxs)("span",{className:"p-0 m-0",children:[u.lenseHeight,"mm"]}),(0,D.jsxs)("span",{className:"p-0 m-0",children:[u.lenseSize,"mm"]})]})]})]})]})]})})}}}]);
//# sourceMappingURL=70.b45aa5c0.chunk.js.map