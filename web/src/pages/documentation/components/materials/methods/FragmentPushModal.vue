<template>
	<widget-vocabulary name = "pushModalInfo"/>
	<ul>
		<li><p><b>VueComponent</b> - <widget-vocabulary name = "addModalFirstParam" no-tag/></p></li>
		<li><p><b>props</b> - <widget-vocabulary name = "addModalSecondParam" no-tag/></p></li>
	</ul>

	<widget-code>{{codePushModal}}</widget-code>

	<widget-code name = "ModalFirst.vue">{{codePushModalComponent}}</widget-code>
	<widget-code name = "ModalSecond.vue">{{codePushModalComponent2}}</widget-code>

	<widget-vocabulary name = "example" class = "button purple" tag = "button" @click = "pushInfinityModals"/>

	<p><widget-vocabulary name = "returnValue" tag = "b"/>: <widget-vocabulary name = "addModalReturnValue" :links = "[{name: 'Details', hash: 'modal-object'}]" no-tag/> </p>

	<widget-code>{{codePushModalReturn}}</widget-code>
	<p><widget-vocabulary name = "howCloseLastModal" :links = "[{hash: 'pop-modal'}]"/></p>


</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codePushModal";
import {pushModal} from "../../../../../../../plugin";
import WidgetModalExamplePush from "../../../../../components/modals/WidgetModalExamplePush";
import WidgetVocabulary from "../../WidgetVocabulary";

export default {
	setup(){
		return {
			...code,
			pushInfinityModals: () => pushModal(WidgetModalExamplePush)
		}
	},
	name: "FragmentPushModal",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>