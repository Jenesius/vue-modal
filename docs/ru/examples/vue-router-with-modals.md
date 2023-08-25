# VueRouter с Modals

На сайте оказалось проблематично отобразить пример работы с vue-router, но ознакомиться с ним можно, запустив
`npm run serve` и перейдите в **/vue-router-with-modal**.

В этом примере мы рассмотрим, как работает интеграция vue-router и как ее использовать.

Для работы с VueRouter библиотека предоставляет метод **useModalRouter**, который в первую очередь является оболочкой для
компонент. Именно с его помощью наши компоненты будут обернуты в модальные окна. Для использования давайте создадим простой
конфигурационный файл для vue-router:
```ts
import {createRouter, createWebHashHistory} from "vue-router"
import {useModalRouter} from "jenesius-vue-modal";
import Modal from "./any-modal.vue";

const routes = [
    {
        path: "/",
        component: SomeComponent
    },
    {
        path: "/users/:id",
        component: useModalRouter(Modal) // Step 1
    }
]

const router =  createRouter({
    routes,
    history: createWebHashHistory()
})

useModalRouter.init(router); // Step 2

export default router
```

### Шаг 1
На первом этапе мы оборачиваем компонент. Фактически этот метод делает следующее:
1. При переходе на указанный маршрут будет отображаться переданный компонент.
2. Render всегда возвращает в результате *null*.
3. При выходе с маршрута текущее модальное окно закроется.

### Шаг 2
Перед работой мы должны предоставить маршрутизатор, чтобы библиотека могла подписываться на изменение состояния.
маршрутизатор.

----

Теперь, если мы перейдем к */users/:id*, откроется наше модальное окно, а значение id будет передано в качестве props.
