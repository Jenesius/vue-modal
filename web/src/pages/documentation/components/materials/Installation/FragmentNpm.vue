<template>
	<p><widget-vocabulary name = "recommendation_npm"/></p>
	<widget-code>{{codeNpmInstall}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeNpm";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	setup: () => ({...code}),
	name: "FragmentNpm",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>