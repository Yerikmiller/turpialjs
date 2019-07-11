function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _typeof(obj) {
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

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
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

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
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

var Turpial =
  /*#__PURE__*/
  (function() {
    "use strict";

    function Turpial() {
      var _this = this;

      var tpObj =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Turpial);

      // this is for generate
      // a family tree of birds
      // (parents-childrens -> map)
      // this is is to control realDOM (update-delete-insert-read)
      this.birds = [];

      this.un = function(v) {
        var r =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : "";

        if (typeof v === "undefined") {
          return r;
        } else {
          return v;
        }
      };

      this.searchStr = function(where, what) {
        var position =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : false;
        var search = where.search(what);

        if (search === -1) {
          return false;
        }

        if (position === true) {
          return search;
        }

        return true;
      };

      this.replacement = function(target, search, replacement) {
        return target.split(search).join(replacement);
      };

      this.find = function(selector) {
        if (typeof selector === "string") {
          return document.getElementById(selector);
        } else {
          return selector;
        }
      }; // helpers

      this.autoloader = this.un(tpObj.autoloader, false);
      this.autoloader_folder = this.un(tpObj.autoloader_folder, "");
      this.cache = this.un(tpObj.cache, "default");
      this.public_path = this.un(tpObj.public_path, "");
      this.core_path = this.un(tpObj.core_path, "");
      this.folder = this.un(tpObj.core_path, "/turpial/");
      this.loader = {};
      this.loader.show = this.un(tpObj.loaderShow, null);
      this.loader.hide = this.un(tpObj.loaderHide, null);
      this.views = {};
      this.resources = {};

      this.Pro = function(func) {
        return new Promise(function(resolve) {
          func();
          var get = setInterval(function() {
            console.log(func);
          }, 500);
        });
      };

      this.component = {
        set: function set(obj) {
          var app = _this;
          var tag = obj.tag;

          var extendTo = _this.un(obj.extends, null);

          var get = window.customElements.get(tag);

          if (typeof get !== "undefined") {
            return;
          }

          if (extendTo !== null) {
            extendTo = {
              extends: extendTo
            };
          }

          window.customElements.define(
            tag,
            /*#__PURE__*/
            (function(_HTMLElement) {
              _inherits(_class, _HTMLElement);

              function _class() {
                var props =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : obj.props;

                _classCallCheck(this, _class);

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(_class).call(
                    this,
                    (function(props) {
                      var applyProps = function applyProps(tag) {
                        var elements = document.getElementsByTagName(tag);

                        _toConsumableArray(elements).forEach(function(el) {
                          props(el);
                        });

                        return "ready";
                      };

                      window.addEventListener("load", function() {
                        return applyProps(tag);
                      });

                      if (document.readyState === "complete") {
                        return applyProps(tag);
                      }
                    })(props)
                  )
                );
              }

              return _class;
            })(_wrapNativeSuper(HTMLElement)),
            extendTo
          );
        }
      };
      this.view = {
        application: this
      };
      this.models = {};
      this.models.sources = {};
      this.controller = {};
      this.urls = {};
      this.filesLoaded = {};

      this.inject = function(files) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (
            var _iterator = files[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
          ) {
            var file = _step.value;
            document.head.appendChild(_this.filesLoaded[file]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }; // end helpers

      this.models.fetch = function(obj) {
        var type = _this.un(obj.type, "script");

        var options = _this.un(obj.options, {
          cache: _this.cache
        });

        if (typeof obj.ready === "undefined") {
          obj.ready = function() {};
        }

        if (typeof obj.file === "string") {
          var files = [obj.file];
        } else {
          var files = obj.file;
        }

        var app = _this;
        var Head = document.head;
        var loaded = [];
        var text = [];

        obj.getString = function(r) {
          return r.clone().text();
        };

        obj.fetching = function(file) {
          // remove if the element exist
          // to not create scripts elements with the same things...
          // just ignoring or stopping the re-injecting will fail...
          if (
            typeof app.filesLoaded[file] !== "undefined" &&
            type === "script"
          ) {
            app.filesLoaded[file].remove();
          }

          window.fetch(file, options).then(function(r) {
            if (typeof obj.error === "function" && r.status !== 200) {
              return obj.error(r.status);
            } else if (r.status !== 200) {
              return;
            } //-> result:

            obj.getString(r).then(function(resource) {
              text.push(resource);
              var el = document.createElement("script");
              el.text = resource;
              app.filesLoaded[file] = el;
              loaded.push(file);
            });
          });
        };

        (function(files) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (
              var _iterator2 = files[Symbol.iterator](), _step2;
              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
              _iteratorNormalCompletion2 = true
            ) {
              var file = _step2.value;
              obj.fetching(file);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var counter = 0;
          var check = setInterval(function() {
            counter = counter + 70;
            var forceLoad = false;

            if (counter === 10000) {
              forceLoad = true;
              console.warn("¡Impossible to load all files.");
            }

            if (loaded.length === files.length || forceLoad === true) {
              clearInterval(check);

              if (type === "script") {
                app.inject(files);
                obj.ready();
                return;
              } else if (type === "text") {
                obj.ready(text);
                return;
              }
            }
          }, 70);
        })(files);
      };

      this.fetch = function(obj) {
        return _this.models.fetch(obj);
      };

      this.include = function(obj) {
        return _this.models.fetch(obj);
      };

      this.controller.views = {
        application: this,
        folder: "".concat(this.folder, "views/"),
        ext: ".turpial.js",
        path: function path(obj) {
          var self = this;
          var file_name = obj.views; // in case of route.

          var routing = file_name.split("/");
          var Path = self.folder;

          if (routing.length === 1) {
            var file = routing[0];
            Path += "".concat(file).concat(self.ext);
            self.application.resources[file] = {}; // create view instance.

            return Path;
          } else {
            // file
            var last = routing.pop(); // last folder

            var penultimate = routing.pop();
            var LastFolder = penultimate;
            var file = last;
            self.application.resources[LastFolder] = {}; // create view instance.

            self.application.resources[LastFolder][file] = {}; // create view instance.
          }

          if (routing.length === 0) {
            Path += ""
              .concat(LastFolder, "/")
              .concat(file)
              .concat(self.ext);
          } else {
            routing.forEach(function(subfolder) {
              Path += "".concat(subfolder, "/");
            });
            Path += ""
              .concat(LastFolder, "/")
              .concat(file)
              .concat(self.ext);
          }

          return Path;
        }
      };

      this.view.load = function() {
        var obj =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {
                folder: _this.autoloader_folder,
                ready: function ready() {}
              };
        var ext = ".turpial.js";
        var parameters = _this.app.parameters;
        var controller = _this.app.controller_name;
        var action = _this.app.action_name;
        var base = ""
          .concat(_this.folder)
          .concat(obj.folder)
          .concat(controller);

        if (controller === "index") {
          var urlPath = "".concat(base).concat(ext);
        } else if (
          parameters.length === 0 &&
          controller !== "index" &&
          typeof action === "undefined"
        ) {
          var urlPath = "".concat(base, "/index").concat(ext);
        } else if (parameters.length === 0 && action !== "undefined") {
          var urlPath = ""
            .concat(base, "/")
            .concat(action, "/index")
            .concat(ext);
        } else {
          var urlPath = "".concat(base, "/").concat(action);
          parameters.forEach(function(parameter) {
            urlPath += "/".concat(parameter);
          });
          urlPath += ext;
        }

        var data = {
          file: urlPath,
          ready: function ready() {
            obj.ready();
          }
        };

        if (typeof obj.error === "function") {
          data["error"] = function(data) {
            obj.error(data);
          };
        }

        _this.fetch(data);

        _this.DataView = data;
      };

      this.controller.routes = {
        set: function set() {
          var self = _this;
          self.app = {};
          var Path = window.location.href.split("?");
          Path = Path[0];
          Path = Path.split("#");
          var SearchPublichPath = Path[0].search(_this.public_path);

          if (SearchPublichPath > 0) {
            Path = Path[0].substr(SearchPublichPath + _this.public_path.length);
          } else {
            console.warn("bad_public_path_name");
            return;
          }

          var routes = Path.split("/");
          var n = 0;
          var param = 0;
          self.app.parameters = [];
          routes.forEach(function(route) {
            if (route == "") {
              return;
            }

            if (n === 0) {
              self.app.controller_name = route;
            }

            if (n === 1) {
              self.app.action_name = route;
            } else if (n > 1) {
              self.app.parameters[param++] = route;
            }

            n++;
          });

          if (typeof self.app.controller_name === "undefined") {
            self.app.controller_name = "index";
          }
        },
        change: function change(obj) {
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

          if (_this.searchStr(obj.path, "http") === true) {
            href = "";
          }

          window.history.pushState(
            _this.un(obj.object),
            "",
            _this.un(
              ""
                .concat(href)
                .concat(d)
                .concat(obj.path)
            )
          );

          _this.controller.routes.set();

          _this.urls.load();

          var title = _this.un(obj.title, false);

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

      this.router = function(obj) {
        if (typeof obj === "number" || typeof obj === "string") {
          _this.controller.routes.go(obj);

          return;
        }

        _this.controller.routes.change(obj);
      };

      this.routes = this.controller.routes.set;
      this.routes(); // execute routes

      this.controller.components = {};

      this.views.get = function(obj) {
        if (_typeof(obj) !== "object") {
          return;
        }

        if (typeof obj.views === "string") {
          obj.views = [obj.views];
        }

        var Paths = [];
        var controller = _this.controller.views;
        obj.views.forEach(function(view, key) {
          obj.views = view;
          Paths[key] = controller.path(obj);
        });

        _this.fetch({
          file: Paths,
          ready: obj.ready
        });
      };

      this.urls = {};

      this.urls.load = function() {
        var controller = _this.app.controller_name;
        var action = _this.app.action_name;
        var parameters = _this.app.parameters; // if this is undefined set as empty...

        var moduleController = _this.un(_this.urls[controller], false); // when url is root or there isn't modules

        if (moduleController === false) {
          _this.view.load();

          return;
        }

        var loadController = _this.un(moduleController.loadController, true);

        var loadAction = _this.un(moduleController.loadAction, true);

        var loadParameters = _this.un(moduleController.loadParameters, 1000);

        var moduleAction = _this.un(_this.urls[controller][action], false);

        if (typeof moduleController.self === "function") {
          if (typeof moduleAction === "function" && loadAction === true) {
            if (parameters.length > loadParameters) {
              moduleController.self(function() {
                moduleAction(function() {});
              });
              return;
            }

            moduleController.self(function() {
              moduleAction(function() {
                _this.view.load();
              });
            });
            return;
          } else if (loadAction === false && typeof action === "string") {
            moduleController.self(function() {
              moduleAction(function() {});
            });
            return;
          }

          moduleController.self(function() {
            _this.view.load();
          });
          return;
        }
      };

      if (tpObj.autoloader === true) {
        window.addEventListener("load", function() {
          _this.urls.load();
        });

        window.onpopstate = function(event) {
          // on window history change
          // update routes and reload modules.
          _this.controller.routes.set(); // execute routes

          _this.urls.load();
        };
      }
    }

    _createClass(Turpial, [
      {
        key: "map",
        value: function map(appName) {
          var nodes =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];
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
            nodes.forEach(function(node, key) {
              if (typeof nodes[key + 1] === "undefined") {
                map = map[node];
              } else {
                map = map[node].children;
              }
            });
          }

          return map;
        }
      },
      {
        key: "createMap",
        value: function createMap(app) {
          app = this.find(app);
          var turpial_app_id = app.getAttribute("id");

          if (typeof turpial_app_id !== "undefined") {
            var realDOMElement = document.getElementById(turpial_app_id);
            this.birds[turpial_app_id] = realDOMElement;
          }
        }
      },
      {
        key: "read",
        value: function read(appName) {
          var nodes =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];
          return this.map(appName, nodes);
        }
      },
      {
        key: "selectorApp",
        value: function selectorApp(appName) {
          var selector =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];

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
      },
      {
        key: "delete",
        value: function _delete(selector) {
          selector = this.find(selector);
          selector.remove();
        }
      },
      {
        key: "update",
        value: function update(selector) {
          var insert =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;
          var where =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "replace-selector";
          var justUpdate =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : true;

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
            where = "replace-selector";
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
      },
      {
        key: "insert",
        value: function insert(selector, content) {
          var where =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "inner";
          selector = this.find(selector);
          return this.update(selector, content, where, false);
        }
      },
      {
        key: "render",
        value: function render(LiteralsString) {
          var dom_elem = document.createElement("template");
          dom_elem.innerHTML = LiteralsString;
          dom_elem = dom_elem.content.firstElementChild;
          return dom_elem;
        }
      },
      {
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
      },
      {
        key: "settings",
        value: function settings(attrs) {
          if (typeof attrs[0] !== "undefined") {
            return "";
          }

          var setAttrsValues = [];
          var i = 0;
          Object.values(attrs).forEach(function(value) {
            setAttrsValues[i++] = value;
          });
          var setAttrsNames = [];
          var i = 0;
          Object.keys(attrs).forEach(function(name) {
            setAttrsNames[i++] = name;
          });
          var pushAttrs = "";
          var i = 0;
          setAttrsNames.forEach(function(item, key) {
            pushAttrs += " "
              .concat(item, '="')
              .concat(setAttrsValues[key], '"');
          });
          return pushAttrs;
        }
      },
      {
        key: "createTag",
        value: function createTag(el) {
          var attrs =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";
          var content =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "";

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
      },
      {
        key: "html",
        value: function html(el, attrs, content) {
          if (el === "code") {
            content = this.replacement(content, "<", "&lt;");
            content = this.replacement(content, ">", "&gt;");
            content = this.replacement(content, " ", "&nbsp;");
          }

          var app = this;

          if (typeof content === "undefined") {
            // si no existen atributos
            // y existe contenido el esquema puede ser así
            // el($tag, $contenido)
            // por lo que el contenido ahora es igual al campo atributos.
            var content = attrs;
            var attrs = "";
          }

          if (
            _typeof(content) === "object" &&
            typeof content[0] !== "undefined"
          ) {
            var elements = "";
            var i = 0;
            content.forEach(function(item, key) {
              elements += "".concat(item);
            });
            var html = this.createTag(el, attrs, elements);
          } else if (_typeof(content) === "object") {
            // si llega a este punto y sigue siendo
            // un objeto quiere decir que el segundo
            // argumento es un objeto con class id etc.
            // se puede estar intentando crear un elemento vacío.
            // por lo tanto content será igual a nada
            var attrs = content;
            var html = this.createTag(el, attrs, (content = ""));
          } else {
            var html = this.createTag(el, attrs, content);
          }

          return html;
        }
      },
      {
        key: "el",
        value: function el(_el, attrs, content) {
          return this.html(_el, attrs, content);
        }
      }
    ]);

    return Turpial;
  })();
