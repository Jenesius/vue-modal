<template>
	<p><widget-vocabulary name = "return_modalObject"/></p>
	<p><widget-vocabulary name = "param_id_modalObject"/></p>
	<p><widget-vocabulary name = "param_close_modalObject"/></p>
	<p><widget-vocabulary name = "param_onclose_modalObject"/></p>

	<widget-code>{{codeOnClose}}</widget-code>
	<widget-code>{{codeModalObject}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeModalObject";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	setup: () => ({...code}),
	name: "FragmentModalObject",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>