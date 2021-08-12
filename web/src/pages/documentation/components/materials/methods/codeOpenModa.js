export const codeOpenModal =
`import {openModal} from "jenesius-vue-modal";
import VueComponent from "AnyVueComponent.vue";

const props = {title: "Hello"};

openModal(VueComponent, props)`;

export const codeOpenModalSimpleComponent =
`<template>
    <p>{{title}}</p>
</template>
<script>
    export default {
        props: {
            title: String
        }
    }
</script>`;

export const codeOpenModalReturn =
`const modal = await openModal(VueComponent); //{id, close, onclose}`