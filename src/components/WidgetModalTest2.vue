<template>
    <div class = "test-2">
        <button @click = "open">Open test1</button>

        <p v-if = "title">{{title}}</p>
        <p v-if = "text">{{text}}</p>

        <button @click = "resolve" v-if = "resolve">Resolve</button>
        <button @click = "reject" v-if = "reject">Reject</button>

    </div>
</template>

<script>
    import { pushModal} from "../plugin";
    import WidgetModalTest1 from "./WidgetModalTest1";

    export default {
        props: {
            title: String,
            text: String,
            resolve: Function,
            reject : Function,
        },
        setup(){

            function open() {
                pushModal(WidgetModalTest1, {
                    title: "Jenesius"
                })
            }

            return {
                open
            }
        },
        name: "WidgetModalTest2"
    }
</script>

<style scoped>
    .test-2{
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 100%;

        background-color: white;
    }
</style>