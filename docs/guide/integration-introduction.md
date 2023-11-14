#Introduction

Sometimes there is a need to bind vue-router for display
modal window. To do this you need to write your own
handler for the router and integrate it with
opening/closing a modal window. `jenesius-vue-modal` already has
all this, you just need to connect it.

For example, a user table was created along the route **/users**.
A modal handler has been added to the **/users/:id** route. Now when
switching to **/users/3** a modal window will open in which
input parameters from the route are available. They will be transferred as
`props`.

A complete example can be seen at
SandBox([link](https://codesandbox.io/s/vue-modal-router-n9rn94)).
Note the change in `URL`.