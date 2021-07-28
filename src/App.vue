<template>
	
	<widget-container-modal />

    <div>
        <button @click = "open">Open test 1</button>
    </div>
    
</template>

<script>
	/*eslint-disable*/
	
    import {container, useModal, openModal} from "./plugin";
    import WidgetModalTest1 from "./components/WidgetModalTest1";
    
    export default {
        setup(){
            function open(){
            	

            	
                let a = openModal(WidgetModalTest1);

                console.log(a);
                
                window.test = a;
            }

            return {
                open,
            }
        },
        components: {WidgetContainerModal: container},
        name: "App"
    }
</script>

<style scoped>

</style>