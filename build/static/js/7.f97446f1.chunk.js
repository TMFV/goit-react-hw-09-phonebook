(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(50),s=a(51),r=a(53),i=a(52),l=a(0),c=a(13),h=a(40),m=a(119),b=a(146),p=a(2),u={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},d=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,o=a.name,s=a.value;e.setState(Object(n.a)({},o,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Registration"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,autoComplete:"off",children:[Object(p.jsx)(b.a,{label:"Name:",type:"text",name:"name",value:t,onChange:this.handleChange}),Object(p.jsx)(b.a,{label:"E-mail:",type:"email",name:"email",value:a,onChange:this.handleChange}),Object(p.jsx)(b.a,{label:"Password:",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{style:{marginTop:25},type:"submit",variant:"contained",color:"primary",children:"SIGN UP \ud83d\udfe6"})]})]})}}]),a}(l.Component),j={onRegister:h.a.register};t.default=Object(c.b)(null,j)(d)}}]);
//# sourceMappingURL=7.f97446f1.chunk.js.map