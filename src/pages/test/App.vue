<template>

	<router-link to = "/a">a</router-link>
	<router-link to = "/b">b</router-link>
	<router-link to = "/c">c</router-link>
	<router-link to = "/d">d</router-link>

	<widget-modal-container/>

	<button @click = "add">Add</button>
	<button @click = "add1">Add1</button>

	<router-view/>

</template>

<script>

	/*eslint-disable*/
    import WidgetModalContainer from "../../../plugin/WidgetModalContainer";
	import TestModalComponent from "../../components/modals/TestModalComponent";
	import {pushModal} from "../../../plugin";
	import {onBeforeRouteLeave} from "vue-router";
	import TestModalComponentComposition from "../../components/modals/TestModalComponentComposition";

	export default {

		methods: {

			add(){
				pushModal(TestModalComponentComposition, {title: "hi"});
				pushModal(TestModalComponentComposition, {title: "hi2"});
				pushModal(TestModalComponentComposition, {title: "hi3"});
			},
			add1(){
				pushModal(TestModalComponent, {title: "hi3"});
			}

		},

        name: "App",
		components: {WidgetModalContainer}
	}
</script>

<style scoped>
	@import "../../assets/css/index.css";
	
	.app-main{
		padding: 200px 0;
		text-align: center;
	}
	.app-header{
		display: flex;
		justify-content: space-between;
		padding: 14px 0;
	}
	.app-main__title{
		font-size: 44px;
		line-height: 68px !important;
		color: black;
		font-weight: 600;
	}
	.app-main__text{
		font-size: 24px;
		line-height: 42px;
		color: gray;
		font-weight: 300;
	}
	

	
</style>
