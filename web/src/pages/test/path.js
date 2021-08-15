/*eslint-disable*/
import {openModal} from "../../../../plugin";
import {computed} from "vue";

const state = {
	router: null
}

function useRouterModal(router){
	if (state.router) return console.warn("useRouterModal should escaped only once.");
	state.router = router;

	router.beforeEach(async (to, from) => {

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

			if (modal && modal.getModalObject())
			console.log("Closing modal:", modal?.getModalObject?.()?.id, from.path);

			//Router with ModalRouter was founded
			if (modal ) {

				if (modal.getModalObject()?.closed?.value === true) return;


				console.log("Closing modal windows in beforeEach");
				await modal.close(true);
				console.log("Modal was closed.");
			}
		} catch (e){

			console.log("Modal not closed. Error:", e);

			return false;
		}

		return true;
	})
}

useRouterModal.add = function(component){
	let modalObject = null;
	let isNavigationClosingGuard = false;


	async function initialize(){
		isNavigationClosingGuard = false;
		modalObject = null;

		console.log("Initialize useRouterModal:", state.router.currentRoute.value.path);

		await openModal(component, computed(() => state.router.currentRoute.value.params))
		.then(c => {

			modalObject = c;
			console.log("New modalObject. Id: ", modalObject?.id, "Path:", state.router.currentRoute.value.path);

			if (modalObject !== null)

			modalObject.onclose = () => {



				if (!isNavigationClosingGuard) state.router.back();
			};
		})
	}

	return{
		getModalObject: () => modalObject,
		_isModal: true,

		async close(v = false){
			isNavigationClosingGuard = v;

			if (modalObject) return await modalObject.close()
		},
		async beforeRouteUpdate(){
			await initialize()
		},
		async beforeRouteEnter(){
			await initialize();
		},
		setup(){
			return () => null
		},
	};
}

export default useRouterModal;