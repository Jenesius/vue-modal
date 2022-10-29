<template>
	<div>
    <button @click = "openModal(Modal, {msg: 'Welcome to jenesius-vue-modal'})">Open Modal</button>
    <modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "../../plugin/index";
import Modal from "./modal.vue";

</script>
<style>
@import "./../../web/default-style.css";
</style>