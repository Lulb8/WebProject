(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},i={app:0},a={app:0},s=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-07ed4471":"0eb2b8c4","chunk-404caf0d":"9a5a8479","chunk-7c5f7d50":"3e7b4348","chunk-b587f64a":"cc7345bf"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={"chunk-07ed4471":1,"chunk-404caf0d":1,"chunk-7c5f7d50":1,"chunk-b587f64a":1};i[t]?e.push(i[t]):0!==i[t]&&r[t]&&e.push(i[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-07ed4471":"f155f61a","chunk-404caf0d":"dfd166d6","chunk-7c5f7d50":"f155f61a","chunk-b587f64a":"e28a6ffa"}[t]+".css",a=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===a))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===n||d===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],p.parentNode.removeChild(p),r(s)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){i[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("1356"),i=r.n(n);i.a},1356:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("nav-bar"),r("v-content",[r("router-view")],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticStyle:{height:"0"},attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:"",left:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",{attrs:{to:{name:"home"}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-home")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Home")])],1)],1),r("v-list-item",{attrs:{to:{name:"register"}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-account-edit")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Register")])],1)],1),r("v-list-item",{attrs:{to:{name:"login"}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-account-lock")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Login")])],1)],1),r("v-list-item",{on:{click:t.logout}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-account-remove")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Logout")])],1)],1),r("v-list-item",{attrs:{to:{name:"favorites"}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-heart-multiple")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Favorites")])],1)],1)],1)],1),r("v-app-bar",{attrs:{app:"",color:"#C62828",dark:""}},[r("div",{staticClass:"flex-grow-0"}),r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Meals App")]),r("v-spacer"),r("v-toolbar-title",[t._v("Utilisateur actuel : "+t._s(t.currentUser))])],1),r("v-footer",{attrs:{color:"#8e0000",app:""}},[r("div",{staticClass:"flex-grow-1"}),r("span",{staticClass:"white--text"},[t._v("© 2019")])])],1)},o=[],l={props:{source:String},data:()=>({drawer:null,url:"",currentUser:""}),methods:{async logout(){const t=await this.axios.get(this.url+"/api/logout");this.isconnected=!1,console.log(t)}},mounted(){this.axios.get(this.url+"/api/getUser",{}).then(t=>this.currentUser=t.data.currentUser)}},c=l,d=r("2877"),u=r("6544"),p=r.n(u),h=r("7496"),g=r("40dc"),m=r("5bc1"),f=r("553a"),v=r("132d"),y=r("8860"),b=r("da13"),I=r("1800"),w=r("5d23"),x=r("f774"),C=r("2fa4"),k=r("2a7f"),_=Object(d["a"])(c,s,o,!1,null,null,null),S=_.exports;p()(_,{VApp:h["a"],VAppBar:g["a"],VAppBarNavIcon:m["a"],VFooter:f["a"],VIcon:v["a"],VList:y["a"],VListItem:b["a"],VListItemAction:I["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:C["a"],VToolbarTitle:k["a"]});var M={name:"App",components:{NavBar:S},data:()=>({})},T=M,V=(r("034f"),r("a75b")),A=Object(d["a"])(T,i,a,!1,null,null,null),R=A.exports;p()(A,{VApp:h["a"],VContent:V["a"]});var j=r("f309");n["a"].use(j["a"]);var E=new j["a"]({icons:{iconfont:"mdi"}}),L=r("8c4f"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-select",{attrs:{items:t.items,label:"Select a category",outlined:"","small-chips":"",clearable:"",dense:"",hint:""+t.search,"persistent-hint":"","hide-no-data":!t.search,"search-input":t.search},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("div",{staticClass:"container"},[r("magic-grid",t._l(t.filteredRecipes,(function(t,e){return r("card",{key:e,attrs:{idMeal:t.idMeal,strMeal:t.strMeal,strCategory:t.strCategory,strArea:t.strArea,strMealThumb:t.strMealThumb,strInstructions:t.strInstructions,strYoutube:t.strYoutube,strTags:t.strTags,strIngredient1:t.strIngredient1,strIngredient2:t.strIngredient2,strIngredient3:t.strIngredient3,strIngredient4:t.strIngredient4,strIngredient5:t.strIngredient5,strIngredient6:t.strIngredient6,strIngredient7:t.strIngredient7,strIngredient8:t.strIngredient8,strIngredient9:t.strIngredient9,strIngredient10:t.strIngredient10}})})),1)],1)],1)},P=[],B=r("6091"),N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card large"},[r("div",{staticClass:"card-image"},[r("router-link",{attrs:{to:{name:"detail",params:{idMeal:t.idMeal,strMeal:t.strMeal,strCategory:t.strCategory,strTags:t.strTags,strArea:t.strArea,strInstructions:t.strInstructions,strMealThumb:t.strMealThumb,strYoutube:t.strYoutube,strIngredient1:t.strIngredient1,strIngredient2:t.strIngredient2,strIngredient3:t.strIngredient3,strIngredient4:t.strIngredient4,strIngredient5:t.strIngredient5,strIngredient6:t.strIngredient6,strIngredient7:t.strIngredient7,strIngredient8:t.strIngredient8,strIngredient9:t.strIngredient9,strIngredient10:t.strIngredient10}}}},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:t.strMealThumb,alt:"Image",width:"250em"}})])])],1),r("div",{staticClass:"card-content content"},[r("h4",[t._v(t._s(t.strMeal))]),r("p",[t._v(t._s(t.strCategory))]),r("v-spacer"),r("v-chip",{staticClass:"mr-2",attrs:{color:"red",outlined:""},on:{click:function(e){return t.favorite()}}},[t.isFavorited?r("v-icon",[t._v("mdi-heart")]):r("v-icon",[t._v("mdi-heart-outline")])],1)],1)])},$=[],U={name:"card",data:()=>({isFavorited:!1,url:"",nameRecipe:""}),methods:{favorite(){!1===this.isFavorited?(this.isFavorited=!0,console.log("recipe name",name),this.axios.put(this.url+"/api/favorite",{nameRecipe:this.strMeal,categoryRecipe:this.strCategory,imageRecipe:this.strMealThumb,username:this.username})):this.isFavorited=!1}},props:{idMeal:{type:String,default:""},strMeal:{type:String,default:""},strCategory:{type:String,default:""},strTags:{type:String,default:""},strArea:{type:String,default:""},strInstructions:{type:String,default:""},strMealThumb:{type:Image,default:""},strYoutube:{type:String,default:""},strIngredient1:{type:String,default:""},strIngredient2:{type:String,default:""},strIngredient3:{type:String,default:""},strIngredient4:{type:String,default:""},strIngredient5:{type:String,default:""},strIngredient6:{type:String,default:""},strIngredient7:{type:String,default:""},strIngredient8:{type:String,default:""},strIngredient9:{type:String,default:""},strIngredient10:{type:String,default:""}}},F=U,W=r("cc20"),Y=Object(d["a"])(F,N,$,!1,null,null,null),D=Y.exports;p()(Y,{VChip:W["a"],VIcon:v["a"],VSpacer:C["a"]});var q={name:"grid",components:{card:D,magicGrid:B["a"]},data:()=>({search:"",recipes:[],colors:["brown","red","green","green lighten-2","yellow darken-1","lime lighten-1","blue","orange","amber","pink","red lighten-4","red","cyan","deep-purple"],items:[{header:"Select a category"},{text:"Breakfast",color:"brown",icon:"mdi-food-croissant"},{text:"Starter",color:"red",icon:"mdi-nutrition"},{text:"Vegetarian",color:"green",icon:"mdi-leaf"},{text:"Vegan",color:"green lighten-2",icon:"mdi-sprout-outline"},{text:"Pasta",color:"yellow darken-1",icon:"mdi-pasta"},{text:"Side",color:"lime lighten-1",icon:"mdi-bowl"},{text:"Seafood",color:"blue",icon:"mdi-fish"},{text:"Lamb",color:"orange",icon:"mdi-sheep"},{text:"Chicken",color:"amber",icon:""},{text:"Pork",color:"pink",icon:"mdi-pig-variant"},{text:"Goat",color:"red lighten-4",icon:""},{text:"Beef",color:"red",icon:"mdi-cow"},{text:"Miscellaneous",color:"cyan",icon:"mdi-hexagon-multiple"},{text:"Dessert",color:"deep-purple",icon:"mdi-cupcake"}]}),mounted(){fetch("https://raw.githubusercontent.com/Lulb8/Apis/master/meals.json").then(t=>t.json()).then(t=>{this.recipes=t.slice(0,209)})},computed:{filteredRecipes:function(){return this.recipes.filter(t=>{return t.strCategory.toLowerCase().match(this.search.toLowerCase())})}}},G=q,H=r("a523"),J=r("b974"),z=Object(d["a"])(G,O,P,!1,null,null,null),K=z.exports;p()(z,{VContainer:H["a"],VSelect:J["a"]}),n["a"].use(L["a"]);var Q=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:K},{path:"/detail",name:"detail",component:()=>r.e("chunk-b587f64a").then(r.bind(null,"08aa")),props:!0},{path:"/favorites",name:"favorites",component:()=>r.e("chunk-404caf0d").then(r.bind(null,"e8fb")),props:!0},{path:"/login",name:"login",component:()=>r.e("chunk-07ed4471").then(r.bind(null,"578a"))},{path:"/register",name:"register",component:()=>r.e("chunk-7c5f7d50").then(r.bind(null,"1feb"))},{path:"*",redirect:"/"}]}),X=r("bc3a"),Z=r.n(X),tt=r("a7fe"),et=r.n(tt);n["a"].config.productionTip=!1,Z.a.defaults.withCredentials=!0,n["a"].use(et.a,Z.a),new n["a"]({vuetify:E,router:Q,render:t=>t(R)}).$mount("#app")},6091:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[t.wrapper]},[t._t("default")],2)},i=[],a={name:"magic-grid",props:{wrapper:{type:String,default:"wrapper"},gap:{type:Number,default:32},maxCols:{type:Number,default:5},maxColWidth:{type:Number,default:280},animate:{type:Boolean,default:!0}},data(){return{started:!1,items:[]}},mounted(){this.waitUntilReady()},methods:{waitUntilReady(){this.isReady()?(this.positionItems(),window.addEventListener("resize",()=>{setTimeout(this.positionItems(),200)})):this.getReady()},isReady(){return this.$el&&this.items.length>0},getReady(){let t=setInterval(()=>{this.items=this.$el.children,this.isReady()&&(clearInterval(t),this.init())},100)},init(){this.isReady()&&!this.started&&(this.$el.style.position="relative",Array.prototype.forEach.call(this.items,t=>{t.style.position="absolute",t.style.maxWidth=this.maxColWidth+"px",this.animate&&(t.style.transition="top, left 0.2s ease")}),this.started=!0,this.waitUntilReady())},colWidth(){return this.items[0].getBoundingClientRect().width+this.gap},setup(){let t=this.$el.getBoundingClientRect().width,e=Math.floor(t/this.colWidth())||1,r=[];this.maxCols&&e>this.maxCols&&(e=this.maxCols);for(let i=0;i<e;i++)r[i]={height:0,top:0,index:i};let n=t-e*this.colWidth()+this.gap;return{cols:r,wSpace:n}},nextCol(t,e){return this.useMin?this.getMin(t):t[e%t.length]},positionItems(){let{cols:t,wSpace:e}=this.setup();e=Math.floor(e/2),Array.prototype.forEach.call(this.items,(r,n)=>{let i=this.nextCol(t,n),a=i.index*this.colWidth()+e;r.style.left=a+"px",r.style.top=i.height+i.top+"px",i.height+=i.top+r.getBoundingClientRect().height,i.top=this.gap}),this.$el.style.height=this.getMax(t).height+"px"},getMax(t){let e=t[0];for(let r of t)r.height>e.height&&(e=r);return e},getMin(t){let e=t[0];for(let r of t)r.height<e.height&&(e=r);return e}}},s=a,o=r("2877"),l=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports}});
//# sourceMappingURL=app.7c8d650a.js.map