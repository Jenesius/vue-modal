<template>
  <div>
    <input type = "text" v-model = "code" @keyup.enter = "handleClick"/>
  </div>
  <button @click="handleClick">Click</button>
</template>
<script>
import Modal from "./../../plugin/utils/Modal";

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