import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import {config} from "../../../../plugin";

config({

})

createApp(App).use(router).mount('#app')
