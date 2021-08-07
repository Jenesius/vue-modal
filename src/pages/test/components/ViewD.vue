<template>
	<p>d</p>
</template>

<script>
import {onBeforeRouteLeave} from "vue-router";

export default {
	setup(){

		console.log("+1")
		onBeforeRouteLeave((to, form, next) => {
			return new Promise(() => {

				setTimeout(() => {

					next(false)
				}, 2000);
			})
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