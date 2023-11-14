<template>
  <div class = "modal-window">
    <p>Opened modal for user[{{id}}]</p>
	  <button @click = "$router.back()">Back</button>
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