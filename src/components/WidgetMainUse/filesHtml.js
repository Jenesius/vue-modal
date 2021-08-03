

export const App =
`import {useModal} from "jenesius-vue-modal";
import Modal from "Modal.vue"

const {openModal, closeModal} = useModal();
openModal(Modal, {
    title: "Hello world!"
})`;


export const Modal =
`<template>
    <p>{{title}}</p>
</template>

<script>
    export default {
        props: {
            title: {
                required: true,
                default : "Without title"
            }
        }
    }
</script>`