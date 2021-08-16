<template>
	<widget-modal-wrap>
		<p>Close me</p>

		<button @click = "test">CloseModal</button>

	</widget-modal-wrap>
</template>

<script>
import WidgetModalWrap from "./WidgetModalWrap";
import {closeModal} from '../../../../plugin';

export default {
	setup: () => ({
		test: () => {
			closeModal()
			.catch(()=> {

			})
		}
	}),
	components: {WidgetModalWrap},
	name: "WidgetModalWithClose"
}
</script>

<style scoped>

</style>