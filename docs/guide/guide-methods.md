# Methods

This article will be divided into two blocks: methods of closing and 
methods closing modal windows.

## Opening a window

To open modal windows, use one of the following methods:
[`openModal`](#open-modal), [`pushModal`](#push-modal),
[`promptModal`](#prompt-modal). Each of these methods will
considered separately. However, what these methods have in common are
parameters that are passed there:

- **VueComponent** or **String**. First required parameter.
Specifies the component to be rendered. If a string is transmitted
that the component will be taken from the storage. Detailed
information about the storage can be found [here](store.md).
- **props**. The second parameter is optional. Represents a set
parameters that will be passed to the component as `props`.
- **options**. Third optional parameter. it can indicate
additional parameters that will affect the behavior of modals
windows Has type `Object` with the following properties:
    - **namespace**. Optional parameter of type `string`.
      Specifies which `namespace` the modal window will belong to. If
      this parameter is not specified, the modal window will be opened in
      standard container. You can read more about namespace
      [here](namespace.md).

## openModal {#open-modal}

The `openModal` method is used to display the component in the container
modal window. Before showing the modal window the method will close everything
open windows and, if successful, will open a new one.

### Return value

The method will return a `Promise`, which, if the modal opens successfully,
windows will return [`ModalObject`](modal-object.md).

```ts
import {openModal} from "jenesius-vue-modal";
import VueComponent from "AnyVueComponent.vue";

const props = {title: "Hello"};
openModal(VueComponent, props) // Promise<ModalObject>
```

```vue
// AnyVueComponent.vue
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

## pushModal {#push-modal}
The `pushModal` method is used to show a modal window, but, in
unlike `openModal`, it does not close previously open modal windows,
but shows the new one on top of the others. In other words, this
method is simply adds a new window to the queue.

```ts
import {pushModal} from "jenesius-vue-modal"
pushModal(VueComponent) // Promise<ModalObject>
```

:::warning
To close only the last opened modal window - use the 
[popModal](#pop-modal) method.
:::

## promptModal {#prompt-modal}

Sometimes the main purpose of a modal window is to return data.In this
case, the modal window acts as a certain stage of your interface. It 
is for such cases that the method was developed
[`promptModal`](#prompt-modal).

Its main difference from the two previous methods is that it does not
return object [`ModalObject`](modal-object.md). Return value -
`Promise`, if successful, will return the result that you decided to 
return from your modal window. Essentially the data is modal windows 
can be thought of as functions. You conveyed meanings in them, they
returned the result.

Also, this function does not close previously opened windows, but adds
new on top.

To return a value from a modal window, use the event
`Modal.EVENT_PROMPT`:

```ts
import ModalCode from "./ModalCode.vue"
import {promptModal} from "jenesius-vue-modal"
const code = await promptModal(ModalCode);
```

```vue
<!--ModalCode.vue-->
<template>
  <button @click="handleClick">Click</button>
</template>
<script>
import {Modal} from "jenesius-vue-modal";

export default {
  methods: {
    handleClick() {
	  // This event will close the modal window and return Math.random()
	  // as a result of Promise
      this.$emit(Modal.EVENT_PROMPT, Math.random());
    }
  }
}
</script>
```

:::warning
There is no need to call the modal window's close method when you use
mechanism `Modal.EVENT_PROMPT`. The library will do this for you.
:::

## Closing a window

To close modal windows, you can use two methods:
[`closeModal`](#close-modal) and [`popModal`](#pop-modal).
These methods accept one optional parameter describing the closing 
settings modal she. An option represents an object with the following
properties:

- **namespace**. A string value indicating from which
  spaces need to be removed. If no value is specified, closes
  window from the default space.

```ts
// Closing modal windows without a parameter
closeModal();

// Closing the last modal from
// "notification" spaces
popModal({ namespace: "notification" });
```

## closeModal {#close-modal}

Method for closing **all** modal windows. If in the parameters
`namespace` is passed, then windows will be closed only from the
required one space.

```ts
import {closeModal} from "jenesius-vue-modal"
closeModal()
```

## popModal {#pop-modal}

To close **only the last** modal window that was open using 
[`pushModal`](#push_modal).

```ts
import {popModal} from "jenesius-vue-modal"
popModal()
```
