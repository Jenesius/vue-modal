/**
 * Function close a last modal
 * */
import {modalQueue} from "../utils/state";

export default function popModal(){
    if (modalQueue.value.length === 0) return Promise.resolve();

    let lastModal = modalQueue.value[modalQueue.value.length - 1];
    return lastModal.close();
}