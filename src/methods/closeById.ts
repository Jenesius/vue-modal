import modalState from "../utils/state";
import ModalError from "../utils/ModalError";
import {guardToPromiseFn, runGuardQueue} from "../utils/guards";
import Modal from "../utils/Modal";
import {GuardFunction} from "../utils/types";
import guards from "../utils/guards"
import {DTOEventClose, IEventClose} from "../utils/dto";

/**
 * @description Closing modal window by id. Only this method allows you to change the properties of the event-close.
 * */
export default function closeById(id:number, options: Partial<IEventClose> = {}) {
    const namespaceState = modalState.getNamespace(options.namespace);

    const indexRemoveElement: number
        = namespaceState.queue.value.findIndex((item:Modal) => item.id === id);

    //Modal with id not found
    if (indexRemoveElement === -1)
        return Promise.reject(ModalError.Undefined(id));

    const arr =
        guards.get(id, "close")
        .map((guard:GuardFunction) => guardToPromiseFn(guard, id, DTOEventClose(options)));

    return runGuardQueue(arr)
        .then(() => {
            namespaceState.queue.value.splice(indexRemoveElement, 1);

            modalState.deleteInstance(id);
            guards.delete(id)
        })
}
