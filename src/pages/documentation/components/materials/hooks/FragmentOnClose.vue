<template>
	<p>Методы openModal и pushModal возвращают объект <router-link to = "/details#modal-object">modalObject</router-link>. Для того, чтобы отлавливать закрытие модального окна, нужно добавить эвент к этому объекту:</p>

	<widget-code>{{codeOnClose}}</widget-code>

	<div class = "flex gap_5 flex_align-center">
		<button class = "button purple" @click = "openModalWithoutHook">Example</button>

		<span class = "text-comment">*Modal was closed after 5 trying.</span>
	</div>

	<p>В случае, если onclose вернёт <b>false</b>, модальное окно не будет закрыто.</p>

	<p>Если будет открыто несколько модальных окон, и на одном из них будет стоять обработчик onclose, возвращающий false, можно закрыть будет только те, модальных окна, которые были открыты после него.</p>

	<widget-code>{{codeOnCloseMiddle}}</widget-code>

</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeOnClose";
import {openModal} from "../../../../../../plugin";
import WidgetModalWithClose from "../../../../../components/modals/WidgetModalWithClose";

export default {
	setup(){

		function openModalWithoutHook(){
			const modal = openModal(WidgetModalWithClose);

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
	components: {WidgetCode}
}
</script>

<style scoped>

</style>