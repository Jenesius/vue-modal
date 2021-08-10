/*!
  * jenesius-vue-modal v1.1.3
  * (c) 2021 Jenesius
  * @license MIT
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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

var script$1 = {
        props: {
            component: Object,
            params: Object,
			id    : Number, // uniq identifier of modals
        },
        setup(props){

			const modalRef = vue.ref(null);

			vue.watch(() => modalRef.value, newValue => {
				saveInstance(props.id, newValue);
			});

			return () => vue.h("div", {
				class: "widget__modal-container__item"
			}, [
				vue.h("div", {class: "widget__modal-container__item-back widget__modal-back", onClick: popModal}),
				vue.h(props.component, { ...props.params, class: "widget__modal-wrap", "modal-id": `_modal_${props.id}`, ref: modalRef})
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

var css_248z$1 = "\n.widget__modal-container__item[data-v-27c985c9]{\r\n        position: fixed;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\t\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center\n}\n.widget__modal-back[data-v-27c985c9]{\r\n\t\topacity: 1;\r\n\r\n\t\tbackground-color: #3e3e3e21;\n}\n.widget__modal-container__item-back[data-v-27c985c9]{\r\n\t\tposition: absolute;\r\n\t\t\r\n\t\tz-index: -1;\r\n        left: 0;\r\n        top: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        cursor: pointer;\n}\r\n\t\r\n";
styleInject(css_248z$1);

script$1.__scopeId = "data-v-27c985c9";
script$1.__file = "plugin/WidgetModalContainerItem.vue";

var script = {
        setup(){

			vue.onMounted(initialize);

			return () => {
				return vue.h(vue.TransitionGroup, {name: "modal-list"}, {
					default: () =>modalQueue.value.map(modalObject => {
						return vue.h(script$1, {component: modalObject.component, params: modalObject.params, key: modalObject.id, id: modalObject.id});
					})
				})
			}
        },
        components: {WidgetContainerModalItem: script$1}
    };

var css_248z = "\n.modal-list-enter-active,\r\n    .modal-list-leave-active,\r\n    .modal-list-enter-active .widget__modal-back,\r\n    .modal-list-leave-active .widget__modal-back,\r\n    .modal-list-enter-active .widget__modal-wrap,\r\n    .modal-list-leave-active .widget__modal-wrap\r\n    {\r\n        transition: all 0.2s ease;\n}\n.modal-list-enter-from,\r\n    .modal-list-leave-to{\r\n\t\topacity: 0 !important;\n}\n.modal-list-enter-from .widget__modal-wrap,\r\n    .modal-list-leave-to .widget__modal-wrap{\r\n\t\ttransform: translateY(-60px);\n}\r\n    \r\n\r\n";
styleInject(css_248z);

script.__file = "plugin/WidgetModalContainer.vue";

/*eslint-disable*/
var modalQueue = vue.ref([]); //All modals that showing now

var state = {
  modalId: 0,
  initialized: false
};
var guards = {
  store: {},
  add: function add(id, name, func) {
    var availableNames = ["close"];
    if (!availableNames.includes(name)) return console.warn("Name ".concat(name, " is not declaration."));
    if (!this.store[id]) this.store[id] = {};
    if (!this.store[id][name]) this.store[id][name] = [];
    if (typeof func !== "function") return console.warn("Onclose callback was provided not function:", func);
    this.store[id][name].push(func);
  },
  get: function get(id, name) {
    if (!(id in this.store)) return [];
    if (!(name in this.store[id])) return [];
    return this.store[id][name];
  }
};

var ModalObject = /*#__PURE__*/function () {
  function ModalObject(component, params) {
    _classCallCheck(this, ModalObject);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "component", void 0);

    _defineProperty(this, "params", void 0);

    this.id = state.modalId++;
    this.component = vue.shallowRef(component);
    this.params = params;
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

function createModalError() {
  return Object.assign(new ModalError(), {
    isModalError: true
  });
}

function canOnlyBeCalledOnce(next) {
  var called = false;
  return function () {
    if (called) console.warn("The \"next\" callback was called more than once in one modal's guard. It should be called exactly one time in each navigation guard. This will fail in production.");

    if (!called) {
      called = true;
      next.apply(null, arguments);
    }
  };
}

function closeById(id) {
  var indexFoRemove = modalQueue.value.findIndex(function (item) {
    return item.id === id;
  }); //Modal with id not found

  if (indexFoRemove === -1) return;
  var arr = guards.get(id, "close").map(function (guard) {
    return guardToPromiseFn(guard, id);
  });
  return runGuardQueue(arr).then(function () {
    modalQueue.value.splice(indexFoRemove, 1);
    delete guards.store[id];
    delete instanceStorage[id];
  }).catch(function (err) {
    return err instanceof ModalError ? err : Promise.reject(err);
  });
}

var ModalError = /*#__PURE__*/function (_Error) {
  _inherits(ModalError, _Error);

  var _super = _createSuper(ModalError);

  function ModalError() {
    var _this;

    _classCallCheck(this, ModalError);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "isModalError", void 0);

    _this.isModalError = true;
    return _this;
  }

  return ModalError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function guardToPromiseFn(guard, id) {
  return function () {
    return new Promise(function (resolve, reject) {
      var next = function next(valid) {
        if (valid === false) return reject(createModalError());
        if (valid instanceof Error) reject(valid);
        resolve();
      };

      Promise.resolve(guard.call(instanceStorage[id], canOnlyBeCalledOnce(next))).then(next).catch(function (err) {
        return reject(err);
      });
    });
  };
}

function runGuardQueue(guards) {
  return guards.reduce(function (promise, guard) {
    return promise.then(function () {
      return guard();
    });
  }, Promise.resolve());
}

vue.watch(modalQueue.value, function () {
  try {
    if (modalQueue.value.length) document.body.style.overflowY = "hidden";else document.body.style.overflowY = "auto";
  } catch (e) {}
});
/**
 * Function open one and close previous modals
 *
 * Get: NameOfComponent:String or VueComponent, params:Object
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
    var err = "Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://www.npmjs.com/package/jenesius-vue-modal.";
    console.warn(err);
    throw err;
  }

  var modal = new ModalObject(component, params);
  modalQueue.value.push(modal);
  return modal;
}
/**
 * Function close a last modal
 *
 * */


function popModal() {
  if (modalQueue.value.length === 0) return;
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

exports.closeModal = closeModal;
exports.container = container;
exports.initialize = initialize;
exports.modalQueue = modalQueue;
exports.onBeforeModalClose = onBeforeModalClose;
exports.openModal = openModal;
exports.popModal = popModal;
exports.pushModal = pushModal;
exports.saveInstance = saveInstance;
exports.useModal = useModal;
