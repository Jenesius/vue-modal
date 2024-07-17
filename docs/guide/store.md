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
import ModalAlert from "./ModalAlert"

config({
	store: {
		confirm: ModalConfirm,
		alert: {
			component: "ModalAlert"
		}
	}
})
```
In this example, we have added two modal windows to the repository:
- by directly transferring components
- in the second case, we specified an object with the `component` property set, this is necessary to set some
  properties specifically for this component.

Now you can open it by name by passing the key there:
```ts
openModal('confirm');
openModal('alert');
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

## Extended component transfer

In this article, we will consider the case when we, together with components, pass an entire object with the described `component` property.
In this case, we can also specify the following properties:

- `backgroundClose`
- `draggable`
- `beforeEach`

All these properties correspond to the parameter from [configuration](./config).

```ts
config({
	store: {
      confirm: {
        component: ModalConfirm,
        draggable: true,
        backgroundClose: false,
        beforeEach() {
          Logger.write('Attempting to open a confirmation window.')
        }
      }
    }
})
```
