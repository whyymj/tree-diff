/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={amdO:{},n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}};function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.r({});const n=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e(this,"unImmutableData",{equal:function(t,e){return t===e},copy:function(t){return t}}),e(this,"list",{key:"_id",mapSimilarityForDiff:.6})}var n;return(n=[{key:"set",value:function(t){}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(t.prototype,n),t}());var r=require("immutable"),o=t.n(r),i=require("kind-of"),a=t.n(i);r=require("isobject"),i=t.n(r);const u=new(function(){function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n={},(e="cache")in this?Object.defineProperty(this,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[e]=n}var e;return(e=[{key:"set",value:function(t,e,n){o().isImmutable(t)&&o().isImmutable(e)?this.cache[o().hash(t)+"_"+o().hash(e)]=n:o().isImmutable(t)&&void 0!==e&&(this.cache[o().hash(t)]=e)}},{key:"get",value:function(t,e){return o().isImmutable(t)&&o().isImmutable(e)?this.cache[o().hash(t)+"_"+o().hash(e)]:o().isImmutable(t)&&void 0===e?this.cache[o().hash(t)]:null}},{key:"clear",value:function(){this.cache={}}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(t.prototype,e),t}());function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=Object.prototype.toString,c=function(t){return"object"===l(t)&&(o().isImmutable(t)||Array.isArray(t)||function(t){if(!t||"object"!==l(t)||"[object Object]"!==f.call(t))return!1;if(null===(t=Object.getPrototypeOf(t)))return!0;for(var e=t,n=Object.getPrototypeOf(t);null!==n;)e=n,n=Object.getPrototypeOf(e);return e===t}(t))};function s(t){return"string"==typeof t||"number"==typeof t||"symbol"===l(t)||"boolean"==typeof t||null==t}function p(t,e){var n=1<arguments.length&&void 0!==e&&e;if(o().isImmutable(t)){if(e=t.toString(),!n)return"Immutable "+e.split(" ")[0];if(0==e.indexOf("Map"))return"object";if(0==e.indexOf("List"))return"array";t=t.toJS()}return a()(t)}i();var y=function(t){return null==t};function m(t){var e=0;return c(t)?(t=o().fromJS(t),u.get(t)?u.get(t):(t.map((function(t){e+=m(t)})),e&&u.set(t,e),e)):1}var d=function(t){if(function(t){return"object"===("undefined"==typeof HTMLElement?"undefined":l(HTMLElement))?t instanceof HTMLElement:t&&"object"===l(t)&&(1===t.nodeType||9===t.nodeType)&&"string"==typeof t.nodeName}(t)||s(t))return t;if(o().isImmutable(t))return t;var e=o().fromJS(t);return o().isImmutable(e)?e:n.unImmutableData.copy(t)};function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b=function(t){return!(!(e=t)||"object"!==h(e)||(e=t,"[object RegExp]"===(t=Object.prototype.toString.call(e))||"[object Date]"===t||function(t){return t.$$typeof===g}(e)));var e},g="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function v(t,e){return!1!==e.clone&&e.isMergeableObject(t)?O(Array.isArray(t)?[]:{},t,e):t}function S(t){return Object.keys(t).concat((e=t,Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]));var e}function j(t,e){try{return e in t}catch(t){return!1}}function O(t,e,n){return(n=n||{}).isMergeableObject=n.isMergeableObject||b,function(t,e,n){var r=t||{};return n.isMergeableObject(t)&&S(t).forEach((function(e){r[e]=v(t[e],n)})),S(e).forEach((function(o){var i,a;(!j(i=t,a=o)||Object.hasOwnProperty.call(i,a)&&Object.propertyIsEnumerable.call(i,a))&&(j(t,o)&&n.isMergeableObject(e[o])?r[o]=(i=o,((a=n).customMerge&&"function"==typeof(i=a.customMerge(i))?i:O)(t[o],e[o],n)):r[o]=v(e[o],n))})),r}(t,e,n)}function I(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,n){return e&&M(t.prototype,e),n&&M(t,n),t}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=new(function(){function t(){k(this,t),J(this,"mergeLog",{}),J(this,"log",[]),J(this,"cache",[])}return A(t,[{key:"push",value:function(t){switch(t.operation){case"add":case"update":case"del":return void(this.mergeLog[t.operation]=function(t,e,n){var r=0<arguments.length&&void 0!==t?t:{},i=(e=1<arguments.length?e:void 0,2<arguments.length&&void 0!==n?n:["add","update","del"]);if("object"!=L(r))throw new Error("请输入Object");return(e=Array.isArray(e)?e:[e]).map((function(t){if(i.includes(t.operation))for(var e,n=t.path,a=(n=o().isImmutable(n)?n.toArray():n,t.type),u=(a=o().isImmutable(a)?a.toArray():a,r),l=0;l<n.length;l++){if(e=n[l],"del"==t.operation&&l==n.length-2){void 0!==u[e]?Array.isArray(u[e])?u[e].push(n[n.length-1]):u[e]=[u[e],n[n.length-1]]:u[e]=n[n.length-1];break}var f=a[l+1];"object"==f||"array"==f?(u[e]||(u[e]={}),u=u[e]):u[e]=o().isImmutable(t.value.to)?t.value.to.toJS():t.value.to}})),r}(this.mergeLog[t.operation],t,[t.operation]));case"myers-diff":return void this.log.push([t.operation,t.path,t.steps]);case"init":return void this.log.push([t.operation,t.value])}}},{key:"remove",value:function(t){for(var e in this.mergeLog)!1===t([""+e,this.mergeLog[e]])&&delete this.mergeLog[e];this.log=this.log.filter((function(e){return!1!==t(e)}))}},{key:"update",value:function(t){for(var e in this.mergeLog)!1===t(this.mergeLog[e])&&delete this.mergeLog[e];this.log=this.log.map((function(e){return t(e)||e}))}},{key:"getDiff",value:function(){return this.exportLog().filter((function(t){return"init"!=t[0]}))}},{key:"exportLog",value:function(){if(this.cache.length)return this.cache;var t=this.log.filter((function(t){return"init"!=t[0]}));return this.mergeLog.del&&t.unshift(["del",this.mergeLog.del]),this.mergeLog.add&&t.unshift(["add",this.mergeLog.add]),this.mergeLog.update&&t.unshift(["update",this.mergeLog.update]),t.unshift(this.log[0]),this.cache=t}},{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.mergeLog={},this.cache=[],this.log=[],Array.isArray(t)&&(this.log=t)}}]),t}());function P(){return JSON.stringify(this.map((function(t){return o().fromJS(t).toJS()})))}(r=function(){function t(){k(this,t),E.init()}return A(t,[{key:"replay",value:function(t,e){if(Array.isArray(e)?E.init(e):e=E.exportLog(),!e[0])throw new Error("初始化出错了！请输入有效snap-shot");if("init"==e[0][0]&&"object"==w(e[0][1])){var n=e[0][1];n=function(t,e){return e.map((function(e){return o().isImmutable(e)?e=o().toJS(e):o().isImmutable(e[1])&&(e[1]=o().toJS(e[1])),"add"==e[0]||"del"==e[0]||"update"==e[0]?function(t,e){if("object"!=L(t))throw new Error("请输入Object");return"add"==e[0]||"update"==e[0]?O(t,e[1]):("del"==e[0]&&function t(e,n,r){for(var i in r=r||o().List([]),e){if("object"==L(e[i])&&!Array.isArray(e[i]))return t(e[i],n,r.push(i));Array.isArray(e[i])?e[i].forEach((function(t){n(r.push(i).push(t))})):n(r.push(i).push(e[i]))}}(e[1],(function(e){var n=t;e.map((function(t,r){r<(e.length||e.size)-1?n=n[t]:delete n[t]}))})),t)}(t,e):"myers-diff"==e[0]?function(t,e){var n=1<arguments.length&&void 0!==e?e:[],r=0,o=(e=n[1],t);e.map((function(t){o=o[t]})),n[2].forEach((function(t){if("add"==t[0])o.splice.apply(o,[t[1]+r,0].concat(I(t.slice(2)))),r+=t.length-2;else if("del"==t[0])for(var e=1;e<t.length;e++)o.splice(t[e]+r,1),r--;else"update"==t[0]&&(o[t[1]+r]=t[2])}))}(t,e):void 0})),t}(n=o().isImmutable(n)?n.toJS():n,o().fromJS(e).toJS()),"function"==typeof t&&t(n)}else{e=e[0][0];try{throw new Error("初始化出错了！log[0]="+JSON.stringify(e))}catch(t){throw new Error("初始化出错了！log[0]=",e)}}return this}},{key:"getDiff",value:function(t){var e=E.getDiff();return Object.getPrototypeOf(e).toString=P,"function"==typeof t&&t(o().fromJS(e).toJS()),this}},{key:"exportLog",value:function(t){var e=E.exportLog();return Object.getPrototypeOf(e).toString=P,"function"==typeof t&&t(e),this}}]),t}()).prototype.init=function(t){E.init(),E.push({operation:"init",value:t})},r.prototype.add=function(t){E.push(t)};const D=new r;function T(t,e){for(var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(t,e){return t===e},r=t.size,o=e.size,i={1:0},a={0:{1:0}},u=0;u<=r+o;u++){for(var l={},f=-u;f<=u;f+=2){for(var c=f==-u||f!=u&&i[f+1]>i[f-1],s=c?f+1:f-1,p=i[s],y=p=c?p:p+1,m=p-f;y<r&&m<o&&n(t.get(y),e.get(m));)y++,m++;if(i[f]=y,(l[f]=y)==r&&m==o)return a[u]=l,function(t,e,n){var r=[],o=0;t.forEach((function(t,i){var a=t[0],u=t[1],l=t[2],f=a;if(0===i&&0!==a)for(var c=0;c<a;c++)r.push({operation:"",value:e.get(c),index:[c,o]}),o++;u-a==1?(r.push({operation:"del",value:e.get(a),index:[a,o]}),f=u):(r.push({operation:"add",value:n.get(o),index:[a,o]}),o++);for(var s=0;s<l-f;s++)r.push({operation:"",value:e.get(f+s),index:[f+s,o]}),o++}));for(var i,a=null,u=null,l=[],f=0;f<r.length;f++)a=r[f],u=r[f+1],"del"==(null===(i=a)||void 0===i?void 0:i.operation)&&"add"==(null===(i=u)||void 0===i?void 0:i.operation)&&a.index[1]==u.index[1]?(l.push({operation:"update",value:u.value,index:a.index}),f++):l.push(a);return l}(function(t,e,n,r){for(var o=[],i={x:e,y:n};0<r;r--){var a=t[r],u=t[r-1],l=i.x-i.y,f=a[l],c=(a=(u=u[a=(c=l==-r||l!=r&&u[1+l]>u[l-1])?1+l:l-1])-a,c?u:u+1);o.unshift([u,c,f]),i.x=u,i.y=a}return o}(a,r,o,u),t,e)}a[u]=l}}var _=function(t,e,r,o,i){var a=T(t,e,(function(t,e){return s(t)||s(e)?t===e:"Immutable Map"==p(t)&&"Immutable Map"==p(e)&&t.get(n.list.key)&&e.get(n.list.key)?t.get(n.list.key)===e.get(n.list.key):C(t,e).similarity>=n.list.mapSimilarityForDiff}));a.length?(a.forEach((function(n){n.operation||"Immutable Map"!=p(n.value)&&"Immutable List"!=p(n.value)||F(t.get(n.index[0]),e.get(n.index[1]))||i(t.get(n.index[0]),e.get(n.index[1]),r.push(n.index[0]),o,i)})),D.add({path:r,type:o,operation:"myers-diff",steps:function(t){for(var e,n,r=null,o=[],i=0;i<t.length;i++)null!==(r=t[i])&&void 0!==r&&r.operation&&(n=[r.operation,r.index[0]],"add"==(null==r?void 0:r.operation)?("add"==(null===(e=o[o.length-1])||void 0===e?void 0:e[0])&&o[o.length-1][1]==r.index[0]?n=o[o.length-1]:o.push(n),n.push(r.value)):"del"==(null==r?void 0:r.operation)?"del"==(null===(e=o[o.length-1])||void 0===e?void 0:e[0])?(n=o[o.length-1]).push(r.index[0]):o.push(n):(n.push(r.value),o.push(n)));return o}(a)})):(t.length||t.size)&&t.map((function(t,n){F(t,e.get(n))||i(t,e.get(n),r.push(n),o,i)}))},q=function(t,e){return s(t)||s(e)?t===e:o().isImmutable(t)&&o().isImmutable(e)?o().is(t,e):(o().isImmutable(t)&&(t=t.toJS()),o().isImmutable(e)&&(e=e.toJS()),n.unImmutableData.equal(t,e))};function z(t,e){var r,o,i,a,u=0,l=0,f=0,c=0;return e=T(t,e,(function(t,e){return s(t)||s(e)?t===e:"Immutable Map"==p(t)&&"Immutable Map"==p(e)&&t.get(n.list.key)&&e.get(n.list.key)?t.get(n.list.key)===e.get(n.list.key):C(t,e).similarity>=n.list.mapSimilarityForDiff})),{unchanged:c+=(t=t,a=i=o=r=0,(e=e).length?e.forEach((function(t){t.operation?"add"==t.operation?o++:"del"==t.operation?i+=m(t.value):"update"==t.operation&&(a+=m(t.value)):r+=m(t.value)})):r=m(t),t=Math.round(r/(o+i+a+r)*100)/100,t={unchanged:r,add:o,del:i,update:a,similarity:t}).unchanged,add:l+=t.add,del:f+=t.del,update:u+=t.update,similarity:Math.round(c/(l+f+u+c)*100)/100}}function C(t,e){return r=e,S=v=g=b=0,c(n=t)?(n=o().fromJS(n),r=o().fromJS(r),p(n)==p(r)?((i=u.get(n,r))||("Immutable Map"==p(n)?(a=n,d=s=f=l=0,h={},r.map((function(t,e){y(t)||(h[e]=t,y(a.get(e))&&f++)})),a.map((function(t,e){y(t)||(y(h[e])?c(t)?s+=m(t):s++:o().is(t,h[e])?d+=m(t):(e=C(t,h[e]),l+=e.update,s+=e.del,f+=e.add,d+=e.unchanged))})),i={unchanged:d,add:f,del:s,update:l,similarity:Math.round(d/(f+s+l+d)*100)/100}):"Immutable List"==p(n)&&(i=z(n,r)),u.set(n,r,i)),b+=i.update,g+=i.add,v+=i.del,S+=i.unchanged):b+=m(n)):n===r?S+=1:b+=1,{unchanged:S,add:g,del:v,update:b,similarity:Math.round(S/(g+v+b+S)*100)/100};var n,r,i,a,l,f,s,d,h,b,g,v,S}function F(t,e){return o().is(t,e)}function H(t,e,n,r,i){if(c(t)&&c(e)){if(t=o().fromJS(t),e=o().fromJS(e),o().is(t,e))return;var a=p(t);if(a==p(e))return void("Immutable List"==a?_(t,e,n,r.push(p(t,!0)),i):"Immutable Map"==a&&(u=t,l=e,f=n,s=r.push(p(t,!0)),m=i,l.map((function(t,e){y(t)||y(u.get(e))&&D.add({path:f.push(e),operation:"add",type:s,value:{from:void 0,to:d(l.get(e))}})})),u.map((function(t,e){var n=l.get(e+="");y(t)||q(t,n)||(y(n)?D.add({path:f.push(e),operation:"del",type:s.push(p(t,!0)),value:{from:d(t),to:void 0}}):m(t,n,f.push(e),s,m))}))))}var u,l,f,s,m;q(t,e)||D.add({path:n,type:r.push(p(t,!0)),operation:"update",value:{from:d(t),to:d(e)}})}function N(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return t=o().fromJS(t),D.init(t),n.set(r),H(t,o().fromJS(e),o().List([]),o().List([]),H),D.compare=N,D}function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=void 0,r=function(t){var e={compare:N,similarity:C,getDiff:D.getDiff,replay:D.replay,exportLog:D.exportLog};t.default=e,t.compare=N,t.similarity=C,t.getDiff=D.getDiff,t.replay=D.replay,t.exportLog=D.exportLog},"object"===("undefined"==typeof exports?"undefined":$(exports))?r(exports):"function"==typeof define&&t.amdO?define(["exports"],r):r((i="undefined"!=typeof globalThis?globalThis:i||self).TreeDiff={})})();