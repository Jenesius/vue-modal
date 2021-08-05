<template>
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

		let  array = getConfigObject(prettyPath)?.array || [];


		return {
			array
		}
	},

	name: "ViewDefaultDocumentation"
}
</script>

<style scoped>

</style>