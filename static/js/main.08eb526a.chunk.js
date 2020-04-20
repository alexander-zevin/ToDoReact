(this["webpackJsonpmaterial-ui"]=this["webpackJsonpmaterial-ui"]||[]).push([[0],{112:function(e,t,a){e.exports={app:"App_app__2315q"}},117:function(e,t,a){e.exports={listBox:"Tasks_listBox__XEVD_"}},124:function(e,t,a){e.exports={paper:"Main_paper__48Cap"}},137:function(e,t,a){e.exports=a(167)},142:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(142),a(112)),o=a.n(s),i=a(207),u=a(125),d=a(92),m=a.n(d),p=a(77),k=a.n(p),f=Object(u.a)({palette:{primary:{main:k.a[400]},secondary:{main:m.a.A700},success:{main:k.a[400]}},typography:{body1:{fontSize:18}},props:{MuiButton:{size:"large"}},overrides:{MuiButton:{}}}),E=a(53),T=a(59),x=a(126),_=a(24),h={tasks:[],inputValue:""},b=Object(T.b)({toDo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INPUT_TEXT":return Object(_.a)({},e,{inputValue:t.newText});case"ADD_TASK":return Object(_.a)({},e,{tasks:[].concat(Object(x.a)(e.tasks),[{id:t.id,text:t.text,isPerformed:!1}]),inputValue:""});case"DELETE_TASK":return Object(_.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==t.id}))});case"SET_PERFORMED":return Object(_.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(_.a)({},e,{isPerformed:!e.isPerformed}):Object(_.a)({},e)}))});case"SAVE_TASK":return Object(_.a)({},e,{tasks:e.tasks.map((function(e){return e.id===t.id?Object(_.a)({},e,{text:t.text}):Object(_.a)({},e)}))});case"SET_TASKS":return Object(_.a)({},e,{tasks:t.tasks});default:return e}}}),v=Object(T.c)(b),S=a(40),I=a(220),g=a(205),C=a(215),O=a(84),B=a.n(O),j=function(e){var t=e.setInputText,a=e.inputValue,n=e.addTask;return r.a.createElement(I.a,{className:B.a.rootBox},r.a.createElement(I.a,{className:B.a.textFieldBox,mr:2},r.a.createElement(C.a,{label:"Enter task text",fullWidth:!0,value:a,onChange:function(e){return t(e.target.value)}})),r.a.createElement(I.a,null,r.a.createElement(g.a,{className:B.a.btn,variant:"contained",color:"primary",onClick:function(){n(a)}},"Add")))},M=a(117),y=a.n(M),A=a(204),N=a(210),P=a(211),D=a(217),V=a(222),w=a(212),K=a(208),F=a(122),L=a.n(F),z=a(123),J=a.n(z),R=a(218),X=a(118),q=a.n(X),U=a(206),W=q()((function(){return Object(U.a)({root:function(e){return{textDecoration:e.textDecoration}}})})),G=a(120),H=a.n(G),Y=a(203),Q=a(221),Z=a(209),$=a(121),ee=a.n($),te=a(43),ae=a.n(te),ne=function(e){var t=e.inputTaskText,a=e.handleInputBaseChange,n=e.saveTask,c=e.item,l=e.handleIconButtonClick;return r.a.createElement(I.a,{className:ae.a.rootBox},r.a.createElement(Y.a,{component:"form",className:ae.a.paper},r.a.createElement(Q.a,{className:ae.a.inputBase,placeholder:"\u0421hange the task text",onChange:function(e){a(e.target.value)},value:t,autoFocus:!0}),r.a.createElement(R.a,{title:"Save",placement:"top"},r.a.createElement(K.a,{className:ae.a.iconButton,onClick:function(){n(c.id,t)}},r.a.createElement(H.a,null))),r.a.createElement(Z.a,{className:ae.a.divider,orientation:"vertical",flexItem:!0}),r.a.createElement(R.a,{title:"Cancel",placement:"top"},r.a.createElement(K.a,{className:ae.a.iconButton,onClick:function(){l(null)}},r.a.createElement(ee.a,null)))))},re=function(e){var t=e.item,a=e.deleteTasks,c=e.setPerformed,l=e.handleListItemClick,s=e.selectedIndex,o=e.saveTask,i=e.handleIconButtonClick,u=e.editModeIndex,d=t.isPerformed?{textDecoration:"line-through"}:{textDecoration:"none"},m=W(d),p=Object(n.useState)(t.text),k=Object(S.a)(p,2),f=k[0],E=k[1];return r.a.createElement(r.a.Fragment,null,u===t.id?r.a.createElement(ne,{inputTaskText:f,handleInputBaseChange:function(e){E(e)},saveTask:o,item:t,handleIconButtonClick:i}):r.a.createElement(I.a,null,r.a.createElement(N.a,{key:t.id,button:!0,onClick:function(){return l(t.id)},selected:s===t.id},r.a.createElement(P.a,null,r.a.createElement(D.a,{edge:"start",color:"primary",checked:t.isPerformed,onClick:function(){c(t.id)}})),r.a.createElement(V.a,{primary:t.text,className:m.root}),s===t.id&&r.a.createElement(w.a,null,r.a.createElement(R.a,{title:"Edit",placement:"top"},r.a.createElement(K.a,{edge:"end",onClick:function(){i(t.id)}},r.a.createElement(L.a,null))),r.a.createElement(R.a,{title:"Delete",placement:"top"},r.a.createElement(K.a,{edge:"end",onClick:function(){a(t.id)}},r.a.createElement(J.a,null)))))))},ce=a(219),le=a(216),se=a(213),oe=function(e){return r.a.createElement(I.a,null,r.a.createElement(ce.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e.openMessage,autoHideDuration:6e3,onClose:function(){e.handleSnackbarClick(!1)},TransitionComponent:se.a},r.a.createElement(le.a,{severity:"success",variant:"filled"},"Saving was successful!")))},ie=function(e){var t=e.tasks,a=e.deleteTasks,n=e.setPerformed,c=e.saveTask,l=e.selectedIndex,s=e.handleListItemClick,o=e.editModeIndex,i=e.handleIconButtonClick,u=e.openMessage,d=e.handleSnackbarClick;return r.a.createElement(I.a,{className:y.a.listBox},r.a.createElement(A.a,null,t.map((function(e){return r.a.createElement(re,{item:e,key:e.id,deleteTasks:a,setPerformed:n,handleListItemClick:s,selectedIndex:l,saveTask:c,handleIconButtonClick:i,editModeIndex:o})}))),r.a.createElement(oe,{openMessage:u,handleSnackbarClick:d}))},ue=function(e){var t=e.tasks,a=e.deleteTasks,c=e.setPerformed,l=e.saveTask,s=e.openMessage,o=e.handleSnackbarClick,i=Object(n.useState)(null),u=Object(S.a)(i,2),d=u[0],m=u[1],p=Object(n.useState)(null),k=Object(S.a)(p,2),f=k[0],E=k[1];return Object(n.useEffect)((function(){E(null)}),[t]),r.a.createElement(ie,{tasks:t,deleteTasks:a,setPerformed:c,saveTask:l,selectedIndex:d,handleListItemClick:function(e){m(e)},editModeIndex:f,handleIconButtonClick:function(e){E(e)},openMessage:s,handleSnackbarClick:o})},de=a(124),me=a.n(de),pe=function(e){var t=e.setInputText,a=e.inputValue,n=e.addTask,c=e.tasks,l=e.deleteTasks,s=e.setPerformed,o=e.saveTask,i=e.openMessage,u=e.handleSnackbarClick;return r.a.createElement(Y.a,{className:me.a.paper,elevation:3},r.a.createElement(j,{setInputText:t,inputValue:a,addTask:n}),r.a.createElement(ue,{tasks:c,deleteTasks:l,setPerformed:s,saveTask:o,openMessage:i,handleSnackbarClick:u}))},ke=function(){var e=Object(E.c)(),t=Object(E.d)((function(e){return e.toDo}),E.b),a=t.tasks,c=t.inputValue;Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("tasks"));null!==t&&e(function(e){return{type:"SET_TASKS",tasks:e}}(t))}),[e]),Object(n.useEffect)((function(){!function(e){localStorage.setItem("tasks",JSON.stringify(e))}(a)}),[a]);var l=r.a.useState(!1),s=Object(S.a)(l,2),o=s[0],i=s[1],u=function(e){i(e)};return r.a.createElement(pe,{setInputText:function(t){e(function(e){return{type:"SET_INPUT_TEXT",newText:e}}(t))},inputValue:c,addTask:function(t){if(""!==t){var n,r;do{n=0,r=Math.floor(Math.random()*Math.floor(a.length+1));for(var c=0;c<a.length;c++)a[c].id===r&&n++}while(0!==n);e(function(e,t){return{type:"ADD_TASK",id:e,text:t}}(r,t))}},tasks:a,deleteTasks:function(t){e(function(e){return{type:"DELETE_TASK",id:e}}(t))},setPerformed:function(t){e(function(e){return{type:"SET_PERFORMED",id:e}}(t))},saveTask:function(t,a){e(function(e,t){return{type:"SAVE_TASK",id:e,text:t}}(t,a)),u(!0)},openMessage:o,handleSnackbarClick:u})},fe=function(){return r.a.createElement(i.a,{theme:f},r.a.createElement(E.a,{store:v},r.a.createElement(I.a,{className:o.a.app},r.a.createElement(ke,null))))},Ee=a(214);a(166);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee.a,null),r.a.createElement(fe,null)),document.getElementById("root"))},43:function(e,t,a){e.exports={rootBox:"TaskInput_rootBox__14zJp",paper:"TaskInput_paper__2dpzd",inputBase:"TaskInput_inputBase__YG2NP",iconButton:"TaskInput_iconButton__4aLSj",divider:"TaskInput_divider__1kvkr"}},84:function(e,t,a){e.exports={rootBox:"Add_rootBox__3avWs",textFieldBox:"Add_textFieldBox__qJiVz",btn:"Add_btn__2fwjX"}}},[[137,1,2]]]);
//# sourceMappingURL=main.08eb526a.chunk.js.map