# ModalObject
The pushModal and openModal methods return an object of the following type:

- **id** - unique identifier of the modal window.

- **close** - a method that allows you to close the created modal window.

- **onclose** is a function that is executed when an attempt is made to close a window. This function can be overridden to control the closing of the window. If **onclose** returns false, the modal will not be closed.

- **instance** - an instance of an open modal window. Allows you to access the properties and methods of the modal window.

- **closed** - computed variable, true if the modal window is open.

```ts
import {openModal} from "jenesius-vue-modal";
const modal = await openModal(Modal, {
    message: "Welcome"
});
modal.onclose = () => false

modal.instance.message; // "Welcome"
modal.closed.value; // false

modal.close() // The modal will not be closed
```
```ts
const modal = await openModal(Modal);

modal.id; // Unique identity

modal.onclose = () => {
    if (weather === "rainy") return false;
}

modal.close() // Close modal if the weather is rainy
```
When using **onclose**, we can also access the internal fields and methods of the modal by passing a non-anonymous function as a parameter:
```vue
// ./modal.vue
{
    props: {},
    data: () => {
        return {
            insideValue: "Hello"
        }
    }
}
```
```ts
const modal = await openModal(Modal);
modal.onclose = function(){
    this.insideValue; // "Hello"
    modal.instance.insideValue; // "Hello"
}
```

## Instance
If you are tagging **instance** in your project together in `<script setup>`, you need to remember that in this case
the component will be closed. In order to open some properties, you need to resort to [**defineExpose**]
(https://vuejs.org/api/sfc-script-setup.html#defineexpose).
