  # 📌 Lesson 9: Static Methods & Properties in JavaScript (E-Commerce Example)

## 🚀 Introduction
Static methods and properties in JavaScript belong to the **class itself**, rather than instances of the class. They are useful for utility functions, helper methods, and business logic that doesn't depend on instance-specific data.

In an **e-commerce application**, static methods can be used to implement features like discount calculations, order validation, or managing global configurations.

---

## 🎯 Understanding Static Methods & Properties

### 🔹 What are Static Methods?
A static method is a function that is called on a class but **cannot be accessed from instances** of the class.

```javascript
class Order {
    static calculateDiscount(price, discountPercent) {
        return price - (price * discountPercent) / 100;
    }
}

console.log(Order.calculateDiscount(1000, 10)); // Output: 900

const order1 = new Order();
// order1.calculateDiscount(1000, 10); ❌ ERROR: Not accessible from an instance
```

### 🔹 What are Static Properties?
Static properties are values that belong to the class itself, not to any specific instance.

```javascript
class Order {
    static taxRate = 0.18; // 18% Tax
}

console.log(Order.taxRate); // Output: 0.18
```

---

## 🛒 Applying Static Methods & Properties in E-Commerce
### 🔥 Use Case: Global Discount Rules & Tax Calculation
In an e-commerce platform, discounts and tax rates **apply globally**, meaning they should be class-level properties and methods.

```javascript
class Order {
    static taxRate = 0.18; // 18% Tax
    static discountThreshold = 5000; // Minimum price to get extra discount
    
    static calculateDiscount(price, discountPercent) {
        return price - (price * discountPercent) / 100;
    }
    
    static applyTax(price) {
        return price + (price * this.taxRate);
    }
}

// Usage
const priceAfterDiscount = Order.calculateDiscount(6000, 10);
console.log(priceAfterDiscount); // 5400

const finalPrice = Order.applyTax(priceAfterDiscount);
console.log(finalPrice); // 6372 (5400 + 18% tax)
```

### ⚡ Benefit: No Need to Create Instances
Unlike instance methods, **static methods don't require creating an object**. This is helpful for business logic like discounts, taxes, or promotions that are common to all orders.

---

## ✅ When to Use Static Methods & Properties
| Use Case | Why Use Static? |
|----------|----------------|
| **Global settings** (e.g., tax rate, discount limits) | No need for instances, applies universally |
| **Utility functions** (e.g., price calculations) | Reusable methods that don't depend on an instance |
| **Singleton patterns** | Ensure only one configuration is used |

---

## ⚠️ Limitations of Static Methods
1. **Cannot access instance properties** directly (`this` refers to the class, not an object).
2. **Not inherited by instances**, only by subclasses.
3. **Overuse may break OOP principles**, as everything shouldn't be static.

---

## 🎯 Key Takeaways
✔ **Static methods** are called on the class, not instances.
✔ **Static properties** hold values shared across all instances.
✔ **Useful for global configurations, utilities, and e-commerce pricing logic.**
✔ **Cannot access instance properties directly.**

---

🚀 **Next Lesson:** [Encapsulation & Private Properties](./10_Encapsulation.md)

