<template>
	<widget-vocabulary name="integrationInfo"/>
	<widget-vocabulary name="integrationExample"/>

	<router-link :to = "{name: 'ExampleUserList'}" tag="button"><widget-vocabulary no-tag name = "goToExample"/></router-link>

</template>

<script>
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	name: "FragmentIntegrationInformation",
	components: {WidgetVocabulary},
}
</script>

<style scoped>

</style>