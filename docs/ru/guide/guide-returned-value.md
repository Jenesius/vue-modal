# Return value from Modal

If we are talking about the return value of modal windows, we must first understand their essence. By default, modal windows are treated as a separate layer of logic with their own data model. This approach is convenient and makes developing a web application with modal windows safe. This library inherits this concept.
A modal window is a separate logical level that accepts input parameters and somehow interacts with them.
However, there are times when a modal window is just part of a process. I sometimes encounter such cases (although I try my best to avoid them).
I will describe the solutions that I use in my projects. Starting with the most convenient, ending with those that I would not use:


## Using PromptModal

In vanilla JS, there is a function prompt, which, upon closing the popup, will wrap the entered value. To implement such
logic, let's write a wrapper for the modal window opening function:

File *ModalCode.vue*

```vue
<template>
  <button @click="handleClick">Click</button>
</template>
<script>
import {Modal} from "jenesius-vue-modal";

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

How to use:
```ts
import {promptModal} from "jenesius-vue-modal"
const code = await promptModal(ModalCode);
```
What happened in this example:

- promptModal return Promise, which will be executed when the modal window is closed. It will also be passed the value, which is inside the modal window component.
- To describe the modal window, we implemented a simple input field that was concatenated with value (which is used as return value in the first step)
This is the most elegant solution that I have found so far and often use in my projects.

## Provide Handle
We can also pass a function to be called inside a modal window (Reminds me of the React component logic):

```ts
const modal = await openModal(Modal, {
  handleRequest: (value) => {
    // do something  
  }
})
```
And then in the modal:

```vue
<script>
  export default {
    props: {
      handleRequest: Function
    },
    beforeModalClose() {
      this.handleRequest("some-value")
    }
  }
</script>
```

## Emit value and closing

```vue
// modal.vue
<template>
  <button @click = "$emit('return', false)">run</button>
</template>
```
And when we open modal:
```ts
const modal = await openModal(Modal)
modal.on('return', (value) => {
    console.log(value); // false
    modal.close()
})
```
