/*
 *  Turpial JS Templating Engine Library V. 1.0.0
 *  Copyright Yorman Maricuto, May 2019.  
 *  License MIT.
 *  Social Media/Contact:
 *  @twitter: @MaricutoYorman
 *  @Instagram: maricuto
 *  @email: yerikmiller@gmail.com
 *  @number: +584267886875
 *  @github: yerikmiller
 *  @project: guide | github.
 *  Micro Framework to create web components and a templating engine for user interfaces (UI).
 *  Turpial: The Venezuela's national bird.
 *
 *  MADE IN: V E N E Z U E L A.
 *  @Development Version. V. 1.0.0
 *
*/
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(o,t)})(t)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,o){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(t,e,o){var n=[null];n.push.apply(n,e);var r=new(Function.bind.apply(t,n));return o&&_setPrototypeOf(r,o.prototype),r}).apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Turpial=function(){function t(t){var e=this;void 0===t&&(t={}),this.birds=[],this.un=function(t,e){return void 0===e&&(e=""),void 0===t?e:t},this.searchStr=function(t,e,o){void 0===o&&(o=!1);var n=t.search(e);return-1!==n&&(!0!==o||n)},this.replacement=function(t,e,o){return t.split(e).join(o)},this.find=function(t){return"string"==typeof t?document.getElementById(t):t},this.ext=".turpial.js",this.autoloader=this.un(t.autoloader,!1),this.autoloader_folder=this.un(t.autoloader_folder,""),this.cache=this.un(t.cache,"default"),this.public_path=this.un(t.public_path,""),this.core_path=this.un(t.core_path,""),this.folder=this.un(t.core_path,"/turpial/"),this.loader={},this.loader.show=this.un(t.loaderShow,null),this.loader.hide=this.un(t.loaderHide,null),this.views={},this.statusResources="loaded",this.resources={},this.myComponents=[],this.component={applyProps:function(t,o){var n=function(){var e=document.querySelectorAll(t);Array.prototype.slice.call(e).forEach(function(t){o(t)})},r=function(){if("loading"===e.statusResources)var t=0,o=setInterval(function(){return t>6e3?(console.warn("error loading resources and applying components"),void clearInterval(o)):(t+=20,"loaded"===e.statusResources?(clearInterval(o),void n()):void 0)},20);else n()};window.addEventListener("load",function(){r()}),"complete"!==document.readyState||r()},set:function(t){var o=e,n=o.component,r=t.props,i=t.tag;o.myComponents.push({tag:i,props:r});var s=o.un(t.extends,null);if(null!==s&&(s={extends:s}),void 0===window.customElements)return o.component.olderVerBrow=function(){},void n.applyProps(i,r);void 0===window.customElements.get(i)&&window.customElements.define(i,function(e){function o(o){return void 0===o&&(o=t.props),e.call(this,function(t){n.applyProps(i,t)}(o))||this}return _inheritsLoose(o,e),o}(_wrapNativeSuper(HTMLElement)),s)}},this.view={},this.models={},this.models.sources={},this.controller={},this.urls={},this.filesLoaded={},this.inject=function(t){var o=t,n=Array.isArray(o),r=0;for(o=n?o:o[Symbol.iterator]();;){var i;if(n){if(r>=o.length)break;i=o[r++]}else{if((r=o.next()).done)break;i=r.value}var s=i;document.head.appendChild(e.filesLoaded[s])}},this.models.fetch=function(t){var o=e.un(t.type,"script");e.un(t.options,{cache:e.cache});if(void 0===t.ready&&(t.ready=function(){}),"string"==typeof t.file)var n=[t.file];else n=t.file;var i=e,s=(document.head,[]),a=[];t.getString=function(t){return t.clone().text()},t.fetching=function(e){void 0!==i.filesLoaded[e]&&"script"===o&&i.filesLoaded[e].remove();var n=new XMLHttpRequest;n.open("GET",e,!0),n.setRequestHeader("Cache-Control",i.cache),n.onload=function(){if(n.status>=200&&n.status<400){var o=n.responseText;a.push(o);var c=document.createElement("script");c.text=o,i.filesLoaded[e]=c,s.push(e)}else if("function"==typeof t.error&&200!==r.status)return t.error(n.status)},n.send()},i.statusResources="loading",function(e){var n=e,r=Array.isArray(n),c=0;for(n=r?n:n[Symbol.iterator]();;){var u;if(r){if(c>=n.length)break;u=n[c++]}else{if((c=n.next()).done)break;u=c.value}var l=u;t.fetching(l)}var f=0,p=setInterval(function(){var n=!1;if(1e4===(f+=70)&&(n=!0,console.warn("¡Impossible to load all files.")),s.length===e.length||!0===n)return clearInterval(p),"script"===o?(i.inject(e),t.ready()):"text"===o&&t.ready(a),void(i.statusResources="loaded")},70)}(n)},this.fetch=function(t){return e.models.fetch(t)},this.include=function(t){return e.models.fetch(t)},this.controller.views={path:function(t){var o=e.ext,n=e.folder+"views/",r=t.views,i=e.resources,s=r.split("/"),a=n;if(1===s.length){var c=s[0];return a+=""+c+o,i[c]={},a}var u=s.pop(),l=s.pop();c=u;return i[l]={},i[l][c]={},0===s.length?a+=l+"/"+c+o:(s.forEach(function(t){a+=t+"/"}),a+=l+"/"+c+o),a}},this.view.load=function(t){void 0===t&&(t={folder:e.autoloader_folder,ready:function(){}});var o=e.ext,n=e.app.parameters,r=e.app.controller_name,i=e.app.action_name,s=""+e.folder+t.folder+r;if("index"===r)var a=""+s+o;else if(0===n.length&&"index"!==r&&void 0===i)a=s+"/index"+o;else if(0===n.length&&"undefined"!==i)a=s+"/"+i+"/index"+o;else{a=s+"/"+i;n.forEach(function(t){a+="/"+t}),a+=o}var c={file:a,ready:function(){t.ready()}};"function"==typeof t.error&&(c.error=function(e){t.error(e)}),e.fetch(c),e.DataView=c},this.controller.routes={set:function(){var t=e;t.app={};var o=window.location.href.split("?"),n=(o=(o=o[0]).split("#"))[0].search(t.public_path);if(n>0){var r=(o=o[0].substr(n+t.public_path.length)).split("/"),i=0,s=0;t.app.parameters=[],r.forEach(function(e){""!=e&&(0===i&&(t.app.controller_name=e),1===i?t.app.action_name=e:i>1&&(t.app.parameters[s++]=e),i++)}),void 0===t.app.controller_name&&(t.app.controller_name="index")}else console.warn("bad_public_path_name")},change:function(t){var o=e,n=window.location.href,r=(n=(n=(n=(n=n.split("#"))[0]).split("?"))[0]).split("/");r=""===r.pop()?"":"/",!0===o.searchStr(t.path,"http")&&(n=""),window.history.pushState(o.un(t.object),"",o.un(""+n+r+t.path)),o.controller.routes.set(),o.urls.load();var i=o.un(t.title,!1);"string"==typeof i&&(document.title=i)},go:function(t){if("number"==typeof t)window.history.go(t);else if("back"===t)window.history.back();else{if("forward"!==t)return;window.history.forward()}e.controller.routes.set(),e.urls.load()}},this.router=function(t){"number"!=typeof t&&"string"!=typeof t?e.controller.routes.change(t):e.controller.routes.go(t)},this.routes=this.controller.routes.set,this.routes(),this.controller.components={},this.views.get=function(t){if("object"===_typeof(t)){"string"==typeof t.views&&(t.views=[t.views]);var o=[],n=e.controller.views;t.views.forEach(function(e,r){t.views=e,o[r]=n.path(t)}),e.fetch({file:o,ready:t.ready})}},this.urls={},this.urls.load=function(){var t=e,o=t.app.controller_name,n=t.app.action_name,r=t.app.parameters,i=t.un(t.urls[o],!1);if(!1!==i){t.un(i.loadController,!0);var s=t.un(i.loadAction,!0),a=t.un(i.loadParameters,1e3),c=t.un(t.urls[o][n],!1);return"function"==typeof i.self?"function"==typeof c&&!0===s?r.length>a?void i.self(function(){c(function(){})}):void i.self(function(){c(function(){t.view.load()})}):!1===s&&"string"==typeof n?void i.self(function(){c(function(){})}):void i.self(function(){t.view.load()}):void 0}t.view.load()},!0===t.autoloader&&(window.addEventListener("load",function(){e.urls.load()}),window.onpopstate=function(t){e.controller.routes.set(),e.urls.load(),function(){void 0===window.customElements&&Array.prototype.slice.call(this.myComponents).forEach(function(t){this.component.set({tag:t.tag,props:t.props})})}()})}var e=t.prototype;return e.map=function(t,e){void 0===e&&(e=[]);var o=this.birds[t];if("object"===_typeof(t)?o=t:void 0===o&&(o=this.find(t)),"object"===_typeof(e)){if(void 0===e[0])return o;o=o.children,e.forEach(function(t,n){o=void 0===e[n+1]?o[t]:o[t].children})}return o},e.createMap=function(t){var e=(t=this.find(t)).getAttribute("id");if(void 0!==e){var o=document.getElementById(e);this.birds[e]=o}},e.read=function(t,e){return void 0===e&&(e=[]),this.map(t,e)},e.selectorApp=function(t,e){return void 0===e&&(e=[]),"object"===_typeof(e)&&!0===Number.isInteger(e[0])?this.map(t,e):e},e.delete=function(t){(t=this.find(t)).remove()},e.update=function(t,e,o,n){if(void 0===e&&(e=null),void 0===o&&(o="replace-selector"),void 0===n&&(n=!0),"string"==typeof e)var r=this.render(e),i=e;else r=e;if(null===r){var s=!1;r=e}else s=!0;var a=t;!0===n&&(o="replace-selector");var c=!1,u=a.parentNode;if("before"===o)u.insertBefore(r,a),c=r;else if("after"===o)u.insertBefore(r,a.nextSibling),c=r;else if("replace-selector"===o)u.replaceChild(r,a),c=r;else{if("inner"!==o)return console.warn("error-on-placement"),!1;!0===s?a.innerHTML=i:a.innerText=r,c=a}var l=a;return this.createMap(l),c},e.insert=function(t,e,o){return void 0===o&&(o="inner"),t=this.find(t),this.update(t,e,o,!1)},e.render=function(t){var e=document.createElement("template");return e.innerHTML=t,e=e.content.firstElementChild},e.mount=function(t,e){if("string"==typeof e)e=this.render(e);if(null!==e){var o=(t=this.find(t)).appendChild(e),n=t;return this.createMap(n),o}console.warn("need to be HTML string or object")},e.settings=function(t){if(void 0===t[0]){var e=[],o=0,n=[];for(var r in t)n.push(t[r]);n.forEach(function(t){e[o++]=t});var i=[];o=0;Object.keys(t).forEach(function(t){i[o++]=t});var s="";o=0;return i.forEach(function(t,o){s+=" "+t+'="'+e[o]+'"'}),s}},e.createTag=function(t,e,o){void 0===e&&(e=""),void 0===o&&(o=""),"object"===_typeof(e)&&(e=this.settings(e));var n="<"+t+e+">";return n+=o,"br"!==t&&(n+="</"+t+">"),n},e.html=function(t,e,o){var n=this.replacement;if("code"===t&&(o=n(o,"<","&lt;"),o=n(o,">","&gt;"),o=n(o," ","&nbsp;")),void 0===o)o=e,e="";if("object"===_typeof(o)&&void 0!==o[0]){var r="";o.forEach(function(t,e){r+=""+t});i=this.createTag(t,e,r)}else if("object"===_typeof(o))e=o,i=this.createTag(t,e,o="");else var i=this.createTag(t,e,o);return i},e.el=function(t,e,o){return this.html(t,e,o)},t}();