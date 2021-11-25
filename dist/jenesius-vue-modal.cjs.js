/*!
  * jenesius-vue-modal v1.3.1
  * (c) 2021 Jenesius
  * @license MIT
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

/**
 * last change: 25.11.2021
 * */
class ModalError extends Error {
    constructor(message, details = null) {
        super();
        this.isModalError = true;
        this.message = message;
        this.details = details;
    }
    static Undefined(id) {
        return new ModalError(`Modal with id: ${id} not founded. The modal window may have been closed earlier.`);
    }
    static UndefinedGuardName(name) {
        return new ModalError(`Guard's name ${name} is not declaration.`);
    }
    static NextReject(id) {
        return new ModalError(`Guard returned false. Modal navigation was stopped. Modal id ${id}`);
    }
    static GuardDeclarationType(func) {
        return new ModalError("Guard's type should be a function. Provided:", func);
    }
    static ConfigurationType(config) {
        return new ModalError("Configuration type must be an Object. Provided", config);
    }
    static ConfigurationUndefinedParam(param, availableParams) {
        return new ModalError(`In configuration founded unknown parameter: ${param}. Available are ${availableParams.join(", ")} `);
    }
    static EmptyModalQueue() {
        return new ModalError("Modal queue is empty.");
    }
}

/**
 * last change: 25.11.2021
 * */
const instanceStorage = {};
function saveInstance(id, instance) {
    instanceStorage[id] = instance;
}

/**
 * last change: 25.11.2021
 * */
const guards = {
    store: {},
    add(id, name, func) {
        const availableNames = ["close"];
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
    get(id, name) {
        if (!(id in this.store))
            return [];
        if (!(name in this.store[id]))
            return [];
        return this.store[id][name];
    },
    delete(id) {
        if (!(id in this.store))
            return;
        delete this.store[id];
    }
};
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
/*
* FUNCTION ONLY FOR ONE GUARD.
* */
function guardToPromiseFn(guard, id) {
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false)
                return reject(ModalError.NextReject(id));
            if (valid instanceof Error)
                reject(valid);
            resolve();
        };
        //First params is function-warning: next now is not available
        Promise.resolve(guard.call(instanceStorage[id]))
            .then(next)
            .catch(err => reject(err));
    });
}

/**
 * last change: 25.11.2021
 * */
const configuration = {
    scrollLock: true,
    animation: "modal-list" // Animation name for transition-group
};
/**
 * @description Method for changing default configuration.
 * */
