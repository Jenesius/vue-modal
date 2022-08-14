import {modalQueue, state} from "../utils/state";
import ModalError from "../utils/ModalError";
import {guardToPromiseFn, runGuardQueue} from "../utils/guards";
import Modal from "../utils/Modal";
import {GuardFunction} from "../utils/types";
import guards from "../utils/guards"
import {DtoEventClose, IEventClose} from "../utils/event-close";

/**
 * @description Closing modal window by id. Only this method allows you to change the properties of the event-close.
 * */
export default function closeById(id:number, options: Partial<IEventClose> = {}) {

    const indexRemoveElement: number
        = modalQueue.value.findIndex((item:Modal) => item.id === id);

    //Modal with id not found
    if (indexRemoveElement === -1)
        return Promise.reject(ModalError.Undefined(id));

    const arr =
        guards.get(id, "close")
        .map((guard:GuardFunction) => guardToPromiseFn(guard, id, DtoEventClose(options)));

    return runGuardQueue(arr)
        .then(() => {
            modalQueue.value.splice(indexRemoveElement, 1);

            delete state.instanceStorage[id];
            guards.delete(id)
        })
}
