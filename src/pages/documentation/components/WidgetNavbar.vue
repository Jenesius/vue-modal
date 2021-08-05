<template>

	<div class = "navigation">

		<widget-navbar-item v-for = "(elem, index) in array" :key = "index" :title = "elem.title" :array = "elem.array" :link = "elem.link"/>

	</div>


</template>

<script>
	import WidgetNavbarItem from "./WidgetNavbarItem";

	import {config} from "../assets/js/AppStore";

	export default {
		components: {WidgetNavbarItem},


		setup() {

			const array = config;



			return {
				array
			}
		},
		name: "WidgetNavbar"
	}
</script>

<style scoped>
	.content-form__title{
		font-size: 20px;
		line-height: 32px;
		font-weight: 500;

		border-bottom: 1px solid #eaecef;

		margin-top: -3.1rem;
		padding-top: 4.6rem;
	}

	.navigation{
		position: fixed;
		left: 0;

		top: 63px;
		width: 320px;
		padding: 24px 0;
	}

	.content{
		padding:  0 0 18px 0;
		width: 100%;
	}
</style>
