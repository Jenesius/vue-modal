# Event close
**Каждый хук закрытия** модального окна принимает один параметр *event-close*. Данный объект предоставляет информацию о
закрытии модального окна. На данный момент имеет следующие свойства:
- background (*boolean*) Принимает значение true, если модальное окно закрывается кликом на задний фон.
- esc (*esc*) Принимает значение true, если процесс закрытия модального окна начался с нажатия клавиши *Escape*

```ts
{
    beforeModalClose(e) {
        // e.background
        // e.esc
    }
}
```

### Handle esc closing
This example demonstrates how to cancel the closing of the modal window on pressing *Escape*:
```ts
const modal = await openModal(SomeComponent);
modal.onclose = (event) => {
    if (event.esc) return false;
    // ...
}
```

## Handle background closing
This example demonstrates how to cancel the closing of the modal window on clicking on the background (darkened) background:
```ts
const modal = await openModal(SomeComponent);
modal.onclose = (event) => {
    if (event.background) return false;
    // ...
}
```
