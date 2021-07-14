"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  _______ _    _ _____  _____ _____          _             _  _____ 
 |__   __| |  | |  __ \|  __ \_   _|   /\   | |           | |/ ____|
    | |  | |  | | |__) | |__) || |    /  \  | |           | | (___  
    | |  | |  | |  _  /|  ___/ | |   / /\ \ | |       _   | |\___ \ 
    | |  | |__| | | \ \| |    _| |_ / ____ \| |____  | |__| |____) |
    |_|   \____/|_|  \_\_|   |_____/_/    \_\______|  \____/|_____/ 
    * Turpial JS Library V. 1.0.0
    * License: MIT.
    * Copyright Yorman Maricuto, May 2019.
    * @twitter: @MaricutoYorman, @Instagram: maricuto
    * Micro-Library to create web components, multi-fetch elements, append styles, scripts, templating engine JSX
*/
var Turpial = /*#__PURE__*/function () {
  function Turpial() {
    var _this = this;

    var tpObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Turpial);

    // this is for generate
    // a family tree of birds 
    // (parents-childrens -> map)
    // this is is to control realDOM (update-delete-insert-read)
    this.birds = [];

    this.un = function (v) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      if (typeof v === "undefined") {
        return r;
      } else {
        return v;
      }
    };

    this.searchStr = function (where, what) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var search = where.search(what);

      if (search === -1) {
        return false;
      }

      if (position === true) {
        return search;
      }

      return true;
    };

    this.replacement = function (target, search, replacement) {
      return target.split(search).join(replacement);
    };

    this.find = function (selector) {
      if (typeof selector === "string") {
        return document.getElementById(selector);
      } else {
        return selector;
      }
    }; // helpers


    this.ext = ".turpial.js";
    this.allowStateEvents = this.un(tpObj.allowStateEvents, false);
    this.autoloader = this.un(tpObj.autoloader, false);
    this.autoloader_folder = this.un(tpObj.autoloader_folder, "");
    this.cache = this.un(tpObj.cache, "public");
    this.public_path = this.un(tpObj.public_path, "");
    this.core_path = this.un(tpObj.core_path, "");
    this.folder = this.un(tpObj.core_path, "/turpial/");
    this.loader = {};
    this.httpRequests = [];
    this.loader.show = this.un(tpObj.loaderShow, null);
    this.loader.hide = this.un(tpObj.loaderHide, null);
    this.views = {};
    this.statusResources = "loaded";
    this.resources = {};
    this.myComponents = [];

    this.random_string = function (length) {
      "undefined" == typeof length && (length = 6);

      for (var result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    };

    this.selectData = function (arr, item, value, return_key) {
      return_key = turpial.un(return_key, false);
      var get = "";
      arr.forEach(function (dta, key) {
        if (dta[item] == value) {
          if (return_key === true) {
            get = key;
            return;
          } else {
            get = dta;
            return;
          }
        }
      });
      return get;
    };

    this.component = {
      applyProps: function applyProps(tag, props) {
        var applying = function applying() {
          var elements = document.querySelectorAll(tag); // like a spread operator

          Array.prototype.slice.call(elements).forEach(function (el) {
            props(el);
          });
        };

        var implement = function implement() {
          if (_this.statusResources === "loading") {
            var limit = 0;
            var interval = setInterval(function () {
              if (limit > 6000) {
                console.warn("error loading resources and applying components");
                clearInterval(interval);
                return;
              }

              limit = limit + 20;

              if (_this.statusResources === "loaded") {
                clearInterval(interval);
                applying(tag, props);
                return;
              }
            }, 20);
          } else {
            applying(tag, props);
            return;
          }
        };

        window.addEventListener("load", function () {
          implement();
          return;
        });

        if (document.readyState === "complete") {
          implement();
          return;
        }
      },
      set: function set(obj) {
        var app = _this;
        var component = app.component;
        var props = obj.props;
        var tag = obj.tag;
        app.myComponents.push({
          tag: tag,
          props: props
        });
        var extendTo = app.un(obj.extends, null);

        if (extendTo !== null) {
          extendTo = {
            extends: extendTo
          };
        }

        if (typeof window.customElements === "undefined") {
          app.component.olderVerBrow = function () {};

          component.applyProps(tag, props);
          return;
        }

        var get = window.customElements.get(tag);

        if (typeof get !== "undefined") {
          return;
        }

        window.customElements.define(tag, /*#__PURE__*/function (_HTMLElement) {
          _inherits(_class, _HTMLElement);

          var _super = _createSuper(_class);

          function _class() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : obj.props;

            _classCallCheck(this, _class);

            return _super.call(this, function (props) {
              // on load window or document loaded...
              component.applyProps(tag, props);
            }(props));
          }

          return _class;
        }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)), extendTo);
      }
    };
    this.view = {};
    this.models = {};
    this.models.sources = {};
    this.controller = {};
    this.urls = {};
    this.filesLoaded = {};

    this.inject = function (files) {
      var _iterator = _createForOfIteratorHelper(files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;

          if (_this.filesLoaded[file].tagName === "STYLE") {
            _this.filesLoaded[file].innerHTML = _this.filesLoaded[file].text;
          }

          document.head.appendChild(_this.filesLoaded[file]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }; // end helpers


    this.models.fetch = function (obj) {
      var app = _this;
      var type = obj.type || "script";
      var cancelOnResend = app.un(obj.cancelOnResend, null);
      var headers = app.un(obj.options, null);
      var method = app.un(obj.method, "GET");
      obj.url = obj.url || [];
      obj.file = obj.file || obj.url;
      obj.files = obj.files || obj.file;
      var files = obj.files;

      if (typeof obj.ready === "undefined") {
        obj.ready = function () {};
      }

      if (typeof files === "string") {
        files = [files];
      }

      var Head = document.head;
      var loaded = [];
      var unloaded = [];
      var text = [];

      obj.getString = function (r) {
        return r.clone().text();
      };

      obj.fetching = function (file) {
        // remove if the element exist 
        // to not create scripts elements with the same things...
        // just ignoring or stopping the re-injecting will fail...
        if (typeof app.filesLoaded[file] !== "undefined" && type === "script") {
          app.filesLoaded[file].remove();
        }

        var request = new XMLHttpRequest();
        request.open(method, file, true);
        var options = [];
        var headersValues = [];

        if (headers !== null) {
          for (var header in headers) {
            headersValues.push(headers[header]);
          }

          Object.keys(headers).forEach(function (name, k) {
            options.push([name, headersValues[k]]);
          });
          options.forEach(function (option) {
            request.setRequestHeader(option[0], option[1]);
          });
        }

        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            var resource = request.responseText;
            text.push(resource);
            var elementTag;

            if (type === "script" || type === "style" || type === "link") {
              elementTag = type;
            } else {
              // if tag name is another than both above.
              elementTag = "script";
            }

            var el = document.createElement(elementTag);

            if (type === "style") {
              el.type = "text/css";
            } else if (type === "link") {
              el.rel = "stylesheet";
              el.media = "all";
              el.href = file;
            }

            el.text = resource;
            app.filesLoaded[file] = el;
            loaded.push(file);
          } else {
            if (typeof obj.onerror === "function" && request.status >= 400) {
              return obj.onerror(request.status);
            }
          }
        };

        request.onerror = function () {
          app.filesLoaded[file] = "";
          loaded.push("unloaded:" + file);
          unloaded.push(file);
        };

        if (cancelOnResend === true) {
          var idRequest = "rq_" + app.un(obj.id, app.random_string(4));
          var rq = app.httpRequests[idRequest];

          if (typeof rq !== "undefined") {
            try {
              app.httpRequests[idRequest].abort();
            } catch (e) {
              console.warn("unable to cancel request.");
            }
          }

          app.httpRequests[idRequest] = request;
        }

        if (method === "POST") {
          request.send(obj.data);
          return;
        }

        request.send();
      };

      app.statusResources = "loading";

      (function (files) {
        var _iterator2 = _createForOfIteratorHelper(files),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var file = _step2.value;
            obj.fetching(file);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var counter = 0;
        var check = setInterval(function () {
          counter = counter + 70;
          var forceLoad = false;

          if (counter === 10000) {
            forceLoad = true;
            console.warn("¡Impossible to load all files.");
          }

          if (loaded.length === files.length || forceLoad === true) {
            clearInterval(check);

            if (type === "script" || type === "style" || type === "link") {
              app.inject(files);
              obj.ready();
            } else if (type === "text") {
              var texts = [];

              var _iterator3 = _createForOfIteratorHelper(files),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var file = _step3.value;
                  texts.push(app.filesLoaded[file].innerHTML);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              obj.ready(texts);
            }

            app.statusResources = "loaded";
            return;
          }
        }, 70);
      })(files);
    };

    this.fetch = function (props) {
      return _this.models.fetch(props);
    };

    this.include = function (props) {
      return _this.models.fetch(props);
    };

    this.linkCSS = function (props) {
      props.type = "link";
      var app = _this;
      props.type = "style";
      props.url = props.url || [];
      props.file = props.file || props.url;
      props.files = props.files || props.file;
      var nodes = [];
      props.files.map(function (file) {
        var link = document.createElement("link");
        link.setAttribute("media", "all");
        link.href = file;
        var el = app.mount(document.head, link);
        nodes.push(el);
      });
      props.ready(nodes);
      return nodes; // return this.models.fetch(props)
    };

    this.includeCSS = function (props) {
      props.type = "style";
      return _this.models.fetch(props);
    };

    this.controller.views = {
      path: function path(obj) {
        var ext = _this.ext;
        var folder = "".concat(_this.folder, "views/");
        var file_name = obj.views;
        var resources = _this.resources; // in case of route.

        var routing = file_name.split("/");
        var Path = folder;

        if (routing.length === 1) {
          var file = routing[0];
          Path += "".concat(file).concat(ext);
          resources[file] = {}; // create view instance.

          return Path;
        } else {
          // file
          var last = routing.pop(); // last folder

          var penultimate = routing.pop();
          var LastFolder = penultimate;
          var file = last;
          resources[LastFolder] = {}; // create view instance.

          resources[LastFolder][file] = {}; // create view instance.
        }

        if (routing.length === 0) {
          Path += "".concat(LastFolder, "/").concat(file).concat(ext);
        } else {
          routing.forEach(function (subfolder) {
            Path += "".concat(subfolder, "/");
          });
          Path += "".concat(LastFolder, "/").concat(file).concat(ext);
        }

        return Path;
      }
    };

    this.view.load = function (props) {
      props = props || {
        folder: _this.autoloader_folder,
        ready: function ready() {}
      };
      var ext = _this.ext;
      var parameters = _this.app.parameters;
      var controller = _this.app.controller_name;
      var action = _this.app.action_name;
      var base = "".concat(_this.folder).concat(props.folder).concat(controller);
      props.module = turpial.un(props.module, null);

      if (controller === "index") {
        var urlPath = "".concat(base).concat(ext);
      } else if (parameters.length === 0 && controller !== "index" && typeof action === "undefined") {
        var urlPath = "".concat(base, "/index").concat(ext);
      } else if (parameters.length === 0 && action !== "undefined") {
        var urlPath = "".concat(base, "/").concat(action, "/index").concat(ext);
      } else {
        var urlPath = "".concat(base, "/").concat(action);
        parameters.forEach(function (parameter) {
          urlPath += "/".concat(parameter);
        });
        urlPath += ext;
      }

      if (typeof props.module === "string") {
        props.ext = props.ext || ext;
        urlPath = _this.core_path + props.module + props.ext;
      }

      var data = {
        file: urlPath,
        options: props.options || {},
        ready: function ready() {
          props.ready();
        }
      };

      if (typeof props.error === "function") {
        data["error"] = function (data) {
          props.error(data);
        };
      }

      _this.DataView = data;

      if (props.module === "") {
        return;
      }

      if (props.module === false) {
        return;
      }

      _this.fetch(data);
    };

    this.controller.routes = {
      set: function set() {
        var app = _this;
        app.app = {};
        var Path = window.location.href.split("?");
        Path = Path[0];
        Path = Path.split("#");
        var SearchPublichPath = Path[0].search(app.public_path);

        if (SearchPublichPath > 0) {
          Path = Path[0].substr(SearchPublichPath + app.public_path.length);
        } else {
          console.warn("bad_public_path_name");
          return;
        }

        var routes = Path.split("/");
        var n = 0;
        var param = 0;
        app.app.parameters = [];
        routes.forEach(function (route) {
          if (route == "") {
            return;
          }

          if (n === 0) {
            app.app.controller_name = route;
          }

          if (n === 1) {
            app.app.action_name = route;
          } else if (n > 1) {
            app.app.parameters[param++] = route;
          }

          n++;
        });

        if (typeof app.app.controller_name === "undefined") {
          app.app.controller_name = "index";
        }
      },
      change: function change(obj) {
        var app = _this;
        var href = window.location.href;
        href = href.split("#");
        href = href[0];
        href = href.split("?");
        href = href[0];
        var d = href.split("/");

        if (d.pop() === "") {
          d = "";
        } else {
          d = "/";
        }

        if (app.searchStr(obj.path, "http") === true) {
          href = "";
        }

        window.history.pushState(app.un(obj.object), "", app.un("".concat(href).concat(d).concat(obj.path)));
        app.controller.routes.set();
        app.urls.load(obj);
        var title = app.un(obj.title, false);

        if (typeof title === "string") {
          document.title = title;
        }
      },
      go: function go(value) {
        if (typeof value === "number") {
          window.history.go(value);
        } else if (value === "back") {
          window.history.back();
        } else if (value === "forward") {
          window.history.forward();
        } else {
          return;
        }

        _this.controller.routes.set();

        _this.urls.load();
      }
    };

    this.router = function (obj) {
      if (typeof obj === "number" || typeof obj === "string") {
        _this.controller.routes.go(obj);

        return;
      }

      _this.controller.routes.change(obj);

      _this.stateEvent();
    };

    this.routes = this.controller.routes.set;
    this.routes(); // execute routes  

    this.controller.components = {};

    this.views.get = function (obj) {
      if (_typeof(obj) !== "object") {
        return;
      }

      if (typeof obj.views === "string") {
        obj.views = [obj.views];
      }

      var Paths = [];
      var controller = _this.controller.views;
      obj.views.forEach(function (view, key) {
        obj.views = view;
        Paths[key] = controller.path(obj);
      });
      Object.assign(obj, {
        file: Paths,
        ready: obj.ready
      });

      _this.fetch(obj);
    };

    this.urls = {};

    this.urls.load = function (obj) {
      obj = obj || {};
      var app = _this;
      var controller = app.app.controller_name;
      var action = app.app.action_name;
      var parameters = app.app.parameters; // if this is undefined set as empty...

      var moduleController = app.urls[controller] || false;
      obj.module = turpial.un(obj.module, null); // when @turpial.router method is used and 
      // load a custom JS module/component file.

      if (typeof obj.module === "string") {
        app.view.load(obj);
        return;
      } // when url is root or there isn't modules


      if (moduleController === false) {
        app.view.load(obj);
        return;
      }

      var loadController = app.un(moduleController.loadController, true);
      var loadAction = app.un(moduleController.loadAction, true);
      var loadParameters = app.un(moduleController.loadParameters, 1000);
      var moduleAction = app.un(app.urls[controller][action], false);

      if (typeof moduleController.self === "function") {
        if (typeof moduleAction === "function" && loadAction === true) {
          if (parameters.length > loadParameters) {
            moduleController.self(function () {
              moduleAction(function () {});
            });
            return;
          }

          moduleController.self(function () {
            moduleAction(function () {
              app.view.load(obj);
            });
          });
          return;
        } else if (loadAction === false && typeof action === "string") {
          moduleController.self(function () {
            moduleAction(function () {});
          });
          return;
        }

        moduleController.self(function () {
          app.view.load(obj);
        });
        return;
      }
    };

    this.historyEvents = {};

    this.URLNoHASH = function (url) {
      return url.split("#")[0];
    };

    this.createHistoryEvent = function (position, callback) {
      var main = this.URLNoHASH(window.location.href);
      position = position || "";
      position = main + position;
      this.historyEvents[position] = callback;
      /* @HOW TO USE HISTORY VIEWS.
       * you need to create new history events for actual position history
       * you can rename index position to trigger a function when back history
       * action was executed.
       * 
       * ex: you can create history events like: 
       * @index-> localhost/myweb
       * when you create an application that generate a different view
       * and generating new html elements and change history wirh router.
       * you can add it to history event views to generate 
       * a callback function when history has that location path.
       *
       * You need to set @allowStateEvents to true to trigger this turpial function.
       * 
       * note: turpial will trigger index or main view in the position you have
       * for example if the page load at: myweb.com/portfolio/
       * that point will be considered like a main position view.
       * @you can rename index if you left empty url position
       *  value on createHistoryEvent method.
       * @you can create another view like myweb.com/portfolio/client-1 naming
       *  position url like "/client-1"
       *  note the "/" sign at the beginning
       * @set the function to be executed on callback in second value property.
      */
    };

    this.createHistoryEvent("", function () {});

    this.stateEvent = function () {
      var event = _this.historyEvents;

      if (typeof event[_this.URLNoHASH(window.location.href)] === "function") {
        event[_this.URLNoHASH(window.location.href)]();
      }
    };

    if (this.allowStateEvents === true) {
      window.addEventListener("popstate", this.stateEvent);
    }

    if (tpObj.autoloader === true) {
      window.addEventListener("load", function () {
        _this.urls.load();
      });

      window.onpopstate = function (event) {
        // on window history change
        // update routes and reload modules. 
        _this.controller.routes.set(); // execute routes


        _this.urls.load();

        (function () {
          // just for older browsers
          if (typeof window.customElements === "undefined") {
            Array.prototype.slice.call(this.myComponents).forEach(function (com) {
              this.component.set({
                tag: com.tag,
                props: com.props
              });
            });
          }
        })();
      };
    }

    this.template = function (html, replacemets) {
      var engine = {
        run: function run(html, replacemets) {
          replacemets = replacemets || [];

          if (_typeof(replacemets) === "object" && !Array.isArray(replacemets)) {
            var reArrange = [];
            Object.values(replacemets).map(function (element, number) {
              reArrange.push(_defineProperty({}, Object.keys(replacemets)[number], element));
            });
            replacemets = reArrange;
          }

          if (_typeof(html) === "object") {
            html = html.innerHTML;
          }

          var template = function template(_template, searchall, replaceby) {
            return _template.split(searchall).join(replaceby);
          };

          var structure = html;
          replacemets.forEach(function (replacement) {
            var items = Object.keys(replacement);
            var values = Object.values(replacement);
            items.forEach(function (item, key) {
              item = "{{ ".concat(item, " }}");

              if (html.search(item) >= 0) {
                structure = template(structure, item, values[key]);
              }
            });
          });
          return structure;
        },
        replace: function replace(item, replacement, HTML) {
          item = "{{ ".concat(item, " }}");
          HTML = HTML.split(item).join(replacement);
          return HTML;
        },
        joinMoreElements: function joinMoreElements(target, elements) {
          Object.values(elements).forEach(function (element, key) {
            target[Object.keys(elements)[key]] = element;
          });
          return target;
        },
        toHTML: function toHTML(target, strings) {
          if (target !== false) {
            target.innerHTML = strings;
            target = target.content.firstElementChild;
            return target;
          } else {
            turpial.render();
          }
        },
        toString: function toString(target, html) {
          html = html.cloneNode(true);
          var dom_elem = target;
          dom_elem.innerHTML = "<div></div>";
          dom_elem = dom_elem.content.firstElementChild;
          dom_elem.appendChild(html);
          return dom_elem.innerHTML;
        },
        create: function create(element, replacements) {
          var app = this; // start with "div" after template tag.   

          var content = turpial.find(element).content.firstElementChild; // this is to fill it, after finish the process.

          var container = content.cloneNode(true);
          var getHTMLText = content.innerHTML;
          var eraseEls = [];
          Object.keys(replacements).forEach(function (item, key) {
            getHTMLText = app.replace(item, Object.values(replacements)[key], getHTMLText);
          }); // PUSH INTO THE CLONDED

          container.innerHTML = getHTMLText;
          return container;
        }
      };
      return engine.run(html, replacemets);
    };
  }

  _createClass(Turpial, [{
    key: "map",
    value: function map(appName) {
      var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var app = this;
      var map = app.birds[appName];

      if (_typeof(appName) === "object") {
        map = appName;
      } else if (typeof map === "undefined") {
        map = this.find(appName);
      }

      if (_typeof(nodes) === "object") {
        if (typeof nodes[0] === "undefined") {
          return map;
        }

        map = map.children;
        nodes.forEach(function (node, key) {
          if (typeof nodes[key + 1] === "undefined") {
            map = map[node];
          } else {
            map = map[node].children;
          }
        });
      }

      return map;
    }
  }, {
    key: "createMap",
    value: function createMap(app) {
      app = this.find(app);
      var turpial_app_id = app.getAttribute("id");

      if (typeof turpial_app_id !== "undefined") {
        var realDOMElement = document.getElementById(turpial_app_id);
        this.birds[turpial_app_id] = realDOMElement;
      }
    }
  }, {
    key: "read",
    value: function read(appName) {
      var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return this.map(appName, nodes);
    }
  }, {
    key: "selectorApp",
    value: function selectorApp(appName) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (_typeof(selector) === "object") {
        // searching via map.
        if (Number.isInteger(selector[0]) === true) {
          return this.map(appName, selector);
        } else {
          return selector;
        }
      } else {
        return selector;
      }
    }
  }, {
    key: "delete",
    value: function _delete(selector) {
      selector = this.find(selector);
      selector.remove();
    }
  }, {
    key: "update",
    value: function update(selector) {
      var insert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'replace-selector';
      var justUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (typeof insert === "string") {
        var content = this.render(insert);
        var string = insert;
      } else {
        var content = insert;
      }

      if (content === null) {
        var isHTML = false;
        var content = insert;
      } else {
        var isHTML = true;
      } // get the child to insert a new element before or after


      var child = selector;

      if (justUpdate === true) {
        // if the the call is for update
        where = 'replace-selector';
      } // get his parent


      var output = false;
      var parent = child.parentNode;

      if (where === "before") {
        parent.insertBefore(content, child);
        output = content;
      } else if (where === "after") {
        // emulating with next sibling.
        parent.insertBefore(content, child.nextSibling);
        output = content;
      } else if (where === "replace-selector") {
        // insertar nuevo elemento y eliminar viejo...
        parent.replaceChild(content, child);
        output = content;
      } else if (where === "inner") {
        if (isHTML === true) {
          // editar el child
          child.innerHTML = string;
        } else {
          child.innerText = content;
        }

        output = child;
      } else {
        console.warn("error-on-placement");
        return false;
      }

      var mapping = child;
      this.createMap(mapping);
      return output;
    }
  }, {
    key: "insert",
    value: function insert(selector, content) {
      var where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "inner";
      selector = this.find(selector);
      return this.update(selector, content, where, false);
    }
  }, {
    key: "render",
    value: function render(LiteralsString) {
      var dom_elem = document.createElement("template");
      dom_elem.innerHTML = LiteralsString;
      dom_elem = dom_elem.content.firstElementChild;
      return dom_elem;
    }
  }, {
    key: "mount",
    value: function mount(place, things) {
      if (typeof things === "string") {
        var things = this.render(things);
      }

      if (things === null) {
        console.warn("need to be HTML string or object");
        return;
      }

      place = this.find(place);
      var target = place.appendChild(things);
      var app = place;
      this.createMap(app);
      return target;
    }
  }, {
    key: "settings",
    value: function settings(attrs) {
      if (typeof attrs[0] !== "undefined") {
        return;
      }

      var setAttrsValues = [];
      var i = 0;
      var Values = [];

      for (var value in attrs) {
        Values.push(attrs[value]);
      }

      Values.forEach(function (value) {
        setAttrsValues[i++] = value;
      });
      var setAttrsNames = [];
      var i = 0;
      Object.keys(attrs).forEach(function (name) {
        setAttrsNames[i++] = name;
      });
      var pushAttrs = "";
      var i = 0;
      setAttrsNames.forEach(function (item, key) {
        pushAttrs += " ".concat(item, "=\"").concat(setAttrsValues[key], "\"");
      });
      return pushAttrs;
    }
  }, {
    key: "createTag",
    value: function createTag(el) {
      var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (_typeof(attrs) === "object") {
        attrs = this.settings(attrs);
      }

      var tag = "<".concat(el).concat(attrs, ">");
      tag += content;

      if (el !== "br") {
        tag += "</".concat(el, ">");
      }

      return tag;
    }
  }, {
    key: "html",
    value: function html(el, attrs, content) {
      var replacement = this.replacement;
      var app = this;

      if (el === "code") {
        content = replacement(content, "<", "&lt;");
        content = replacement(content, ">", "&gt;");
        content = replacement(content, " ", "&nbsp;");
      }

      if (typeof content === "undefined") {
        // si no existen atributos
        // y existe contenido el esquema puede ser así
        // el($tag, $contenido)
        // por lo que el contenido ahora es igual al campo atributos.
        var content = attrs;
        var attrs = "";
      }

      if (_typeof(content) === "object" && typeof content[0] !== "undefined") {
        var elements = "";
        var i = 0;
        content.forEach(function (item, key) {
          elements += "".concat(item);
        });
        var html = app.createTag(el, attrs, elements);
      } else if (_typeof(content) === "object") {
        // si llega a este punto y sigue siendo
        // un objeto quiere decir que el segundo 
        // argumento es un objeto con class id etc.
        // se puede estar intentando crear un elemento vacío.
        // por lo tanto content será igual a nada
        var attrs = content;
        var html = app.createTag(el, attrs, content = "");
      } else {
        var html = app.createTag(el, attrs, content);
      }

      return html;
    }
  }, {
    key: "el",
    value: function el(_el, attrs, content) {
      return this.html(_el, attrs, content);
    }
  }]);

  return Turpial;
}();