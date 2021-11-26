/**
 * Close all modals, if resolved -> open Modal
 *
 * Get: NameOfComponent:VueComponent, params:Object
 *
 * @Return ModalObject
 * */
import {modalQueue} from "../utils/state";
import closeModal from "./closeModal";
import pushModal from "./pushModal";

export default function openModal(component:any, props:any = {}){
    return closeModal()
        .then(() => {
            if (!modalQueue.value.length) return pushModal(component, props)

            return null;
        })
}