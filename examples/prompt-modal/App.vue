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
<style>
button {
  border: 1px solid #e3e3e3;
  padding: 4px 8px;
  cursor: pointer;
  transition: 0.1s;
}
button:hover {
  transform: scale(0.96);
}
</style>