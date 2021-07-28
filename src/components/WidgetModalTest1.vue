<template>
    <div class = "test-1">
        <p>{{title}}</p>
        <button @click = open>push</button>
        <button @click = "openNewModal">Open</button>
    </div>

</template>

<script>
import {openModal, pushModal} from "../plugin";
    import WidgetModalTest2 from "./WidgetModalTest2";

    export default {
        props: {
            title: {
                type: String,
                default: "Default title"
            }
        },
        setup(){

            function openNewModal(){
                openModal(WidgetModalTest2, {
                    title: "Test Title",
                    text : "Text of Modal",
                    resolve: () => {
                        console.log("Resolve")
                    },
                    reject: () => {
                        console.log("Reject")
                    }
                });
            }
            function open() {
                pushModal(WidgetModalTest2);
            }

            return {
                open,
                openNewModal
            }
        },
        name: "WidgetModalTest1"
    }
</script>

<style scoped>
    .test-1{
        padding: 20px;

        background-color: white;
    }
</style>