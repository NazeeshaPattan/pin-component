(this["webpackJsonppin-input-component"]=this["webpackJsonppin-input-component"]||[]).push([[0],{17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(3),s=n.n(r),i=(n(17),n(6),n(5)),o=n.n(i),u=n(7),b=n(8),p=n(9),O=n(12),h=n(11),l=n(10),j=n.n(l),d=n(2),f=(n(19),n(1)),m=function(t){Object(O.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={value:"",count:0},t.onChange=function(e){t.setState({value:e})},t.onSubmit=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setState({count:t.state.count+1}),console.log(t.state.value),!(t.state.count<3)){e.next=19;break}if(!(t.state.value.length<4)){e.next=7;break}d.b.warning("invalid input",{position:d.b.POSITION.TOP_RIGHT}),e.next=17;break;case 7:return n={otp:t.state.value},e.next=10,fetch("https://pin-input-be.herokuapp.com/checkotp",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).catch((function(t){d.b.error(t)}));case 10:if(200===e.sent.status){e.next=16;break}return d.b.error("Invalid Pin",{position:d.b.POSITION.TOP_RIGHT}),e.abrupt("return");case 16:d.b.success("OTP Confirmed",{position:d.b.POSITION.TOP_RIGHT});case 17:e.next=20;break;case 19:d.b.warning("your 3 attempts have been exceeded",{position:d.b.POSITION.TOP_RIGHT});case 20:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{}),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(j.a,{length:4,focus:!0,secret:!0,ref:function(e){return t.pin=e},type:"numeric",onChange:this.onChange})," ",Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsxs)("button",{className:"btn btn-primary btn-grad",onClick:this.onSubmit,children:["Submit"," "]})," "]})," "," "]})," "]})}}]),n}(c.a.PureComponent);var v=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(m,{})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))},6:function(t,e,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.dae3ae09.chunk.js.map