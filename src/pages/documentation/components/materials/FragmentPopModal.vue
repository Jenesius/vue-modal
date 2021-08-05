<template>
	<p>Для закрытия только последнего модального окна, если их было открыто несколько при помощи метода pushModal, используется метод popModal:</p>
	<widget-code>{{codePopModal}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../components/WidgetCode";
import {codePopModal} from "./codePopModal";
export default {
	name: "FragmentPopModal",
	setup: () => ({codePopModal}),
	components: {WidgetCode}
}
</script>

<style scoped>

</style>