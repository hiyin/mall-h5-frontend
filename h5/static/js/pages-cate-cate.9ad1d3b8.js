(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cate-cate"],{"5f7b":function(t,e,a){t.exports=a.p+"static/img/search2.030c33f7.png"},"6d53":function(t,e,a){var i=a("f9b4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1d8a70ba",i,!0,{sourceMap:!1,shadowMode:!1})},"6d7e":function(t,e,a){"use strict";a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{cate:[],current:0,rectInfo:[],mainCurrent:0,scrollTop:0,imgUrl:this.$imgUrl}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;uni.request({url:this.apiUrl+"/index/cate",success:function(e){t.cate=e.data.data,t.$nextTick((function(){t.getRectInfo()}))}})},rightScroll:function(t){for(var e=t.detail.scrollTop,a=0;a<this.rectInfo.length;a++)e>this.rectInfo[a].top&&e<this.rectInfo[a].bottom&&(this.current=a,this.scrollTop=a*uni.upx2px(100))},menuTab:function(t){this.current=t,this.mainCurrent=t,this.scrollTop=t*uni.upx2px(100)},getRectInfo:function(){var t=this,e=0,a=0,i=0;console.log(this.$refs["cate0"]);for(var n=0;n<this.cate.length;n++){var c=uni.createSelectorQuery().in(this);c.select("#cate"+n).boundingClientRect((function(n){e=i,a=e+n.height,i+=n.height,t.rectInfo.push({top:e,bottom:a})})).exec()}}}};e.default=i},ba84:function(t,e,a){"use strict";var i=a("6d53"),n=a.n(i);n.a},d33e:function(t,e,a){"use strict";a.r(e);var i=a("6d7e"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);e["default"]=n.a},d63c:function(t,e,a){"use strict";a.r(e);var i=a("faa6"),n=a("d33e");for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);a("ba84");var o,r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"379433a8",null,!1,i["a"],o);e["default"]=s.exports},f9b4:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-379433a8]{background:#f7f7f7}.search[data-v-379433a8]{height:%?110?%;width:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.searchBox[data-v-379433a8]{width:%?690?%;height:%?70?%;border-radius:%?10?%;font-size:%?28?%;color:#999;background:#f7f7f7}.searchBox uni-navigator[data-v-379433a8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%}.searchBox uni-image[data-v-379433a8]{width:%?38?%;height:%?38?%;margin-right:%?12?%}.cate[data-v-379433a8]{position:absolute;top:%?120?%;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.cateleft[data-v-379433a8]{width:%?200?%;background:#f7f7f7;height:100%}.cateNameList[data-v-379433a8]{height:100%;overflow:auto}.cateRightList[data-v-379433a8]{height:auto;overflow:hidden}.cateNameItem[data-v-379433a8]{font-size:%?28?%;color:#000;line-height:%?100?%;text-align:center;position:relative}.cateActive[data-v-379433a8]{background:#fff}.cateLine[data-v-379433a8]{position:absolute;width:%?4?%;height:%?30?%;background:#f7f7f7;top:%?35?%}.cateActive .cateLine[data-v-379433a8]{background:#10b6e8}.cateright[data-v-379433a8]{width:%?550?%;background:#fff;height:100%}.cateRightScroll[data-v-379433a8]{height:100%;overflow:auto}.caterightTitle[data-v-379433a8]{line-height:%?86?%;padding-top:%?16?%;color:#999;font-size:%?28?%;text-align:center}.caterightTitle uni-text[data-v-379433a8]{padding:0 %?30?%}.cateRightItem[data-v-379433a8]{width:33.33%;float:left;margin-top:%?20?%}.cateRightItem .imageBox[data-v-379433a8]{width:%?160?%;height:%?160?%;display:block;margin:0 auto}.cateRightItem uni-text[data-v-379433a8]{line-height:%?36?%;font-size:%?24?%;text-align:center;display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}body.?%PAGE?%[data-v-379433a8]{background:#f7f7f7}",""]),t.exports=e},faa6:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{staticClass:"searchBox"},[i("v-uni-navigator",{attrs:{url:"../search/search","hover-class":"none"}},[i("v-uni-image",{attrs:{src:a("5f7b"),mode:""}}),t._v("搜索全部")],1)],1)],1),i("v-uni-view",{staticClass:"cate"},[i("v-uni-view",{staticClass:"cateleft"},[i("v-uni-scroll-view",{staticClass:"cateNameList",attrs:{"scroll-y":"true","scroll-top":t.scrollTop,"scroll-with-animation":!0}},t._l(t.cate,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cateNameItem",class:{cateActive:a==t.current},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.menuTab(a)}}},[t._v(t._s(e.catename)),i("v-uni-view",{staticClass:"cateLine"})],1)})),1)],1),i("v-uni-view",{staticClass:"cateright"},[i("v-uni-scroll-view",{staticClass:"cateRightScroll",attrs:{"scroll-y":"true","scroll-into-view":"cate"+t.mainCurrent,"scroll-with-animation":!0},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.rightScroll.apply(void 0,arguments)}}},[t._l(t.cate,(function(e,a){return i("v-uni-view",{key:a,ref:"cate"+a,refInFor:!0,staticClass:"cateItem",attrs:{id:"cate"+a}},[i("v-uni-view",{staticClass:"caterightTitle"},[t._v("——"),i("v-uni-text",[t._v(t._s(e.catename))]),t._v("——")],1),i("v-uni-view",{staticClass:"cateRightList"},t._l(e.product,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cateRightItem"},[i("v-uni-navigator",{attrs:{"hover-class":"none",url:"../detail/detail?id="+e.id}},[i("v-uni-view",{staticClass:"imageBox"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.imgUrl+e.mainimage,mode:""}})],1),i("v-uni-text",[t._v(t._s(e.smalltitle))])],1)],1)})),1)],1)})),i("v-uni-view",{staticStyle:{height:"30rpx",width:"100%"}})],2)],1)],1)],1)},c=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return i}))}}]);