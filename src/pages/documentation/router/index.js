import { createWebHistory, createRouter} from "vue-router";

import ViewDefaultDocumentation from "../view/ViewDefaultDocumentation";


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
        path: "/lifecycle-hooks",
        component: ViewDefaultDocumentation
    },
    {
        path: "/details",
        component: ViewDefaultDocumentation
    },
    {
        path: "/best-practices",
        component: ViewDefaultDocumentation
    }
];

const router = createRouter({
    history: createWebHistory("/docs/"),
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

export default router;