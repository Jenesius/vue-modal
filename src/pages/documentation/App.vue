<template>
	<header class = "header">

		<div class = "flex">
			<img class = "header__logo" src = "./../../assets/ico/vue.svg" alt = "logo"/>

			<span class = "header__title">jenesius vue modal</span>
		</div>

		<ul class = "header__list">

			<li>
				<widget-dropdown title = "Translations" :array = "arrayTransition"/>
			</li>

			<li>
				<a href = "https://github.com/Jenesius/vue-modal">GitHub</a>
			</li>


		</ul>

	</header>

	<widget-modal-container/>

	<div class = "app-content">

		<router-view/>

		<WidgetNavbar />
	</div>
</template>

<script>

	/*eslint-disable*/

	import WidgetNavbar from "./components/WidgetNavbar";
	import {container, openModal, pushModal} from "../../../plugin";
	import "./assets/js/Vocabulary";
	import WidgetDropdown from "../../components/WidgetDropdown";

	import WidgetModalAlert from "../../components/modals/WidgetModalAlert";
	import {onMounted} from "vue";
	import TestModalComponentComposition from "../../components/modals/TestModalComponentComposition";
	import TestModalComponent from "../../components/modals/TestModalComponent";



	export default {

		mounted() {
			console.log("+");
		},
		setup(){


			onMounted(() => {
				/*openModal(TestModalComponentComposition, {title: "Modal 1"});
				pushModal(TestModalComponentComposition, {title: "Modal 2"});
				pushModal(TestModalComponentComposition, {title: "Modal 3"});*/


				openModal(TestModalComponent, {title: "Modal - 1"})
				pushModal(TestModalComponent, {title: "Modal - 2"})
				pushModal(TestModalComponent, {title: "Modal - 3"})

			})


			const arrayTransition = [
				{
					title: "English",
					func : () => {
						localStorage.setItem("language", "en");
						location.reload();
					}
				},
				{
					title: "Русский",
					func : () => {
						localStorage.setItem("language", "ru");
						location.reload();
					}
				}
			];

			return {
				arrayTransition
			};
		},
		components: {WidgetDropdown, WidgetNavbar, WidgetModalContainer: container},
		name: "App"
	}
</script>

<style scoped>
	@import "../../assets/css/index.css";

	.header{
		position: sticky;
		top:0;

		display: flex;
		align-content: center;
		justify-content: space-between;
		gap: 8px;

		padding: 15px 20px;

		border-bottom: 1px solid #eaecef;

		background-color: white;
	}
	.header__logo{
		height: 32px;
	}
	.header__title{
		display: flex;
		align-content: center;
		font-size: 1.3rem;
		line-height: 32px;
		font-weight: 500;
		color: #2c3e50;

		text-transform: capitalize;
	}

	.header__list{
		align-items: center;
		display: flex;
		margin: 0;
		list-style: none;

	}
	.header__list>li{
		margin: 0 10px;
	}
	.header__list a{
		color:#2c3e50;

	}
</style>
