<template>
	<div>
		<input-field v-model = "message"/>
		<button @click="open('Main')">Open Modal</button>
		<button @click="push('hi', 'notification')">Push Notification</button>
		<modal-container/>
		<notification-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../src/index";
import Modal from "./modal.vue";
import NotificationContainer from "./notification-container.vue";
import pushModal from "@/methods/pushModal";
import {ref} from "vue";
import {InputField} from "jenesius-vue-form";

const message = ref();
function open(msg: string, namespace?: string) {
	openModal(Modal, {msg}, {namespace})
}
function push(msg: string, namespace: string) {
	pushModal(Modal, {msg: message.value}, {namespace})
}


</script>
<style>
@import "./../../project/default-style.css";
</style>