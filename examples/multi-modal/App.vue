<template>
	<div>
    <button @click = "openModalDuplicate">Open Multi Modals</button>

    <modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../plugin/index";
import ModalMulti from "./modal-multi.vue";

  async function openModalDuplicate() {
    openModal(ModalMulti)
  }


</script>
<style>
button {
  border: 1px solid #e3e3e3;
  padding: 4px 8px;
  cursor: pointer;
  transition: 0.1s;
}
button:hover {
  transform: scale(0.96);
}
</style>