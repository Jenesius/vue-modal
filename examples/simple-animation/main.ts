import {createApp} from "vue"
import App from "./App.vue";
import {config} from "../../src/utils/config";

config({
	animation: "custom-fade"
})

createApp(App)
.mount("#app")