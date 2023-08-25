# Installation

- Don't forget to [initialize](/guide/getting-started) Jenesius Vue Modal
- When creating router add modal integration:
```ts
import { createWebHistory, createRouter} from "vue-router";
import {useModalRouter} from "jenesius-vue-modal";

const routes = [...];
const router = createRouter({
	history: createWebHistory(), // Or any other
	routes,
});

useModalRouter.init(router); 
```
Now the modal handler will react to navigation changes.
- Add new route:
```ts
import Modal from "Modal.vue"

const routes = [
    {
        path: "/any-route",
        component: useModalRouter(Modal)
    }
]
```
Now, when switching to **/any-route**, the window that was passed to
**useModalRouter** will be shown modally
