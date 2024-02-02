<template>
	<p>{{ value }}</p>
	<button @click="handleClick"></button>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import Modal from "../../src/utils/Modal";

interface IProps {
	value: any,
	timeout?: number
}

const props = withDefaults(defineProps<IProps>(), {
	timeout: 1 * 1000
})
const emits = defineEmits<{
	(event: typeof Modal.EVENT_PROMPT, value: any): void
}>()
function handleClick() {
	emits(Modal.EVENT_PROMPT, props.value);

}

onMounted(() => {
	setTimeout(handleClick, props.timeout)
})

</script>
