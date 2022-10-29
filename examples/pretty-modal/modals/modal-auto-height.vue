<template>
  <div class = "modal-window modal-auto-context">
    <div class = "loader" v-if = "!ready">
      <p>Loading data...</p>
    </div>
    <transition name = "fade">
      <div class = "content" v-if = "ready">
        A modal window blocks all other workflows in the top-level program until the modal window is closed, as opposed to modeless dialogs that allow users to operate with other windows. Modal windows are intended to grab the user's full attention. Users may not recognize that a modal window requires their attention, leading to confusion about the main window being non-responsive, or causing loss of the user's data input intended for the main window (see Mode error). In severe cases, the modal window appears behind another window controlled by the same program, potentially rendering the entire program unresponsive until the modal window can be located manually.
      </div>
    </transition>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const ready = ref(false);

onMounted(() => {
  setTimeout(() => {
    ready.value = true;
  }, 1.5 * 1000)
})

</script>

<style scoped>
  .modal-auto-context{
    max-width: 400px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s ease;
    max-height: 250px;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    max-height: 0;
  }
</style>