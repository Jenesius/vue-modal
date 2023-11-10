import getCurrentModal from "./getCurrentModal";
import {IModalCloseOptions} from "../utils/types";
import {DTOModalCloseOptions} from "../utils/dto";

/**
 * @description Try to close the last opened modal window.
 * */
export default function popModal(options?: Partial<IModalCloseOptions>):Promise<void>{
    options = DTOModalCloseOptions(options);

    const modal = getCurrentModal(options.namespace);
    if (!modal) return Promise.resolve();
    return modal.close();
}