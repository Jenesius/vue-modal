export const codePushModal =
`import {pushModal} from "jenesius-vue-modal"
pushModal(VueComponent)
`;

export const codePushModalComponent =
`<template>
    <button @click = "pushModal">Push second</button>
</template>
<script>
    import {pushModal} from "jenesius-vue-modal";
    import ModalSecond from "ModalSecond";
    export default {
        setup(){
            return {
                pushModal: () => pushModal(ModalSecond)
            }
        },
    }
</script>`;

export const codePushModalComponent2 =
`<template>
    <button @click = "pushModal">Push first</button>
</template>
<script>
    import {pushModal} from "jenesius-vue-modal";
    import ModalFirst from "ModalFirst";
    export default {
        setup: () => ({pushModal: () => pushModal(ModalFirst)}),
    }
</script>`;

export const codePushModalReturn =
	`const modal = await pushModal(VueComponent); //{id, close, onclose}`