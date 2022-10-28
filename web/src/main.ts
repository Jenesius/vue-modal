import {createApp} from "vue"
import App from "./App.vue";
import {config, getCurrentModal, closeById} from "../../plugin";


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