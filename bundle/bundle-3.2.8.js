var supertokens=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";var r=n(4),o=n(19),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(e){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),u=n(3),c=function(){function e(){}return e.getToken=function(t){if(void 0!==t){if(void 0===e.tokenInfo){var n=window.localStorage.getItem("anti-csrf-localstorage");if(null===n)return;e.tokenInfo={antiCsrf:n,associatedIdRefreshToken:t}}else if(e.tokenInfo.associatedIdRefreshToken!==t)return e.tokenInfo=void 0,e.getToken(t);return e.tokenInfo.antiCsrf}e.tokenInfo=void 0},e.removeToken=function(){e.tokenInfo=void 0,window.localStorage.removeItem("anti-csrf-localstorage")},e.setItem=function(t,n){void 0!==t?(window.localStorage.setItem("anti-csrf-localstorage",n),e.tokenInfo={antiCsrf:n,associatedIdRefreshToken:t}):e.tokenInfo=void 0},e}();function f(e,t){return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:if(void 0===e)throw Error("Please define refresh token API: AuthHttpRequest.init(<PATH HERE>, unauthorised status code)");return void 0===t?[2,void 0!==u.getIDFromCookie()]:[4,u.onUnauthorisedResponse(e,t)];case 1:if("SESSION_EXPIRED"===(n=r.sent()).result)return[2,!1];if("API_ERROR"===n.result)throw n.error;return[2,!0]}}))}))}function l(e){return void 0===window.fetch?"http://localhost:8888":e.startsWith("https://")||e.startsWith("http://")?e.split("/").filter((function(e,t){return t<=2})).join("/"):window.location.origin}t.AntiCsrfToken=c,t.handleUnauthorised=f,t.getDomainFromUrl=l;var d=function(){function t(){}return t.init=function(n,r,o){void 0===o&&(o=void 0!==t.viaInterceptor&&t.viaInterceptor),t.refreshTokenUrl=n,void 0!==r&&(t.sessionExpiredStatusCode=r);var i=void 0===window.fetch?e:window;void 0===t.originalFetch&&(t.originalFetch=i.fetch.bind(i)),o&&(i.fetch=function(e,n){return t.fetch(e,n)}),t.viaInterceptor=o,t.apiDomain=l(n),t.initCalled=!0},t.sessionExpiredStatusCode=440,t.initCalled=!1,t.apiDomain="",t.doRequest=function(e,n,d){return o(s,void 0,void 0,(function(){var o,s,h,p,v,m,w;return i(this,(function(i){switch(i.label){case 0:if(!t.initCalled)throw Error("init function not called");return"string"==typeof d&&l(d)!==t.apiDomain&&t.viaInterceptor?[4,e(n)]:[3,2];case 1:return[2,i.sent()];case 2:i.trys.push([2,,15,16]),o=!1,s=void 0,i.label=3;case 3:0,h=u.getIDFromCookie(),p=c.getToken(h),n=r({},n,{credentials:"include"}),v=n,void 0!==p&&(v=r({},v,{headers:void 0===v?{"anti-csrf":p}:r({},v.headers,{"anti-csrf":p})})),v=r({},v,{headers:void 0===v?{"supertokens-sdk-name":a.platform_name,"supertokens-sdk-version":a.package_version}:r({},v.headers,{"supertokens-sdk-name":a.platform_name,"supertokens-sdk-version":a.package_version})}),i.label=4;case 4:return i.trys.push([4,9,,13]),[4,e(v)];case 5:return(m=i.sent()).status!==t.sessionExpiredStatusCode?[3,7]:[4,f(t.refreshTokenUrl,h)];case 6:return i.sent()?[3,8]:(s=m,[3,14]);case 7:return m.headers.forEach((function(e,t){"anti-csrf"===t.toString()&&c.setItem(u.getIDFromCookie(),e)})),[2,m];case 8:return[3,13];case 9:return(w=i.sent()).status!==t.sessionExpiredStatusCode?[3,11]:[4,f(t.refreshTokenUrl,h)];case 10:return i.sent()?[3,12]:(o=!0,s=w,[3,14]);case 11:throw w;case 12:return[3,13];case 13:return[3,3];case 14:if(o)throw s;return[2,s];case 15:return void 0===u.getIDFromCookie()&&c.removeToken(),[7];case 16:return[2]}}))}))},t.attemptRefreshingSession=function(){return o(s,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:if(!t.initCalled)throw Error("init function not called");n.label=1;case 1:return n.trys.push([1,,3,4]),e=u.getIDFromCookie(),[4,f(t.refreshTokenUrl,e)];case 2:return[2,n.sent()];case 3:return void 0===u.getIDFromCookie()&&c.removeToken(),[7];case 4:return[2]}}))}))},t.get=function(e,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,t.fetch(e,r({method:"GET"},n))];case 1:return[2,o.sent()]}}))}))},t.post=function(e,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,t.fetch(e,r({method:"POST"},n))];case 1:return[2,o.sent()]}}))}))},t.delete=function(e,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,t.fetch(e,r({method:"DELETE"},n))];case 1:return[2,o.sent()]}}))}))},t.put=function(e,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,t.fetch(e,r({method:"PUT"},n))];case 1:return[2,o.sent()]}}))}))},t.fetch=function(e,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,t.doRequest((function(n){return t.originalFetch(e,r({},n))}),n,e)];case 1:return[2,o.sent()]}}))}))},t.sessionPossiblyExists=function(){return void 0!==u.getIDFromCookie()},t}();t.default=d}).call(this,n(13))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.package_version="3.2.8",t.platform_name="website"},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),s=n(1),a=n(2),u="sIdRefreshToken";function c(){var e=("; "+document.cookie).split("; "+u+"=");if(2===e.length){var t=e.pop();if(void 0!==t)return t.split(";").shift()}}t.onUnauthorisedResponse=function(e,t){return r(this,void 0,void 0,(function(){var n,r,u,f,l;return o(this,(function(o){switch(o.label){case 0:n=new i.default,o.label=1;case 1:return[4,n.acquireLock("REFRESH_TOKEN_USE",1e3)];case 2:if(!o.sent())return[3,7];o.label=3;case 3:return o.trys.push([3,5,6,7]),void 0===(r=c())?[2,{result:"SESSION_EXPIRED"}]:r!==t?[2,{result:"RETRY"}]:[4,s.default.originalFetch(e,{method:"post",credentials:"include",headers:{"supertokens-sdk-name":a.platform_name,"supertokens-sdk-version":a.package_version}})];case 4:if(200!==(u=o.sent()).status)throw u;return void 0===c()?[2,{result:"SESSION_EXPIRED"}]:(u.headers.forEach((function(e,t){"anti-csrf"===t.toString()&&s.AntiCsrfToken.setItem(c(),e)})),[2,{result:"RETRY"}]);case 5:return f=o.sent(),void 0===c()?[2,{result:"SESSION_EXPIRED"}]:[2,{result:"API_ERROR",error:f}];case 6:return n.releaseLock("REFRESH_TOKEN_USE"),[7];case 7:return void 0===(l=c())?[2,{result:"SESSION_EXPIRED"}]:l!==t?[2,{result:"RETRY"}]:[3,1];case 8:return[2]}}))}))},t.getIDFromCookie=c},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(25),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?a=n(8):"undefined"!=typeof XMLHttpRequest&&(a=n(8)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u}).call(this,n(24))},function(e,t,n){"use strict";var r=n(0),o=n(26),i=n(5),s=n(28),a=n(29),u=n(9);e.exports=function(e){return new Promise((function(t,c){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",p=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+p)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,c,r),d=null}},d.onabort=function(){d&&(c(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){c(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(30),m=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;m&&(l[e.xsrfHeaderName]=m)}if("setRequestHeader"in d&&r.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),c(e),d=null)})),void 0===f&&(f=null),d.send(f)}))}},function(e,t,n){"use strict";var r=n(27);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(16),i=r.default;t.fetch=i;var s=o.default;t.axios=s},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(15);function s(e){return new Promise((function(t){return setTimeout(t,e)}))}function a(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",r=0;r<e;r++){n+=t[Math.floor(Math.random()*t.length)]}return n}var u=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+a(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[])}return e.prototype.acquireLock=function(t,n){return void 0===n&&(n=5e3),r(this,void 0,void 0,(function(){var r,i,u,c,f,l;return o(this,(function(o){switch(o.label){case 0:r=Date.now()+a(4),i=Date.now()+n,u="browser-tabs-lock-key-"+t,c=window.localStorage,o.label=1;case 1:return Date.now()<i?null!==c.getItem(u)?[3,4]:(f=this.id+"-"+t+"-"+r,[4,s(Math.floor(25*Math.random()))]):[3,7];case 2:return o.sent(),c.setItem(u,JSON.stringify({id:this.id,iat:r,timeoutKey:f,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,s(30)];case 3:return o.sent(),null!==(l=c.getItem(u))&&(l=JSON.parse(l)).id===this.id&&l.iat===r?(this.acquiredIatSet.add(r),this.refreshLockWhileAcquired(u,r),[2,!0]):[3,6];case 4:return e.lockCorrector(),[4,this.waitForSomethingToChange(i)];case 5:o.sent(),o.label=6;case 6:return r=Date.now()+a(4),[3,1];case 7:return[2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return r(this,void 0,void 0,(function(){var n=this;return o(this,(function(s){return setTimeout((function(){return r(n,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return[4,i.default().lock(t)];case 1:return o.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(r=n.getItem(e))?(i.default().unlock(t),[2]):((r=JSON.parse(r)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(r)),i.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(i.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){var r=!1,o=Date.now(),i=50,s=!1;function a(){if(s||(window.removeEventListener("storage",a),e.removeFromWaiting(a),clearTimeout(u),s=!0),!r){r=!0;var t=i-(Date.now()-o);t>0?setTimeout(n,t):n()}}window.addEventListener("storage",a),e.addToWaiting(a);var u=setTimeout(a,Math.max(0,t-Date.now()))}))];case 1:return n.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})))},e.notifyWaiters=function(){void 0!==e.waiters&&e.waiters.slice().forEach((function(e){return e()}))},e.prototype.releaseLock=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return r(this,void 0,void 0,(function(){var n,r,s;return o(this,(function(o){switch(o.label){case 0:return n=window.localStorage,r="browser-tabs-lock-key-"+t,null===(s=n.getItem(r))?[2]:(s=JSON.parse(s)).id!==this.id?[3,2]:[4,i.default().lock(s.iat)];case 1:o.sent(),this.acquiredIatSet.delete(s.iat),n.removeItem(r),i.default().unlock(s.iat),e.notifyWaiters(),o.label=2;case 2:return[2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,r=Object.keys(n),o=!1,i=0;i<r.length;i++){var s=r[i];if(s.includes("browser-tabs-lock-key")){var a=n.getItem(s);null!==a&&(void 0===(a=JSON.parse(a)).timeRefreshed&&a.timeAcquired<t||void 0!==a.timeRefreshed&&a.timeRefreshed<t)&&(n.removeItem(s),o=!0)}}o&&e.notifyWaiters()},e.waiters=void 0,e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var r=e.locked.get(t);void 0===r?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&&(r.unshift(n),e.locked.set(t,r))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(n,r){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())}))},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&&0!==n.length){var r=n.pop();e.locked.set(t,n),void 0!==r&&setTimeout(r,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();t.default=function(){return r.getInstance()}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),u=n(1),c=n(2),f=n(3);function l(e){return o(this,void 0,void 0,(function(){var t,n,o,s;return i(this,(function(i){return"string"==typeof(t=e.url)&&u.getDomainFromUrl(t)!==d.apiDomain?[2,e]:(n=f.getIDFromCookie(),o=u.AntiCsrfToken.getToken(n),e=r({},e,{withCredentials:!0}),s=e,void 0!==o&&(s=r({},s,{headers:void 0===s?{"anti-csrf":o}:r({},s.headers,{"anti-csrf":o})})),[2,s=r({},s,{headers:void 0===s?{"supertokens-sdk-name":c.platform_name,"supertokens-sdk-version":c.package_version}:r({},s.headers,{"supertokens-sdk-name":c.platform_name,"supertokens-sdk-version":c.package_version})})])}))}))}var d=function(){function e(){}return e.init=function(t,n){u.default.init(t,n),e.refreshTokenUrl=t,void 0!==n&&(e.sessionExpiredStatusCode=n),e.apiDomain=u.getDomainFromUrl(t),e.initCalled=!0},e.sessionExpiredStatusCode=440,e.initCalled=!1,e.apiDomain="",e.doRequest=function(t,n,a,l,d,h){return void 0===h&&(h=!1),o(s,void 0,void 0,(function(){var o,s,p,v,m,w,g,y,b,k,T;return i(this,(function(i){switch(i.label){case 0:if(!e.initCalled)throw Error("init function not called");if("string"!=typeof a||u.getDomainFromUrl(a)===e.apiDomain||!h)return[3,2];if(void 0!==d)throw d;return void 0!==l?[2,l]:[4,t(n)];case 1:return[2,i.sent()];case 2:i.trys.push([2,,17,18]),o=!1,s=void 0,i.label=3;case 3:0,p=f.getIDFromCookie(),v=u.AntiCsrfToken.getToken(p),n=r({},n,{withCredentials:!0}),m=n,void 0!==v&&(m=r({},m,{headers:void 0===m?{"anti-csrf":v}:r({},m.headers,{"anti-csrf":v})})),m=r({},m,{headers:void 0===m?{"supertokens-sdk-name":c.platform_name,"supertokens-sdk-version":c.package_version}:r({},m.headers,{"supertokens-sdk-name":c.platform_name,"supertokens-sdk-version":c.package_version})}),i.label=4;case 4:if(i.trys.push([4,11,,15]),w=d,g=l,d=void 0,l=void 0,void 0!==w)throw w;return void 0!==g?[3,6]:[4,t(m)];case 5:return b=i.sent(),[3,7];case 6:b=g,i.label=7;case 7:return(y=b).status!==e.sessionExpiredStatusCode?[3,9]:[4,u.handleUnauthorised(e.refreshTokenUrl,p)];case 8:return i.sent()?[3,10]:(s=y,[3,16]);case 9:return void 0!==(k=y.headers["anti-csrf"])&&u.AntiCsrfToken.setItem(f.getIDFromCookie(),k),[2,y];case 10:return[3,15];case 11:return void 0===(T=i.sent()).response||T.response.status!==e.sessionExpiredStatusCode?[3,13]:[4,u.handleUnauthorised(e.refreshTokenUrl,p)];case 12:return i.sent()?[3,14]:(o=!0,s=T,[3,16]);case 13:throw T;case 14:return[3,15];case 15:return[3,3];case 16:if(o)throw s;return[2,s];case 17:return void 0===f.getIDFromCookie()&&u.AntiCsrfToken.removeToken(),[7];case 18:return[2]}}))}))},e.attemptRefreshingSession=function(){return o(s,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:if(!e.initCalled)throw Error("init function not called");n.label=1;case 1:return n.trys.push([1,,3,4]),t=f.getIDFromCookie(),[4,u.handleUnauthorised(e.refreshTokenUrl,t)];case 2:return[2,n.sent()];case 3:return void 0===f.getIDFromCookie()&&u.AntiCsrfToken.removeToken(),[7];case 4:return[2]}}))}))},e.get=function(t,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,e.axios(r({method:"get",url:t},n))];case 1:return[2,o.sent()]}}))}))},e.post=function(t,n,a){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,e.axios(r({method:"post",url:t,data:n},a))];case 1:return[2,o.sent()]}}))}))},e.delete=function(t,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,e.axios(r({method:"delete",url:t},n))];case 1:return[2,o.sent()]}}))}))},e.put=function(t,n,a){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,e.axios(r({method:"put",url:t,data:n},a))];case 1:return[2,o.sent()]}}))}))},e.axios=function(t,n){return o(s,void 0,void 0,(function(){var o;return i(this,(function(i){switch(i.label){case 0:return o={},o="string"==typeof t?void 0===n?{url:t,method:"get"}:r({url:t},n):t,[4,e.doRequest((function(e){return a.default.create()(e)}),o,o.url)];case 1:return[2,i.sent()]}}))}))},e.makeSuper=function(t){for(var n=t.interceptors.request,r=0;r<n.handlers.length;r++)if(n.handlers[r].fulfilled===l)return;t.interceptors.request.use(l,(function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){return[2,Promise.reject(e)]}))}))})),t.interceptors.response.use((function(t){return o(this,void 0,void 0,(function(){var n,r;return i(this,(function(o){try{return e.initCalled||Promise.reject(new Error("init function not called")),t.status===e.sessionExpiredStatusCode?(n=t.config,[2,e.doRequest((function(e){return a.default.create()(e)}),n,n.url,t,!0)]):(void 0!==(r=t.headers["anti-csrf"])&&u.AntiCsrfToken.setItem(f.getIDFromCookie(),r),[2,t])}finally{void 0===f.getIDFromCookie()&&u.AntiCsrfToken.removeToken()}return[2]}))}))}),(function(t){return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){e.initCalled||Promise.reject(new Error("init function not called"));try{return void 0!==t.response&&t.response.status===e.sessionExpiredStatusCode?(n=t.config,[2,e.doRequest((function(e){return a.default.create()(e)}),n,n.url,void 0,t,!0)]):[2,Promise.reject(t)]}finally{void 0===f.getIDFromCookie()&&u.AntiCsrfToken.removeToken()}return[2]}))}))}))},e.sessionPossiblyExists=function(){return void 0!==f.getIDFromCookie()},e}();t.default=d},function(e,t,n){e.exports=n(18)},function(e,t,n){"use strict";var r=n(0),o=n(4),i=n(20),s=n(10);function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=a(n(7));u.Axios=i,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=n(11),u.CancelToken=n(33),u.isCancel=n(6),u.all=function(e){return Promise.all(e)},u.spread=n(34),e.exports=u,e.exports.default=u},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var r=n(0),o=n(5),i=n(21),s=n(22),a=n(10);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=u},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(23),i=n(6),s=n(7),a=n(31),u=n(32);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&h())}function h(){if(!f){var e=a(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||f||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(11);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}]);