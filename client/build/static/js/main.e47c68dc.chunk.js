(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,a,t){e.exports=t(120)},110:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(39),m=t.n(u),d=(t(109),t(110),t(22)),b=t(97),g=t(137),p=t(139),v=t(134),k=t(96),E=t(52),h=t(12),f=t(98),w=t(20),O=t.n(w),j=t(32),S=t(15),y=t(129),I=t(130),x=t(136),C=t(92),B=t(131),$=t(132),F=t(145),T=t(146),L=t(45),_=t(138),N=Object(_.a)(n||(n=Object(L.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),q=Object(_.a)(r||(r=Object(L.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!) {\n        addUser(username: $username, email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n                email\n            }\n        }\n    }\n"]))),P=Object(_.a)(o||(o=Object(L.a)(["\n    mutation saveBook($bookId: String!, $title: String!, $description: String, $authors: [String],  $image: String, $link: String) {\n        saveBook(bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link: $link) {\n            _id\n            username\n            email    \n            savedBooks {\n                bookId\n                authors\n                description\n                title\n                image\n                link\n            }\n        }\n    }\n"]))),D=Object(_.a)(l||(l=Object(L.a)(["\n    mutation removeBook($bookId: String!) {\n        removeBook(bookId: $bookId) {\n            _id\n            username\n            bookCount\n            savedBooks {\n                bookId\n                authors\n                description\n                title\n                image\n                link\n            }\n        }\n    }\n"]))),G=t(88),U=t(89),V=t(78),Y=t.n(V),J=new(function(){function e(){Object(G.a)(this,e)}return Object(U.a)(e,[{key:"getProfile",value:function(){return Y()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Y()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},z=function(){var e=Object(i.useState)([]),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(S.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(S.a)(u,2),b=m[0],g=m[1],p=Object(T.a)(P),v=Object(S.a)(p,1)[0];Object(i.useEffect)((function(){return function(){var e;(e=b).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var k=function(){var e=Object(j.a)(O.a.mark((function e(a){var t,r,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(O.a.mark((function e(a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),J.loggedIn()?J.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,v({variables:Object(d.a)({},n)});case 7:if(e.sent){e.next=10;break}throw new Error("something went wrong!");case 10:g([].concat(Object(f.a)(b),[n.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(I.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(x.a,{onSubmit:k},s.a.createElement(x.a.Row,null,s.a.createElement(C.a,{xs:12,md:8},s.a.createElement(x.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(C.a,{xs:12,md:4},s.a.createElement(B.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(I.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement($.a,null,t.map((function(e){return s.a.createElement(F.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(F.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(F.a.Body,null,s.a.createElement(F.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(F.a.Text,null,e.description),J.loggedIn()&&s.a.createElement(B.a,{disabled:null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return E(e.bookId)}},(null===b||void 0===b?void 0:b.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},A=t(142),M=Object(_.a)(c||(c=Object(L.a)(["\n    query me {\n        me {\n            _id\n            username\n            email\n            bookCount\n            savedBooks {\n                bookId\n                authors\n                description\n                title\n                image\n                link\n            }\n        }\n    }\n"]))),H=function(){var e=Object(A.a)(M),a=e.loading,t=e.error,n=e.data;t&&console.error(t);var r=Object(T.a)(D,{refetchQueries:[M]}),o=Object(S.a)(r,1)[0];console.log(n);var l=(null===n||void 0===n?void 0:n.me)||{};console.log(l);var c=function(){var e=Object(j.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.loggedIn()?J.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:a}});case 6:K(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}();return a?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(I.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(I.a,null,s.a.createElement("h2",null,l.savedBooks.length?"Viewing ".concat(l.savedBooks.length," saved ").concat(1===l.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement($.a,null,l.savedBooks.map((function(e){return s.a.createElement(F.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(F.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(F.a.Body,null,s.a.createElement(F.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(F.a.Text,null,e.description),s.a.createElement(B.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))})))))},Q=t(141),R=t(140),W=t(135),X=t(143),Z=t(49),ee=t(133),ae=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(S.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(S.a)(l,2),u=c[0],m=c[1],b=Object(T.a)(q),g=Object(S.a)(b,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Z.a)({},r,o)))},v=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,J.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(ee.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:t.username,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},te=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(S.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(S.a)(l,2),u=c[0],m=c[1],b=Object(T.a)(N),g=Object(S.a)(b,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Z.a)({},r,o)))},v=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,J.login(o.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(ee.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ne=function(){var e=Object(i.useState)(!1),a=Object(S.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(Q.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(I.a,{fluid:!0},s.a.createElement(Q.a.Brand,{as:E.b,to:"/"},"Google Books Search"),s.a.createElement(Q.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(Q.a.Collapse,{id:"navbar"},s.a.createElement(R.a,{className:"ml-auto"},s.a.createElement(R.a.Link,{as:E.b,to:"/"},"Search For Books"),J.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a.Link,{as:E.b,to:"/saved"},"See Your Books"),s.a.createElement(R.a.Link,{onClick:J.logout},"Logout")):s.a.createElement(R.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(W.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(X.a.Container,{defaultActiveKey:"login"},s.a.createElement(W.a.Header,{closeButton:!0},s.a.createElement(W.a.Title,{id:"signup-modal"},s.a.createElement(R.a,{variant:"pills"},s.a.createElement(R.a.Item,null,s.a.createElement(R.a.Link,{eventKey:"login"},"Login")),s.a.createElement(R.a.Item,null,s.a.createElement(R.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(W.a.Body,null,s.a.createElement(X.a.Content,null,s.a.createElement(X.a.Pane,{eventKey:"login"},s.a.createElement(te,{handleModalClose:function(){return n(!1)}})),s.a.createElement(X.a.Pane,{eventKey:"signup"},s.a.createElement(ae,{handleModalClose:function(){return n(!1)}})))))))},re=Object(k.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),oe=Object(b.a)({uri:"/graphql"}),le=new g.a({link:re.concat(oe),cache:new p.a});var ce=function(){return s.a.createElement(v.a,{client:le},s.a.createElement(E.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ne,null),s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/",component:z}),s.a.createElement(h.a,{exact:!0,path:"/saved",component:H}),s.a.createElement(h.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ce,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.e47c68dc.chunk.js.map