/**
 * last change: 25.11.2021
 * */

import {computed, ComputedRef, shallowRef} from "vue";
import {guards, modalQueue} from "./state";
import {GuardFunctionWithHandle} from "./types";
import closeById from "../methods/closeById";
import {getInstance} from "./instances";

export default class Modal{

    id:number;
    component:any;
    params:any;
    /**
     * @description VueRef var. If modal was closed value is False
     * */
    closed:ComputedRef;

    static modalId = 0;

    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} params Object of input params. Used like props.
     * */
    constructor(component: any, params: any) {
        this.id = Modal.modalId++;

        this.component = shallowRef(component);
        this.params = params;
        this.closed = computed(() => !modalQueue.value.includes(this));


        if (component.beforeModalClose) guards.add(this.id, "close", component.beforeModalClose);
    }



    /**
     * @description Method for closing the modal window
     * */
    close() :Promise<void> {
        return closeById(this.id);
    }

    /**
     * @description Hook for handling modal closing
     * */
    set onclose(func: GuardFunctionWithHandle) {
        guards.add(this.id, "close", func);
    }
    /**
     * @description Return instance of modal component
     * */
    get target(){
        return getInstance(this.id);
    }

}
