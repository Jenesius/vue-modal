import {createRouter, RouterView, createWebHistory} from "vue-router"
import FlowersList from "./FlowersList.vue"
import useModalRouter from "../../src/routerIntegration";
import Modal from "./Modal.vue";
import FlowersModal from "./FlowersModal.vue";

const routes = [
    {
        path: "/",
        component: RouterView
    },
    {
        path: "/users/:id",
        component: useModalRouter(Modal)
    },
    {
        path: "/flowers",
        component: FlowersList,
        children: [
            {
                path: ":id",
                component: useModalRouter(FlowersModal)
            }
        ]
    }
]

const router =  createRouter({
    routes,
    history: createWebHistory("/vue-router-with-modal")
})

useModalRouter.init(router);

export default router