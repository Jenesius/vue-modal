import moduleState from "../utils/state";
import closeModal from "./closeModal";
import pushModal from "./pushModal";
import Modal, {ModalOptions} from "../utils/Modal";
import ModalError from "../utils/ModalError";
import {WrapComponent} from "../utils/types";

/**
 * @description OpenModal that was provided as component.
 * Before opening try to close all previous modals.
 * @param {Object} component Any Vue component
 * @param {Object} props Props that will be passed to the component
 * @param {Object} options Params for Modal. Like backgroundClose and other
 *
 * @return {Promise<Modal>} ModalObject
 */
export default function openModal< P extends WrapComponent>(component: P | string, props: any = {}, options: Partial<ModalOptions> = {}):Promise<Modal>
{
    return closeModal()
   .then(() => {
       const namespaceState = moduleState.getNamespace(options.namespace);
       if (namespaceState.queue.value.length) throw ModalError.QueueNoEmpty();
   })
    .then(() => pushModal(component, props, options))
}