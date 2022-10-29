<template>
	<div class = "container-buttons">
    <button>Person Profile</button>
    <button ref = "refButtonConfirm" @click = "openModal(ModalConfirm, { label: 'Do you love modals?', text: textConfirm, resolve: resolveConfirm })">Confirm</button>
    <button @click = "openModal(ModalAlert, { text: textAlert })">Alert</button>
    <button>Auto context</button>
    <button @click = "openModal(ModalQuestion)">Question</button>
	</div>
  <modal-container/>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal, popModal} from "../../plugin/index";
import ModalAlert from "./modals/modal-alert.vue";
import ModalConfirm from "./modals/modal-confirm";
import ModalQuestion from "./modals/modal-question";
import {ref} from "vue";

const refButtonConfirm = ref(null);
const textAlert = `Jenesius Vue Modal is a lightweight and simple library for working with modal windows in Vue3. It integrates deeply with Vue.js and allows you to create modals of any complexity.`
const textConfirm = `Modal windows allow you to take part of the logic to a separate level, which makes it easier to develop applications.`
function resolveConfirm() {
  refButtonConfirm.value.classList.add('button_active');
  setTimeout(() => {
    refButtonConfirm.value.classList.remove('button_active');
  }, 400);
  popModal()
}

</script>
<style>
@import "./../../web/default-style.css";
* {
  font-family: sans-serif;
}
.container-buttons{
  display: flex;
  gap: 7px;
}
</style>