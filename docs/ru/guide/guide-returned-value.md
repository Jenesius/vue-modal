# Возвращение значения

Если мы говорим о возвращаемом значении модальных окон, мы должны
сначала понять их суть.
По умолчанию модальные окна рассматриваются как отдельный уровень
логики со своей собственной моделью данных.
Такой подход удобен и делает разработку веб-приложения с модальными
окнами безопасной. Эта библиотека наследует
эту концепцию. Модальное окно — это отдельный логический уровень,
принимающий входные параметры и каким-то образом с
ними взаимодействующий. Однако бывают случаи, когда модальное окно
является лишь частью процесса. Я иногда сталкиваюсь с
такими случаями (хотя стараюсь их избегать). Опишу решения, которые
использую в своих проектах. Начиная с самых удобных,
заканчивая теми, которыми я бы не стал пользоваться:

## Использование PromptModal

В VanillaJS есть функция prompt, которая при закрытии всплывающего
окна возвращает введённое значение. Мы также предоставили метод
[`promptModal`](guide-methods.md#prompt-modal) для схожего
функционала:

Файл *ModalCode.vue*

```vue

<template>
	<button @click="handleClick">Click</button>
</template>
<script>
	import {Modal} from "jenesius-vue-modal";

	export default {
		methods: {
			handleClick() {
				// Modal.EVENT_PROMPT закроет модальное окно и
                // предоставит Math.random() в качестве результата.
				this.$emit(Modal.EVENT_PROMPT, Math.random());
			}
		}
	}
</script>
```

Как использовать:

```ts
import {promptModal} from "jenesius-vue-modal"

const code = await promptModal(ModalCode);
```

Что произошло в этом примере:

- `promptModal` возвращает обещание, которое будет выполнено при
  закрытии модального окна. Результатом `promise` будет
  переданное в событие `Modal.EVENT_PROMPT` значение.
- Чтобы описать модальное окно, мы реализовали простую передачу
  случайного значения по нажатию на кнопку.

## Предоставить Handle

Мы также можем передать функцию для вызова внутри модального окна:

```ts
const modal = await openModal(Modal, {
	handleRequest: (value) => {
		// Делаем что-то 
	}
})
```

И затем в модальном окне:

```vue

<script>
	export default {
		props: {
			handleRequest: Function
		},
		beforeModalClose() {
			this.handleRequest("some-value")
		}
	}
</script>
```

## Передать значение и после этого закрыть окно

Мы также можем подписаться на событие и реагировать на его срабатывание:

```vue
// modal.vue
<template>
	<button @click="$emit('return', false)">run</button>
</template>
```

И когда мы открываем окно:

```ts
const modal = await openModal(Modal)
modal.on('return', (value) => {
	console.log(value); // false
	modal.close()
})
```
