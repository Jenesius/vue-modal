<template>
	<widget-modal-container/>


	<div class = "flex-column">
		<router-link to = "/a">a</router-link>
		<router-link to = "/modal-a">modal a</router-link>
		<router-link to = "/c">c</router-link>
		<router-link to = "/d">d</router-link>
		<router-link to = "/e">e</router-link>
	</div>
	<router-link to="/user-list">user-list</router-link>
	<router-link to="/user-list/3">user-list-3</router-link>



	<button @click = openModalButton>open</button>
	<modal-button v-on = "handle"/>

	<router-view/>



</template>

<script setup>

	import {container as WidgetModalContainer, openModal} from "./../../../../plugin/index";
	import ModalButton from "./modal-button";
	async function openModalButton() {
		const modal = await openModal(ModalButton);
		modal.on("test", v => {
			console.log(v);
		})
	}
	const handle = {
		test: [(...atr) => {
			console.log("test", ...atr)
		}, () => {
			console.log('ttt')
		}]
	}

	
	let b;
</script>

<style>
	@import "../../assets/css/index.css";

	html{
		background-color: #1b062d;
	}

	.fade-enter-active,
	.fade-leave-active,
	.fade-enter-active .modal-item,
	.fade-leave-active .modal-item
	{
		transition: 0.2s;
	}


	.fade-enter , .fade-leave-to{

		opacity: 0;
	}
	.fade-enter .modal-item, .fade-leave-to .modal-item{
		transform: translateX(100px);
	}

</style>
