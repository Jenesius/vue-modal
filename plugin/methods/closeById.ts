import {guards, modalQueue, state} from "../utils/state";
import ModalError from "../utils/ModalError";
import {guardToPromiseFn, runGuardQueue} from "../utils/guards";
import Modal from "../utils/Modal";
import {GuardFunction} from "../utils/types";

/**
 * @description Закрывает модальное окно по идентификатору
 * ЕСЛИ МОДАЛЬНОЕ ОКНО БЫЛО НЕ НАХОДИТСЯ В АКТИВНЫХ ИНСТАНСАХ - ОШИБКА
 * */
export default function closeById(id:number) {

    const indexRemoveElement: number
        = modalQueue.value.findIndex((item:Modal) => item.id === id);

    //Modal with id not found
    if (indexRemoveElement === -1)
        return Promise.reject(ModalError.Undefined(id));

    const arr =
        guards.get(id, "close")
        .map((guard:GuardFunction) => guardToPromiseFn(guard, id));

    return runGuardQueue(arr)
        .then(() => {
            modalQueue.value.splice(indexRemoveElement, 1);

            delete state.instanceStorage[id];
            guards.delete(id)
        })
}
