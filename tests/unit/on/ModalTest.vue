<template>
    <button @click = "emitUpdate">123</button>
</template>

<script>
    export default {
        props: {
            value: Number
        },
        methods: {
            emitUpdate(){
                console.log('+++++++++');
                this.$emit('update', this.value);
            }
        },
        name: "ModalTest"
    }
</script>

<style scoped>

</style>
