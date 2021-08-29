<script>
    import WidgetContainerModalItem from "./WidgetModalContainerItem.vue";
    import {initialize, modalQueue, _configuration} from "./index";
	import {h, onMounted, TransitionGroup} from "vue";

    export default {
        setup(){

			onMounted(initialize)

			return () => {
				return h(TransitionGroup, {name: _configuration.animation}, {
					default: () =>modalQueue.value.map(modalObject => {
						return h(WidgetContainerModalItem, {component: modalObject.component, params: modalObject.params, key: modalObject.id, id: modalObject.id});
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