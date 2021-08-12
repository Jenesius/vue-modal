<template>
	<p><widget-vocabulary name = "closeModalInfo"/></p>
	<widget-code>{{codeCloseModal}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import {codeCloseModal} from "./codeCloseModal";
import WidgetVocabulary from "../../WidgetVocabulary";

export default {
	setup: () => ({codeCloseModal}),
	name: "FragmentCloseModal",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>