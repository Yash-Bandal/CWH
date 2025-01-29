## The Story of the Promise
Imagine you are ordering a custom cake from a bakery.

### Promise Creation:
Promise Creation: You tell the baker (who is really busy) to make you a cake and you promise that you will pay him when the cake is ready. You don't know exactly when it will be ready, but you trust the baker to complete it on time.

1. Pending State: Right after you place your order, the cake is in the pending state. It is neither completed nor rejected. You’re just waiting for the result.<br>
2. Fulfilled State: After some time, the baker finishes the cake and calls you to let you know it's ready. The cake is fulfilled, and you go and pick it up. You can now enjoy the cake.<br>
3. Rejected State: Imagine the baker faces some issues, like running out of ingredients, and can’t make the cake. In this case, the promise is rejected, and the baker tells you that he can’t fulfill your order. You are then disappointed.



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
```

### Promise.race()
If you’re more interested in the first task to finish (like being impatient and wanting your cake or drink as soon as possible), use Promise.race(). It resolves as soon as the first promise resolves (or rejects).

```javascript
let cakeOrder = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Cake is ready!"), 5000);
});

let drinkOrder = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Drink is ready!"), 2000);
});

Promise.race([cakeOrder, drinkOrder])
    .then(result => {
        console.log(result); // Logs "Drink is ready!" because it's faster
    })
    .catch(error => {
        console.log(error);
    });

```
### .finlally
Sometimes, you may want to perform a cleanup task, like logging that your cake is ready or handling something after all promises, regardless of success or failure.
```javascript
cakeOrder
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Cleanup: Done with cake order.");
    });

```
