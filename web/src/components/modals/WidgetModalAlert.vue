<template>
	<div class = "modal">
		<p>{{title}}</p>
	</div>
</template>

<script>

	export default {
		props: {
			title: {
				type: String,
				required: true
			}
		},

		beforeModalClose(){
			console.log("+++");
		},

		name: "WidgetModalAlert"
	}
</script>

<style scoped>
	.modal {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: white;
		padding: 8px;
	}
</style>