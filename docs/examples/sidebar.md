<script setup>
import App from "./../../examples/side-modal/App.vue"
</script>

<App/>

-----

# Side modal

An example of displaying a modal window on the side will be described here. For this
you won't need `js` or project setup. We'll make do with just classes
to `css`.

We can have the following class in `css`:

```css
.modal-container:has(.modal-sidebar) {
    /*Move modal to right*/
    display: grid;
    grid-auto-columns: max-content;
    justify-content: end;
}

/*Change animation only for sidebar modal*/
.modal-list-enter-from .modal-sidebar,
.modal-list-leave-to .modal-sidebar{
    transform: translateX(100px) !important;
}
```

:::info Naming

- `.modal-container` is the class in which the modal window is located, it
  used by the library.
- `.modal-sidebar` is the name of the class that you set in your
  modal component.
- `.modal-list-enter-from` and `.modal-list-leave-to` animation classes,
  also created by the library.
:::


Here we have established that the modal window will appear on the right.
Now in the modal window itself we will indicate this class at the very top
level:

```vue
<template>
	<div class = "modal-sidebar">
		<!--...-->
	</div>
</template>
```

It is important not to forget that these `css` properties must be specified in the global
scope, because they should be available not only to the modal
the window, but also the container itself.
