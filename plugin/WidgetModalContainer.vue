<script>
    import WidgetContainerModalItem from "./WidgetModalContainerItem.vue";
    import {initialize, modalQueue} from "./index";
	import {h, onMounted, TransitionGroup} from "vue";

    export default {
        setup(){

			onMounted(initialize)

			return () => {
				return h(TransitionGroup, {name: "modal-list"}, {
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
    .modal-list-enter-active .widget__modal-back,
    .modal-list-leave-active .widget__modal-back,
    .modal-list-enter-active .widget__modal-wrap,
    .modal-list-leave-active .widget__modal-wrap
    {
        transition: all 0.2s ease;
    }
    .modal-list-enter-from,
    .modal-list-leave-to{
		opacity: 0 !important;
    }

    
    .modal-list-enter-from .widget__modal-wrap,
    .modal-list-leave-to .widget__modal-wrap{
		transform: translateY(-60px);
    }
    

</style>