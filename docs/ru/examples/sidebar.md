<script setup>
import App from "./../../../examples/side-modal/App.vue"
</script>

<App/>

-----

# Боковое окно

Здесь будет описан пример отображения модального окна сбоку. Для этого
вам не понадобится `js` или настройка проекта. Мы обойдёмся лишь классами
на `css`.

Мы можем завести следующий класс в `css`:

```css
.modal-container:has(.modal-sidebar) {
    /*Move modal to right*/
    display: grid;
    grid-auto-columns: max-content;
    justify-content: end;
}

/*Change animation only for sidebar modal*/
.modal-list-enter-from .modal-sidebar,
.modal-list-leave-to .modal-sidebar{
    transform: translateX(100px) !important;
}
```

:::info Именование

- `.modal-container` класс в котором находится модальное окно, оно 
используется библиотекой. 
- `.modal-sidebar` название класса, которое вы устанавливаете в своей
модальной компоненте.
- `.modal-list-enter-from` и `.modal-list-leave-to` классы анимации,
также создаваемые библиотекой.
:::


Здесь мы установили то, что модально окно будет появляться справа. 
Теперь в самом модальном окне мы укажем этот класс на самом верхнем
уровне:

```vue
<template>
	<div class = "modal-sidebar">
		<!--...-->
	</div>
</template>
```

Важно не забыть, что данные свойства `css` нужно указывать в глобальной
области видимости, т.к. они должны быть доступны не только модальному
окну, но и самому контейнеру.
