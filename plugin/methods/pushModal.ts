
import _addModal from "./addModal";
import Modal, {ModalOptions} from "../utils/Modal";
import {WrapComponent, WrapComponentProps} from "../types/types";
/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
export default function pushModal<P extends WrapComponent>(component: P, props: WrapComponentProps<P> = {}, options: Partial<ModalOptions> = {}):Promise<Modal> {
    return Promise.resolve().then(() => _addModal(component, props, options));
}
