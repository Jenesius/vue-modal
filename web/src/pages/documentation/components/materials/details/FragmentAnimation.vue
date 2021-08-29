<template>
	<widget-vocabulary name="infoAnimation"/>
	<widget-code>{{codeConfigAnimation}}</widget-code>

	<widget-vocabulary name = "infoAnimationWarning"/>
	<widget-vocabulary name = "infoAnimationExample" />

	<p class = "text-comment">*<widget-vocabulary name = "insteadOfFadeAnyName" no-tag /></p>

	<widget-code>{{codeAnimationExample}}</widget-code>

	<widget-vocabulary name = "example" class = "button purple" @click = "openModalAnimation" tag = "button"/>

</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeAnimation";
import WidgetVocabulary from "../../WidgetVocabulary";
import ModalAnimation from "../../modal/ModalAnimation";
import {openModal} from "../../../../../../../plugin";
export default {
	setup: () => {

		function openModalAnimation(){
			openModal(ModalAnimation);
		}

		return {
			...code,
			openModalAnimation
		}
	},
	name: "FragmentAnimation",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>