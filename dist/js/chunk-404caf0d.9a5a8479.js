(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-404caf0d"],{"2bc5":function(t,e,s){"use strict";s("abd3");var a=s("f914"),i=s("f625"),r=s("7560"),c=s("58df");e["a"]=Object(c["a"])(r["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(a["a"],this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,s=[];for(let a=0;a<this.items.length;a++){const r=this.items[a];s.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(i["a"],{key:s.join("."),props:r},[r.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},abd3:function(t,e,s){},e8fb:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-breadcrumbs",[s("v-breadcrumbs-item",{attrs:{to:{name:"home"}}},[t._v("Home")]),s("v-icon",[t._v("mdi-chevron-right")]),s("v-breadcrumbs-item",{attrs:{disabled:""}},[t._v("My Favorites")]),s("v-spacer"),s("v-btn",{attrs:{primary:"",light:"",color:"red white--text",replace:"",to:{name:"home"}}},[t._v("Back")])],1),s("div",{staticClass:"container"},[s("magic-grid",t._l(t.listFavorites,(function(e){return s("card",[s("div",{staticClass:"card large"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:e.imageRecipe,alt:"Image",width:"250em"}})])]),s("div",{staticClass:"card-content content"},[s("h4",[t._v(t._s(e.nameRecipe))]),s("p",[t._v(t._s(e.categoryRecipe))])])])])})),1)],1)],1)},i=[],r=s("6091"),c={name:"favorites",components:{magicGrid:r["a"]},data:()=>({favorites:!1,url:"",listFavorites:[]}),mounted(){this.axios.get(this.url+"/api/getFavorites",{}).then(t=>this.listFavorites=t.data.favorites)}},n=c,d=s("2877"),o=s("6544"),l=s.n(o),u=s("2bc5"),m=s("f625"),v=s("8336"),h=s("132d"),b=s("2fa4"),p=Object(d["a"])(n,a,i,!1,null,null,null);e["default"]=p.exports;l()(p,{VBreadcrumbs:u["a"],VBreadcrumbsItem:m["a"],VBtn:v["a"],VIcon:h["a"],VSpacer:b["a"]})},f625:function(t,e,s){"use strict";var a=s("1c87"),i=s("58df");e["a"]=Object(i["a"])(a["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:s}=this.generateRouteLink();return t("li",[t(e,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}})},f914:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var a=s("2bc5"),i=s("f625"),r=s("80d2");const c=Object(r["g"])("v-breadcrumbs__divider","li");a["a"],i["a"]}}]);
//# sourceMappingURL=chunk-404caf0d.9a5a8479.js.map