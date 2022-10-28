<template>
  <p>{{value}}</p>
</template>

<script setup lang = "ts">
import {defineEmits, defineProps, onMounted} from "vue";
import Modal from "../../plugin/utils/Modal";

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


onMounted(() => {
  setTimeout(() => {
    emits(Modal.EVENT_PROMPT, props.value);
  })
})

</script>
