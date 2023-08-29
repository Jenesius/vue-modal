<template>
	<div>
		<button @click="openSidebar">Open sidebar modal</button>
		<button @click="openOther">Open other modal</button>

		<modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../src/index";
import ModalSidebar from "./modal-sidebar.vue";
import OtherModal from "./other-modal.vue";

async function openSidebar() {
	openModal(ModalSidebar)
}
function openOther() {
	openModal(OtherModal);
}


</script>
<style>
@import "./../../project/default-style.css";

.modal-container:has(.modal-sidebar) {
	/*Move modal to right*/
	display: grid;
	grid-auto-columns: max-content;
	justify-content: end;

	/*Just design*/
	padding: 20px;
	box-sizing: border-box;
}

/*Change animation only for sidebar modal*/
.modal-list-enter-from .modal-sidebar,
.modal-list-leave-to .modal-sidebar{
	transform: translateX(100px) !important;
}

</style>