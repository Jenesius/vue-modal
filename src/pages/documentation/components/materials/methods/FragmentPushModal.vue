<template>
	<p><widget-vocabulary name = "using_pushModal"/></p>

	<widget-code>{{codePushModal}}</widget-code>

	<widget-code name = "ModalFirst.vue">{{codePushModalComponent}}</widget-code>
	<widget-code name = "ModalSecond.vue">{{codePushModalComponent2}}</widget-code>

	<button class = "button purple" @click = "pushInfinityModals"><widget-vocabulary name = "example"/></button>

	<p><widget-vocabulary name = "onAddModalReturn" :links = "[{name: 'details', hash: 'modal-object'}]"/></p>
	<widget-code>{{codePushModalReturn}}</widget-code>
	<p><widget-vocabulary name = "for_close_pushModal" :links = "[{hash: 'pop-modal'}]"/></p>


</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codePushModal";
import {pushModal} from "../../../../../../plugin";
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