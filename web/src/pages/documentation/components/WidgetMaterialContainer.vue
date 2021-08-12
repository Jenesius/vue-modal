<template>
	<div >
		<h2 class = "material-container__title" v-if = "title">{{title}}</h2>

		<slot/>
	</div>
</template>

<script>

export default {
	props: {
		title: String,
	},

	name: "WidgetMaterialContainer"
}
</script>

<style scoped>
	.material-container__title{
		font-size: 20px;
		line-height: 32px;
		font-weight: 500;

		border-bottom: 1px solid #eaecef;

		margin-top: -3.1rem;
		padding-top: 4.6rem;

		text-transform: capitalize;
	}
</style>