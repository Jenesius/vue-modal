<template>
	<div>
		<h2>Flowers</h2>
		{{ id }}
	</div>
</template>

<script>

export default {
	props: {
		id: String
	}
}
const a = [
	{ path: "users", component: WidgetUserList},
	{ path: "dogs", component: WidgetDogList,
		children: [
			{ path: ":id", component: ModalDog}
		]
	},
	{ path: "cats", component: WidgetCatList,
		children: [
			{ path: ":id", component: ModalCat }
		]
	}
]
</script>

<style scoped>

</style>