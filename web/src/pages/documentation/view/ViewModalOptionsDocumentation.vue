<template>
    <p>The third parameter is the configuration of the modal window.</p>
    <widget-code>
        openModal(Modal, {}, modalOptions)
    </widget-code>
    <p>modalOptions has next options:</p>
    <ul>
        <li><p><b>backgroundClose</b>:boolean - if <b>false</b>, clicking on the background will not close the modal window</p></li>
    </ul>
</template>

<script>
    import WidgetCode from "../../../components/WidgetCode";
    export default {
        name: "ViewModalOptionsDocumentation",
        components: {WidgetCode}
    }
</script>

<style scoped>

</style>