function config(data) {
    if (typeof data !== "object")
        throw ModalError.ConfigurationType(data);
    const availableKeys = Object.keys(configuration);
    for (let key in data) {
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
const modalQueue = vue.ref([]); //All modals that showing now
const state$1 = {
    initialized: false,
};
vue.watch(modalQueue.value, () => {
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
    return runGuardQueue(modalQueue.value.map((modalObject) => () => modalObject.close()));
}

/**
 * Function close a last modal
 * */
function popModal() {
    if (modalQueue.value.length === 0)
        return Promise.resolve();
    let lastModal = modalQueue.value[modalQueue.value.length - 1];
    return lastModal.close();
}

/**
 * @description Закрывает модальное окно по идентификатору
 * ЕСЛИ МОДАЛЬНОЕ ОКНО БЫЛО НЕ НАХОДИТСЯ В АКТИВНЫХ ИНСТАНСАХ - ОШИБКА
 * */
function closeById(id) {
    const indexFoRemove = modalQueue.value.findIndex((item) => item.id === id);
    if (indexFoRemove === -1)
        return Promise.reject(ModalError.Undefined(id)); //Modal with id not found
    const arr = guards.get(id, "close").map((guard) => guardToPromiseFn(guard, id));
    return runGuardQueue(arr)
        .then(() => {
        modalQueue.value.splice(indexFoRemove, 1);
        delete instanceStorage[id];
        guards.delete(id);
    });
}

/**
 * last change: 25.11.2021
 * */
class Modal {
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} params Object of input params. Used like props.
     * */
    constructor(component, params) {
        this.id = Modal.modalId++;
        this.component = vue.shallowRef(component);
        this.params = params;
        this.closed = vue.computed(() => !modalQueue.value.includes(this));
        if (component.beforeModalClose)
            guards.add(this.id, "close", component.beforeModalClose);
    }
    /**
     * @description Method for closing the modal window
     * */
    close() {
        return closeById(this.id);
    }
    /**
     * @description Hook for handling modal closing
     * */
    set onclose(func) {
        guards.add(this.id, "close", func);
    }
}
Modal.modalId = 0;

function _addModal(component, params) {
    if (!state$1.initialized) {
        let err = `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.`;
        console.warn(err);
        throw err;
    }
    if (!component) {
        let err = `The first parameter(Component) was not specified.`;
        console.warn(err);
        throw err;
    }
    const modal = new Modal(component, params);
    modalQueue.value.push(modal);
    return modal;
}

/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
function pushModal(component, props = {}) {
    return _addModal(component, props);
}

/**
 * Close all modals, if resolved -> open Modal
 *
 * Get: NameOfComponent:VueComponent, params:Object
 *
 * @Return ModalObject
 * */
function openModal(component, props = {}) {
    return closeModal()
        .then(() => {
        if (!modalQueue.value.length)
            return pushModal(component, props);
        return null;
    });
}

function onBeforeModalClose(callback) {
    var _a;
    const a = vue.getCurrentInstance();
    const attrModalId = String((_a = a === null || a === void 0 ? void 0 : a.attrs) === null || _a === void 0 ? void 0 : _a["modal-id"]);
    let modalId = attrModalId.replace(/[^0-9]/g, "");
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

script$1.__file = "plugin/components/WidgetModalContainerItem.vue";

/**
 * last change: 25.11.2021
 * */
function initialize() {
    state$1.initialized = true;
    /**
     * If user press Escape then close last opened modal
     * */
    document.addEventListener("keyup", e => {
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
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

const state = {
    router: null
};
function init(router) {
    if (state.router)
        return console.warn("useModalRouter should escaped only once.");
    state.router = router;
    /**
     * Return ModalRouter or null
     * */
    function findModal(routerLocation) {
        if (!routerLocation.matched.length)
            return null;
        for (let i = routerLocation.matched.length - 1; i >= 0; i--) {
            let components = routerLocation.matched[i].components;
            // @ts-ignore
            let a = Object.values(components).find(route => route._isModal);
            if (a)
                return a;
        }
        return null;
    }
    /**
     * Hook only for closing
     * */
    router.beforeEach((to, from) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const modal = findModal(from);
            if (modal && !((_b = (_a = modal.getModalObject()) === null || _a === void 0 ? void 0 : _a.closed) === null || _b === void 0 ? void 0 : _b.value))
                yield modal.close(true);
        }
        catch (e) {
            return false;
        }
    }));
    /**
     * Hook for opening modal
     * */
    router.afterEach((to) => __awaiter(this, void 0, void 0, function* () {
        const modal = findModal(to);
        if (modal)
            yield modal.initialize();
    }));
}
function useModalRouter(component) {
    let modal = null;
    let isNavigationClosingGuard = false;
    function initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            isNavigationClosingGuard = false;
            modal = null;
            modal = yield openModal(component, vue.computed(() => { var _a; return (_a = state.router) === null || _a === void 0 ? void 0 : _a.currentRoute.value.params; }));
            modal.onclose = () => {
                var _a;
                if (!isNavigationClosingGuard)
                    (_a = state.router) === null || _a === void 0 ? void 0 : _a.back();
            };
        });
    }
    return {
        getModalObject: () => modal,
        _isModal: true,
        close(v = false) {
            return __awaiter(this, void 0, void 0, function* () {
                isNavigationClosingGuard = v;
                if (modal)
                    return yield modal.close();
            });
        },
        initialize,
        setup: () => () => null
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
