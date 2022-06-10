# Introduction

Sometimes it becomes necessary to link vue-router to show a modal window. To 
do this, you need to write your own handler for router and integrate it with 
opening/closing a modal window. One in Jenesius Vue Modal already has it all,
you just need to connect it.

For example, a table of users was created, on the route **/users**. A modal handler
has been added to the route **/users/:id**. Now, when switching to **/users/3**, a 
modal window will open into which the input parameters from route, available 
in props, will be passed.

Go to example
