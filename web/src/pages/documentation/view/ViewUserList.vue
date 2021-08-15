<template>
	<widget-user-table/>
	<router-view name = "modal"/>
</template>

<script>
import WidgetUserTable from "../components/WidgetUserTable";
export default {
	name: "ViewUserList",
	components: {WidgetUserTable}
}
</script>

<style scoped>

</style>