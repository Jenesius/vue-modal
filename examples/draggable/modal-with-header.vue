<template>

	<div class = "modal-info">
		<div class = "draggable-header">
			Draggable
		</div>
		<div>
			<p>{{info}}</p>
		</div>
		
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
.draggable-header {
	padding: 4px 14px;
	background-color: red;
}
</style>