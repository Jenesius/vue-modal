/*!
  * jenesius-vue-modal v1.3.1
  * (c) 2021 Jenesius
  * @license MIT
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
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

var state$1 = {
  router: null
};

function init(router) {
  if (state$1.router) return console.warn("useModalRouter should escaped only once.");
  state$1.router = router;
  /**
   * Return ModalRouter or null
   * */

  function findModal(routerLocation) {
    if (!routerLocation.matched.length) return null;

    for (var i = routerLocation.matched.length - 1; i >= 0; i--) {
      var components = routerLocation.matched[i].components;
      var a = Object.values(components).find(function (route) {
        return route._isModal;
      });
      if (a) return a;
    }

    return null;
  }
  /**
   * Hook only for closing
   * */


  router.beforeEach( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from) {
      var _modal$getModalObject, _modal$getModalObject2, modal;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              modal = findModal(from);

              if (!(modal && !((_modal$getModalObject = modal.getModalObject()) !== null && _modal$getModalObject !== void 0 && (_modal$getModalObject2 = _modal$getModalObject.closed) !== null && _modal$getModalObject2 !== void 0 && _modal$getModalObject2.value))) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return modal.close(true);

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  /**
   * Hook for opening modal
   * */

  router.afterEach( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(to) {
      var modal;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              modal = findModal(to);

              if (!modal) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return modal.initialize();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function useModalRouter(component) {
  var modal = null;
  var isNavigationClosingGuard = false;

  function initialize() {
    return _initialize.apply(this, arguments);
  }

  function _initialize() {
    _initialize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              isNavigationClosingGuard = false;
              modal = null;
              _context4.next = 4;
              return openModal(component, vue.computed(function () {
                return state$1.router.currentRoute.value.params;
              }));

            case 4:
              modal = _context4.sent;

              modal.onclose = function () {
                if (!isNavigationClosingGuard) state$1.router.back();
              };

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _initialize.apply(this, arguments);
  }

  return {
    getModalObject: function getModalObject() {
      return modal;
    },
    _isModal: true,
    close: function close() {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var v;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                v = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                isNavigationClosingGuard = v;

                if (!modal) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 5;
                return modal.close();

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    initialize: initialize,
    setup: function setup() {
      return function () {
        return null;
      };
    }
  };
}

useModalRouter.init = init;

var script$1 = {
        props: {
            component: Object,
            params: Object,
			id    : Number, // uniq identifier of modals
        },
        setup(props){

			const modalRef = vue.ref(null);
			const containerRef = vue.ref(null);

			vue.watch(() => modalRef.value, newValue => {
				saveInstance(props.id, newValue);
			});

			return () => vue.h("div", {
				class: ["widget__modal-container__item", "modal-container"],
				ref: containerRef,
				onClick: e => {
					if (e.target !== containerRef.value) return;

					return popModal().catch(() => {})
				}
			}, [
				/*
				h("div", {
					class: ["modal-back", "widget__modal-container__item-back widget__modal-back"],

				}),
				 */
				vue.h(props.component, {
					...props.params,
					class: ["modal-item", "widget__modal-wrap"],//Save for compatibility
					"modal-id": `_modal_${props.id}`,
					ref: modalRef,
				})
			])
        },
    };

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.modal-container{\r\n\t\tposition: fixed;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\r\n\t\tbackground-color: #3e3e3e21;\r\n\t\tcursor: pointer;\n}\n.modal-item{\r\n\t\tcursor: default;\n}\r\n\r\n";
styleInject(css_248z$1);

script$1.__file = "plugin/WidgetModalContainerItem.vue";

var script = {
        setup(){

			vue.onMounted(initialize);

			return () => {
				return vue.h(vue.TransitionGroup, {name: configuration.animation}, {
					default: () =>modalQueue.value.map(modalObject => {
						return vue.h(script$1, {component: modalObject.component, params: modalObject.params, key: modalObject.id, id: modalObject.id});
					})
				})
			}
        },
        components: {WidgetContainerModalItem: script$1}
    };

var css_248z = "\n.modal-list-enter-active,\r\n    .modal-list-leave-active,\r\n    .modal-list-enter-active .modal-item,\r\n    .modal-list-leave-active .modal-item\r\n    {\r\n        transition: all 0.2s ease;\n}\n.modal-list-enter-from,\r\n    .modal-list-leave-to{\r\n\t\topacity: 0 !important;\n}\n.modal-list-enter-from .modal-item,\r\n    .modal-list-leave-to   .modal-item{\r\n\t\ttransform: translateY(-60px);\n}\r\n    \r\n\r\n";
styleInject(css_248z);

script.__file = "plugin/WidgetModalContainer.vue";

/*eslint-disable*/
var modalQueue = vue.ref([]); //All modals that showing now

var state = {
  modalId: 0,
  initialized: false // Boolean, false - if ModalContainer not inserted in project.

};
var configuration = {
  /**
   * true - if Modal was opened the page cannot be scrolled
   * */
  scrollLock: true,

  /**
  * Animation name for transition-group
  * */
  animation: "modal-list"
};
function config() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    scrollLock: scrollLock,
    animation: animation
  };
  if (_typeof(data) !== "object") throw ModalError.ConfigurationType(data);
  var availableKeys = Object.keys(configuration);

  for (var key in data) {
    if (!availableKeys.includes(key)) {
      console.warn(ModalError.ConfigurationUndefinedParam(key, availableKeys));
      continue;
    }

    configuration[key] = data[key];
  }
}
/**
 * Storage of hooks
 * store: {
 *     modalId: {
 *         close: [func, func]
 *     }
 * }
 * */

var guards = {
  store: {},
  add: function add(id, name, func) {
    var availableNames = ["close"];
    if (!availableNames.includes(name)) throw ModalError.UndefinedGuardName(name);
    if (!this.store[id]) this.store[id] = {};
    if (!this.store[id][name]) this.store[id][name] = [];
    if (typeof func !== "function") throw ModalError.GuardDeclarationType(func);
    this.store[id][name].push(func);
  },
  get: function get(id, name) {
    if (!(id in this.store)) return [];
    if (!(name in this.store[id])) return [];
    return this.store[id][name];
  },
  delete: function _delete(id) {
    if (!(id in this.store)) return;
    delete this.store[id];
  }
};

var ModalObject = /*#__PURE__*/function () {
  function ModalObject(component, params) {
    var _this = this;

    _classCallCheck(this, ModalObject);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "component", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "closed", void 0);

    this.id = state.modalId++;
    this.component = vue.shallowRef(component);
    this.params = params;
    this.closed = vue.computed(function () {
      return !modalQueue.value.includes(_this);
    });
    if (component.beforeModalClose) guards.add(this.id, "close", component.beforeModalClose);
  }

  _createClass(ModalObject, [{
    key: "close",
    value: function close() {
      return closeById(this.id);
    }
  }, {
    key: "onclose",
    set: function set(func) {
      guards.add(this.id, "close", func);
    }
  }]);

  return ModalObject;
}();

var ModalError = /*#__PURE__*/function (_Error) {
  _inherits(ModalError, _Error);

  var _super = _createSuper(ModalError);

  function ModalError(message) {
    var _this2;

    _classCallCheck(this, ModalError);

    _this2 = _super.call(this);

    _defineProperty(_assertThisInitialized(_this2), "isModalError", void 0);

    _this2.isModalError = true;
    _this2.message = message;
    return _this2;
  }

  _createClass(ModalError, null, [{
    key: "Undefined",
    value: function Undefined(id) {
      return new ModalError("Modal with id: ".concat(id, " not founded. The modal window may have been closed earlier."));
    }
  }, {
    key: "UndefinedGuardName",
    value: function UndefinedGuardName(name) {
      return new ModalError("Guard's name ".concat(name, " is not declaration."));
    }
  }, {
    key: "NextReject",
    value: function NextReject(id) {
      return new ModalError("Guard returned false. Modal navigation was stopped. Modal id ".concat(id));
    }
  }, {
    key: "GuardDeclarationType",
    value: function GuardDeclarationType(func) {
      return new ModalError("Guard's type should be a function. Provided:", func);
    }
  }, {
    key: "ConfigurationType",
    value: function ConfigurationType(config) {
      return new ModalError("Configuration type must be an Object. Provided", config);
    }
  }, {
    key: "ConfigurationUndefinedParam",
    value: function ConfigurationUndefinedParam(param, availableParams) {
      return new ModalError("In configuration founded unknown parameter: ".concat(param, ". Available are ").concat(availableParams.join(", "), " "));
    }
  }, {
    key: "EmptyModalQueue",
    value: function EmptyModalQueue() {
      return new ModalError("Modal queue is empty.");
    }
  }]);

  return ModalError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function closeById(id) {
  var indexFoRemove = modalQueue.value.findIndex(function (item) {
    return item.id === id;
  });
  if (indexFoRemove === -1) return Promise.reject(ModalError.Undefined(id)); //Modal with id not found

  var arr = guards.get(id, "close").map(function (guard) {
    return guardToPromiseFn(guard, id);
  });
  return runGuardQueue(arr).then(function () {
    modalQueue.value.splice(indexFoRemove, 1);
    delete instanceStorage[id];
    guards.delete(id);
  });
  /*
  .catch(err => Promise.reject(err))
  .catch(err => (err instanceof ModalError)?err: Promise.reject(err))
     */
}

function runGuardQueue(guards) {
  return guards.reduce(function (promise, guard) {
    return promise.then(function () {
      return guard();
    });
  }, Promise.resolve());
}
/*
* FUNCTION ONLY FOR ONE GUARD.
* */


function guardToPromiseFn(guard, id) {
  return function () {
    return new Promise(function (resolve, reject) {
      var next = function next(valid) {
        if (valid === false) return reject(ModalError.NextReject(id));
        if (valid instanceof Error) reject(valid);
        resolve();
      }; //First params is function-warning: next now is not available


      var nextWarning = function nextWarning() {
        var err = new ModalError("Resolver function 'next' in modal's hooks no longer supported. (^1.2.0 version jenesius-vue-modal). You should return false/true values. https://modal.jenesius.com/docs.html/navigation-guards");
        console.warn(err); //return throw ModalError.nextReject(4);
      };

      Promise.resolve(guard.call(instanceStorage[id], nextWarning)).then(next).catch(function (err) {
        return reject(err);
      });
    });
  };
}

vue.watch(modalQueue.value, function () {
  if (!configuration.scrollLock) return;

  try {
    if (modalQueue.value.length) document.body.style.overflowY = "hidden";else document.body.style.overflowY = "auto";
  } catch (e) {}
});
/**
 * Close all modals, if resolved -> open Modal
 *
 * Get: NameOfComponent:VueComponent, params:Object
 *
 * @Return ModalObject
 * */

function openModal(component) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return closeModal().then(function () {
    if (!modalQueue.value.length) return pushModal(component, params);
    return null;
  });
}
/**
 * Function add modal to modalQuery
 * */

function pushModal(component) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _addModal(component, params);
}

function _addModal(component, params) {
  if (!state.initialized) {
    var err = "Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.";
    console.warn(err);
    throw err;
  }

  if (!component) {
    var _err = "The first parameter(Component) was not specified.";
    console.warn(_err);
    throw _err;
  }

  var modal = new ModalObject(component, params);
  modalQueue.value.push(modal);
  return modal;
}
/**
 * Function close a last modal
 * */


function popModal() {
  if (modalQueue.value.length === 0) return Promise.resolve();
  var lastModal = modalQueue.value[modalQueue.value.length - 1];
  return lastModal.close();
}
/**
 * Function close all previous modals.
 *
 * */

function closeModal() {
  return runGuardQueue(modalQueue.value.map(function (modalObject) {
    return function () {
      return modalObject.close();
    };
  }));
}
var container = script;
function initialize() {
  state.initialized = true;
  /**
   * If user press Escape then close last opened modal
   * */

  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape" || e.code === "Escape") popModal();
  });
}
function onBeforeModalClose(callback) {
  var a = vue.getCurrentInstance();
  var modalId = a.attrs["modal-id"].replace(/[^0-9]/g, "");
  guards.add(modalId, "close", callback);
} //Для сохранения this

var instanceStorage = {};
function saveInstance(id, instance) {
  instanceStorage[id] = instance;
}
/**
* Deprecated
* */

function useModal() {
  console.warn("Function useModal is deprecated and was removed on 2.x.x version. Please use: import {openModal, closeModal, pushModal, popModal} from 'jenesius-vue-modal';");
  return {
    openModal: openModal,
    closeModal: closeModal,
    popModal: popModal,
    pushModal: pushModal
  };
}

exports._configuration = configuration;
exports.closeModal = closeModal;
exports.config = config;
exports.container = container;
exports.initialize = initialize;
exports.modalQueue = modalQueue;
exports.onBeforeModalClose = onBeforeModalClose;
exports.openModal = openModal;
exports.popModal = popModal;
exports.pushModal = pushModal;
exports.saveInstance = saveInstance;
exports.useModal = useModal;
exports.useModalRouter = useModalRouter;
