<template>
	<p>a</p>
</template>

<script>
export default {
	beforeRouteLeave(){
		console.log("Leave")
	},
	beforeRouteEnter(){
		console.log("Enter")
	},
	name: "ViewA"
}
</script>

<style scoped>

</style>