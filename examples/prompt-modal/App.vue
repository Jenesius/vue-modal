<template>
	<div>
    <button @click = "openCodeModal">Open Again</button>
    <span>Code: {{code}}</span>

    <modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, promptModal} from "../../plugin/index";
import {onMounted, ref} from "vue";
  import ModalCode from "./modal-code.vue";

  const code = ref("")

  async function openCodeModal() {
    code.value = await promptModal(ModalCode)
  }

  onMounted( () => {
    openCodeModal();
  })

</script>
