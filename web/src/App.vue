<template>
	<div>
		<p>Welcome</p>
		<button @click = "open">open</button>
		<modal-container />
		<button @click = "add">add</button>
		<router-view/>
	</div>
</template>

<script setup lang="ts">
    import {container as ModalContainer, openModal, config} from "../../plugin/index";
	import Modal from "./Modal.vue"
	import {computed, reactive, ref} from "vue";
	const ref1 = ref(4)

	function add() {
		ref1.value = ref1.value + 1;
	}
    async function open(){
		const modal = await openModal(Modal);
    	modal.onclose = (event) => {
			console.log(event);
		}

		console.log(modal);
		
	}

</script>
