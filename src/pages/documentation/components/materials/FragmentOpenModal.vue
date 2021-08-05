<template>

	<p>Метод openModal используется для показа компоненты в контейнере модальных окон. </p>

	<widget-code>{{codeOpenModal}}</widget-code>

	<p>В качестве первого параметра выступает любой VueComponent, который нужно отобразить: </p>

	<widget-code>{{ codeOpenModalSimpleComponent }}</widget-code>

	<p>В качестве второго параметра передаются входные данные props.</p>

	<p>Метод возвращает объект <router-link to = "/details#modal-object">modalObject</router-link>.</p>

	<p>При показе модальных окон этим методом, все предыдущие окна будут закрыты. Для налаживания модальных окон друг на друг используйте <a href = "#push-modal">pushModal</a>.</p>

</template>

<script>
	import WidgetCode from "../../../../components/WidgetCode";
	import {codeOpenModal, codeOpenModalSimpleComponent} from "./codeOpenModa";

	export default {

		setup(){



			return {codeOpenModal,codeOpenModalSimpleComponent}
		},

		name: "FragmentOpenModal",
		components: {WidgetCode}
	}
</script>

<style scoped>

</style>
