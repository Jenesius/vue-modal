/*eslint-disable*/
"use strict";
import {ref, watch, shallowRef, getCurrentInstance, computed} from "vue";
import useModalRouter from "./useModalRouter";
import WidgetModalContainer from "./WidgetModalContainer.vue";

export const modalQueue = ref([]); //All modals that showing now

const state = {
    modalId: 0,
    initialized: false, // Boolean, false - if ModalContainer not inserted in project.
}

const configuration = {
    /**
     * true - if Modal was opened the page cannot be scrolled
     * */
    scrollLock: true,
    /**
    * Animation name for transition-group
    * */
    animation: "modal-list"
}


export function config(data = {scrollLock, animation}){
    if (typeof data !== "object") throw ModalError.ConfigurationType(data);

    let availableKeys = Object.keys(configuration);

    for(let key in data) {

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
const guards = {

    store: {},

    add(id, name, func){
        const availableNames = ["close"];

        if (!availableNames.includes(name)) throw ModalError.UndefinedGuardName(name);

        if (!this.store[id]) this.store[id] = {};

        if (!this.store[id][name]) this.store[id][name] = [];

        if (typeof func !== "function") throw ModalError.GuardDeclarationType(func);

        this.store[id][name].push(func);
    },

    get(id, name) {

        if (!(id in this.store)) return [];
        if (!(name in this.store[id])) return [];

        return this.store[id][name];
    },

    delete(id){
        if (!(id in this.store)) return;

        delete this.store[id];
    }
}

class ModalObject{

    id;
    component;
    params;
    closed;
    constructor(component, params) {
        this.id = state.modalId++;
        this.component = shallowRef(component);
        this.params = params;
        this.closed = computed(() => !modalQueue.value.includes(this));


        if (component.beforeModalClose) guards.add(this.id, "close", component.beforeModalClose);
    }



    close(){
        return closeById(this.id);
    }

    set onclose(func) {
        guards.add(this.id, "close", func);
    }
}

class ModalError extends Error{
    isModalError;
    constructor(message) {
        super();

        this.isModalError = true;
        this.message = message;
    }

    static Undefined(id) {
        return new ModalError(`Modal with id: ${id} not founded. The modal window may have been closed earlier.`);
    }
    static UndefinedGuardName(name) {
        return new ModalError(`Guard's name ${name} is not declaration.`);
    }

    static NextReject(id){
        return new ModalError(`Guard returned false. Modal navigation was stopped. Modal id ${id}`);
    }

    static GuardDeclarationType(func){
        return new ModalError("Guard's type should be a function. Provided:", func);
    }

    static ConfigurationType(config) {
        return new ModalError("Configuration type must be an Object. Provided", config)
    }
    static ConfigurationUndefinedParam(param, availableParams) {
        return new ModalError(`In configuration founded unknown parameter: ${param}. Available are ${availableParams.join(", ")} `)
    }

    static EmptyModalQueue(){
        return new ModalError("Modal queue is empty.");
    }

}

function closeById(id) {

    const indexFoRemove = modalQueue.value.findIndex(item => item.id === id);

    if (indexFoRemove === -1) return Promise.reject(ModalError.Undefined(id));    //Modal with id not found

    const arr = guards.get(id, "close").map(guard => guardToPromiseFn(guard, id));

    return runGuardQueue(arr)
    .then(() => {
        modalQueue.value.splice(indexFoRemove, 1);

        delete instanceStorage[id];
        guards.delete(id)
    })
    /*
    .catch(err => Promise.reject(err))
    .catch(err => (err instanceof ModalError)?err: Promise.reject(err))

     */

}

function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
/*
* FUNCTION ONLY FOR ONE GUARD.
* */
function guardToPromiseFn(guard, id){
    return () => new Promise((resolve, reject) => {

        const next = (valid) => {

            if (valid === false) return reject(ModalError.NextReject(id));
            if (valid instanceof Error) reject(valid);

            resolve();
        };

        //First params is function-warning: next now is not available

        const nextWarning = (v = null) => {
            const err = new ModalError(
                `Resolver function 'next' in modal's hooks no longer supported. (^1.2.0 version jenesius-vue-modal). You should return false/true values. https://modal.jenesius.com/docs.html/navigation-guards`
            );
            console.warn(err);

            //return throw ModalError.nextReject(4);
        };

        Promise.resolve(guard.call(instanceStorage[id], nextWarning))
        .then(next)
        .catch(err => reject(err));
    });
}





watch(modalQueue.value, () => {

    if (!configuration.scrollLock) return;

    try {
        if (modalQueue.value.length) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    } catch (e) {

    }

})


/**
 * Close all modals, if resolved -> open Modal
 *
 * Get: NameOfComponent:VueComponent, params:Object
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
        let err = `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.`;

        console.warn(err);
        throw err;
    }

    if (!component) {
        let err = `The first parameter(Component) was not specified.`
        console.warn(err)

        throw err;
    }


    const modal = new ModalObject(component, params);

    modalQueue.value.push(modal);

    return modal;
}

/**
 * Function close a last modal
 * */
export function popModal(){
    if (modalQueue.value.length === 0) return Promise.resolve();

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

export {
    useModalRouter,
    configuration as _configuration
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

