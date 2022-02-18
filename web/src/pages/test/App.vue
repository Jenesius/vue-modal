<template>
	<widget-modal-container/>


	<div class = "flex-column">
		<router-link to = "/a">a</router-link>
		<router-link to = "/modal-a">modal a</router-link>
		<router-link to = "/c">c</router-link>
		<router-link to = "/d">d</router-link>
		<router-link to = "/e">e</router-link>
	</div>
	<router-link to="/user-list">user-list</router-link>
	<router-link to="/user-list/3">user-list-3</router-link>




	<button @click = "open">Open Modal +++</button>


	<router-view/>



</template>

<script>

	import {container, openModal} from "./../../../../plugin/index";
	import Modal from "./ModalTitle";
    import {computed, reactive, ref} from "vue";

	export default {
        setup() {

            let id = 1;

            const state = ref({
                title: 'None - 1',
                age  : 15
            })

            let b;

            async function open(){


                b = await openModal(Modal, {
                    title: computed(() => state.value.title)
                });


            }

            setInterval(() => {
                try {
                    state.value.title = `None - ${id}`;

                } catch (e) {
                    state.title =`None - ${id}`
                }

                id++;


                console.log(b.closed.value);

            }, 1000);

            return {
                state,
                open
            }

        },

        name: "App",
		components: {WidgetModalContainer: container}
	}
</script>

<style>
	@import "../../assets/css/index.css";

	html{
		background-color: #1b062d;
	}

	.fade-enter-active,
	.fade-leave-active,
	.fade-enter-active .modal-item,
	.fade-leave-active .modal-item
	{
		transition: 0.2s;
	}


	.fade-enter , .fade-leave-to{

		opacity: 0;
	}
	.fade-enter .modal-item, .fade-leave-to .modal-item{
		transform: translateX(100px);
	}

</style>
