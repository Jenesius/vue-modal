<template>
    <div class = "container-title">
        <p class = "title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            age: Number
        },
        mounted() {
            console.log(this.title);
        },
        name: "ModalTitle"
    }
</script>

<style scoped>
    .container-title{
        background-color: white;
        padding: 20px 40px;
    }
    .title{
        color: green;
    }
</style>
