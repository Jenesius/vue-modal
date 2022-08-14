import {createRouter, createWebHashHistory} from "vue-router"
import WidgetTest from './widget-test.vue';
import useModalRouter from "../../plugin/routerIntegration";
import Modal from "./Modal.vue";

const routes = [
	{
		path: "/",
		component: WidgetTest
	},
	{
		path: "/modal",
		component: useModalRouter(Modal)
	}
]

const router =  createRouter({
	routes,
	history: createWebHashHistory()
})

useModalRouter.init(router);

export default router