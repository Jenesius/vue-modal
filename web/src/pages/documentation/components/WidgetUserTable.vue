<template>
	<table class = "table">
		<thead>
			<tr>
				<td>Name</td>

				<td>Age</td>
			</tr>
		</thead>
		<tbody>

			<tr v-for = "elem in array" :key = "elem.id">
				<td>{{elem.name}}</td>
				<td>{{elem.age}}</td>
				<td>
					<router-link :to = "{name: 'UserProfile', params: {id: elem.id}}">profile</router-link>
				</td>
			</tr>

		</tbody>
	</table>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
export default {
	setup(){

		const store = useStore();

		const array = computed(() => store.state.arrayUser);

		return {
			array
		}

	},
	name: "WidgetUserTable"
}
</script>

<style scoped>
	.table{
		width: 100%;
		font-size: 14px;
	}
	table {
		border-collapse: collapse;
	}


	tbody td {
		padding: 10px 0; /* 10px top & bottom padding, 0px left & right */
		border-top: 1px #edecec solid; /* top border only */
	}


	thead td{
		padding: 10px 0;
		font-weight: 500;
	}
	.separating_line {

	}

	.link-profile{
		color: var(--main)
	}
</style>