(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c2890b"],{"4bd4":function(t,n,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var r=i("5530"),e=i("58df"),a=i("7e2b"),s=i("3206");n["a"]=Object(e["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var n=Object.values(t).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var n=this,i=function(t){return t.$watch("hasError",(function(i){n.$set(n.errorBag,t._uid,i)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(e){e&&(n.errorBag.hasOwnProperty(t._uid)||(r.valid=i(t)))})):r.valid=i(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var n=this.inputs.find((function(n){return n._uid===t._uid}));if(n){var i=this.watchers.find((function(t){return t._uid===n._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==n._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==n._uid})),this.$delete(this.errorBag,n._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return n.$emit("submit",t)}}},this.$slots.default)}})},"7dc4":function(t,n,i){"use strict";i.r(n);var r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("Login")},e=[],a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-row",[i("v-col",{attrs:{cols:"3"}}),i("v-col",{attrs:{cols:"6"}},[i("v-card",{staticClass:"pa-4",attrs:{tile:""}},[i("v-form",[i("p",{staticClass:"subtitle-1"},[t._v("Masukkan NIK sesuai dengan KTP anda :")]),i("v-text-field",{attrs:{rules:t.rules,label:"NIK",required:"",maxlength:"16"},model:{value:t.nik,callback:function(n){t.nik=n},expression:"nik"}}),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{attrs:{large:"",color:"primary"},on:{click:t.submit}},[t._v(" Login ")])],1)],1)],1)],1),i("v-col",{attrs:{cols:"3"}})],1)},s=[],u=(i("b0c0"),i("1a72")),o={data:function(){return{nik:"",rules:[function(t){return!!t||"Required."},function(t){return t&&16==t.length||"Jumlah NIK 16 karakter"}]}},methods:{submit:function(){var t=this;Object(u["a"])({nik:this.nik}).then((function(n){t.$router.push({name:"Cetak surat",params:{id:n.id,nama:n.name}})})).catch((function(t){alert("Status code ["+t.response.status+"] : "+t.response.data.msg)}))}}},c=o,d=i("2877"),l=i("6544"),h=i.n(l),f=i("8336"),v=i("b0af"),b=i("99d9"),p=i("62ad"),m=i("4bd4"),_=i("0fd9"),g=i("8654"),w=Object(d["a"])(c,a,s,!1,null,null,null),k=w.exports;h()(w,{VBtn:f["a"],VCard:v["a"],VCardActions:b["a"],VCol:p["a"],VForm:m["a"],VRow:_["a"],VTextField:g["a"]});var V={components:{Login:k}},B=V,j=Object(d["a"])(B,r,e,!1,null,null,null);n["default"]=j.exports},"99d9":function(t,n,i){"use strict";i.d(n,"a",(function(){return a})),i.d(n,"b",(function(){return s})),i.d(n,"c",(function(){return u})),i.d(n,"d",(function(){return o}));var r=i("b0af"),e=i("80d2"),a=Object(e["h"])("v-card__actions"),s=Object(e["h"])("v-card__subtitle"),u=Object(e["h"])("v-card__text"),o=Object(e["h"])("v-card__title");r["a"]}}]);
//# sourceMappingURL=chunk-34c2890b.400e7694.js.map