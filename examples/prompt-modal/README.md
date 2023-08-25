## Prompt Modal

Currently, work with *promptModal* will be considered.

This method is used to get data from a modal window in a linear fashion.

For example, we have a modal window that is only needed to get a one-time password.
This window is not a separate logic, but is used only as a temporary step for data entry.
You may find something in common with the `prompt` function from JavaScript, which returns a string.

Let's see how it works step by step:

1. Let's create a modal window *Modal.vue* for one-time password entry:
```vue
<template>
  <div>
    <input type = "text" v-model = "code" @keyup.enter = "handleClick"/>
  </div>
  <button @click="handleClick">Click</button>
</template>
<script>
import {Modal} from "jenesius-vue-modal";

export default {
  data: () => ({
    code: ""
  }),
  methods: {
    handleClick() {
      // Current emit will close the modal and provided Meth.random()
      // result to Promise returned by promptModal
      this.$emit(Modal.EVENT_PROMPT, this.code);
    }
  }
}
</script>
```

Nothing complicated, two interceptors for pressing Enter and a button and calling `$emit`.

2. Open it using *promptModal*:
```ts
const value = await promptModal(ModalCode)
```