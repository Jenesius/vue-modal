<template>
	<div>
		<p>event</p>
		<button @click = "$emit('test', 5)">emit test</button>
		<button @click = "popModal">close</button>
	</div>
</template>

<script setup>
import popModal from "../../../../plugin/methods/popModal";
</script>

<style scoped>

</style>