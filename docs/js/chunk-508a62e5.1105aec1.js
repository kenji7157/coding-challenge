(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508a62e5","chunk-15b57efd","chunk-c659a290"],{"0d4e":function(e,t,a){"use strict";a("73b0")},"43d0":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-select",class:{disabled:e.disabled},style:e.styleVariables},[e._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectValue,expression:"selectValue"}],attrs:{disabled:e.disabled},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectValue=t.target.multiple?a:a[0]}}},e._l(e.options,(function(t,l){return a("option",{key:l,domProps:{value:t.value,selected:t.selected}},[e._v(" "+e._s(t.label)+" ")])})),0)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-select_icon"},[a("i",{staticClass:"fas fa-chevron-down fa-2x"})])}],n=a("9ab4"),c=a("1b40");let i=class extends c["c"]{get selectValue(){return this.value}set selectValue(e){this.$emit("input",e)}get styleVariables(){return{"--border-radius":this.explain?"0.4rem 0.4rem 0 0":"0.4rem"}}renewOptions(){this.options.length>0?this.$emit("input",this.options[0].value):this.$emit("input","")}};Object(n["a"])([Object(c["b"])({type:String,required:!0})],i.prototype,"value",void 0),Object(n["a"])([Object(c["b"])({type:Boolean,default:!1})],i.prototype,"disabled",void 0),Object(n["a"])([Object(c["b"])({type:Array,default:()=>[]})],i.prototype,"options",void 0),Object(n["a"])([Object(c["b"])({type:String,default:""})],i.prototype,"explain",void 0),Object(n["a"])([Object(c["d"])("options")],i.prototype,"renewOptions",null),i=Object(n["a"])([c["a"]],i);var u=i,r=u,o=(a("44ae"),a("2877")),p=Object(o["a"])(r,l,s,!1,null,"26e56857",null);t["default"]=p.exports},"44ae":function(e,t,a){"use strict";a("f6e3")},"51e7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-label",{attrs:{"is-required":!0},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("契約容量")]},proxy:!0}])}),a("b-select",{attrs:{disabled:0===e.ampsOption.length,options:e.ampsOption},model:{value:e.simulationData.amps,callback:function(t){e.$set(e.simulationData,"amps",t)},expression:"simulationData.amps"}})],1)},s=[],n=a("9ab4"),c=a("1b40"),i=a("7ebe"),u=a("43d0"),r=a("8324");let o=class extends c["c"]{constructor(){super(...arguments),this.ampsOption=[]}setAmpsOption(){this.ampsOption=Object(r["a"])(this.simulationData)}};Object(n["a"])([Object(c["b"])({type:Object})],o.prototype,"simulationData",void 0),Object(n["a"])([Object(c["d"])("simulationData.plan")],o.prototype,"setAmpsOption",null),o=Object(n["a"])([Object(c["a"])({components:{BLabel:i["default"],BSelect:u["default"]}})],o);var p=o,b=p,d=a("2877"),O=Object(d["a"])(b,l,s,!1,null,null,null);t["default"]=O.exports},"73b0":function(e,t,a){},"7ebe":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"label",class:{required:e.isRequired}},[e._t("label")],2)},s=[],n=a("9ab4"),c=a("1b40");let i=class extends c["c"]{};Object(n["a"])([Object(c["b"])({type:Boolean,default:!1})],i.prototype,"isRequired",void 0),i=Object(n["a"])([c["a"]],i);var u=i,r=u,o=(a("0d4e"),a("2877")),p=Object(o["a"])(r,l,s,!1,null,"78e45f4f",null);t["default"]=p.exports},8324:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return c}));var l=a("ebe2");function s(e){const t=[];return e===l["a"].OTHER||(e===l["a"].TOKYO?t.push({value:l["b"].TOKYO_DENRYOKU,label:l["b"].TOKYO_DENRYOKU,selected:!0}):e===l["a"].KANSAI&&t.push({value:l["b"].KANSAI_DENRYOKU,label:l["b"].KANSAI_DENRYOKU,selected:!0}),t.push({value:l["b"].OTHER,label:l["b"].OTHER})),t}function n(e){const t=[];return e===l["b"].TOKYO_DENRYOKU?(t.push({value:l["c"].PLAN_B,label:l["c"].PLAN_B,explain:l["c"].PLAN_B+"の説明",selected:!0}),t.push({value:l["c"].PLAN_C,label:l["c"].PLAN_C,explain:l["c"].PLAN_C+"の説明"})):e===l["b"].KANSAI_DENRYOKU&&(t.push({value:l["c"].PLAN_A,label:l["c"].PLAN_A,explain:l["c"].PLAN_A+"の説明",selected:!0}),t.push({value:l["c"].PLAN_B,label:l["c"].PLAN_B,explain:l["c"].PLAN_B+"の説明"})),t}function c(e){if(e.company===l["b"].TOKYO_DENRYOKU){if(e.plan===l["c"].PLAN_B)return["10A","15A","20A","30A","40A","50A","60A"].map((e,t)=>({value:e,label:e,selected:0===t}));if(e.plan===l["c"].PLAN_C)return[...Array(40)].map((e,t)=>({value:t+6+"kVA",label:t+6+"kVA",selected:0===t}))}else if(e.company===l["b"].KANSAI_DENRYOKU&&e.plan===l["c"].PLAN_B)return[...Array(40)].map((e,t)=>({value:t+6+"kVA",label:t+6+"kVA",selected:0===t}));return[]}},f6e3:function(e,t,a){}}]);
//# sourceMappingURL=chunk-508a62e5.1105aec1.js.map