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
import { Router } from "vue-router";
declare function useModalRouter(component: any): {
    getModalObject: () => any;
    _isModal: boolean;
    close(v?: boolean): Promise<any>;
    initialize: () => Promise<void>;
    setup: () => () => null;
};
declare namespace useModalRouter {
    var init: (router: Router) => void;
}
export default useModalRouter;
