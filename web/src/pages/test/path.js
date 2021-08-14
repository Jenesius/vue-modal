/*eslint-disable*/
import {openModal} from "../../../../plugin";
import {computed} from "vue";

const state = {
	router: null
}

function useRouterModal(router){
	if (state.router) return console.warn("useRouterModal should escaped only once.");
	state.router = router;

	router.beforeEach(async (to, from, next) => {

		function findModal(routerLocation){

			if (!routerLocation.matched.length) return null;

			for(let i = routerLocation.matched.length - 1; i >=0; i--) {

				let components = routerLocation.matched[i].components;
				let a = Object.values(components).find(route => route._isModal);

				if (a) return a;
			}

			return null;

		}

		try {
			const modal = findModal(from);
			if (modal) await modal.close(true);
		} catch (e){}

		next(true);
	})
}

useRouterModal.add = function(component){
	let modalObject = null;
	let isNavigationClosingGuard = false;


	function initialize(){
		isNavigationClosingGuard = false;
		modalObject = null;

		openModal(component, computed(() => state.router.currentRoute.value.params))
		.then(c => {
			modalObject = c;
			modalObject.onclose = () => {
				if (!isNavigationClosingGuard) state.router.back();
			};
		})
	}

	return{
		_isModal: true,

		async close(v = false){
			isNavigationClosingGuard = v;

			return await modalObject.close()
		},
		beforeRouteUpdate(){
			initialize()
		},
		setup(){
			initialize();
			return () => null
		},
	};
}

export default useRouterModal;