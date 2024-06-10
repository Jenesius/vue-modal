<script>
    import WidgetContainerModalItem from "./WidgetModalContainerItem.vue";
    import initialize from "../utils/initialize";
    import {h, onMounted, TransitionGroup} from "vue";
    import {getNamespace, configuration} from "../utils/state";

    export default {
		props: {
			namespace: String
		},
        setup(props){
			onMounted(() => {
				initialize(props.namespace)
			})

			return () => {
				const namespaceState = getNamespace(props.namespace);

				return h(TransitionGroup, {name: configuration.animation, tag: "div", appear: configuration.appear}, {
					default: () => namespaceState.queue.map(modalObject => {
						return h(WidgetContainerModalItem, {
                            key: modalObject.id,
                            id: modalObject.id
                        });
					})
				})
			}
        },
        components: {WidgetContainerModalItem}
    }
</script>

<style>
    .modal-list-enter-active,
    .modal-list-leave-active,
    .modal-list-enter-active .modal-item,
    .modal-list-leave-active .modal-item
    {
        transition: all 0.2s ease;
    }
    .modal-list-enter-from,
    .modal-list-leave-to{
		opacity: 0 !important;
    }
    .modal-list-enter-from .modal-item,
    .modal-list-leave-to   .modal-item{
		transform: translateY(-60px);
    }
</style>
