<template>
	<div class="container-buttons">
		<button @click = "openFull">Open Full</button>
		<button @click = "openModalWithHeader">Just header</button>
		<button @click = "openModalDefault">Default modal</button>
	</div>
	<modal-container/>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal, pushModal} from "../../src/index";
import ModalInfo from "./modal-info.vue";
import ModalWithHeader from "./modal-with-header.vue";

function openFull() {
	pushModal(ModalInfo, { info: "test" }, {
		draggable: true
	});
}
function openModalWithHeader() {
	openModal(ModalWithHeader, { info: "test" }, {
		draggable: '.draggable-header'
	});
}

function openModalDefault() {
	openModal(ModalInfo, {
		info: "Test"
	})
}


</script>
<style scoped>
@import "./../../project/default-style.css";

* {
	font-family: sans-serif;
}

.container-buttons {
	display: flex;
	gap: 7px;
}
</style>