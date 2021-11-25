import closeModal from "./methods/closeModal";
import popModal from "./methods/popModal";
import pushModal from "./methods/pushModal";
import openModal from "./methods/openModal";
import {modalQueue} from "./utils/state";
import {config} from "./utils/config";
import onBeforeModalClose from "./hooks/onBeforeModalClose";
import WidgetModalContainer from "./components/WidgetModalContainer.vue";
import useModalRouter from "./routerIntegration"
export {
    closeModal,
    popModal,
    pushModal,
    openModal,
    modalQueue,
    config,
    WidgetModalContainer as container,
    onBeforeModalClose,
    useModalRouter
}
