import {modalQueue} from "../utils/state";

/**
 * @description Try to close the last opened modal window.
 * */
export default function popModal():Promise<void>{
    if (modalQueue.value.length === 0) return Promise.resolve();

    const lastModal = modalQueue.value[modalQueue.value.length - 1];
    return lastModal.close();
}