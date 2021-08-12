<template>
	<widget-vocabulary name = "guardAsyncInfo"/>

	<widget-code>{{codeAsync}}</widget-code>
	<widget-vocabulary name = "or"/>
	<widget-code>{{codePromise}}</widget-code>
</template>

<script>
import WidgetVocabulary from "../../WidgetVocabulary";
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeGuardAsync";
export default {
	setup: () => code,
	name: "FragmentGuardAsync",
	components: {WidgetCode, WidgetVocabulary}
}
</script>

<style scoped>

</style>