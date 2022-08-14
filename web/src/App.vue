<template>
	<div>
		<p>Welcome</p>
		<button @click = "open">open</button>
		<modal-container />
		<button @click = "add">add</button>
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
		

		
		const val = {
			a: computed(() => "test"),
			b: computed(() => ref1.value + 1)
		}
		
		const a = reactive(val);
		console.log(a);
		
	}

</script>
