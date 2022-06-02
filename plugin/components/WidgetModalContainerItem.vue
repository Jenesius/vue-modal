<script>
    import popModal from "../methods/popModal";
    import {saveInstance} from "../utils/instances";
    import {ref, watch, h} from "vue";
    import {configuration} from "../utils/config";
    import {modalQueue} from "../index";

	export default {
        props: {
			id    : Number, // uniq identifier of modals,
        },
        setup(props){

			const modalRef = ref(null);
			const containerRef = ref(null);

			watch(() => modalRef.value, newValue => {
				saveInstance(props.id, newValue);
			})

            function getModalById(id){
                return modalQueue.value.find(elem => elem.id === id);
            }
            const modal = getModalById(props.id);


			return () => h("div", {
				class: ["widget__modal-container__item", "modal-container"],
				ref: containerRef,
				onClick: e => {
					if (e.target !== containerRef.value) return;

                    if (modal.backgroundClose) return popModal().catch(() => {})
				}
			}, [

				h(modal.component, {
					...modal.props.value,
					class: ["modal-item", "widget__modal-wrap"],//Save for compatibility
					"modal-id": `_modal_${props.id}`,
					ref: modalRef,
                    ...modal.eventCallbacks
				})
			])
        },
    }
</script>
<style>

	.modal-container{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: #3e3e3e21;
		cursor: pointer;
	}

	.modal-item{
		cursor: default;
	}

</style>
