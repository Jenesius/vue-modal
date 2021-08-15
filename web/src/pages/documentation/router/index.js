import { createWebHistory, createRouter, RouterView} from "vue-router";

import ViewDefaultDocumentation from "../view/ViewDefaultDocumentation";
import ViewUserList from "../view/ViewUserList";
import ModalUser from "../components/modal/ModalUser";
import useRouterModal from "../../test/path";


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
                            modal: useRouterModal.add(ModalUser)
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

useRouterModal(router);

export default router;