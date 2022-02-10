/**
 * last change: 25.11.2021
 * */
import { ComputedRef } from "vue";
import { GuardFunctionWithHandle } from "./types";
interface EventCallbacksStorage {
    [name: string]: (data?: any) => any;
}
export interface ModalPublicInterface {
    id: number;
    closed: ComputedRef<boolean>;
    close: () => Promise<void>;
}
export default class Modal implements ModalPublicInterface {
    id: number;
    closed: ComputedRef;
    protected component: any;
    protected params: any;
    /**
     * @description VueRef var. If modal was closed value is TRUE
     * */
    protected static modalId: number;
    eventCallbacks: EventCallbacksStorage;
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} params Object of input params. Used like props.
     * */
    constructor(component: any, params: any);
    /**
     * @description Method for closing the modal window
     * */
    close(): Promise<void>;
    /**
     * @description Hook for handling modal closing
     * */
    set onclose(func: GuardFunctionWithHandle);
    /**
     * @description Return instance of modal component
     * */
    get instance(): import("./types").ModalComponentInterface;
    /**
     * @description Event handler
     * */
    on(eventName: string, callback: (data?: any) => any): void;
}
export {};
