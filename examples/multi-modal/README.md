# Multi modals

One of the advantages of this library is the ability to open multiple modal windows on top of each other. This approach
is not common, but allows you to design complex logic using simple tools.

In this example, let's see how this is done:

1. Let's create a modal window that will open its duplicate, open the initial window and close all the remaining ones:
```vue
<template>
  <div>
    <h3>Is Multi modal</h3>

    <button @click = "pushModal(ModalMultiDuplicate)">Open one more</button>
    <button @click = "closeModal()">Close</button>

  </div>
</template>

<script setup>
import {pushModal, closeModal} from "../../plugin/index";
import ModalMultiDuplicate from "./modal-multi-duplicate.vue";

</script>
```

In this example, one of the buttons has a handler for opening another modal window using `pushModal`. This
the function opens a new modal window on top of the existing ones without closing them.
