/**
 * 18.02.2022
 * Интеграция с vue-router.
 *
 * Основной принцип работы: ма создаём обёртку над модальным окном, которую отда
 * ём в Route. Сама по себе обёртка ничего не рисует и её setup:() => () => null
 * Но в момент рендеринга(mount) вызывается открытие модального окна.
 *
 * Если мы перешли на Route, которое интегрируемо с модальным окном - открытие
 * модального окна на 100% возможно и этому ничего не может препядствовать.
 *
 * Пример: мы открыли модлаьное окно в котором стоит hook, который запрещает его
 * закрытие в данный момент, если попытаться перейти на маршрут на котором откры
 * вается модальное окно - мы получим ошибку.
 *
 * Для интеграции с VueRouter предоставляется функция useModalRouter, которая яв
 * ляется обёрткой над обычной vue component.
 *
 * useModalRouter.init - функция, которая принимает массив router и сохраняет
 * его в хранилище для последующего взаимодействия.
 *
 * Для чего неоходимо передать router? Т.к. мы не имеем доступ к текущему Route
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
import { Router } from "vue-router";
import Modal from "../utils/Modal";
/**
 * @description Wrap for ModalComponent
 * @param {Object} component
 * */
declare function useModalRouter(component: any): {
    getModalObject: () => Modal | null;
    /**
     Флаг, использующийся для определения того, что данная компонента -
     обёртка модального окна
     */
    _isModal: boolean;
    close(v?: boolean): Promise<void>;
    initialize: () => Promise<void>;
    /**
     * Мнимая обёртка. Для того, чтобы рендеринг запускался.
     * -----
     * (19.02.2022)
     * Try to change null to RouterView, using this way we can use children
     * in router configuration.
     * */
    setup: () => () => null;
};
declare namespace useModalRouter {
    var init: (router: Router) => void;
}
export default useModalRouter;
