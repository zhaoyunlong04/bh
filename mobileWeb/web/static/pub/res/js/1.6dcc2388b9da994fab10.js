webpackJsonp([1],{453:function(e,t,s){function i(e){s(493)}var n=s(115)(s(481),s(507),i,"data-v-0c2c3b38",null);e.exports=n.exports},458:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAuCAMAAAABf/lHAAAAdVBMVEUAAAAqUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe0qUe3CWIi+AAAAJnRSTlMAvXlCglObloe5jbBrYE42MMmrqZBa66ykfnNuZ0g+KSLv18O0DvPlnjwAAADASURBVDjLhdPJEoIwEATQYBJjZN9BEFzz/58oEsrLTEtfX3UfUhPBRgePgZfRLVGcRO6bhpGDW1NSuXixEnWCBIom0kNRXqxGa6FEnfBKBXbOXgoqJy/dhKTN0ForkRxTIuYnoGNmItXWmeFahjrmJkiwiDuY888A7eytlLhXpowpbx1nlbcCbO6Z1fjQ7cRYT86JnmdCBJ37vg2b/dnMYwG/pOMs2re8ZmzcejXuBYJJnK8muNTPRYxgk7wa9f4A89otIU9Vzb8AAAAASUVORK5CYII="},459:function(e,t,s){"use strict";var i=s(172),n=s.i(i.a)("auth");t.a=n},460:function(e,t,s){t=e.exports=s(450)(!1),t.push([e.i,".mint-toast{position:fixed;max-width:80%;border-radius:5px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;z-index:1000;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.mint-toast.is-placebottom{bottom:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.mint-toast.is-placemiddle{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.mint-toast.is-placetop{top:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.mint-toast-icon{display:block;text-align:center;font-size:56px}.mint-toast-text{font-size:14px;display:block;text-align:center}.mint-toast-pop-enter,.mint-toast-pop-leave-active{opacity:0}",""])},461:function(e,t,s){var i=s(460);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(451)("f8edb9fa",i,!0)},462:function(e,t,s){e.exports=function(e){function t(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,i){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=242)}({0:function(e,t){e.exports=function(e,t,s,i,n){var o,c=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,c=e.default);var a="function"==typeof c?c.options:c;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),i&&(a._scopeId=i);var l;if(n?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},a._ssrRegister=l):s&&(l=s),l){var u=a.functional,f=u?a.render:a.beforeCreate;u?a.render=function(e,t){return l.call(t),f(e,t)}:a.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:c,options:a}}},1:function(e,t){e.exports=s(57)},101:function(e,t){},164:function(e,t,s){function i(e){s(101)}var n=s(0)(s(86),s(170),i,null,null);e.exports=n.exports},170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"mint-toast-pop"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mint-toast",class:e.customClass,style:{padding:""===e.iconClass?"10px":"20px"}},[""!==e.iconClass?s("i",{staticClass:"mint-toast-icon",class:e.iconClass}):e._e(),e._v(" "),s("span",{staticClass:"mint-toast-text",style:{"padding-top":""===e.iconClass?"0":"10px"}},[e._v(e._s(e.message))])])])},staticRenderFns:[]}},242:function(e,t,s){e.exports=s(50)},50:function(e,t,s){"use strict";var i=s(94);Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"default",function(){return i.a})},86:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var e=[];switch(this.position){case"top":e.push("is-placetop");break;case"bottom":e.push("is-placebottom");break;default:e.push("is-placemiddle")}return e.push(this.className),e.join(" ")}}}},94:function(e,t,s){"use strict";var i=s(1),n=s.n(i),o=n.a.extend(s(164)),c=[],r=function(){if(c.length>0){var e=c[0];return c.splice(0,1),e}return new o({el:document.createElement("div")})},a=function(e){e&&c.push(e)},l=function(e){e.target.parentNode&&e.target.parentNode.removeChild(e.target)};o.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",l),this.closed=!0,a(this)};var u=function(e){void 0===e&&(e={});var t=e.duration||3e3,s=r();return s.closed=!1,clearTimeout(s.timer),s.message="string"==typeof e?e:e.message,s.position=e.position||"middle",s.className=e.className||"",s.iconClass=e.iconClass||"",document.body.appendChild(s.$el),n.a.nextTick(function(){s.visible=!0,s.$el.removeEventListener("transitionend",l),~t&&(s.timer=setTimeout(function(){s.closed||s.close()},t))}),s};t.a=u}})},463:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:["info"]}},464:function(e,t,s){t=e.exports=s(450)(!1),t.push([e.i,".wrapper[data-v-929a7604]{text-align:center}.wrapper img[data-v-929a7604]{width:2.586667rem;height:2.346667rem;margin-top:3.2rem}.wrapper p[data-v-929a7604]{margin-top:.533333rem;font-size:14px;color:#555}",""])},465:function(e,t,s){var i=s(464);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(451)("7be3cb97",i,!0)},466:function(e,t,s){function i(e){s(465)}var n=s(115)(s(463),s(467),i,"data-v-929a7604",null);e.exports=n.exports},467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("img",{attrs:{src:"/static/noList.png",alt:""}}),e._v(" "),s("p",[e._v(e._s(e.info))])])},staticRenderFns:[]}},468:function(e,t,s){e.exports={default:s(469),__esModule:!0}},469:function(e,t,s){var i=s(45),n=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},479:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEYBAMAAADrP6Q2AAAAJ1BMVEXd3d3////39/fu7u7m5ub6+vrp6en8/Pz09PTh4eHk5OTr6+vx8fHX6H0DAAAD9UlEQVR42u3du4sTQRwH8J+vZDdaOEl8W1zmjCJarC4+wGajqyI2RhEfVXyBYuMDQa0SQW0jKrYBRdscNpaeKIj+U/5mZvec22iT2fH5/UJyCYT93HdmdnZJExK/IED+Y4S8BgiQhQABAgQIECBA7AABAgQIECBA7AABAgQIECBA7AABAgQIECBA7AABAgQIECD/HlJ7fKvnHZkTYr1vpCY4Y89IoJAbnpGqQjb8C8hSL8MVxkOyslwhUdnIG7GR7MwLUaeSkdpNIRKyUumui0pGuIgQTVqUIZWMcBFO4nfv4iKqikfErKVbqopPpCPEulGLq3hDTJH7+vzr+UMuCLFmSMRV1npDKvyhc0SmiickL2KqeEJWmiJ5FT/InClSrBJ+7pWHLOOPbCeaqHJUNMpDdpnttlil4nqNLxaZWXStGue22FQSUrxutLJDrxIqY3ckP1ifqFiFMZW15SDz5h6uWOW5EOKzWQXuSGCKFKpE6vLSoIGu4o7wcTYTFas0juoSgXp2RUyR9xM3QzrNbEG7I/MTRfI5XzfKvMQZuZndW01WOZd7TWek+8Oto2U2s7yKK3LBnG6TVWa+e01XJLz24zW3MFErhBAjJ+Tn9vdXXb76e0HsPFcLzTNiqvhGTBXPiKniFzFV6t6RkLcF7wi98N+Eq7S2/9Vf4ABRAQIEyB+ILP8VSCcilau3qZB3pBKM3ZEgbsVx/Gp/d81HooMyyw7i7DY3khGRWEhzKmRFew0f9ND6vUN+85I9ZcZ7FyOX0zQ92Ew5x6ZCaNkJ9bSa8uwik0txOz5gEJ1q32FOqlHnh8hFeUbutJALvemRcHB5Lk2f1qWU70mlRTpmuN7G8Z7ZL7ScB+pMqjKcCqkJlUMNHhzzr7Zt5IGU205uoSUiTzIVwunoidlNJpJM7IlfEvEb9arjgBxZOqMPKTnrpEqyXPKcyHE5SCBlV4hqpBFevPvXn445ozBWOX6vJCQepDTXy4dr5UZJWa7z426O7OPZcRsuukM5EtyQ9pzsSjJkD68zF+Ql0WuiI6SzpL8IqfbLmfgPUmdrdi4mMnshOBRsKAeRsc4p0rlFGfIsfZimVDufD1eaHnZAZu0/QVMjlVHhPNHFHJC21DGXk0GkkRX9BaT84QrqxIg+KiOVTzMTiPtwha2+QZ6MecW1xNmkiLgPVzjfUO8vp0cGw8pNcfYaUY1WKGQ2bqv9OB64D1dQVzv5Ff7wLNW+Jtk3oD1GTkqT7rTII9L5yo/JQ4TpMTNFJp3kT77vAgIECBAgVoAAAQIECBAgdoAAAQIECBAgdoAAAQIECBAgdoAAAQIECBAgdoAA+fuQn+dv+xWqYoD8XuQb/BRlkncSBxkAAAAASUVORK5CYII="},481:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(461),n=(s.n(i),s(462)),o=s.n(n),c=s(468),r=s.n(c),a=s(173),l=s(466),u=s.n(l),f=s(459);t.default={data:function(){return{info:"",coursewareLists:[],pageIndex:2,pageCount:0,allLoaded:!1,isAutoFill:!1,chapter:[],resourceLi:[{resourceName:"全部类型",matType:1},{resourceName:"基础作业",matType:2},{resourceName:"提升作业",matType:3},{resourceName:"单元检测",matType:4}],twoSelect:[{title:"全部章节",upOrDown:"&#xe632",isSelect:!1,id:0},{title:"全部类型",upOrDown:"&#xe632",isSelect:!1,id:1}],subjectList:[{department:"小学部",departmentId:20201,list:[{subject:"语文",subjectId:10010,isSelect:!1},{subject:"数学",subjectId:10011,isSelect:!1},{subject:"英语",subjectId:10012,isSelect:!1}]},{department:"初中部",departmentId:20202,list:[{subject:"语文",subjectId:10010,isSelect:!1},{subject:"数学",subjectId:10011,isSelect:!1},{subject:"英语",subjectId:10012,isSelect:!1},{subject:"生物",subjectId:10013,isSelect:!1},{subject:"物理",subjectId:10014,isSelect:!1},{subject:"化学",subjectId:10015,isSelect:!1},{subject:"地理",subjectId:10016,isSelect:!1},{subject:"历史",subjectId:10017,isSelect:!1},{subject:"思想品德",subjectId:10029,isSelect:!1}]},{department:"高中部",departmentId:20203,list:[{subject:"语文",subjectId:10010,isSelect:!1},{subject:"数学",subjectId:10011,isSelect:!1},{subject:"英语",subjectId:10012,isSelect:!1},{subject:"生物",subjectId:10013,isSelect:!1},{subject:"物理",subjectId:10014,isSelect:!1},{subject:"化学",subjectId:10015,isSelect:!1},{subject:"地理",subjectId:10016,isSelect:!1},{subject:"历史",subjectId:10017,isSelect:!1},{subject:"政治",subjectId:10018,isSelect:!1}]}],subjectVersionList:[],selectSubjectVersionList:[],isSelectTeaching:!1,departmentSubject:{department:"请选择",subject:"",departmentId:0,subjectId:0},selectDepartmentSubject:{department:"请选择学科",subject:"",departmentId:0,subjectId:0},isSelectSubject:!1,subjectUpOrDown:"&#xe632",subjectVersion:{versionId:0,versionName:""},SelectSubjectVersion:{versionId:0,versionName:""},VersionVolumeList:{id:0,name:""},SelectVersionVolumeList:{id:0,name:""},isDefault:!0,canConfirm:!0}},components:{noList:u.a},created:function(){var e=this;f.a?this.$axios.get(this.$httpConfig.csChapterDefault).then(function(t){var s=t.data;200==t.status?""==s?(e.isDefault=!1,e.canConfirm=!1,e.openShade(),e.selectSubject()):(e.departmentSubject.department=s.departmentName,e.departmentSubject.departmentId=s.department,e.departmentSubject.subject=s.subjectName,e.departmentSubject.subjectId=s.subjectId,e.selectDepartmentSubject=e.shallowCopy(e.departmentSubject),e.subjectVersion.versionName=s.versionName,e.subjectVersion.versionId=s.version,e.SelectSubjectVersion=e.shallowCopy(e.subjectVersion),e.VersionVolumeList.name=s.tomeName,e.VersionVolumeList.id=s.tome,e.SelectVersionVolumeList=e.shallowCopy(e.VersionVolumeList),e.twoSelect[0].id=e.VersionVolumeList.id,e.materialList(),e.getChapterList()):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)}):(this.isDefault=!1,this.canConfirm=!1,this.openShade(),this.selectSubject())},mounted:function(){},methods:{noFindVolumesImg:function(){event.target.src="/static/noImage.png"},selectSubject:function(){this.isSelectSubject=!this.isSelectSubject,this.isSelectSubject?this.subjectUpOrDown="&#xe604":this.subjectUpOrDown="&#xe632"},openShade:function(){var e=this;this.initToggleChapterOrResource(),this.isSelectTeaching=!this.isSelectTeaching,this.isDefault?this.isShade||(this.$axios.get(this.$httpConfig.csChapterVersion,{params:{"department-id":this.selectDepartmentSubject.departmentId,"subject-id":this.selectDepartmentSubject.subjectId}}).then(function(t){200==t.status?(e.selectSubjectVersionList=t.data,e.selectSubjectVersionList.forEach(function(t){e.$set(t,"isSelectVersion",!1),e.$set(t,"upOrDown","&#xe632"),e.$set(t,"subjectVersionVolumeList",[])}),e.subjectVersionList=e.shallowCopy(e.selectSubjectVersionList),e.selectSubjectVersionList.forEach(function(t,s){t.versionId==e.SelectSubjectVersion.versionId&&(e.SelectSubjectVersion.versionId=e.selectSubjectVersionList[s].versionId,e.SelectSubjectVersion.versionName=e.selectSubjectVersionList[s].versionName,0==e.selectSubjectVersionList[s].subjectVersionVolumeList.length&&e.$axios.get(e.$httpConfig.csChapterTome,{params:{"department-id":e.selectDepartmentSubject.departmentId,"subject-id":e.selectDepartmentSubject.subjectId,"version-id":e.SelectSubjectVersion.versionId}}).then(function(t){200==t.status?(t.data.forEach(function(e){e.isSelect=!1}),e.selectSubjectVersionList[s].subjectVersionVolumeList=t.data,e.selectSubjectVersionList[s].subjectVersionVolumeList.forEach(function(t,i){e.SelectVersionVolumeList.id==t.id&&(e.selectSubjectVersionVolume(s,i),e.subjectVersionList=e.shallowCopy(e.selectSubjectVersionList))})):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)}),e.selectSubjectVersionList[s].isSelectVersion?(e.initVersionUpOrDown(),e.selectSubjectVersionList[s].isSelectVersion=!1,e.selectSubjectVersionList[s].upOrDown="&#xe632"):(e.initVersionUpOrDown(),e.selectSubjectVersionList[s].isSelectVersion=!0,e.selectSubjectVersionList[s].upOrDown="&#xe604"))})):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)}),this.isShade=!0):this.selectDepartmentSubject.department="请选择学科"},closeShade:function(){this.isDefault?(this.canConfirm=!0,this.selectDepartmentSubject=this.shallowCopy(this.departmentSubject),this.SelectSubjectVersion=this.shallowCopy(this.subjectVersion),this.SelectVersionVolumeList=this.shallowCopy(this.VersionVolumeList),this.selectSubjectVersionList=this.shallowCopy(this.subjectVersionList),this.isSelectTeaching=!this.isSelectTeaching):BHWEB.action("pop","")},confirmHandle:function(){var e=this;this.isDefault=!0,this.VersionVolumeList.id==this.SelectVersionVolumeList.id||0==this.SelectVersionVolumeList.id?(this.selectDepartmentSubject=this.shallowCopy(this.departmentSubject),this.SelectSubjectVersion=this.shallowCopy(this.subjectVersion),this.SelectVersionVolumeList=this.shallowCopy(this.VersionVolumeList),this.selectSubjectVersionList=this.shallowCopy(this.subjectVersionList),this.isSelectTeaching=!this.isSelectTeaching):(this.departmentSubject=this.shallowCopy(this.selectDepartmentSubject),this.subjectVersion=this.shallowCopy(this.SelectSubjectVersion),this.VersionVolumeList=this.shallowCopy(this.SelectVersionVolumeList),this.subjectVersionList=this.shallowCopy(this.selectSubjectVersionList),f.a?this.$axios.post(this.$httpConfig.csChapterSaveUserDefault,{"department-id":this.selectDepartmentSubject.departmentId,"subject-id":this.selectDepartmentSubject.subjectId,"version-id":this.SelectSubjectVersion.versionId,"tome-id":this.SelectVersionVolumeList.id}).then(function(t){200==t.status?(e.isSelectTeaching=!e.isSelectTeaching,e.twoSelect[0].title="全部章节",e.twoSelect[0].id=e.VersionVolumeList.id,e.twoSelect[1].title="全部资源",e.twoSelect[1].id=1,e.materialList(),e.getChapterList()):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)}):(this.isSelectTeaching=!this.isSelectTeaching,this.twoSelect[0].title="全部章节",this.twoSelect[0].id=this.VersionVolumeList.id,this.twoSelect[1].title="全部资源",this.twoSelect[1].id=1,this.materialList(),this.getChapterList()))},initSubject:function(){this.subjectList.forEach(function(e){e.list.forEach(function(e){e.isSelect=!1})})},toggleSubject:function(e,t,s,i,n,o){var c=this;this.canConfirm=!1,this.selectDepartmentSubject.department=s,this.selectDepartmentSubject.subject=i,this.selectDepartmentSubject.departmentId=e,this.selectDepartmentSubject.subjectId=t,this.initSubject(),this.subjectList[n].list[o].isSelect=!0,this.SelectSubjectVersion.versionId=0,this.SelectSubjectVersion.versionName="",this.SelectVersionVolumeList.id=0,this.SelectVersionVolumeList.name="",this.selectSubject(),this.isDefault?this.getSubjectVersion():(this.selectSubjectVersionList=[],this.$axios.get(this.$httpConfig.csChapterVersion,{params:{"department-id":this.selectDepartmentSubject.departmentId,"subject-id":this.selectDepartmentSubject.subjectId}}).then(function(e){200==e.status?(c.selectSubjectVersionList=e.data,c.selectSubjectVersionList.forEach(function(e){c.$set(e,"isSelectVersion",!1),c.$set(e,"upOrDown","&#xe632"),c.$set(e,"subjectVersionVolumeList",[])}),c.selectSubjectVersion(0)):a.a.$emit("message",e.data.message)}).catch(function(e){return a.a.$emit("error",e)}))},initVersionUpOrDown:function(){var e=this;this.selectSubjectVersionList.forEach(function(t){e.$set(t,"isSelectVersion",!1),e.$set(t,"upOrDown","&#xe632")})},initVersionVolumeListSelect:function(){for(var e=0;e<this.selectSubjectVersionList.length;e++)for(var t=0;t<this.selectSubjectVersionList[e].subjectVersionVolumeList.length;t++)this.selectSubjectVersionList[e].subjectVersionVolumeList[t].isSelect=!1},initToggleChapterOrResource:function(){this.twoSelect.forEach(function(e){e.isSelect=!1,e.upOrDown="&#xe632"})},selectSubjectVersion:function(e){0==this.selectSubjectVersionList[e].subjectVersionVolumeList.length&&this.getsubjectVersionVolume(e),this.selectSubjectVersionList[e].isSelectVersion?(this.initVersionUpOrDown(),this.selectSubjectVersionList[e].isSelectVersion=!1,this.selectSubjectVersionList[e].upOrDown="&#xe632"):(this.initVersionUpOrDown(),this.selectSubjectVersionList[e].isSelectVersion=!0,this.selectSubjectVersionList[e].upOrDown="&#xe604")},selectSubjectVersionVolume:function(e,t){this.SelectVersionVolumeList.id=0,this.SelectVersionVolumeList.name="",this.selectSubjectVersionList[e].subjectVersionVolumeList[t].isSelect?(this.canConfirm=!1,this.initVersionVolumeListSelect(),this.selectSubjectVersionList[e].subjectVersionVolumeList[t].isSelect=!1):(this.canConfirm=!0,this.SelectSubjectVersion.versionId=this.selectSubjectVersionList[e].versionId,this.SelectSubjectVersion.versionName=this.selectSubjectVersionList[e].versionName,this.SelectVersionVolumeList.id=this.selectSubjectVersionList[e].subjectVersionVolumeList[t].id,this.SelectVersionVolumeList.name=this.selectSubjectVersionList[e].subjectVersionVolumeList[t].name,this.initVersionVolumeListSelect(),this.selectSubjectVersionList[e].subjectVersionVolumeList[t].isSelect=!0),this.selectSubjectVersionList=JSON.parse(r()(this.selectSubjectVersionList))},shallowCopy:function(e){return JSON.parse(r()(e))},toggleChapterOrResource:function(e){this.twoSelect[e].isSelect?(this.initToggleChapterOrResource(),this.twoSelect[e].isSelect=!1,this.twoSelect[e].upOrDown="&#xe632"):(this.initToggleChapterOrResource(),this.twoSelect[e].isSelect=!0,this.twoSelect[e].upOrDown="&#xe604")},chapterSelect:function(e,t){this.twoSelect[0].title=t,this.twoSelect[0].id=e,this.materialList()},allChapter:function(){this.twoSelect[0].title="全部章节",this.twoSelect[0].id=this.VersionVolumeList.id,this.materialList()},resourceSelect:function(e){this.twoSelect[1].title=this.resourceLi[e].resourceName,this.twoSelect[1].id=this.resourceLi[e].matType,this.materialList()},loadBottom:function(){var e=this;this.$refs.loadmore.onBottomLoaded(),this.pageIndex>this.pageCount?(o()({message:"已经到底了",position:"bottom",duration:1e3}),this.allLoaded=!0):this.$axios.get(this.$httpConfig.hwList,{params:{"department-id":this.departmentSubject.departmentId,"subject-id":this.departmentSubject.subjectId,"version-id":this.subjectVersion.versionId,"chapter-id":this.twoSelect[0].id,"homework-type":this.twoSelect[1].id,page:this.pageIndex++}}).then(function(t){200==t.status?(e.pageIndex>e.pageCount&&(o()({message:"已经到底了",position:"bottom",duration:1e3}),e.allLoaded=!0),e.coursewareLists=e.coursewareLists.concat(t.data.items)):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)})},handleBottomChange:function(e){},materialList:function(){var e=this;this.allLoaded=!1,this.pageIndex=2,this.coursewareLists=[],this.info="",this.$axios.get(this.$httpConfig.hwList,{params:{"department-id":this.departmentSubject.departmentId,"subject-id":this.departmentSubject.subjectId,"version-id":this.subjectVersion.versionId,"chapter-id":this.twoSelect[0].id,"homework-type":this.twoSelect[1].id,page:1}}).then(function(t){200==t.status?(e.pageCount=t.data._meta.pageCount,console.log(e.pageIndex),console.log(e.pageCount),e.pageIndex>e.pageCount&&(e.allLoaded=!0),e.coursewareLists=t.data.items,0==t.data.items.length&&(e.info="更换章节试试吧")):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)})},getChapterList:function(){var e=this;this.$axios.get(this.$httpConfig.csChapter,{params:{"department-id":this.departmentSubject.departmentId,"subject-id":this.departmentSubject.subjectId,"version-id":this.subjectVersion.versionId,"tome-id":this.VersionVolumeList.id}}).then(function(t){200==t.status?e.chapter=t.data:a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)})},getSubjectVersion:function(){var e=this;this.selectSubjectVersionList=[],this.$axios.get(this.$httpConfig.csChapterVersion,{params:{"department-id":this.selectDepartmentSubject.departmentId,"subject-id":this.selectDepartmentSubject.subjectId}}).then(function(t){200==t.status?(e.selectSubjectVersionList=t.data,e.selectSubjectVersionList.forEach(function(t){e.$set(t,"isSelectVersion",!1),e.$set(t,"upOrDown","&#xe632"),e.$set(t,"subjectVersionVolumeList",[])})):a.a.$emit("message",t.data.message)}).catch(function(e){return a.a.$emit("error",e)})},getsubjectVersionVolume:function(e){var t=this;this.$axios.get(this.$httpConfig.csChapterTome,{params:{"department-id":this.selectDepartmentSubject.departmentId,"subject-id":this.selectDepartmentSubject.subjectId,"version-id":this.selectSubjectVersionList[e].versionId}}).then(function(s){200==s.status?(s.data.forEach(function(e){e.isSelect=!1}),t.selectSubjectVersionList[e].subjectVersionVolumeList=s.data):a.a.$emit("message",s.data.message)}).catch(function(e){return a.a.$emit("error",e)})},goBack:function(){BHWEB.action("pop","")},toHomework:function(e){BHWEB.action("toHomework",e.listId)}}}},487:function(e,t,s){t=e.exports=s(450)(!1),t.push([e.i,".wrapper[data-v-0c2c3b38]{height:100%;overflow:hidden}.fineWorkBox[data-v-0c2c3b38]{height:76%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.fineWorkList[data-v-0c2c3b38]{position:relative;padding:.266667rem .16rem 0}.fineWorkCtn[data-v-0c2c3b38]{width:9.68rem;height:1.96rem;margin-bottom:.213333rem;border-radius:.16rem;background-color:#fff}.fineWorkCtn .titleImg[data-v-0c2c3b38]{float:left;margin-top:.546667rem;margin-left:.6rem;width:.68rem;height:.68rem}.fineWorkCtn .titleImg.advance[data-v-0c2c3b38]{width:.706667rem;height:.68rem;background:url("+s(498)+");background-size:cover;-webkit-background-size:cover}.fineWorkCtn .titleImg.base[data-v-0c2c3b38]{background:url("+s(499)+");background-size:cover;-webkit-background-size:cover}.fineWorkCtn .titleImg.check[data-v-0c2c3b38]{background:url("+s(500)+");background-size:cover;-webkit-background-size:cover}.fineWorkCtn p[data-v-0c2c3b38]{float:left;width:7.4rem;margin-top:.546667rem;margin-left:.36rem;color:#555;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",""])},493:function(e,t,s){var i=s(487);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(451)("1b034dde",i,!0)},498:function(e,t){e.exports="data:image/png;base64,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"},499:function(e,t){e.exports="data:image/png;base64,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"},500:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAACjlBMVEUAAAD/U2b/zFP/x1T/nVv/jl3/lFz/ylP/s1f/WGX/hV7/Vmb/Y2T/vVX/kVz/sFf/bmL/kF3/klz/cWH/pln/YWT/ZWP/d2D/vlb/s1f/WWX/mVv/lFz/XWX/yVP/WGX/dWH/e2D/fl//YmT/yFT/u1b/xVT/fWD/rVj/tFf/wFX/amL/slf/ulb/uFb/r1f/qlj/wlX/ylP/rVj/wFX/ylP/VWX/YWT/YmT/amL/pFn/pFn/y1P/WGX/rVj/c2H/i13/l1z/V2b/ylP/b2L/c2H/XWX/aGP/WWX/yFT/a2L/YmT/dmH/cmH/p1n/nVv/amP/X2T/aGP/yVT/yVP/aWP/lFz/YGT/xVT/iV7/W2X/y1P/W2X/bGL/x1T/olr/w1X/cWL/tVf/Vmb/f1//y1P/VWb/dmD/olr/oFr/U2b/zFP/gl//U2b/nVv/xVT/zFP/XWX/Z2P/bGL/vVb/ulb/uFb/eWD/fGD/oFr/w1X/YWT/WGX/bmL/yFT/i13/c2H/YGT/Z2P/dmH/gl//oFr/U2b/zFP/ZGT/eWD/cGH/mlv/cmH/d2D/ZWP/il3/hV7/XWT/nVv/fGD/y1P/nVv/nVv/hV7/ZGT/x1T/fGD/gl//pVn/aWP/cWL/i13/i13/l1z/gl//l1z/XGX/l1z/YmT/cWL/XmX/fGD/YGT/iF7/iF7/bmL/iF7/mlv/l1z/fGD/yFT/yFT/gl//x1T/x1T/VWb/y1P/W2X/iF7/mlv/Y2T/cmH/hV7/i13/l1z/X2T/f1//V2X/amL/gl//fGD/oVr/yFT/ZmP/bmL/eWD/nVv/dmH/wFX/xFT/qFn/pVn/rlj/q1j/tVf/s1f/sFf/vVb/ulb/uFZJpR4cAAAAt3RSTlMA8vINzzAw8A4Nz+8wMDEwDQM0L/Xy8vLxzyocGPbzUlEwHRYRC/f28vLy8fHx8fDv7+7Pz4mId2w5NTElIxMH+Pj19fLy7ufg39bPz8/OwrKpjFNPTUg1MyAS/Pr6+fT08PDt5+fm5eXe2trT0tLS0s/Pz8/Pz87MzMzGvru7sKyloaGgnpiYh4F3dWRkW01DQTw1Lf359uHg3drMxcXEvr67tLKsmo6NiIF6eGdTU0VDQkEqIB7+tURiAAAD4ElEQVRIx6WS9XMTQRiGX5zihTaFljaQFtpCgRaoA8Xd3d3d3d3d3d0tBBIg1rskNK7/Dd9CyPSyO8wwPD/cd/e937N7O7MAsgpX11Sw7FAP/KbHoWXKaHVhLRDnF3zimDYejHHT+GjBeaBWP3rp17VejK4ZLOrBdmEvGdWjfqxRC4WynDEuq1Y1st4NkeWdAHbK8pC3iqjXuAxZLsQVWR6POD7OlOUs9JLlmR8Qx3haB+1d7RMRzyqXazImu1yruCSR5jHbVdCOS7Yyp7HLtZVL2hW4ZqODs6A+l3R3OhujsdPZnUvqFzg7kNPyn5yW5LQMCZz1oRA5odB63qF5dAp34p0N4TA54fAG3qF5dI505p2NkQg5kchG3qF55Prn8k4rv78pmvr9rXhnrj8XuYE8gRMIkBMICJy8QC7ygl0ETjBITjAocLoE85DjFTjdvF5yvN5uAsebgxxfvsDx+cjx+QROvi8HSe58/u6MdLvLUe52j+TvTr47CUmeJP6OXvd4ylDm8fBOIs1jsSSVIY6KWZLUGmmSNIv7hTJJWowDkrSkHArSRknSFqpbJGnUFCgoXyJJB5D2g1hZuzoXqXMWwFmqFxTJSjacBrz6IuAYGMdE0UQQze/1+a5kFOszXt+Ji/o8qBuNWjdvUjdGk+ZpIIRRk174H2ixOjGi+wij2D7Nd/X+puTWqWg08XZc1HtXHRAvPwt4BsZzUUTrab4SDRRcos5pAKe/CtFgv9V67X3c8e5arcupLrcK2Y/5JlNb7iJmm0waaExi5iO7Mpu/15srK8/hXGWUzUfeTJnS5snV6Gc2UhwpzThnk8PRFm0dv9jUBlFOLHIwUpBSJXCGV1WRU8U4woZ3Dx++j9SKfayTggGGAbwzwmBogRYGgiaPL6JKjJgAHKU6AP0Nc/7ilAK72fyOm+z5iBYwGOagv70/76yz28mx20uROdROtKEdWB0NvLDPQEdLR4FjsTRCqWUCNDMsxA4Qg9jb0AqMtYidtcyZZCmhbdjkjZgzOhF7LVDZVALHZmuEFjbbSWC0jShGxV5WxwJjbSqo9KoEzhmm1zdCI71eT9JhPXF5EHuWgH2pkKxP/oujLwbObKNKjOkJPKSajGSjyDEayTEyxkwFSp/u2VOcCqRuY51kpBsH8udZE3UYA0ui9zHz8e9GOtJ16Ym8o9NNwiRdlIFjSiaoi+9Pj36mY7BOp0YcPSnORKZOzGAUmc191VMTqjH1zGCzeTuA7WYhRUhoqNVq+85rGGNeXy2RCiBVK6JhAiULBYEaDLUgWZgKIqFoRQ0FSw/2/HOwg0uV0Yoi2uUnLbKxt7ucJSkAAAAASUVORK5CYII="},507:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"selectPackage"},[i("div",{staticClass:"selectTool"},[i("div",{staticClass:"header"},[i("div",{staticClass:"back",on:{click:e.goBack}},[i("img",{attrs:{src:s(458)}})]),e._v(" "),i("div",{staticClass:"title"},[i("h4",[e._v("精品作业")]),e._v(" "),i("div",{staticClass:"titleSelect",on:{click:e.openShade}},[i("span",{staticClass:"departmentSubject"},[e._v(e._s(e.departmentSubject.department)+e._s(e.departmentSubject.subject))]),e._v(" \n            "),i("span",{staticClass:"subjectVersion"},[e._v(e._s(e.subjectVersion.versionName))]),e._v(" \n            "),i("span",{staticClass:"VersionVolume"},[e._v(e._s(e.VersionVolumeList.name))]),e._v(" "),i("i",{staticClass:"iconfont"},[e._v("")])])])]),e._v(" "),i("div",{staticClass:"twoSelect"},[i("div",{staticClass:"chapterSelect two_select",on:{click:function(t){e.toggleChapterOrResource(0)}}},[i("p",{class:{selected:e.twoSelect[0].isSelect}},[e._v(e._s(e.twoSelect[0].title))]),i("i",{staticClass:"iconfont",class:{selected:e.twoSelect[0].isSelect},domProps:{innerHTML:e._s(e.twoSelect[0].upOrDown)}}),e._v(" "),i("transition",{attrs:{name:"el-zoom-in-top"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.twoSelect[0].isSelect,expression:"twoSelect[0].isSelect"}],staticClass:"chapterBox"},[i("ul",[i("li",{staticClass:"allChapter",on:{click:e.allChapter}},[e._v("全部章节")]),e._v(" "),e._l(e.chapter,function(t,s){return i("li",[i("div",{staticClass:"unitTitle",on:{click:function(s){e.chapterSelect(t.chapterId,t.chapterName)}}},[e._v(e._s(t.chapterName))]),e._v(" "),i("ul",e._l(t.list,function(t,s){return i("li",{on:{click:function(s){e.chapterSelect(t.chapterId,t.chapterName)}}},[e._v(e._s(t.chapterName))])}))])})],2)])])],1),e._v(" "),i("div",{staticClass:"resourceSelect two_select",on:{click:function(t){e.toggleChapterOrResource(1)}}},[i("p",{class:{selected:e.twoSelect[1].isSelect}},[e._v(e._s(e.twoSelect[1].title))]),i("i",{staticClass:"iconfont",class:{selected:e.twoSelect[1].isSelect},domProps:{innerHTML:e._s(e.twoSelect[1].upOrDown)}}),e._v(" "),i("transition",{attrs:{name:"el-zoom-in-top"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.twoSelect[1].isSelect,expression:"twoSelect[1].isSelect"}],staticClass:"resourceBox"},[i("ul",e._l(e.resourceLi,function(t,s){return i("li",{on:{click:function(t){e.resourceSelect(s)}}},[e._v(e._s(t.resourceName))])}))])])],1),e._v(" "),i("div",{staticClass:"centerLine"})]),e._v(" "),i("div",{staticClass:"bgGary"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isSelectTeaching,expression:"isSelectTeaching"}],staticClass:"selectTeaching"},[i("div",{staticClass:"selectBox"},[i("p",[e._v("选择教材")]),e._v(" "),i("div",{staticClass:"selectSubject"},[i("p",{on:{click:e.selectSubject}},[e._v(e._s(e.selectDepartmentSubject.department)+e._s(e.selectDepartmentSubject.subject)),i("i",{staticClass:"iconfont",domProps:{innerHTML:e._s(e.subjectUpOrDown)}})]),e._v(" "),i("transition",{attrs:{name:"el-zoom-in-top"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isSelectSubject,expression:"isSelectSubject"}],staticClass:"subjectList "},e._l(e.subjectList,function(t,s){return i("div",e._l(t.list,function(n,o){return i("p",{class:{blue:n.isSelect},on:{click:function(i){e.toggleSubject(t.departmentId,n.subjectId,t.department,n.subject,s,o)}}},[e._v(e._s(t.department)+e._s(n.subject))])}))}))])],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"请选择学科"!=e.selectDepartmentSubject.department,expression:"selectDepartmentSubject.department != '请选择学科'"}],staticClass:"versionList"},e._l(e.selectSubjectVersionList,function(t,n){return i("div",{staticClass:"version",attrs:{to:n}},[i("p",{on:{click:function(t){e.selectSubjectVersion(n)}}},[e._v(e._s(t.versionName)),i("i",{staticClass:"iconfont",domProps:{innerHTML:e._s(t.upOrDown)}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelectVersion,expression:"subjectVersions.isSelectVersion"}],staticClass:"Xscroll"},[i("ul",e._l(t.subjectVersionVolumeList,function(t,o){return i("li",{on:{click:function(t){e.selectSubjectVersionVolume(n,o)}}},[i("div",{staticClass:"VolumeImg"},[i("img",{directives:[{name:"show",rawName:"v-show",value:""==t.image,expression:"subjectVersionVolumes.image == ''"}],attrs:{src:s(479)}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:""!=t.image,expression:"subjectVersionVolumes.image != ''"}],attrs:{src:t.image},on:{"~error":function(t){e.noFindVolumesImg()}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelect,expression:"subjectVersionVolumes.isSelect"}],staticClass:"bookshade"},[i("i",{staticClass:"iconfont"},[e._v("")])])]),e._v(" "),i("p",[e._v(e._s(t.name))])])}))])])})),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.canConfirm,expression:"canConfirm"}],staticClass:"confirmBtn",on:{click:e.confirmHandle}},[e._v("确定")]),e._v(" "),i("div",{staticClass:"closeBtn",on:{click:e.closeShade}},[i("i",{staticClass:"iconfont close"},[e._v("")])])])])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.coursewareLists.length>0,expression:"coursewareLists.length > 0"}],staticClass:"fineWorkBox"},[i("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":e.loadBottom,"bottom-all-loaded":e.allLoaded,"auto-fill":e.isAutoFill},on:{"bottom-status-change":e.handleBottomChange}},[i("ul",{staticClass:"fineWorkList"},e._l(e.coursewareLists,function(t){return i("li",{directives:[{name:"tap",rawName:"v-tap",value:{methods:e.toHomework,listId:t.id},expression:"{methods: toHomework, listId: lists.id}"}],staticClass:"fineWorkCtn"},[i("div",{staticClass:"titleImg",class:{base:2241110==t.homeworkType,advance:2241111==t.homeworkType,check:2241100==t.homeworkType}}),e._v(" "),i("p",[e._v(e._s(t.name))])])}))])],1),e._v(" "),i("noList",{directives:[{name:"show",rawName:"v-show",value:0==e.coursewareLists.length,expression:"coursewareLists.length == 0"}],attrs:{info:e.info}})],1)},staticRenderFns:[]}}});