<template>
	<div>
    <button @click = "openModalDuplicate">Open Multi Modals</button>

    <modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../src/index";
import ModalMulti from "./modal-multi.vue";

  async function openModalDuplicate() {
    openModal(ModalMulti)
  }


</script>
<style>
@import "./../../project/default-style.css";

</style>