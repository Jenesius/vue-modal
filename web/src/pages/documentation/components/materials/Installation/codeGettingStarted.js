import {useVocabulary} from "../../../assets/js/Vocabulary";

export const init =
`<template>
	//	${useVocabulary.yourHTML}
    <widget-container-modal />
</template>
<script>
    import {container} from "jenesius-vue-modal";

    export default {
        components: {WidgetContainerModal: container},
        name: "App"
    }
</script>`;