function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{dsxR:function(e,t,n){"use strict";n.r(t),n.d(t,"CoursModule",(function(){return f}));var o,r,i,c=n("ofXK"),s=n("tyNb"),a=n("fXoL"),l=n("HtAz"),u=((o=function(){function e(t,n,o){_classCallCheck(this,e),this.courseService=t,this.route=n,this.router=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.id=+t.id,e.course=e.courseService.getCourse(e.id)}))}},{key:"getCuorse",value:function(){return this.course}}]),e}()).\u0275fac=function(e){return new(e||o)(a.Gb(l.a),a.Gb(s.a),a.Gb(s.b))},o.\u0275cmp=a.Ab({type:o,selectors:[["bk-cours"]],decls:18,vars:1,consts:[[1,"panel-group"],[1,"panel","panel-default"],[1,"panel-heading"],[1,"panel-title"],["data-toggle","collapse","routerLink","#collapse1"],["id","collapse1",1,"panel-collapse","collapse"],[1,"list-group"],[1,"list-group-item"],[1,"panel-footer"]],template:function(e,t){1&e&&(a.Kb(0,"h1"),a.fc(1),a.Jb(),a.Kb(2,"div",0),a.Kb(3,"div",1),a.Kb(4,"div",2),a.Kb(5,"h4",3),a.Kb(6,"a",4),a.fc(7,"Collapsible list group"),a.Jb(),a.Jb(),a.Jb(),a.Kb(8,"div",5),a.Kb(9,"ul",6),a.Kb(10,"li",7),a.fc(11,"One"),a.Jb(),a.Kb(12,"li",7),a.fc(13,"Two"),a.Jb(),a.Kb(14,"li",7),a.fc(15,"Three"),a.Jb(),a.Jb(),a.Kb(16,"div",8),a.fc(17,"Footer"),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&e&&(a.xb(1),a.hc(" ",t.getCuorse().name,""))},directives:[s.e],styles:[""]}),o),b=[{path:"",component:u},{path:"course/:id",component:n("Uc5N").a},{path:":id",component:u}],p=((i=function e(){_classCallCheck(this,e)}).\u0275mod=a.Eb({type:i}),i.\u0275inj=a.Db({factory:function(e){return new(e||i)},imports:[[s.f.forChild(b)],s.f]}),i),f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=a.Eb({type:r}),r.\u0275inj=a.Db({factory:function(e){return new(e||r)},imports:[[c.c,p]]}),r)}}]);