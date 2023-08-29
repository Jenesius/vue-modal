<template>
  <div class = "modal-sidebar">
    <h3>Sidebar Modal</h3>

    <button @click = "closeModal()">Close sidebar</button>

  </div>
</template>

<script setup>
import {closeModal} from "../../src/index";

</script>

<style scoped>
	.modal-sidebar {
		/*important*/
		height: inherit;


		/*not important, just design*/
		background-color: #d7d7d7;
		border-radius: 4px;
		border: 1px solid #b7b7b7;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}


</style>