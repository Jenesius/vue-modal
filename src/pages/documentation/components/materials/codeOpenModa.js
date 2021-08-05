export const codeOpenModal =
`import {openModal} from "jenesius-vue-modal"
openModal(VueComponent, {title: "Hello"})`;

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