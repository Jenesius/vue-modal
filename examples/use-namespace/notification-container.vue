<template>
	<div class = "notification-container">
		<p
			class = "notification-item"
			v-for = "item in notificationQueue" :key = "item.id">
			{{item.props.value.msg}}
		</p>
	</div>
</template>

<script setup>
import {getQueueByNamespace} from "@/index";
const notificationQueue = getQueueByNamespace("notification");

const queue = getQueueByNamespace('notification');

</script>

<style scoped>
.notification-container {
	display: grid;
	gap: 10px;
	position: fixed;
	z-index: 10;
	right: 0;
	top: 0;
	padding: 10px;
}
.notification-item {
	background-color: red;
	border-radius: 4px;
	padding: 3px 10px;
	margin: 0;
}
</style>