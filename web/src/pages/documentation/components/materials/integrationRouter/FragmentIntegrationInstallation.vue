<template>
	<ul>
		<li>
			<p>Не забудьте <a>проинициализировать</a> Jenesius Vue Router</p>
		</li>
		<li>
			<p>При создании router добавьте интеграцию с modal:</p>

			<widget-code>{{codeIntegration}}</widget-code>

			<p>Теперь обработчик модальных окон будет реагировать на смену навигации.</p>
		</li>
		<li>
			<p>Добавьте модальный маршрут:</p>

			<widget-code>{{codeModalNavigation}}</widget-code>

			<p>Теперь при переходе на <b>/any-route</b> будет показываться модально окно, которые было передано в <b>useRouterModal</b></p>

		</li>
	</ul>


</template>

<script>
import * as code from "./code";
import WidgetCode from "../../../../../components/WidgetCode";
export default {
	components: {WidgetCode},
	setup: () => code,
	name: "FragmentIntegrationInstallation"
}
</script>

<style scoped>

</style>