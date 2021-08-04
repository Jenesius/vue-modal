<template>
	<div class = "modal">
		<p>{{title}}</p>
	</div>
</template>

<script>
	import {useModal} from "../../../plugin";
	export default {
		props: {
			title: {
				type: String,
				required: true
			}
		},
		setup(){
			
			const {closeModal} = useModal()
			
			return {closeModal};
		},
		name: "WidgetModalAlert"
	}
</script>

<style scoped>
	.modal {
		display: flex;
		flex-direction: column;
		gap: 5px;
		background-color: white;
		padding: 8px;
	}
</style>