(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cate-cate"],{"267e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-2999e089]{background:#f7f7f7}.search[data-v-2999e089]{height:%?110?%;width:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.searchBox[data-v-2999e089]{width:%?690?%;height:%?70?%;border-radius:%?10?%;font-size:%?14?%;color:#999;background:#f7f7f7}.searchBox uni-navigator[data-v-2999e089]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%}.searchBox uni-image[data-v-2999e089]{width:%?38?%;height:%?38?%;margin-right:%?12?%}.cate[data-v-2999e089]{position:absolute;top:%?120?%;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.cateLeft[data-v-2999e089]{width:%?200?%;background:#f7f7f7;height:100%}.cateNameList[data-v-2999e089]{height:100%;overflow:auto}.cateNameItem[data-v-2999e089]{font-size:%?28?%;color:#000;line-height:%?100?%;text-align:center;position:relative}.cateActive[data-v-2999e089]{background:#fff}.cateLine[data-v-2999e089]{position:absolute;width:%?4?%;height:%?30?%;background:#f7f7f7;top:%?35?%}.cateActive .cateLine[data-v-2999e089]{background:#10b6e8}.cateRight[data-v-2999e089]{width:%?550?%;background:#fff;height:100%}.cateRightScoll[data-v-2999e089]{height:100%;overflow:auto}.cateRightTitle[data-v-2999e089]{line-height:%?86?%;padding-top:%?16?%;color:#999;font-size:%?28?%;text-align:center}.cateRightTitle uni-text[data-v-2999e089]{padding:0 %?30?%}.cateRightList[data-v-2999e089]{height:auto;overflow:hidden}.cateRightItem[data-v-2999e089]{width:33.33%;float:left;margin-top:%?20?%}.cateRightItem uni-image[data-v-2999e089]{width:%?160?%;height:%?160?%;display:block;margin:0 auto}.cateRightItem uni-text[data-v-2999e089]{line-height:%?36?%;font-size:%?24?%;text-align:center;display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}body.?%PAGE?%[data-v-2999e089]{background:#f7f7f7}",""]),t.exports=e},"5f7b":function(t,e,i){t.exports=i.p+"static/img/search2.030c33f7.png"},"6ce2":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"search"},[a("v-uni-view",{staticClass:"searchBox"},[a("v-uni-navigator",{attrs:{url:"#"}},[a("v-uni-image",{attrs:{src:i("5f7b"),mode:""}}),t._v("搜索全部")],1)],1)],1),a("v-uni-view",{staticClass:"cate"},[a("v-uni-view",{staticClass:"cateLeft"},[a("v-uni-scroll-view",{staticClass:"cateNameList",attrs:{"scroll-y":"true"}},t._l(t.cate,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cateNameItem",class:{cateActive:i==t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuTab(i)}}},[t._v(t._s(e.catename)),a("v-uni-view",{staticClass:"cateLine"})],1)})),1)],1),a("v-uni-view",{staticClass:"cateRight"},[a("v-uni-scroll-view",{staticClass:"cateRightScoll",attrs:{"scroll-y":"true","scroll-into-view":"cate"+t.mainCurrent,"scroll-with-animation":"true"}},[t._l(t.cate,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cateRightSub",attrs:{id:"cate"+i}},[a("v-uni-view",{staticClass:"cateRightTitle"},[t._v("--"),a("v-uni-text",[t._v(t._s(e.catename))]),t._v("--")],1),a("v-uni-view",{staticClass:"cateRightList"},t._l(e.product,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cateRightItem"},[a("v-uni-navigator",{attrs:{url:"../detail/detail?id="+e.id,"hover-class":"none"}},[a("v-uni-image",{attrs:{src:t.imgUrl+e.mainimage,mode:""}}),a("v-uni-text",[t._v(t._s(e.smalltitle))])],1)],1)})),1)],1)})),a("v-uni-view",{staticStyle:{height:"30rpx",width:"100%"}})],2)],1)],1)],1)},c=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return a}))},"6d7e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{cate:[],current:0,rectInfo:[],mainCurrent:0,scrollTop:0,imgUrl:this.$imgUrl}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;uni.request({url:this.apiUrl+"/index/cate",success:function(e){t.cate=e.data.data}})},menuTab:function(t){this.current=t,this.mainCurrent=t}}};e.default=a},"880e":function(t,e,i){"use strict";var a=i("c76a"),n=i.n(a);n.a},c76a:function(t,e,i){var a=i("267e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4a3ba960",a,!0,{sourceMap:!1,shadowMode:!1})},d33e:function(t,e,i){"use strict";i.r(e);var a=i("6d7e"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},d63c:function(t,e,i){"use strict";i.r(e);var a=i("6ce2"),n=i("d33e");for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("880e");var s,r=i("f0c5"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"2999e089",null,!1,a["a"],s);e["default"]=o.exports}}]);