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
import {ModalComponentInterface} from "./types";
import NamespaceStore from "./NamespaceStore";

export default (function stateModule() {

    const namespaceStore = new NamespaceStore();
    const instanceStore: InstancesStorageInterface = {}
    const configuration: ConfigInterface = {
        scrollLock: true,           // Disable scrolling in time when modal is open.
        animation: "modal-list",    // Animation name for transition-group.
        backgroundClose: true,      // Closing on click back area of modal.
        escClose: true,             // Closing on press ESC key
        store: {}
    }


    // Default queue.
    const modalQueue = getQueueByNamespace()
    /**
     * @description The function returns a reactive array of modal windows. The array will be created if it does not
     * exist for the passed namespace to the store.
     *
     * @param {String} namespace - name of  namespace. Default value: "default"
     */
    function getQueueByNamespace(namespace: string = "default") {
        return namespaceStore.getByName(namespace).queue;
    }
    function saveInstance(id:number, instance: ModalComponentInterface) {
        instanceStore[id] = instance;
    }
    function getInstance(id : number){
        return instanceStore[id];
    }
    function deleteInstance(id: number) {
        delete instanceStore[id];
    }

    watch(() => modalQueue.value, () => {

        if (!configuration.scrollLock) return;

        if (modalQueue.value.length) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    }, {deep: true})

    return {
        getQueueByNamespace,
        modalQueue,
        saveInstance,
        getInstance,
        deleteInstance,
        configuration,
        getNamespace: (name?: string) => namespaceStore.getByName(name)
    }
})()

export interface ConfigInterface{
    scrollLock: boolean,
    animation : string,
    backgroundClose : boolean,
    escClose   : boolean,
    store: Record<string, Component>
}




interface InstancesStorageInterface{
    [index: number]: ModalComponentInterface
}
