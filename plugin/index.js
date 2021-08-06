/*eslint-disable*/
import {ref, watch, shallowRef, getCurrentInstance} from "vue";
import WidgetModalContainer from "./WidgetModalContainer";

const oncloseStore = {};

const guards = {
    onclose: {}
}

function ModalObject(id){

    const object = {
        id: id
    };

    object.close = () => {

        try {
            if (object.onclose && object.onclose() === false) return false;

        } catch (e) {}

        _closeById(id);

        return true;
    }

    return object
}

const state = {
    modalId: 0,
    initialized: false
}

export const modalQueue = ref([]);


/**
 * Function check store for hooks
 *
 * @Return true - if successful close modal, false else
 *
 * */
function _closeById(id) {
    const indexFoRemove = modalQueue.value.findIndex(item => item.id === id);

    //Modal with id not found
    if (indexFoRemove === -1) return;

    if (Array.isArray(oncloseStore[id]) && oncloseStore[id].length) {
        for(let i = 0; i < oncloseStore[id].length; i++) {

            console.log("+", id, oncloseStore[id][i], instanceStorage[id])

            let res = oncloseStore[id][i].call(instanceStorage[id]);
            console.log("+", res)
            if (res === false) return;

        }

    }

    modalQueue.value.splice(indexFoRemove, 1);
}


watch(modalQueue.value, () => {
    if (modalQueue.value.length) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
})

/**
 * Return modalObject by id or undefined(if modalObject with provided id not founded)
 * */

function getModalObjectById(id){
    return modalQueue.value.find(item => item.id === id)?.modalObject;
}

function closeById(id){
    const indexFoRemove = modalQueue.value.findIndex(item => item.id === id);

    //Modal with id not found
    if (indexFoRemove === -1) return;

    modalQueue.value.splice(indexFoRemove, 1);
}

/**
 * Function open one and close previous modals
 *
 * Get: NameOfComponent:String or VueComponent, params:Object
 *
 * @Return ModalObject
 * */
export function openModal(component, params = {}){
    closeModal();
    return pushModal(component, params);
}

/**
 * Function close all previous modals.
 *
 * */
export function closeModal() {

    for(let i = modalQueue.value.length - 1; i >= 0; i--) {

        if (!modalQueue.value[i].modalObject.close()) return false;

    }

    return true;
}

/**
 * Function add modal to modalQuery
 * */
export function pushModal(component, params = {}) {


    if (!state.initialized) {
        throw `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://www.npmjs.com/package/jenesius-vue-modal.`;
    }

    state.modalId++;
    console.log("Modal get id:", state.modalId)


    const modalObject = ModalObject(state.modalId);

    //Put to storage
    if (component.beforeModalClose) oncloseStore[state.modalId] = [component.beforeModalClose];

    modalQueue.value.push({
        component   : shallowRef(component),
        params      : params,
        id          : state.modalId,
        modalObject : shallowRef(modalObject)
    });




    return modalObject;
}

/**
 * Function close a last modal
 *
 * */
export function popModal(){

    if (modalQueue.value.length === 0) return;

    let lastModal = modalQueue.value[modalQueue.value.length - 1].modalObject;

    return lastModal.close();
}

export const container = WidgetModalContainer;


export function useModal(){
    return {
        openModal,
        closeModal,

        popModal,
        pushModal,
    }
}

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


    let modalId = a.attrs.id.replace(/[^0-9]/g, "")
    oncloseStore[modalId] = [callback];

}

export function onModalClose(callback) {
    const a = getCurrentInstance();


    let modalId = a.attrs.id.replace(/[^0-9]/g, "")
    oncloseStore[modalId] = [callback];
    console.log(modalId, a,a.attrs.id, modalQueue.value.length);

}


//Для сохранения this
const instanceStorage = {};
export function saveInstance(id, instance) {
    instanceStorage[id] = instance;
}