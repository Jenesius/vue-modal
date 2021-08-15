<template>
	<widget-vocabulary name = "propsRouterModal" />
	<widget-code>{{codeComponentWithRoute}}</widget-code>

	<widget-vocabulary name = "useRouterNavigationGuard" />
</template>

<script>
import * as code from "./code"
import WidgetCode from "../../../../../components/WidgetCode";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	components: {WidgetVocabulary, WidgetCode},
	setup: () => code,
	name: "FragmentParticularQualities"
}
</script>

<style scoped>

</style>