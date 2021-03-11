(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={addContactForm:"AddContactForm_addContactForm__3CtbZ",formItem:"AddContactForm_formItem__2GwxK",formBtn:"AddContactForm_formBtn__1ClUH",btnText:"AddContactForm_btnText__3MUlt"}},function(t,e,n){t.exports={list:"ContactsList_list__3J06I",contactItem:"ContactsList_contactItem__1ViA4",contactData:"ContactsList_contactData__3EoG2"}},,function(t,e,n){t.exports={filter:"Filter_filter__3L239",text:"Filter_text__1Aa0D"}},function(t,e,n){t.exports={title:"Section_title__2fNwj",section:"Section_section__2ENS9"}},,function(t,e,n){t.exports={container:"Container_container__2ndGG"}},,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);n(16);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(21),n(14)),s=n(2),l=n(3),u=n(5),d=n(4),m=(n(22),n(25)),b=n(9),h=n.n(b),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).normalizedTitle=function(t){return t[0].toUpperCase()+t.slice(1)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:h.a.filter,children:[Object(j.jsx)("span",{className:h.a.text,children:"Find contacts by name:"}),Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})}}]),n}(a.Component),f=n(10),O=n.n(f),C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).normalizedTitle=function(t){return t[0].toUpperCase()+t.slice(1)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(j.jsxs)("section",{className:O.a.section,children:[e?Object(j.jsx)("h2",{className:O.a.title,children:this.normalizedTitle(e)}):"",n]})}}]),n}(a.Component),v=n(12),x=n.n(v),_=function(t){var e=t.children;return Object(j.jsx)("div",{className:x.a.container,children:e})},y=n(13),g=n(6),I=n.n(g),N=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(m.a)(),t.numberInputId=Object(m.a)(),t.normalizedTitle=function(t){return t[0].toUpperCase()+t.slice(1)},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(y.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:I.a.addContactForm,children:[Object(j.jsxs)("div",{className:I.a.formItem,children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter name",name:"name",id:this.nameInputId,value:e,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:I.a.formItem,children:[Object(j.jsx)("label",{htmlFor:this.numberInputId,children:" Number "}),Object(j.jsx)("input",{type:"tel",placeholder:"Enter phone number",name:"number",id:this.numberInputId,value:n,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",disabled:!e,className:"btn btn-success ".concat(I.a.formItem," ").concat(I.a.formBtn),children:Object(j.jsx)("span",{className:I.a.btnText,children:" Add Contact"})})]})}}]),n}(a.Component),S=n(7),F=n.n(S),w=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).normalizedTitle=function(t){return t[0].toUpperCase()+t.slice(1)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.contacts,a=e.onDeleteContact;return Object(j.jsx)("ul",{className:F.a.list,children:n.length>0?n.map((function(e){return Object(j.jsxs)("li",{className:F.a.contactItem,name:e.name,children:[Object(j.jsxs)("span",{className:F.a.contactData,children:[t.normalizedTitle(e.name)," : ",e.number]}),Object(j.jsx)("button",{type:"button",className:"deleteBtn btn btn-outline-dark",onClick:function(){return a(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)})):"No contacts added yet."})}}]),n}(a.Component),A=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(_,{children:[Object(j.jsx)("h1",{className:"appTitle",children:"Phonebook"}),Object(j.jsx)(C,{children:Object(j.jsx)(N,{onSubmit:this.addContact})}),Object(j.jsxs)(C,{title:"contacts",children:[Object(j.jsx)(p,{value:t,onChange:this.changeFilter}),Object(j.jsx)(w,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.605c047f.chunk.js.map