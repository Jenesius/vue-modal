<template>
	<widget-vocabulary name = "informationGetStarted"/>
	<widget-code>
		{{init}}
	</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeGettingStarted";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	setup: () => ({...code}),
	name: "FragmentGettingStarted",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>