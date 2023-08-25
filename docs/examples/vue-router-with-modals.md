# VueRouter with Modals

It turned out to be problematic on the site to display an example for working with vue-router, but you can familiarize yourself with it by running
`npm run serve` and go to **/vue-router-with-modal**.

In this example, we'll look at how vue-router integration works and how to use it.

To work with VueRouter, the library provides the **useModalRouter** method, which is primarily a wrapper for
component. It is with the help of it that our components will be wrapped in modal windows. To use, let's create a simple
config file for vue-router:
```ts
import {createRouter, createWebHashHistory} from "vue-router"
import {useModalRouter} from "../../plugin/routerIntegration";
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

### Step 1
In the first step, we wrap the component. In fact, this method does the following:
1. When switching to the specified route, it will show the passed component.
2. Render always returns *null* as a result.
3. When leaving the route, the current modal window will be closed.

### Step 2
Before work, we must provide a router so that the library can subscribe to state changes
router.

----

Now if we navigate to */users/:id* our modal window will be opened.
