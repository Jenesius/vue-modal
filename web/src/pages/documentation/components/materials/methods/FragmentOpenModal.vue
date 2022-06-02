<template>

	<widget-vocabulary name = "openModalInfo" />

	<ul>
		<li><p><b>VueComponent</b> - <widget-vocabulary name = "addModalFirstParam" no-tag/></p></li>
		<li><p><b>props</b> - <widget-vocabulary name = "addModalSecondParam" no-tag/></p></li>
		<li><p><b>options</b> - <widget-vocabulary name = "optional" no-tag/> <widget-vocabulary name = "addModalThirdParam" no-tag/>
            <router-link to="/modal-options"><widget-vocabulary name = "moreInformation"/> </router-link>
        </p></li>
	</ul>

	<widget-code>{{codeOpenModal}}</widget-code>


	<widget-code name="AnyVueComponent.vue">{{ codeOpenModalSimpleComponent }}</widget-code>

	<p><widget-vocabulary name = "returnValue" tag = "b"/>: <widget-vocabulary name = "addModalReturnValue" :links = "[{name: 'Details', hash: 'modal-object'}]" no-tag/> </p>


	<widget-code>{{codeOpenModalReturn}}</widget-code>

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
