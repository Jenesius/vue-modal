/*!
  * jenesius-vue-modal v1.1.3
  * (c) 2021 Jenesius
  * @license MIT
  */
import { ref, watch, h, onMounted, TransitionGroup, getCurrentInstance, shallowRef } from 'vue';

var script$1 = {
        props: {
            component: Object,
            params: Object,
			id    : Number, // uniq identifier of modals
        },
        setup(props){

			const modalRef = ref(null);

			watch(() => modalRef.value, newValue => {
				saveInstance(props.id, newValue);
			});

			return () => h("div", {
				class: "widget__modal-container__item"
			}, [
				h("div", {class: "widget__modal-container__item-back widget__modal-back", onClick: popModal}),
				h(props.component, { ...props.params, class: "widget__modal-wrap", "modal-id": `_modal_${props.id}`, ref: modalRef})
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

			onMounted(initialize);

			return () => {
				return h(TransitionGroup, {name: "modal-list"}, {
					default: () =>modalQueue.value.map(modalObject => {
						return h(script$1, {component: modalObject.component, params: modalObject.params, key: modalObject.id, id: modalObject.id});
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
const modalQueue = ref([]); //All modals that showing now

const state = {
  modalId: 0,
  initialized: false
};
const guards = {
  store: {},

  add(id, name, func) {
    const availableNames = ["close"];
    if (!availableNames.includes(name)) return console.warn(`Name ${name} is not declaration.`);
    if (!this.store[id]) this.store[id] = {};
    if (!this.store[id][name]) this.store[id][name] = [];
    if (typeof func !== "function") return console.warn("Onclose callback was provided not function:", func);
    this.store[id][name].push(func);
  },

  get(id, name) {
    if (!(id in this.store)) return [];
    if (!(name in this.store[id])) return [];
    return this.store[id][name];
  }

};

class ModalObject {
  id;
  component;
  params;

  constructor(component, params) {
    this.id = state.modalId++;
    this.component = shallowRef(component);
    this.params = params;
    if (component.beforeModalClose) guards.add(this.id, "close", component.beforeModalClose);
  }

  close() {
    return closeById(this.id);
  }

  set onclose(func) {
    guards.add(this.id, "close", func);
  }

}

function createModalError() {
  return Object.assign(new ModalError(), {
    isModalError: true
  });
}

function canOnlyBeCalledOnce(next) {
  let called = false;
  return function () {
    if (called) console.warn(`The "next" callback was called more than once in one modal's guard. It should be called exactly one time in each navigation guard. This will fail in production.`);

    if (!called) {
      called = true;
      next.apply(null, arguments);
    }
  };
}

function closeById(id) {
  const indexFoRemove = modalQueue.value.findIndex(item => item.id === id); //Modal with id not found

  if (indexFoRemove === -1) return;
  const arr = guards.get(id, "close").map(guard => guardToPromiseFn(guard, id));
  return runGuardQueue(arr).then(() => {
    modalQueue.value.splice(indexFoRemove, 1);
    delete guards.store[id];
    delete instanceStorage[id];
  }).catch(err => err instanceof ModalError ? err : Promise.reject(err));
}

class ModalError extends Error {
  isModalError;

  constructor() {
    super();
    this.isModalError = true;
  }

}

function guardToPromiseFn(guard, id) {
  return () => new Promise((resolve, reject) => {
    const next = valid => {
      if (valid === false) return reject(createModalError());
      if (valid instanceof Error) reject(valid);
      resolve();
    };

    Promise.resolve(guard.call(instanceStorage[id], canOnlyBeCalledOnce(next))).then(next).catch(err => reject(err));
  });
}

function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}

watch(modalQueue.value, () => {
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

function openModal(component, params = {}) {
  return closeModal().then(() => {
    if (!modalQueue.value.length) return pushModal(component, params);
    return null;
  });
}
/**
 * Function add modal to modalQuery
 * */

function pushModal(component, params = {}) {
  return _addModal(component, params);
}

function _addModal(component, params) {
  if (!state.initialized) {
    let err = `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://www.npmjs.com/package/jenesius-vue-modal.`;
    console.warn(err);
    throw err;
  }

  const modal = new ModalObject(component, params);
  modalQueue.value.push(modal);
  return modal;
}
/**
 * Function close a last modal
 *
 * */


function popModal() {
  if (modalQueue.value.length === 0) return;
  let lastModal = modalQueue.value[modalQueue.value.length - 1];
  return lastModal.close();
}
/**
 * Function close all previous modals.
 *
 * */

function closeModal() {
  return runGuardQueue(modalQueue.value.map(modalObject => () => modalObject.close()));
}
const container = script;
function initialize() {
  state.initialized = true;
  /**
   * If user press Escape then close last opened modal
   * */

  document.addEventListener("keyup", e => {
    if (e.key === "Escape" || e.code === "Escape") popModal();
  });
}
function onBeforeModalClose(callback) {
  const a = getCurrentInstance();
  let modalId = a.attrs["modal-id"].replace(/[^0-9]/g, "");
  guards.add(modalId, "close", callback);
} //Для сохранения this

const instanceStorage = {};
function saveInstance(id, instance) {
  instanceStorage[id] = instance;
}
/**
* Deprecated
* */

function useModal() {
  console.warn("Function useModal is deprecated and was removed on 2.x.x version. Please use: import {openModal, closeModal, pushModal, popModal} from 'jenesius-vue-modal';");
  return {
    openModal,
    closeModal,
    popModal,
    pushModal
  };
}

export { closeModal, container, initialize, modalQueue, onBeforeModalClose, openModal, popModal, pushModal, saveInstance, useModal };
