# Configuration

To change the settings `jenesius-vue-modal` you need to use
function `config`. You can influence the handling of pressing `Esc`,
name of animation, `scroll` lock, etc:

```ts
import {config} from "jenesius-vue-modal";
config({
    // Params
})
```

The configuration object has the following properties:

- **`scrollLock`** Default value is `true`. If installed
  value `true`, opening a modal window will block `scroll` on
  page.
- **`animation`** Default value is `modal-list`. Used
  to set the animation name for `transition-group`. Read more
  can be found on [this page](./details-animation).
- **`escClose`** Default value is `true`. Controls closing
  modal window by pressing `Esc`.

:::info For Namespace
If you are working with a different `namespace` than the original one,
you need to take care of the closure yourself.
:::

- **`backgroundClose`** Default value is `true`. Parameter
  is responsible for closing the modal window by clicking on the
  darkened background. In
  case, if set to `true`, clicking on the back area will
  cause the modal window to close.

- **`skipInitCheck`** Default value is `false`. Is used for
  checking for the presence of `container` on the page when the modal is opened
  window. When you try to open a modal window you will receive an error
  `NotInitilized`. If your project assumes that the container
  will create after opening the modal window, you can pass
  value `true`. Thus skipping the `container` check procedure.

- **`store`** Default value is `{}`. Used for storage
  modal windows and opening them by key. You can read more in detail
  on [here](./store).