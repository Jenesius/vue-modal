# Namespace

This functionality goes beyond the use of modal windows. However,
this mechanism allows you to implement new interface elements, such as
notifications, error display, etc. Using `namespace` you can easily
implement components with similar functionality of modal windows.

This article will tell you how to use `namespace`, as well as
An example of creating notifications based on a modal window container
will be given.

## Initialization

By default, we create a container without specifying a `namespace`, but we
nothing prevent you from creating a named container:

```vue
<template>
    <container namespace = "errors" />
</template>
<script setup>
    import {container} from "jenesius-vue-modal"
</script>
```

Here we have created a container in which all modal windows will be placed
with `namespace` set to `errors`.

## Addition

Methods [openModal](./guide-methods#open-modal), [pushModal](./guide-methods#push-modal),
[promptModal](./guide-methods#prompt-modal) are also expanded. In the option you can
indicate the `namespace` that will be used:

```ts
import Modal from "my-modal.vue"
import {pushModal} from "jenesius-vue-modal"

pushModal(Modal, {}, { namespace: 'errors' })
```

This modal window will be added to the `errors` space and will
be displayed in the appropriate container.

## Closing

Of course, now you need the ability to close not the last modal
window, and the last window from the desired container. Methods
[closeModal](./guide-methods#close-modal),
[popModal](./guide-methods#pop-modal) have been expanded. Now in the options,
passed as the first parameter, you can specify `namespace`:

```ts
import {closeModal} from "jenesius-vue-modal"
closeModal({namespace: 'errors'})
```

## Standard interaction

What you need to understand is that when we don't specify `namespace`, we are working
with `namespace` = `default`. I recommend not specifying it at all if
The `namespace` used is assumed to be the default.

**It is important** to clarify that only for `namespace` equal to `default`
The `Esc` handler is installed. At the moment the implementation forces
It’s up to you to take care of closing modal windows in containers
other than `default.`

## Modal

In the object returned by the pushModal, openModal, promptModal methods
a `namespace` field has appeared, which will be set automatically
and store the name of the container.

```ts
const modal = await pushModal(Modal, {}, { namespace: 'notification' });
modal.namespace // 'notification'
```

## Gets the current modal window.

The `getCurrentModal` method has been extended. Now first and optional
the parameter is the name `namespace` for which you want to find the last one
open modal window.

```ts
getCurrentModal() // Return last opened modal from default namespace
getCurrentModal("notifications") // From namespace: "notifications"
```

## Getting the current queue

In practice, using the second `modal-container` does not represent
many amenities. Other interface elements are very different from the dialog ones
(modal) windows. Therefore, it will be more convenient for you to use a queue that
stores an array of current elements:

```ts
import {getQueueByNamespace} from "jenesius-vue-modal"

const notifications = getQueueByNamespace("notifications");
```

### Options

- **namespace** Optional parameter specifying the name `namespace`.

### Return

The method returns a `reactive` array that stores modal windows.
## Example

<!--@include: ./namespace-notification.md-->