<template>
	<widget-modal-wrap>
		<p>Close me</p>

		<button @click = "closeModal">CloseModal</button>

	</widget-modal-wrap>
</template>

<script>
import WidgetModalWrap from "./WidgetModalWrap";
import {closeModal} from '../../../plugin';

export default {
	setup: () => ({closeModal}),
	components: {WidgetModalWrap},
	name: "WidgetModalWithClose"
}
</script>

<style scoped>

</style>