(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bfa7d7c"],{"0dde":function(t,e,n){},"228d":function(t,e,n){"use strict";n("7d4d")},2338:function(t,e,n){"use strict";n("e0c1")},"4c36":function(t,e,n){"use strict";n("d01a")},5632:function(t,e,n){"use strict";n("e74d")},5994:function(t,e,n){"use strict";n("f441")},"5aea":function(t,e,n){"use strict";n("bed3")},"5d19":function(t,e,n){"use strict";n("96fa")},"7d4d":function(t,e,n){},"7eaf":function(t,e,n){"use strict";n("97f9")},"96fa":function(t,e,n){},"97f9":function(t,e,n){},9888:function(t,e,n){},bed3:function(t,e,n){},bfdb:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("the-header"),n("div",{staticClass:"simulation-box"},[n("zip-code-box",{attrs:{simulationData:t.simulationData}})],1),n("div",{staticClass:"simulation-box"},[n("status-box",{attrs:{simulationData:t.simulationData}})],1),n("div",{staticClass:"simulation-box"},[n("pay-box",{attrs:{simulationData:t.simulationData}})],1),n("div",{staticClass:"simulation-box"},[n("email-box",{attrs:{simulationData:t.simulationData}})],1),n("the-footer",{attrs:{send:t.send,disabled:!t.isEnabledSendButton}})],1)},o=[],i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)};function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function s(t,e,n,a){var o,i=arguments.length,r=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(i<3?o(r):i>3?o(e,n,r):o(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}Object.create;function u(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var a=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],r=0,s=i.length;r<s;r++,o++)a[o]=i[r];return a}Object.create;var l=n("2b0e");
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return d(t)||m(t)||y()}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function m(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function v(t,e){_(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){_(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){_(t,e,n)}))}function _(t,e,n){var a=n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e);a.forEach((function(a){var o=n?Reflect.getOwnMetadata(a,e,n):Reflect.getOwnMetadata(a,e);n?Reflect.defineMetadata(a,o,t,n):Reflect.defineMetadata(a,o,t)}))}var h={__proto__:[]},O=h instanceof Array;function g(t){return function(e,n,a){var o="function"===typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!==typeof a&&(a=void 0),o.__decorators__.push((function(e){return t(e,n,a)}))}}function C(t){var e=c(t);return null==t||"object"!==e&&"function"!==e}function D(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var a in t.$options.props)t.hasOwnProperty(a)||n.push(a);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var a=new e;e.prototype._init=n;var o={};return Object.keys(a).forEach((function(t){void 0!==a[t]&&(o[t]=a[t])})),o}var E=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(E.indexOf(t)>-1)e[t]=n[t];else{var a=Object.getOwnPropertyDescriptor(n,t);void 0!==a.value?"function"===typeof a.value?(e.methods||(e.methods={}))[t]=a.value:(e.mixins||(e.mixins=[])).push({data:function(){return p({},t,a.value)}}):(a.get||a.set)&&((e.computed||(e.computed={}))[t]={get:a.get,set:a.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return D(this,t)}});var a=t.__decorators__;a&&(a.forEach((function(t){return t(e)})),delete t.__decorators__);var o=Object.getPrototypeOf(t.prototype),i=o instanceof l["a"]?o.constructor:l["a"],r=i.extend(e);return j(r,t,i),b()&&v(r,t),r}var A={prototype:!0,arguments:!0,callee:!0,caller:!0};function j(t,e,n){Object.getOwnPropertyNames(e).forEach((function(a){if(!A[a]){var o=Object.getOwnPropertyDescriptor(t,a);if(!o||o.configurable){var i=Object.getOwnPropertyDescriptor(e,a);if(!O){if("cid"===a)return;var r=Object.getOwnPropertyDescriptor(n,a);if(!C(i.value)&&r&&r.value===i.value)return}0,Object.defineProperty(t,a,i)}}}))}function P(t){return"function"===typeof t?x(t):function(e){return x(e,t)}}P.registerHooks=function(t){E.push.apply(E,f(t))};var N=P;var S="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function Z(t,e,n){if(S&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var a=Reflect.getMetadata("design:type",e,n);a!==Object&&(t.type=a)}}function $(t){return void 0===t&&(t={}),function(e,n){Z(t,e,n),g((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}function B(t,e){void 0===e&&(e={});var n=e.deep,a=void 0!==n&&n,o=e.immediate,i=void 0!==o&&o;return g((function(e,n){"object"!==typeof e.watch&&(e.watch=Object.create(null));var o=e.watch;"object"!==typeof o[t]||Array.isArray(o[t])?"undefined"===typeof o[t]&&(o[t]=[]):o[t]=[o[t]],o[t].push({handler:n,deep:a,immediate:i})}))}var w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p_header"},[n("div",{staticClass:"p_header_top"},[n("div",[t._v("電気代から"),n("br"),t._v("かんたんシミュレーション")])]),n("div",[t._v(" 検針票を用意しなくてもOK"),n("br"),t._v("いくらおトクになるのか今すぐわかります！ ")])])}],k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e=s([N],e),e}(l["a"]),K=k,L=K,T=(n("5632"),n("2877")),Y=Object(T["a"])(L,w,R,!1,null,"31050fe2",null),I=Y.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-heading",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("郵便番号をご入力ください")]},proxy:!0}])}),n("div",{staticClass:"o_box-form"},[n("zip-code-form",{attrs:{simulationData:t.simulationData}})],1)],1)},V=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"a_heading"},[t._t("heading")],2)},H=[],q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e=s([N],e),e}(l["a"]),F=q,z=F,J=(n("228d"),Object(T["a"])(z,M,H,!1,null,"2336c18c",null)),G=J.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-label",{attrs:{"is-required":!0},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("電気を使用する場所の郵便番号")]},proxy:!0}])}),n("b-zip-code-input",{attrs:{firstZipCode:t.simulationData.firstZipCode,secondZipCode:t.simulationData.secondZipCode},on:{"update:firstZipCode":function(e){return t.$set(t.simulationData,"firstZipCode",e)},"update:first-zip-code":function(e){return t.$set(t.simulationData,"firstZipCode",e)},"update:secondZipCode":function(e){return t.$set(t.simulationData,"secondZipCode",e)},"update:second-zip-code":function(e){return t.$set(t.simulationData,"secondZipCode",e)}}}),t.isError?n("b-error-message",{scopedSlots:t._u([{key:"message",fn:function(){return[t._v("サービスエリア対象外です。")]},proxy:!0}],null,!1,652034592)}):t._e()],1)},W=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"a_label",class:{a_label_required:t.isRequired}},[t._t("label")],2)},tt=[],et=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),s([$({type:Boolean,default:!1})],e.prototype,"isRequired",void 0),e=s([N],e),e}(l["a"]),nt=et,at=nt,ot=(n("5d19"),Object(T["a"])(at,X,tt,!1,null,"1957f5ad",null)),it=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputFirstZipCode,expression:"inputFirstZipCode"}],staticClass:"a_zipcode-input_input a_input-box_input",attrs:{maxlength:"3"},domProps:{value:t.inputFirstZipCode},on:{input:function(e){e.target.composing||(t.inputFirstZipCode=e.target.value)}}}),n("div",{staticClass:"a_zipcode-input_hyphen"},[t._v("-")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSecondZipCode,expression:"inputSecondZipCode"}],ref:"secondZipCode",staticClass:"a_zipcode-input_input a_input-box_input",attrs:{maxlength:"4"},domProps:{value:t.inputSecondZipCode},on:{input:function(e){e.target.composing||(t.inputSecondZipCode=e.target.value)}}})])},st=[];function ut(t){return t?t.replace(/[０-９]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)-65248)})):""}var lt,ct,pt,ft=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"inputFirstZipCode",{get:function(){return this.firstZipCode},set:function(t){var e=ut(t);/^[0-9]{3}$/.test(e)&&this.$refs.secondZipCode.focus(),this.$emit("update:firstZipCode",e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"inputSecondZipCode",{get:function(){return this.secondZipCode},set:function(t){this.$emit("update:secondZipCode",ut(t))},enumerable:!1,configurable:!0}),s([$({type:String,required:!0})],e.prototype,"firstZipCode",void 0),s([$({type:String,required:!0})],e.prototype,"secondZipCode",void 0),e=s([N],e),e}(l["a"]),dt=ft,mt=dt,yt=(n("5aea"),Object(T["a"])(mt,rt,st,!1,null,"4326aa72",null)),bt=yt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_error-message"},[t._m(0),n("p",[t._t("message")],2)])},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_error-message_icon"},[n("i",{staticClass:"fas fa-exclamation-triangle"})])}],ht=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),s([$({type:Boolean,default:!1})],e.prototype,"isRequired",void 0),e=s([N],e),e}(l["a"]),Ot=ht,gt=Ot,Ct=(n("2338"),Object(T["a"])(gt,vt,_t,!1,null,"3af7c929",null)),Dt=Ct.exports;function Et(t,e){return/^[0-9]{3}$/.test(t)&&/^[0-9]{4}$/.test(e)&&("1"===t.slice(0,1)||"5"===t.slice(0,1))}function xt(t){return t!==ct.UNSELECTED&&t!==ct.OTHER&&Object.values(ct).includes(t)}function At(t){return t!==pt.UNSELECTED&&Object.values(pt).includes(t)}function jt(t){return t.company===ct.KANSAI_DENRYOKU&&t.plan===pt.PLAN_A||!!t.amps}(function(t){t["TOKYO"]="東京エリア",t["KANSAI"]="関西エリア",t["OTHER"]="対象外エリア"})(lt||(lt={})),function(t){t["TOKYO_DENRYOKU"]="東京電力",t["KANSAI_DENRYOKU"]="関西電力",t["OTHER"]="その他",t["UNSELECTED"]=""}(ct||(ct={})),function(t){t["PLAN_A"]="従量電灯A",t["PLAN_B"]="従量電灯B",t["PLAN_C"]="従量電灯C",t["UNSELECTED"]=""}(pt||(pt={}));var Pt=1e3;function Nt(t){return"string"===typeof t&&/^[0-9]+$/.test(t)&&Number(t)>=Pt||"number"===typeof t&&t>=Pt}var St=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;function Zt(t){return!/[^!-~]/g.test(t)&&St.test(t)}var $t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isError=!1,e}return r(e,t),e.prototype.check=function(){this.isError=!Et(this.simulationData.firstZipCode,this.simulationData.secondZipCode)},s([$({type:Object})],e.prototype,"simulationData",void 0),s([B("simulationData.firstZipCode"),B("simulationData.secondZipCode")],e.prototype,"check",null),e=s([N({components:{BLabel:it,BZipCodeInput:bt,BErrorMessage:Dt}})],e),e}(l["a"]),Bt=$t,wt=Bt,Rt=Object(T["a"])(wt,Q,W,!1,null,null,null),kt=Rt.exports,Kt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),s([$({type:Object})],e.prototype,"simulationData",void 0),e=s([N({components:{BHeading:G,ZipCodeForm:kt}})],e),e}(l["a"]),Lt=Kt,Tt=Lt,Yt=Object(T["a"])(Tt,U,V,!1,null,null,null),It=Yt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-heading",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("電気のご使用状況について教えてください")]},proxy:!0}])}),n("div",{staticClass:"o_box-form"},[n("company-form",{attrs:{simulationData:t.simulationData}})],1),n("div",{staticClass:"o_box-form"},[n("plan-form",{attrs:{simulationData:t.simulationData}})],1),n("div",{staticClass:"o_box-form"},[n("amps-form",{attrs:{simulationData:t.simulationData}})],1)],1)},Vt=[],Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-label",{attrs:{"is-required":!0},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("電力会社")]},proxy:!0}])}),n("b-select",{attrs:{disabled:0===t.companyOptions.length,options:t.companyOptions},model:{value:t.simulationData.company,callback:function(e){t.$set(t.simulationData,"company",e)},expression:"simulationData.company"}}),t.isOtherCompany?n("b-error-message",{scopedSlots:t._u([{key:"message",fn:function(){return[t._v("シミュレーション対象外です。")]},proxy:!0}],null,!1,629696893)}):t._e()],1)},Ht=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_select",class:{disabled:t.disabled},style:t.styleVariables},[t._m(0),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectValue,expression:"selectValue"}],staticClass:"a_select_select",attrs:{disabled:t.disabled},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectValue=e.target.multiple?n:n[0]}}},t._l(t.options,(function(e,a){return n("option",{key:a,domProps:{value:e.value,selected:e.selected}},[t._v(" "+t._s(e.label)+" ")])})),0)])},Ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_select_icon"},[n("i",{staticClass:"fas fa-chevron-down fa-2x"})])}],zt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"selectValue",{get:function(){return this.value},set:function(t){this.$emit("input",t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"styleVariables",{get:function(){return{"--border-radius":this.explain?"0.4rem 0.4rem 0 0":"0.4rem"}},enumerable:!1,configurable:!0}),e.prototype.renewOptions=function(){this.options.length>0?this.$emit("input",this.options[0].value):this.$emit("input","")},s([$({type:String,required:!0})],e.prototype,"value",void 0),s([$({type:Boolean,default:!1})],e.prototype,"disabled",void 0),s([$({type:Array,default:function(){return[]}})],e.prototype,"options",void 0),s([$({type:String,default:""})],e.prototype,"explain",void 0),s([B("options")],e.prototype,"renewOptions",null),e=s([N],e),e}(l["a"]),Jt=zt,Gt=Jt,Qt=(n("4c36"),Object(T["a"])(Gt,qt,Ft,!1,null,"5758cddc",null)),Wt=Qt.exports;function Xt(t){var e={zipCode:t.firstZipCode+t.secondZipCode,company:t.company,plan:t.plan,amps:t.amps,pay:Number(t.pay),email:t.email};alert("【結果を見る(入力値の確認)】\n郵便番号："+e.zipCode+"\n会社："+e.company+"\nプラン："+e.plan+"\n契約容量："+e.amps+"\n支払金額："+e.pay+"\nメールアドレス："+e.email)}function te(t,e){var n=ee(t,e);return n}function ee(t,e){return Et(t,e)?"1"===t.slice(0,1)?lt.TOKYO:"5"===t.slice(0,1)?lt.KANSAI:lt.OTHER:lt.OTHER}function ne(t){var e={value:ct.OTHER,label:ct.OTHER};return t===lt.TOKYO?[{value:ct.TOKYO_DENRYOKU,label:ct.TOKYO_DENRYOKU,selected:!0},e]:t===lt.KANSAI?[{value:ct.KANSAI_DENRYOKU,label:ct.KANSAI_DENRYOKU,selected:!0},e]:[]}function ae(t){return t===ct.TOKYO_DENRYOKU?[{value:pt.PLAN_B,label:pt.PLAN_B,explain:pt.PLAN_B+"の説明",selected:!0},{value:pt.PLAN_C,label:pt.PLAN_C,explain:pt.PLAN_C+"の説明"}]:t===ct.KANSAI_DENRYOKU?[{value:pt.PLAN_A,label:pt.PLAN_A,explain:pt.PLAN_A+"の説明",selected:!0},{value:pt.PLAN_B,label:pt.PLAN_B,explain:pt.PLAN_B+"の説明"}]:[]}function oe(t){if(t.company===ct.TOKYO_DENRYOKU){if(t.plan===pt.PLAN_B)return["10A","15A","20A","30A","40A","50A","60A"].map((function(t,e){return{value:t,label:t,selected:0===e}}));if(t.plan===pt.PLAN_C)return u(Array(44)).map((function(t,e){return{value:e+6+"kVA",label:e+6+"kVA",selected:0===e}}))}else if(t.company===ct.KANSAI_DENRYOKU&&t.plan===pt.PLAN_B)return u(Array(44)).map((function(t,e){return{value:e+6+"kVA",label:e+6+"kVA",selected:0===e}}));return[]}var ie=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.companyOptions=[],e}return r(e,t),Object.defineProperty(e.prototype,"isOtherCompany",{get:function(){return this.simulationData.company===ct.OTHER},enumerable:!1,configurable:!0}),e.prototype.setCompanyOption=function(){var t=te(this.simulationData.firstZipCode,this.simulationData.secondZipCode);this.companyOptions=ne(t)},s([$({type:Object})],e.prototype,"simulationData",void 0),s([B("simulationData.firstZipCode"),B("simulationData.secondZipCode")],e.prototype,"setCompanyOption",null),e=s([N({components:{BLabel:it,BSelect:Wt,BErrorMessage:Dt}})],e),e}(l["a"]),re=ie,se=re,ue=Object(T["a"])(se,Mt,Ht,!1,null,null,null),le=ue.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-label",{attrs:{"is-required":!0},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("プラン")]},proxy:!0}])}),n("b-select",{attrs:{disabled:0===t.planOptions.length,options:t.planOptions,explain:t.explain},model:{value:t.simulationData.plan,callback:function(e){t.$set(t.simulationData,"plan",e)},expression:"simulationData.plan"}}),t.explain?n("b-info-message",{scopedSlots:t._u([{key:"message",fn:function(){return[t._v(t._s(t.explain))]},proxy:!0}],null,!1,634706748)}):t._e()],1)},pe=[],fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_info-message"},[n("p",[t._t("message")],2)])},de=[],me=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e=s([N],e),e}(l["a"]),ye=me,be=ye,ve=(n("5994"),Object(T["a"])(be,fe,de,!1,null,"0e5ccc32",null)),_e=ve.exports,he=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.planOptions=[],e}return r(e,t),Object.defineProperty(e.prototype,"explain",{get:function(){var t=this,e=this.planOptions.find((function(e){return e.value===t.simulationData.plan}));return null===e||void 0===e?void 0:e.explain},enumerable:!1,configurable:!0}),e.prototype.setPlanOption=function(){this.planOptions=ae(this.simulationData.company)},s([$({type:Object})],e.prototype,"simulationData",void 0),s([B("simulationData.company")],e.prototype,"setPlanOption",null),e=s([N({components:{BLabel:it,BSelect:Wt,BInfoMessage:_e}})],e),e}(l["a"]),Oe=he,ge=Oe,Ce=Object(T["a"])(ge,ce,pe,!1,null,null,null),De=Ce.exports,Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-label",{attrs:{"is-required":!0},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("契約容量")]},proxy:!0}])}),n("b-select",{attrs:{disabled:0===t.ampsOption.length,options:t.ampsOption},model:{value:t.simulationData.amps,callback:function(e){t.$set(t.simulationData,"amps",e)},expression:"simulationData.amps"}})],1)},xe=[],Ae=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ampsOption=[],e}return r(e,t),e.prototype.setAmpsOption=function(){this.ampsOption=oe(this.simulationData)},s([$({type:Object})],e.prototype,"simulationData",void 0),s([B("simulationData.plan")],e.prototype,"setAmpsOption",null),e=s([N({components:{BLabel:it,BSelect:Wt}})],e),e}(l["a"]),je=Ae,Pe=je,Ne=Object(T["a"])(Pe,Ee,xe,!1,null,null,null),Se=Ne.exports,Ze=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),s([$({type:Object})],e.prototype,"simulationData",void 0),e=s([N({components:{BHeading:G,CompanyForm:le,PlanForm:De,AmpsForm:Se}})],e),e}(l["a"]),$e=Ze,Be=$e,we=Object(T["a"])(Be,Ut,Vt,!1,null,null,null),Re=we.exports,ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-heading",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("現在の電気の使用状況について教えてください")]},proxy:!0}])}),n("div",{staticClass:"o_box-form"},[n("pay-form",{attrs:{simulationData:t.simulationData,disabled:!t.isEnabledPayInput}})],1)],1)},Ke=[],Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-label",{attrs:{"is-required":!0},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("先月の電気代は？")]},proxy:!0}])}),n("div",{staticClass:"m_pay-form_input"},[n("b-input",{attrs:{value:t.simulationData.pay,disabled:t.disabled},on:{input:t.setPayValue}}),n("span",{staticClass:"m_pay-form_unit"},[t._v("円")])],1),t.isError?n("b-error-message",{scopedSlots:t._u([{key:"message",fn:function(){return[t._v("電気代を正しく入力してください。")]},proxy:!0}],null,!1,1735270019)}):t._e()],1)},Te=[],Ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a_input-box",class:{disabled:t.disabled}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"a_input-box_input",attrs:{disabled:t.disabled},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])},Ie=[],Ue=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"inputValue",{get:function(){return this.value},set:function(t){this.$emit("input",t)},enumerable:!1,configurable:!0}),s([$({type:[String,Number,Object]})],e.prototype,"value",void 0),s([$({type:Boolean,default:!1})],e.prototype,"disabled",void 0),e=s([N],e),e}(l["a"]),Ve=Ue,Me=Ve,He=Object(T["a"])(Me,Ye,Ie,!1,null,null,null),qe=He.exports,Fe=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isError=!1,e}return r(e,t),e.prototype.setPayValue=function(t){this.simulationData.pay=ut(t).replace(/^0+/,"")},e.prototype.check=function(){this.isError=!Nt(this.simulationData.pay)},s([$({type:Object})],e.prototype,"simulationData",void 0),s([$({type:Boolean,default:!1})],e.prototype,"disabled",void 0),s([B("simulationData.pay")],e.prototype,"check",null),e=s([N({components:{BLabel:it,BInput:qe,BErrorMessage:Dt}})],e),e}(l["a"]),ze=Fe,Je=ze,Ge=(n("e515"),Object(T["a"])(Je,Le,Te,!1,null,"79914ec4",null)),Qe=Ge.exports;function We(t){return Et(t.firstZipCode,t.secondZipCode)&&xt(t.company)&&At(t.plan)&&jt(t)}function Xe(t){return We(t)&&Nt(t.pay)}function tn(t){return Xe(t)&&Zt(t.email)}var en=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"isEnabledPayInput",{get:function(){return We(this.simulationData)},enumerable:!1,configurable:!0}),s([$({type:Object})],e.prototype,"simulationData",void 0),e=s([N({components:{BHeading:G,PayForm:Qe}})],e),e}(l["a"]),nn=en,an=nn,on=Object(T["a"])(an,ke,Ke,!1,null,null,null),rn=on.exports,sn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-heading",{scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("メールアドレスをご入力ください")]},proxy:!0}])}),n("div",{staticClass:"o_box-form"},[n("email-form",{attrs:{simulationData:t.simulationData,disabled:!t.isEnabledEmailInput}})],1)],1)},un=[],ln=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-label",{attrs:{"is-required":!0}}),n("b-input",{attrs:{disabled:t.disabled},model:{value:t.simulationData.email,callback:function(e){t.$set(t.simulationData,"email",e)},expression:"simulationData.email"}}),t.isError?n("b-error-message",{scopedSlots:t._u([{key:"message",fn:function(){return[t._v("メールアドレスを正しく入力してください。")]},proxy:!0}],null,!1,1704902532)}):t._e()],1)},cn=[],pn=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isError=!1,e}return r(e,t),e.prototype.check=function(){this.isError=!Zt(this.simulationData.email)},s([$({type:Object})],e.prototype,"simulationData",void 0),s([$({type:Boolean,default:!1})],e.prototype,"disabled",void 0),s([B("simulationData.email")],e.prototype,"check",null),e=s([N({components:{BLabel:it,BInput:qe,BErrorMessage:Dt}})],e),e}(l["a"]),fn=pn,dn=fn,mn=Object(T["a"])(dn,ln,cn,!1,null,null,null),yn=mn.exports,bn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),Object.defineProperty(e.prototype,"isEnabledEmailInput",{get:function(){return Xe(this.simulationData)},enumerable:!1,configurable:!0}),s([$({type:Object})],e.prototype,"simulationData",void 0),e=s([N({components:{BHeading:G,EmailForm:yn}})],e),e}(l["a"]),vn=bn,_n=vn,hn=Object(T["a"])(_n,sn,un,!1,null,null,null),On=hn.exports,gn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p_footer"},[n("button",{staticClass:"p_footer_button",class:{disabled:t.disabled},attrs:{disabled:t.disabled},on:{click:t.send}},[t._v(" 結果を見る "),t._m(0)])])},Cn=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p_footer_icon"},[n("i",{staticClass:"fas fa-chevron-circle-right"})])}],Dn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),s([$({type:Function})],e.prototype,"send",void 0),s([$({type:Boolean,default:!1})],e.prototype,"disabled",void 0),e=s([N],e),e}(l["a"]),En=Dn,xn=En,An=(n("c3c6"),Object(T["a"])(xn,gn,Cn,!1,null,"147a991d",null)),jn=An.exports,Pn=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.simulationData={firstZipCode:"",secondZipCode:"",company:ct.UNSELECTED,plan:pt.UNSELECTED,amps:"",pay:"",email:""},e}return r(e,t),Object.defineProperty(e.prototype,"isEnabledSendButton",{get:function(){return tn(this.simulationData)},enumerable:!1,configurable:!0}),e.prototype.send=function(){Xt(this.simulationData)},e=s([N({components:{TheHeader:I,ZipCodeBox:It,StatusBox:Re,PayBox:rn,EmailBox:On,TheFooter:jn}})],e),e}(l["a"]),Nn=Pn,Sn=Nn,Zn=(n("7eaf"),Object(T["a"])(Sn,a,o,!1,null,"332c7112",null));e["default"]=Zn.exports},c3c6:function(t,e,n){"use strict";n("9888")},d01a:function(t,e,n){},e0c1:function(t,e,n){},e515:function(t,e,n){"use strict";n("0dde")},e74d:function(t,e,n){},f441:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4bfa7d7c.e18e6465.js.map