/*eslint-disable*/
import {createRouter, createWebHistory, RouterView} from "vue-router";

import ViewA from "../components/ViewA";
import ViewB from "../components/ViewB";
import ViewC from "../components/ViewC";
import ViewD from "../components/ViewD";
import Modal from "../Modal";


import useRouterModal from "../path";
import ViewUserList from "../ViewUserList";
import Modalguard from "../Modalguard";
import ModalTest from "../../../../../tests/unit/ModalTest";
import ViewLevel from "../ViewLevel";

/**
 * Maybe try to update to functional component
 * https://v3.vuejs.org/guide/migration/functional-components.html#single-file-components-sfcs
 * */

const routes = [
    {
        path: "/a",
        component: ViewA
    },
    {
        path: "/modal-a",
        component: useRouterModal.add(ModalTest)
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
        component: useRouterModal.add(Modalguard)
    },
    {
        path: "/user-list",
        component: ViewUserList,
        children: [
            {
                path: ":id",
                components: {
                    test: useRouterModal.add(Modal)
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
                component: useRouterModal.add(Modal)
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
        path: '/:pathMatch(.*)*', redirect: "/a"
    },


];

const router = createRouter({
    history: createWebHistory("/test.html"),
    routes,
});

useRouterModal(router);

export default router;