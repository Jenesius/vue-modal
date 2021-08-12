/*eslint-disable*/
import { createWebHistory, createRouter} from "vue-router";
import ViewA from "../components/ViewA";
import ViewB from "../components/ViewB";
import ViewC from "../components/ViewC";
import ViewD from "../components/ViewD";
import Modal from "../Modal";

import {h} from "vue"
import {openModal} from "../../../../../plugin";
function useRouterModal(component = null) {

    const a =  {

        _isModal: true,

        _isNavigationClosingGuard: false,
        name: "est",
        setup(){

            openModal(component)
            .then(modalObject => {
                modalObject.onclose = () => {
                    console.log("Modal of router was closed.")

                    console.log("run BACK")
                    if (!a._isNavigationClosingGuard)
                    router.back();
                };

                a.close = (isRouterGuard = false) => {

                    a._isNavigationClosingGuard = isRouterGuard

                    return modalObject.close()


                }



            })



            console.log("Modal add");

            return () => null
        },
        beforeRouteLeave(){

            console.log("ModalWrapHook");

        }

    }

    return a;

}

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
        path: "/user-list",
        component: useRouterModal(Modal)
    },
    {
        path: '/:pathMatch(.*)*', redirect: "/a"
    }

];

const router = createRouter({
    history: createWebHistory("/test.html"),
    routes,
});


router.beforeEach(async (to, from, next) => {


    console.log("From",from);

    try {

        if (from.matched[0].components.default._isModal) await from.matched[0].components.default.close(true);
    } catch (e){
        console.warn(e);
    }



    next(true);

})

export default router;