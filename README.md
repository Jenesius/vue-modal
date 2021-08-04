# Jenesius Vue Modal

Jenesius vue modal is simple library for **Vue 3** only.[Web](https://modal.jenesius.com/)

![](https://img.shields.io/github/stars/Jenesius/vue-modal)
![Greet everyone](https://github.com/Jenesius/vue-modal/actions/workflows/node.js.yml/badge.svg)
![](https://img.shields.io/npm/l/jenesius-vue-modal)
![](https://img.shields.io/github/package-json/dependency-version/jenesius/vue-modal/vue)

### Installation

```markdown
npm i jenesius-vue-modal
```

----

For add modals in your project you need to put the modal's container in the App component:

`App.vue`
```vue
<template>
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

## OpenModal

```js
    import {openModal} from "jenesius-vue-modal";

    openModal(VueComponent, props);
```
or
```js
    import {useModal} from "jenesius-vue-modal";

    export default{
        setup(){
            const {openModal} = useModal();
            openModal(VueComponent, props);
        }
    }
```

## Methods

| Function name | Description                    |
| ------------- | ------------------------------ |
| `openModal(VueComponent, props)`      | Close any other modals and then open provided modal |
| `closeModal()`   | Close all modals |
| `pushModal(VueComponent, props)` | Add on top modal component |
| `popModal()` | Close the last modal component |

## Example VueModalComponent

`WidgeTestModal.vue`
```vue 
    <template>
        <p>{{title}}</p>
    </template>
    <script>
        export default {
            props: {
                title: String
            }
        }
    </script>
```
To show this component
```js
    import {useModal} from "jenesius-vue-modal"
    import WidgeTestModal from "WidgeTestModal.vue";

    const {openModal} = useModal();

    openModal(WidgeTestModal, {
        title: "Hello World!"
    });
```
