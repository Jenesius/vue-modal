<template>
	<p>{{title}}</p>
	<button @click = "close">close</button>

</template>

<script>

import {onBeforeModalClose, closeModal} from "../../../../plugin";



export default {
	props: {
		title: {
			type: String,
			required: true
		}
	},
	methods:{
		close(){
			closeModal();
		}
	},
	setup(){
		onBeforeModalClose(() => {


		})
	},
	name: "TestModalComponent"
}
</script>

<style scoped>

</style>