<template>
	<div>

    	{{res}}
		<container/>
	</div>
</template>

<script setup lang="ts">

import {promptModal, container} from "@/index";
import ModalPromptValueWithHandler from "../../../tests/components/modal-prompt-value-with-handler.vue";
import {onMounted, ref} from "vue";

const res = ref()
onMounted(async () => {
	res.value = await promptModal(ModalPromptValueWithHandler, {
		value: 23
	})
})



</script>
<style>
.example-link {
  color: blue;
}
</style>
