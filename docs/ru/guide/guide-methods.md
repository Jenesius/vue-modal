# Методы

## Открытие окна {#open-modal}
Метод openModal используется для отображения компоненты в контейнере модального окна. Перед показом модального окна 
метод закроет все открытые модальные окна и в случае успеха откроет новое. В качестве входных принимаются два параметра:
- **VueComponent** — объект-компонент, который будет отображаться как модальное окно. Также вы можете использовать
**строку** - текстовая метка модального окна, которая ранее была добавлена в [хранилище](./store).

- **props** — объект, содержащий входные параметры, которые передаются в модальное окно и будут доступны из `props`.

```ts
import {openModal} from "jenesius-vue-modal";
import VueComponent from "AnyVueComponent.vue";

const props = {title: "Hello"};

openModal(VueComponent, props)
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

**Возвращаемое значение**: `Promise`, который в случае успеха открытия модального окна вернет
[ModalObject](./modal-object).

```ts
//{id, close, onclose, closed, instance}
const modal = await openModal(VueComponent);
```
## Добавления модального окна {#push-modal}
Метод pushModal используется для показа модального окна, но, в отличие от openModal, он не закрывает ранее открытые
модальные окна, а показывает новое поверх остальных. В качестве входных принимаются два параметра:
- **VueComponent** — объект-компонент, который будет отображаться как модальное окно.

- **props** — объект, содержащий входные параметры, которые передаются в модальное окно и будут доступны из `props`.
```ts
import {pushModal} from "jenesius-vue-modal"
pushModal(VueComponent)
```
```vue
<template>
    <button @click = "add">Добавить следующее</button>
</template>
<script setup>
    import {pushModal} from "jenesius-vue-modal";
    import ModalSecond from "ModalSecond.vue";
    
	function add() {
		pushModal(ModalSecond);
    }
</script>
```
```vue
<template>
    <button @click = "pushModal">Push first</button>
</template>
<script>
    import {pushModal} from "jenesius-vue-modal";
    import ModalFirst from "ModalFirst";
    export default {
        setup: () => ({pushModal: () => pushModal(ModalFirst)}),
    }
</script>
```
EXAMPLE
**Return value**: Promise that, if successful, will return a [ModalObject](/guide/modal-object).
```ts
//{id, close, onclose, closed, instance}
const modal = await pushModal(VueComponent); 
```
To close only the last window, you need to use the [popModal](#pop-modal) method

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

## Prompt Modal {#prompt-modal}
Sometimes there is a request in a modal window that will return some data. It could be
a modal window for a one-time request that will return the value of the input.
The *prompt-modal* method is a synonym for pushModal, but increases the eavesdropping detection even further
for **Modal.EVENT_PROMPT** upon execution of which the modal window will be closed and the data will be transferred
with the event will be the execution of *promptModal*:
```ts
import {promptModal} from "jenesius-vue-modal"
const code = await promptModal(ModalCode);
```
File *ModalCode.vue*

```vue
<template>
  <button @click="handleClick">Click</button>
</template>
<script>
import {Modal} from "jenesius-vue-modal";

export default {
  methods: {
    handleClick() {
      // Current emit will close the modal and provided Meth.random() 
      // result to Promise returned by promptModal
      this.$emit(Modal.EVENT_PROMPT, Math.random());
    }
  }
}
</script>

```
