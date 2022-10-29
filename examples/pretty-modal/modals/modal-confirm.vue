<template>
  <div class = "modal-window modal-alert">
    <h3 class = "modal-title">{{label}}</h3>
    <p>{{text}}</p>
    <div class = "wrap-buttons">
      <button @click = "popModal">Cancel</button>
      <button @click = "resolve()">Accept</button>
    </div>
  </div>
</template>

<script>
import {popModal} from "./../../../plugin"
export default {
  props: {
    text: String,
    label: String,
    resolve: Function
  },
  methods: {
    popModal
  },
  name: "modal-alert"
}
</script>

<style scoped>
.modal-alert{
  max-width: 400px;
}
</style>