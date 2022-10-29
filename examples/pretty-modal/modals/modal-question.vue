<template>
  <div class = "modal-window modal-alert">
    <h3 class = "modal-title">Hard Math</h3>
    <p>If you multiply 5 by 5, how much will it be?</p>
    <input type = "text" v-model = "input">
    <div class = "wrap-buttons">
      <button @click = "resolve()">Answer</button>
    </div>
  </div>
</template>

<script setup>
import {closeModal, pushModal} from "./../../../plugin"
import ModalConfirm from "./modal-confirm";
import {ref} from "vue";

const input = ref('');
function resolve() {
  pushModal(ModalConfirm, {
    label: 'Your Answer',
    text: `You indicated ${input.value} as the correct answer. Right?`,
    resolve: () => {
      closeModal();
    }
  })
}

</script>

<style scoped>
.modal-alert{
  max-width: 400px;
}
.wrap-buttons{
  margin: 10px 0 0 0;
}
</style>