<template>
	<div class="container-buttons">
		<button @click="openModal(ModalProfile)">Person Profile</button>
		<button ref="refButtonConfirm"
				@click="openModal(ModalConfirm, { label: 'Do you love modals?', text: textConfirm, resolve: resolveConfirm })">
			Confirm
		</button>
		<button @click="openModal(ModalAlert, {text: '13'})">Alert</button>
		<button @click="openModal(ModalAutoContext)">Auto context</button>
		<button @click="openModal(ModalQuestion)">Question</button>
	</div>
	<modal-container/>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal, popModal, pushModal} from "../../plugin/index";
import ModalAlert from "./modals/modal-alert.vue";
import ModalConfirm from "./modals/modal-confirm.vue";
import ModalQuestion from "./modals/modal-question.vue";
import ModalAutoContext from "./modals/modal-auto-height.vue";
import ModalProfile from "./modals/modal-profile.vue";
import {ref} from "vue";

const refButtonConfirm = ref(null);
const textAlert = `Jenesius Vue Modal is a lightweight and simple library for working with modal windows in Vue3. It integrates deeply with Vue.js and allows you to create modals of any complexity.`
const textConfirm = `Modal windows allow you to take part of the logic to a separate level, which makes it easier to develop applications.`

function resolveConfirm() {
	refButtonConfirm.value.classList.add('button_active');
	setTimeout(() => {
		refButtonConfirm.value.classList.remove('button_active');
	}, 400);
	popModal()
}


function _test() {
	openModal(ModalProfile)
}


type a = typeof ModalProfile;

</script>
<style scoped>
@import "./../web/default-style.css";

* {
	font-family: sans-serif;
}

.container-buttons {
	display: flex;
	gap: 7px;
}
</style>