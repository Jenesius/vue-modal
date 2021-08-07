# Jenesius Vue Modal

Jenesius vue modal is simple library for **Vue 3** only.

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

```js
    import {openModal} from "jenesius-vue-modal";

    openModal(VueComponent, props);
```


## Methods

| Function name | Description                    |
| ------------- | ------------------------------ |
| `openModal(VueComponent, props)`      | Close any other modals and then open provided modal |
| `closeModal()`   | Close all modals |
| `pushModal(VueComponent, props)` | Add on top modal component |
| `popModal()` | Close the last modal component |

## onclose hook

To track the closing of a modal window, you need to use **onclick**
```js
const modal = await openModal(Modal);
modal.onclose = () => {
    console.log("Close");
}
```

To cancel closing the window, return **false**:
```js
const modal = await openModal(Modal);
modal.onclose = (next) => {
    if (something === "false") return next(false);
}

closeModal();//if something === false, modal will not be closed
```

Inside component, you can use: 
```js
    export default{
        beforeModalClose(next){}
    }
```
or
```js
    export default{
        setup() {
			onBeforeModalClose((next) => {
			});
		}
    }
```

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
    import {openModal} from "jenesius-vue-modal"
    import WidgeTestModal from "WidgeTestModal.vue";

    openModal(WidgeTestModal, {
        title: "Hello World!"
    });
```

---

####Do you like this module? Put a star on [GitHub](https://github.com/Jenesius/vue-modal)
