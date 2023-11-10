/**
 * last change: 13.08.2022
 * */

import {configuration} from "./state";
import getCurrentModal from "../methods/getCurrentModal";
import closeById from "../methods/closeById";
import NamespaceStore from "./NamespaceStore";

/**
 * @description Function run when ModalContainer was mounted in user's interface.
 * Set the key 'initialized' to true and handle the 'keyup' event.
 * */
export default function initialize(namespace = NamespaceStore.DEFAULT_NAMESPACE){

    const namespaceState = NamespaceStore.instance.getByName(namespace);
    namespaceState.initialized = true;

    if (namespace !== NamespaceStore.DEFAULT_NAMESPACE) return;

    document.addEventListener("keyup", e => {
        // Closing the last modal window when user pressed Escape
        if (configuration.escClose && (e.key === "Escape" || e.code === "Escape")) {
            const modal = getCurrentModal(namespace);
            if (!modal) return;
            /**
             * Моя Дорогая Анна, с Любовью, твой Евгений!.
             * */
            closeById(modal.id, {esc: true}).catch(() => {})
        }
    })
}
