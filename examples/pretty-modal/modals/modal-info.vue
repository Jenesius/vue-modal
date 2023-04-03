<template>
	<p>{{info}}</p>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

defineProps<{
	info: string,
	show?: boolean
}>()
</script>

<style scoped>

</style>