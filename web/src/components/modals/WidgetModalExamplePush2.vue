<template>
	<button @click = "pushModal">Push first</button>
</template>
<script>
import {pushModal} from "../../../../plugin";
import WidgetModalExamplePush from "./WidgetModalExamplePush";
export default {
	setup(){
		return {
			pushModal: () => pushModal(WidgetModalExamplePush)
		}
	},
}
</script>