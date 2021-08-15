/*eslint-disable*/
import {openModal} from "./index";
import {computed} from "vue";

const state = {
	router: null
}

function init(router){
	if (state.router) return console.warn("useRouterModal should escaped only once.");
	state.router = router;

	/**
	 * Return ModalRouter or null
	 * */
	function findModal(routerLocation){

		if (!routerLocation.matched.length) return null;

		for(let i = routerLocation.matched.length - 1; i >=0; i--) {

			let components = routerLocation.matched[i].components;
			let a = Object.values(components).find(route => route._isModal);

			if (a) return a;
		}

		return null;

	}

	/**
	 * Hook only for closing
	 * */
	router.beforeEach(async (to, from) => {
		try {
			const modal = findModal(from);
			if (modal && !modal.getModalObject()?.closed?.value) await modal.close(true);
		} catch (e){
			console.log("Modal not closed. Error:", e);
			return false;
		}
	})

	/**
	 * Hook for opening modal
	 * */
	router.afterEach(async to => {
		const modal = findModal(to);
		if (modal) await modal.initialize()
	})

}
function useModalRouter(component){
	let modal					= null;
	let isNavigationClosingGuard	= false;

	async function initialize(){
		isNavigationClosingGuard = false;
		modal = null;

		modal = await openModal(component, computed(() => state.router.currentRoute.value.params));
		modal.onclose = () => {
			if (!isNavigationClosingGuard) state.router.back();
		};
	}

	return{
		getModalObject: () => modal,
		_isModal: true,

		async close(v = false){
			isNavigationClosingGuard = v;

			if (modal) return await modal.close()
		},
		initialize,
		setup: () => () => null
	};
}

useModalRouter.init = init;

export default useModalRouter;