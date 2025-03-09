# 🏗️ Lesson 2: Prototypes and Inheritance in JavaScript

## 📌 Introduction
In JavaScript, **prototypes** and **inheritance** enable objects to share properties and methods efficiently. This is crucial in web development to create reusable components and manage code effectively.

We will follow a **real-world example** of an **E-commerce platform** where different types of users (Admin, Seller, Customer) inherit properties and behaviors from a base `User` object.

---

## 🏛️ 1. Understanding Prototypes
In JavaScript, every object has an internal link to another object called its **prototype**. This allows objects to inherit properties and methods.

```javascript
// Base User Constructor
function User(name, role) {
  this.name = name;
  this.role = role;
}

// Adding a method using prototype
User.prototype.getDetails = function() {
  return `${this.name} is a ${this.role}`;
};

const user1 = new User("Alice", "Customer");
console.log(user1.getDetails()); // Alice is a Customer
```

### 🔍 How It Works
1. `User` is a constructor function that initializes `name` and `role`.
2. `User.prototype.getDetails` is shared across all instances.
3. `user1` can access `getDetails` even though it’s not directly defined in `User`.

---

## 🔗 2. Prototype Chain
If a property or method isn’t found on an object, JavaScript looks up the prototype chain.

```javascript
console.log(user1.toString());
// Output: [object Object] (inherited from Object.prototype)
```

### ✅ Practical Use in Web Development
- Reduces memory usage by sharing methods.
- Useful for defining common behaviors across components (e.g., UI elements, API models).

---

## 🏆 3. Inheritance with Constructor Functions
Subclasses can inherit properties from a parent class using **call() and prototypes**.

```javascript
function Admin(name, permissions) {
  User.call(this, name, "Admin"); // Call User constructor
  this.permissions = permissions;
}

Admin.prototype = Object.create(User.prototype); // Inherit methods
Admin.prototype.constructor = Admin;

Admin.prototype.getPermissions = function() {
  return `${this.name} has ${this.permissions} access.`;
};

const admin1 = new Admin("Bob", "full");
console.log(admin1.getDetails()); // Bob is a Admin
console.log(admin1.getPermissions()); // Bob has full access.
```

### ✅ Why Use This?
- Allows extending features (e.g., Admins can manage users while Customers can only purchase).
- Useful in **multi-role applications** like CMS, dashboards, and admin panels.

---

## 📜 4. Modern Inheritance with ES6 Classes
ES6 introduced `class` syntax, making inheritance cleaner.

```javascript
class Seller extends User {
  constructor(name, shopName) {
    super(name, "Seller");
    this.shopName = shopName;
  }

  getShopDetails() {
    return `${this.name} owns ${this.shopName}.`;
  }
}

const seller1 = new Seller("Charlie", "TechStore");
console.log(seller1.getDetails()); // Charlie is a Seller
console.log(seller1.getShopDetails()); // Charlie owns TechStore.
```

### ✅ Benefits of ES6 Classes
- **More readable syntax** compared to prototype-based inheritance.
- **Encapsulation**: Methods are automatically added to the prototype.
- **Super keyword** calls the parent constructor, simplifying inheritance.

---

## 🌍 5. Real-World Applications in Web Development
### 🔹 Frontend:
- **Component-based frameworks (React, Vue)**: Reusable UI components inherit base properties.
- **Form validation classes**: Shared validation logic across forms.

### 🔹 Backend:
- **Express.js middleware**: Base `RequestHandler` class extended by custom handlers.
- **Database models**: ORM models like Mongoose schemas use inheritance for common behaviors.

---

## 🎯 Conclusion
- **Prototypes** enable memory-efficient method sharing.
- **Prototype chain** allows method lookup through parent objects.
- **Constructor inheritance** enables object extensions.
- **ES6 Classes** provide a cleaner, structured way to implement OOP principles.
- **Used widely in frameworks and backend systems**.

🚀 Next, we will dive into **Encapsulation and Closures in JavaScript!** 🎉

