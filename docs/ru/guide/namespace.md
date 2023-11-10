# Namespace

Данный функционал выходит за рамки использования модальных окон. Однако
данный механизм позволяет реализовать новые элементы интерфейса, такие как
уведомления, отображение ошибок и т.д. Используй `namespace` можно легко
реализовать компоненты со схожим функционалом модальных окон.

В данной статье будет рассказано, как пользоваться `namespace`, а также
приведёт пример создания уведомлений на базе контейнера модальных окон.

## Инициализация

По умолчанию мы создаём контейнер не указывая `namespace`, однако нам
ничего не мешает создать именованный контейнер:

```vue
<template>
    <container namespace = "errors" />
</template>
<script setup>
    import {container} from "jenesius-vue-modal"
</script>
```

Здесь мы создали контейнер, в который будут помещаться все модальные окна
с установленным `namespace` в `errors`.

## Добавление

Методы [openModal](./guide-methods#open-modal),[pushModal](./guide-methods#push-modal),
[promptModal](./guide-methods#prompt-modal) также расширены. В опции можно
указать тот `namespace`, которые будет использован:
```ts
import Modal from "my-modal.vue"
import {pushModal} from "jenesius-vue-modal"

pushModal(Modal, {}, { namespace: 'errors' })
```

Данное модальное окно будет добавлено в пространство `errors` и будет
отображаться к соответствующем контейнере.

## Закрытие

Разумеется теперь необходима закрыть не последнее модальное окно, а
последнее окно из нужного контейнера. Методы [closeModal](./guide-methods#close-modal),
[popModal](./guide-methods#pop-modal) были расширены. Теперь в опциях,
передаваемых первым параметром, можно указать `namespace`:

```ts
import {closeModal} from "jenesius-vue-modal"
closeModal({namespace: 'errors'})
```

## Стандартное взаимодействие

Нужно понимать то, что когда мы не указываем `namespace`, мы работаем
с `namespace` = `default`. Я рекомендую не указывать его вовсе, если
используемый `namespace` предполагается, как по умолчанию. 

**Важно** уточнить то, что только для `namespace` равный `default`
устанавливается обработчик `Esc`. На данный момент реализация вынуждает
вас самим позаботиться про закрытие модальных окон контейнерах отличных
от `default.`

## Modal

В объекте возвращаемом методами pushModal, openModal, promptModal
появилось поле `namespace`, которое будет устанавливаться автоматически 
и хранить название `namespace`, в котором модальное окно было открыто.

```ts
const modal = await pushModal(Modal, {}, { namespace: 'notification' });
modal.namespace // 'notification'
```

## Получение текущего модального окна.

Метод `getCurrentModal` был расширен. Теперь первый и необязательный 
параметр является название `namespace` для которого нужно найти последнее 
открытое модальное окно.

```ts
getCurrentModal() // Return last opened modal from default namespace
getCurrentModal("notifications") // From namespace: "notifications"
```

## Получение текущей очереди

В практике использование второго `modal-container` не представляет
много удобств. Другие элементы интерфейса сильно отличаются от диалоговых
(модальных) окон. По этому вам будет удобнее использовать очередь, которая
хранит массив текущих элементов:

```ts
import {getQueueByNamespace} from "jenesius-vue-modal"

const notifications = getQueueByNamespace("notifications");
```

### Параметры

- **namespace** Необязательный параметр, указывающий название `namespace`.

### Return

Метод возвращает 