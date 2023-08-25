# Навигационные хуки

## Информация
Иногда необходимо отловить закрытие модального кона. Это может быть полезно для предотвращения закрытия пользователем
модально, пока они не введут данные или не отправят запрос на сервер.

Если обработчик возвращает **false** или **выдает ошибку**, закрытие
модальное окно будет прервано.

Jenesius Vue Modal предоставляет три способа перехвата закрытия:

## Onclose
Методы [openModal](./guide-methods#open-modal) and [pushModal](./guide-methods#push-modal)
возвращают Promise, который в случае успеха
вернет объект [modalObject](./modal-object). Чтобы поймать закрытие
модальное окно, вам нужно добавить событие **onclose** к этому объекту:
```ts
import {openModal} from "jenesius-vue-modal";
const modal = await openModal(VueComponent);

let count = 5;

modal.onclose = () => {
    count--;
    if (count > 0 ) return false; // Модальное окно закроется после пяти попыток.
}
```
### Пример

Если открыто несколько модальных окон и у одного из них будет обработчик onclose, возвращающий false, вы сможете
закрыть только те модальные окна, которые были открыты после него.

```ts
import {pushModal, closeModal} from "jenesius-vue-modal";

const modal1 = await pushModal(VueComponent);
const modal2 = await pushModal(VueComponent);
const modal3 = await pushModal(VueComponent);

modal2.onclose = () => false;

closeModal(); // закроется только modal3
```

## Хук внутри компоненты
Наконец, навигационный хук можно указать непосредственно в компоненте, используя следующие параметры:
- beforeModalClose
```ts
const Foo = {
	template: "...",
	beforeModalClose() {
		// имеет доступ к контексту экземпляра компонента this.
	}
} 
```
## Composition Api
Хотя вы по-прежнему можете использовать встроенные функции, Jenesius Vue Modal предоставляет функции для Composition API:
```ts
import {onBeforeModalClose} from "jenesius-vue-modal"

export default {
  setup() {
    onBeforeModalClose(() => {
      const answer = window.confirm(
        "Вы действительно хочешь уйти? У вас есть несохраненные изменения!"
      )
      if (!answer) return false
    })
  }
}
```

## Асинхронный хук
Навигационный хук может быть асинхронным. Модальное окно закроется только тогда, когда завершит свою работу:
```ts
{
    async beforeModalClose(){
        await updateData();
    }
}
```
```ts
const modal = await openModal(Modal);
    
modal.onclose = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 1000); // Модальное окно закроется через одну секунду.
    })
}
```

## Событие close
Каждый обработчик модального закрытия получает параметр окна: event-close
```ts
modal.onclose = (event) => {
	// ...
}
```
Это *событие* хранит информацию о том, как закрывается модальное окно. Подробная информация о нем, о способах предотвращения
закрытия модального окна при нажатии на фон или по нажатию клавиши Esc можно прочитать [здесь](./event-close).
