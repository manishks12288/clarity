webpackJsonp([0],{DeER:function(l,n,u){"use strict";function t(l){return p._40(0,[(l()(),p._21(0,null,null,46,"div",[["class","card card-inverse"],["style","background-color: #333; border-color: #333; margin-top:5px; color: #fff;"]],null,null,null,null,null)),(l()(),p._39(null,["\n    "])),(l()(),p._21(0,null,null,43,"div",[["class","card-block"],["style","padding:5px;"]],null,null,null,null,null)),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),p._39(null,["",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["email: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["phone: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["website: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,4,"label",[],null,null,null,null,null)),(l()(),p._39(null,["\n        "])),(l()(),p._21(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),p._39(null,["Address: "])),(l()(),p._39(null,["\n      "])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["Street: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["City: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["zip Code: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,4,"label",[],null,null,null,null,null)),(l()(),p._39(null,["\n        "])),(l()(),p._21(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),p._39(null,["Company:"])),(l()(),p._39(null,[" \n      "])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["Name: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),p._39(null,["Catch Phrase: ",""])),(l()(),p._39(null,["\n      "])),(l()(),p._21(0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.goToTodoList(l.context.$implicit.id)&&t}return t},null,null)),(l()(),p._39(null,["View Todos"])),(l()(),p._39(null,["\n    "])),(l()(),p._39(null,["\n  "]))],null,function(l,n){l(n,5,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.email),l(n,11,0,n.context.$implicit.phone),l(n,14,0,n.context.$implicit.website),l(n,23,0,n.context.$implicit.address.street),l(n,26,0,n.context.$implicit.address.city),l(n,29,0,n.context.$implicit.zipcode),l(n,38,0,n.context.$implicit.company.name),l(n,41,0,n.context.$implicit.company.catchPhrase)})}function e(l){return p._40(0,[(l()(),p._21(0,null,null,7,"div",[["class","container-fluid"],["style","margin-top:100px"]],null,null,null,null,null)),(l()(),p._39(null,["\n  "])),(l()(),p._21(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),p._39(null,[" User List "])),(l()(),p._39(null,["\n  "])),(l()(),p._15(16777216,null,null,1,null,t)),p._19(802816,null,0,d.i,[p._3,p._0,p.B],{ngForOf:[0,"ngForOf"]},null),(l()(),p._39(null,["\n"]))],function(l,n){l(n,6,0,n.component.userList)},null)}function i(l){return p._40(0,[(l()(),p._21(0,null,null,1,"app-user",[],null,null,null,e,h)),p._19(114688,null,0,a,[f.a,m.a,x.k],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function l(){}return l}(),r=[""],o=u("d2pQ"),s=u("5iKX"),_=u("BkNc"),a=function(){function l(l,n,u){this.userListService=l,this.sharedService=n,this.router=u}return l.prototype.ngOnInit=function(){this.getUserList()},l.prototype.getUserList=function(){var l=this;this.userListService.getUserList().subscribe(function(n){l.userList=n,console.log(l.userList)},function(n){l.errorMessage=n,console.log(l.errorMessage)})},l.prototype.goToTodoList=function(l){this.sharedService.setUserId(l),this.router.navigateByUrl("/todo")},l.ctorParameters=function(){return[{type:o.a},{type:s.a},{type:_.k}]},l}(),p=u("/oeL"),d=u("qbdv"),f=u("d2pQ"),m=u("5iKX"),x=u("BkNc"),b=[r],h=p._18({encapsulation:0,styles:b,data:{}}),y=p._16("app-user",a,i,{},{},[]);u.d(n,"UserModuleNgFactory",function(){return k});var g=u("/oeL"),v=u("qbdv"),L=u("BkNc"),k=g._17(c,[],function(l){return g._32([g._33(512,g.m,g._13,[[8,[y]],[3,g.m],g.H]),g._33(4608,v.l,v.k,[g.D]),g._33(512,L.l,L.l,[[2,L.q],[2,L.k]]),g._33(512,v.b,v.b,[]),g._33(512,c,c,[]),g._33(1024,L.i,function(){return[[{path:"",component:a}]]},[])])})}});