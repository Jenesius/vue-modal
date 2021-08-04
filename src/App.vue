<template>
	
	<widget-container-modal />
	
	<div class = "app-header">
		
		<p>Documentation (not now)</p>
		
		<widget-stars/>
	
	</div>
	<div class = "app-main">
		<p class = "app-main__title">jenesius-vue-modal</p>
		<p class = "app-main__text">The simple library for modal windows in Vue3</p>
	</div>
	

	<div class = "app-body">
		<widget-main-use/>
	</div>
	
	<div>
		<p class = "title-md">Examples</p>
	</div>
    <div>
		<button class = "button" @click = "open">Modal question</button>
    </div>
    
</template>

<script>
	/*eslint-disable*/
	
    import {container, openModal} from "../plugin";

    import {reactive} from "vue";
	import WidgetStars from "./components/WidgetStars/WidgetStars";
	import WidgetMainUse from "./components/WidgetMainUse/WidgetMainUse";
	import WidgetModalQuestion from "./components/modals/WidgetModalQuestion";
    
    export default {
        setup(){
        	
        	const state = reactive({
		        modalTitle: null
	        })
        	
            function open(){
            	
                let a = openModal(WidgetModalQuestion);

                window.test = a;
            }

            return {
                open,
	            state
            }
        },
        components: {WidgetMainUse, WidgetStars, WidgetContainerModal: container},
        name: "App"
    }
</script>

<style scoped>
	@import "assets/css/index.css";
	
	.app-main{
		padding: 200px 0;
		text-align: center;
	}
	.app-header{
		display: flex;
		justify-content: space-between;
	}
	.app-main__title{
		font-size: 44px;
		line-height: 68px;
		color: black;
		font-weight: 600;
	}
	.app-main__text{
		font-size: 24px;
		line-height: 42px;
		color: gray;
	}
	

	
</style>