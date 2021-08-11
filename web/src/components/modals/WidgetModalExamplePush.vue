<template>
	<button @click = "pushModal">Push second</button>
</template>
<script>
import {pushModal} from "../../../../plugin";
import WidgetModalExamplePush2 from "./WidgetModalExamplePush2";
export default {
	setup(){
		return {
			pushModal: () => pushModal(WidgetModalExamplePush2)
		}
	},
}
</script>