# Методы

Данная статья будет поделена на два блока: способы закрытия и способы закрятия ё
модальных окон.

## Открытие окна

Для открытия модальных окон используется один из следующих методов:
[openModal](#openModal), [pushModal](#pushModal), [promptModal](#promptModal).
Каждый из этих методов будет расмотрен по отдельности. Однако общими для этих
методов являются параметры, которые туда передаются:

- **VueComponent** или **String**. Первый обязательный параметр, в котором мы указываем
компоненту, которая будет отображаться. В случае, если переда>тся строка то
компонента будет браться из хранилища. Подробную информацию о хранилище можно
ознакомиться [злесь](./store).
- **props**. Второй не обязательные параметр/ Представляет собой набор параметров,
которые будут переданы в компоненту в качестве `props`.
- **options**. Третий необязательный параметр. в нём можно указать дополнительные
параметры, которые будут влиять на поведение модальных окон. Имеет тип `Object`
со следующими свойствами:
    - **namespace**. Необязательный параметр с типом `string`. Указывает к какому
`namespace` будет относится модальное окно. Если данный параметр не указан
то модальное окно будет открыто в стандартном контейнере. Подробнее про namespace
можно прочитать [здесь](./namespace).



## openModal {#open-modal}
Метод `openModal` используется для отображения компоненты в контейнере
модального окна. Перед показом модального окна метод закроет все открытые окна и
в случае успеха откроет новое.

### Возвращаемое значение

Метод вернёт`Promise`, который в случае успеха открытия модального окна вернет
[ModalObject](./modal-object).


```ts
import {openModal} from "jenesius-vue-modal";
import VueComponent from "AnyVueComponent.vue";

const props = {title: "Hello"};

openModal(VueComponent, props) // Promise<ModalObject>
```
```vue
// anyComponent.vue
<template>
    <p>{{title}}</p>
</template>
<script>
    export default {
        props: {
            title: String
        }
    }
</script>
```

## pushModal {#push-modal}
Метод `pushModal` используется для показа модального окна, но, в отличие от
`openModal`, он не закрывает ранее открытые модальные окна, а показывает новое 
поверх остальных. Иными словами данный метод просто добавляет новое окно в очередь.

```ts
import {pushModal} from "jenesius-vue-modal"
pushModal(VueComponent) // Promise<ModalObject>
```

:::warning
Чтобы закрыть только последнее открытое модальное окно - воспользуйтесь методом
[popModal](#pop-modal).
:::


## promptModal {#prompt-modal}
Иногда основной задачей модального окна является возвращение данных. В таком
случае модальное окно выступает в качесте некой ступени вашего интерфейса. Именно
для таких случаев был разработан метод `promptModal`.

Главное его отличие от двух предыдущих методов - он не возвращает объект 
`ModalObject`. Возвращаемое значение - `Promise`, в случае успешного выполненения
вернёт результат, которые вы решили вернуть из вашего модального окна. По сути
данные модальные окна можно рассматривать, как функции. Вы в них передали значения,
они вернули результат.

Также данная функция не закрывает открытые ранее окна, а добавляет новое поверх.

Чтобы вернуть значение их модального окна воспользуйтесь событием 
`Modal.EVENT_PROMPT`:

```ts
import ModalCode from "./ModalCode.vue"
import {promptModal} from "jenesius-vue-modal"
const code = await promptModal(ModalCode);
```

```vue
<!--ModalCode.vue-->
<template>
  <button @click="handleClick">Click</button>
</template>
<script>
import {Modal} from "jenesius-vue-modal";

export default {
  methods: {
    handleClick() {
      // Данное событие закроет модальное окно и вернёт Math.random()
      // в качестве результата Promise
      this.$emit(Modal.EVENT_PROMPT, Math.random());
    }
  }
}
</script>
```
:::warning
Не нужно вызывать метод закрытия модального окна, когда вы пользуетесь механизмом
`Modal.EVENT_PROMPT`. Библиотека сделает это за вас.
:::


## Close Modal {#close-modal}
To close **all** modals, use the closeModal method:
```ts
import {closeModal} from "jenesius-vue-modal"
closeModal()
```

## Pop Modal {#pop-modal}
To close **only the last** modal window, if several were opened 
using the pushModal method, use the popModal method:
```ts
import {popModal} from "jenesius-vue-modal"
popModal()
```
