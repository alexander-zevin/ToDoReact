(this["webpackJsonpmy-task-list"]=this["webpackJsonpmy-task-list"]||[]).push([[0],{114:function(e,t,a){e.exports=a(126)},119:function(e,t,a){},120:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(119),a(120),a(15)),i=a(17),l=a(80),u=a.n(l),d=a(166),m=a(177),f=a(178),p=a(167),g=a(68),E=a.n(g),v=function(e){var t=e.textFieldValue,a=e.textFieldChange,n=e.addTask;return r.a.createElement(m.a,{className:E.a.Add},r.a.createElement(f.a,{label:"Add task text",fullWidth:!0,size:"small",value:t,onChange:function(e){a(e.target.value)},variant:"outlined",onKeyUp:function(e){13===e.keyCode&&n(t)}}),r.a.createElement(m.a,{ml:2},r.a.createElement(p.a,{className:E.a.btn,onClick:function(){n(t)},variant:"contained",color:"primary"},"ADD")))},b=function(e){var t=e.tasks,a=Object(i.c)(),o=Object(n.useState)(""),s=Object(c.a)(o,2),l=s[0],u=s[1],d=function(e){u(e)};return r.a.createElement(v,{textFieldValue:l,textFieldChange:d,addTask:function(e){if(""!==e){var n,r,o=(new Date).toISOString();do{n=0,r=Math.floor(Math.random()*Math.floor(t.length+1));for(var s=0;s<t.length;s++)t[s].id===r&&n++}while(0!==n);a(function(e,t,a){return{type:"ADD_TASK",id:e,text:t,date:a}}(r,e,o)),d("")}}})},x=a(69),O=a.n(x),k=a(84),_=a.n(k),h=a(186),w=a(183),M=a(168),y=a(169),I=a(86),S=a.n(I),j=a(87),T=a.n(j),C=function(e){return r.a.createElement(m.a,{className:_.a.Item},r.a.createElement(m.a,{flexGrow:1,pl:2},r.a.createElement(h.a,{placeholder:"Change the task text",autoFocus:!0,value:e.inputValue,onChange:function(t){e.setInputValue(t.target.value)},onKeyUp:function(t){13===t.keyCode&&e.saveTask(e.id,e.inputValue)},fullWidth:!0})),r.a.createElement(w.a,{title:"Save",placement:"top"},r.a.createElement(M.a,{onClick:function(){e.saveTask(e.id,e.inputValue)}},r.a.createElement(S.a,null))),r.a.createElement(y.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(w.a,{title:"Cancel",placement:"top"},r.a.createElement(M.a,{onClick:function(){e.setEditModeIndex(null)}},r.a.createElement(T.a,null))))},A=function(e){var t=Object(i.c)(),a=Object(n.useState)(e.text),o=Object(c.a)(a,2),s=o[0],l=o[1];return r.a.createElement(C,Object.assign({inputValue:s,setInputValue:l,saveTask:function(a,n){t(function(e,t){return{type:"SAVE_TASK",id:e,text:t}}(a,n)),e.setEditModeIndex(null),e.setActiveRowIndex(null),e.setOpenMessage({open:!0,message:"Saving was successful!"})}},e))},P=a(53),N=a.n(P),R=a(182),D=a(93),V=a.n(D),z=a(94),F=a.n(z),B=a(91),L=a.n(B),J=a(92),K=a.n(J),G=a(184),W=a(174),U=a(172),H=a(173),Y=a(171),X=a(88),Q=a.n(X),Z=a(90),$=a.n(Z),q=a(89),ee=a.n(q),te=a(170);function ae(e){return r.a.createElement(Q.a,{handle:"#draggable-dialog-title"},r.a.createElement(d.a,e))}var ne=function(e){var t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],s=function(){o(!1),e.setActiveRowIndex(null)},i=r.a.forwardRef((function(e,t){return r.a.createElement(te.a,Object.assign({direction:"up",ref:t},e))}));return r.a.createElement("div",null,r.a.createElement(w.a,{title:"View content",placement:"top"},r.a.createElement(M.a,{onClick:function(){o(!0)}},r.a.createElement($.a,null))),r.a.createElement(G.a,{open:n,onClose:s,PaperComponent:ae,TransitionComponent:i},r.a.createElement(Y.a,{style:{cursor:"move"},id:"draggable-dialog-title"},"View content"),r.a.createElement(U.a,null,r.a.createElement(H.a,{className:ee.a.ViewContent},e.text)),r.a.createElement(W.a,null,r.a.createElement(p.a,{autoFocus:!0,onClick:s,color:"primary"},"Close"))))},re=function(e){return r.a.createElement("div",{className:N.a.Item,onMouseMove:function(){e.setActiveRowIndex(e.id)},onMouseLeave:function(){e.setActiveRowIndex(null)}},r.a.createElement(w.a,{title:e.isPerformed?"Performed":"Not performed",placement:"top"},r.a.createElement(R.a,{color:"primary",checked:e.isPerformed,onChange:function(){e.setPerformed(e.id)}})),r.a.createElement(w.a,{title:e.isTagged?"Tagged":"Not tagged",placement:"top",className:N.a.star},r.a.createElement(M.a,{onClick:function(){e.setTag(e.id)}},e.isTagged?r.a.createElement(L.a,{color:"primary"}):r.a.createElement(K.a,null))),r.a.createElement(m.a,{className:N.a.text,component:"div",flexGrow:1,style:{textDecoration:e.isPerformed?"line-through":"none"},textOverflow:"ellipsis",overflow:"hidden"},e.text),e.activeRowIndex===e.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{title:"Edit",placement:"top"},r.a.createElement(M.a,{onClick:function(){e.setEditModeIndex(e.id)}},r.a.createElement(V.a,null))),r.a.createElement(y.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(ne,{text:e.text,setActiveRowIndex:e.setActiveRowIndex}),r.a.createElement(y.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(w.a,{title:"Delete",placement:"top"},r.a.createElement(M.a,{onClick:function(){e.deleteTasks(e.id)}},r.a.createElement(F.a,null)))):r.a.createElement(m.a,{className:N.a.date,mx:1},e.date))},oe=function(e){var t=Object(i.c)();return r.a.createElement(re,Object.assign({setPerformed:function(e){t(function(e){return{type:"SET_PERFORMED",id:e}}(e))},deleteTasks:function(a){t(function(e){return{type:"DELETE_TASK",id:e}}(a)),e.setOpenMessage({open:!0,message:"Uninstall was successful"})},setTag:function(e){t(function(e){return{type:"SET_TAG",id:e}}(e))}},e))},se=function(e){return r.a.createElement(m.a,{className:O.a.List},0===e.tasks.length&&r.a.createElement(m.a,{className:O.a.empty},r.a.createElement("span",null,"It's empty here...")),e.tasks.slice(e.leftPortionPageNumber,e.rightPortionPageNumber).map((function(t){return e.editModeIndex!==t.id?r.a.createElement(oe,{id:t.id,text:t.text,isPerformed:t.isPerformed,editModeIndex:e.editModeIndex,setEditModeIndex:e.setEditModeIndex,activeRowIndex:e.activeRowIndex,setActiveRowIndex:e.setActiveRowIndex,setOpenMessage:e.setOpenMessage,isTagged:t.isTagged,date:e.convertDate(t.date),key:t.id}):r.a.createElement(A,{id:t.id,text:t.text,setEditModeIndex:e.setEditModeIndex,setOpenMessage:e.setOpenMessage,key:t.id,setActiveRowIndex:e.setActiveRowIndex})})))},ce=function(e){var t=Object(n.useState)(null),a=Object(c.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(null),l=Object(c.a)(i,2),u=l[0],d=l[1],m=(e.pageNumber-1)*e.pageSize,f=e.pageNumber*e.pageSize,p=[];switch(e.sortBy){case"not performed":p=e.tasks.filter((function(e){return!e.isPerformed}));break;case"tags":p=e.tasks.filter((function(e){return e.isTagged}));break;default:p=e.tasks}return r.a.createElement(se,{tasks:p,editModeIndex:o,setEditModeIndex:s,activeRowIndex:u,setActiveRowIndex:d,setOpenMessage:e.setOpenMessage,pageNumber:e.pageNumber,pageSize:e.pageSize,leftPortionPageNumber:m,rightPortionPageNumber:f,sortBy:e.sortBy,convertDate:function(e){return"".concat(new Date(e).getDate()," ").concat(["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][new Date(e).getMonth()])}})},ie=a(185),le=a(180);function ue(e){return r.a.createElement(te.a,Object.assign({},e,{direction:"right"}))}var de=function(e){return r.a.createElement(ie.a,{open:e.openMessage.open,onClose:function(){e.setOpenMessage({open:!1,message:null})},autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:ue},r.a.createElement(le.a,{onClose:function(){e.setOpenMessage({open:!1,message:null})},severity:"success",variant:"filled"},e.openMessage.message))},me=a(179),fe=a(95),pe=a.n(fe),ge=function(e){var t=Math.ceil(e.tasks.length/e.pageSize);return r.a.createElement(m.a,{className:pe.a.Paginator},r.a.createElement(me.a,{count:t,onChange:e.paginatorChange,color:"primary"}))},Ee=a(187),ve=a(96),be=a.n(ve),xe=a(100),Oe=a(102),ke=a(97),_e=a.n(ke),he=function(e){var t=Object(i.c)(),a=["all","not performed","tags"],n=r.a.useState(null),o=Object(c.a)(n,2),s=o[0],l=o[1],u=r.a.useState(0),d=Object(c.a)(u,2),f=d[0],g=d[1];return r.a.createElement(m.a,null,r.a.createElement(m.a,{className:be.a.sortBy},r.a.createElement(p.a,{onClick:function(e){l(e.currentTarget)},startIcon:r.a.createElement(_e.a,null)},r.a.createElement(Oe.a,{variant:"body2"},"Filter by: ",e.filter)),r.a.createElement(xe.a,{anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){l(null)}},a.map((function(e,n){return r.a.createElement(Ee.a,{key:e,selected:n===f,onClick:function(e){return function(e,n){g(n),l(null),t({type:"SET_FILTER",option:a[n]})}(0,n)}},e)})))))},we=function(e){return r.a.createElement(d.a,{className:u.a.Paper,elevation:3},r.a.createElement(b,{tasks:e.state.tasks}),r.a.createElement(he,{filter:e.state.filter}),r.a.createElement(ce,{setOpenMessage:e.setOpenMessage,tasks:e.state.tasks,pageNumber:e.pageNumber,pageSize:e.pageSize,sortBy:e.state.filter}),r.a.createElement(de,{openMessage:e.openMessage,setOpenMessage:e.setOpenMessage}),r.a.createElement(ge,{tasks:e.state.tasks,paginatorChange:e.paginatorChange,pageSize:e.pageSize}))},Me=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.toDo}),i.b);Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("tasks"));null!==t&&e(function(e){return{type:"SET_STATE",state:e}}(t))}),[e]),Object(n.useEffect)((function(){!function(e){localStorage.setItem("tasks",JSON.stringify(e))}(t)}),[t]);var a=Object(n.useState)({open:!1,message:null}),o=Object(c.a)(a,2),s=o[0],l=o[1],u=Object(n.useState)(1),d=Object(c.a)(u,2),m=d[0],f=d[1];return r.a.createElement(we,{openMessage:s,setOpenMessage:l,pageSize:11,pageNumber:m,paginatorChange:function(e,t){f(t)},state:t})},ye=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(175),Se=a(98),je=a(63),Te=Object(Se.a)({palette:{primary:{main:je.a[400]},success:{main:je.a[400]}}}),Ce=a(51),Ae=a(99),Pe=a(19),Ne={tasks:[],filter:"all"},Re=Object(Ce.b)({toDo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(Pe.a)({},e,{tasks:[].concat(Object(Ae.a)(e.tasks),[{id:t.id,text:t.text,isPerformed:!1,isTagged:!1,date:t.date}])});case"DELETE_TASK":return Object(Pe.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.id}))});case"SET_PERFORMED":return Object(Pe.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(Pe.a)({},e,{isPerformed:!e.isPerformed}):Object(Pe.a)({},e)}))});case"SAVE_TASK":return Object(Pe.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(Pe.a)({},e,{text:t.text}):Object(Pe.a)({},e)}))});case"SET_STATE":return t.state;case"SET_TAG":return Object(Pe.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(Pe.a)({},e,{isTagged:!e.isTagged}):Object(Pe.a)({},e)}))});case"SET_FILTER":return Object(Pe.a)({},e,{filter:t.option});default:return e}}}),De=Object(Ce.c)(Re);s.a.render(r.a.createElement(i.a,{store:De},r.a.createElement(Ie.a,{theme:Te},r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports={Item:"Row_Item__2xJ0Q",Divider:"Row_Divider__X6JUM",star:"Row_star__PxzG7",text:"Row_text__2lf9X",date:"Row_date__3HyGs"}},68:function(e,t,a){e.exports={Add:"Add_Add__fr6Ar",btn:"Add_btn__a0WMD"}},69:function(e,t,a){e.exports={List:"List_List__2bHYY",empty:"List_empty__3gKid"}},80:function(e,t,a){e.exports={Paper:"Main_Paper__1D9LB"}},84:function(e,t,a){e.exports={Item:"RowEdit_Item__1b8hj",Divider:"RowEdit_Divider__14jz7"}},89:function(e,t,a){e.exports={ViewContent:"ViewContent_ViewContent__3_YZb"}},95:function(e,t,a){e.exports={Paginator:"Paginator_Paginator__33pke"}},96:function(e,t,a){e.exports={sortBy:"Control_sortBy__12syJ"}}},[[114,1,2]]]);
//# sourceMappingURL=main.ce14992e.chunk.js.map