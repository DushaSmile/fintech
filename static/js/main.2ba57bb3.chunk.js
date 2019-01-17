(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){e.exports=n(258)},258:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(109),i=n.n(c),l=n(18),m=n(11),u=n(268),o=n(118),s=n(36),d={items:[],discount:10,total:0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CART_ITEM":return Object(s.a)({},e,{items:[].concat(Object(o.a)(e.items),[t.item]),total:e.total+t.item.price});case"APPLY_DISCOUNT":return Object(s.a)({},e,{discount:t.discount});default:return e}},E=Object(m.b)({cart:p,form:u.a}),b=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(m.c)(E)),h=n(111),f=n(112),O=n(119),y=n(113),j=n(120),S=n(24),_=n(262),D=n(263),v=n(259),w=n(260),I=n(266),g=n(269),P=n(267),N=function(e){var t=e.input,n=e.type,a=e.placeholder,c=e.required,i=e.min;return r.a.createElement(g.a,null,r.a.createElement(P.a,Object.assign({type:n,placeholder:a,required:c,min:i},t)))},A=n(265),C=n(264),F=Object(C.a)({form:"ItemForm"})(function(e){var t=e.pristine;return r.a.createElement(v.a,{inline:!0,onSubmit:e.handleSubmit},r.a.createElement(w.a,{xs:12,sm:6,md:5,lg:4},r.a.createElement(A.a,{name:"name",component:N,placeholder:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",required:!0,type:"text"}),r.a.createElement(A.a,{name:"price",component:N,placeholder:"\u0426\u0435\u043d\u0430",required:!0,min:1,type:"number"})),r.a.createElement(w.a,{xs:12,sm:4,md:4,lg:5},r.a.createElement(I.a,{bsStyle:"success",type:"submit",disabled:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}),T=Object(C.a)({form:"DiscountForm"})(function(e){var t=e.pristine;return r.a.createElement(v.a,{inline:!0,onSubmit:e.handleSubmit},r.a.createElement(w.a,{xs:7,sm:7,md:7,lg:7},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443",r.a.createElement(A.a,{name:"discount",component:N,required:!0,min:1,type:"number"}),"\u0440\u0443\u0431\u043b\u0435\u0439"),r.a.createElement(w.a,{xs:4,sm:4,md:4,lg:3},r.a.createElement(I.a,{bsStyle:"success",type:"submit",disabled:t},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c")))}),x=Object(l.b)(function(e){return{initialValues:{discount:e.cart.discount}}})(T),k=n(261),q=function(e,t){var n=new Array(e.length);if(n.length){for(var a,r=0,c=-1/0,i=0;i<e.length;i++)c<e[i].price&&(c=e[i].price,a=i),r+=e[i].price;var l=r-t;l<0&&(l=0);for(var m=l/r||0,u=0,o=0;o<e.length;o++)n[o]=Object(s.a)({},e[o]),o!==a&&(n[o].discPrice=Math.ceil(n[o].price*m),n[o].discPrice<0&&(n[o].discPrice=0),u+=n[o].discPrice);n[a].discPrice=l-u,n[a].discPrice<0&&(n[0===a?1:0].discPrice+=n[a].discPrice,n[a].discPrice=0)}return n},L=function(e){var t=e.cart,n=q(t.items,t.discount);return r.a.createElement(w.a,{xs:12,sm:6,md:6},r.a.createElement(k.a,{bordered:!0,striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u041f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439"))),r.a.createElement("tbody",null,n.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.discPrice))})),r.a.createElement("tfoot",null,t.items.length>0&&r.a.createElement("tr",null,r.a.createElement("td",{align:"right"},"\u0418\u0442\u043e\u0433\u043e"),r.a.createElement("td",null,n.reduce(function(e,t){return e+t.price},0)),r.a.createElement("td",null,n.reduce(function(e,t){return e+t.discPrice},0))))))},R=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(O.a)(this,Object(y.a)(t).call(this,e))).onNewItemFormSubmit=n.onNewItemFormSubmit.bind(Object(S.a)(Object(S.a)(n))),n.onApplyCartDiscountForm=n.onApplyCartDiscountForm.bind(Object(S.a)(Object(S.a)(n))),n}return Object(j.a)(t,e),Object(f.a)(t,[{key:"onNewItemFormSubmit",value:function(e){this.props.addCartItem({name:e.name,price:Number.parseInt(e.price)})}},{key:"onApplyCartDiscountForm",value:function(e){this.props.applyDiscount(Number.parseInt(e.discount))}},{key:"render",value:function(){return r.a.createElement(_.a,null,r.a.createElement(D.a,null,r.a.createElement("h1",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement(F,{onSubmit:this.onNewItemFormSubmit})),r.a.createElement("hr",null),r.a.createElement(D.a,null,r.a.createElement("h1",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement(L,{cart:this.props.cart}),r.a.createElement(x,{onSubmit:this.onApplyCartDiscountForm})))}}]),t}(r.a.Component),U=Object(l.b)(function(e){return{cart:e.cart}},function(e){return{addCartItem:function(t){e(function(e){return{type:"ADD_CART_ITEM",item:e}}(t))},applyDiscount:function(t){e(function(e){return{type:"APPLY_DISCOUNT",discount:e}}(t))}}})(R);i.a.render(r.a.createElement(l.a,{store:b},r.a.createElement(U,null)),document.getElementById("root"))}},[[121,2,1]]]);
//# sourceMappingURL=main.2ba57bb3.chunk.js.map