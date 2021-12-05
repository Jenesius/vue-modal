<template>
	<widget-modal-container/>

	<div class = "">

		<button @click = "animationClick">open</button>

	</div>

	<div class = "flex-column">
		<router-link to = "/a">a</router-link>
		<router-link to = "/b">b</router-link>
		<router-link to = "/c">c</router-link>
		<router-link to = "/d">d</router-link>
		<router-link to = "/e">e</router-link>
	</div>
	<router-link to="/user-list">user-list</router-link>
	<router-link to="/user-list/3">user-list-3</router-link>




	<button @click = "openModal1">Open Modal +++</button>


	<router-view/>



</template>

<script>

	import {container, openModal} from "./../../../../plugin/index";
	import Modal from "./Modal";
	import PrettyModal from "./PrettyModal";

	export default {


		methods: {
			animationClick(){
				openModal(PrettyModal);
			},
			async openModal1(){
				const a = await openModal(Modal, {val: "qwerty"});

                a.onclose = () => {
                    console.log("This:", this);
                }

                a.on('update', function (e){

                })

                console.log(a);

			},



		},

        name: "App",
		components: {WidgetModalContainer: container}
	}
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
