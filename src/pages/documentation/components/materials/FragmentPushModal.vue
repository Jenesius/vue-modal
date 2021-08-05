<template>
	<p>В случае, если вам необходимо показатьмодальное окно, а затем над ним показать ещё одно модальное окно(и т.д.), например окно подтверждения действия, необходимо использовать метод pushModal</p>

	<widget-code>{{codePushModal}}</widget-code>

	<widget-code name = "ModalFirst.vue">{{codePushModalComponent}}</widget-code>
	<widget-code name = "ModalSecond.vue">{{codePushModalComponent2}}</widget-code>

	<button class = "button purple" @click = "pushInfinityModals">Example</button>

	<p>Метод возвращает объект <router-link to = "/details#modal-object">modalObject</router-link>.</p>

	<p>Для закрытия только последнего модального окна используется метод <a href = "#pop-modal">popModal</a></p>

</template>

<script>
import WidgetCode from "../../../../components/WidgetCode";
import * as code from "./codePushModal";
import {pushModal} from "../../../../../plugin";
import WidgetModalExamplePush from "./../../../../components/modals/WidgetModalExamplePush";

export default {
	setup(){
		return {
			...code,
			pushInfinityModals: () => pushModal(WidgetModalExamplePush)
		}
	},
	name: "FragmentPushModal",
	components: {WidgetCode}
}
</script>

<style scoped>

</style>