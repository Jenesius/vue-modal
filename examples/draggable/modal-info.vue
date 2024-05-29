<template>
	<div class = "modal-info">
		<p>{{info}}</p>
		<button @click = "add">add</button>
	</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
import {pushModal} from "@/index";
import ModalInfo from "./modal-info.vue";

defineProps<{
	info: string,
	show?: boolean
}>()

function add() {
	pushModal(ModalInfo, {
		info: "test"
	}, {
		draggable: true
	})
}

</script>

<style scoped>
.modal-info {
	background-color: white;
	padding: 10px 20px;
}
</style>