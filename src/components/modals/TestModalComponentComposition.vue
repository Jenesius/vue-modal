<template>
	<p>{{ title }}</p>
</template>

<script>

import {onBeforeModalClose} from "../../../plugin";

export default {
	props: {
		title: {
			type: String,
			required: true
		}
	},
	setup(){

		const a = {b: 35};
		let b = 5;

		onBeforeModalClose(function() {

			console.log("Меня закрыли", a.b + b,this.title)

		})

		b = 15;


	},
	name: "TestModalComponentComposition"
}
</script>

<style scoped>

</style>