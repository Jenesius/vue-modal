/**
 * last change: 25.11.2021
 * */

import {ref, watch} from "vue";
import guards from "./guards";
import {configuration} from "./config";
import Modal from "./Modal";

const modalQueue = ref<Array<Modal>>([]); //All modals that showing now

const state = {
    initialized: false,
}

watch(modalQueue.value, () => {

    if (!configuration.scrollLock) return;

    try {
        if (modalQueue.value.length) document.body.style.overflowY = "hidden";
        else document.body.style.overflowY = "auto";
    } catch (e) {}
})

export {
    modalQueue,
    guards,
    state
}
