<template>
	<div class = "header">

		<div class = "flex">
			<img class = "header__logo" src = "./../../assets/ico/vue.svg"/>

			<span class = "header__title">Jenesius vue modal</span>
		</div>

		<nav class = "header__list">

			<a href = "https://github.com/Jenesius/vue-modal">GitHub</a>

		</nav>

	</div>

	<widget-modal-container/>

	<div class = "app-content">
		<WidgetNavbar :array="navbarConfig"/>
	</div>
</template>

<script>
	import FragmentOpenModal from "./components/materials/FragmentOpenModal";
	import WidgetNavbar from "./components/WidgetNavbar";
	import FragmentPushModal from "./components/materials/FragmentPushModal";
	import FragmentCloseModal from "./components/materials/FragmentCloseModal";
	import {container} from "../../../plugin";
	import FragmentPopModal from "./components/materials/FragmentPopModal";
	import FragmentOnClose from "./components/materials/hooks/FragmentOnClose";
	import FragmentModalObject from "./components/materials/details/FragmentModalObject";
	export default {
		components: {WidgetNavbar, WidgetModalContainer: container},
		setup(){



			//if (route.path === "/") router.replace("/essentials#installation")

			const navbarConfig = [
				{
					title: "Essentials",
					link : "essentials",
					array: [
						{
							title: "Installation",
							link : "installation",
						}
					]
				},
				{
					title: "Methods",
					link : "methods",
					array: [
						{
							title: "OpenModal",
							link : "open-modal",
							component: FragmentOpenModal
						},
						{
							title: "PushModal",
							link : "push-modal",
							component: FragmentPushModal
						},
						{
							title: "CloseModal",
							link : "close-modal",
							component: FragmentCloseModal
						},
						{
							title: "PopModal",
							link : "pop-modal",
							component: FragmentPopModal
						}
					]
				},
				{
					title: "Lifecycle Hooks",
					link : "lifecycle-hooks",
					array: [
						{
							title: "onClose",
							link : "on-close",
							component: FragmentOnClose
						}
					]
				},
				{
					title: "Details",
					link : "details",
					array: [
						{
							title: "ModalObject",
							link : "modal-object",
							component: FragmentModalObject
						},
						{
							title: "Styles",
							link : "styles"
						},
						{
							title: "Animation",
							link : "animation"
						}
					]
				},
				{
					title: "Best practices",
					link : "best-practices",
					array: [
						{
							title: "Wrapping",
							link : "wrapping"
						}
					]
				}
			]
			
			return {navbarConfig}
			
		},
		
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
	}

	.header__list{
		align-items: center;
		display: flex;

	}
	.header__list a{
		color:#2c3e50;

	}
</style>
