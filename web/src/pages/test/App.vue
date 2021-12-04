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



	<button @click = "add">Add</button>
	<button @click = "add1">Add1</button>

	<button @click = "show">show queue</button>
	<button @click = "test">Start test</button>
	<button @click = "openModal1">Open Modal</button>
	<button @click = "openLevel">Level test</button>


	<router-view/>



</template>

<script>

	/*eslint-disable*/
	import TestModalComponent from "../../components/modals/TestModalComponent";
	import {pushModal, container, openModal} from "./../../../../plugin/index";
	import TestModalComponentComposition from "../../components/modals/TestModalComponentComposition";
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
                console.log(a.target);
                console.log(a.target.val);
			},
			test(){

				this.$router.push("/modal-a");

				setTimeout(() => {
					this.$router.push("/a")
				}, 2000);


			},
			openLevel(){
				this.$router.push("/level/test")
			},
			add(){
				pushModal(TestModalComponentComposition, {title: "hi"});
				pushModal(TestModalComponentComposition, {title: "hi2"});
				pushModal(TestModalComponentComposition, {title: "hi3"});
			},
			add1(){
				const m = pushModal(TestModalComponent, {title: "hi3"});

				m.onclose = (next) => {

					return new Promise((resolve, reject) => {
						setTimeout(() => {
							reject(false);
						}, 2000);
					})

				}
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
