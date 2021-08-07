# Jenesius Vue Modal

Jenesius vue modal is simple library for **Vue 3** only . 

- [Site](https://modal.jenesius.com/)
- [Documentation](https://modal.jenesius.com/docs.html/installation#npm)

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

Methods `openModal` and `pushModal` used to display modal windows. 
- `openModal` - close all previous modals and then display provided component.
- `pushModal` - display provided component

```js
    import {openModal} from "jenesius-vue-modal";
    import SomeVueComponent from "SomeVueComponent.vue";

    openModal(SomeVueComponent, props);
```
- props will provide in your component, [example](#example-vuemodalcomponent)

Methods return promise, in this case promise is resolved - [modalObject](https://modal.jenesius.com/docs.html/details#modal-object)
```js
    const modal = await openModal(SomeVueComponent); // {id, close, onclose}
```


## Methods

- `openModal` - close all modals and then open provided modal.
- `pushModal` - add one more provided modal.
- `closeModal`- close all modals.
- `popModal` - close last opened modal.


## Lifecycle Hooks

There are three ways to track the closing of a modal:

- onclose
```js
const modal = await openModal(Modal);
modal.onclose = (next) => {
    console.log("Close");
}
```

- default component

```js
    export default {
        props: {},
        beforeModalClose(next){
            console.log("Close")
        }
    }
```
- Composition style
```js
    export default{
        setup() {
            onBeforeModalClose(next => {
                console.log("Close")
            });
        }
    }
```

First parameter of each hook is `next` - callback can be run with `false` value for stop closing a modal window.
```js
    export default {
        props: {},
        beforeModalClose(next){
            next(false); // This modal can not be closed!
        }
    }
```
### Async/Await

Hooks also can be asynchronous functions:
```js
    async beforeModalClose(next){
        await doSome();
        next(true); // This modal can not be closed!
    }
```

# Example VueModalComponent

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
    import {openModal} from "jenesius-vue-modal"
    import WidgeTestModal from "WidgeTestModal.vue";

    openModal(WidgeTestModal, {
        title: "Hello World!"
    });
```

---

#### Do you like this module? Put a star on [GitHub](https://github.com/Jenesius/vue-modal)
