# Config
You can change the settings for modal windows. This article will provide examples of how
You can close modal windows by pressing **Escape** or the background. Also disable scrolling,
the name is animated and more.

Modal windows can be configured by calling *config*:
```ts
import {config} from "jenesius-vue-modal";
config({
    // Params
})
```
The configuration object has the following interface:
```ts
interface Config{
    scrollLock?: boolean,
    animation? : string,
    backgroundClose? : boolean,
    escClose?   : boolean
}
```
- scrollLock (Default value **true**). Disable scrolling in time when modal is open.
- animation (Default value **modal-list**). Animation name for transition-group.
- backgroundClose (Default value **true**). Closing on click back area of modal.
- escClose (Default value **true**). Closing on press ESC key.