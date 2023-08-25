# ModalObject
Методы pushModal и openModal возвращают объект, содержащий следующие свойства:

- **id** - уникальный идентификатор модального окна.

- **close** - метод, позволяющий закрыть созданное модальное окно.

- **onclose** - это функция, которая выполняется при попытке закрыть окно. Эту функцию можно переопределить для
управления закрытием окна. Если **onclose** возвращает false, модальное окно не закроется.

- **instance** - экземпляр открытого модального окна. Позволяет получить доступ к свойствам и методам модального окна.

- **closed** - `computed` переменная. Имеет значение **true**, если модальное окно открыто.

```ts
import {openModal} from "jenesius-vue-modal";
const modal = await openModal(Modal, {
    message: "Welcome"
});
modal.onclose = () => false

modal.instance.message; // "Welcome"
modal.closed.value; // false

modal.close() // Модальное окно не закроется
```
```ts
const modal = await openModal(Modal);

modal.id; // Unique identity

modal.onclose = () => {
    if (weather === "rainy") return false;
}

modal.close() // Close modal if the weather is rainy
```
При использовании **onclose** мы также можем получить доступ к внутренним полям и методам модального окна, передав
неанонимную функцию в качестве параметра:

```vue
// ./modal.vue
{
    props: {},
    data: () => {
        return {
            insideValue: "Hello"
        }
    }
}
```
```ts
const modal = await openModal(Modal);
modal.onclose = function(){
    this.insideValue; // "Hello"
    modal.instance.insideValue; // "Hello"
}
```

## Instance
Если вы получаете **instance** в своем проекте вместе в `<script setup>`, вам нужно помнить, что в этом случае
компонент будет закрыт. Чтобы открыть некоторые свойства, вам нужно прибегнуть к [**defineExpose**]
(https://vuejs.org/api/sfc-script-setup.html#defineexpose).
