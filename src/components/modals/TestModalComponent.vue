<template>
	<p>{{title}}</p>
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
		console.log("Try Close test modal component.", this);
	},
	name: "TestModalComponent"
}
</script>

<style scoped>

</style>