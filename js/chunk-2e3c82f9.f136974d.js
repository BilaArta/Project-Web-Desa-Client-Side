(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e3c82f9"],{"17b3":function(t,e,i){},"1f09":function(t,e,i){},"2bfd":function(t,e,i){},"36a7":function(t,e,i){},"6ed0":function(t,e,i){},"7e58":function(t,e,i){},"8a79":function(t,e,i){"use strict";var n=i("23e7"),a=i("06cf").f,s=i("50c4"),r=i("5a34"),o=i("1d80"),l=i("ab13"),c=i("c430"),h="".endsWith,u=Math.min,d=l("endsWith"),g=!c&&!d&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!g&&!d},{endsWith:function(t){var e=String(o(this));r(t);var i=arguments.length>1?arguments[1]:void 0,n=s(e.length),a=void 0===i?n:u(s(i),n),l=String(t);return h?h.call(e,l,a):e.slice(a-l.length,a)===l}})},"8efc":function(t,e,i){},a030:function(t,e,i){"use strict";i("6ed0")},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8a79"),i("2ca0");var n=i("53ca"),a=(i("8efc"),i("90a2")),s=(i("36a7"),i("24b2")),r=i("58df"),o=Object(r["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=o,c=i("7560"),h=i("d9f7"),u=i("d9bd"),d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(l,c["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(u["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,s=t.naturalWidth;a||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=l.options.render.call(this,t),i=Object(h["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},d186:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Berita")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.news,(function(e,n){return i("v-row",{key:n,attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"3"}},[0==n?i("v-card",{staticClass:"pa-4 sticky-card",attrs:{elevation:"4",outlined:""}},[i("p",{staticClass:"subtitle-2",domProps:{textContent:t._s("Pencarian berdasarkan judul berita :")}}),i("v-autocomplete",{attrs:{items:t.judul,clearable:"",filled:"",label:"Judul Berita"},model:{value:t.selectedJudul,callback:function(e){t.selectedJudul=e},expression:"selectedJudul"}}),i("p",{staticClass:"subtitle-2",domProps:{textContent:t._s("Pencarian berdasarkan jenis berita :")}}),i("v-select",{attrs:{items:t.jenis,clearable:"",filled:"",chips:"",label:"Jenis Berita"},model:{value:t.selectedJenis,callback:function(e){t.selectedJenis=e},expression:"selectedJenis"}}),i("p",{staticClass:"subtitle-2",domProps:{textContent:t._s("Urutkan berdasarkan berita :")}}),i("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.sorting,callback:function(e){t.sorting=e},expression:"sorting"}},[i("v-btn",[t._v("Terakhir")]),i("v-btn",[t._v("Terbaru")])],1)],1):t._e()],1),i("v-col",{attrs:{cols:"9"}},[i("News",{attrs:{datasets:e,loading:t.loading}})],1)],1)})),i("div",{staticClass:"text-center"},[i("v-pagination",{attrs:{length:t.pagination.total,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.onPageChange},model:{value:t.pagination.current,callback:function(e){t.$set(t.pagination,"current",e)},expression:"pagination.current"}})],1)],2)},r=[],o=(i("d81d"),i("b0c0"),i("1a72")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-skeleton-loader",{staticClass:"mb-4",attrs:{type:"article, card-image",loading:t.loading}},[i("v-card",{staticClass:"pa-4",attrs:{elevation:"4",outlined:""}},[i("v-card-title",[t._v(" "+t._s(t.datasets.judul)+" ")]),i("v-card-subtitle",[t._v(" "+t._s(t.datasets.jenis)+" ")]),i("hr",{staticClass:"mt-n3 mb-n2"}),i("v-card-text",[i("span",[t._v(t._s(t.getDate[0])+" : "+t._s(t.getDate[1]))]),i("br"),i("span",{staticClass:"black--text"},[t._v(" "+t._s(t.datasets.deskripsi)+" ")])]),i("v-img",{attrs:{height:"auto",width:"auto",src:t.path+t.datasets.file,alt:"Card image"}})],1)],1)],1)},c=[],h=(i("fb6a"),i("ac1f"),i("1276"),{props:["datasets","loading"],data:function(){return{path:"http://127.0.0.1:8000/storage/"}},computed:{getDate:{get:function(){if(null!=this.datasets.created_at){var t=this.datasets.created_at.split("T"),e=t[1].slice(3,8);return t=t[0],[t,e]}return[null]}}}}),u=h,d=i("2877"),g=i("6544"),p=i.n(g),f=i("b0af"),m=i("99d9"),v=i("adda"),b=(i("a630"),i("c975"),i("3ca3"),i("5319"),i("3835")),S=i("5530"),y=(i("1f09"),i("c995")),I=i("24b2"),x=i("7560"),_=i("58df"),C=i("80d2"),j=Object(_["a"])(y["a"],I["a"],x["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(S["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(S["a"])(Object(S["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(S["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,i=t.split("@"),n=Object(b["a"])(i,2),a=n[0],s=n[1],r=function(){return e.genStructure(a)};return Array.from({length:s}).map(r)},genStructure:function(t){var e=[];t=t||this.type||"";var i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(C["r"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),w=Object(d["a"])(u,l,c,!1,null,null,null),B=w.exports;p()(w,{VCard:f["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VImg:v["a"],VSkeletonLoader:j});var O={data:function(){return{news:[],sorting:0,isSorted:!1,isSearcingByJenis:!1,loading:!0,pagination:{current:1,total:0},jenis:[],judul:[],selectedJudul:"",selectedJenis:"",breakPoint:""}},methods:{onPageChange:function(){this.loading=!0,window.scrollTo(0,0),this.isSorted&&this.isSearcingByJenis?this.getSearchingAndSortedData():this.isSorted?this.getSortingData():this.isSearcingByJenis?this.getSearchingByJenis():this.getDataBerita()},getJudulAndJenis:function(){var t=this;Object(o["d"])().then((function(e){var i=e.map((function(t){return t.judul})),n=e.map((function(t){return t.jenis}));t.judul=i,t.jenis=n}))},getDataBerita:function(){var t=this;Object(o["c"])(this.pagination.current).then((function(e){t.pagination.current=e.current_page,t.pagination.total=e.last_page,t.news=e.data,t.loading=!1}))},getSearchingByJenis:function(){var t=this;Object(o["j"])(this.pagination.current,this.selectedJenis).then((function(e){t.pagination.current=e.current_page,t.pagination.total=e.last_page,t.news=e.data,t.jenis,t.loading=!1}))},getSortingData:function(t){var e=this;Object(o["l"])(this.pagination.current,t).then((function(t){e.pagination.current=t.current_page,e.pagination.total=t.last_page,e.news=t.data,e.loading=!1}))},getSearchingAndSortedData:function(){var t=this;Object(o["k"])(this.pagination.current,this.selectedJenis,!0).then((function(e){t.pagination.current=e.current_page,t.pagination.total=e.last_page,t.news=e.data,t.loading=!1}))}},created:function(){var t=this;this.loading=!0,this.getJudulAndJenis(),Object(o["c"])(this.pagination.current).then((function(e){t.pagination.current=e.current_page,t.pagination.total=e.last_page,t.news=e.data,t.loading=!1,console.log(e.data)}))},watch:{breakPoint:function(){console.log(this.$vuetify.breakpoint.name)},selectedJenis:function(){console.log(this.selectedJenis),this.loading=!0,this.news=[],this.pagination.current=1,this.selectedJenis?this.isSorted?(this.getSearchingAndSortedData(),this.isSearcingByJenis=!0):(this.getSearchingByJenis(),this.isSearcingByJenis=!0):(this.isSorted?this.getSortingData(!0):this.getDataBerita(),this.isSearcingByJenis=!1)},sorting:function(){console.log(this.sorting),this.loading=!0,this.news=[],this.pagination.current=1,1==this.sorting?this.isSearcingByJenis?(this.getSearchingAndSortedData(),this.isSorted=!0):(this.getSortingData(!0),this.isSorted=!0):(this.isSearcingByJenis?this.getSearchingByJenis():this.getDataBerita(),this.isSorted=!1)}},components:{News:B}},$=O,k=(i("a030"),i("4de4"),i("7db0"),i("45fc"),i("498a"),i("2bfd"),i("b974")),D=i("8654"),L=i("d9f7"),A=Object(S["a"])(Object(S["a"])({},k["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),J=k["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:k["a"].options.props.menuProps.type,default:function(){return A}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(S["a"])(Object(S["a"])({},k["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(C["q"])(e,t.itemText),n=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=k["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(S["a"])(Object(S["a"])({},A),t)},searchIsDirty:function(){return null!=this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=k["a"].options.computed.listData.call(this);return t.props=Object(S["a"])(Object(S["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===C["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===C["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==C["x"].backspace&&t!==C["x"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,a=t!==n-1?t:t-1,s=this.selectedItems[a];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,k["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=D["a"].options.methods.genInput.call(this);return t.data=Object(L["a"])(t.data,{attrs:{"aria-activedescendant":Object(C["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(C["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=k["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?k["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;k["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){k["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){k["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){k["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,i;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],a=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(i=t.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}}}),z=i("8336"),V=(i("7e58"),i("604c")),E=V["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return V["a"].options.computed.classes.call(this)}},methods:{genData:V["a"].options.methods.genData}}),T=i("a9ad"),P=Object(_["a"])(E,T["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(S["a"])(Object(S["a"])({},E.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(S["a"])({},E.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),R=i("62ad"),M=(i("99af"),i("a9e3"),i("d3b7"),i("25f0"),i("2909")),F=(i("17b3"),i("9d26")),W=i("dc22"),N=i("de2c"),H=Object(_["a"])(T["a"],Object(N["a"])({onVisible:["init"]}),x["a"]).extend({name:"v-pagination",directives:{Resize:W["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(S["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),a=this.length-n+1+i;if(this.value>n&&this.value<a){var s=this.value-n+2,r=this.value+n-2-i;return[1,"..."].concat(Object(M["a"])(this.range(s,r)),["...",this.length])}if(this.value===n){var o=this.value+n-1-i;return[].concat(Object(M["a"])(this.range(1,o)),["...",this.length])}if(this.value===a){var l=this.value-n+1;return[1,"..."].concat(Object(M["a"])(this.range(l,this.length)))}return[].concat(Object(M["a"])(this.range(1,n)),["..."],Object(M["a"])(this.range(a,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":a},on:i?{}:{click:n}},[t(F["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary"),a=e===this.value,s=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),q=i("0fd9"),K=Object(d["a"])($,s,r,!1,null,null,null),U=K.exports;p()(K,{VAutocomplete:J,VBtn:z["a"],VBtnToggle:P,VCard:f["a"],VCol:R["a"],VPagination:H,VRow:q["a"],VSelect:k["a"]});var Y={components:{Berita:U}},G=Y,Q=Object(d["a"])(G,n,a,!1,null,null,null);e["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-2e3c82f9.f136974d.js.map