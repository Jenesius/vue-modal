<template>
	<div class="widget__modal-container__item modal-container" @pointerdown.self.stop="handelClick" ref = "modalContainerRef">
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
<script setup lang = "ts">
import {onMounted, ref, watch} from "vue";
import closeById from "../methods/closeById";
import Modal, {getModalById} from "../utils/Modal";
import createDebug from "../utils/create-debug";

const debug = createDebug('modal-item')
const props = defineProps<{
	id: number
}>()

const modal = getModalById(props.id) as Modal;
const modalContainerRef = ref<HTMLDivElement>()
const modalRef = ref<unknown>();

function handelClick() {
	// if (e.target !== containerRef.value) return;
	if (modal.backgroundClose) return closeById(modal.id, {background: true}).catch(() => {})
}

watch(() => modalRef.value, newValue => {
	modal.instance = newValue;
	debug(`Modal(${modal.id}) instance is saved.`);
	
	if (modal.draggable) {
		const MODAL_QUERY_SELECTOR = `[modalid=_modal_${props.id}]`;
		const draggableSelector = typeof modal.draggable === 'string' ? modal.draggable : MODAL_QUERY_SELECTOR
		debug(`The modal window is movable(${draggableSelector}).`)
		
		if (!modalContainerRef.value) {
			debug(`The modal container is not mounted. Modal id %d.`, modal.id);
		} else {
			debug(`Finding an item to drag: %s`, draggableSelector);
			addDraggable(
				modalContainerRef.value?.querySelector(MODAL_QUERY_SELECTOR),
				modalContainerRef.value.querySelector(draggableSelector)
			)
		}
	}
})

onMounted(() => {
	debug(`Modal(${modal.id}) is mounted`);
	
})

function addDraggable(elementModal: HTMLElement | null, elementDraggable: HTMLElement | null) {
	if (!elementDraggable) {
		debug('draggable item not found.')
		return;
	}
	
	if (!elementModal) {
		debug('HTML modal is not founded.')
		return;
	}
	
	elementDraggable.addEventListener('pointerdown', (event) => {
		const currentStyleValues = elementModal.getAttribute('style')?.match(/transform: translate\((.*)px,\s*(.*)px\)/);
		const initialX = currentStyleValues?.[1];
		const initialY = currentStyleValues?.[2];
		
		let shiftX = typeof initialX === 'string' ? Number.parseInt(initialX) : 0;
		let shiftY = typeof initialY === 'string' ? Number.parseInt(initialY) : 0;
		
		const {clientX, clientY} = event;
		const startX = clientX;
		const startY = clientY;
		
		debug(`movement started at (${startY}, ${startY})`)
		
		document.addEventListener('pointermove', handleDraggableMove, { passive: true })
		document.addEventListener('pointerup', handleDraggableEnd, {once: true})
		
		function handleDraggableMove(event: PointerEvent) {
			const {clientX, clientY} = event;
			
			const resultX = shiftX + clientX - startX;
			const resultY = shiftY + clientY - startY;
			
			debug(`move at (${resultX}, ${resultY})`)
			
			elementModal!.style.transform = `translate(${resultX}px,${resultY}px)`
		}
		function handleDraggableEnd(event: PointerEvent) {
			debug(`movement completed`)
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
