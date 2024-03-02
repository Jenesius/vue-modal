# Modal

Methods [openModal](./guide-methods#open-modal),
[pushModal](./guide-methods#push-modal) return `Promise` which
is successful, will return a `Modal` object. This object is a class
modal window and serves to receive or manage the current
condition. This page will list all available methods
and properties.

## Properties

### `id`

The field is a unique identifier for the modal window.
Assigned at the time of opening.

### `instance`

An instance of a modal window component. Used to
access `$data`, `$props` and other modal window properties.

::: warning
If you get **instance** in your project together in
`<script setup>`, you need to remember that in this case the component
will closed. To open some properties you need to resort to
[**defineExpose**](https://vuejs.org/api/sfc-script-setup.html#defineexpose).
:::

If the modal component looks like this:
```ts
// modal-component.vue
export default {
    props: {},
    data: () => {
        return {
            insideValue: "Hello"
        }
    }
}
```
Then to get the value `insideValue` you need to access
`instance`:

```ts
const modal = await openModal(Modal);
modal.instance.insideValue; // "Hello"
```

### `isRoute`

Set to `true` if the modal window was open
by means of integration with `vue-router`.

### `namespace`

The string value of the space to which the modal window belongs.
The value of this option is set in accordance with the value passed
in `options` in methods for opening a modal window.

```ts
openModal(ModalComponent, {}, { namespace: "notification" })
```

### `component`

Link to the component that will be used as a modal
window.

### `closed`

`ComputedRef` variable that stores the reactive state of the window.
Set to `false` if the modal window was open and
displayed on the page.

### `props`

`Ref` property that stores parameters passed as `props`.
In the modal window itself, they are also obtained through `props`.

### `backgroundClose`

Sets whether the modal window can be closed by clicking on the background.
The default value is `true`.

### `onclose`

Sets the modal window close handler. More details can be
read [here](./event-close.md).

### `ondestroy`

This method is used to catch the moment when the fashion window was closed.
It is no longer possible to cancel (inverted value `false`) closing the fashion window at this stage.

```ts
const modal = await openModal(Modal)
modal.destroy = () => {
    console.log('Modal has been closed')
}
```


## Methods

### `close`

The method is used to close the modal window. Returns `Promise`.

### `on`

The method is used to listen to an event from a component. In the open
in the modal window, events transmitted via `emits` will be intercepted
and passed to the `on` event:

```ts
const modal = await openModal(ModalComponent);
modal.on("update", () => {
	// ...
})

```

## Static

Static fields and methods of the `Modal` class.

### `EVENT_PROMPT`

The name of the event that is processed when the modal is opened
windows via [`promptModal`](./guide-methods#prompt-modal). In such
case, having initialized this event, the value passed to it
will be returned to `promptModal` and the modal window will be closed:

```ts
emits(Modal.EVENT_PROMPT, 100);
```

You can read more details [here](./guide-returned-value).

### `STORE`

Properties of type `Map<ModalId, Modal>`. When opening any
modal window, it will be saved in this storage.