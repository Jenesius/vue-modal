import {createRouter, RouterView, createWebHistory} from "vue-router"

import useModalRouter from "../../src/routerIntegration";
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
    history: createWebHistory("/vue-router-with-modal")
})

useModalRouter.init(router);

export default router