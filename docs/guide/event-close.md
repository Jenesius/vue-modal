# Event close
**Each close hook** of a modal accepts one *event-close* parameter. This object provides information about
closing the modal window. It currently has the following properties:
- background (*boolean*) Set to true if the modal is closed by clicking on the background.
- esc (*boolean*) Set to true if the modal close process started with *Escape*

```ts
{
    beforeModalClose(e) {
        // e.background
        // e.esc
    }
}
```

### Handle esc closing
This example demonstrates how to cancel the closing of the modal window on pressing *Escape*:
```ts
const modal = await openModal(SomeComponent);
modal.onclose = (event) => {
    if (event.esc) return false;
    // ...
}
```

## Handle background closing
This example demonstrates how to cancel the closing of the modal window on clicking on the background (darkened) background:
```ts
const modal = await openModal(SomeComponent);
modal.onclose = (event) => {
    if (event.background) return false;
    // ...
}
```
