import {runGuardQueue} from "../utils/guards";
import {modalQueue} from "../utils/state";
import Modal from "../utils/Modal";

export default function closeModal() {
    return runGuardQueue(modalQueue.value.map((modalObject:Modal) => () => modalObject.close()))
}