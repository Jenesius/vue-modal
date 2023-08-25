# CSS стилизация

Для управления фоном и положением модального окна нужно поработать
с классом CSS **.modal-container**. Когда открывается модальное окно, оно
размещается в контейнере с вышеупомянутым классом. Он имеет следующие свойства:
```css
.modal-container{
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #3e3e3e21;
}
```
Например, давайте изменим фон модального окна и сделаем так, чтобы оно открывалось внизу:
```css
.modal-container{
    align-items: flex-end;
    background-color: rgba(62, 175, 124, 0.47);
}
```
