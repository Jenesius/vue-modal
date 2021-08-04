<template>
	<widget-modal-wrap class = "modal-test-1">
		
		<p class = "modal-title">{{title || "Default title"}}</p>
		
		<div class = "input-container">
			<p class = "input-title">Name</p>
			<input type = "text" v-model = "state.name"/>
		</div>
		
		<div  class = "input-container">
			<p class = "input-title">Question</p>
			<textarea class = "input-question" v-model = "state.question"/>
		</div>
		
		
		<p class = "input-title" v-if = "state.answer">Answer - {{state.answer}}</p>
		
		<button class = "button green" @click = "push">ask</button>
	</widget-modal-wrap>


</template>

<script>
	import {pushModal} from "../../../plugin";
	import WidgetModalConfirm from "./WidgetModalConfirm";
	import WidgetModalWrap from "./WidgetModalWrap";
	import {reactive} from "vue";
	
	export default {
		components: {WidgetModalWrap},
		props: {
			title: {
				type: String,
				default: "Default title"
			}
		},
		setup(){
			
			const state = reactive({
				name: "Jenesius",
				question: "U love jenesius-vue-modal?",
				answer  : null
			})
			
			const getParams = () => ({
				title: state.name,
				text : state.question,
				resolve: () => {
					state.answer = "Yes";
				},
				reject: () => {
					state.answer = "No";
				}
			});
			

			function push() {
				pushModal(WidgetModalConfirm, getParams());
			}
			
			return {
				open,
				push,
				state
			}
		},
		name: "WidgetModalQuestion"
	}
</script>

<style scoped>
.modal-test-1{
	width: auto;
	display: flex;
	
	flex-direction: column;
}

.modal-title{
	margin: 6px 0;
	font-family: Verdana,serif;
	font-size: 15px;
}
.input-container{
	margin: 6px 0;
}

.input-question{
	max-width:600px;
	min-width: 150px;
}


</style>
