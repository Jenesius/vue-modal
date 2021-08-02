<template>
    <transition-group name = "modal-list">
        <widget-container-modal-item
                v-for = "(elem, index) in modalQueue"
                :key = index

                :component = elem.component
                :params    = elem.params

        />
    </transition-group>
</template>

<script>
    import WidgetContainerModalItem from "./WidgetModalContainerItem";
    import {initialize, modalQueue} from "./index";
    import {onMounted} from "vue";


    export default {
        setup(){


            onMounted(() => {
				initialize();
            })

            return {
                modalQueue
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