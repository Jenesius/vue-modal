<template>
	<div>
		<p>event</p>
		<button @click = "$emit('test', 5)">emit test</button>
	</div>
</template>

<script>
export default {
	name: "modal-button"
}
</script>

<style scoped>

</style>