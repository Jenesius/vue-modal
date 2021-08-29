import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import {config} from "../../../../plugin";

config({
	animation: "fade"
})

createApp(App).use(router).mount('#app')
