/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={amdO:{},n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}};function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.r({});const r=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e(this,"unImmutableData",{equal:function(t,e){return t===e},copy:function(t){return t}}),e(this,"global",{maxDepth:20,ignore:null,copyIfDiff:null,listKey:"_id",listItemSimiliarity:.6})}var r;return(r=[{key:"set",value:function(t){this.global.maxDepth=(t.maxDepth?parseInt(t.maxDepth):20)||20,this.global.listKey=t.listKey||"_id",this.global.listItemSimiliarity=Math.max(t.listItemSimiliarity,.1)||.6,this.global.copyAllIfDiff=t.copyAllIfDiff,this.global.ignore=t.ignore}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,r),t}());var n=require("immutable"),o=t.n(n),i=require("kind-of"),a=t.n(i);n=require("isobject"),i=t.n(n);const u=new(function(){function t(){var e,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r={},(e="cache")in this?Object.defineProperty(this,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[e]=r}var e;return(e=[{key:"set",value:function(t,e,r){o().isImmutable(t)&&o().isImmutable(e)?this.cache[o().hash(t)+"_"+o().hash(e)]=r:o().isImmutable(t)&&void 0!==e&&(this.cache[o().hash(t)]=e)}},{key:"get",value:function(t,e){return o().isImmutable(t)&&o().isImmutable(e)?this.cache[o().hash(t)+"_"+o().hash(e)]:o().isImmutable(t)&&void 0===e?this.cache[o().hash(t)]:null}},{key:"size",value:function(){return Object.getOwnPropertyNames(this.cache).length}},{key:"clear",value:function(){this.cache={}}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,e),t}());function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=Object.prototype.toString;function c(t){return o().isImmutable(t)}var s=function(t){return"object"===l(t)&&(o().isImmutable(t)||Array.isArray(t)||function(t){if(!t||"object"!==l(t)||"[object Object]"!==f.call(t))return!1;if(null===(t=Object.getPrototypeOf(t)))return!0;for(var e=t,r=Object.getPrototypeOf(t);null!==r;)e=r,r=Object.getPrototypeOf(e);return e===t}(t))};function p(t){return s(t)?o().fromJS(t).toJS():t}function m(t){return"string"==typeof t||"number"==typeof t||"symbol"===l(t)||"boolean"==typeof t||null==t}function y(t,e){var r=1<arguments.length&&void 0!==e&&e;if(o().isImmutable(t)){if(e=t.toString(),!r)return"Immutable "+e.split(" ")[0];if(0==e.indexOf("Map"))return"object";if(0==e.indexOf("List"))return"array";t=t.toJS()}return a()(t)}i();var h=function(t){return void 0===t};function d(t){var e=0;return s(t)?(t=o().fromJS(t),u.get(t)?u.get(t):(t.map((function(t){e+=d(t)})),e&&u.set(t,e),e)):1}var b=o().fromJS,g=function(t){if(e=t,("object"===("undefined"==typeof HTMLElement?"undefined":l(HTMLElement))?e instanceof HTMLElement:e&&"object"===l(e)&&(1===e.nodeType||9===e.nodeType)&&"string"==typeof e.nodeName)||m(t))return t;if(o().isImmutable(t))return t;var e=o().fromJS(t);return o().isImmutable(e)?e:r.unImmutableData.copy(t)};function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var S=function(t){return!(!(e=t)||"object"!==v(e)||(e=t,"[object RegExp]"===(t=Object.prototype.toString.call(e))||"[object Date]"===t||function(t){return t.$$typeof===I}(e)));var e},I="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function j(t,e){return!1!==e.clone&&e.isMergeableObject(t)?L(Array.isArray(t)?[]:{},t,e):t}function O(t){return Object.keys(t).concat((e=t,Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]));var e}function x(t,e){try{return e in t}catch(t){return!1}}function L(t,e,r){return(r=r||{}).isMergeableObject=r.isMergeableObject||S,t===e?t:"object"!==v(t)||null===t?e:function(t,e,r){var n=t||{};return r.isMergeableObject(t)&&O(t).forEach((function(e){n[e]=j(t[e],r)})),O(e).forEach((function(o){var i,a;(!x(i=t,a=o)||Object.hasOwnProperty.call(i,a)&&Object.propertyIsEnumerable.call(i,a))&&(x(t,o)&&r.isMergeableObject(e[o])?n[o]=(i=o,((a=r).customMerge&&"function"==typeof(i=a.customMerge(i))?i:L)(t[o],e[o],r)):n[o]=j(e[o],r))})),n}(t,e,r)}function J(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e,r){return e&&D(t.prototype,e),r&&D(t,r),t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=new(function(){function t(){M(this,t),P(this,"mergeLog",{}),P(this,"log",[]),P(this,"cache",[])}return E(t,[{key:"push",value:function(t){switch(t.operation){case"add":case"update":case"del":return void(this.mergeLog[t.operation]=function(t,e,r){var n=0<arguments.length&&void 0!==t?t:{},i=(e=1<arguments.length?e:void 0,2<arguments.length&&void 0!==r?r:["add","update","del"]);if("object"!=A(n))throw new Error("请输入Object");return(e=Array.isArray(e)?e:[e]).map((function(t){if(i.includes(t.operation))for(var e,r=t.path,a=(r=o().isImmutable(r)?r.toArray():r,t.type),u=(a=o().isImmutable(a)?a.toArray():a,n),l=0;l<r.length;l++){if(e=r[l],"del"==t.operation&&1==r.length){u[e]=null;break}if("del"==t.operation&&l==r.length-2){void 0!==u[e]?Array.isArray(u[e])?u[e].push(r[r.length-1]):u[e]=[u[e],r[r.length-1]]:u[e]=r[r.length-1];break}var f=a[l+1];("object"==f||"array"==f)&&l<r.length-1?(u[e]||(u[e]={}),u=u[e]):u[e]=o().isImmutable(t.value.to)?t.value.to.toJS():t.value.to}})),n}(this.mergeLog[t.operation],t,[t.operation]));case"diff":return void this.log.push([t.operation,t.path,t.steps]);case"init":return void this.log.push([t.operation,t.value])}}},{key:"remove",value:function(t){for(var e in this.mergeLog)!1===t([""+e,this.mergeLog[e]])&&delete this.mergeLog[e];this.log=this.log.filter((function(e){return!1!==t(e)}))}},{key:"update",value:function(t){for(var e in this.mergeLog)!1===t(this.mergeLog[e])&&delete this.mergeLog[e];this.log=this.log.map((function(e){return t(e)||e}))}},{key:"getDiff",value:function(){return this.exportLog().filter((function(t){return"init"!=t[0]}))}},{key:"exportLog",value:function(){if(this.cache.length)return this.cache;var t=this.log.filter((function(t){return"init"!=t[0]}));return this.mergeLog.del&&t.unshift(["del",this.mergeLog.del]),this.mergeLog.add&&t.unshift(["add",this.mergeLog.add]),this.mergeLog.update&&t.unshift(["update",this.mergeLog.update]),t.unshift(this.log[0]),this.cache=t}},{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.mergeLog={},this.cache=[],this.log=[],Array.isArray(t)&&(this.log=t)}}]),t}());function K(){return JSON.stringify(this.map((function(t){return s(t)?o().fromJS(t).toJS():t})))}function q(){return o().fromJS(this).toJS()}function C(t,e){if(!Array.isArray(t))throw new Error("请输入快照");var r;T.init(t);for(var n,i=[],a=0;a<t.length;a++)"init"==(n=t[a])[0]&&(i.push(r=[]),n=o().fromJS(n).toJS(),s(e)?L(e,n[1]):e=n[1],n[1]=e),Array.isArray(r)&&r.push(n);return i.map((function(t){var e;"object"==k(t[0][1])&&(e=t[0][1],function(t,e){e.map((function(e){return o().isImmutable(e)?e=o().toJS(e):o().isImmutable(e[1])&&(e[1]=o().toJS(e[1])),"add"==e[0]||"del"==e[0]||"update"==e[0]?function(t,e){if("object"!=A(t))throw new Error("请输入Object");return"add"==e[0]||"update"==e[0]?L(t,e[1]):("del"==e[0]&&function t(e,r,n){for(var i in n=n||o().List([]),e)"object"!=A(e[i])||Array.isArray(e[i])?Array.isArray(e[i])?e[i].forEach((function(t){return r(n.push(i).push(t))})):r(n.push(i).push(e[i])):e[i]?t(e[i],r,n.push(i)):r(n.push(i))}(e[1],(function(e){var r=t;e.map((function(t,n){n<(e.length||e.size)-1?r=r[t]:delete r[t]}))})),t)}(t,e):"diff"==e[0]?function(t,e){var r=1<arguments.length&&void 0!==e?e:[],n=0,o=(e=r[1],t);e.map((function(t){o=o[t]})),r[2].forEach((function(t){if("add"==t[0])o.splice.apply(o,[t[1]+n,0].concat(J(t.slice(2)))),n+=t.length-2;else if("del"==t[0])for(var e=1;e<t.length;e++)o.splice(t[e]+n,1),n--;else"update"==t[0]&&(o[t[1]+n]=t[2])}))}(t,e):void 0}))}(e=o().isImmutable(e)?e.toJS():e,o().fromJS(t).toJS()))})),e}(n=function(){function t(){M(this,t),P(this,"proto",null),T.init()}return E(t,[{key:"replay",value:function(t,e){return this.proto=C(t,e),this}},{key:"rollback",value:function(t,e){var r=this;return this.reverseLog(t,e).exportLog((function(t){r.replay(t,e)})),this}},{key:"reverseLog",value:function(t,e){if(!Array.isArray(t))throw new Error("请输入快照");var r,n;T.init(t),s(e)?L(e,C(t)):e=C(t);for(var o=0;o<t.length;o++)if("init"==(n=t[o])[0]){r=n[1];break}return B(e,r),this}},{key:"exportLog",value:function(t){var e=T.exportLog();return Object.getPrototypeOf(e).toString=K,Object.getPrototypeOf(e).toJS=q,"function"==typeof t&&t(e),this}}]),t}()).prototype.getDiff=function(t){var e=T.getDiff();return Object.getPrototypeOf(e).toString=K,Object.getPrototypeOf(e).toJS=q,"function"==typeof t&&t(e),this},n.prototype.init=function(t){T.init(),T.push({operation:"init",value:t})},n.prototype.add=function(t){T.push(t)};const _=new n;function z(t,e){for(var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(t,e){return t===e},n=t.size,o=e.size,i={1:0},a={0:{1:0}},u=0;u<=n+o;u++){for(var l={},f=-u;f<=u;f+=2){for(var c=f==-u||f!=u&&i[f+1]>i[f-1],s=c?f+1:f-1,p=i[s],m=p=c?p:p+1,y=p-f;m<n&&y<o&&r(t.get(m),e.get(y));)m++,y++;if(i[f]=m,(l[f]=m)==n&&y==o)return a[u]=l,function(t,e,r){var n=[],o=0;t.forEach((function(t,i){var a=t[0],u=t[1],l=t[2],f=a;if(0===i&&0!==a)for(var c=0;c<a;c++)n.push({operation:"",value:e.get(c),index:[c,o]}),o++;u-a==1?(n.push({operation:"del",value:e.get(a),index:[a,o]}),f=u):(n.push({operation:"add",value:r.get(o),index:[a,o]}),o++);for(var s=0;s<l-f;s++)n.push({operation:"",value:e.get(f+s),index:[f+s,o]}),o++}));for(var i,a=null,u=null,l=[],f=0;f<n.length;f++)a=n[f],u=n[f+1],"del"==(null===(i=a)||void 0===i?void 0:i.operation)&&"add"==(null===(i=u)||void 0===i?void 0:i.operation)&&a.index[1]==u.index[1]?(l.push({operation:"update",value:u.value,index:a.index}),f++):l.push(a);return l}(function(t,e,r,n){for(var o=[],i={x:e,y:r};0<n;n--){var a=t[n],u=t[n-1],l=i.x-i.y,f=a[l],c=(a=(u=u[a=(c=l==-n||l!=n&&u[1+l]>u[l-1])?1+l:l-1])-a,c?u:u+1);o.unshift([u,c,f]),i.x=u,i.y=a}return o}(a,n,o,u),t,e)}a[u]=l}}var H=function(t,e){return m(t)||m(e)?t===e:o().isImmutable(t)&&o().isImmutable(e)?o().is(t,e):s(t)&&s(e)?o().is(o().fromJS(t),o().fromJS(e)):(o().isImmutable(t)&&(t=t.toJS()),o().isImmutable(e)&&(e=e.toJS()),"function"==typeof r.unImmutableData.equal?r.unImmutableData.equal(t,e):o().is(t,e))};function N(t,e){var n=0,i=0;if(s(t)){if(t=o().fromJS(t),e=o().fromJS(e),y(t)==y(e)){var a=u.get(t,e);if(!a){if("Immutable Map"==y(t))return function(t,e){var r=0,n=0,i=0,a=0,l={};e.map((function(e,r){h(e)||(l[r]=e,h(t.get(r))&&n++)})),t.map((function(t,e){h(t)||(h(l[e])?s(t)?i+=d(t):i++:o().is(t,l[e])?a+=d(t):(e=N(t,l[e]),r+=e.update,i+=e.del,n+=e.add,a+=e.unchanged))}));var f={unchanged:a,add:n,del:i,update:r,similarity:Math.round(a/(n+i+r+a)*100)/100};return u.set(t,e,f),f}(t,e);if("Immutable List"==y(t))return function(t,e){var n,o,i,a,l=0,f=0,c=0,s=0,p=z(t,e,(function(t,e){return m(t)||m(e)?t===e:"Immutable Map"==y(t)&&"Immutable Map"==y(e)&&t.get(r.listKey)&&e.get(r.listKey)?t.get(r.listKey)===e.get(r.listKey):N(t,e).similarity>=r.global.listItemSimiliarity})),h={unchanged:s+=(h=t,a=i=o=n=0,(p=p).length?p.forEach((function(t){t.operation?"add"==t.operation?o++:"del"==t.operation?i+=d(t.value):"update"==t.operation&&(a+=d(t.value)):n+=d(t.value)})):n=d(h),h=Math.round(n/(o+i+a+n)*100)/100,h={unchanged:n,add:o,del:i,update:a,similarity:h}).unchanged,add:f+=h.add,del:c+=h.del,update:l+=h.update,similarity:Math.round(s/(f+c+l+s)*100)/100};return u.set(t,e,h),h}(t,e)}return a}n+=d(t)}else t===e?i+=1:n+=1;return i={unchanged:i,add:0,del:0,update:n,similarity:Math.round(i/(n+i)*100)/100},u.set(t,e,i),i}function $(t,e){return o().is(t,e)}function R(t,e,n){return!(r.global.maxDepth<=n.size)&&("function"!=typeof r.global.copyIfDiff||!r.global.copyIfDiff(n.toJS(),o().isImmutable(t)?t.toJS():t))&&s(t)&&s(e)}function U(t,e,n,i,a){if("function"!=typeof r.global.ignore||!r.global.ignore(n.toJS(),y(t,!0))){if(console.log(p(t),"<<<<>>>>",p(e),"====",R(t,e,n)),R(t,e,n)){if(t=o().fromJS(t),e=o().fromJS(e),o().is(t,e))return;var u=y(t);if(u==y(e)){if("Immutable List"==u)return function(t,e,n,o,i){var a=z(t,e,(function(t,e){return m(t)||m(e)?t===e:(o=n,r.global.maxDepth<=o.size?$(t,e):"Immutable Map"==y(t)&&"Immutable Map"==y(e)&&t.get(r.listKey)&&e.get(r.listKey)?t.get(r.listKey)===e.get(r.listKey):N(t,e).similarity>=r.global.listItemSimiliarity);var o}));a.length?(a.forEach((function(r){if(!(r.operation||"Immutable Map"!=y(r.value)&&"Immutable List"!=y(r.value)||$(t.get(r.index[0]),e.get(r.index[1]))))return i(t.get(r.index[0]),e.get(r.index[1]),n.push(r.index[0]),o,i)})),_.add({path:n,type:o,operation:"diff",steps:function(t){for(var e,r,n=null,o=[],i=0;i<t.length;i++)null!==(n=t[i])&&void 0!==n&&n.operation&&(r=[n.operation,n.index[0]],"add"==(null==n?void 0:n.operation)?("add"==(null===(e=o[o.length-1])||void 0===e?void 0:e[0])&&o[o.length-1][1]==n.index[0]?r=o[o.length-1]:o.push(r),r.push(n.value)):"del"==(null==n?void 0:n.operation)?"del"==(null===(e=o[o.length-1])||void 0===e?void 0:e[0])?(r=o[o.length-1]).push(n.index[0]):o.push(r):(r.push(n.value),o.push(r)));return o}(a)})):(t.length||t.size)&&t.map((function(t,r){if(!$(t,e.get(r)))return console.log(p(t),"<<<<++++++++",p(e.get(r))),i(t,e.get(r),n.push(r),o,i)}))}(t,e,n,i.push(y(t,!0)),a);if("Immutable Map"==u)return l=t,f=e,c=n,s=i.push(y(t,!0)),d=a,f.map((function(t,e){h(t)||h(l.get(e))&&_.add({path:c.push(e),operation:"add",type:s,value:{from:void 0,to:g(f.get(e))}})})),void l.map((function(t,e){var r=f.get(e+="");if(!h(t)&&!H(t,r)){if(!h(r))return d(t,r,c.push(e),s,d);_.add({path:c.push(e),operation:"del",type:s.push(y(t,!0)),value:{from:g(t),to:void 0}})}}))}}var l,f,c,s,d;H(t,e)||_.add({path:n,type:i.push(y(t,!0)),operation:"update",value:{from:g(t),to:g(e)}})}}function B(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return t=o().fromJS(t),_.init(t),r.set(n),U(t,o().fromJS(e),o().List([]),o().List([]),U),_.compare=B,_}function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=void 0,n=function(t){var e={compare:B,similarity:N,getDiff:_.getDiff,replay:_.replay,exportLog:_.exportLog,clearCache:u.clear,reverseLog:_.reverseLog,rollback:_.rollback,deepClone:g,deepEqual:H,isImmutableStructure:s,isImmutable:c,isPrimitive:m,toImmutable:b};t.default=e,t.compare=B,t.similarity=N,t.getDiff=_.getDiff,t.replay=_.replay,t.exportLog=_.exportLog,t.clearCache=u.clear,t.reverseLog=_.reverseLog,t.rollback=_.rollback,t.deepClone=g,t.deepEqual=H,t.isImmutableStructure=s,t.isImmutable=c,t.isPrimitive=m,t.toImmutable=b},"object"===("undefined"==typeof exports?"undefined":F(exports))?n(exports):"function"==typeof define&&t.amdO?define(["exports"],n):n((i="undefined"!=typeof globalThis?globalThis:i||self).TreeDiff={})})();