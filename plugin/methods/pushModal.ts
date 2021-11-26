
import _addModal from "./addModal";
/**
 * @description Method push modal to queue. Using this method you can open multiple windows. For closing use popModal
 * */
export default function pushModal(component: any, props:any = {}) {
    return _addModal(component, props);
}