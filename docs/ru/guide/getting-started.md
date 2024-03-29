# Приступим к работе
Jenesius Vue Modal — легкая и простая библиотека для работы с модальными окнами в Vue.js версии **3+**. Она глубоко 
интегрируется с Vue.js и позволяет создавать модальные окна любой сложности.

## Установка
Для установки пакета рекомендуется использовать Npm.
```shell
npm i jenesius-vue-modal
```

## Подключение к странице
Для начала нам необходимо инициализировать модальные окна, добавив контейнер, в котором будут отображаться наши
компоненты. Импортируем контейнер из библиотеки:
```vue
<template>
    // Your HTML
    <widget-container-modal />
</template>
<script>
    import {container} from "jenesius-vue-modal";

    export default {
        components: {WidgetContainerModal: container},
        name: "App"
    }
</script>
```

## Продолжим

Для работы с модальными окнами всё готово. Переходите во вкладку [методы](./guide-methods.md), чтобы узнать, как открывать и
закрывать модальные окна. Данная библиотека предоставляет широкий набор функций по работе с модальными окнами:
- Открытие нескольких модальных окон
- Возвращение значения
- Работы с событиями через объект `ModalObject`
- Интеграция с `vue-router`
- Наличие `Namespace` и возможность открытия элементов в разных пространствах