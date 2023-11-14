<template>
	<div>
		<ul>
			<li>
				<router-link to="/users/5">User 5</router-link>
			</li>
			<li>
				<router-link to="/users/7">User 7</router-link>
			</li>
			<li>
				<router-link to="/users/123">User 123</router-link>
			</li>
		</ul>

		<router-link to="/flowers">Show flowers</router-link>

		<router-view/>
		<modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer} from "../../src/index";
</script>
<style>
@import "./../../project/default-style.css";
</style>
