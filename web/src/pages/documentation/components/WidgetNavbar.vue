<template>

	<div class = "navigation" :class = "{active: active}">

		<widget-navbar-item v-for = "(elem, index) in array" :key = "index" :title = "elem.title" :array = "elem.array" :link = "elem.link"/>

	</div>


</template>

<script>
	import WidgetNavbarItem from "./WidgetNavbarItem";

	import {config} from "../assets/js/AppStore";
	import {useStore} from "vuex";
	import {computed} from "vue";

	export default {
		components: {WidgetNavbarItem},


		setup() {

			const array = config;


			const store = useStore();

			const active = computed(() => store.state.isMenuActive);

			return {
				array,
				active
			}
		},
		name: "WidgetNavbar"
	}
</script>

<style scoped>
	.navigation{

		--top: 63px;
		position: fixed;
		left: 0;

		top: var(--top);
		width: 300px;
		padding: 24px 0;

		background-color: white;
		transition: transform 0.3s;
	}



	@media screen and (max-width: 768px){
		.navigation{
			--top: 48px;
			height: calc(100% - var(--top));
			overflow-y: auto;
			padding: 0;
			top: var(--top);

			transform: translateX(-300px);
		}
		.navigation.active{
			transform: translateX(0);
		}
	}

</style>
