(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-download-inform"],{"0216":function(t,n,e){"use strict";var o=e("e54b");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("777d")),a={data:function(){return{reportType:""}},mounted:function(){this.reportType=uni.getStorageSync("infoid")},methods:{goquit:function(){i.submit(this),uni.navigateTo({url:"/pages/download/quitinfo"})}}};n.default=a},"433d":function(t,n,e){"use strict";e.r(n);var o=e("0216"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},"63c5":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[t.ios?e("addinios"):t._e(),e("v-uni-view",{staticClass:"title"},[t._v("你可以：")]),e("v-uni-view",{staticClass:"text",on:{click:function(n){n=t.$handleEvent(n),t.goquit()}}},[t._v("提交给平台安全团队审核")]),e("v-uni-view",{staticClass:"bot"},[t._v("投诉须知")])],1)},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},"777d":function(t,n,e){"use strict";function o(t){var n="report/getRportTypeList",e="POST",o={};t.$http.httpRequest(n,o,e).then(function(n){0==n.data.code&&(t.arr=n.data.data)},function(t){})}function i(t){var n="report/submit",e="POST",o={reportType:t.reportType};t.$http.httpRequest(n,o,e).then(function(t){t.data.code},function(t){})}Object.defineProperty(n,"__esModule",{value:!0}),n.getRportTypeList=o,n.submit=i},b0ff:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-222f1ab0]{height:100vh;color:#333;background-color:#f5f5f5;position:relative}.content .title[data-v-222f1ab0]{padding:0 %?40?%;color:#8a898e;line-height:%?80?%;font-size:%?28?%}.content .text[data-v-222f1ab0]{display:block;padding:0 %?40?%;line-height:%?88?%;font-size:%?32?%;border-bottom:#e1e1df;background-color:#fff}.content .bot[data-v-222f1ab0]{width:100%;position:fixed;left:0;bottom:%?80?%;color:#00f;font-size:%?26?%;text-align:center}',""])},cabe:function(t,n,e){"use strict";e.r(n);var o=e("63c5"),i=e("433d");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("ce6a");var r=e("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"222f1ab0",null);n["default"]=c.exports},ce6a:function(t,n,e){"use strict";var o=e("cef9"),i=e.n(o);i.a},cef9:function(t,n,e){var o=e("b0ff");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("e80fa598",o,!0,{sourceMap:!1,shadowMode:!1})}}]);