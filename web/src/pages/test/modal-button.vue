<template>
	<p>event</p>
	<button @click = "$emit('test', 5)">emit test</button>
</template>

<script>
export default {
	name: "modal-button"
}
</script>

<style scoped>

</style>