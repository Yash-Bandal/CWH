# 🏗️ Object-Oriented Programming (OOP) in JavaScript

## 🛒 E-Commerce Case Study
Imagine we are building an **e-commerce platform** where users can browse products, add them to the cart, and place orders. We will use Object-Oriented Programming (OOP) principles to structure our code in a clean and maintainable way.

---

## 🎯 What is Object-Oriented Programming (OOP)?
OOP is a programming paradigm that structures code around **objects**. These objects are instances of **classes**, which define properties and behaviors.

### 🏆 Why Use OOP in Web Development?
✅ **Reusability:** Write once, use multiple times. 
 
✅ **Encapsulation:** Protects data from unintended modification.

✅ **Scalability:** Easier to manage large applications.

✅ **Abstraction:** Hides complex implementation details.

✅ **Polymorphism:** Use a single interface for multiple functionalities.

---

## 📌 Defining a Class and Creating Objects

In JavaScript, we use the `class` keyword to create a blueprint for objects.

```javascript
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  displayDetails() {
    return `📦 ${this.name} - $${this.price} (${this.category})`;
  }
}

// Creating instances
const product1 = new Product("Laptop", 999, "Electronics");
const product2 = new Product("Shoes", 49, "Fashion");

console.log(product1.displayDetails()); // 📦 Laptop - $999 (Electronics)
console.log(product2.displayDetails()); // 📦 Shoes - $49 (Fashion)
```

---

## 🔗 Real-World Application in Web Development
### How OOP Helps in E-Commerce Platforms:
✔️ **Modular Code** → Each entity (Product, User, Order) can have its own class.
✔️ **Easier Maintenance** → Developers can update classes without affecting other parts.
✔️ **Reusability** → The same Product class can be used for various product types.
✔️ **Security** → Encapsulation ensures that sensitive data is not exposed.

---

## 🌟 What’s Next?
Now that we understand the basics, let’s explore **Encapsulation** next!

👉 **Next Lesson:** [Encapsulation in JavaScript](#)

