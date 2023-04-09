<template>
	<p>{{title}} {{age}}</p>
</template>

<script>
export default {
	props: {
		title: String,
		age: {
			type: Number,
			required: false
		}
	}
}
</script>
