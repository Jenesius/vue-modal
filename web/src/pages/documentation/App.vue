<template>
	<header class = "header">

		<div class = "header__mobile-menu-button desktop-hide" @click = "toggleMenu">
			<img src = "./../../assets/ico/menu.svg" alt = "menu" />
		</div>

		<div class = "flex header__container-logo">
			<img class = "header__logo" src = "./../../assets/ico/vue.svg" alt = "logo"/>

			<span class = "header__title mobile-hide">jenesius vue modal</span>
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



	<div class = "app-body">

		<div class = "app-content">
			<router-view/>
		</div>

		<WidgetNavbar />
	</div>

	<widget-modal-container/>

</template>

<script>

	import WidgetNavbar from "./components/WidgetNavbar";
	import {container} from "../../../../plugin";
	import "./assets/js/Vocabulary";
	import WidgetDropdown from "../../components/WidgetDropdown";
	import {useStore} from "vuex";

	export default {

		setup(){

			const store = useStore();

			function toggleMenu(){
				store.commit("toggleMenu");
			}

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
				arrayTransition,
				toggleMenu
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
	@media screen and (max-width: 768px){
		.header{
			padding: 0;
		}
		.header__container-logo{
			align-items: center;
		}
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

	@media screen and (min-width: 768px){
		.app-body{
			padding-left: 300px;
		}
	}

	.header__mobile-menu-button{


		padding: 10px;
	}
	.header__mobile-menu-button>img {
		height: 24px;
	}

</style>
