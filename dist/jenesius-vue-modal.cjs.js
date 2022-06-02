/*!
  * jenesius-vue-modal v1.5.1
  * (c) 2022 Jenesius
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
        return new ModalError("Modal with id: " + id + " not founded. The modal window may have been closed earlier.");
    };
    ModalError.UndefinedGuardName = function (name) {
        return new ModalError("Guard's name " + name + " is not declaration.");
    };
    ModalError.NextReject = function (id) {
        return new ModalError("Guard returned false. Modal navigation was stopped. Modal id " + id);
    };
    ModalError.GuardDeclarationType = function (func) {
        return new ModalError("Guard's type should be a function. Provided:", func);
    };
    ModalError.ConfigurationType = function (config) {
        return new ModalError("Configuration type must be an Object. Provided", config);
    };
    ModalError.ConfigurationUndefinedParam = function (param, availableParams) {
        return new ModalError("In configuration founded unknown parameter: " + param + ". Available are " + availableParams.join(", ") + " ");
    };
    ModalError.QueueNoEmpty = function () {
        return new ModalError("Modal's queue is not empty. Probably some modal reject closing by onClose hook.");
    };
    ModalError.EmptyModalQueue = function () {
        return new ModalError("Modal queue is empty.");
    };
    ModalError.NotInitialized = function () {
        return new ModalError("Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.");
    };
    ModalError.ModalComponentNotProvided = function () {
        return new ModalError("The first parameter(VueComponent) was not specified.");
    };
    ModalError.DuplicatedRouterIntegration = function () {
        return new ModalError('useModalRouter.init should escaped only once.');
    };
    ModalError.ModalRouterIntegrationNotInitialized = function () {
        return new ModalError("The integration was not initialized. Please, use useModalRouter.init(router). For more information: https://modal.jenesius.com/docs.html/integration-vue-router#installation");
    };
    ModalError.ModalEventNameMustBeString = function (eventName) {
        return new ModalError("Event name must be a string. Provided: " + eventName);
    };
    return ModalError;
}(Error));

/**
 * last change: 18.02.2022
 * */
var configuration = {
    scrollLock: true,
    animation: "modal-list",
    backgroundClose: true,
    escClose: true,
};
/**
 * @description Method for changing default configuration.
 * @param {object} options - The Configuration Options of Modal System.
 * @param {boolean} options.scrollLock - if true: Disable scrolling in time when modal is open.
 * @param {string} options.animation - Animation name for transition-group.
 * @param {boolean} options.backgroundClose - Closing on click back area of modal.
 * @param {boolean} options.escClose - Closing on press ESC key
 * */
function config(options) {
    if (typeof options !== "object")
        throw ModalError.ConfigurationType(options);
    Object.assign(configuration, options);
}

/**
 * last change: 25.11.2021
 *
 * STATE ПРЕДНАЗНАЧЕН ДЛЯ ВНУТРЕННЕГО ХРАНИЛИЩА ДАННЫХ
 * НЕПУТАТЬ С КОНФИГУРАЦИЕЙ, ЕЁ ЗАДАЁТ ПОЛЬЗОВАТЕЛЬ
 *
 * initialized - параметра принимает true, когда приложение было проинициализировано, то есть WidgetModalContainer
 * был добавлен на страницу
 *
 * */
var modalQueue = vue.ref([]); //All modals that showing now
var state$1 = {
    initialized: false,
    instanceStorage: {},
};
vue.watch(modalQueue.value, function () {
    if (!configuration.scrollLock)
        return;
    if (modalQueue.value.length)
        document.body.style.overflowY = "hidden";
    else
        document.body.style.overflowY = "auto";
});

/**
 * last change: 25.11.2021
 * */
