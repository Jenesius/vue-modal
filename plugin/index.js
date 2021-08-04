import {ref, watch, shallowRef} from "vue";
import WidgetModalContainer from "./WidgetModalContainer";


function ModalObject(id){

    const object = {
        id: id
    };

    object.close = () => {
        closeById(id);
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
    modalQueue.value = [];
}

/**
 * Function add modal to modalQuery
 * */
export function pushModal(component, params = {}) {


    if (!state.initialized) {
        throw `Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://www.npmjs.com/package/jenesius-vue-modal.`;
    }

    state.modalId++;

    modalQueue.value.push({
        component   : shallowRef(component),
        params      : params,
        id          : state.modalId
    });


    return ModalObject(state.modalId);
}

/**
 * Function close a last modal
 *
 * */
export function popModal(){
    modalQueue.value.pop();
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
