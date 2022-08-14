# Navigation Guards

## Information
Sometimes it is necessary to catch the closing of a modal and manage 
this state. This can be useful to prevent the user from closing the 
modal until they have entered input, or to send a request to the server.

If the handler returns **false** or **throws an error** , closing 
the modal window will be interrupted.

Jenesius Vue Modal provides three ways to catch closures:

## Onclose
The [openModal](/guide/guide-methods#open-modal) and [pushModal](/guide/guide-methods#push-modal)
methods return Promise, which, if successful,
will return the [modalObject](/guide/modal-object) object. In order to catch the closing of
a modal window, you need to add an event **onclose** to this object:
```ts
import {openModal} from "jenesius-vue-modal";
const modal = await openModal(VueComponent);

let count = 5;

modal.onclose = () => {
    count--;
    if (count > 0 ) return false; //The modal window will be closed after five attempts.
}
```
EXAMPLE
If several modal windows are open, and one of them will have an onclose handler that returns false, you can close only those modal windows that were opened after it.
```ts
import {pushModal, closeModal} from "jenesius-vue-modal";

const modal1 = await pushModal(VueComponent);
const modal2 = await pushModal(VueComponent);
const modal3 = await pushModal(VueComponent);

modal2.onclose = () => false;

closeModal(); // close only modal3
```

## In-Component Guards
Finally, the navigation hook can be specified directly in the component using the following options:
- beforeModalClose
```ts
const Foo = {
	template: "...",
	beforeModalClose() {
		// has access to the context of the component instance this.
	}
} 
```
## Composition Api
While you can still use built-in functions, Jenesius Vue Modal provides functions for the Composition API:
```ts
import {onBeforeModalClose} from "jenesius-vue-modal"

export default {
  setup() {
    onBeforeModalClose(() => {
      const answer = window.confirm(
        "Do you really want to leave? You have unsaved changes!"
      )
      if (!answer) return false
    })
  }
}
```

## Async Guards
The navigation hook can be asynchronous. The modal window will be closed only when it finishes its work:
```ts
{
    async beforeModalClose(){
        await updateData();
    }
}
```
```ts
const modal = await openModal(Modal);
    
modal.onclose = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 1000); // The modal will be closed after one second.
    })
}
```

## Close event
Each modal close handler get window parameter: event-close
```ts
modal.onclose = (event) => {
	// ...
}
```
This *event* stores information about how the modal window is closed. Detailed information about it, about the way to prevent
Closing a modal window by background or by pressing the Esc key can be read [here](/guide/event-close).
