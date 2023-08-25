# Установка

- Не забудьте [проинициализировать](./getting-start) Jenesius Vue Modal
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
