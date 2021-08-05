<template>
	<p>Методы pushModal и openModal возвращают объект следующего типа:</p>
	<p><b>id</b> - уникальныидентификатор модального окна</p>
	<p><b>close</b> - метод позволяющий закрыть созданное модальное коно</p>
	<p><b>onclose</b> - функция, которая выполняется при попытке закрыть окно. Данную функцию можно переопределить для контроля закрытия окна. Если <b>onclose</b> вернёт false, модальное окно не будет закрыто.</p>
	<widget-code>{{codeOnClose}}</widget-code>
	<widget-code>{{codeModalObject}}</widget-code>
</template>

<script>
import WidgetCode from "../../../../../components/WidgetCode";
import * as code from "./codeModalObject";
export default {
	setup: () => ({...code}),
	name: "FragmentModalObject",
	components: {WidgetCode}
}
</script>

<style scoped>

</style>