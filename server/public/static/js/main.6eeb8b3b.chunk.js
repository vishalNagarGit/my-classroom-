(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(37),i=c.n(a),l=c(10),r=c(5),o=c(4),d=(c(68),c(2)),j="IS_USER_LOGGED_IN",u="SET_USER_ID",b="SET_SOCKET",m=(c(69),c(12)),p=c.n(m),h=c(0);var O=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.signup.is_user_logged_in}));Object(s.useEffect)((function(){fetch("/auth").then((function(e){return e.json()})).then((function(t){200==t.status&&(console.log("auth called",t),e({type:j,payload:!0}),e({type:u,payload:t.userId}))}))}),[t]);var c=Object(s.useState)(""),n=Object(d.a)(c,2),a=(n[0],n[1]),i=Object(s.useState)(""),r=Object(d.a)(i,2),b=(r[0],r[1]),m=Object(s.useState)(""),O=Object(d.a)(m,2),x=O[0],f=O[1],v=Object(s.useState)(""),g=Object(d.a)(v,2),y=g[0],w=g[1],C=function(e){switch(e.target.name){case"username":a(e.target.value);break;case"email":f(e.target.value);break;case"password":w(e.target.value);break;case"repeatPassword":b(e.target.value)}};return Object(h.jsx)("div",{className:"outer",children:Object(h.jsx)("div",{className:"inner",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email",onChange:C}),Object(h.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(h.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:C})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",onClick:function(t){t.preventDefault(),p.a.post("/login",{email:x,password:y}).then((function(t){200==t.status&&(alert(t.data.msg),e({type:j,payload:!0}))})).catch((function(e){console.log(e),alert("wrong email or password")}))},children:"Submit"})," ",Object(h.jsx)("span",{style:{float:"right"},children:Object(h.jsx)("em",{children:Object(h.jsx)(l.b,{to:"/signup",children:"Signup"})})})]})})})};c(90);var x=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(d.a)(a,2),r=(i[0],i[1]),o=Object(s.useState)(""),j=Object(d.a)(o,2),u=j[0],b=j[1],m=Object(s.useState)(""),p=Object(d.a)(m,2),O=p[0],x=p[1],f=function(e){switch(e.target.name){case"username":n(e.target.value);break;case"email":b(e.target.value);break;case"password":x(e.target.value);break;case"repeatPassword":r(e.target.value)}};return Object(h.jsx)("div",{className:"outer",children:Object(h.jsx)("div",{className:"inner",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email",onChange:f,value:u}),Object(h.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputUsername",children:"Username"}),Object(h.jsx)("input",{type:"text",class:"form-control",id:"exampleInputUsername","aria-describedby":"useraname",placeholder:"Create Username",name:"username",onChange:f,value:c}),Object(h.jsx)("small",{id:"username",class:"form-text text-muted",children:"be creative."})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(h.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:f,value:O})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",onClick:function(e){e.preventDefault(),fetch("/register",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:c,password:O,email:u})}).then((function(e){return e.json()})).then((function(e){200==e.status?(alert("user created!! go to login!!"),n(""),b(""),x("")):409==e.status&&alert("user already exists!!")})).catch((function(e){return console.log(e)}))},children:"Submit"})," ",Object(h.jsx)("span",{style:{float:"right"},children:Object(h.jsx)("em",{children:Object(h.jsx)(l.b,{to:"/login",children:"Login"})})})]})})})};var f=function(){return Object(h.jsx)("div",{className:"",children:"check page"})};c(91);function v(){Object(o.c)((function(e){return e.signup.is_user_logged_in}));var e=Object(o.b)();return Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)("a",{class:"navbar-brand",href:"#",children:"MyClass"}),Object(h.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{class:"navbar-toggler-icon"})}),Object(h.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsx)("button",{type:"button",id:"logoutButton",class:"btn btn-outline-danger",onClick:function(){console.log("logout"),fetch("/logout").then((function(t){200==t.status&&e({type:j,payload:!1})}))},children:"Logout"})})]})})}var g=c(6),y=c(7),w=c(9),C=c(8),S=(c(92),c(23),function(e){Object(w.a)(c,e);var t=Object(C.a)(c);function c(){var e;Object(g.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).updateScreen=function(t){e.props.updateScreenProps(t)},e}return Object(y.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{id:"sidenav",children:Object(h.jsxs)("ul",{className:"options",children:[Object(h.jsx)("li",{onClick:function(){return e.updateScreen("profile")},children:Object(h.jsx)("i",{id:"profile",class:"fa fa-user-circle"})}),Object(h.jsx)("li",{onClick:function(){return e.updateScreen("teams")},children:Object(h.jsx)("i",{id:"teams",class:"fa fa-users"})}),Object(h.jsx)("li",{onClick:function(){return e.updateScreen("assignment")},children:Object(h.jsx)("i",{id:"assignment",class:"fa fa-file"})}),Object(h.jsx)("li",{id:"quizBuilder",onClick:function(){return e.updateScreen("quizBuilder")},children:Object(h.jsx)("i",{class:"fa fa-paperclip"})})]})})}}]),c}(n.a.Component));c(93);function q(){return Object(h.jsx)("div",{className:"profile-container",children:Object(h.jsx)("div",{class:"container rounded bg-white mt-5 mb-5",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-md-3 border-right",children:Object(h.jsxs)("div",{class:"d-flex flex-column align-items-center text-center p-3 py-5",children:[Object(h.jsx)("img",{class:"rounded-circle mt-5",width:"150px",src:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"}),Object(h.jsx)("span",{class:"font-weight-bold",children:"Edogaru"}),Object(h.jsx)("span",{class:"text-black-50",children:"edogaru@mail.com.my"}),Object(h.jsx)("span",{children:" "})]})}),Object(h.jsx)("div",{class:"col-md-5 border-right",children:Object(h.jsxs)("div",{class:"p-3 py-5",children:[Object(h.jsx)("div",{class:"d-flex justify-content-between align-items-center mb-3",children:Object(h.jsx)("h4",{class:"text-right",children:"Profile Settings"})}),Object(h.jsxs)("div",{class:"row mt-2",children:[Object(h.jsxs)("div",{class:"col-md-6",children:[Object(h.jsx)("label",{class:"labels",children:"Name"}),Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"first name",value:""})]}),Object(h.jsxs)("div",{class:"col-md-6",children:[Object(h.jsx)("label",{class:"labels",children:"Surname"}),Object(h.jsx)("input",{type:"text",class:"form-control",value:"",placeholder:"surname"})]})]}),Object(h.jsxs)("div",{class:"row mt-3",children:[Object(h.jsxs)("div",{class:"col-md-12",children:[Object(h.jsx)("label",{class:"labels",children:"Mobile Number"}),Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"enter phone number",value:""})]}),Object(h.jsxs)("div",{class:"col-md-12",children:[Object(h.jsx)("label",{class:"labels",children:"Email ID"}),Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"enter email id",value:""})]})]}),Object(h.jsxs)("div",{class:"row mt-3",children:[Object(h.jsxs)("div",{class:"col-md-6",children:[Object(h.jsx)("label",{class:"labels",children:"Country"}),Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"country",value:""})]}),Object(h.jsxs)("div",{class:"col-md-6",children:[Object(h.jsx)("label",{class:"labels",children:"State/Region"}),Object(h.jsx)("input",{type:"text",class:"form-control",value:"",placeholder:"state"})]})]}),Object(h.jsx)("div",{class:"mt-5 text-center",children:Object(h.jsx)("button",{class:"btn btn-primary profile-button",type:"button",children:"Save Profile"})})]})}),Object(h.jsx)("div",{class:"col-md-4",children:Object(h.jsxs)("div",{class:"p-3 py-5",children:[Object(h.jsxs)("div",{class:"d-flex justify-content-between align-items-center experience",children:[Object(h.jsx)("span",{children:"Edit Experience"}),Object(h.jsxs)("span",{class:"border px-3 p-1 add-experience",children:[Object(h.jsx)("i",{class:"fa fa-plus"}),"\xa0Experience"]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{class:"col-md-12",children:[Object(h.jsx)("label",{class:"labels",children:"Experience in Designing"}),Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"experience",value:""})]})," ",Object(h.jsx)("br",{}),Object(h.jsxs)("div",{class:"col-md-12",children:[Object(h.jsx)("label",{class:"labels",children:"Additional Details"}),Object(h.jsx)("input",{type:"text",class:"form-control",placeholder:"additional details",value:""})]})]})})]})})})}c(94),c(95);function k(e){return Object(h.jsxs)("div",{className:"quiz-tile",children:[Object(h.jsx)("p",{children:"".concat(e.quiz.quizName,"  From ").concat(e.quiz.teamName)}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){e.setQuizIndex(e.index),e.setQuizActive(!0)},children:"Take Quiz"})]})}c(96),c(97);function N(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),n=c[0],a=c[1];function i(t){t.target.value==e.answer?(a(!0),e.setScore((function(e){return e+1}))):(console.log(n),n&&(a(!1),e.setScore((function(e){return e-1}))))}return Object(h.jsxs)("div",{className:"question",children:[Object(h.jsxs)("p",{children:["Question 1: ",e.question]}),Object(h.jsx)("div",{class:"form-check",children:Object(h.jsxs)("label",{class:"form-check-label",children:[Object(h.jsx)("input",{type:"radio",class:"form-check-input",value:e.optionA,onChange:i,name:e.index}),e.optionA]})}),Object(h.jsx)("div",{class:"form-check",children:Object(h.jsxs)("label",{class:"form-check-label",children:[Object(h.jsx)("input",{type:"radio",class:"form-check-input",value:e.optionB,onChange:i,name:e.index}),e.optionB]})}),Object(h.jsx)("div",{class:"form-check disabled",children:Object(h.jsxs)("label",{class:"form-check-label",children:[Object(h.jsx)("input",{type:"radio",class:"form-check-input",value:e.optionC,onChange:i,name:e.index}),e.optionC]})}),Object(h.jsx)("div",{class:"form-check disabled",children:Object(h.jsxs)("label",{class:"form-check-label",children:[Object(h.jsx)("input",{type:"radio",class:"form-check-input",value:e.optionD,onChange:i,name:e.index}),e.optionD]})})]})}function I(e){var t=Object(s.useState)(0),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(h.jsxs)("div",{className:"quiz-question-list",children:[Object(h.jsx)("h4",{style:{alignSelf:"center"},children:Object(h.jsx)("u",{children:e.quiz.quizName})}),e.quiz.questions.map((function(e,t){return Object(h.jsx)(N,{question:e.question,optionA:e.optionA,optionB:e.optionB,optionC:e.optionC,optionD:e.optionD,answer:e.answer,setScore:a,score:n,index:t})})),Object(h.jsx)("button",{type:"button",class:"btn btn-success submit-button",onClick:function(){var t={teamId:e.quiz.teamId,quizId:e.quiz._id,teamName:e.quiz.teamName,quizName:e.quiz.quizName,score:n};p.a.post("/quiz/submitresponse",t).then((function(t){200==t.status&&(alert(t.data),e.setQuizActive(!1))})).catch((function(e){console.log(e),alert("error while submitting quiz")}))},children:"Submit Quiz"})]})}c(98);function z(e){return Object(h.jsxs)("div",{className:"quiz-tile",children:[Object(h.jsx)("p",{children:"".concat(e.score.quizName,"  From ").concat(e.score.teamName)}),Object(h.jsxs)("h6",{children:["your score: ",e.score.score]})]})}function E(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(d.a)(a,2),l=i[0],r=i[1],j=Object(s.useState)([]),u=Object(d.a)(j,2),b=u[0],m=u[1],p=Object(s.useState)(-1),O=Object(d.a)(p,2),x=O[0],f=O[1],v=Object(o.c)((function(e){return e.socket.socket})),g=Object(o.c)((function(e){return e.signup.userId}));function y(){fetch("/quiz/todoquizzes").then((function(e){return e.json()})).then((function(e){console.log(e),r(e)})),fetch("/score/allscores").then((function(e){return e.json()})).then((function(e){console.log("scores",e),m(e)}))}return v.on("new-quiz",(function(){y(),console.log("new-quiz called")})),Object(s.useEffect)((function(){y(),v.emit("join-all-teams",g)}),[v,c]),Object(h.jsxs)("div",{className:"assignment-container",children:[Object(h.jsxs)("div",{className:"assignment-list",children:[!c&&Object(h.jsx)("h4",{children:Object(h.jsx)("em",{children:Object(h.jsx)("u",{children:"To do quizzes"})})}),!c&&0==l.length&&Object(h.jsx)("p",{children:"good job, no pending quiz!!"}),!c&&l.map((function(e,t){return Object(h.jsx)(k,{setQuizActive:n,quiz:e,index:t,setQuizIndex:f})})),!c&&Object(h.jsx)("h4",{children:Object(h.jsx)("em",{children:Object(h.jsx)("u",{children:"Attempted quizzes"})})}),!c&&0==b.length&&Object(h.jsx)("p",{children:"no quizzes given yet"}),!c&&b.map((function(e,t){return Object(h.jsx)(z,{score:e})}))]}),Object(h.jsx)("div",{className:"quiz-question-list",children:c&&Object(h.jsx)(I,{quiz:l[x],setQuizActive:n})})]})}c(99),c(100);function A(e){return Object(h.jsxs)("div",{class:"card",style:{width:"18rem"},onClick:function(t){e.setClickedTeamId(e.teamid)},children:[Object(h.jsx)("h2",{class:"card-title",children:e.teamname}),Object(h.jsx)("p",{class:"card-text",children:e.description})]})}c(101);function T(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(h.jsxs)("div",{class:"card joinCard",style:{width:"18rem"},children:[Object(h.jsx)("div",{class:"modal fade",id:"example",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{class:"modal-dialog",role:"document",children:Object(h.jsxs)("div",{class:"modal-content",children:[Object(h.jsxs)("div",{class:"modal-header",children:[Object(h.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"JoinTeam"}),Object(h.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7 "})})]}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(t.target.teamcode.value);var c={teamCode:t.target.teamcode.value};p.a.post("/team/join",c).then((function(t){console.log(t),200==t.status&&(alert(t.data),a(""),e.setjoinedOrCreated(!0))})).catch((function(e){console.log(e),alert("error while creating team")}))},children:[Object(h.jsx)("input",{type:"text",name:"teamcode",value:n,onChange:function(e){return a(e.target.value)},className:"teamname",placeholder:"Enter team code"}),Object(h.jsxs)("div",{class:"modal-footer",children:[Object(h.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Join team"})]})]})]})})}),Object(h.jsx)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#example",children:"Join Team"})]})}c(102);function D(e){var t=Object(s.useState)(),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(),l=Object(d.a)(i,2),r=l[0],o=l[1];return Object(h.jsxs)("div",{class:"card createCard",style:{width:"18rem"},children:[Object(h.jsx)("div",{class:"modal fade",id:"exampleid",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{class:"modal-dialog",role:"document",children:Object(h.jsxs)("div",{class:"modal-content",children:[Object(h.jsxs)("div",{class:"modal-header",children:[Object(h.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Create Team"}),Object(h.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7 "})})]}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={teamName:t.target.teamname.value,teamDescription:t.target.teamdescription.value};p.a.post("/team/create",c).then((function(t){console.log(t),200==t.status&&(alert(t.data),a(""),o(""),e.setjoinedOrCreated(!0))})).catch((function(e){console.log(e),alert("error while creating team")}))},children:[Object(h.jsx)("input",{type:"text",name:"teamname",value:n,onChange:function(e){return a(e.target.value)},className:"teamname",placeholder:"Enter team name"}),Object(h.jsx)("input",{type:"text",name:"teamdescription",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Enter team description"}),Object(h.jsxs)("div",{class:"modal-footer",children:[Object(h.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Create team"})]})]})]})})}),Object(h.jsx)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#exampleid",children:"Create Team"})]})}c(103),c(104);function _(e){return Object(h.jsx)("div",{className:"message",style:{alignItems:e.msgUserId==e.currUserId?"flex-end":"flex-start"},children:Object(h.jsx)("div",{class:"messagecard",children:Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsxs)("h6",{class:"card-title",children:[Object(h.jsx)("span",{children:e.username})," ",Object(h.jsx)("span",{children:Object(h.jsx)("pre",{children:e.timestamp})})]}),"file"!=e.type&&Object(h.jsx)("p",{class:"card-text",children:e.message}),"file"==e.type&&Object(h.jsx)("p",{class:"card-text",children:Object(h.jsx)("a",{href:e.message,children:e.fileName})})]})})})}c(105);function P(e){Object(o.b)();var t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(""),l=Object(d.a)(i,2),r=l[0],j=l[1],u=Object(s.useState)(),b=Object(d.a)(u,2),m=b[0],O=b[1],x=Object(o.c)((function(e){return e.socket.socket})),f=Object(o.c)((function(e){return e.signup.userId}));function v(){fetch("/message/receiveMessage/"+e.clickedTeamId).then((function(e){return e.json()})).then((function(e){a(e),console.log(e)}))}function g(){var e=new Date;return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()}return x.on("new-msg",(function(){return v()})),Object(s.useEffect)((function(){""!=x&&x.emit("join-room",e.clickedTeamId),v()}),[x]),Object(h.jsxs)("div",{className:"chat-box",children:[Object(h.jsx)("div",{className:"message-box",children:n.map((function(e){return Object(h.jsx)(_,{username:e.username,email:e.email,message:e.message,timestamp:e.timestamp,type:e.type,fileName:e.fileName,currUserId:f,msgUserId:e.userId})}))}),Object(h.jsx)("div",{className:"flex-grow-1 py-3 px-4 border-top type-box",children:Object(h.jsxs)("div",{class:"input-group",children:[Object(h.jsx)("input",{type:"text",value:r,name:"newmessage",class:"form-control",placeholder:"Type your message",onChange:function(e){j(e.target.value)}}),Object(h.jsx)("button",{class:"btn btn-primary",onClick:function(t){var c=g();console.log(c);var s={teamId:e.clickedTeamId,message:r,timestamp:c};p.a.post("/message/sendMessage",s).then((function(t){200==t.status&&x.emit("new-msg",e.clickedTeamId)})).catch((function(e){console.log(e)})),j("")},children:"Send"}),Object(h.jsxs)("form",{action:"",id:"form1",children:[Object(h.jsx)("input",{type:"file",id:"myFile",name:"filename",onChange:function(e){var t=e.target.files[0];console.log(e.target.value),O(t)}}),Object(h.jsx)("button",{type:"submit",form:"form1",onClick:function(t){t.preventDefault(),console.log(m);var c=new FormData;c.append("file",m),c.append("teamId",e.clickedTeamId),c.append("datetime",g()),console.log(t.target.result),p()({method:"post",url:"/message/sendFile",data:c,headers:{"Content-Type":"multipart/form-data"}}).then((function(c){200==c.status&&(console.log(c),t.target.value="",x.emit("new-msg",e.clickedTeamId))})).catch((function(e){console.log(e),alert("error in upload")}))},children:"submit"})]})]})})]})}function B(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)([]),l=Object(d.a)(i,2),r=l[0],j=l[1],u=Object(s.useState)(!1),b=Object(d.a)(u,2),m=b[0],p=b[1],O=Object(s.useState)(""),x=Object(d.a)(O,2),f=x[0],v=x[1];Object(o.c)((function(e){return e.signup.userId}));return Object(s.useEffect)((function(){fetch("/team/joinedteams").then((function(e){return e.json()})).then((function(e){console.log(e),a(e)})),fetch("/team/myteams").then((function(e){return e.json()})).then((function(e){console.log("myteams",e),j(e)})),p(!1)}),[m]),Object(h.jsxs)("div",{className:"team-wrapper",children:[""==f&&Object(h.jsxs)("div",{className:"team",children:[Object(h.jsx)("h4",{children:Object(h.jsx)("em",{children:Object(h.jsx)("u",{children:"Create or Join Team"})})}),Object(h.jsxs)("div",{className:"joinOrCreate",children:[Object(h.jsx)(D,{setjoinedOrCreated:p}),Object(h.jsx)(T,{setjoinedOrCreated:p})]}),Object(h.jsx)("h4",{children:Object(h.jsx)("em",{children:Object(h.jsx)("u",{children:"Joined Teams"})})}),Object(h.jsx)("div",{className:"joinedTeams",children:n.map((function(e){return Object(h.jsx)(A,{teamname:e.teamName,description:e.description,teamid:e._id,setClickedTeamId:v})}))}),Object(h.jsx)("h4",{children:Object(h.jsx)("em",{children:Object(h.jsx)("u",{children:"Created Teams"})})}),Object(h.jsx)("div",{className:"myTeams",children:r.map((function(e){return Object(h.jsx)(A,{teamname:e.teamName,description:e.description,teamid:e._id,setClickedTeamId:v})}))})]}),""!=f&&Object(h.jsx)(P,{clickedTeamId:f})]})}c(106);c(107);var Q=c(59);c(108);function M(e){var t=Object(s.useState)(""),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(""),l=Object(d.a)(i,2),r=l[0],o=l[1],j=Object(s.useState)(""),u=Object(d.a)(j,2),b=u[0],m=u[1],p=Object(s.useState)(""),O=Object(d.a)(p,2),x=O[0],f=O[1],v=Object(s.useState)(""),g=Object(d.a)(v,2),y=g[0],w=g[1],C=Object(s.useState)(""),S=Object(d.a)(C,2),q=S[0],k=S[1];function N(e){var t=[e.target.name,e.target.value],c=t[1];switch(t[0]){case"question":a(c);break;case"optionA":o(c);break;case"optionB":m(c);break;case"optionC":f(c);break;case"optionD":w(c);break;case"correct":k(c)}}return Object(h.jsx)("div",{className:"question-form-container",children:Object(h.jsxs)("form",{className:"question-form",onSubmit:function(t){t.preventDefault(),e.setQuestions((function(e){return[].concat(Object(Q.a)(e),[{question:n,optionA:r,optionB:b,optionC:x,optionD:y,answer:q}])})),k(""),o(""),m(""),f(""),w(""),a("")},children:[Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"inputEmail3",class:"col-sm-2 col-form-label",children:"Question:"}),Object(h.jsx)("div",{class:"col-sm-10",children:Object(h.jsx)("input",{type:"text",class:"form-control form-control-sm",placeholder:"Enter question...",value:n,name:"question",onChange:N,required:!0})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",class:"col-sm-2 col-form-label",children:"Option 1:"}),Object(h.jsx)("div",{class:"col-sm-10",children:Object(h.jsx)("input",{type:"text",class:"form-control form-control-sm",placeholder:"option A",value:r,name:"optionA",onChange:N,required:!0})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",class:"col-sm-2 col-form-label",children:"Option 2:"}),Object(h.jsx)("div",{class:"col-sm-10",children:Object(h.jsx)("input",{type:"text",class:"form-control form-control-sm",placeholder:"option B",value:b,name:"optionB",onChange:N,required:!0})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",class:"col-sm-2 col-form-label",children:"Option 3:"}),Object(h.jsx)("div",{class:"col-sm-10",children:Object(h.jsx)("input",{type:"text",class:"form-control form-control-sm",placeholder:"option C",value:x,name:"optionC",onChange:N,required:!0})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",class:"col-sm-2 col-form-label",children:"Option 4:"}),Object(h.jsx)("div",{class:"col-sm-10",children:Object(h.jsx)("input",{type:"text",class:"form-control form-control-sm",placeholder:"option D",value:y,name:"optionD",onChange:N,required:!0})})]}),Object(h.jsxs)("div",{class:"form-group row",children:[Object(h.jsx)("label",{for:"inputPassword3",class:"col-sm-2 col-form-label",children:"Answer:"}),Object(h.jsx)("div",{class:"col-sm-8",children:Object(h.jsx)("input",{type:"text",class:"form-control form-control-sm",placeholder:"correct Answer",value:q,name:"correct",onChange:N,required:!0})}),Object(h.jsx)("button",{type:"submit",class:"col-sm-2 btn btn-primary",children:"Add"})]})]})})}c(109);function U(e){return Object(h.jsxs)("div",{className:"question",children:[Object(h.jsxs)("p",{children:["Question 1: ",e.question]}),Object(h.jsxs)("p",{children:["option A : ",e.optionA]}),Object(h.jsxs)("p",{children:["option B : ",e.optionB]}),Object(h.jsxs)("p",{children:["option C : ",e.optionC]}),Object(h.jsxs)("p",{children:["option D : ",e.optionD]}),Object(h.jsxs)("p",{children:["Answer   : ",e.Answer]})]})}function J(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(d.a)(a,2),l=i[0],r=i[1],j=Object(s.useState)([]),u=Object(d.a)(j,2),b=u[0],m=u[1],O=Object(s.useState)({teamId:"default",teamName:""}),x=Object(d.a)(O,2),f=x[0],v=x[1],g=Object(o.c)((function(e){return e.socket.socket}));return Object(s.useEffect)((function(){fetch("/team/createdteams").then((function(e){return e.json()})).then((function(e){m(e)}))}),[]),Object(h.jsxs)("div",{className:"quizBuilder-container",children:[Object(h.jsxs)("div",{className:"asg-team",children:[Object(h.jsx)("input",{type:"text",value:c,id:"asg-name",onChange:function(e){n(e.target.value)},placeholder:"Assignment Name"}),Object(h.jsxs)("select",{class:"form-control form-control-sm",id:"teams-dropdown",onChange:function(e){var t="";b.forEach((function(c){c.teamId==e.target.value&&(t=c.teamName)})),v({teamId:e.target.value,teamName:t})},required:!0,value:f.teamId,children:[Object(h.jsx)("option",{value:"default",name:"",selected:!0,children:"choose team"}),b.map((function(e){return Object(h.jsxs)("option",{value:e.teamId,name:e.teamName,children:[e.teamName," "]})}))]})]}),Object(h.jsx)(M,{setQuestions:r}),Object(h.jsxs)("div",{className:"question-list",children:[Object(h.jsx)("h4",{style:{alignSelf:"center"},children:Object(h.jsx)("u",{children:"Preview"})}),0==l.length&&Object(h.jsx)("p",{style:{alignSelf:"center"},children:"No questions yet..."}),l.map((function(e){return Object(h.jsx)(U,{question:e.question,optionA:e.optionA,optionB:e.optionB,optionC:e.optionC,optionD:e.optionD,Answer:e.answer})}))]}),Object(h.jsx)("button",{type:"button",class:"btn btn-success",onClick:function(){if(""!=f)if(""!=c)if(0!=l.length){console.log("create quiz");var e={teamId:f.teamId,teamName:f.teamName,quizName:c,questions:l};p.a.post("/quiz/createquiz",e).then((function(e){console.log(e),200==e.status&&(alert(e.data),g.emit("new-quiz",f.teamId),r([]),n(""),v({teamId:"default",teamName:""}))})).catch((function(e){console.log(e),alert("error while creating quiz")}))}else alert("Add atleast one question!!");else alert("Give a name to assignment!!");else alert("choose the team!!")},children:"Create Quiz"})]})}var L=c(58);c(114);var F=function(){var e=Object(o.b)(),t=Object(s.useState)("profile"),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(o.c)((function(e){return e.signup.userId}));return Object(o.c)((function(e){return e.socket.socket})),Object(s.useEffect)((function(){var t=Object(L.a)("/");return e({type:b,payload:t}),t.emit("userId",i),function(){return t.close()}}),[i]),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"topnav",children:Object(h.jsx)(v,{})}),Object(h.jsxs)("div",{className:"bigbox",children:[Object(h.jsx)(S,{updateScreenProps:a}),"profile"===n&&Object(h.jsx)(q,{}),"teams"===n&&Object(h.jsx)(B,{}),"assignment"===n&&Object(h.jsx)(E,{}),"quizBuilder"===n&&Object(h.jsx)(J,{}),"chat"===n&&Object(h.jsx)(P,{})]})]})};c(115);var H=function(e){var t=Object(o.c)((function(e){return e.signup.is_user_logged_in}));return Object(o.b)(),Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{className:"page-content",children:[Object(h.jsx)(r.d,{children:Object(h.jsx)(r.b,{path:"/",render:function(){return t?Object(h.jsx)(r.a,{to:"/home"}):Object(h.jsx)(r.a,{to:"/login"})}})}),Object(h.jsx)(r.b,{path:"/home",component:F,exact:!0}),Object(h.jsx)(r.b,{path:"/login",component:O,exact:!0}),Object(h.jsx)(r.b,{path:"/check",component:f,exact:!0}),Object(h.jsx)(r.b,{path:"/signup",component:x,exact:!0})]})})})},G=c(31),R=c(57),W=c(26),K={is_user_logged_in:!1,userId:""};var Y={socket:""};var V=Object(G.b)({signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(W.a)(Object(W.a)({},e),{},{is_user_logged_in:t.payload});case u:return Object(W.a)(Object(W.a)({},e),{},{userId:t.payload});default:return e}},socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return t.type===b?Object(W.a)(Object(W.a)({},e),{},{socket:t.payload}):e}}),X=[R.a],Z=Object(G.d)(V,{},Object(G.c)(G.a.apply(void 0,X)));i.a.render(Object(h.jsx)(o.a,{store:Z,children:Object(h.jsx)(H,{store:Z})}),document.getElementById("root"))},68:function(e,t,c){},69:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.6eeb8b3b.chunk.js.map