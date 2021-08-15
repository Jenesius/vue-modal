const codeIntegration =
`import { createWebHistory, createRouter} from "vue-router";
import {useRouterModal} from "jenesius-vue-modal";

const routes = [...];
const router = createRouter({
    history: createWebHistory(), //or any other
    routes,
});

useRouterModal.init(router);`;

const codeModalNavigation =
`import Modal from "Modal.vue"

const routes = [
	{
		path: "/any-route",
		component: useRouterModal(Modal)
	}
]`;

const codeComponentWithRoute =
`//user/5
{
	props: {
		id: String
	}
}`;


export {
	codeIntegration,
	codeModalNavigation,
	codeComponentWithRoute
}