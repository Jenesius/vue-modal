<template>
	<some-interface>
		<template #header>
			<router-link to="/users">Show users</router-link>
			<router-link to="/flowers">Show flowers</router-link>
		</template>
		<template #slide-left>
			<router-link to="/users/5" class = "side-link">Open modal User:5</router-link>
		</template>
		<template #slide-right>
			<router-link to="/flowers/red" class = "side-link">Open modal Flower:red</router-link>
		</template>
		<router-view/>
	</some-interface>
	<modal-container/>

</template>

<script setup lang="ts">
import {container as ModalContainer} from "../../src/index";
import SomeInterface from "./components/SomeInterface.vue";
</script>
<style>
@import "./../../project/default-style.css";

.side-link {
	color: purple;
	font-weight: bold;
}

</style>
