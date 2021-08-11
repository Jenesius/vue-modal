

export const App =
`<template>
	<widget-container-modal/>
</template>

<script>
    import {openModal, container} from "jenesius-vue-modal";
    import Modal from "Modal.vue"

    export default {
		mounted(){
			openModal(Modal, {
				title: "Hello world!"
			})
		},
		components: {WidgetContainerModal: container}
    }
</script>
`;


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