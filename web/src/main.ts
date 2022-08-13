import {createApp} from "vue"
import App from "./App.vue";
import {config} from "../../plugin/utils/config";

config({
	escClose: false
})

createApp(App).mount("#app")