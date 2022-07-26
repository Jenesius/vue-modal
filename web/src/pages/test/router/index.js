/*eslint-disable*/
import {createRouter, createWebHistory, RouterView} from "vue-router";

import ViewA from "../components/ViewA";
import ViewB from "../components/ViewB";
import ViewC from "../components/ViewC";
import ViewD from "../components/ViewD";
import Modal from "../Modal";


import {useModalRouter} from "./../../../../../plugin";
import ViewUserList from "../ViewUserList";
import Modalguard from "../Modalguard";
import ModalLogin from "../ModalLogin";

/**
 * Maybe try to update to functional component
 * https://v3.vuejs.org/guide/migration/functional-components.html#single-file-components-sfcs
 * */

const routes = [
    {
        path: "/a",
        
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
        path: "/e",
        component: useModalRouter(Modalguard)
    },
    {
        path: "/user-list",
        component: ViewUserList,
        children: [
            {
                path: ":id",
                components: {
                    test: useModalRouter(Modal)
                },
            }
        ]

    },
    {
        path: "/user-list",
        components: ViewA,
    },
    {
        path: "/test-with-out",
        component: RouterView,
        meta: {
            modal: Modal
        }
    },
    {
        path:"/level",
        component: RouterView,
        children: [
            {
                path: "test",
                component: useModalRouter(Modal)
            }
        ]
    },
    {
        path: "/",
        component: {
            template: "<p>Default</p>"
        }
    },
    {
        path: '/:pathMatch(.*)*login',
        component: useModalRouter(ModalLogin)

    },
    {
        path: '/:pathMatch(.*)*', redirect: "/"
    },


];

const router = createRouter({
    history: createWebHistory("/test.html"),
    routes,
});



useModalRouter.init(router);

export default router;
