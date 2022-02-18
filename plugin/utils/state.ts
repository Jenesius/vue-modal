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

import {ref, shallowRef, watch} from "vue";
import guards from "./guards";
import {configuration} from "./config";
import Modal from "./Modal";
import {ModalComponentInterface} from "./types";

const modalQueue = ref<Modal[]>([]); //All modals that showing now

interface InstancesStorageInterface{
    [index: number]: ModalComponentInterface
}

interface StateInterface {
    initialized: boolean,
    instanceStorage: InstancesStorageInterface
}

const state:StateInterface = {
    initialized: false,
    instanceStorage: {},
}

watch(modalQueue.value, () => {

    if (!configuration.scrollLock) return;

    if (modalQueue.value.length) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
})

export {
    modalQueue,
    guards,
    state
}
