<template>
	<p>Иногда появляется необходимость связать vue-router с показом модального окна. Для этого нужно писать свой обработчик для router и интегрировать его
	с открытием/закрытием модального окна. Одна в Jenesius Vue Modal это всё уже есть, нужно только подключить.
	</p>
	<p>Для примера была создана таблица пользователей, на маршруте <b>/users</b>. На маршрут <b>/users/:id</b> был добавлен обработчик модальных окон.
		Теперь при переходе на <b>/users/3</b> откроется модальное окно в которое будут переданы входные параметры из route, доступные в props.</p>

	<router-link :to = "{name: 'ExampleUserList'}" tag="button">Перейти к примеру</router-link>

</template>

<script>
export default {
	name: "FragmentIntegrationInformation",
}
</script>

<style scoped>

</style>