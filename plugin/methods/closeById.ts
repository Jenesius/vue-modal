import {guards, modalQueue} from "../utils/state";
import ModalError from "../utils/ModalError";
import {guardToPromiseFn, runGuardQueue} from "../utils/guards";
import {instanceStorage} from "../utils/instances";
import Modal from "../utils/Modal";
import {GuardFunction} from "../utils/types";

/**
 * @description Закрывает модальное окно по идентификатору
 * ЕСЛИ МОДАЛЬНОЕ ОКНО БЫЛО НЕ НАХОДИТСЯ В АКТИВНЫХ ИНСТАНСАХ - ОШИБКА
 * */
export default function closeById(id:number) {

    const indexFoRemove = modalQueue.value.findIndex((item:Modal) => item.id === id);

    if (indexFoRemove === -1) return Promise.reject(ModalError.Undefined(id));    //Modal with id not found

    const arr = guards.get(id, "close").map((guard:GuardFunction) => guardToPromiseFn(guard, id));

    return runGuardQueue(arr)
        .then(() => {
            modalQueue.value.splice(indexFoRemove, 1);

            delete instanceStorage[id];
            guards.delete(id)
        })
}