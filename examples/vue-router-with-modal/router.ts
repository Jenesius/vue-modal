import {createRouter, createWebHashHistory, RouterView} from "vue-router"

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
    history: createWebHashHistory()
})

useModalRouter.init(router);

export default router