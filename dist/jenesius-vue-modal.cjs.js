/*!
  * jenesius-vue-modal v1.3.1
  * (c) 2021 Jenesius
  * @license MIT
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * last change: 25.11.2021
 * */
var ModalError = /** @class */ (function (_super) {
    __extends(ModalError, _super);
    function ModalError(message, details) {
        if (details === void 0) { details = null; }
        var _this = _super.call(this) || this;
        _this.isModalError = true;
        _this.message = message;
        _this.details = details;
        return _this;
    }
    ModalError.Undefined = function (id) {
        return new ModalError("Modal with id: ".concat(id, " not founded. The modal window may have been closed earlier."));
    };
    ModalError.UndefinedGuardName = function (name) {
        return new ModalError("Guard's name ".concat(name, " is not declaration."));
    };
    ModalError.NextReject = function (id) {
        return new ModalError("Guard returned false. Modal navigation was stopped. Modal id ".concat(id));
    };
    ModalError.GuardDeclarationType = function (func) {
        return new ModalError("Guard's type should be a function. Provided:", func);
    };
    ModalError.ConfigurationType = function (config) {
        return new ModalError("Configuration type must be an Object. Provided", config);
    };
    ModalError.ConfigurationUndefinedParam = function (param, availableParams) {
        return new ModalError("In configuration founded unknown parameter: ".concat(param, ". Available are ").concat(availableParams.join(", "), " "));
    };
    ModalError.EmptyModalQueue = function () {
        return new ModalError("Modal queue is empty.");
    };
    return ModalError;
}(Error));

/**
 * last change: 25.11.2021
 * */
var instanceStorage = {};
function saveInstance(id, instance) {
    instanceStorage[id] = instance;
}

/**
 * last change: 25.11.2021
 * */
var guards = {
    store: {},
    add: function (id, name, func) {
        var availableNames = ["close"];
        if (!availableNames.includes(name))
            throw ModalError.UndefinedGuardName(name);
        if (!this.store[id])
            this.store[id] = {};
        if (!this.store[id][name])
            this.store[id][name] = [];
        if (typeof func !== "function")
            throw ModalError.GuardDeclarationType(func);
        this.store[id][name].push(func);
    },
    get: function (id, name) {
        if (!(id in this.store))
            return [];
        if (!(name in this.store[id]))
            return [];
        return this.store[id][name];
    },
    delete: function (id) {
        if (!(id in this.store))
            return;
        delete this.store[id];
    }
};
function runGuardQueue(guards) {
    return guards.reduce(function (promise, guard) { return promise.then(function () { return guard(); }); }, Promise.resolve());
}
/*
* FUNCTION ONLY FOR ONE GUARD.
* */
function guardToPromiseFn(guard, id) {
    return function () { return new Promise(function (resolve, reject) {
        var next = function (valid) {
            if (valid === false)
                return reject(ModalError.NextReject(id));
            if (valid instanceof Error)
                reject(valid);
            resolve();
        };
        //First params is function-warning: next now is not available
        Promise.resolve(guard.call(instanceStorage[id]))
            .then(next)
            .catch(function (err) { return reject(err); });
    }); };
}

/**
 * last change: 25.11.2021
 * */
var configuration = {
    scrollLock: true,
    animation: "modal-list" // Animation name for transition-group
};
/**
 * @description Method for changing default configuration.
 * */
function config(data) {
    if (typeof data !== "object")
        throw ModalError.ConfigurationType(data);
    var availableKeys = Object.keys(configuration);
    for (var key in data) {
        if (!availableKeys.includes(key)) {
            console.warn(ModalError.ConfigurationUndefinedParam(key, availableKeys));
            continue;
        }
        // @ts-ignore
        configuration[key] = data[key];
    }
}

/**
 * last change: 25.11.2021
 * */
var modalQueue = vue.ref([]); //All modals that showing now
var state$1 = {
    initialized: false,
};
vue.watch(modalQueue.value, function () {
    if (!configuration.scrollLock)
        return;
    try {
        if (modalQueue.value.length)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
    }
    catch (e) { }
});

function closeModal() {
    return runGuardQueue(modalQueue.value.map(function (modalObject) { return function () { return modalObject.close(); }; }));
}

/**
 * Function close a last modal
 * */
function popModal() {
    if (modalQueue.value.length === 0)
        return Promise.resolve();
    var lastModal = modalQueue.value[modalQueue.value.length - 1];
    return lastModal.close();
}

/**
 * @description Закрывает модальное окно по идентификатору
 * ЕСЛИ МОДАЛЬНОЕ ОКНО БЫЛО НЕ НАХОДИТСЯ В АКТИВНЫХ ИНСТАНСАХ - ОШИБКА
 * */
function closeById(id) {
    var indexFoRemove = modalQueue.value.findIndex(function (item) { return item.id === id; });
    if (indexFoRemove === -1)
        return Promise.reject(ModalError.Undefined(id)); //Modal with id not found
    var arr = guards.get(id, "close").map(function (guard) { return guardToPromiseFn(guard, id); });
    return runGuardQueue(arr)
        .then(function () {
        modalQueue.value.splice(indexFoRemove, 1);
        delete instanceStorage[id];
        guards.delete(id);
    });
}

