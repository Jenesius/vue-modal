<template>
	<div class = "navbar">
		
		<p class = "navbar__title" v-if = "title">{{title}}</p>
		
		
		<ul class = "navbar-item"
			v-if = "array?.length"
		>
			<li v-for = "(elem, index) in array" :key = index>
				<a :href = "`${link}#${elem.link}`" class = "navbar-item__link"  >{{elem.title}}</a>

			</li>
		</ul>
	</div>
</template>

<script>
	

	export default {
		props: {
			array: Array,
			title: String,
			link : String
		},
		setup(){



		},
		name: "WidgetNavbarItem"
	}
</script>

<style scoped>
	.navbar__title{
		margin: 0;
		font-size: 16px;
		font-weight: 600;
		line-height: 34px;
	}

	.navbar{
		padding: 0 20px;
	}
	.navbar-item{
		padding: 0 0 0 15px;
		margin: 0;
	}

	.navbar-item>li{
		list-style-type: none;
		line-height: 1.7;
	}
	.navbar-item__link{
		padding: 5px 0;
		font-size: 14px;
		line-height: 20px;

		cursor: pointer;
		font-weight: 400;
		display: inline-block;
		color: #2c3e50;
	}
	.navbar-item__link:hover{
		color: var(--main);

	}
</style>
