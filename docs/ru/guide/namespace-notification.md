Давайте рассмотрим пример того, как можно на базе данной библиотеке
создать уведомления. Мы добавим контейнер, которые будет показывать
элементы из `namespace` с именем `notification`.

### Контейнер

Создадим следующую компоненту:

```vue
<!--notification-container.vue-->
<template>
	<div>
		<p
			v-for="item in notificationQueue"
			:key="item.id"
		>{{item.props.value.message}}</p> 
	</div>
</template>

<script setup>
import {getQueueByNamespace} from "jenesius-vue-modal";

const notificationQueue = getQueueByNamespace("notification")
</script>
```

Сразу же обращаем внимание на:

- получение очереди для `notification`.
- выводим сообщения в `v-for`.
- Текст сообщений берём из props. **Важно** помнить, что props является
`ComputedRef`.

:::info
Если вместо `p` вы будете использовать свою компоненту, то я рекомендую
использовать следующее:
```vue
<template>
    ...
       <your-component
		   v-for="item in notificationQueue"
		   :key="item.id"
           v-bind = "item.props" /> 
    ...
</template>
```
:::

На этом функционал `notification` реализован. Осталось подключить этот
контейнер в вашей компоненте, например `App.vue` и вызвать один из
методов открытия модального окна с `namespace: 'notification'`.