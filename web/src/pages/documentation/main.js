import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import store from "./store/store";
import {config} from "../../../../plugin";

config({scrollLock: false})

createApp(App)
	.use(router)
	.use(store)
	.mount('#app')
