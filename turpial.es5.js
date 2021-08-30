function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Turpial = /*#__PURE__*/ (function () {
  "use strict";

  function Turpial() {
    var _this = this;

    var e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Turpial);

    (this.birds = []),
      (this.un = function (e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : "";
        return void 0 === e ? t : e;
      }),
      (this.searchStr = function (e, t) {
        var o =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : !1;
        var s = e.search(t);
        return -1 !== s && (!0 !== o || s);
      }),
      (this.replacement = function (e, t, o) {
        return e.split(t).join(o);
      }),
      (this.find = function (e) {
        return "string" == typeof e ? document.getElementById(e) : e;
      }),
      (this.ext = ".turpial.js"),
      (this.allowStateEvents = this.un(e.allowStateEvents, !1)),
      (this.loadModulesOnRoute = this.un(e.loadModulesOnRoute, !0)),
      (this.autoloader = this.un(e.autoloader, !1)),
      (this.autoloader_folder = this.un(e.autoloader_folder, "")),
      (this.cache = this.un(e.cache, "public")),
      (this.public_path = this.un(e.public_path, "")),
      (this.core_path = this.un(e.core_path, "")),
      (this.folder = this.un(e.core_path, "/turpial/")),
      (this.loader = {}),
      (this.httpRequests = []),
      (this.loader.show = this.un(e.loaderShow, null)),
      (this.loader.hide = this.un(e.loaderHide, null)),
      (this.views = {}),
      (this.statusResources = "loaded"),
      (this.resources = {}),
      (this.myComponents = []),
      (this.random_string = function (e) {
        void 0 === e && (e = 6);

        for (
          var t = "",
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            s = o.length,
            r = 0;
          r < e;
          r++
        ) {
          t += o.charAt(Math.floor(Math.random() * s));
        }

        return t;
      }),
      (this.selectData = function (e, t, o, s) {
        s = turpial.un(s, !1);
        var r = "";
        return (
          e.forEach(function (e, i) {
            if (e[t] == o) return !0 === s ? void (r = i) : void (r = e);
          }),
          r
        );
      }),
      (this.component = {
        applyProps: function applyProps(e, t) {
          var o = function o() {
              var o = document.querySelectorAll(e);
              Array.prototype.slice.call(o).forEach(function (e) {
                t(e);
              });
            },
            s = function s() {
              if ("loading" === _this.statusResources)
                var e = 0,
                  t = setInterval(function () {
                    return e > 6e3
                      ? (console.warn(
                          "error loading resources and applying components"
                        ),
                        void clearInterval(t))
                      : ((e += 20),
                        "loaded" === _this.statusResources
                          ? (clearInterval(t), void o())
                          : void 0);
                  }, 20);
              else o();
            };

          window.addEventListener("load", function () {
            s();
          }),
            "complete" !== document.readyState || s();
        },
        set: function set(e) {
          var t = _this,
            o = t.component;
          var s = e.props,
            r = e.tag;
          t.myComponents.push({
            tag: r,
            props: s
          });
          var i = t.un(e.extends, null);
          if (
            (null !== i &&
              (i = {
                extends: i
              }),
            void 0 === window.customElements)
          )
            return (
              (t.component.olderVerBrow = function () {}),
              void o.applyProps(r, s)
            );
          void 0 === window.customElements.get(r) &&
            window.customElements.define(
              r,
              /*#__PURE__*/ (function (_HTMLElement) {
                _inherits(_class, _HTMLElement);

                var _super = _createSuper(_class);

                function _class() {
                  var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : e.props;

                  _classCallCheck(this, _class);

                  return _super.call(
                    this,
                    (function (e) {
                      o.applyProps(r, e);
                    })(t)
                  );
                }

                return _class;
              })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement)),
              i
            );
        }
      }),
      (this.view = {}),
      (this.models = {}),
      (this.models.sources = {}),
      (this.controller = {}),
      (this.urls = {}),
      (this.filesLoaded = {}),
      (this.inject = function (e) {
        var _iterator = _createForOfIteratorHelper(e),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var t = _step.value;
            "STYLE" === _this.filesLoaded[t].tagName &&
              (_this.filesLoaded[t].innerHTML = _this.filesLoaded[t].text),
              document.head.appendChild(_this.filesLoaded[t]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }),
      (this.models.fetch = function (e) {
        var t = _this,
          o = e.type || "script";
        var s = t.un(e.cancelOnResend, null),
          r = t.un(e.options, null),
          i = t.un(e.method, "GET");
        (e.url = e.url || []),
          (e.file = e.file || e.url),
          (e.files = e.files || e.file);
        var n = e.files;
        void 0 === e.ready && (e.ready = function () {}),
          "string" == typeof n && (n = [n]);
        document.head;
        var l = [],
          a = [];
        var u = [];
        (e.getString = function (e) {
          return e.clone().text();
        }),
          (e.fetching = function (n) {
            void 0 !== t.filesLoaded[n] &&
              "script" === o &&
              t.filesLoaded[n].remove();
            var h = new XMLHttpRequest();
            h.open(i, n, !0);
            var c = [],
              d = [];

            if (null !== r) {
              for (var p in r) {
                d.push(r[p]);
              }

              Object.keys(r).forEach(function (e, t) {
                c.push([e, d[t]]);
              }),
                c.forEach(function (e) {
                  h.setRequestHeader(e[0], e[1]);
                });
            }

            if (
              ((h.onload = function () {
                if (h.status >= 200 && h.status < 400) {
                  var s,
                    r = h.responseText;
                  u.push(r),
                    (s =
                      "script" === o || "style" === o || "link" === o
                        ? o
                        : "script");
                  var i = document.createElement(s);
                  "style" === o
                    ? (i.type = "text/css")
                    : "link" === o &&
                      ((i.rel = "stylesheet"), (i.media = "all"), (i.href = n)),
                    (i.text = r),
                    (t.filesLoaded[n] = i),
                    l.push(n);
                } else if ("function" == typeof e.onerror && h.status >= 400)
                  return e.onerror(h.status);
              }),
              (h.onerror = function () {
                (t.filesLoaded[n] = ""), l.push("unloaded:" + n), a.push(n);
              }),
              !0 === s)
            ) {
              var _o = "rq_" + t.un(e.id, t.random_string(4));

              if (void 0 !== t.httpRequests[_o])
                try {
                  t.httpRequests[_o].abort();
                } catch (e) {
                  console.warn("unable to cancel request.");
                }
              t.httpRequests[_o] = h;
            }

            "POST" !== i ? h.send() : h.send(e.data);
          }),
          (t.statusResources = "loading"),
          (function (s) {
            var _iterator2 = _createForOfIteratorHelper(s),
              _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var _t = _step2.value;
                e.fetching(_t);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var r = 0;
            var i = setInterval(function () {
              var n = !1;
              if (
                (1e4 === (r += 70) &&
                  ((n = !0), console.warn("¡Impossible to load all files.")),
                l.length !== s.length && !0 !== n)
              );
              else {
                if (
                  (clearInterval(i),
                  "script" === o || "style" === o || "link" === o)
                )
                  t.inject(s), e.ready();
                else if ("text" === o) {
                  var a = [];

                  var _iterator3 = _createForOfIteratorHelper(s),
                    _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                      var u = _step3.value;
                      a.push(t.filesLoaded[u].innerHTML);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }

                  e.ready(a);
                }
                t.statusResources = "loaded";
              }
            }, 70);
          })(n);
      }),
      (this.fetch = function (e) {
        return _this.models.fetch(e);
      }),
      (this.include = function (e) {
        return _this.models.fetch(e);
      }),
      (this.linkCSS = function (e) {
        e.type = "link";
        var t = _this;
        (e.type = "style"),
          (e.url = e.url || []),
          (e.file = e.file || e.url),
          (e.files = e.files || e.file);
        var o = [];
        return (
          e.files.map(function (e) {
            var s = document.createElement("link");
            s.setAttribute("media", "all"),
              s.setAttribute("rel", "stylesheet"),
              (s.href = e);
            var r = t.mount(document.head, s);
            o.push(r);
          }),
          e.ready(o),
          o
        );
      }),
      (this.includeCSS = function (e) {
        return (e.type = "style"), _this.models.fetch(e);
      }),
      (this.controller.views = {
        path: function path(e) {
          var t = _this.ext;
          var o = "".concat(_this.folder, "views/"),
            s = e.views,
            r = _this.resources,
            i = s.split("/"),
            n = o;

          if (1 === i.length) {
            var l = i[0];
            return (n += "".concat(l).concat(t)), (r[l] = {}), n;
          }

          var a = i.pop(),
            u = i.pop();
          l = a;
          return (
            (r[u] = {}),
            (r[u][l] = {}),
            0 === i.length
              ? (n += "".concat(u, "/").concat(l).concat(t))
              : (i.forEach(function (e) {
                  n += "".concat(e, "/");
                }),
                (n += "".concat(u, "/").concat(l).concat(t))),
            n
          );
        }
      }),
      (this.view.load = function (e) {
        ((e = e || {}).ready = e.ready || function () {}),
          (e.folder = _this.autoloader_folder || "");
        var t = _this.ext,
          o = _this.app.parameters,
          s = _this.app.controller_name,
          r = _this.app.action_name,
          i = "".concat(_this.folder).concat(e.folder).concat(s);
        if (((e.module = turpial.un(e.module, null)), "index" === s))
          var n = "".concat(i).concat(t);
        else if (0 === o.length && "index" !== s && void 0 === r)
          n = "".concat(i, "/index").concat(t);
        else if (0 === o.length && "undefined" !== r)
          n = "".concat(i, "/").concat(r, "/index").concat(t);
        else {
          n = "".concat(i, "/").concat(r);
          o.forEach(function (e) {
            n += "/".concat(e);
          }),
            (n += t);
        }
        "string" == typeof e.module &&
          ((e.ext = e.ext || t), (n = _this.core_path + e.module + e.ext));
        var l = {
          file: n,
          options: e.options || {},
          ready: function ready() {
            e.ready();
          }
        };
        "function" == typeof e.error &&
          (l.error = function (t) {
            e.error(t);
          }),
          (_this.DataView = l),
          "" !== e.module && !1 !== e.module && _this.fetch(l);
      }),
      (this.controller.routes = {
        getHost: function getHost(e) {
          (!1 !== (e = e || {}).loadModule &&
            !1 !== _this.loadModulesOnRoute) ||
            (e.relativeModules = !0);
          var t = window.location.href;
          t = (t = (t = (t = t.split("#"))[0]).split("?"))[0];

          var o = _this.un(e.relativeModules, !1),
            s = t.search(_this.public_path),
            r = t.slice(s, s + _this.public_path.length);

          var i = (r = t.split(r)[0] + r).slice(-1);
          return (
            (i = "/" !== i ? "/" : ""),
            1 == o
              ? "".concat(r).concat(i)
              : ((i = t.slice(-1)),
                "".concat(t).concat((i = "/" !== i ? "/" : "")))
          );
        },
        set: function set(e) {
          var t = _this;
          (t.app = {}), (e = e || {});
          var o = window.location.href.split("?");
          var s = (o = (o = o[0]).split("#"))[0].search(t.public_path);
          if (!(s > 0)) return void console.warn("bad_public_path_name");
          var r = (o = o[0].substr(s + t.public_path.length)).split("/"),
            i = 0,
            n = 0;
          (t.app.parameters = []),
            r.forEach(function (e) {
              "" != e &&
                (0 === i && (t.app.controller_name = e),
                1 === i
                  ? (t.app.action_name = e)
                  : i > 1 && (t.app.parameters[n++] = e),
                i++);
            }),
            (t.app.controller_name = t.app.controller_name || "index"),
            (t.app.action_name = t.app.action_name || "");
          var l = ""
            .concat(t.app.controller_name, "/")
            .concat(t.app.action_name, "/")
            .concat(t.app.parameters.join("/"));
          (l = (l = l.split("//").join("/")).split("///").join("/")),
            (t.app.props = e),
            (t.app.path = l),
            (t.host = t.controller.routes.getHost()),
            (t.app.host = t.host);
        },
        change: function change(e) {
          var t = _this,
            o = e.type || "pushState";
          e.loadModule = t.un(e.loadModule, !0);
          var s = "".concat(t.controller.routes.getHost(e)).concat(e.path);
          if (s === window.location.href) return;
          window.history[o](t.un(e.object), "", t.un(s)),
            !0 === e.loadModule &&
              !0 === t.loadModulesOnRoute &&
              t.urls.load(e);
          var r = t.un(e.title, !1);
          "string" == typeof r && (document.title = r);
        },
        go: function go(e) {
          if ("number" == typeof e) window.history.go(e);
          else if ("back" === e) window.history.back();
          else {
            if ("forward" !== e) return;
            window.history.forward();
          }
          _this.controller.routes.set(), _this.urls.load();
        }
      }),
      (this.router = function (e, t) {
        (t = t || function () {}),
          "number" != typeof e && "string" != typeof e
            ? (_this.controller.routes.change(e), _this.stateEvent(), t())
            : _this.controller.routes.go(e);
      }),
      (this.routes = this.controller.routes.set),
      this.routes(),
      (this.controller.components = {}),
      (this.views.get = function (e) {
        if ("object" == _typeof(e)) {
          "string" == typeof e.views && (e.views = [e.views]);
          var t = [],
            o = _this.controller.views;
          e.views.forEach(function (s, r) {
            (e.views = s), (t[r] = o.path(e));
          }),
            Object.assign(e, {
              file: t,
              ready: e.ready
            }),
            _this.fetch(e);
        }
      }),
      (this.urls = {}),
      (this.urls.load = function (e) {
        e = e || {};
        var t = _this,
          o = t.app.controller_name,
          s = t.app.action_name,
          r = t.app.parameters;
        var i = t.urls[o] || !1;
        if (
          ((e.module = turpial.un(e.module, null)), "string" == typeof e.module)
        )
          return void t.view.load(e);
        if (!1 === i) return void t.view.load(e);
        t.un(i.loadController, !0);
        var n = t.un(i.loadAction, !0),
          l = t.un(i.loadParameters, 1e3),
          a = t.un(t.urls[o][s], !1);
        return "function" == typeof i.self
          ? "function" == typeof a && !0 === n
            ? r.length > l
              ? void i.self(function () {
                  a(function () {});
                })
              : void i.self(function () {
                  a(function () {
                    t.view.load(e);
                  });
                })
            : !1 === n && "string" == typeof s
            ? void i.self(function () {
                a(function () {});
              })
            : void i.self(function () {
                t.view.load(e);
              })
          : void 0;
      }),
      (this.historyEvents = {}),
      (this.URLNoHASH = function (e) {
        return e.split("#")[0];
      }),
      (this.createHistoryEvent = function (e, t) {
        (e = this.URLNoHASH(window.location.href) + (e = e || "")),
          (this.historyEvents[e] = t);
      }),
      this.createHistoryEvent("", function () {}),
      (this.stateEvent = function () {
        var e = _this.historyEvents;
        "function" == typeof e[_this.URLNoHASH(window.location.href)] &&
          e[_this.URLNoHASH(window.location.href)]();
      }),
      !0 === this.allowStateEvents &&
        window.addEventListener("popstate", this.stateEvent),
      !0 === e.autoloader &&
        (window.addEventListener("load", function () {
          _this.urls.load();
        }),
        (window.onpopstate = function (e) {
          _this.controller.routes.set(),
            _this.urls.load(),
            (function () {
              void 0 === window.customElements &&
                Array.prototype.slice
                  .call(this.myComponents)
                  .forEach(function (e) {
                    this.component.set({
                      tag: e.tag,
                      props: e.props
                    });
                  });
            })();
        })),
      (this.template = function (e, t) {
        return (function (e, t) {
          if ("object" == _typeof((t = t || [])) && !Array.isArray(t)) {
            var o = [];
            Object.values(t).map(function (e, s) {
              o.push(_defineProperty({}, Object.keys(t)[s], e));
            }),
              (t = o);
          }

          "object" == _typeof(e) && (e = e.innerHTML);
          var s = e;
          return (
            t.forEach(function (t) {
              var o = Object.keys(t),
                r = Object.values(t);
              o.forEach(function (t, o) {
                (t = "{{ ".concat(t, " }}")),
                  e.search(t) >= 0 &&
                    (s = (function (e, t, o) {
                      return e.split(t).join(o);
                    })(s, t, r[o]));
              });
            }),
            s
          );
        })(e, t);
      });
  }

  _createClass(Turpial, [
    {
      key: "map",
      value: function map(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];
        var o = this.birds[e];

        if (
          ("object" == _typeof(e)
            ? (o = e)
            : void 0 === o && (o = this.find(e)),
          "object" == _typeof(t))
        ) {
          if (void 0 === t[0]) return o;
          (o = o.children),
            t.forEach(function (e, s) {
              o = void 0 === t[s + 1] ? o[e] : o[e].children;
            });
        }

        return o;
      }
    },
    {
      key: "createMap",
      value: function createMap(e) {
        var t = (e = this.find(e)).getAttribute("id");

        if (void 0 !== t) {
          var o = document.getElementById(t);
          this.birds[t] = o;
        }
      }
    },
    {
      key: "read",
      value: function read(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];
        return this.map(e, t);
      }
    },
    {
      key: "selectorApp",
      value: function selectorApp(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];
        return "object" == _typeof(t) && !0 === Number.isInteger(t[0])
          ? this.map(e, t)
          : t;
      }
    },
    {
      key: "delete",
      value: function _delete(e) {
        (e = this.find(e)).remove();
      }
    },
    {
      key: "update",
      value: function update(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : null;
        var o =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : "replace-selector";
        var s =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : !0;
        if ("string" == typeof t)
          var r = this.render(t),
            i = t;
        else r = t;

        if (null === r) {
          var n = !1;
          r = t;
        } else n = !0;

        var l = e;
        !0 === s && (o = "replace-selector");
        var a = !1,
          u = l.parentNode;
        if ("before" === o) u.insertBefore(r, l), (a = r);
        else if ("after" === o) u.insertBefore(r, l.nextSibling), (a = r);
        else if ("replace-selector" === o) u.replaceChild(r, l), (a = r);
        else {
          if ("inner" !== o) return console.warn("error-on-placement"), !1;
          !0 === n ? (l.innerHTML = i) : (l.innerText = r), (a = l);
        }
        var h = l;
        return this.createMap(h), a;
      }
    },
    {
      key: "insert",
      value: function insert(e, t) {
        var o =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : "inner";
        return (e = this.find(e)), this.update(e, t, o, !1);
      }
    },
    {
      key: "render",
      value: function render(e) {
        var t = document.createElement("template");
        return (t.innerHTML = e), (t = t.content.firstElementChild);
      }
    },
    {
      key: "mount",
      value: function mount(e, t) {
        if ("string" == typeof t) t = this.render(t);
        if (null === t)
          return void console.warn("need to be HTML string or object");
        var o = (e = this.find(e)).appendChild(t),
          s = e;
        return this.createMap(s), o;
      }
    },
    {
      key: "settings",
      value: function settings(e) {
        if (void 0 === e[0]) {
          var t = [],
            o = 0,
            s = [];

          for (var r in e) {
            s.push(e[r]);
          }

          s.forEach(function (e) {
            t[o++] = e;
          });
          var i = [];
          o = 0;
          Object.keys(e).forEach(function (e) {
            i[o++] = e;
          });
          var n = "";
          o = 0;
          return (
            i.forEach(function (e, o) {
              n += " ".concat(e, '="').concat(t[o], '"');
            }),
            n
          );
        }
      }
    },
    {
      key: "createTag",
      value: function createTag(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : "";
        var o =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : "";
        "object" == _typeof(t) && (t = this.settings(t));
        var s = "<".concat(e).concat(t, ">");
        return (s += o), "br" !== e && (s += "</".concat(e, ">")), s;
      }
    },
    {
      key: "html",
      value: function html(e, t, o) {
        var s = this.replacement,
          r = this;
        if (
          ("code" === e &&
            ((o = s(o, "<", "&lt;")),
            (o = s(o, ">", "&gt;")),
            (o = s(o, " ", "&nbsp;"))),
          void 0 === o)
        )
          (o = t), (t = "");

        if ("object" == _typeof(o) && void 0 !== o[0]) {
          var i = "";
          o.forEach(function (e, t) {
            i += "".concat(e);
          });
          var n = r.createTag(e, t, i);
        } else if ("object" == _typeof(o))
          (t = o), (n = r.createTag(e, t, (o = "")));
        else n = r.createTag(e, t, o);

        return n;
      }
    },
    {
      key: "el",
      value: function el(e, t, o) {
        return this.html(e, t, o);
      }
    }
  ]);

  return Turpial;
})();
