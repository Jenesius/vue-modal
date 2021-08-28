<template>
	<p>Для доступа к стилям есть два класса: *modal-container* и *modal-back*</p>
	<ul>
		<li><b>modal-container</b> - блок, в который помещается модальная комопнента. По умолчанию, она имеет сделюущие свойства</li>
		<widget-code>{{codeModalContainer}}</widget-code>
		<li><b>modal-back</b> - фон, который находится за модлаьным окном.</li>
		<widget-code>{{codeModalBack}}</widget-code>
	</ul>
	<p>Для примера, давайте поменяем фон у модального окна, и сделаем так, чтобы оно откарывалось внизу:</p>

	<widget-code>{{codeExampleStyles}}</widget-code>

	<widget-vocabulary name = "example" class = "button purple" tag = "button"/>

</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeStyles";
import WidgetVocabulary from "../../WidgetVocabulary";
export default {
	setup: () => code,
	name: "FragmentStyles",
	components: {WidgetVocabulary, WidgetCode}
}
</script>

<style scoped>

</style>