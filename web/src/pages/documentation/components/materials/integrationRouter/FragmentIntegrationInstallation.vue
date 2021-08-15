<template>
	<ul>
		<li>
			<widget-vocabulary name = "dontForgetAboutInitialize"/>
		</li>
		<li>
			<widget-vocabulary name = "onRouterCreatedAddModal"/>

			<widget-code>{{codeIntegration}}</widget-code>
			<widget-vocabulary name = "resultRouterCreatedAddModal"/>
		</li>
		<li>
			<widget-vocabulary name = "addRouterModal"/>

			<widget-code>{{codeModalNavigation}}</widget-code>

			<widget-vocabulary name = "resultAddRouterModal"/>
		</li>
	</ul>
</template>

<script>
import * as code from "./code";
import WidgetCode from "../../../../../components/WidgetCode";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	components: {WidgetVocabulary, WidgetCode},
	setup: () => code,
	name: "FragmentIntegrationInstallation"
}
</script>

<style scoped>

</style>