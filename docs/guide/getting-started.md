# Getting started

Jenesius Vue Modal is a lightweight and simple library for working with modal windows in Vue3. It integrates deeply with Vue.js and allows you to create modals of any complexity.

## Installation
Npm is recommended for installing a package.
```shell
npm i jenesius-vue-modal
```

## Connection to page
To get started, we need to initialize modal windows, add a container in which our components will be displayed. We import the container from the library:
```vue
<template>
    // Your HTML
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

## Let's continue

Everything is ready to work with modal windows. Go to the [methods](./guide-methods.md) tab to learn how to open and
close modal windows. This library provides a wide range of functions for working with modal windows:
- Opening multiple modal windows
- Return value
- Working with events through the `ModalObject` object
- Integration with `vue-router`
