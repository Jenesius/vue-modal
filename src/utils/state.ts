/**
 * last change: 25.11.2021
 *
 * STATE ПРЕДНАЗНАЧЕН ДЛЯ ВНУТРЕННЕГО ХРАНИЛИЩА ДАННЫХ
 * НЕПУТАТЬ С КОНФИГУРАЦИЕЙ, ЕЁ ЗАДАЁТ ПОЛЬЗОВАТЕЛЬ
 *
 * initialized - параметра принимает true, когда приложение было проинициализировано, то есть WidgetModalContainer
 * был добавлен на страницу
 *
 * */

import {Component, watch} from "vue";
import NamespaceStore, {INamespaceKey} from "./NamespaceStore";

const modalState = (function () {

    const namespaceStore = new NamespaceStore();
    const configuration: ConfigInterface = {
        scrollLock: true,           // Disable scrolling in time when modal is open.
        animation: "modal-list",    // Animation name for transition-group.
        backgroundClose: true,      // Closing on click back area of modal.
        escClose: true,             // Closing on press ESC key
        store: {},
        skipInitCheck: false,
        draggable: false,
        appear: true,
        singleShow: false,
        beforeEach: () => {}
    }

    // Default queue.
    const modalQueue = namespaceStore.getByName().queue;

    watch(() => modalQueue, () => {

        if (!configuration.scrollLock) return;

        if (modalQueue.length) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    }, {deep: true})

    return {
        namespaceStore,
        configuration,
    }
})()

/**
 * @description Метод для получения Namespace.
 * */
export function getNamespace(name?: INamespaceKey) {
    return modalState.namespaceStore.getByName(name);
}


export const configuration = modalState.configuration;

export interface ConfigInterface{
    /**
     * @description Disable scrolling in time when modal is open.
     * */
    scrollLock: boolean,
    /**
     * @description Animation name for transition-group.
     * */
    animation : string,
    /**
     * @description Closing on click back area of modal.
     * */
    backgroundClose : boolean,
    /**
     * @description Closing on press ESC key
     * */
    escClose   : boolean,
    /**
     * @description Disable throwing the error when the container has not been initialized.
     * */
    skipInitCheck: boolean,
    /**
     * @description If set to true, all modal windows will be draggable. If a string is set, then this string will be
     * used as the name of the css class by default for all modular windows. Which will be used to move the window.
     */
    draggable: boolean | string,
    /**
     * @description TransitionGroup appear prop. For more details https://vuejs.org/guide/built-ins/transition.html#transition-on-appear
     */
    appear: boolean,
    /**
     * @description A hook that will fire before opening each modal window. In this hook, you can cancel closing by
     * passing the value false.
     */
    beforeEach: () => any,
    /**
     * @description If the value is set to true, then only one modal window will be shown. If several are opened
     * (using pushModal), only the last one will be shown, and the rest will be hidden using `v-show`.
     */
    singleShow: boolean,
    store: Record<string, Component>
}

