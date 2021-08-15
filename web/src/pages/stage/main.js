import { createApp } from 'vue';
import App from './App.vue';
import {config} from "../../../../plugin";


config({
	scrollLock: false
})

createApp(App).mount('#app')
