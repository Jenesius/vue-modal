<template>
  <div class = "modal-window modal-alert">
    <h3 class = "modal-title">Alert</h3>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  name: "modal-alert"
}
</script>

<style scoped>
  .modal-alert{
    max-width: 400px;
  }
</style>