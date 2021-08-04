<template>
    <div class = "widget__modal-container__item" >

        <div class = "widget__modal-container__item-back widget__modal-back" @click="popModal"/>
	
		<component :is = component v-bind = "params" class = "widget__modal-wrap" />

    </div>
</template>

<script>


    import {popModal} from "./index";

    export default {
        props: {
            component: Object,
            params: Object
        },

        setup(){

            return {

                popModal
            }
        },
    }
</script>

<style scoped>

    .widget__modal-container__item{
        position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		
		display: flex;
		align-items: center;
		justify-content: center
    }

    .widget__modal-back{
		opacity: 1;

		background-color: #3e3e3e21;
    }

    .widget__modal-container__item-back{
		position: absolute;
		
		z-index: -1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        cursor: pointer;
    }
	
</style>