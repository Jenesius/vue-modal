<template>

	<p><widget-vocabulary name = "using_openModal" /></p>

	<widget-code>{{codeOpenModal}}</widget-code>

	<p><widget-vocabulary name = "first_param_openModal" /></p>

	<widget-code>{{ codeOpenModalSimpleComponent }}</widget-code>

	<p><widget-vocabulary name = "second_param_openModal" /></p>

	<p><widget-vocabulary name = "onAddModalReturn" :links = "[{name: 'Details', hash: 'modal-object'}]" /></p>

	<widget-code>{{codeOpenModalReturn}}</widget-code>

	<p><widget-vocabulary name = "about_close_openModal" :links = "[{hash: '#push-modal'}]"/></p>

</template>

<script>
	import WidgetCode from "../../../../../components/WidgetCode";
	import * as code from "./codeOpenModa";
	import WidgetVocabulary from "../../WidgetVocabulary";

	export default {

		setup(){



			return code
		},

		name: "FragmentOpenModal",
		components: {WidgetVocabulary, WidgetCode}
	}
</script>

<style scoped>

</style>
