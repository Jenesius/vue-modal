<template>
	<div>
    <ul>
      <li><router-link to="/users/5">User 5</router-link></li>
      <li><router-link to="/users/7">User 7</router-link></li>
      <li><router-link to="/users/123">User 123</router-link></li>
    </ul>

    <modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer} from "../../plugin/index";
</script>
<style>
@import "./../../web/default-style.css";
</style>
