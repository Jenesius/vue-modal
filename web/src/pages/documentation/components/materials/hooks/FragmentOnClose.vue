<template>
	<p><widget-vocabulary name = "guardNavigationHooksOncloseInfo" :links = "[{name: 'details', hash: 'modal-object'}]"/></p>

	<widget-code>{{codeOnClose}}</widget-code>

	<div class = "flex gap_5 flex_align-center">
		<button class = "button purple" @click = "openModalWithoutHook"><widget-vocabulary name = "example"/></button>
		<span class = "text-comment"><widget-vocabulary name = "modal_was_close_after"/></span>

	</div>

	<p><widget-vocabulary name = "guardNavigationHooksOncloseReturnFalse"/></p>


	<p><widget-vocabulary name = "guardNavigationHooksOncloseList"/></p>

	<widget-code>{{codeOnCloseMiddle}}</widget-code>

</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeOnClose";
import {openModal} from "../../../../../../../plugin";
import WidgetModalWithClose from "../../../../../components/modals/WidgetModalWithClose";
import WidgetVocabulary from "../../WidgetVocabulary";

export default {
	setup(){

		async function openModalWithoutHook(){
			const modal = await openModal(WidgetModalWithClose);

			let count = 5;

			modal.onclose = () => {
				count--;
				if (count > 0 ) return false;
			}

		}

		return {
			openModalWithoutHook,
			...code
		}
	},
	name: "FragmentOnClose",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>