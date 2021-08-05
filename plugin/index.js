/*eslint-disable*/
import {ref, watch, shallowRef} from "vue";
import WidgetModalContainer from "./WidgetModalContainer";


function ModalObject(id){

    const object = {
        id: id
    };

    object.close = () => {

        if (object.onclose && object.onclose() === false) return false;

        closeById(id);

        return true;
    }

    return object
}

const state = {
    modalId: 0,
    initialized: false
}

export const modalQueue = ref([]);


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

        if (!modalQueue.value[i].modalObject.close()) return;

    }

}

/**
 * Function add modal to modalQuery
 * */
export function pushModal(component, params = {}) {


    if (!state.initialized) {
        throw `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://www.npmjs.com/package/jenesius-vue-modal.`;
    }

    state.modalId++;


    const modalObject = ModalObject(state.modalId);

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
