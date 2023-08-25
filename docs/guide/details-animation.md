# Animation
If you need to change the animation of showing and hiding the modal, you need
to override some properties and styles. Default for animating modal windows uses
**modal-list** as the animation name. To override the animation name, you need
to specify a new one in the configuration:
```ts
import {config} from "jenesius-vue-modal";

config({
    animation: "fade" // Any name
})
```
When changing the animation, it is necessary to take into account that we must
animate both the **.modal-container** and the modal window itself **.modal-item**.

For example, let's change the animation and the length of the appearance of 
the modal window:

*Instead of fade, you can use modal-list. In this case, you do not need to
redefine the name in the configuration.*

```css
/* Don't forget to include the animation time for the start block */
.fade-enter-active, 
.fade-leave-active,
.fade-enter-active .modal-item,
.fade-leave-active .modal-item{
    transition: 1.2s;
}

.fade-enter-from .modal-item,
.fade-leave-to .modal-item{
    transform: translateX(100px);
}
```


