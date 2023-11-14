<template>
	<div class = "flowers-list">
		<router-link to="/flowers/red">Red flowers</router-link>
		<router-link to="/flowers/blue">Blue flowers</router-link>
		<router-link to="/flowers/green">Green flowers</router-link>

	</div>
</template>

<script>
export default {
	name: "flowers-list"
}
</script>

<style scoped>
.flowers-list {
	background-color: #a8b1ff;
	padding: 20px;
	display: grid;
	gap: 10px;

	font-size: 16px;
	font-weight: bold;
}
</style>