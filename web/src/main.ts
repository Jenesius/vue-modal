import {computed, createApp} from "vue"
import App from "./App.vue";
import {config, getCurrentModal, closeById, openModal} from "../../plugin";
import ModalConfirm from "./../../examples/pretty-modal/modals/modal-confirm.vue"


document.addEventListener("keyup", e => {
	if (e.key === "Escape" || e.code === "Escape") {
		const modal = getCurrentModal();
		if (!modal) return;
		if (modal.isRoute) return;

		closeById(modal.id, {esc: true})
	}
})



createApp(App)
.mount("#app")