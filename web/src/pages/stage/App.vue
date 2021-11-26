<template>
	<WidgetModalContainer/>
	<button @click = "open">open</button>

	<div class = "div-long"></div>
</template>

<script>
import {container, openModal} from "../../../../plugin";
import ModalTest from "../../../../tests/unit/ModalTest";
export default {
	methods: {
		async open(){
			const a  = await openModal(ModalTest, {title: "test"});

		}
	},
	components: {WidgetModalContainer: container},
	name: "App.vue"
}
</script>

<style scoped>
	.div-long{
		height: 5000px;
	}
</style>