# Установка

- Не забудьте [проинициализировать](./getting-started) Jenesius Vue Modal
- При создании роутера добавьте модальную интеграцию:
```ts
import { createWebHistory, createRouter} from "vue-router";
import {useModalRouter} from "jenesius-vue-modal";

const routes = [...];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

useModalRouter.init(router); // !
```
Теперь модальный обработчик будет реагировать на изменения навигации.
- Добавьте новый маршрут обёрнутый в `useModalRouter`:
```ts
import Modal from "Modal.vue"

const routes = [
    {
        path: "/any-route",
        component: useModalRouter(Modal)
    }
]
```
Теперь при переключении на **/any-route** окно, переданное в
**useModalRouter** будет отображаться модальное окно.


:::warning router-view
Для отображения модальных окон интегрируемых с `vue-router` не нужно
создавать `router-view`, т.к. модальные окна отображаются в своём
контейнере.
:::