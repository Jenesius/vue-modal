<template>
	<p class = "modal-item">Animation </p>
</template>

<script>
export default {
	name: "ModalAnimation"
}
</script>

<style scoped>

	.modal-item{
		padding: 8px 20px;
		background-color: white;
	}

	.modal-list-enter-active,
	.modal-list-leave-active,
	.modal-list-enter-active .modal-item,
	.modal-list-leave-active .modal-item
	{
		transition: 0.2s;
	}

	.modal-list-enter , .modal-list-leave-to{
		opacity: 0;
	}
	.modal-list-enter-from .modal-item,
	.modal-list-leave-to .modal-item{
		transform: translateX(100px);
	}

</style>