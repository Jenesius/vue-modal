<template>
	<p>123</p>
</template>

<script>
export default {
	beforeModalClose(){
		return false;
	},
	beforeRouteLeave(){
		console.log("beforeRouterLeave");
	},
	name: "Modalguard"
}
</script>

<style scoped>

</style>