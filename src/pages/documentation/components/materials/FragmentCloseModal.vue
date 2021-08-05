<template>
	<p>Для закрытия <b>всех</b> модальных окон используется метод closeModal:</p>
	<widget-code>{{codeCloseModal}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../components/WidgetCode";
import {codeCloseModal} from "./codeCloseModal";

export default {
	setup: () => ({codeCloseModal}),
	name: "FragmentCloseModal",
	components: {WidgetCode}
}
</script>

<style scoped>

</style>