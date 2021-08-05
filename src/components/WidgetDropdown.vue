<template>
	<div class = "widget-dropdown">
		<a class = "widget-dropdown link_dark cursor-pointer" >{{title}}</a>
		<span class = "arrow"></span>

		<ul class = "widget-dropdown__list">
			<li v-for = "(elem, index) in array" :key = "index" @click = "elem.func">
				<a class = "link_dark">{{elem.title}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		array: Array
	},
	name: "WidgetDropdown"
}
</script>

<style scoped>
.widget-dropdown{
	position: relative;
}
	.widget-dropdown:hover>.widget-dropdown__list{
		display: block;

	}
	.widget-dropdown>.arrow{
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 5px solid #4f5959;
		display: inline-block;
		vertical-align: middle;
		margin-left: 6px;
	}
	.widget-dropdown__list{

		display: none;
		position: absolute;
		top: 100%;
		right: -8px;

		padding: 10px 0;
		background-color: white;
		border: 1px solid #ddd;
		border-bottom-color: #ccc;
		border-radius: 4px;
	}
	.widget-dropdown__list>li{
		padding: 7px 10px;
		list-style: none;

		font-size: 15px;
	}
	.widget-dropdown__list>li>a{
		cursor: pointer;
	}
</style>