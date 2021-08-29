<template>
	<widget-vocabulary name = "changeStylesInfo"/>

	<widget-code>{{codeModalContainer}}</widget-code>
	<widget-vocabulary name = "changeStylesExample"/>

	<widget-code>{{codeExampleStyles}}</widget-code>

	<!--Стиль переопределяет все остальные-->
	<!--
	<widget-vocabulary name = "example" class = "button purple" @click = "openModalStyle" tag = "button"/>
	-->
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeStyles";
import WidgetVocabulary from "../../WidgetVocabulary";
import ModalStyles from "../../modal/ModalStyles";
import {openModal} from "../../../../../../../plugin";
export default {
	setup: () => {

		function openModalStyle() {
			openModal(ModalStyles);
		}

		return {
			...code,
			openModalStyle
		}
	},
	name: "FragmentStyles",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>