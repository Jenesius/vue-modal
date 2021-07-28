<template>
    <div class = "widget__modal-container__item ttt" >

        <div class = "widget__modal-container__item-back widget__modal-back" @click="popModal"/>

        <div class = "widget__modal-container__item-component widget__modal-wrap">
            <component :is = component v-bind = "params" />
        </div>

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


    }

    .widget__modal-back{
		opacity: 1;
		transition: 0.2s;

		background-color: #3e3e3e21;
    }

    .widget__modal-container__item-back{
        z-index: -1;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        cursor: pointer;

        transition:0.3s;
    }

    .widget__modal-container__item-component{
        transition: transform 0.1s;
    }
    @media screen and (max-width: 768px) {
        .widget__modal-container__item-component{
            padding: 0 10px 10px 10px;
        }
    }

    @media screen and (min-width: 768px){
        .widget__modal-container__item{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /*
            Absolute only for desktop devices
            For mobile - scroll helper
        */
        .widget__modal-container__item-back{
            position: absolute;
        }
    }
</style>