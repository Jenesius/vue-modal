<template>
	<p>Для получения входных параметров можно использовать <b>props.</b></p>
	<widget-code>{{codeComponentWithRoute}}</widget-code>

	<p>Использование <b>beforeRouteEnter</b>, <b>beforeRouteUpdate</b>, <b>beforeRouteLeave</b> на данном этапе невозможно. Я попытаюсь вскоре решить эту проблему.</p>
</template>

<script>
import * as code from "./code"
import WidgetCode from "../../../../../components/WidgetCode";
export default {
	components: {WidgetCode},
	setup: () => code,
	name: "FragmentParticularQualities"
}
</script>

<style scoped>

</style>