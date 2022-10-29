<template>
  <div class = "prompt-modal modal-window">
    <div>
      <input class = "modal-input" type = "text" v-model = "code" @keyup.enter = "handleClick"/>
    </div>
    <button @click="handleClick">Apply</button>
  </div>
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
<style>
.modal-input{
  border: 1px solid #e3e3e3;
  padding: 4px 8px;

}
.prompt-modal {
  display: grid;
  gap: 10px;
}
</style>