<template>
	<header class = "header">

		<div class = "flex">
			<img class = "header__logo" src = "./../../assets/ico/vue.svg" alt = "logo"/>

			<span class = "header__title">Jenesius vue modal</span>
		</div>

		<nav class = "header__list">

			<a href = "https://github.com/Jenesius/vue-modal">GitHub</a>

		</nav>

	</header>

	<widget-modal-container/>

	<div class = "app-content">

		<router-view/>

		<WidgetNavbar />
	</div>
</template>

<script>

	import WidgetNavbar from "./components/WidgetNavbar";
	import {container} from "../../../plugin";
	import "./assets/js/Vocabulary";
	export default {
		components: {WidgetNavbar, WidgetModalContainer: container},

		
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
