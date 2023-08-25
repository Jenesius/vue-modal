# Событие close
**Каждый хук закрытия** модального окна принимает один параметр *event-close*. Этот объект предоставляет информацию о
закрытие модального окна. На данный момент он имеет следующие свойства:
- background (*boolean*) Устанавливается в значение **true**, если модальное окно закрывается щелчком по фону.
- esc (*boolean*) Устанавливается в значение true, если процесс модального закрытия начался с *Escape*

```ts
{
    beforeModalClose(e) {
        // e.background
        // e.esc
    }
}
```

### Отлавливание закрытия через Escape
В этом примере показано, как отменить закрытие модального окна при нажатии *Escape*:
```ts
const modal = await openModal(SomeComponent);
modal.onclose = (event) => {
    if (event.esc) return false;
    // ...
}
```

## Отлавливание закрытия через нажатие на фон
В этом примере показано, как отменить закрытие модального окна при нажатии на фон (затемненную часть экрана):
```ts
const modal = await openModal(SomeComponent);
modal.onclose = (event) => {
    if (event.background) return false;
    // ...
}
```
