<template>
	<div class="widget__modal-container__item modal-container" @pointerdown.self.stop="handelClick">
		<component
			:is="modal.component"
			v-bind="modal.props.value"
			class="modal-item widget__modal-wrap"
			:modalId="`_modal_${id}`"
			ref="modalRef"
			v-on="modal.events"
		/>
	</div>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import closeById from "../methods/closeById";
import {getModalById} from "../utils/Modal";

const modalRef = ref(null);

const props = defineProps({
	id: Number,
})
const modal = getModalById(props.id);

function handelClick() {
	// if (e.target !== containerRef.value) return;
	if (modal.backgroundClose) return closeById(modal.id, {background: true}).catch(() => {})
}

watch(() => modalRef.value, newValue => {
	modal.instance = newValue;
})

onMounted(() => {
	if (modal.draggable) {
		addDraggable(
			document.querySelector(
				typeof modal.draggable === 'string' ? modal.draggable : `[modalid=_modal_${props.id}]`
			)
		)
	}
})

function addDraggable(elementDraggable) {
	if (!elementDraggable) return;
	const elementModal = document.querySelector(`[modalid=_modal_${props.id}]`);
	
	elementDraggable.addEventListener('pointerdown', (event) => {
		const currentStyleValues = elementModal.getAttribute('style')?.match(/transform: translate\((.*)px,\s*(.*)px\)/);
		let shiftX = currentStyleValues?.[1];
		let shiftY = currentStyleValues?.[2]
		
		shiftX = typeof shiftX === 'string' ? Number.parseInt(shiftX) : 0;
		shiftY = typeof shiftY === 'string' ? Number.parseInt(shiftY) : 0;
		
		const {clientX, clientY} = event;
		const startX = clientX;
		const startY = clientY;
		
		document.addEventListener('pointermove', handleDraggableMove, { passive: true })
		document.addEventListener('pointerup', handleDraggableEnd, {once: true})
		
		function handleDraggableMove(event) {
			const {clientX, clientY} = event;
			
			const resultX = shiftX + clientX - startX;
			const resultY = shiftY + clientY - startY;
			
			elementModal.style.transform = `translate(${resultX}px,${resultY}px)`
		}
		function handleDraggableEnd(event) {
			document.removeEventListener('pointermove', handleDraggableMove)
			event.preventDefault();
		}
	})
	

}


</script>
<style>

.modal-container {
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

.modal-item {
	cursor: default;
}

</style>
