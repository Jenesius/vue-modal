import closeModal from "./methods/closeModal";
import popModal from "./methods/popModal";
import pushModal from "./methods/pushModal";
import openModal from "./methods/openModal";
import {getNamespace} from "./utils/state";
import {config} from "./utils/config";
import onBeforeModalClose from "./hooks/onBeforeModalClose";
import getCurrentModal from "./methods/getCurrentModal";
import closeById from "./methods/closeById";
import promptModal from "./methods/prompt-modal";
import Modal from "./utils/Modal";
import getComponentFromStore from "./methods/get-component-from-store";
// @ts-ignore
import WidgetModalContainer from "./components/WidgetModalContainer.vue";
import useModalRouter from "./routerIntegration"

const modalQueue = getNamespace().queue;

/**
 * @description The function returns a reactive array of modal windows. The array will be created if it does not
 * exist for the passed namespace to the store.
 *
 * @param {String} namespace - name of  namespace. Default value: "default"
 */
function getQueueByNamespace(namespace?: string) {
    return getNamespace(namespace).queue
}

export {
    WidgetModalContainer as container,
    Modal,
    closeModal,
    popModal,
    pushModal,
    openModal,
    promptModal,
    config,
    modalQueue,
    getQueueByNamespace,
    onBeforeModalClose,
    useModalRouter,
    getCurrentModal,
    closeById,
    getComponentFromStore
}
