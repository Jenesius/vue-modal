<template>
	<button role="button" @click = "$emit('update', value)">click</button>
</template>

<script>
export default {
	props: {
		value: Number
	},
	name: "modal-button"
}
</script>

<style scoped>

</style>