<template>
	<p>{{title}} {{age}}</p>
</template>

<script>
export default {
	props: {
		title: String,
		age: Number
	}
}
</script>
