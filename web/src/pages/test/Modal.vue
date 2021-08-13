<template>
	<div class = "modal-test">
		<p>User - {{id}}</p>
	</div>
</template>

<script>

export default {
	props: {
		id: String
	},

	name: "Modal"
}
</script>

<style scoped>
	.modal-test{
		padding: 0 8px;
		background-color: white;
		border-radius: 4px;
	}
</style>