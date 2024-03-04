# Closing modal with vue-router

By default, the modal doesn't close when the path changes (vue-router). This was done on purpose, because
your project may not have this library or any other one for working with routes. Also this
the function is not heavy even for an entry-level programmer.

## Vue Router
So that when closing a modal window using the **vue-router** library, you need to register the following
hook:

```ts
import {getCurrentModal, closeModal} from "jenesius-vue-modal";

const router = new VueRouter({...})

router.beforeEach(async (to, from, next) => {
    // There's some opened modal
    if (getCurrentModal()) { // (1)
        try {
            await closeModal(); // (2)
            next(); // (3)
        } catch (e) {
            // ...
            next(false); // (4)
        }
    } else next();
})
```

Let's see what's going on here:
- (1) - If the current modal window is not *undefined* then we need to close all modal windows (2).
- (3) - If the closing was successful, then we confirm the transition to the next route.
- (4) - We disable the transition if the *closeModal* threw an error (the modal window remained open).