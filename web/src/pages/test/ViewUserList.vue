<template>
	<table class = "table">
		<tbody>
		<tr>
			<td>1</td>
			<td>Jenesius</td>
			<td>
				<router-link to="/user-list/1">profile</router-link>
			</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Burdin</td>
			<td>
				<router-link to="/user-list/2">profile</router-link>
			</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Jenesius Industry</td>
			<td>
				<router-link to="/user-list/3">profile</router-link>
			</td>
		</tr>
		</tbody>
	</table>
	<router-view name = "test"/>
</template>

<script>
export default {
	name: "ViewUserList"
}
</script>

<style scoped>
	.table{
		color: white;
	}
</style>