<template>
  <div class = "modal-window">
    <p>Opened modal for user[{{id}}]</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  name: "Modal"
}
</script>

<style scoped>

</style>