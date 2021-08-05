<template>
	<div class = "flex">
	
		<div class = "navigation">

			<widget-navbar-item v-for = "(elem, index) in array" :key = "index" :title = "elem.title" :array = "elem.array" :link = "elem.link"/>

		</div>
	
		<div class = "content">


			<div v-for = "(elem, index) in arrayContent" :key = "index" :id = "elem.link">

				<h2 class = "content-form__title">{{ elem.title }}</h2>


				<component :is = "elem.component"  />

			</div>


		</div>
		
	</div>
</template>

<script>
	import WidgetNavbarItem from "./WidgetNavbarItem";
	import {useRoute} from "vue-router";
	import {computed} from "vue";

	export default {
		components: {WidgetNavbarItem},
		props: {
			array: Array
		},

		setup(props) {

			const route = useRoute();

			const arrayContent = computed(() => {

				const prettyPath = route.path.replace(/^\//, "" );

				//Текущая страница
				const currentObject = props.array.find(item => item.link === prettyPath);

				if (!currentObject) return [];


				return currentObject.array;
			});

			return {
				arrayContent
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

		width: 320px;
		padding: 24px 0;
	}

	.content{
		padding:  0 0 18px 0;
		width: 100%;
	}
</style>
