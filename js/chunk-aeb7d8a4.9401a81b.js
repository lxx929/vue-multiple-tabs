(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeb7d8a4"],{9941:function(t,e,n){"use strict";var a=n("f1cd"),o=n.n(a);o.a},dd7a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dash-board"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("h2",[t._v("模拟商品列表")])]),t._l(4,(function(e){return n("div",{key:e,staticClass:"text-item",on:{click:function(n){return t.jump(e)}}},[t._v("\n      "+t._s("列表内容 "+e)+"\n    ")])}))],2),n("br"),n("el-button",{attrs:{type:"primary"},on:{click:t.goToDocs}},[t._v("跳转到文档页[普通路由]")])],1)},o=[],s=n("ed08"),i={data:function(){return{}},methods:{jump:function(t){var e="listing"+t,n={vm:this,component:"GoodDetail",com:"@views/GoodDetail/GoodDetail.vue",name:e,params:{id:t},query:{}};s["a"].insertRouter(n)},goToDocs:function(){this.$router.push({name:"docs_index"})}}},c=i,r=(n("9941"),n("2877")),u=Object(r["a"])(c,a,o,!1,null,"5e0898bd",null);e["default"]=u.exports},f1cd:function(t,e,n){}}]);