var guards = {
    store: {},
    add: function (modalId, name, func) {
        var _a;
        if (typeof func !== "function")
            throw ModalError.GuardDeclarationType(func);
        if (!this.store[modalId])
            this.store[modalId] = (_a = {},
                _a[name] = [],
                _a);
        if (!this.store[modalId][name])
            this.store[modalId][name] = [];
        this.store[modalId][name].push(func);
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
/**
 * Accumulator for guard queue
 * */
function runGuardQueue(guards) {
    return guards.reduce(function (promiseAccumulator, guard) {
        return promiseAccumulator.then(function () { return guard(); });
    }, Promise.resolve());
}
/**
 * @description Function just only for one guard.
 * @return {Promise} promisify guard.
 *
 * If guard return void or true value - resolve.
 * Otherwise reject(err)
 * */
function guardToPromiseFn(guard, id) {
    return function () { return new Promise(function (resolve, reject) {
        /**
         * Next - hook for returned value from guard.
         * */
        var next = function (valid) {
            if (valid === void 0) { valid = true; }
            if (valid === false)
                reject(ModalError.NextReject(id));
            resolve();
        };
        Promise.resolve(guard.call(state$1.instanceStorage[id]))
            .then(next)
            .catch(function (err) { return reject(err); });
    }); };
}

/**
 * @description Try to close all modals windows. Throw error if some modal has onClose hook with returned false value.
 * */
function closeModal() {
    return runGuardQueue(modalQueue.value.map(function (modalObject) { return function () { return modalObject.close(); }; }));
}

/**
 * @description Try to close the last opened modal window.
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
    var indexRemoveElement = modalQueue.value.findIndex(function (item) { return item.id === id; });
    //Modal with id not found
    if (indexRemoveElement === -1)
        return Promise.reject(ModalError.Undefined(id));
    var arr = guards.get(id, "close")
        .map(function (guard) { return guardToPromiseFn(guard, id); });
    return runGuardQueue(arr)
        .then(function () {
        modalQueue.value.splice(indexRemoveElement, 1);
        delete state$1.instanceStorage[id];
        guards.delete(id);
    });
}

/**
 * last change: 05.12.2021
 * МЕТОД ДЛЯ СОХРАНЕНИЯ ЭКЗЕМПЛЯРА МОДАЛЬНОГО ОКНА.
 * ВЫЗЫВАЕТСЯ КАЖДЫЙ РАЗ В МОМЕНТ ИНИЦИАЛИЗАЦИИ.
 *
 * INSTANCE это не ModalObject. INSTANCE - СБИЛДЕННАЯ VUE КОМПОНЕНТА, КОТОРУЮ ПЕРЕДАЛ
 * ПОЛЬЗОВАТЕЛЬ
 * * */
function saveInstance(id, instance) {
    state$1.instanceStorage[id] = instance;
}
function getInstance(id) {
    return state$1.instanceStorage[id];
}

function DtoModalOptions(options) {
    var output = {
        backgroundClose: configuration.backgroundClose
    };
    if (options.backgroundClose !== undefined)
        output.backgroundClose = options.backgroundClose;
    return output;
}

/**
 * last change: 18.02.2022
 * */
var Modal = /** @class */ (function () {
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} props Object of input params. Used like props.
     * */
    function Modal(component, props, options) {
        var _this = this;
        /**
         * @description Storage for events.
         * modal.on(eventName, callback) will makeStorage: {eventName: callback}
         * */
        this.eventCallbacks = vue.reactive({});
        /**
         * @description Click on the background will close modal windows.
         * */
        this.backgroundClose = true;
        this.id = Modal.modalId++;
        this.component = component;
        this.props = vue.ref(props);
        /**
         * БЛЯТЬ, ПОЧЕМУ ОНО ТАК?
         * ОТВЕТ: ЭТОТ ЕБУЧИЙ ВЬЮ, ПРИ ДОБАВЛЕНИИ В modalQueue
         * РАСКРЫВАЕТ COMPUTED(THIS.CLOSED) И КЛАДЁТ ТУДА ТУПО ЗНАЧЕНИЕ, А НЕ
         * COMPUTED PROP {VALUE: BOOLEAN}
         * ЧТО ЛОГИЧНО, НО ПО УЕБАНСКИ
         * ----
         * Более деликатное объяснение:
         * Раньше в modalQueue ложили просто объект Modal.
         * modalQueue.value.push(Modal)
         * Т.к. modalQueue является реактивным объектом, оно автоматически делает
         * реактивным и все свойства объекта, который кладётся в него. И у нас
         * closed.value пропадало, оставалось лишь closed. Т.к. modalQueue и так
         * полностью реактивно.
         * Сейчас в modalQueue кладётся markRaw(помечаем, что не надо делать об
         * ект реактивным). И close.value - остаётся
         *
         * 10.02.2022 @ЖЕНЯ, КОТОРЫЙ ЕЩЁ ПЛОХО ЗНАЕТ TS.
         * */
        this.closed = vue.computed(function () { return !modalQueue.value.includes(_this); });
        /*
        this.closed = computed(
            () => !modalQueue.value.find(item => item.id === this.id)
        );
        */
        if (component.beforeModalClose)
            guards.add(this.id, "close", component.beforeModalClose);
        var dtoOptions = DtoModalOptions(options);
        this.backgroundClose = dtoOptions.backgroundClose;
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
    Object.defineProperty(Modal.prototype, "instance", {
        /**
         * @description Return instance of modal component
         * */
        get: function () {
            return getInstance(this.id);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @description Event handler
     * */
    Modal.prototype.on = function (eventName, callback) {
        if (typeof eventName !== 'string')
            throw ModalError.ModalEventNameMustBeString(eventName);
        eventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
        // If eventName was added firstly
        /*
        if (!(eventName in this.eventCallbacks))
            this.eventCallbacks[eventName] = []
        */
        this.eventCallbacks[eventName] = callback.bind(this.instance);
    };
    Modal.modalId = 0;
    return Modal;
}());

/**
 * Sync function for adding modal window.
 * Two check:
 * - Application was initialized (ModalContainer was mounted).
 * - Component is required.
 * */
function _addModal(component, params, options) {
    if (!state$1.initialized)
        throw ModalError.NotInitialized();
    if (!component)
        throw ModalError.ModalComponentNotProvided();
    var modal = new Modal(component, params, options);
    /**
     * modalQueue.value.push(Object.freeze(modal)) - фундаментальная ошибка!
     * Таким способо мы запрещаем изменение любых свойст объекта - что является
     * недопустим исключением, ведь объект может хранить, например, свойство
     * `version`, которое по итогу будет не изменяемым.
     *
     * computed свойство 'closed' так-же потеряет реактивность в таком случае
     *
     * modalQueue.value.push(modal) - ошибка!
     * Т.к. modalQueue является реактивным объектом и создаётся при помощи ref.
     * В итоге все элементы, добавленные в  неё, становятся реактивными полностью.
     * Так же получим небольшие проблемы с computed свойствами, поскольку они
     * И так уже находятся в реактивном объекте и разложаться.
     *
     * markRaw - пометка для vue, что к данному элементу не надо добавлять никак
     * ой реактивности.
     *
     * */
    //modalQueue.value.push(modal);
    modalQueue.value.push(vue.markRaw(modal));
    return modal;
}

/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
function pushModal(component, props, options) {
    if (props === void 0) { props = {}; }
    if (options === void 0) { options = {}; }
    return Promise.resolve().then(function () { return _addModal(component, props, options); });
}

/**
 * @description OpenModal that was provided as component.
 * Before opening try to close all previous modals.
 * @param {Object} component Any Vue component
 * @param {Object} props Props that will be passed to the component
 * @param {Object} options Params for Modal. Like backgroundClose and other
 *
 * @return {Promise<Modal>} ModalObject
 * */
function openModal(component, props, options) {
    if (props === void 0) { props = {}; }
    return closeModal()
        .then(function () {
        if (modalQueue.value.length)
            throw ModalError.QueueNoEmpty();
    })
        .then(function () { return pushModal(component, props, options); });
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
			id    : Number, // uniq identifier of modals,
        },
        setup(props){

			const modalRef = vue.ref(null);
			const containerRef = vue.ref(null);

			vue.watch(() => modalRef.value, newValue => {
				saveInstance(props.id, newValue);
			});

            function getModalById(id){
                return modalQueue.value.find(elem => elem.id === id);
            }
            const modal = getModalById(props.id);


			return () => vue.h("div", {
				class: ["widget__modal-container__item", "modal-container"],
				ref: containerRef,
				onClick: e => {
					if (e.target !== containerRef.value) return;

                    if (modal.backgroundClose) return popModal().catch(() => {})
				}
			}, [

				vue.h(modal.component, {
					...modal.props.value,
					class: ["modal-item", "widget__modal-wrap"],//Save for compatibility
					"modal-id": `_modal_${props.id}`,
					ref: modalRef,
                    ...modal.eventCallbacks
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
 * last change: 18.02.2022
 * */
/**
 * @description Function run when ModalContainer was mounted in user's interface.
 * Set the key 'initialized' to true and handle the 'keyup' event.
 * */
function initialize() {
    state$1.initialized = true;
    document.addEventListener("keyup", function (e) {
        // Closing the last modal window when user pressed Escape
        if (configuration.escClose && e.key === "Escape" || e.code === "Escape")
            popModal();
    });
}

var script = {
        setup(){

			vue.onMounted(initialize);

			return () => {
				return vue.h(vue.TransitionGroup, {name: configuration.animation}, {
					default: () =>modalQueue.value.map(modalObject => {
						return vue.h(script$1, {
                            key: modalObject.id,
                            id: modalObject.id,
                        });
					})
				})
			}
        },
        components: {WidgetContainerModalItem: script$1}
    };

var css_248z = "\n.modal-list-enter-active,\r\n    .modal-list-leave-active,\r\n    .modal-list-enter-active .modal-item,\r\n    .modal-list-leave-active .modal-item\r\n    {\r\n        transition: all 0.2s ease;\n}\n.modal-list-enter-from,\r\n    .modal-list-leave-to{\r\n\t\topacity: 0 !important;\n}\n.modal-list-enter-from .modal-item,\r\n    .modal-list-leave-to   .modal-item{\r\n\t\ttransform: translateY(-60px);\n}\r\n";
styleInject(css_248z);

script.__file = "plugin/components/WidgetModalContainer.vue";

/**
 * 18.02.2022
 * Интеграция с vue-router.
 *
 * Основной принцип работы: ма создаём обёртку над модальным окном, которую отда
 * ём в Route. Сама по себе обёртка ничего не рисует и её setup:() => () => null
 * Но в момент рендеринга(mount) вызывается открытие модального окна.
 *
 * Если мы перешли на Route, которое интегрируемо с модальным окном - открытие
 * модального окна на 100% возможно и этому ничего не может препядствовать.
 *
 * Пример: мы открыли модлаьное окно в котором стоит hook, который запрещает его
 * закрытие в данный момент, если попытаться перейти на маршрут на котором откры
 * вается модальное окно - мы получим ошибку.
 *
 * Для интеграции с VueRouter предоставляется функция useModalRouter, которая яв
 * ляется обёрткой над обычной vue component.
 *
 * useModalRouter.init - функция, которая принимает массив router и сохраняет
 * его в хранилище для последующего взаимодействия.
 *
 * Для чего неоходимо передать router? Т.к. мы не имеем доступ к текущему Route
 * и функции back
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * HOW IS WORK * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 1. We add hook route.afterEach in useModalRoute to handle each route.
 * 2. [In afterEach] Opening modal window if current route is integrated route
 * with modal.
 *
 * AfterEach:
 *
 * |------------|                                                 NO
 * |currentRoute| -> is integrated route with modal's system?    ---> default
 * |------------|                       |
 * 										|
 * 										↓
 * 						Running modalRoute.initialize()
 *
 * 1. Provide Computed props from route.params to Modal
 * 2. Add handler for onclose: () => router.back()
 *
 * Before leaving the route we check for opening modal's window. If there is one
 * we try to close it. In case fail we don't leave to other route and modal
 * continues to be open.
 *
 *
 * */
var state = {
    router: null
};
function init(router) {
    var _this = this;
    if (state.router)
        throw ModalError.DuplicatedRouterIntegration();
    state.router = router;
    /**
     * @description Функция для поиска объекта, который интегрирован с модальным
     * окном. Если среди matched роутами и их находится компонента, которая явля
     * ется обёрткой(ModalRoute, которую возвращает useModalRoute), то поиск пре
     * кратится и вёрнтся ссылка на данный объект. Иначе null.
     *
     * @Return ModalRoute | null
     * */
    function findModal(routerLocation) {
        for (var i = routerLocation.matched.length - 1; i >= 0; i--) {
            var components = routerLocation.matched[i].components;
            /**
             * Problem:
             * Object.values(components)
             * return (RouteComponent | ModalRouterInterface)[]
             *
             * How to do it in TypeScript
             * */
            // @ts-ignore
            var a = Object.values(components).find(function (route) { return route._isModal; });
            if (a)
                return a;
        }
        return null;
    }
    /**
     * @description Hook only for closing #1
     * */
    router.beforeEach(function (to, from) { return __awaiter(_this, void 0, void 0, function () {
        var modalRoute;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    modalRoute = findModal(from);
                    if (!(modalRoute && !((_b = (_a = modalRoute.getModalObject()) === null || _a === void 0 ? void 0 : _a.closed) === null || _b === void 0 ? void 0 : _b.value))) return [3 /*break*/, 2];
                    return [4 /*yield*/, modalRoute.close(true)];
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
     * @description Hook for opening modal #2
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
/**
 * @description Wrap for ModalComponent
 * @param {Object} component
 * */
function useModalRouter(component) {
    //Ссылка на modalObject
    var modal = null;
    /**
     * isNavigationClosingGuard используется в качестве реле при закрытии модаль
     * ного окна. Т.к. мы подписываемся на закрытии модального окна и вызываем
     * переход на шаг назад в router, мы можем перейти сразу на два шага назад:
     * При управляемом переходе(при нажатии на предыдущую страницу, кнопку назад)
     * происходит сперва обычный переход на предыдущий route, а затем ещё один
     * переход назад: в onclose модального окна.
     *
     * Именно по этому, в onclose стоит проверка на isNavigationClosingGuard, а
     * в обработчике #1 передаётся true, указывающее на то, что при закрытии мод
     * ального кона не надо возвращаться на шаг назад в route.
     * */
    var isNavigationClosingGuard = false;
    function initialize() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!state.router)
                            throw ModalError.ModalRouterIntegrationNotInitialized();
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
        /**
         Флаг, использующийся для определения того, что данная компонента -
         обёртка модального окна
         */
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
        /**
         * Мнимая обёртка. Для того, чтобы рендеринг запускался.
         * -----
         * (19.02.2022)
         * Try to change null to RouterView, using this way we can use children
         * in router configuration.
         * */
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
