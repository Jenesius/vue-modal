<template>
	<div class = "modal-styles">
		<widget-vocabulary name = "example"/>
	</div>
</template>

<script>
import WidgetVocabulary from "../WidgetVocabulary";
export default {
	name: "ModalStyles",
	components: {WidgetVocabulary}
}
</script>

<style>
	.modal-container{
		background-color: rgba(0, 204, 255, 0.08);
		align-items: flex-end;
	}
	.modal-styles{
		padding: 5px 20px;
		border-radius: 3px;
		background-color: white;
	}
</style>