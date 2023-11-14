import {createRouter, RouterView, createWebHistory} from "vue-router"
import FlowersList from "./components/FlowersList.vue"
import useModalRouter from "../../src/routerIntegration";
import Modal from "./components/modals/Modal.vue";
import FlowersModal from "./components/modals/FlowersModal.vue";
import UserList from "./components/UserList.vue"

const routes = [

    {
        path: "/users",
        component: UserList,
        children: [
            {
                path: "/users/:id",
                component: useModalRouter(Modal)
            }
        ]
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