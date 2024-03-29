/**
 * 18.02.2022
 * Интеграция с vue-router.
 *
 * Основной принцип работы: ма создаём обёртку над модальным окном, которую
 * отдаём в Route. Сама по себе обёртка ничего не рисует и её setup:() => () => null
 * Но в момент рендеринга(mount) вызывается открытие модального окна.
 *
 * Если мы перешли на Route, которое интегрируемо с модальным окном - открытие
 * модального окна на 100% возможно и этому ничего не может препятствовать.
 *
 * Пример: мы открыли модальное окно, hook которого запрещает его
 * закрытие в данный момент. Если попытаться перейти на маршрут на котором
 * открывается модальное окно - мы получим ошибку.
 *
 * Для интеграции с VueRouter предоставляется функция useModalRouter, которая
 * является обёрткой над обычной vue component.
 *
 * useModalRouter.init - функция, которая принимает массив router и сохраняет
 * его в хранилище для последующего взаимодействия.
 *
 * Для чего необходимо передать router? Т.к. мы не имеем доступ к текущему Route
 * и функции back
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * HOW IS WORK * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 * 1. We add hook route.afterEach in useModalRoute to handle each route.
 * 2. [In afterEach] Opening modal window if current route is integrated route
 * with modal.
 *
 * AfterEach:
 *
 * |------------|                                                 NO
 * |currentRoute| -> is integrated route with modal's system?    ---> default
 * |------------|                       |
 * 										|
 * 										↓
 * 						Running modalRoute.initialize()
 *
 * 1. Provide Computed props from route.params to Modal
 * 2. Add handler for onclose: () => router.back()
 *
 * Before leaving the route we check for opening modal's window. If there is one
 * we try to close it. In case fail we don't leave to other route and modal
 * continues to be open.
 *
 *
 * */

import openModal from "../methods/openModal";
import {computed} from "vue";
import {RouteLocationNormalized, Router, RouteComponent} from "vue-router";
import Modal from "../utils/Modal";
import ModalError from "../utils/ModalError";

interface ModalRouterInterface {
	initialize(): Promise<void>,
	_isModal: boolean,
	getModalObject():Modal,
	close(v: boolean):Promise<void>
}
interface ModalRouterStateInterface{
	router: Router | null
}

const state:ModalRouterStateInterface = {
	router: null
}


function init(router: Router){
	if (state.router) throw ModalError.DuplicatedRouterIntegration();

	state.router = router;
	/**
	 * @description Функция для поиска объекта, который интегрирован с модальным
	 * окном. Если среди matched routes и их находится компонента, которая
	 * является обёрткой(ModalRoute - возвращаемая useModalRoute), то поиск
	 * прекратится и вернуться ссылка на данный объект. Иначе null.
	 *
	 * @Return ModalRoute | null
	 * */
	function findModal(routerLocation: RouteLocationNormalized): ModalRouterInterface | null{

		for(let i = routerLocation.matched.length - 1; i >=0; i--) {
			const components = routerLocation.matched[i].components;
			/**
			 * Problem:
			 * Object.values(components)
			 * return (RouteComponent | ModalRouterInterface)[]
			 *
			 * How to do it in TypeScript
			 * */
			// @ts-ignore
			const a:ModalRouterInterface | null = Object.values(components).find((route: RouteComponent) => route._isModal);

			if (a) return a;
		}
		return null;
	}

	/**
	 * @description Hook only for closing #1
	 * */
	router.beforeEach(async (to:RouteLocationNormalized, from:RouteLocationNormalized) => {
		try {
			const modalRoute = findModal(from);
			if (modalRoute && !modalRoute.getModalObject()?.closed?.value) await modalRoute.close(true);
		} catch (e){
			return false;
		}
	})

	/**
	 * @description Hook for opening modal #2
	 * */
	router.afterEach(async (to:any) => {
		const modal:ModalRouterInterface | null = findModal(to);
		if (modal) await modal.initialize()
	})

}

/**
 * @description Wrap for ModalComponent
 * @param {Object} component
 * */
function useModalRouter(component: any){

	//Ссылка на modalObject
	let modal: Modal | null			= null;

	/**
	 * isNavigationClosingGuard используется в качестве реле при закрытии
	 * модального окна. Т.к. мы подписываемся на закрытии модального окна и вызываем
	 * переход на шаг назад в router, мы можем перейти сразу на два шага назад:
	 * При управляемом переходе(при нажатии на предыдущую страницу, кнопку назад)
	 * происходит сперва обычный переход на предыдущий route, а затем ещё один
	 * переход назад: в onclose модального окна.
	 *
	 * Именно по этому, в onclose стоит проверка на isNavigationClosingGuard, а
	 * в обработчике #1 передаётся true, указывающее на то, что при закрытии
	 * модального кона не надо возвращаться на шаг назад в route.
	 * */
	let isNavigationClosingGuard	= false;

	async function initialize(): Promise<void>{

		if (!state.router) throw ModalError.ModalRouterIntegrationNotInitialized();

		isNavigationClosingGuard = false;
		modal = null;

		modal = await openModal(component, computed(() => state.router?.currentRoute.value.params), { isRoute: true });
		modal.onclose = () => {
			if (!isNavigationClosingGuard) state.router?.back();
		};
	}

	return{
		getModalObject: () => modal,
		/**
		 Флаг, использующийся для определения того, что данная компонента -
		 обёртка модального окна
		 */
		_isModal: true,

		async close(v = false){
			isNavigationClosingGuard = v;

			if (modal) return await modal.close()
		},
		initialize,
		/**
		 * Мнимая обёртка. Для того, чтобы рендеринг запускался.
		 * -----
		 * (19.02.2022)
		 * Try to change null to RouterView, using this way we can use children
		 * in router configuration.
		 * */
		setup: () => () => null
	};
}

useModalRouter.init = init;

export default useModalRouter;
