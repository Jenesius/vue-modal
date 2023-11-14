<template>
	<div class = "">
		<div class="flowers-list">
			<router-link to="/flowers/red" class = "flower_red" >Red flowers</router-link>
			<router-link to="/flowers/blue" class = "flower_blue">Blue flowers</router-link>
			<router-link to="/flowers/green" class = "flower_green">Green flowers</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "flowers-list"
}
</script>

<style scoped>
.flowers-list {
	padding: 20px;
	display: flex;
	gap: 10px;

	font-size: 16px;
	font-weight: bold;
}
.flowers-list>*{
	padding: 5px 10px;
	color: white;
	border: 2px solid white;
}
.flower_red {
	background-color: red;
}
.flower_blue {
	background-color: blue;
}
.flower_green {
	background-color: green;
}
.router-link-active {
	border: 2px solid black;
}
</style>