# Modal storage

In older versions of this library, opening a modal window was only possible by passing a component.
The approach remains the main one and sow the day, because. gives you more control and order in your code. However, there is
many situations where this approach is not convenient. For example, when developing a library, the question arises:
how to override the opening of modal windows (how to replace the modal window). This is where storage comes in.

## Initialization

To get started, you need to initialize the storage (save the modal windows we need in it). All
this is done using the configuration function:

```ts
import {config} from "jenesius-vue-modal";
import ModalConfirm from "./ModalConfirm";

config({
    store: {
        confirm: ModalConfirm
    }
})
```
In this example, we have added one modal window to the store. Now it can be opened by name by passing the key there:

```ts
openModal('confirm');
```
Of course, *pushModal* and *promptModal* methods also support this functionality.

## Checking for a Modal Window
If you are writing a library, for better interoperability, a function has been added that checks for the presence of a modal
windows in storage:
```ts
import {getComponentFromStore} from "jenesius-vue-modal";
getComponentFromStore('alert') // undefined
getComponentFromStore('confirm') // Component
```
**Returns** the VueComponent if it was previously initialized in the store, *undefined* otherwise.
