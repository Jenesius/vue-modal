/**
 * last change: 25.11.2021
 * */

import {computed, ComputedRef, reactive, shallowRef} from "vue";
import {guards, modalQueue} from "./state";
import {GuardFunctionWithHandle} from "./types";
import closeById from "../methods/closeById";
import {getInstance} from "./instances";
import ModalError from "./ModalError";

interface EventCallbacksStorage {
    [name: string]: (data?: any) => any//Array
}

export interface ModalPublicInterface{
    id: number,
    closed: ComputedRef<boolean>,
    close : () => Promise<void>

}

export default class Modal implements ModalPublicInterface{

    public id:number;
    public closed: ComputedRef;


    protected component:any;
    protected params:any;
    /**
     * @description VueRef var. If modal was closed value is TRUE
     * */

    protected static modalId = 0;
    public eventCallbacks:EventCallbacksStorage = reactive({})

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

        /**
         * БЛЯТЬ, ПОЧЕМУ ОНО ТАК?
         * ОТВЕТ: ЭТОТ ЕБУЧИЙ ВЬЮ, ПРИ ДОБАВЛЕНИИ В modalQueue
         * РАСКРЫВАЕТ COMPUTED(THIS.CLOSED) И КЛАДЁТ ТУДА ТУПО ЗНАЧЕНИЕ, А НЕ
         * COMPUTED PROP {VALUE: BOOLEAN}
         * ЧТО ЛОГИЧНО, НО ПО УЕБАНСКИ
         *
         * 10.02.2022 @ЖЕНЯ, КОТОРЫЙ ЕЩЁ ПЛОХО ЗНАЕТ TS.
         *
         * */
        this.closed = computed(
            () => !modalQueue.value.find(item => item.id === this.id)
        );


        if (component.beforeModalClose) guards.add(this.id, "close", component.beforeModalClose);
    }



    /**
     * @description Method for closing the modal window
     * */
    public close() :Promise<void> {
        return closeById(this.id);
    }

    /**
     * @description Hook for handling modal closing
     * */
    public set onclose(func: GuardFunctionWithHandle) {
        guards.add(this.id, "close", func);
    }
    /**
     * @description Return instance of modal component
     * */
    public get instance(){
        return getInstance(this.id);
    }

    /**
     * @description Event handler
     * */
    public on(eventName: string, callback: (data?: any) => any) {

        if (typeof eventName !== 'string') throw ModalError.ModalEventNameMustBeString(eventName);

        eventName = 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);

        // If eventName was added firstly
        /*
        if (!(eventName in this.eventCallbacks))
            this.eventCallbacks[eventName] = []
        */
        this.eventCallbacks[eventName] = callback.bind(this.instance);

    }

}
