import {useVocabulary} from "../../../assets/js/Vocabulary";

const codeIntegration =
`import { createWebHistory, createRouter} from "vue-router";
import {useModalRouter} from "jenesius-vue-modal";

const routes = [...];
const router = createRouter({
    history: createWebHistory(), //${useVocabulary.orAnyOther}
    routes,
});

useModalRouter.init(router);`;

const codeModalNavigation =
`import Modal from "Modal.vue"

const routes = [
	{
		path: "/any-route",
		component: useModalRouter(Modal)
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