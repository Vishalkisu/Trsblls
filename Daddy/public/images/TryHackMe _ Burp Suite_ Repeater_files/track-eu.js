(function(){(function(){var S=/%20/g,y={},c=!1,E={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"};function N(e,t){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function b(){var e={};if(location.search!=="")for(var t=location.search.replace("?","").split("&"),n=0;n<t.length;n++){var i=t[n].split("="),o=i[0],r=i[1];!r||(o=decodeURIComponent(o).replace(/[^a-zA-Z0-9-_]/gi,""),r=decodeURIComponent(r),o in e?(Array.isArray(e[o])||(e[o]=[e[o]]),e[o].push(r)):e[o]=r)}return e}function s(e){var t="",n=document.cookie;if(n.length>0){var i=n.indexOf(e+"=");if(i!=-1){i=i+e.length+1;var o=n.indexOf(";",i);o==-1&&(o=n.length),t=decodeURIComponent(n.substring(i,o))}}return t||c&&y[e]||""}function f(e,t,n){var i=document.getElementById("cio-tracker"),o=i!=null?i.getAttribute("data-cross-site-support")==="true":!1,r=document.location.host.toLowerCase().split(":")[0],a=r.split("."),P=[];if(a.length==1){var u=new Date;u.setDate(u.getDate()+n),document.cookie=e+"="+escape(t)+(n==null?"":";expires="+u.toUTCString())+";path=/"+(o?";SameSite=None;Secure":"")}else for(var h=a.length-1;h>=0;h--){P.push(a[h]);var q="."+P.slice().reverse().join("."),u=new Date;if(u.setDate(u.getDate()+n),document.cookie=e+"="+escape(t)+(n==null?"":";expires="+u.toUTCString())+";domain="+q+";path=/"+(o?";SameSite=None;Secure":""),s(e)==t)break}c&&(y[e]=t)}function k(e){f(e,"",-1)}function C(e){return l(e)==="function"}function l(e){return e==null?String(e):E[Object.prototype.toString.call(e)]||"object"}function g(e){typeof console!="undefined"&&console.warn("_cio: "+e)}function I(e,t){var n=[],i=function(r,a){a=C(a)?a():a,n[n.length]=encodeURIComponent(r)+"="+encodeURIComponent(a)};for(var o in e)e.hasOwnProperty(o)&&_(o,e[o],i,t);return n.join("&").replace(S,"+")}function _(e,t,n,i){if(i!=null&&i.useArrayParams&&l(t)==="array")for(var o=0;o<t.length;o++)_(e+"[]",t[o]==null?"":t[o],n,i);else if(t!=null&&typeof t=="object")for(var r in t)t.hasOwnProperty(r)&&_(e+"["+r+"]",t[r]==null?"":t[r],n,i);else n(e,t)}function B(){var e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function L(){var e=B();return f(_cio.cookieNamespace+"anonid",e,365),e}function T(e){try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function w(){var e=s("ajs_anonymous_id");return e&&e!==""?T(e):s(_cio.cookieNamespace+"anonid")}function m(){return s(_cio.cookieNamespace+"id")}function U(e,t,n){var i=document.getElementById("cio-tracker");if(i){t.site_id=i.getAttribute("data-site-id"),t.timestamp=new Date().getTime();var o={useArrayParams:!1};return i.getAttribute("data-use-array-params")==="true"&&(o.useArrayParams=!0),l(n)==="object"&&l(n.useArrayParams)==="boolean"&&(o.useArrayParams=n.useArrayParams),_cio._trackUrl+"/events/"+e+".gif?"+I(t,o)}}function R(){var e=c;if(c=!1,!s(_cio.cookieNamespace)){if(f(_cio.cookieNamespace,"test",1),!s(_cio.cookieNamespace))return c=e,!1;f(_cio.cookieNamespace,"",-1)}return c=e,!0}function D(e,t,n){if(t.c=m(),t.c)t.s=w();else if(t.s=w(),!t.s&&R()&&e!=="identify")t.s=L();else if(c)return;var i=new Image;i.src=U(e,t,n),_cio.images.push(i)}function d(e,t,n){_cio.pageHasLoaded?D(e,t,n):setTimeout(function(){d(e,t,n)},50)}function v(e,t){if(_cio._pluginsLoaded())switch(e){case"page":for(var n=0;n<_cio._plugins.length;n++)_cio._plugins[n].page(t.url);break;case"identify":for(var n=0;n<_cio._plugins.length;n++)_cio._plugins[n].identify(t.id);break;default:return}else setTimeout(function(){v(e,t)},50)}function j(e){var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];t.async=!0,t.src=e.path,t.onerror=function(){var i=document.getElementById("cio-tracker");i.removeAttribute("data-use-"+e.name),g("failed to load "+e.name+" plugin.")},n.parentNode.insertBefore(t,n)}function H(){return{_eventTarget:new EventTarget,on:function(e,t,n){this._eventTarget.addEventListener(e,t,n)},off:function(e,t){this._eventTarget.removeEventListener(e,t)},emit:function(e,t){this._eventTarget.dispatchEvent(new CustomEvent(e,{detail:t}))}}}if(l(_cio)=="array"){var A=_cio.slice(0);_cio={_version:"deceac11",_trackUrl:"https://track-eu.customer.io",_availablePlugins:[{name:"in-app",path:"https://assets.customer.io/assets/in-app-eu.js"}],_plugins:[],_findCustomer:m,_warn:g,_eventBus:H("_cio_event_bus"),images:[],pageHasLoaded:!1,cookieNamespace:"_cio",load:function(){_cio.pageHasLoaded=!0;for(var e=document.getElementById("cio-tracker"),t=0;t<_cio._availablePlugins.length;t++)e.getAttribute("data-use-"+_cio._availablePlugins[t].name)==="true"&&j(_cio._availablePlugins[t])},_pluginsLoaded:function(){for(var e=document.getElementById("cio-tracker"),t=0,n=0;n<_cio._availablePlugins.length;n++)e.getAttribute("data-use-"+_cio._availablePlugins[n].name)==="true"&&t++;for(var n=0;n<_cio._plugins.length;n++)if(!_cio._plugins[n].initialized())return!1;return _cio._plugins.length==t},notifyPluginLoaded:function(e){_cio._plugins.push(new e(_cio))},push:function(e){var t=e.shift();_cio[t].apply(this,e)},identify:function(e,t){var n=e.id||e.id_secure;if(typeof n=="undefined"||n===null||n.length===0){g("id can't be empty. This identify call will not be tracked.");return}f(_cio.cookieNamespace+"id",n,365),d("identify",{user:e},t||{}),v("identify",{id:n})},sidentify:function(e){e._secure=!0,_cio.identify(e)},track:function(e,t,n){d("event",{name:e,data:t||{}},n||{})},page:function(e,t,n){var i=N(t||{},b());e=e||document.location.href,i.width=i.width||window.innerWidth,i.height=i.height||window.innerHeight,i.referrer==null&&document.referrer&&document.referrer!=""&&(i.referrer=document.referrer),d("page",{name:e,data:i},n||{}),v("page",{url:e})},cookie:function(e){_cio.cookieNamespace=e},reset:function(){_cio.images=[],k(_cio.cookieNamespace+"id"),k(_cio.cookieNamespace+"anonid");for(var e=0;e<_cio._plugins.length;e++)_cio._plugins[e].initialized()&&_cio._plugins[e].reset()},on:function(e,t,n){_cio._eventBus.on(e,t,n)},off:function(e,t){_cio._eventBus.off(e,t)}},function(){var e=document.getElementById("cio-tracker");e.getAttribute("data-enable-in-memory-storage")==="true"&&(c=!0);var t=m();if(!t){var n=b();if("_cio_id"in n&&n._cio_id){var i=n._cio_id;Array.isArray(i)&&(i=i[i.length-1]),i&&_cio.identify({id:"cio_"+i})}}e.getAttribute("data-auto-track-page")!=="false"&&_cio.page(document.location.href)}();for(var p=0;p<A.length;p++)_cio.push(A[p]);document.readyState==="complete"?_cio.load():window.addEventListener?window.addEventListener("load",_cio.load,!1):window.attachEvent?window.attachEvent("onload",_cio.load):_cio.load()}})();})();
