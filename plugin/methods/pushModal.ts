
import _addModal from "./addModal";
import Modal from "../utils/Modal";
/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
export default function pushModal(component: any, props:any = {}):Modal {
    return _addModal(component, props);
}