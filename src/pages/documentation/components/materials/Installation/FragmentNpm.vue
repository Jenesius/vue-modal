<template>
	<p>Npm is the recommended installation method when building with Vue.</p>
	<widget-code>{{codeNpmInstall}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeNpm";
export default {
	setup: () => ({...code}),
	name: "FragmentNpm",
	components: {WidgetCode}
}
</script>

<style scoped>

</style>