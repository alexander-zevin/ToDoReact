(this["webpackJsonpmy-task-list"]=this["webpackJsonpmy-task-list"]||[]).push([[0],{114:function(e,t,a){e.exports=a(126)},119:function(e,t,a){},120:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=(a(119),a(120),a(15)),i=a(17),l=a(80),u=a.n(l),d=a(165),m=a(176),g=a(177),p=a(166),f=a(68),E=a.n(f),b=function(e){var t=e.textFieldValue,a=e.textFieldChange,n=e.addTask;return r.a.createElement(m.a,{className:E.a.Add},r.a.createElement(g.a,{label:"Add task text",fullWidth:!0,size:"small",value:t,onChange:function(e){a(e.target.value)},variant:"outlined",onKeyUp:function(e){13===e.keyCode&&n(t)}}),r.a.createElement(m.a,{ml:2},r.a.createElement(p.a,{className:E.a.btn,onClick:function(){n(t)},variant:"contained",color:"primary"},"ADD")))},v=function(e){var t=e.tasks,a=Object(i.c)(),o=Object(n.useState)(""),s=Object(c.a)(o,2),l=s[0],u=s[1],d=function(e){u(e)};return r.a.createElement(b,{textFieldValue:l,textFieldChange:d,addTask:function(e){if(""!==e){var n,r,o=(new Date).toISOString();do{n=0,r=Math.floor(Math.random()*Math.floor(t.length+1));for(var s=0;s<t.length;s++)t[s].id===r&&n++}while(0!==n);a(function(e,t,a){return{type:"ADD_TASK",id:e,text:t,date:a}}(r,e,o)),d("")}}})},O=a(69),x=a.n(O),k=a(84),_=a.n(k),y=a(185),h=a(182),S=a(167),M=a(168),T=a(86),w=a.n(T),j=a(87),I=a.n(j),C=function(e){return r.a.createElement(m.a,{className:_.a.Item},r.a.createElement(m.a,{flexGrow:1,pl:2},r.a.createElement(y.a,{placeholder:"Change the task text",autoFocus:!0,value:e.inputValue,onChange:function(t){e.setInputValue(t.target.value)},onKeyUp:function(t){13===t.keyCode&&e.saveTask(e.id,e.inputValue)},fullWidth:!0})),r.a.createElement(h.a,{title:"Save",placement:"top"},r.a.createElement(S.a,{onClick:function(){e.saveTask(e.id,e.inputValue)}},r.a.createElement(w.a,null))),r.a.createElement(M.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(h.a,{title:"Cancel",placement:"top"},r.a.createElement(S.a,{onClick:function(){e.setEditModeIndex(null)}},r.a.createElement(I.a,null))))},P=function(e){var t=Object(i.c)(),a=Object(n.useState)(e.text),o=Object(c.a)(a,2),s=o[0],l=o[1];return r.a.createElement(C,Object.assign({inputValue:s,setInputValue:l,saveTask:function(a,n){t(function(e,t){return{type:"SAVE_TASK",id:e,text:t}}(a,n)),e.setEditModeIndex(null),e.setOpenMessage({open:!0,message:"Saving was successful!"})}},e))},D=a(53),A=a.n(D),N=a(181),R=a(93),B=a.n(R),V=a(94),z=a.n(V),F=a(91),J=a.n(F),K=a(92),L=a.n(K),G=a(183),W=a(172),U=a(170),H=a(171),Y=a(169),X=a(88),Q=a.n(X),Z=a(90),$=a.n(Z),q=a(89),ee=a.n(q);function te(e){return r.a.createElement(Q.a,{handle:"#draggable-dialog-title"},r.a.createElement(d.a,e))}var ae=function(e){var t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],s=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement(h.a,{title:"View content",placement:"top"},r.a.createElement(S.a,{onClick:function(){o(!0)}},r.a.createElement($.a,null))),r.a.createElement(G.a,{open:n,onClose:s,PaperComponent:te},r.a.createElement(Y.a,{style:{cursor:"move"},id:"draggable-dialog-title"},"View content"),r.a.createElement(U.a,null,r.a.createElement(H.a,{className:ee.a.ViewContent},e.text)),r.a.createElement(W.a,null,r.a.createElement(p.a,{autoFocus:!0,onClick:s,color:"primary"},"Close"))))},ne=function(e){return r.a.createElement("div",{className:A.a.Item,onMouseMove:function(){e.setActiveRowIndex(e.id)},onMouseLeave:function(){e.setActiveRowIndex(null)}},r.a.createElement(h.a,{title:e.isPerformed?"Performed":"Not performed",placement:"top"},r.a.createElement(N.a,{color:"primary",checked:e.isPerformed,onChange:function(){e.setPerformed(e.id)}})),r.a.createElement(h.a,{title:e.isTagged?"Tagged":"Not tagged",placement:"top",className:A.a.star},r.a.createElement(S.a,{onClick:function(){e.setTag(e.id)}},e.isTagged?r.a.createElement(J.a,{color:"primary"}):r.a.createElement(L.a,null))),r.a.createElement(m.a,{className:A.a.text,component:"div",flexGrow:1,style:{textDecoration:e.isPerformed?"line-through":"none"},textOverflow:"ellipsis",overflow:"hidden"},e.text),e.activeRowIndex===e.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{title:"Edit",placement:"top"},r.a.createElement(S.a,{onClick:function(){e.setEditModeIndex(e.id)}},r.a.createElement(B.a,null))),r.a.createElement(M.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(ae,{text:e.text}),r.a.createElement(M.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(h.a,{title:"Delete",placement:"top"},r.a.createElement(S.a,{onClick:function(){e.deleteTasks(e.id)}},r.a.createElement(z.a,null)))):r.a.createElement(m.a,{className:A.a.date,mx:1},e.date))},re=function(e){var t=Object(i.c)();return r.a.createElement(ne,Object.assign({setPerformed:function(e){t(function(e){return{type:"SET_PERFORMED",id:e}}(e))},deleteTasks:function(a){t(function(e){return{type:"DELETE_TASK",id:e}}(a)),e.setOpenMessage({open:!0,message:"Uninstall was successful"})},setTag:function(e){t(function(e){return{type:"SET_TAG",id:e}}(e))}},e))},oe=function(e){return r.a.createElement(m.a,{className:x.a.List},0===e.tasks.length&&r.a.createElement(m.a,{className:x.a.empty},r.a.createElement("span",null,"It's empty here...")),e.tasks.slice(e.leftPortionPageNumber,e.rightPortionPageNumber).map((function(t){return e.editModeIndex!==t.id?r.a.createElement(re,{id:t.id,text:t.text,isPerformed:t.isPerformed,editModeIndex:e.editModeIndex,setEditModeIndex:e.setEditModeIndex,activeRowIndex:e.activeRowIndex,setActiveRowIndex:e.setActiveRowIndex,setOpenMessage:e.setOpenMessage,isTagged:t.isTagged,date:e.convertDate(t.date),key:t.id}):r.a.createElement(P,{id:t.id,text:t.text,setEditModeIndex:e.setEditModeIndex,setOpenMessage:e.setOpenMessage,key:t.id})})))},se=function(e){var t=Object(n.useState)(null),a=Object(c.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(null),l=Object(c.a)(i,2),u=l[0],d=l[1],m=(e.pageNumber-1)*e.pageSize,g=e.pageNumber*e.pageSize;return"added"===e.sortBy?e.tasks.sort((function(e,t){return new Date(e.date)>new Date(t.date)?1:new Date(e.date)<new Date(t.date)?-1:0})):"not performed"===e.sortBy?e.tasks.sort((function(e,t){return e.isPerformed>t.isPerformed?1:e.isPerformed<t.isPerformed?-1:0})):"tags"===e.sortBy&&e.tasks.sort((function(e,t){return e.isTagged<t.isTagged?1:e.isTagged>t.isTagged?-1:0})),r.a.createElement(oe,{tasks:e.tasks,editModeIndex:o,setEditModeIndex:s,activeRowIndex:u,setActiveRowIndex:d,setOpenMessage:e.setOpenMessage,pageNumber:e.pageNumber,pageSize:e.pageSize,leftPortionPageNumber:m,rightPortionPageNumber:g,sortBy:e.sortBy,convertDate:function(e){return"".concat(new Date(e).getDate()," ").concat(["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][new Date(e).getMonth()])}})},ce=a(184),ie=a(179),le=a(173);function ue(e){return r.a.createElement(le.a,Object.assign({},e,{direction:"right"}))}var de=function(e){return r.a.createElement(ce.a,{open:e.openMessage.open,onClose:function(){e.setOpenMessage({open:!1,message:null})},autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:ue},r.a.createElement(ie.a,{onClose:function(){e.setOpenMessage({open:!1,message:null})},severity:"success",variant:"filled"},e.openMessage.message))},me=a(178),ge=a(95),pe=a.n(ge),fe=function(e){var t=Math.ceil(e.tasks.length/e.pageSize);return r.a.createElement(m.a,{className:pe.a.Paginator},r.a.createElement(me.a,{count:t,onChange:e.paginatorChange,color:"primary"}))},Ee=a(97),be=a.n(Ee),ve=a(186),Oe=a(96),xe=a.n(Oe),ke=a(100),_e=a(102),ye=function(e){var t=Object(i.c)(),a=["added","not performed","tags"],n=r.a.useState(null),o=Object(c.a)(n,2),s=o[0],l=o[1],u=r.a.useState(0),d=Object(c.a)(u,2),g=d[0],f=d[1];return r.a.createElement(m.a,null,r.a.createElement(m.a,{className:xe.a.sortBy},r.a.createElement(p.a,{onClick:function(e){l(e.currentTarget)},startIcon:r.a.createElement(be.a,null)},r.a.createElement(_e.a,{variant:"body2"},"Sort by: ",e.sortBy)),r.a.createElement(ke.a,{anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){l(null)}},a.map((function(e,n){return r.a.createElement(ve.a,{key:e,selected:n===g,onClick:function(e){return function(e,n){f(n),l(null),t({type:"SET_SORT",option:a[n]})}(0,n)}},e)})))))},he=function(e){return r.a.createElement(d.a,{className:u.a.Paper,elevation:3},r.a.createElement(v,{tasks:e.state.tasks}),r.a.createElement(ye,{sortBy:e.state.sortBy}),r.a.createElement(se,{setOpenMessage:e.setOpenMessage,tasks:e.state.tasks,pageNumber:e.pageNumber,pageSize:e.pageSize,sortBy:e.state.sortBy}),r.a.createElement(de,{openMessage:e.openMessage,setOpenMessage:e.setOpenMessage}),r.a.createElement(fe,{tasks:e.state.tasks,paginatorChange:e.paginatorChange,pageSize:e.pageSize}))},Se=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.toDo}),i.b);Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("tasks"));null!==t&&e(function(e){return{type:"SET_STATE",state:e}}(t))}),[e]),Object(n.useEffect)((function(){!function(e){localStorage.setItem("tasks",JSON.stringify(e))}(t)}),[t]);var a=Object(n.useState)({open:!1,message:null}),o=Object(c.a)(a,2),s=o[0],l=o[1],u=Object(n.useState)(1),d=Object(c.a)(u,2),m=d[0],g=d[1];return r.a.createElement(he,{openMessage:s,setOpenMessage:l,pageSize:11,pageNumber:m,paginatorChange:function(e,t){g(t)},state:t})},Me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=a(174),we=a(98),je=a(63),Ie=Object(we.a)({palette:{primary:{main:je.a[400]},success:{main:je.a[400]}}}),Ce=a(51),Pe=a(99),De=a(19),Ae={tasks:[],sortBy:"added"},Ne=Object(Ce.b)({toDo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return Object(De.a)({},e,{tasks:[].concat(Object(Pe.a)(e.tasks),[{id:t.id,text:t.text,isPerformed:!1,isTagged:!1,date:t.date}])});case"DELETE_TASK":return Object(De.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.id}))});case"SET_PERFORMED":return Object(De.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(De.a)({},e,{isPerformed:!e.isPerformed}):Object(De.a)({},e)}))});case"SAVE_TASK":return Object(De.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(De.a)({},e,{text:t.text}):Object(De.a)({},e)}))});case"SET_STATE":return t.state;case"SET_TAG":return Object(De.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(De.a)({},e,{isTagged:!e.isTagged}):Object(De.a)({},e)}))});case"SET_SORT":return Object(De.a)({},e,{sortBy:t.option});default:return e}}}),Re=Object(Ce.c)(Ne);s.a.render(r.a.createElement(i.a,{store:Re},r.a.createElement(Te.a,{theme:Ie},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports={Item:"Row_Item__2xJ0Q",Divider:"Row_Divider__X6JUM",star:"Row_star__PxzG7",text:"Row_text__2lf9X",date:"Row_date__3HyGs"}},68:function(e,t,a){e.exports={Add:"Add_Add__fr6Ar",btn:"Add_btn__a0WMD"}},69:function(e,t,a){e.exports={List:"List_List__2bHYY",empty:"List_empty__3gKid"}},80:function(e,t,a){e.exports={Paper:"Main_Paper__1D9LB"}},84:function(e,t,a){e.exports={Item:"RowEdit_Item__1b8hj",Divider:"RowEdit_Divider__14jz7"}},89:function(e,t,a){e.exports={ViewContent:"ViewContent_ViewContent__3_YZb"}},95:function(e,t,a){e.exports={Paginator:"Paginator_Paginator__33pke"}},96:function(e,t,a){e.exports={sortBy:"Control_sortBy__12syJ"}}},[[114,1,2]]]);
//# sourceMappingURL=main.cc0c24c8.chunk.js.map