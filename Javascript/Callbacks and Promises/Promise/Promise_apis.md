## The Story of the Promise

Imagine you are ordering a custom cake from a bakery.

### Promise Creation:
You tell the baker (who is really busy) to make you a cake and you promise that you will pay him when the cake is ready. You don't know exactly when it will be ready, but you trust the baker to complete it on time.

### Promise.all()
What if you need to wait for multiple asynchronous tasks to complete? For example, you might be ordering a cake and asking the baker to prepare a drink at the same time. **`Promise.all()`** allows you to wait for multiple promises to complete before proceeding.

```javascript
let cakeOrder = new Promise((resolve, reject) => {
    resolve("Cake is ready!");
});

let drinkOrder = new Promise((resolve, reject) => {
    resolve("Drink is ready!");
});

Promise.all([cakeOrder, drinkOrder])
    .then(results => {
        console.log(results); // ["Cake is ready!", "Drink is ready!"]
    })
    .catch(error => {
        console.log(error);
    });
