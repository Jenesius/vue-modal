<template>
	<div class = "widget-star">
		
		<a href = "https://github.com/Jenesius/vue-modal" class = "link"/>
		
		<div>
			<img src="./../../assets/ico/github.svg">
			
			<span>stars</span>
		</div>
		
		<div v-if = "count">
			{{count}}
		</div>
		
	</div>
</template>

<script>
	export default {
		
		data: () => ({
			count: null
		}),
		
		async mounted() {
			
			const result = await fetch("https://api.github.com/repos/jenesius/vue-modal").then(res => res.json());
			
			this.count = result.stargazers_count;
			
		},
		
		name: "WidgetStars"
	}
</script>

<style scoped>
	.widget-star{
		position: relative;
		
		display: flex;
		gap: 5px;

		font-size: 12px;
		cursor: pointer;
	}
	.widget-star>.link{
		position: absolute;
		height: 100%;
		width: 100%;
		
		top:0;
		left: 0;
		
		z-index: 2;
	}
	.widget-star>div{
		background-color: #f3f3f3;
		border: 1px solid #f0f0f0;
		border-radius: 2px;
		padding: 2px 4px;
		gap: 5px;
		display: flex;
		align-items: center;
		
		color: #747474;
	}
	.widget-star img{
		height: 13px;
	}
</style>