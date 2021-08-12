<template>
	<p><widget-vocabulary name = "info_popModal"/></p>
	<widget-code>{{codePopModal}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import {codePopModal} from "./codePopModal";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	name: "FragmentPopModal",
	setup: () => ({codePopModal}),
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>