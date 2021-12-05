import {runGuardQueue} from "../utils/guards";
import {modalQueue} from "../utils/state";
import Modal, {ModalPublicInterface} from "../utils/Modal";

/**
 * @description Try to close all modals windows. Throw error if some modal has onClose hook with returned false value.
 * */
export default function closeModal():Promise<void>{
    return runGuardQueue(modalQueue.value.map((modalObject:ModalPublicInterface) => () => modalObject.close()))
}
