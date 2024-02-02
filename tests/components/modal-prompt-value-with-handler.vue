<template>
	<div>
		<p>{{ value }}</p>
		<button @click="handleClick"></button>
	</div>
</template>

<script setup lang="ts">
import Modal from "../../src/utils/Modal";
import onBeforeModalClose from "../../src/hooks/onBeforeModalClose";

interface IProps {
	value: any,
}
const props = defineProps<IProps>()
const emits = defineEmits<{
	(event: typeof Modal.EVENT_PROMPT, value: any): void
}>()

function handleClick() {
	emits(Modal.EVENT_PROMPT, props.value);
}

let canClosed = false;
onBeforeModalClose(e => {
	if (!canClosed) {
		canClosed = true;
		return false;
	}
	return true;
})



</script>
