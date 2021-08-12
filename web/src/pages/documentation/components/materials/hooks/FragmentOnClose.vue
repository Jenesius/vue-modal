<template>
	<widget-vocabulary name = "guardNavigationHooksOncloseInfo" :links = "[{name: 'details', hash: 'modal-object'}]"/>

	<widget-code>{{codeOnClose}}</widget-code>

	<div class = "flex gap_5 flex_align-center">
		<widget-vocabulary name = "example" class = "button purple" @click = "openModalWithoutHook" tag = "button"/>
		<span class = "text-comment">*<widget-vocabulary name = "closeModalAfterFiveAttempts" no-tag /></span>

	</div>

	<widget-vocabulary name = "guardNavigationHooksOncloseList"/>

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