## Modal Object

При успешном открытии модального окна, промис вернёт modalObject:
```js
import Modal from "Modal.vue"

const modal = await openModal(Moda); // modalObject
```
Модальный обхект обладает следующими свойствами:
- `closed` - ComputedRef<boolean>. Имеет значение `true` в случае, если 
модальное окно закрыто.
- `instance` - ссылка на модальную компоненту. Через неё можно получить доступ
к внутренним полям и методам модальной компоненты:
```js
export default {
    props: {
        title: String
    },
    methods: {
        show(){} // !!
    }
}
```
```js
const modal = await openModal(Modal);
modal.instance.show(); // !!
```
- `id` - Number. Уникальные идентификатор модального окна.
- `close`
- `onclose`
- `on`


