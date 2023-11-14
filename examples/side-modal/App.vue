<template>
	<div class = "example-sidebar">
		<button @click="openSidebar">Open sidebar modal</button>
		<button @click="openBottom">Open bottom modal</button>
		<button @click="openOther">Open other modal</button>

		<modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../src/index";
import ModalSidebar from "./components/modal-sidebar.vue";
import OtherModal from "./components/other-modal.vue";
import ModalBottom from "./components/modal-bottom.vue";

async function openSidebar() {
	openModal(ModalSidebar)
}
async function openBottom() {
	openModal(ModalBottom)
}
function openOther() {
	openModal(OtherModal);
}


</script>
<style>
@import "./../../project/default-style.css";
.example-sidebar {
	display: flex;
	gap: 15px;
}
.modal-container {
	z-index: 100;
}
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

.modal-container:has(.modal-bottom) {
	/*Move modal to right*/
	display: flex;
	align-items: end;

	/*Just design*/
	padding: 20px;
	box-sizing: border-box;
}

/*Change animation only for sidebar modal*/
.modal-list-enter-from .modal-bottom,
.modal-list-leave-to .modal-bottom{
	transform: translateY(100px) !important;
}
</style>