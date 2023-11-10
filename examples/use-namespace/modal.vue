<template>
  <div class = "modal-window">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  name: "modal"
}
</script>

<style scoped>

</style>