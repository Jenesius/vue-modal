# Particular Qualities
You can use **props** to get input parameters.
```ts
// user/5
{
    props: {
        id: String // 5
    }
}
```
Using **beforeRouteEnter** , **beforeRouteUpdate** , **beforeRouteLeave** is not 
possible at this stage. I will try to fix this problem shortly.
BeforeModalClose can be used as a temporary solution.