/**
 * last change: 25.11.2021
 * */
var Modal = /** @class */ (function () {
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} params Object of input params. Used like props.
     * */
    function Modal(component, params) {
        var _this = this;
        this.id = Modal.modalId++;
        this.component = vue.shallowRef(component);
        this.params = params;
        this.closed = vue.computed(function () { return !modalQueue.value.includes(_this); });
        if (component.beforeModalClose)
            guards.add(this.id, "close", component.beforeModalClose);
    }
    /**
     * @description Method for closing the modal window
     * */
    Modal.prototype.close = function () {
        return closeById(this.id);
    };
    Object.defineProperty(Modal.prototype, "onclose", {
        /**
         * @description Hook for handling modal closing
         * */
        set: function (func) {
            guards.add(this.id, "close", func);
        },
        enumerable: false,
        configurable: true
    });
    Modal.modalId = 0;
    return Modal;
}());

function _addModal(component, params) {
    if (!state$1.initialized) {
        var err = "Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.";
        console.warn(err);
        throw err;
    }
    if (!component) {
        var err = "The first parameter(Component) was not specified.";
        console.warn(err);
        throw err;
    }
    var modal = new Modal(component, params);
    modalQueue.value.push(modal);
    return modal;
}

/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
function pushModal(component, props) {
    if (props === void 0) { props = {}; }
    return _addModal(component, props);
}

/**
 * Close all modals, if resolved -> open Modal
 *
 * Get: NameOfComponent:VueComponent, params:Object
 *
 * @Return ModalObject
 * */
function openModal(component, props) {
    if (props === void 0) { props = {}; }
    return closeModal()
        .then(function () {
        if (!modalQueue.value.length)
            return pushModal(component, props);
        return null;
    });
}

function onBeforeModalClose(callback) {
    var _a;
    var a = vue.getCurrentInstance();
    var attrModalId = String((_a = a === null || a === void 0 ? void 0 : a.attrs) === null || _a === void 0 ? void 0 : _a["modal-id"]);
    var modalId = attrModalId.replace(/[^0-9]/g, "");
    guards.add(Number(modalId), "close", callback);
}

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
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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

script$1.__file = "plugin/components/WidgetModalContainerItem.vue";

/**
 * last change: 25.11.2021
 * */
function initialize() {
    state$1.initialized = true;
    /**
     * If user press Escape then close last opened modal
     * */
    document.addEventListener("keyup", function (e) {
        if (e.key === "Escape" || e.code === "Escape")
            popModal();
    });
}

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

script.__file = "plugin/components/WidgetModalContainer.vue";

var state = {
    router: null
};
function init(router) {
    var _this = this;
    if (state.router)
        return console.warn("useModalRouter should escaped only once.");
    state.router = router;
    /**
     * Return ModalRouter or null
     * */
    function findModal(routerLocation) {
        if (!routerLocation.matched.length)
            return null;
        for (var i = routerLocation.matched.length - 1; i >= 0; i--) {
            var components = routerLocation.matched[i].components;
            // @ts-ignore
            var a = Object.values(components).find(function (route) { return route._isModal; });
            if (a)
                return a;
        }
        return null;
    }
    /**
     * Hook only for closing
     * */
    router.beforeEach(function (to, from) { return __awaiter(_this, void 0, void 0, function () {
        var modal;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    modal = findModal(from);
                    if (!(modal && !((_b = (_a = modal.getModalObject()) === null || _a === void 0 ? void 0 : _a.closed) === null || _b === void 0 ? void 0 : _b.value))) return [3 /*break*/, 2];
                    return [4 /*yield*/, modal.close(true)];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    _c.sent();
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    /**
     * Hook for opening modal
     * */
    router.afterEach(function (to) { return __awaiter(_this, void 0, void 0, function () {
        var modal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modal = findModal(to);
                    if (!modal) return [3 /*break*/, 2];
                    return [4 /*yield*/, modal.initialize()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
}
function useModalRouter(component) {
    var modal = null;
    var isNavigationClosingGuard = false;
    function initialize() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isNavigationClosingGuard = false;
                        modal = null;
                        return [4 /*yield*/, openModal(component, vue.computed(function () { var _a; return (_a = state.router) === null || _a === void 0 ? void 0 : _a.currentRoute.value.params; }))];
                    case 1:
                        modal = _a.sent();
                        modal.onclose = function () {
                            var _a;
                            if (!isNavigationClosingGuard)
                                (_a = state.router) === null || _a === void 0 ? void 0 : _a.back();
                        };
                        return [2 /*return*/];
                }
            });
        });
    }
    return {
        getModalObject: function () { return modal; },
        _isModal: true,
        close: function (v) {
            if (v === void 0) { v = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isNavigationClosingGuard = v;
                            if (!modal) return [3 /*break*/, 2];
                            return [4 /*yield*/, modal.close()];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        },
        initialize: initialize,
        setup: function () { return function () { return null; }; }
    };
}
useModalRouter.init = init;

exports.closeModal = closeModal;
exports.config = config;
exports.container = script;
exports.modalQueue = modalQueue;
exports.onBeforeModalClose = onBeforeModalClose;
exports.openModal = openModal;
exports.popModal = popModal;
exports.pushModal = pushModal;
exports.useModalRouter = useModalRouter;
