import {createRouter, RouterView, createMemoryHistory} from "vue-router"

import useModalRouter from "../../plugin/routerIntegration";
import Modal from "./Modal.vue";

const routes = [
    {
        path: "/",
        component: RouterView
    },
    {
        path: "/users/:id",
        component: useModalRouter(Modal)
    }
]

const router =  createRouter({
    routes,
    history: createMemoryHistory()
})

useModalRouter.init(router);

export default router