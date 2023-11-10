<template>
	<div class = "widget__modal-container__item modal-container" ref ="containerRef" @click = "handelClick">
		<component
			:is = "modal.component"
			v-bind = "modal.props.value"
			class = "modal-item widget__modal-wrap"
			:modalId = "`_modal_${id}`"
			ref = "modalRef"
			v-on = "modal.events"
		/>
	</div>
</template>
<script setup >
    import {ref, watch} from "vue";
	import closeById from "../methods/closeById";
	import {getModalById} from "../utils/Modal";

	const modalRef = ref(null);
	const containerRef = ref(null);
	
	const props = defineProps({
		id: Number,
	})
	
	const modal = getModalById(props.id);

	function handelClick(e	) {
		if (e.target !== containerRef.value) return;
		if (modal.backgroundClose) return closeById(modal.id, {background: true}).catch(() => {})
	}

	watch(() => modalRef.value, newValue => {
		modal.instance = newValue;
	})
</script>
<style>

	.modal-container{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: #3e3e3e21;
		cursor: pointer;
	}

	.modal-item{
		cursor: default;
	}

</style>
