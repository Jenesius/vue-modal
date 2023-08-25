<template>
  <div class = "modal-window">
    <h3>Is Multi modal</h3>

    <button @click = "pushModal(ModalMultiDuplicate)">Open one more</button>
    <button @click = "openModal(ModalMultiDuplicate)">Open only one</button>
    <button @click = "closeModal()">Close all</button>

  </div>
</template>

<script setup>
import {openModal, pushModal, closeModal} from "../../src/index.js";
import ModalMultiDuplicate from "./modal-multi-duplicate.vue";

</script>

<style scoped>

</style>