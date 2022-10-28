# Methods

## Open Modal
The openModal method is used to display a component in a modal window container. Before showing the modal window, the method will close all open modal windows, if it succeeds, it will open a new one. Two parameters are accepted as input:
- **VueComponent** - a component object that will be rendered as a modal window.

- **props** - the object that contains the input parameters that are passed to the modal and will be accessible from props.
```ts
import {openModal} from "jenesius-vue-modal";
import VueComponent from "AnyVueComponent.vue";

const props = {title: "Hello"};

openModal(VueComponent, props)
```
```vue
// anyComponent.vue
<template>
    <p>{{title}}</p>
</template>
<script>
    export default {
        props: {
            title: String
        }
    }
</script>
```
**Return value**: Promise that, if successful, will return a [ModalObject](/guide/modal-object).
```ts
//{id, close, onclose, closed, instance}
const modal = await openModal(VueComponent);
```
## Push Modal
The pushModal method is used to show a modal window, but, unlike openModal, it does not close previously opened modals, but shows the new one on top of the rest. Two parameters are accepted as input:
- **VueComponent** - a component object that will be rendered as a modal window.

- **props** - the object that contains the input parameters that are passed to the modal and will be accessible from props.

```ts
import {pushModal} from "jenesius-vue-modal"
pushModal(VueComponent)
```
```vue
<template>
    <button @click = "pushModal">Push second</button>
</template>
<script>
    import {pushModal} from "jenesius-vue-modal";
    import ModalSecond from "ModalSecond";
    export default {
        setup(){
            return {
                pushModal: () => pushModal(ModalSecond)
            }
        },
    }
</script>
```
```vue
<template>
    <button @click = "pushModal">Push first</button>
</template>
<script>
    import {pushModal} from "jenesius-vue-modal";
    import ModalFirst from "ModalFirst";
    export default {
        setup: () => ({pushModal: () => pushModal(ModalFirst)}),
    }
</script>
```
EXAMPLE
**Return value**: Promise that, if successful, will return a [ModalObject](/guide/modal-object).
```ts
//{id, close, onclose, closed, instance}
const modal = await pushModal(VueComponent); 
```
To close only the last window, you need to use the [popModal](#pop-modal) method

## Close Modal
To close **all** modals, use the closeModal method:
```ts
import {closeModal} from "jenesius-vue-modal"
closeModal()
```

## Pop Modal
To close **only the last** modal window, if several were opened 
using the pushModal method, use the popModal method:
```ts
import {popModal} from "jenesius-vue-modal"
popModal()
```

## Prompt Modal
Sometimes there is a request in a modal window that will return some data. It could be
a modal window for a one-time request that will return the value of the input.
The *prompt-modal* method is a synonym for pushModal, but increases the eavesdropping detection even further.
for **Modal.EVENT_PROMPT** upon execution of which the modal window will be closed and the data will be transferred
with the event will be the execution of *promptModal*:
```ts
import {promptModal} from "jenesius-vue-modal"
const code = await promptModal(ModalCode);
```
Файл *ModalCode.vue*

```vue

<template>
  <button @click="handleClick">Click</button>
</template>
<script>
import Modal from "jenesius-vue-modal";

export default {
  methods: {
    handleClick() {
      // Current emit will close the modal and provided Meth.random() 
      // result to Promise returned by promptModal
      this.$emit(Modal.EVENT_PROMPT, Math.random());
    }
  }
}

</script>

```
