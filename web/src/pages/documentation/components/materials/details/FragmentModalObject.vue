<template>
	<widget-vocabulary name = "methodsPushAndCloseReturnModalObject"/>
	<ul>
		<li><widget-vocabulary name = "modalObjectParamId"/></li>
		<li><widget-vocabulary name = "modalObjectParamClose"/></li>
		<li><widget-vocabulary name = "modalObjectParamOnclose"/></li>
	</ul>

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