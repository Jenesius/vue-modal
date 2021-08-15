import { createWebHistory, createRouter, RouterView} from "vue-router";

import ViewDefaultDocumentation from "../view/ViewDefaultDocumentation";
import ViewUserList from "../view/ViewUserList";
import ModalUser from "../components/modal/ModalUser";
import {useModalRouter} from "./../../../../../plugin";


const routes = [
    {
        path: "/installation",
        component: ViewDefaultDocumentation
    },
    {
        path: "/methods",
        component: ViewDefaultDocumentation
    },
    {
        path: "/navigation-guards",
        component: ViewDefaultDocumentation
    },
    {
        path: "/details",
        component: ViewDefaultDocumentation
    },
    {
        path: "/best-practices",
        component: ViewDefaultDocumentation
    },
    {
        path: "/integration-vue-router",
        component: ViewDefaultDocumentation
    },
    {
        path: "/example",
        component: RouterView,
        children: [
            {
                path: "user-list",
                name: "ExampleUserList",
                component: ViewUserList,
                children : [
                    {
                        path: ":id",
                        name: "UserProfile",
                        components: {
                            modal: useModalRouter(ModalUser)
                        }
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        redirect: "/installation"
    },
    {
        path: '/:pathMatch(.*)*', redirect: "/installation"
    }
];

const router = createRouter({
    history: createWebHistory("/docs.html"),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
});

useModalRouter.init(router);

export default router;