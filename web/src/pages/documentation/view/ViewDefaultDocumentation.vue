<template>

	<h1 class = "documentation-page__title">{{title}}</h1>

	<widget-material-container :title = "elem.title" v-for = "(elem, index) in array" :key = "index" :id = "elem.link">
		<component  :is = "elem.component"/>
	</widget-material-container>
</template>

<script>
import {useRoute} from "vue-router";
import {getConfigObject} from "../assets/js/AppStore";
import WidgetMaterialContainer from "../components/WidgetMaterialContainer";

export default {
	components: {WidgetMaterialContainer},
	setup(){

		const route = useRoute();

		const prettyPath = route.path.replace(/^\//, "" );

		let configuration = getConfigObject(prettyPath);

		let array = configuration?.array || [];
		let title = configuration.title;

		return {
			array,
			title
		}
	},

	name: "ViewDefaultDocumentation"
}
</script>

<style scoped>
	.documentation-page__title{
		text-transform: capitalize;
		padding: 73px 0 0 0 ;

		margin-top: -2.5rem;
		margin-bottom: 30px;

		font-size: 2.2rem;
		font-weight: 600;
		line-height: 1.25;
	}
</style>