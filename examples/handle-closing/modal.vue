<template>
	<div class="modal-window">
		<p>{{ msg }}</p>
		<button @click = "closeModal()">close</button>
	</div>
</template>

<script>
import {closeModal} from "@/index";

export default {
	methods: {closeModal},
	props: {
		msg: String
	},
	name: "modal"
}
</script>

<style scoped>

</style>