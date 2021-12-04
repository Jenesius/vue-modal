/**
 * ИНТЕГРАЦИЯ VUE-ROUTER С JENESIUS-VUE-MODAL
 * ОСНОВНОЙ ПРИНЦЫП РАБОТЫ: МЫ ДАЁМ ОБРЁТКУ НАД МОДАЛЬНЫМ ОКНОМ, КОТОРУЮ ЗАПУМКАЕМ В ROUTE
 * САМА ПО СЕБЕ ОБЁРТКА НИЧЕГО НЕ РИСУЕТ, И ЕЁ SETUP: () => () => NULL
 * НО ПРИ ПОПЫТКЕ ОТРИСОВАТЬ ЕЁ, ВЫЗЫВАЕТСЯ ОТКРЫТИЕ ОКНА
 *
 * ЕСЛИ МЫ УЖЕ ПЕРЕШЛИ НА РОУТ, ТО ОКНО 100% ПОЖНО ОТРИСОВАТЬ И МЫ ЭТО ДЕЛАЕМ
 * В ПРОТИВНОМ СЛУЧАЕ, ПЕРЕЙТИ НА РОУТ НЕТ ВОЗМОЖНОСТИ.
 * ПРИМЕР: МЫ ОТКРЫЛИ МОДАЛЬНОЕ ОКНО, В КОТОРОМ СТОИТ ХУК, КОТОРЫЙ ЗАПРЕЩАЕТ ЕГО ЗАКРЫТИЕ
 * В ДАННЫЙ МОМЕНТ, ЕСЛИ ПОПЫТАТЬСЯ ПЕРЕЙТИ НА МАРШРУТ НА КОТОРОМ ОТКРЫВАЕТСЯ МОДАЛЬНОЕ ОКНО МЫ ПОЛУЧИМ ОШИБКУ
 *
 * ПРЕДОСТАВЛЯЕТСЯ ФУНКЦИЯ useModalRouter, которая является обёрткой над обычной vue компонентой
 * useModalRouter.init функция, которая принимает массив router
 * передавать router необходимо, поскольку так мы не имеет доступ к текущему роуту и функции back
 *
 * */


import openModal from "../methods/openModal";
import {computed} from "vue";
import {Router} from "vue-router";
import Modal from "../utils/Modal";
import ModalError from "../utils/ModalError";


interface ModalRouterStateInterface{
	router: Router | null
}

interface ModalRouterInterface{
	initialize(): Promise<void>,
	_isModal: boolean,
	getModalObject():Modal,
	close(v: boolean):Promise<void>
}

const state:ModalRouterStateInterface = {
	router: null
}



function init(router: Router){
	if (state.router) return console.warn("useModalRouter should escaped only once.");
	state.router = router;

	/**
	 * Return ModalRouter or null
	 * */
	function findModal(routerLocation: any): ModalRouterInterface | null{

		if (!routerLocation.matched.length) return null;

		for(let i = routerLocation.matched.length - 1; i >=0; i--) {

			const components = routerLocation.matched[i].components;

			// @ts-ignore
			const a:ModalRouterInterface | null = Object.values(components).find(route => route._isModal);

			if (a) return a;
		}

		return null;

	}

	/**
	 * Hook only for closing
	 * */
	router.beforeEach(async (to:any, from:any) => {
		try {
			const modal = findModal(from);
			if (modal && !modal.getModalObject()?.closed?.value) await modal.close(true);
		} catch (e){
			return false;
		}
	})

	/**
	 * Hook for opening modal
	 * */
	router.afterEach(async (to:any) => {
		const modal:ModalRouterInterface | null = findModal(to);
		if (modal) await modal.initialize()
	})

}

function useModalRouter(component: any){
	let modal:any					= null;
	let isNavigationClosingGuard	= false;

	async function initialize(): Promise<void>{

		if (!state.router) throw ModalError.ModalRouterIntegrationNotInitialized();

		isNavigationClosingGuard = false;
		modal = null;

		modal = await openModal(component, computed(() => state.router?.currentRoute.value.params));
		modal.onclose = () => {
			if (!isNavigationClosingGuard) state.router?.back();
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
