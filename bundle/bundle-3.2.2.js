!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(2),o=n.n(r),i=n(1),a=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(a,s)}u((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},u="sIdRefreshToken";function c(t,e){return a(this,void 0,void 0,(function(){var n,r,a,u,c;return s(this,(function(s){switch(s.label){case 0:n=new o.a,s.label=1;case 1:return[4,n.acquireLock("REFRESH_TOKEN_USE",1e3)];case 2:if(!s.sent())return[3,7];s.label=3;case 3:return s.trys.push([3,5,6,7]),void 0===(r=l())?[2,{result:"SESSION_EXPIRED"}]:r!==e?[2,{result:"RETRY"}]:[4,i.default.originalFetch(t,{method:"post",credentials:"include"})];case 4:if(200!==(a=s.sent()).status)throw a;return void 0===l()?[2,{result:"SESSION_EXPIRED"}]:(a.headers.forEach((function(t,e){"anti-csrf"===e.toString()&&i.AntiCsrfToken.setItem(l(),t)})),[2,{result:"RETRY"}]);case 5:return u=s.sent(),void 0===l()?[2,{result:"SESSION_EXPIRED"}]:[2,{result:"API_ERROR",error:u}];case 6:return n.releaseLock("REFRESH_TOKEN_USE"),[7];case 7:return void 0===(c=l())?[2,{result:"SESSION_EXPIRED"}]:c!==e?[2,{result:"RETRY"}]:[3,1];case 8:return[2]}}))}))}function l(){var t=("; "+document.cookie).split("; "+u+"=");if(2===t.length){var e=t.pop();if(void 0!==e)return e.split(";").shift()}}},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"AntiCsrfToken",(function(){return s})),n.d(e,"handleUnauthorised",(function(){return u})),n.d(e,"getDomainFromUrl",(function(){return c}));var r=n(0),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(a,s)}u((r=r.apply(t,e||[])).next())}))},a=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=function(){function t(){}return t.getToken=function(e){if(void 0!==e){if(void 0===t.tokenInfo){var n=window.localStorage.getItem("anti-csrf-localstorage");if(null===n)return;t.tokenInfo={antiCsrf:n,associatedIdRefreshToken:e}}else if(t.tokenInfo.associatedIdRefreshToken!==e)return t.tokenInfo=void 0,t.getToken(e);return t.tokenInfo.antiCsrf}t.tokenInfo=void 0},t.removeToken=function(){t.tokenInfo=void 0,window.localStorage.removeItem("anti-csrf-localstorage")},t.setItem=function(e,n){void 0!==e?(window.localStorage.setItem("anti-csrf-localstorage",n),t.tokenInfo={antiCsrf:n,associatedIdRefreshToken:e}):t.tokenInfo=void 0},t}();function u(t,e){return i(this,void 0,void 0,(function(){var n;return a(this,(function(o){switch(o.label){case 0:if(void 0===t)throw Error("Please define refresh token API: AuthHttpRequest.init(<PATH HERE>, unauthorised status code)");return void 0===e?[2,void 0!==Object(r.a)()]:[4,Object(r.b)(t,e)];case 1:if("SESSION_EXPIRED"===(n=o.sent()).result)return[2,!1];if("API_ERROR"===n.result)throw n.error;return[2,!0]}}))}))}function c(t){return void 0===window.fetch?"http://localhost:8888":t.startsWith("https://")||t.startsWith("http://")?t.split("/").filter((function(t,e){return e<=2})).join("/"):window.location.origin}var l=function(){function e(){}return e.init=function(n,r,o){void 0===o&&(o=void 0!==e.viaInterceptor&&e.viaInterceptor),e.refreshTokenUrl=n,void 0!==r&&(e.sessionExpiredStatusCode=r);var i=void 0===window.fetch?t:window;void 0===e.originalFetch&&(e.originalFetch=i.fetch.bind(i)),o&&(i.fetch=function(t,n){return e.fetch(t,n)}),e.viaInterceptor=o,e.apiDomain=c(n),e.initCalled=!0},e.sessionExpiredStatusCode=440,e.initCalled=!1,e.apiDomain="",e.doRequest=function(t,n,l){return i(void 0,void 0,void 0,(function(){var i,f,d,h,v,p,w;return a(this,(function(a){switch(a.label){case 0:if(!e.initCalled)throw Error("init function not called");return"string"==typeof l&&c(l)!==e.apiDomain&&e.viaInterceptor?[4,t(n)]:[3,2];case 1:return[2,a.sent()];case 2:a.trys.push([2,,15,16]),i=!1,f=void 0,a.label=3;case 3:0,d=Object(r.a)(),h=s.getToken(d),n=o({},n,{credentials:"include"}),v=n,void 0!==h&&(v=o({},v,{headers:void 0===v?{"anti-csrf":h}:o({},v.headers,{"anti-csrf":h})})),a.label=4;case 4:return a.trys.push([4,9,,13]),[4,t(v)];case 5:return(p=a.sent()).status!==e.sessionExpiredStatusCode?[3,7]:[4,u(e.refreshTokenUrl,d)];case 6:return a.sent()?[3,8]:(f=p,[3,14]);case 7:return p.headers.forEach((function(t,e){"anti-csrf"===e.toString()&&s.setItem(Object(r.a)(),t)})),[2,p];case 8:return[3,13];case 9:return(w=a.sent()).status!==e.sessionExpiredStatusCode?[3,11]:[4,u(e.refreshTokenUrl,d)];case 10:return a.sent()?[3,12]:(i=!0,f=w,[3,14]);case 11:throw w;case 12:return[3,13];case 13:return[3,3];case 14:if(i)throw f;return[2,f];case 15:return void 0===Object(r.a)()&&s.removeToken(),[7];case 16:return[2]}}))}))},e.attemptRefreshingSession=function(){return i(void 0,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:if(!e.initCalled)throw Error("init function not called");n.label=1;case 1:return n.trys.push([1,,3,4]),t=Object(r.a)(),[4,u(e.refreshTokenUrl,t)];case 2:return[2,n.sent()];case 3:return void 0===Object(r.a)()&&s.removeToken(),[7];case 4:return[2]}}))}))},e.get=function(t,n){return i(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,e.fetch(t,o({method:"GET"},n))];case 1:return[2,r.sent()]}}))}))},e.post=function(t,n){return i(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,e.fetch(t,o({method:"POST"},n))];case 1:return[2,r.sent()]}}))}))},e.delete=function(t,n){return i(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,e.fetch(t,o({method:"DELETE"},n))];case 1:return[2,r.sent()]}}))}))},e.put=function(t,n){return i(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,e.fetch(t,o({method:"PUT"},n))];case 1:return[2,r.sent()]}}))}))},e.fetch=function(t,n){return i(void 0,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,e.doRequest((function(n){return e.originalFetch(t,o({},n))}),n,t)];case 1:return[2,r.sent()]}}))}))},e.sessionPossiblyExists=function(){return i(void 0,void 0,void 0,(function(){return a(this,(function(t){return[2,void 0!==Object(r.a)()]}))}))},e}();e.default=l}.call(this,n(3))},function(t,e){const n="browser-tabs-lock-key";function r(t){return new Promise(e=>setTimeout(e,t))}function o(t){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";let n="";for(let r=0;r<t;r++){n+=e[Math.floor(Math.random()*e.length)]}return n}class i{constructor(){this.id=Date.now().toString()+o(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),void 0===i.waiters&&(i.waiters=[])}async acquireLock(t,e=5e3){let i=Date.now()+o(4);const s=Date.now()+e,u=`${n}-${t}`,c=window.localStorage;for(;Date.now()<s;){if(null===c.getItem(u)){const e=`${this.id}-${t}-${i}`;await r(Math.floor(25*Math.random())),c.setItem(u,JSON.stringify({id:this.id,iat:i,timeoutKey:e,timeAcquired:Date.now()})),await r(30);let n=c.getItem(u);if(null!==n&&(n=JSON.parse(n)).id===this.id&&n.iat===i)return!0}else a(),await this.waitForSomethingToChange(s);i=Date.now()+o(4)}return!1}async waitForSomethingToChange(t){await new Promise(e=>{let n=!1,r=Date.now();const o=50;let a=!1;function s(){if(a||(window.removeEventListener("storage",s),i.removeFromWaiting(s),clearTimeout(u),a=!0),!n){n=!0;let t=o-(Date.now()-r);t>0?setTimeout(e,t):e()}}window.addEventListener("storage",s),i.addToWaiting(s);let u=setTimeout(s,Math.max(0,t-Date.now()))})}static addToWaiting(t){this.removeFromWaiting(t),i.waiters.push(t)}static removeFromWaiting(t){i.waiters=i.waiters.filter(e=>e!==t)}static notifyWaiters(){[...i.waiters].forEach(t=>t())}releaseLock(t){return this.releaseLock__private__(t)}releaseLock__private__(t,e=null){const r=window.localStorage,o=`${n}-${t}`;let a=r.getItem(o);null!==a&&((a=JSON.parse(a)).id!==this.id||null!==e&&a.iat!==e||(r.removeItem(o),i.notifyWaiters()))}}function a(){const t=Date.now()-1e4,e=window.localStorage,r=Object.keys(e);let o=!1;for(let i=0;i<r.length;i++){const a=r[i];if(a.includes(n)){let n=e.getItem(a);null!==n&&(n=JSON.parse(n)).timeAcquired<t&&(e.removeItem(a),o=!0)}}o&&i.notifyWaiters()}t.exports=i},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);