<template>

	<div class = "flex-column">
		<router-link to = "/a">a</router-link>
		<router-link to = "/b">b</router-link>
		<router-link to = "/c">c</router-link>
		<router-link to = "/d">d</router-link>
		<router-link to = "/e">e</router-link>
	</div>
	<router-link to="/user-list">user-list</router-link>
	<router-link to="/user-list/3">user-list-3</router-link>

	<widget-modal-container/>

	<button @click = "add">Add</button>
	<button @click = "add1">Add1</button>

	<button @click = "show">show queue</button>



	<router-view/>

	<router-view name = "test"/>

</template>

<script>

	/*eslint-disable*/
	import TestModalComponent from "../../components/modals/TestModalComponent";
	import {pushModal, container} from "./../../../../plugin/index";
	import TestModalComponentComposition from "../../components/modals/TestModalComponentComposition";

	export default {

/*
		mounted() {
			class ModalError extends Error{
				isModalError;
				constructor(message) {
					super();

					this.isModalError = true;
					this.message = message;
				}

				static Undefined(id) {
					return new ModalError(`Modal with id: ${id} not founded. The modal window may have been closed earlier.`);
				}

				static nextReject(id){
					return new ModalError(`Next function from hook was rejected. Modal id ${id}`);
				}

			}
			function guardToPromiseFn(guard, id){
				return () => new Promise((resolve, reject) => {

					const next = (valid) => {

						if (valid === false) return reject(ModalError.nextReject(id));
						if (valid instanceof Error) reject(valid);

						resolve();
					};

					//First params is function-warning: next now is not available

					const nextWarning = (v = null) => {
						const err = new ModalError(
							`Resolver function 'next' in modal's hooks no longer supported. (^1.2.0 version jenesius-vue-modal). You should return false/true values.`
						);
						console.warn(err);

						//return throw ModalError.nextReject(4);
					};

					Promise.resolve(guard.call(null, nextWarning))
					.then(next)
					.catch(err => reject(err));
				});
			}


			const test = guardToPromiseFn(() => false,0);

			test()
			.then(res => console.log(res))
			.catch(err => console.warn(err));


		},*/
		methods: {


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
