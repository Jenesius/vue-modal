import {modalQueue} from "../utils/state";
import closeModal from "./closeModal";
import pushModal from "./pushModal";
import Modal, {ModalOptions} from "../utils/Modal";
import ModalError from "../utils/ModalError";
import {Component, UnwrapRef, ExtractPropTypes} from "vue";

/**
 * @description OpenModal that was provided as component.
 * Before opening try to close all previous modals.
 * @param {Object} component Any Vue component
 * @param {Object} props Props that will be passed to the component
 * @param {Object} options Params for Modal. Like backgroundClose and other
 *
 * @return {Promise<Modal>} ModalObject
 */
type PartialModalOptions = Partial<ModalOptions>;

type SimpleComponent<T = {}> = Component &  {
    props?: T,
}

export default function openModal<P extends SimpleComponent>(component: P, props: ExtractPropTypes<P["props"]> | UnwrapRef<P["props"]> | UnwrapRef<any> = {}, options: PartialModalOptions = {}):Promise<Modal>
{
    return closeModal()
   .then(() => {
       if (modalQueue.value.length) throw ModalError.QueueNoEmpty();
   })
    .then(() => pushModal(component, props, options))
}