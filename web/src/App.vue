<template>
	<div>
		<p>Welcome</p>
		<button @click = "open">open</button>
		<modal-container />
	</div>
</template>

<script setup lang="ts">
    import {container as ModalContainer, openModal, config} from "../../plugin/index";
	import Modal from "./Modal.vue"
    function open(){
        openModal(Modal);
    }

</script>
