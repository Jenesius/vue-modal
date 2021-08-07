<template>
	<p><widget-vocabulary name = "guardNavigationHooksCompositionApiInfo"></widget-vocabulary></p>
	<widget-code>{{codeBeforeModalClose}}</widget-code>
</template>

<script>
import * as code from "./codeOnBeforeModalClose"
import WidgetCode from "../../../../../components/WidgetCode";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	setup: () =>({...code}),
	name: "FragmentOnBeforeModalClose",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>