<template>
	{{text}}
</template>

<script>
import {useVocabulary} from "../assets/js/Vocabulary";
export default {
	props: {
		name: String,
		links: Array
	},
	computed: {
		text(){

			return useVocabulary(this.name, {});

		}

	},
	name: "WidgetVocabulary"
}
</script>

<style scoped>

</style>