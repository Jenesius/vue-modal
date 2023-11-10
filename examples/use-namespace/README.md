# Namespace

This example demonstrates the possibility of using containers.
This functionality can be convenient in cases when you want
divide application logic into `namespace`. Also, the possibility of receiving
modal window queue states for a specific `namespace` gives
the ability to create your own containers with the logic you need.

The `App.vue` file shows three containers:

- The main container that you usually register.
- Name container `<modal-container namespace = 'bottom'/>`
- Container for notification `<notification-container/>`

## Main container

By default, the `openModal`, `pushModal` and other methods work with
him.

## Named container

To make the container named, you need to add the property
`namespace`. Also, when adding a modal window, you need to specify
additional option:
```ts
openModal(Modal, {}, {
    namespace: "notification"
})
```

Please note that the mechanism does not work in this container
closing by pressing `Esc`. This is intentional, but in the future
subject to change.

## Notification container

Go inside this component `notification-container.vue`. In it
we get the current queue using the `getQueueByNamespace` method.
Next, we display notifications the way we want.
