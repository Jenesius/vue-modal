<template>
	<div class = "modal-test">
		<p>User - {{id}}</p>

		<div class = "flex">

			<router-link :to= "`/user-list/${Number(id)+1}`">next</router-link>

			<button @click = "back">back</button>
			<button @click = "toA">to A</button>

		</div>

	</div>
</template>

<script>

import {onBeforeRouteLeave} from "vue-router";

export default {
	props: {
		id: String
	},

	setup(){

		onBeforeRouteLeave(() => {
			console.log("+++");
		})

	},
	methods: {
		back(){
			this.$router.go(-1);
		},
		toA(){
			this.$router.push("/a");
		}
	},
	name: "Modal"
}
</script>

<style scoped>
	.modal-test{
		padding: 0 8px;
		background-color: white;
		border-radius: 4px;
	}
</style>