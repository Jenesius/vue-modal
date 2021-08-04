<template>
	<widget-modal-wrap>
		<p class = "modal-title">{{title}}</p>
		
		<p class = "text" v-if = "text">{{text}}</p>
		
		<div class = "modal-bottom">
			<button class = "button red" @click = "reject(), popModal()" v-if = "reject" >No</button>
			<button class = "button green" @click = "resolve(), popModal()" v-if = "resolve">Yes</button>
		</div>

	</widget-modal-wrap>

</template>

<script>
    import { popModal} from "../../../plugin";

    import WidgetModalWrap from "./WidgetModalWrap";

    export default {
		components: {WidgetModalWrap},
        props: {
            title: String,
            text: String,
            resolve: Function,
            reject : Function,
        },
        setup(){



            return {

				popModal
            }
        },
        name: "WidgetModalTest2"
    }
</script>

<style scoped>
	.title{
		font-size: 14px;
		font-weight: 600;
	}
	.text {
		font-size: 12px;
	}
</style>