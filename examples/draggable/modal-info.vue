<template>
	<div class = "modal-info">
		<p>{{info}}</p>
	</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

defineProps<{
	info: string,
	show?: boolean
}>()
</script>

<style scoped>
.modal-info {
	background-color: white;
	padding: 10px 20px;
}
</style>