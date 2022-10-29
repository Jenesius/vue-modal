# Multi modals

Одним из преимуществ данной библиотеки является возможность открытие несолькхи модальных окон друг на друге. Данный подход
не является распространённым, однако позволяет проектировать сложную логику при помощи простых средств.

В данном примере рассмотрим, как это делается:

1. Создадим модальное окно, которое будет открывать свой дубликат, открывать начальное окно и закрывать все оставшиеся:
```vue
<template>
  <div>
    <h3>Is Multi modal</h3>

    <button @click = "pushModal(ModalMultiDuplicate)">Open one more</button>
    <button @click = "closeModal()">Close</button>

  </div>
</template>

<script setup>
import {pushModal, closeModal} from "../../plugin/index";
import ModalMultiDuplicate from "./modal-multi-duplicate.vue";

</script>
```
В данном примере на одну из кнопок повешен обработчик открытия другого модального окна используя `pushModal`. Данная 
функция открывает новое модальное окно поверх существующих без их закрытия.
