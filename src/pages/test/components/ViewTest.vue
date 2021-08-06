
<script>

import {h} from "vue";

export default {
	props: {
		component: Object
	},
	setup(props){

		return () => {
			h(props.component)
		}

	},

	name: "ViewTest"
}
</script>

<style scoped>

</style>