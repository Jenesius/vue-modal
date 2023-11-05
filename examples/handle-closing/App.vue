<template>
	<div>
		<button @click="openModalDuplicate">Open Multi Modals</button>

		<modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../src/index";
import Modal from "./modal.vue";

async function openModalDuplicate() {
	const modal = await openModal(Modal, { msg: "Close here only" });
	modal.onclose = (event) => {
		if (event.esc || event.background) return false;
	}
}


</script>
<style>
@import "./../../project/default-style.css";

</style>