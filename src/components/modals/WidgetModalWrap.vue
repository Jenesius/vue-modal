<template>
	<div class = "widget-modal-wrap">
		
		<div class = "widget-modal-wrap__close" @click = "popModal">
			<span> </span>
			<span> </span>
		</div>
		
		<slot/>
		
		
	</div>
</template>

<script>
	
	import {useModal} from "../../../plugin";
	
	export default {
		setup(){
			
			const {popModal} = useModal();
			
			return {
				popModal
			}
		},
		name: "WidgetModalWrap"
	}
</script>

<style scoped>
	.widget-modal-wrap{
		position: relative;
		padding: 10px 20px;
		
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		border-radius: 5px;
		
		max-width: 90%;
	}
	.widget-modal-wrap__close{
		position: absolute;
		cursor: pointer;
		
		display: flex;
		align-items: center;
		justify-content: center;
		
		padding: 6px;
		margin: auto;
		right: 8px;
		top: 8px;
		
		height: 20px;
		width: 20px;
		
		border-radius: 4px;
		
		transition: background-color 0.2s;
	}
	.widget-modal-wrap__close:hover{
		background-color: #f7f6f6;
	}
	
	.widget-modal-wrap__close>span{
		position: absolute;
		content: "";
		height: 18px;
		width: 2px;
		
		background-color: #c4c3c3;
		border-radius: 1px;
	}
	.widget-modal-wrap__close>span:first-child{
		transform: rotate(45deg);
	}
	.widget-modal-wrap__close>span:last-child{
		transform: rotate(-45deg);
	}
</style>