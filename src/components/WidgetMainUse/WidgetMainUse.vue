<template>
	<div class = "widget-main">
		
		<p class = "title-md">How to    use?</p>
		
		<widget-code name = "App.vue">{{App}}</widget-code>
		
		<widget-code name = "Modal.vue">{{Modal}}</widget-code>

		<div class = "widget-main__result">
			<button class = "button purple" @click = "openAlert">Result</button>
			
			<p>*Don't forget to add css styles for you modals. Like background-color: white and other</p>
		</div>
		
	</div>
</template>

<script>
	import WidgetCode from "../WidgetCode";
	import {App, Modal} from "./filesHtml";
	import WidgetModalAlert from "../modals/WidgetModalAlert";
	import {useModal} from "../../../plugin";
	
	export default {
		
		setup(){
			
			const {openModal} = useModal();

			function openAlert(){
				openModal(WidgetModalAlert, {
					title: "Hello world!"
				})
			}
			
			return {App, Modal, openAlert};
			
		},
		
		name: "WidgetMainUse",
		components: {WidgetCode}
	}
</script>

<style scoped>
	.widget-main__result{
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.widget-main__result>p{
		color: #625e5e;
		font-size: 13px;
	}
</style>