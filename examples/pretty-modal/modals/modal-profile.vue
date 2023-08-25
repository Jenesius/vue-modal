<template>
  <div class = "modal-window">
    <h3 class = "modal-title">Person profile</h3>
    <div class = "inputs">
      <div class = "inputs input-full">
        <input-field type = "text" label = "Login" name = "login" disabled/>
      </div>
      <input-field type = "number" label = "Age" name = "age"/>
      <input-field type = "radio" label = "Gender" name = "gender" :options = "genders"/>

      <input-field type = "textarea" name = "note" label = "Description" class = "input-full"/>
    </div>
    <div class = "buttons">
      <button class = "button-save" @click = "closeModal">Save</button>
    </div>
  </div>
</template>

<script setup>
import {Form, InputField} from "jenesius-vue-form";
import {closeModal} from "../../../src/index"
const genders = {
  'f': 'Female',
  'm': 'Male'
}

const form = new Form();
form.setValues({
  login: "Jenesius",
  age: 24,
  note: "I am a JavaScript Programmer"
})

</script>

<style scoped>
  .inputs{
    display: grid;
    gap: 10px 20px;
    grid-template-columns: 1fr 1fr;
  }
  .input-full {
    grid-column: 1/ 3;
  }
  .buttons{
    display: flex;
    justify-content: flex-end;
    padding: 15px 0 10px 0;
  }
  .button-save{
    padding: 7px 15px;
    min-width: 100px;
    background-color: #42b883;
    color: white;
  }
</style>