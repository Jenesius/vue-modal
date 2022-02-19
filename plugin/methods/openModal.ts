import {modalQueue} from "../utils/state";
import closeModal from "./closeModal";
import pushModal from "./pushModal";
import Modal from "../utils/Modal";
import ModalError from "../utils/ModalError";

/**
 * @description OpenModal that was provided as component.
 * Before opening try to close all previous modals.
 * @param {Object} component Any Vue component
 * @param {Object} props Props that will be passed to the component
 *
 * @return {Promise<Modal>} ModalObject
 * */
export default function openModal(component:any, props:any = {}):Promise<Modal>{
    return closeModal()
   .then(() => {
       if (modalQueue.value.length) throw ModalError.QueueNoEmpty();
   })
    .then(() => pushModal(component, props))
}
