/*eslint-disable*/
import {createRouter, createWebHistory, useRoute} from "vue-router";

import {defineComponent} from "vue";

import ViewA from "../components/ViewA";
import ViewB from "../components/ViewB";
import ViewC from "../components/ViewC";
import ViewD from "../components/ViewD";
import Modal from "../Modal";
import {openModal} from "../../../../../plugin";


/**
 * Maybe try to update to functional component
 * https://v3.vuejs.org/guide/migration/functional-components.html#single-file-components-sfcs
 *
 * */

function useRouterModal(component = null) {


    let isOpened = false;
    let modalObject = null;
    let isNavigationClosingGuard = false;

    return {
        _isModal: true,

        async close(v = false){
            isNavigationClosingGuard = v;

            console.log("Methods close", isNavigationClosingGuard);

            return await modalObject.close()
        },

        setup(){

            if (isOpened) return () => null;

            const route = useRoute();

            console.log("INIT");
            isOpened = true;
            isNavigationClosingGuard = false;
            modalObject = null;

            openModal(component, route.params)
            .then(c => {
                modalObject = c;
                modalObject.onclose = () => {
                    console.log("Modal of router was closed.", modalObject, isNavigationClosingGuard);

                    isOpened = false;

                    if (!isNavigationClosingGuard) router.back();

                };
            })


            return () => null
        },
        /*
        data: () => ({
            modalObject: null,
            _isNavigationClosingGuard: false,
        }),
        template: `<p>Her</p>`,






        async init(){

            this.

            this.modalObject.onclose = () => {
                console.log("Modal of router was closed.", this.methods.getNavigationStatus());

                if (!this.methods.getNavigationStatus()) router.back();

            };

            this.methods.setModal(this.modalObject);

        },

        close(v){
            return this.methods.close(v);
        },
        methods: {
            setModal(v){
                this.modalObject = v;
            },

            setNavigationStatus(){
                return this._isNavigationClosingGuard;
            },
            getNavigationStatus(){
                return this._isNavigationClosingGuard;
            },
            close(isRouterGuard = false){
                this._isNavigationClosingGuard = isRouterGuard

                console.log("Methods close", this._isNavigationClosingGuard);

                return this.modalObject.close()
            }
        }*/
    };


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
        path: "/user-list/:id",
        components: {
            test: useRouterModal(Modal)
        },
    },
    {
        path: "/user-list",
        components: ViewA,
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


    function findModal(routerLocation){

        if (!routerLocation.matched.length) return null;

        const matchComponents = routerLocation.matched[0].components;
        return Object.values(matchComponents).find(route => route._isModal);
    }


    try {


        const modal = findModal(from);
        if (modal) {
            console.log("Modal FROM was founded.", modal);

            await modal.close(true);

        }

        /*
        if (from.matched.length && from.matched[0].components.test && from.matched[0].components.test._isModal) {
            await from.matched[0].components.test.methods.close(true);
        }*/


    } catch (e){
        console.warn(e, from, to);
    }


    try {

        const modal = findModal(to);
        if (modal) {
            console.log("Modal TO was founded.", modal);
            modal.setup();
        }

    } catch (e) {
        console.warn(e);
    }

    next(true);

})

export default router;