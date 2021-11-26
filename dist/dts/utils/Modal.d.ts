/**
 * last change: 25.11.2021
 * */
import { ComputedRef } from "vue";
import { GuardFunctionWithHandle } from "./types";
export default class Modal {
    id: number;
    component: any;
    params: any;
    /**
     * @description VueRef var. If modal was closed value is False
     * */
    closed: ComputedRef;
    static modalId: number;
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} params Object of input params. Used like props.
     * */
    constructor(component: any, params: Object);
    /**
     * @description Method for closing the modal window
     * */
    close(): Promise<void>;
    /**
     * @description Hook for handling modal closing
     * */
    set onclose(func: GuardFunctionWithHandle);
}
