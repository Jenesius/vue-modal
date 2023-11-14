<template>
	<div class = "interface">
		<div class = "header">
			<slot name = "header"/>
		</div>

		<div class = "side-left">
			<slot name = "slide-left"/>
		</div>
		<div class = "body">
			<slot/>
		</div>
		<div class = "side-right">
			<slot name = "slide-right"/>
		</div>
		<div class = "footer"></div>
	</div>
</template>

<script>
export default {
	name: "SomeInterface"
}
</script>

<style scoped>
	.interface {
		display: grid;
		grid-template-columns: 120px 1fr 120px;
		grid-template-rows: 70px 500px 70px;
	}
	.header {
		background-color: #a8b1ff;
		grid-column: 1/4;
		gap: 10px;
		display: flex;
		align-items: center;
		padding: 0 20px;
	}
	.side-left {
		background-color: gainsboro;
	}
	.side-right {
		background-color: gainsboro;
	}
	.footer {
		background-color: #7f8497;
		grid-column: 1/4;
	}
	.body {
		display: grid;
	}
	.side-left,
	.side-right {
		padding: 10px;
	}
</style>