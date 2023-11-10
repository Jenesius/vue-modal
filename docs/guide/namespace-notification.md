Let's look at an example of how you can use this library
create notifications. We will add a container that will show
elements from `namespace` with name `notification`.

### Container

Let's create the following component:

```vue
<!--notification-container.vue-->
<template>
	<div>
		<p
			v-for="item in notificationQueue"
			:key="item.id"
		>{{item.props.value.message}}</p> 
	</div>
</template>

<script setup>
import {getQueueByNamespace} from "jenesius-vue-modal";

const notificationQueue = getQueueByNamespace("notification")
</script>
```

Let us immediately pay attention to:

- getting a queue for `notification`.
- display messages in `v-for`.
- We take the message text from props. **It's important** to remember that props are
`ComputedRef`.

:::info
If instead of `p` you use your own component, then I recommend
use the following:
```vue
<template>
    ...
       <your-component
		   v-for="item in notificationQueue"
		   :key="item.id"
           v-bind = "item.props" /> 
    ...
</template>
```
:::

This completes the `notification` functionality. It remains to connect this
container in your component, for example `App.vue` and call one of
methods for opening a modal window with `namespace: 'notification'`.