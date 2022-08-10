<template>
	<div>
		<widget-modal-container/>
		<router-view/>
	</div>
</template>

<script>

import {container} from "../../plugin/index";


export default {
	components: {WidgetModalContainer: container},
	name: "App"
}
</script>

<style scoped>

</style>