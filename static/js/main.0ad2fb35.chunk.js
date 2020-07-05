(this["webpackJsonpbudget-calculator-app"]=this["webpackJsonpbudget-calculator-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),o=(a(14),a(8)),s=a(5),u=a(2),m=a(18),i=a(1),p=function(e){var t=e.expense,a=e.handleDeleteExpense,n=e.handleEditExpense,l=t.id,r=t.charge,o=t.amount;return c.a.createElement("li",{className:"item",key:l},c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"expense"},r),c.a.createElement("span",{className:"amount"},"-",o," \u0433\u0440\u043d.")),c.a.createElement("div",null,c.a.createElement("button",{className:"edit-btn","aria-label":"edit button",onClick:function(){return n(l)}},c.a.createElement(i.b,null)),c.a.createElement("button",{className:"clear-btn","aria-label":"delete button",onClick:function(){return a(l)}},c.a.createElement(i.a,null))))},d=function(e){var t=e.expenses,a=e.clearAllExpenses,n=e.handleDeleteExpense,l=e.handleEditExpense;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list"},t.map((function(e){return c.a.createElement(p,{key:e.id,expense:e,handleEditExpense:l,handleDeleteExpense:n})}))),t.length>0&&c.a.createElement("button",{className:"btn",onClick:a}," ","\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0440\u0430\u0441\u0445\u043e\u0434\u044b ",c.a.createElement(i.a,{className:"btn-icon"})))},E=function(e){var t=e.charge,a=e.amount,n=e.handleCharge,l=e.handleAmount,r=e.handleSubmit,o=e.edit;return c.a.createElement("form",{onSubmit:r},c.a.createElement("div",{className:"form-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"charge"},"\u0421\u0442\u0430\u0442\u044c\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"),c.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u043f\u043b\u0430\u0442\u0430 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433",value:t,onChange:n})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"amount"},"\u0421\u0443\u043c\u043c\u0430"),c.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, 100 \u0433\u0440\u043d",value:a,onChange:l}))),c.a.createElement("button",{type:"submit",className:"btn"},o?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c",c.a.createElement(i.c,{className:"btn-icon"})))},h=function(e){var t=e.type,a=e.text;return c.a.createElement("div",{className:"alert alert-".concat(t)},a)},f=(a(15),localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[]);var b=function(){var e=Object(n.useState)(f),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),p=i[0],b=i[1],g=Object(n.useState)(""),x=Object(u.a)(g,2),v=x[0],N=x[1],O=Object(n.useState)({show:!1}),y=Object(u.a)(O,2),j=y[0],S=y[1],w=Object(n.useState)(!1),k=Object(u.a)(w,2),C=k[0],A=k[1],D=Object(n.useState)(0),I=Object(u.a)(D,2),F=I[0],J=I[1];Object(n.useEffect)((function(){localStorage.setItem("expenses",JSON.stringify(a))}),[a]);var B=a.reduce((function(e,t){return e+parseInt(t.amount)}),0),T=function(e){var t=e.type,a=e.text;S({show:!0,type:t,text:a}),setTimeout((function(){S({show:!1})}),3e3)};return c.a.createElement(c.a.Fragment,null,j.show&&c.a.createElement(h,{type:j.type,text:j.text}),c.a.createElement("h1",null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0442\u0432\u043e\u0435\u0433\u043e \u0431\u044e\u0434\u0436\u0435\u0442\u0430"),c.a.createElement("main",{className:"App"},c.a.createElement(E,{charge:p,amount:v,handleCharge:function(e){b(e.target.value)},handleAmount:function(e){N(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),""!==p&&v>0){if(C){var t=a.map((function(e){return e.id===F?Object(s.a)(Object(s.a)({},e),{},{charge:p,amount:v}):e}));l(t),A(!1),T({type:"success",text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"})}else{var n={id:Object(m.a)(),charge:p,amount:v};l([].concat(Object(o.a)(a),[n])),T({type:"success",text:"\u0412\u0430\u0448\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b"})}b(""),N("")}else T({type:"danger",text:"\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0412\u0430\u0448\u0438\u0445 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u0445"})},edit:C}),c.a.createElement(d,{expenses:a,handleDeleteExpense:function(e){var t=a.find((function(t){return t.id=e})),n=a.filter((function(t){return t.id!==e}));l(n),T({type:"danger",text:'\u0421\u0442\u0430\u0442\u044c\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 "'.concat(t.charge,'" \n      \u0441 \u0441\u0443\u043c\u043c\u043e\u0439 "-').concat(t.amount,' \u0433\u0440\u043d." \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430')})},handleEditExpense:function(e){var t=a.find((function(t){return t.id===e})),n=t.charge,c=t.amount;b(n),N(c),A(!0),J(e)},clearAllExpenses:function(){l([]),T({type:"danger",text:"\u0412\u0430\u0448\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u044b"})}})),c.a.createElement("h1",{className:"totalTitle"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432:"," ",c.a.createElement("span",{className:"total"},B," \u0433\u0440\u043d.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0ad2fb35.chunk.js.map