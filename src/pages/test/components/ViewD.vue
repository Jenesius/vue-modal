<template>
	<p>d</p>
</template>

<script>
import {onBeforeRouteLeave} from "vue-router";

export default {
	setup(){

		console.log("+1")
		onBeforeRouteLeave(function()  {
			console.log("Router leave aaa", this)
		})
		console.log("+2")

	},
	beforeRouteLeave(){
		console.log("12312")
	},
	name: "ViewD"
}
</script>

<style scoped>

</style>