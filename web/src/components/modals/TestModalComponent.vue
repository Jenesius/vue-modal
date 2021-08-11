<template>
	<p>{{title}}</p>
	<button @click = "close">close</button>

</template>

<script>

import {onBeforeModalClose, closeModal} from "../../../../plugin";

class Test{
	constructor() {
		this.title = "TEST BINDING"
	}
	show(){
		console.log(this.title);
	}
}
const test = new Test();
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
		onBeforeModalClose((next) => {

			console.log("NOPE", next(false));

		})
	},
	beforeModalClose(){

		test.show();
		console.log(this.title);
		console.log("Try Close test modal component.", );
	},
	name: "TestModalComponent"
}
</script>

<style scoped>

</style>