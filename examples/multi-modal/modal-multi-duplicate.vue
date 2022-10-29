<template>
  <div class = "modal-window">
    <h4>Is Multi modal</h4>

    <button @click = "pushModal(ModalMultiDuplicate)">Open one more</button>
    <button @click = "openModal(ModalMultiDuplicate)">Open only one</button>
    <button @click = "closeModal()">Close all</button>

  </div>
</template>

<script setup>
import {openModal, pushModal, closeModal} from "../../plugin/index";
import ModalMultiDuplicate from "./modal-multi.vue";

</script>

<style scoped>


</style>