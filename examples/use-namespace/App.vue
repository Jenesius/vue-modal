<template>
	<div>
		<div class = "widget-card ">
			<h2 class = "widget-card-full">Everything is modal </h2>
			<input-field v-model = "message" class = "widget-card-full" label = "Write notification message"/>
			<button @click="push('Main')">Default Namespace</button>
			<button @click="push('hi', 'notification')">Push Notification</button>
			<button @click="openForBottom">Namespace Bottom</button>
		</div>
		<!--Default modal container-->
		<modal-container/>
		<!--Bottom modal container-->
		<modal-container namespace="bottom" />
		<!--Out custom notification(modal) container-->
		<notification-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, pushModal} from "../../src/index";
import Modal from "./modal.vue";
import NotificationContainer from "./notification-container.vue";
import {ref} from "vue";
import {InputField} from "jenesius-vue-form";

const message = ref("You have new notification");
function push(msg: string, namespace: string) {
	pushModal(Modal, {msg: message.value}, {namespace})
}
function openForBottom() {
	const msg = `This modal window is opened for namespace 'bottom'. Please note that the Esc handler does not work here.`;
	push(msg, 'bottom');
}
</script>

<style>
@import "./../../project/default-style.css";
.widget-card {
	padding: 10px;
	display: grid;
	grid-template-rows: 65px 55px 35px;
	grid-template-columns: repeat(3, 100px);
	gap: 10px;
}
.widget-card-full {
	grid-column: 1/4;
}
</style>