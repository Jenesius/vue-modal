<template>
    <div>
        <button @click="openCodeModal">Open Again</button>

        <p>All information about current animation You can found in <b>examples/simple-animation</b></p>

        <modal-container/>
    </div>
</template>

<script setup lang="ts">
import {config, container as ModalContainer, openModal} from "../../src/index";
import ModalProfile from "../pretty-modal/modals/modal-profile.vue";
import {onBeforeMount, onUnmounted} from "vue";


function openCodeModal() {
	openModal(ModalProfile);
}

/**
 * Please do it ones in main.ts, In this example I use onMounted and onUnmounted just for docs. In production, I recommend
 * init name of animation just in main.ts:
 *
 * // main.ts
 *
 * config({
 *     animation: 'your-custom-animation-name'
 * })
 * */
onBeforeMount(() => {
    config({
        animation: "custom-fade"
    })
})
onUnmounted(() => {
    config({
        animation: "modal-list"
    })
})


</script>
<style>
@import "./../../web/default-style.css";

.custom-fade-enter-active,
.custom-fade-leave-active,
.custom-fade-enter-active .modal-item,
.custom-fade-leave-active .modal-item{
    transition: 1.0s;
}

.custom-fade-enter-from .modal-item,
.custom-fade-leave-to .modal-item{
    transform: scale(0);
}
.custom-fade-enter-from,
.custom-fade-leave-to {
    background-color: transparent;
}
</style>