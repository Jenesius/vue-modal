
import _addModal from "./addModal";
import Modal, {ModalOptions} from "../utils/Modal";
/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
export default function pushModal(component: any, props:any = {}, options: ModalOptions = {}):Promise<Modal> {
    return Promise.resolve().then(() => _addModal(component, props, options));
}
