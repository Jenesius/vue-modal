<template>
	<div class = "modal-test">
		<p>User - {{id}}</p>

		<div class = "flex">

			<router-link :to= "`/user-list/${Number(id)+1}`">next</router-link>

			<button @click = "back">back</button>
			<button @click = "em">emit update</button>
			<button @click = "em1">emit update</button>
			<button @click = "$emit('NEW', $event)">emit update</button>
			<button @click = "toA">to A</button>

		</div>

	</div>
</template>

<script>


export default {
	props: {
		id: String,
        val: String
	},


	methods: {
        em(){
            this.$emit('update', this.val);
        },
        em1(){
            this.$emit('any-event', 'any-event');
        },
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
