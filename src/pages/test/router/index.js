import { createWebHistory, createRouter} from "vue-router";
import ViewA from "../components/ViewA";
import ViewB from "../components/ViewB";
import ViewC from "../components/ViewC";
import ViewD from "../components/ViewD";

const routes = [
    {
        path: "/a",
        component: ViewA
    },
    {
        path: "/b",
        component: ViewB
    },
    {
        path: "/c",
        component: ViewC
    },
    {
        path: "/d",
        component: ViewD
    },
    {
        path: '/:pathMatch(.*)*', redirect: "/a"
    }

];

const router = createRouter({
    history: createWebHistory("/test.html"),
    routes,
});

export default router;