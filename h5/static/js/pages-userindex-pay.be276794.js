(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userindex-pay"],{"486f":function(t,n,u){"use strict";u.r(n);var a=u("fa56"),i=u.n(a);for(var o in a)"default"!==o&&function(t){u.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},7486:function(t,n,u){"use strict";var a=function(){var t=this,n=t.$createElement,u=t._self._c||n;return u("v-uni-view",[t.ios?u("addinios"):t._e(),u("v-uni-web-view",{attrs:{src:t.url}})],1)},i=[];u.d(n,"a",function(){return a}),u.d(n,"b",function(){return i})},b19b:function(t,n,u){"use strict";u.r(n);var a=u("7486"),i=u("486f");for(var o in i)"default"!==o&&function(t){u.d(n,t,function(){return i[t]})}(o);var e=u("2877"),r=Object(e["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},fa56:function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{url:""}},onLoad:function(t){1==t.type?this.url="".concat(this.adminurl,"/pay/wy/toWxPay?goodsId=").concat(t.goodsId,"&uid=").concat(t.uid):2==t.type&&(this.url="".concat(this.adminurl,"/pay/wy/toAliPay?goodsId=").concat(t.goodsId,"&uid=").concat(t.uid))}};n.default=a}}]);