(this["webpackJsonpno1-todolist"]=this["webpackJsonpno1-todolist"]||[]).push([[0],{26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(10),i=a.n(c),r=a(3),d=a(8),l=a(9),j=a(1),o="SET_CURRENT_PAGE",u="ADD_TASK_CLICK",b="ADD_TASK_CANCEL",k="NEW_TASK_CHANGE",O="ADD_NEW_TASK",p="SET_TASK_STAR",m="OPEN_EDIT_TASK",h="CLOSE_EDIT_TASK",T="EDIT_TASK_DETAIL",f="SAVE_EDIT_TASK",x="CHANGE_TASK_CHECK",v="ORDER_TASK",g={currentPage:"myTasks",isAddTaskOpen:!1,newTaskDetail:{title:"",deadlineDate:"",deadlineTime:"",comment:"",star:!1,checked:!1},tasks:[{title:"Test 1",deadlineDate:"2021-03-20",deadlineTime:"00:00",comment:"TEST",checked:!1},{title:"Test 2",comment:"TEST",checked:!0},{title:"Test 3",checked:!1}],editingTaskDetail:{}},N=(a(26),a(4)),D=a(5),C=a(7),y=a(6),A=function(){return{type:b}},w=function(){return{type:O}},E=function(){return{type:v}},S=a(0),_=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return Object(S.jsx)("div",{className:"header",children:Object(S.jsxs)("div",{className:"navbar",children:[Object(S.jsx)("div",{className:"nav-item".concat("myTasks"===this.props.currentPage?" active":""),onClick:function(){return e.props.setCurrentPage("myTasks")},children:"My Tasks"}),Object(S.jsx)("div",{className:"nav-item".concat("inProgress"===this.props.currentPage?" active":""),onClick:function(){return e.props.setCurrentPage("inProgress")},children:"In Progress"}),Object(S.jsx)("div",{className:"nav-item".concat("completed"===this.props.currentPage?" active":""),onClick:function(){return e.props.setCurrentPage("completed")},children:"Completed"})]})})}}]),a}(n.a.Component),P=Object(r.b)((function(e){return{currentPage:e.currentPage}}),{setCurrentPage:function(e){return{type:o,page:e}}})(_),K=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return Object(S.jsx)(s.Fragment,{children:this.props.isAddTaskOpen?null:Object(S.jsxs)("div",{className:"btn-add-task",onClick:function(){return e.props.onAddTaskClick()},children:[Object(S.jsx)("i",{className:"fas fa-plus"})," Add Task"]})})}}]),a}(n.a.Component),F=Object(r.b)((function(e){return{isAddTaskOpen:e.isAddTaskOpen}}),{onAddTaskClick:function(){return{type:u}}})(K),I=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return Object(S.jsx)(s.Fragment,{children:Object(S.jsxs)("div",{className:"add-task-open",children:[Object(S.jsxs)("div",{className:"add-task-header",children:[Object(S.jsx)("input",{className:"task-checkbox",type:"checkbox",disabled:!0}),Object(S.jsx)("input",{className:"task-title-input",onChange:function(t){return e.props.onNewTaskChange("title",t.target.value)},placeholder:"Type Something Here..."}),Object(S.jsx)("i",{className:"fa-star ".concat(this.props.newTaskDetail.star?"star fas":"far"),onClick:function(){return e.props.onNewTaskChange("star")}}),Object(S.jsx)("i",{className:"fas fa-pen active"})]}),Object(S.jsxs)("div",{className:"add-task-detail",children:[Object(S.jsxs)("div",{className:"task-detail-item",children:[Object(S.jsxs)("div",{className:"task-detail-title",children:[Object(S.jsx)("div",{className:"detail-title-icon",children:Object(S.jsx)("i",{className:"far fa-calendar-alt"})}),Object(S.jsx)("label",{children:"Deadline"})]}),Object(S.jsxs)("div",{className:"task-detail-form",children:[Object(S.jsx)("input",{type:"date",onChange:function(t){return e.props.onNewTaskChange("deadlineDate",t.target.value)}}),Object(S.jsx)("input",{type:"time",onChange:function(t){return e.props.onNewTaskChange("deadlineTime",t.target.value)}})]})]}),Object(S.jsxs)("div",{className:"task-detail-item",children:[Object(S.jsxs)("div",{className:"task-detail-title",children:[Object(S.jsx)("div",{className:"detail-title-icon",children:Object(S.jsx)("i",{className:"far fa-file"})}),Object(S.jsx)("label",{htmlFor:"file",onClick:function(){return alert("\u6a94\u6848\u4e0a\u50b3\u529f\u80fd\u958b\u767c\u4e2d\uff01")},children:"File"})]}),Object(S.jsx)("div",{className:"task-detail-form",children:Object(S.jsx)("input",{type:"file",id:"file",disabled:!0,onClick:function(){return alert("\u6a94\u6848\u4e0a\u50b3\u529f\u80fd\u958b\u767c\u4e2d\uff01")}})})]}),Object(S.jsxs)("div",{className:"task-detail-item",children:[Object(S.jsxs)("div",{className:"task-detail-title",children:[Object(S.jsx)("div",{className:"detail-title-icon",children:Object(S.jsx)("i",{className:"far fa-comment-dots"})}),Object(S.jsx)("label",{htmlFor:"textarea",children:"Comment"})]}),Object(S.jsx)("div",{className:"task-detail-form",children:Object(S.jsx)("textarea",{type:"text",id:"textarea",placeholder:"Type your memo here...",onChange:function(t){return e.props.onNewTaskChange("comment",t.target.value)}})})]})]}),Object(S.jsxs)("div",{className:"add-task-buttons",children:[Object(S.jsxs)("button",{className:"task-button-cancel",onClick:function(){return e.props.onAddTaskCancel()},children:[Object(S.jsx)("i",{className:"fas fa-times"}),"Cancel"]}),Object(S.jsxs)("button",{className:"task-button-add",onClick:function(){e.props.onAddNewTask(),e.props.orderTasks()},children:[Object(S.jsx)("i",{className:"fas fa-plus"}),"Add Task"]})]})]})})}}]),a}(n.a.Component),R=Object(r.b)((function(e){return{newTaskDetail:e.newTaskDetail}}),{onAddTaskCancel:A,onNewTaskChange:function(e,t){return{type:k,key:e,value:t}},onAddNewTask:w,orderTasks:E})(I),L=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"componentDidMount",value:function(){this.props.orderTasks()}},{key:"renderTitle",value:function(e){var t=this;return e.editing?Object(S.jsx)("input",{className:"task-title-input",value:this.props.editingTaskDetail.title,onChange:function(e){return t.props.editTaskDetail("title",e.target.value)}}):Object(S.jsx)("div",{className:"task-title".concat(e.checked?" checked":""),children:Object(S.jsx)("p",{children:e.title})})}},{key:"renderProps",value:function(e){if((e.deadlineDate||e.comment)&&!e.editing)return Object(S.jsxs)("div",{className:"task-props",children:[e.deadlineDate&&Object(S.jsxs)("div",{className:"task-props-date",title:e.deadlineTime?e.deadlineDate+" "+e.deadlineTime:e.deadlineDate,children:[Object(S.jsx)("i",{className:"far fa-calendar-alt"}),Object(S.jsx)("p",{children:e.deadlineDate})]}),e.comment&&Object(S.jsx)("div",{className:"task-props-comment",title:e.comment,children:Object(S.jsx)("i",{className:"far fa-comment-dots"})})]})}},{key:"renderDetail",value:function(e){var t=this;return Object(S.jsxs)(s.Fragment,{children:[Object(S.jsxs)("div",{className:"add-task-detail",children:[Object(S.jsxs)("div",{className:"task-detail-item",children:[Object(S.jsxs)("div",{className:"task-detail-title",children:[Object(S.jsx)("div",{className:"detail-title-icon",children:Object(S.jsx)("i",{className:"far fa-calendar-alt"})}),Object(S.jsx)("label",{children:"Deadline"})]}),Object(S.jsxs)("div",{className:"task-detail-form",children:[Object(S.jsx)("input",{type:"date",value:this.props.editingTaskDetail.deadlineDate,onChange:function(e){return t.props.editTaskDetail("deadlineDate",e.target.value)}}),Object(S.jsx)("input",{type:"time",value:this.props.editingTaskDetail.deadlineTime,onChange:function(e){return t.props.editTaskDetail("deadlineTime",e.target.value)}})]})]}),Object(S.jsxs)("div",{className:"task-detail-item",children:[Object(S.jsxs)("div",{className:"task-detail-title",children:[Object(S.jsx)("div",{className:"detail-title-icon",children:Object(S.jsx)("i",{className:"far fa-file"})}),Object(S.jsx)("label",{htmlFor:"file",children:"File"})]}),Object(S.jsx)("div",{className:"task-detail-form",children:Object(S.jsx)("input",{type:"file",id:"file"})})]}),Object(S.jsxs)("div",{className:"task-detail-item",children:[Object(S.jsxs)("div",{className:"task-detail-title",children:[Object(S.jsx)("div",{className:"detail-title-icon",children:Object(S.jsx)("i",{className:"far fa-comment-dots"})}),Object(S.jsx)("label",{htmlFor:"textarea",children:"Comment"})]}),Object(S.jsx)("div",{className:"task-detail-form",children:Object(S.jsx)("textarea",{type:"text",id:"textarea",placeholder:"Type your memo here...",value:this.props.editingTaskDetail.comment,onChange:function(e){return t.props.editTaskDetail("comment",e.target.value)}})})]})]}),Object(S.jsxs)("div",{className:"add-task-buttons",children:[Object(S.jsxs)("button",{className:"task-button-cancel",onClick:function(){return t.props.closeEditTask(e)},children:[Object(S.jsx)("i",{className:"fas fa-times"}),"Cancel"]}),Object(S.jsxs)("button",{className:"task-button-add",onClick:function(){t.props.saveEditTask(e),t.props.orderTasks()},children:[Object(S.jsx)("i",{className:"far fa-save"}),"Save"]})]})]})}},{key:"renderCheckbox",value:function(e,t){var a=this;return e.editing?Object(S.jsx)("input",{className:"task-checkbox",type:"checkbox",checked:e.checked,onChange:function(e){a.props.editTaskDetail("check",e.target.checked),a.props.orderTasks()}}):Object(S.jsx)("input",{className:"task-checkbox",type:"checkbox",checked:e.checked,onChange:function(e){a.props.changeTaskCheck(e.target.checked,t),a.props.orderTasks()}})}},{key:"renderStar",value:function(e,t){var a=this;return e.editing?Object(S.jsx)("i",{className:"fa-star ".concat(this.props.editingTaskDetail.star?"star fas":"far"),onClick:function(){a.props.editTaskDetail("star",!e.star),a.props.orderTasks()}}):Object(S.jsx)("i",{className:"fa-star ".concat(e.star?"star fas":"far"),onClick:function(){a.props.setTaskStar(t),a.props.orderTasks()}})}},{key:"getTasks",value:function(e){var t=this;switch(this.props.currentPage){case"inProgress":return e.map((function(e,a){return Object(S.jsxs)("div",{className:"".concat(e.editing?"add-task-open":"task-item").concat(e.star?" star":"").concat(e.checked?" hide":""),children:[Object(S.jsxs)("div",{className:e.editing?"add-task-header":"task-header",children:[t.renderCheckbox(e,a),t.renderTitle(e),t.renderStar(e,a),Object(S.jsx)("i",{className:"fas fa-pen ".concat(e.editing?"active":""),onClick:function(){return t.props.openEditTask(a)}})]}),t.renderProps(e),e.editing?t.renderDetail(a):null]},e.title)}));case"completed":return e.map((function(e,a){return Object(S.jsxs)("div",{className:"".concat(e.editing?"add-task-open":"task-item").concat(e.star?" star":"").concat(e.checked?"":" hide"),children:[Object(S.jsxs)("div",{className:e.editing?"add-task-header":"task-header",children:[t.renderCheckbox(e,a),t.renderTitle(e),t.renderStar(e,a),Object(S.jsx)("i",{className:"fas fa-pen ".concat(e.editing?"active":""),onClick:function(){return t.props.openEditTask(a)}})]}),t.renderProps(e),e.editing?t.renderDetail(a):null]},e.title)}));default:return e.map((function(e,a){return Object(S.jsxs)("div",{className:"".concat(e.editing?"add-task-open":"task-item").concat(e.star?" star":""),children:[Object(S.jsxs)("div",{className:e.editing?"add-task-header":"task-header",children:[t.renderCheckbox(e,a),t.renderTitle(e),t.renderStar(e,a),Object(S.jsx)("i",{className:"fas fa-pen ".concat(e.editing?"active":""),onClick:function(){return t.props.openEditTask(a)}})]}),t.renderProps(e),e.editing?t.renderDetail(a):null]},e.title)}))}}},{key:"render",value:function(){return Object(S.jsxs)(s.Fragment,{children:[this.props.isAddTaskOpen?Object(S.jsx)(R,{}):Object(S.jsx)(F,{}),Object(S.jsx)("div",{className:"tasks",children:this.getTasks(this.props.tasks)})]})}}]),a}(n.a.Component),H=Object(r.b)((function(e){return{currentPage:e.currentPage,isAddTaskOpen:e.isAddTaskOpen,tasks:e.tasks,editingTaskDetail:e.editingTaskDetail}}),{onAddTaskCancel:A,onAddNewTask:w,setTaskStar:function(e){return{type:p,index:e}},openEditTask:function(e){return{type:m,index:e}},closeEditTask:function(e){return{type:h,index:e}},editTaskDetail:function(e,t){return{type:T,key:e,value:t}},saveEditTask:function(e){return{type:f,index:e}},changeTaskCheck:function(e,t){return{type:x,check:e,index:t}},orderTasks:E})(L),G=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(P,{}),Object(S.jsx)("div",{className:"body",children:Object(S.jsx)(H,{})})]})}}]),a}(n.a.Component),M=Object(r.b)((function(e){return{currentPage:e.currentPage}}),null)(G),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,U=Object(d.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.page,tasks:e.tasks.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{editing:!1})}))});case u:return Object(j.a)(Object(j.a)({},e),{},{isAddTaskOpen:!0});case b:return Object(j.a)(Object(j.a)({},e),{},{isTypingTitle:!1,isAddTaskOpen:!1});case k:switch(t.key){case"title":return Object(j.a)(Object(j.a)({},e),{},{newTaskDetail:Object(j.a)(Object(j.a)({},e.newTaskDetail),{},{title:t.value})});case"deadlineDate":return Object(j.a)(Object(j.a)({},e),{},{newTaskDetail:Object(j.a)(Object(j.a)({},e.newTaskDetail),{},{deadlineDate:t.value})});case"deadlineTime":return Object(j.a)(Object(j.a)({},e),{},{newTaskDetail:Object(j.a)(Object(j.a)({},e.newTaskDetail),{},{deadlineTime:t.value})});case"comment":return Object(j.a)(Object(j.a)({},e),{},{newTaskDetail:Object(j.a)(Object(j.a)({},e.newTaskDetail),{},{comment:t.value})});case"star":return Object(j.a)(Object(j.a)({},e),{},{newTaskDetail:Object(j.a)(Object(j.a)({},e.newTaskDetail),{},{star:!e.newTaskDetail.star})});default:return e}case O:return Object(j.a)(Object(j.a)({},e),{},{tasks:[].concat(Object(l.a)(e.tasks),[e.newTaskDetail]),newTaskDetail:{title:"",deadlineDate:"",deadlineTime:"",comment:"",star:!1,checked:!1},isTypingTitle:!1,isAddTaskOpen:!1});case p:return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.map((function(e,a){return a===t.index?Object(j.a)(Object(j.a)({},e),{},{star:!e.star}):e}))});case m:return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.map((function(e,a){return a===t.index?Object(j.a)(Object(j.a)({},e),{},{editing:!0}):Object(j.a)(Object(j.a)({},e),{},{editing:!1})})),editingTaskDetail:e.tasks[t.index]});case h:return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.map((function(e,a){return a===t.index?Object(j.a)(Object(j.a)({},e),{},{editing:!1}):e})),editingTaskDetail:{}});case T:switch(t.key){case"title":return Object(j.a)(Object(j.a)({},e),{},{editingTaskDetail:Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{title:t.value})});case"deadlineDate":return Object(j.a)(Object(j.a)({},e),{},{editingTaskDetail:Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{deadlineDate:t.value})});case"deadlineTime":return Object(j.a)(Object(j.a)({},e),{},{editingTaskDetail:Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{deadlineTime:t.value})});case"comment":return Object(j.a)(Object(j.a)({},e),{},{editingTaskDetail:Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{comment:t.value})});case"star":return Object(j.a)(Object(j.a)({},e),{},{editingTaskDetail:Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{star:t.value})});case"check":return Object(j.a)(Object(j.a)({},e),{},{editingTaskDetail:Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{checked:t.value})});default:return e}case f:return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.map((function(a,s){return s===t.index?Object(j.a)(Object(j.a)({},e.editingTaskDetail),{},{editing:!1}):a})),editingTaskDetail:{}});case x:return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.map((function(e,a){return a===t.index?Object(j.a)(Object(j.a)({},e),{},{checked:t.check}):e}))});case v:var a=e.tasks.filter((function(e){return e.star&&!e.checked?e:null})),s=e.tasks.filter((function(e){return e.star||e.checked?null:e})),n=e.tasks.filter((function(e){return e.star&&e.checked?e:null})),c=e.tasks.filter((function(e){return!e.star&&e.checked?e:null}));return Object(j.a)(Object(j.a)({},e),{},{tasks:[].concat(Object(l.a)(a),Object(l.a)(s),Object(l.a)(n),Object(l.a)(c))});default:return e}}),J(Object(d.a)()));i.a.render(Object(S.jsx)(r.a,{store:U,children:Object(S.jsx)(M,{})}),document.querySelector("#root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.de48f17f.chunk.js.map