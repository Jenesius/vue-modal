<template>
	<p><widget-vocabulary name = "guardNavigationHooksInComponent"></widget-vocabulary></p>

	<ul>
		<li>
			<p>beforeModalClose</p>
		</li>
	</ul>

	<widget-code>{{codeBeforeModalClose}}</widget-code>

</template>

<script>

import * as code from "./codeBeforeModalClose";
import WidgetCode from "../../../../../components/WidgetCode";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	components: {WidgetVocabulary, WidgetCode},
	setup: () => {


		return {...code};
	},
	name: "FragmentOnBeforeModalClose"
}
</script>

<style scoped>

</style>