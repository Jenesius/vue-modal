import {runGuardQueue} from "../utils/guards";
import modalState from "../utils/state";
import Modal from "../utils/Modal";
import {IModalCloseOptions} from "../utils/types";
import {DTOModalCloseOptions} from "../utils/dto";

/**
 * @description Try to close all modals windows. Throw error if some modal has onClose hook with returned false value.
 * */
export default function closeModal(options?: Partial<IModalCloseOptions>):Promise<void>{
    options = DTOModalCloseOptions(options);

    return runGuardQueue(modalState.getNamespace(options.namespace).queue.value.map((modalObject:Modal) => () => modalObject.close()))
}
