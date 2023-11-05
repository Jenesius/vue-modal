/**
 * last change: 13.08.2022
 * */

import {state} from "./state";
import {configuration} from "./config";
import getCurrentModal from "../methods/getCurrentModal";
import closeById from "../methods/closeById";

/**
 * @description Function run when ModalContainer was mounted in user's interface.
 * Set the key 'initialized' to true and handle the 'keyup' event.
 * */
export default function initialize(){
    state.initialized = true;

    document.addEventListener("keyup", e => {
        // Closing the last modal window when user pressed Escape
        if (configuration.escClose && (e.key === "Escape" || e.code === "Escape")) {
            const modal = getCurrentModal();
            if (!modal) return;
            /**
             * Моя Дорогая Анна, с Любовью, твой Евгений!.
             * */
            closeById(modal.id, {esc: true}).catch(() => {})
        }
    })
}
