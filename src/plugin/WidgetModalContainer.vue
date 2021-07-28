<template>
    <!--
    <div class = "widget__modal-container" v-show = "modalQueue.length">

    </div>
    -->
    <transition-group name = "list">
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

<style >


    .list-enter-active,
    .list-leave-active {
        transition: all 0.2s ease;
    }
    .list-enter-from,
    .list-leave-to {


    }

    .list-enter-from,
    .list-leave-to{
		opacity: 0 !important;
    }
/*
    .list-enter-from .widget__modal-back,
    .list-leave-to .widget__modal-back{
		opacity: 0 !important;
    }*/
    
    .list-enter-from .widget__modal-wrap,
    .list-leave-to .widget__modal-wrap{
		transform: translateY(-60px);
    }
    

</style>