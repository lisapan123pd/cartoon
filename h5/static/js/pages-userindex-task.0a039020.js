(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userindex-task"],{"0508":function(t,n,e){"use strict";var i=e("e54b");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("cf5b")),s=i(e("8855")),o={data:function(){return{user:""}},mounted:function(){a.userinfo(this)},methods:{qiandao:function(){s.signin(this)},getuserinfo:function(){a.userinfo(this)}}};n.default=o},"1dc6":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */body[data-v-2e8dece0]{background:#f0f0f0}.content[data-v-2e8dece0]{padding:%?20?% %?50?% %?20?% %?50?%}.content .qiand[data-v-2e8dece0]{display:inline-block;font-size:%?28?%;line-height:%?60?%;height:%?60?%;padding:0 %?30?%;background-color:#f42f47;border-radius:%?10?%;color:#fff;margin:auto 0}.content .renw_list[data-v-2e8dece0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:0;padding-bottom:%?20?%}.content .renw_list .left[data-v-2e8dece0]{display:inline-block;margin-right:auto}.content .renw_list .left .text[data-v-2e8dece0]{font-size:%?32?%;color:#373737;line-height:%?48?%}.content .renw_list .left .texts[data-v-2e8dece0]{font-size:%?24?%;color:#bfbfbf;line-height:%?48?%}.content .renw_list .right[data-v-2e8dece0]{display:inline-block;margin:auto 0;font-size:%?28?%;color:#f42f47;line-height:%?48?%}.content .renw_list .right.on[data-v-2e8dece0]{color:#00a308}.content .btn[data-v-2e8dece0]{width:%?650?%;height:%?80?%;background:#f42f47;border-radius:%?10?%;font-size:%?28?%;color:#fff;line-height:%?80?%;text-align:center}',""])},"1e8b":function(t,n,e){var i=e("1dc6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("3631b033",i,!0,{sourceMap:!1,shadowMode:!1})},"21a2":function(t,n,e){"use strict";e.r(n);var i=e("0508"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},8855:function(t,n,e){"use strict";function i(t){var n="signin",e="POST",i={};t.$http.httpRequest(n,i,e).then(function(n){0==n.data.code&&(uni.showToast({icon:"none",title:"签到成功",duration:1500}),t.getuserinfo())},function(t){})}Object.defineProperty(n,"__esModule",{value:!0}),n.signin=i},bf86:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t.ios?e("addinios"):t._e(),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"renw_list"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"text"},[t._v("每日签到")]),e("v-uni-view",{staticClass:"texts"},[t._v("+30金币")])],1),t.user.isSignIn?e("v-uni-view",{staticClass:"right on"},[t._v("完成")]):e("v-uni-view",{staticClass:"qiand",on:{click:function(n){n=t.$handleEvent(n),t.qiandao(n)}}},[t._v("签到")])],1),e("v-uni-view",{staticClass:"renw_list"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"text"},[t._v("邀请好友")]),e("v-uni-view",{staticClass:"texts"},[t._v("双方+30金币")])],1),t.user.inviteFriend<3?e("v-uni-view",{staticClass:"right "},[t._v(t._s(t.user.inviteFriend)+"/3  未完成")]):e("v-uni-view",{staticClass:"right on"},[t._v("完成")])],1),e("v-uni-view",{staticClass:"renw_list"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"text"},[t._v("分享漫画")]),e("v-uni-view",{staticClass:"texts"},[t._v("+5金币/本")])],1),t.user.shareBook<10?e("v-uni-view",{staticClass:"right"},[t._v(t._s(t.user.shareBook)+"/10  未完成")]):e("v-uni-view",{staticClass:"right on"},[t._v("完成")])],1),e("v-uni-view",{staticClass:"btn"},[t._v("领取会员")])],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},c487:function(t,n,e){"use strict";var i=e("1e8b"),a=e.n(i);a.a},cf5b:function(t,n,e){"use strict";function i(t){var n=uni.getStorageSync("user");uni.request({url:t.adminurl+"register/createaccount",token:n.token,data:{username:t.accou,password:t.pass,confirmpassword:t.qpass},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){0==n.data.code?(uni.showToast({icon:"none",title:"注册成功",duration:1500}),uni.setStorageSync("account",t.accou),uni.setStorageSync("pass",t.qpass),t.gologin()):uni.showToast({icon:"none",title:n.data.msg,duration:1500})}})}function a(t){uni.request({url:t.adminurl+"login",data:{username:t.accou,password:t.pass},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){if(0==n.data.code){uni.showToast({title:"登入成功",duration:1500});var e=n.data.data;uni.setStorageSync("account",t.accou),uni.setStorageSync("pass",t.pass),uni.setStorageSync("imgurl",n.data.dfsfileaccessprefix),uni.setStorageSync("user",e),uni.switchTab({url:"/pages/index/index"})}else uni.showToast({icon:"none",title:n.data.msg,duration:1500})}})}function s(t){var n="register/getaccount",e="POST",i={};t.$http.httpRequest(n,i,e).then(function(n){0==n.data.code&&(t.accou=n.data.data.account)},function(t){})}function o(t){var n="userinfo",e="POST",i={};t.$http.httpRequest(n,i,e).then(function(n){0==n.data.code&&(t.user=n.data.data,uni.setStorageSync("user",t.user))},function(t){})}Object.defineProperty(n,"__esModule",{value:!0}),n.createaccount=i,n.login=a,n.getaccount=s,n.userinfo=o},fedc:function(t,n,e){"use strict";e.r(n);var i=e("bf86"),a=e("21a2");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("c487");var o=e("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"2e8dece0",null);n["default"]=c.exports}}]);