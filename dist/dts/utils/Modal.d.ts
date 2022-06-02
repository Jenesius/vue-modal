/**
 * last change: 18.02.2022
 * */
import { Component, ComputedRef, Ref } from "vue";
import { GuardFunctionWithHandle } from "./types";
declare type EventCallback = (data?: any) => any;
/**
 * Value can be an EventCallback[]
 * В Будущем можно обновить методы on и emit и сделать так, чтобы они работали
 * с массивом эвентов.
 * */
export interface EventCallbacksStorage {
    [name: string]: EventCallback;
}
export interface ModalOptions {
    backgroundClose?: boolean;
}
export default class Modal {
    /**
     * @description Unique id of each modal window.
     * */
    id: number;
    /**
     * @description Computed value. True - when the modal was closed.
     * */
    closed: ComputedRef;
    /**
     * @description VueComponent that will be mounted like modal.
     * */
    component: Component;
    /**
     * @description Props for VueComponent.
     * */
    props: Ref;
    protected static modalId: number;
    /**
     * @description Storage for events.
     * modal.on(eventName, callback) will makeStorage: {eventName: callback}
     * */
    eventCallbacks: EventCallbacksStorage;
    /**
     * @description Click on the background will close modal windows.
     * */
    backgroundClose: boolean;
    /**
     * Создаёт объект управления модальным окном.
     * Для управления идентификатором используется статическое поле modalId.
     * ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ beforeModalClose параметр, то добавляем его в guards
     *
     * @param {Object} component Any VueComponent that will be used like modal window
     * @param {Object} props Object of input params. Used like props.
     * */
    constructor(component: Component | any, props: any, options: ModalOptions);
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
    on(eventName: string, callback: EventCallback): void;
}
export {};
