/**
 * last change: 18.02.2022
 * */

import {state} from "./state";
import popModal from "../methods/popModal";
import {configuration} from "./config";

/**
 * @description Function run when ModalContainer was mounted in user's interface.
 * Set the key 'initialized' to true and handle the 'keyup' event.
 * */
export default function initialize(){
    state.initialized = true;

    document.addEventListener("keyup", e => {

        // Closing the last modal window when user pressed Escape
        if (configuration.escClose && e.key === "Escape" || e.code === "Escape") popModal();

    })
}
