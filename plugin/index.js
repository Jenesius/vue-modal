/*eslint-disable*/
import {ref, watch, shallowRef, getCurrentInstance} from "vue";
import WidgetModalContainer from "./WidgetModalContainer";

export const modalQueue = ref([]); //All modals that showing now


const state = {
    modalId: 0,
    initialized: false,
}



const guards = {

    store: {},

    add(id, name, func){
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
}

class ModalObject{

    id;
    component;
    params;

    constructor(component, params) {
        this.id = state.modalId++;
        this.component = shallowRef(component);
        this.params = params;

        if (component.beforeModalClose) guards.add(this.id, "close", component.beforeModalClose);
    }

    close(){
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

    const indexFoRemove = modalQueue.value.findIndex(item => item.id === id);

    //Modal with id not found
    if (indexFoRemove === -1) return;

    const arr = guards.get(id, "close").map(guard => guardToPromiseFn(guard, id));

    return runGuardQueue(arr)
    .then(() => {
        modalQueue.value.splice(indexFoRemove, 1);

        delete guards.store[id];
        delete instanceStorage[id];

    })
    .catch(err => (err instanceof ModalError)?err: Promise.reject(err))

}

class ModalError extends Error{
    isModalError;
    constructor() {
        super();

        this.isModalError = true;
    }

}

function guardToPromiseFn(guard, id){
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false) return reject(createModalError());

            if (valid instanceof Error) reject(valid);

            resolve();
        };

        Promise.resolve(guard.call(instanceStorage[id], canOnlyBeCalledOnce(next)))
        .then(next)
        .catch(err => reject(err));
    });
}


function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}

watch(modalQueue.value, () => {
    try {
        if (modalQueue.value.length) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    } catch (e) {

    }

})


/**
 * Function open one and close previous modals
 *
 * Get: NameOfComponent:String or VueComponent, params:Object
 *
 * @Return ModalObject
 * */
export function openModal(component, params = {}){
    return closeModal()
    .then(() => {
        if (!modalQueue.value.length) return pushModal(component, params)

        return null;
    })
}

/**
 * Function add modal to modalQuery
 * */
export function pushModal(component, params = {}) {
    return _addModal(component, params);
}




function _addModal(component, params){

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
export function popModal(){
    if (modalQueue.value.length === 0) return;

    let lastModal = modalQueue.value[modalQueue.value.length - 1];
    return lastModal.close();
}

/**
 * Function close all previous modals.
 *
 * */
export function closeModal() {
    return runGuardQueue(modalQueue.value.map(modalObject => () => modalObject.close()))

}


export const container = WidgetModalContainer;


export function initialize(){
    state.initialized = true;
    /**
     * If user press Escape then close last opened modal
     * */
    document.addEventListener("keyup", e => {
        if (e.key === "Escape" || e.code === "Escape") popModal();
    })
}


export function onBeforeModalClose(callback){

    const a = getCurrentInstance();

    let modalId = a.attrs["modal-id"].replace(/[^0-9]/g, "");

    guards.add(modalId, "close", callback);

}


//Для сохранения this
const instanceStorage = {};
export function saveInstance(id, instance) {
    instanceStorage[id] = instance;
}


/**
* Deprecated
* */
export function useModal(){

    console.warn("Function useModal is deprecated and was removed on 2.x.x version. Please use: import {openModal, closeModal, pushModal, popModal} from 'jenesius-vue-modal';");


    return {
        openModal,
        closeModal,

        popModal,
        pushModal,
    }
}