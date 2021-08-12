

<script>
import {useVocabulary} from "../assets/js/Vocabulary";
import {h} from "vue";
export default {
	props: {
		name: String,
		links: Array,
		tag  : {
			type: String,
			default: () => "p"
		},

		noTag: {
			type: Boolean,
			default: () => false
		}

	},
	setup(props){

		const text = useVocabulary(props.name, {});

		return () => {

			if (props.noTag) return text;

			//Tag was provided
			if (props.tag) return h(props.tag, { innerHTML: text})

		}

	},

	name: "WidgetVocabulary"
}
</script>

<style scoped>

</style>