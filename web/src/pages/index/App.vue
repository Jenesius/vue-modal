<template>
	<modal-container />

	<div class = "app-content">
		<div class = "app-header">
			<h3><a href = "/docs.html" class = "link_dark">Documentation</a></h3>
			<widget-stars/>
		</div>
		<div class = "app-main">
			<h1 class = "app-main__title">jenesius-vue-modal</h1>
			<h2 class = "app-main__text">The simple library for modal windows in Vue3</h2>
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
	</div>
</template>

<script setup lang="ts">
    import {reactive} from "vue";
    import {container as ModalContainer, openModal} from "../../../../plugin";

	import WidgetStars from "../../components/WidgetStars/WidgetStars.vue";
	import WidgetMainUse from "../../components/WidgetMainUse/WidgetMainUse.vue";
	import WidgetModalQuestion from "../../components/modals/WidgetModalQuestion.vue";

    const state = reactive({
        modalTitle: null
    })
    function open(){
        openModal(WidgetModalQuestion);
    }
</script>

<style scoped>
	@import "../../assets/css/index.css";

	.app-main{
		padding: 200px 0;
		text-align: center;
	}
	.app-header{
		display: flex;
		justify-content: space-between;
		padding: 14px 0;
	}
	.app-main__title{
		font-size: 44px;
		line-height: 68px !important;
		color: black;
		font-weight: 600;
	}
	.app-main__text{
		font-size: 24px;
		line-height: 42px;
		color: gray;
		font-weight: 300;
	}

</style>
