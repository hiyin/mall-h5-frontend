(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-add"],{2106:function(e,t,i){"use strict";i.r(t);var a=i("5685"),s=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=s.a},5685:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{username:"",telphone:"",city:"",address:"",default:1,sex:0,back:""}},onLoad:function(e){this.back=e.back},methods:{sexChange:function(e){this.sex=e},defaultChange:function(e){1==e.target.value?this.default=1:this.default=0},addAddress:function(){var e=this;this.check.username(this.username)&&this.check.telphone(this.telphone)&&this.check.city(this.city)&&this.check.address(this.address)&&this.$request("/member/addressAdd",{username:this.username,telphone:this.telphone,city:this.city,address:this.address,default:this.default,sex:this.sex}).then((function(t){1==e.back?e.$href("../order/order"):e.$href("list"),console.log(t)}))}}};t.default=a},9896:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".username[data-v-35e1705a]{padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?90?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.username uni-input[data-v-35e1705a]{border-bottom:%?1?% solid #e5e5e5;-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?90?%;height:%?90?%}.itemTitle[data-v-35e1705a]{width:%?140?%;font-size:%?30?%}.addressItem[data-v-35e1705a]{display:-webkit-box;display:-webkit-flex;display:flex;margin:0 %?30?%;height:%?90?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid #e5e5e5}.addressItem uni-text[data-v-35e1705a]{width:%?80?%;height:%?45?%;display:block;border:%?1?% solid #e5e5e5;font-size:%?24?%;margin-right:%?10?%;text-align:center;line-height:%?45?%;color:#999}.addressBox[data-v-35e1705a]{height:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;margin:0 %?30?%;border-bottom:%?1?% solid #e5e5e5}.addressBox .itemTitle[data-v-35e1705a]{width:%?140?%;line-height:%?90?%}.addressBox uni-textarea[data-v-35e1705a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?180?%;padding-top:%?25?%}.saveAddress[data-v-35e1705a]{width:%?600?%;height:%?80?%;margin:%?80?% auto;background:#0bbbef;color:#fff;font-size:%?28?%;text-align:center;line-height:%?80?%;border-radius:%?80?%}.defaultOption[data-v-35e1705a]{margin:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?90?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.addressItem uni-text.sexActive[data-v-35e1705a]{background:#0bbbef;color:#fff;border:none}",""]),e.exports=t},ae96:function(e,t,i){var a=i("9896");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=i("4f06").default;s("2542171f",a,!0,{sourceMap:!1,shadowMode:!1})},e552:function(e,t,i){"use strict";i.r(t);var a=i("ef6d"),s=i("2106");for(var n in s)"default"!==n&&function(e){i.d(t,e,(function(){return s[e]}))}(n);i("f4c9");var d,l=i("f0c5"),r=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"35e1705a",null,!1,a["a"],d);t["default"]=r.exports},ef6d:function(e,t,i){"use strict";var a,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"username"},[i("v-uni-view",{staticClass:"itemTitle"},[e._v("收货人")]),i("v-uni-input",{attrs:{type:"text",placeholder:"姓名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),i("v-uni-view",{staticClass:"addressItem"},[i("v-uni-view",{staticClass:"itemTitle"}),i("v-uni-text",{class:{sexActive:0==e.sex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sexChange(0)}}},[e._v("先生")]),i("v-uni-text",{class:{sexActive:1==e.sex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sexChange(1)}}},[e._v("女士")])],1),i("v-uni-view",{staticClass:"addressItem"},[i("v-uni-view",{staticClass:"itemTitle"},[e._v("电话号码")]),i("v-uni-input",{attrs:{type:"text",placeholder:"联系方式"},model:{value:e.telphone,callback:function(t){e.telphone=t},expression:"telphone"}})],1),i("v-uni-view",{staticClass:"addressItem"},[i("v-uni-view",{staticClass:"itemTitle"},[e._v("收货地址")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请填写收货地址"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),i("v-uni-view",{staticClass:"addressBox"},[i("v-uni-view",{staticClass:"itemTitle"},[e._v("收货备注")]),i("v-uni-textarea",{attrs:{type:"text",placeholder:"请输入收货备注"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),i("v-uni-view",{staticClass:"defaultOption"},[i("v-uni-view",{staticClass:"itemTitle"},[e._v("默认地址")]),i("v-uni-switch",{staticStyle:{transform:"scale(0.8)"},attrs:{checked:"true",color:"#0BBBEF"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.defaultChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"saveAddress",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress.apply(void 0,arguments)}}},[e._v("保存收货地址")])],1)},n=[];i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}))},f4c9:function(e,t,i){"use strict";var a=i("ae96"),s=i.n(a);s.a}}]);