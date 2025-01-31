# JavaScript Error Handling Guide

Error handling in JavaScript is essential for writing robust and fault-tolerant applications. This guide covers different error types, handling mechanisms, and best practices.

---

## **1. Types of Errors in JavaScript**

### **a) Syntax Error (`SyntaxError`)**
Occurs when JavaScript encounters incorrect syntax.
```javascript
console.log("Hello World" // Missing closing parenthesis
```
**Fix:**
```javascript
console.log("Hello World");
```

### **b) Reference Error (`ReferenceError`)**
Occurs when trying to use an undefined variable.
```javascript
console.log(myVariable); // ReferenceError: myVariable is not defined
```
**Fix:**
```javascript
let myVariable = 10;
console.log(myVariable);
```

### **c) Type Error (`TypeError`)**
Occurs when performing an operation on an incorrect data type.
```javascript
let num = 10;
num(); // TypeError: num is not a function
```
**Fix:**
```javascript
console.log(num); // Output: 10
```

### **d) Range Error (`RangeError`)**
Occurs when a value is outside its valid range.
```javascript
let arr = new Array(-5); // RangeError: Invalid array length
```
**Fix:**
```javascript
let arr = new Array(5);
console.log(arr.length); // Output: 5
```

### **e) URI Error (`URIError`)**
Occurs when an invalid URI function parameter is provided.
```javascript
decodeURI('%'); // URIError: URI malformed
```
**Fix:**
```javascript
console.log(decodeURI('%20')); // Output: (space)
```

---

## **2. Error Handling Mechanisms**

### **a) `try...catch` Block**
```javascript
try {
  let data = myUndefinedVar; // ReferenceError
} catch (error) {
  console.log("An error occurred:", error.message);
}
```

### **b) `try...catch...finally` Block**
```javascript
try {
  console.log("Trying...");
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Finally block executed.");
}
```

---

## **3. Throwing Custom Errors (`throw` Statement)**
```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  return "Access granted!";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log("Error:", error.message);
}
```

---

## **4. Error Object Properties**
```javascript
try {
  let num = num.toUpperCase(); // TypeError
} catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
  console.log("Stack Trace:", error.stack);
}
```

---

## **5. Handling Asynchronous Errors**

### **a) `try...catch` with `async/await`**
```javascript
async function fetchData() {
  try {
    let response = await fetch('https://invalid-url.com'); // Network error
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch data:", error.message);
  }
}

fetchData();
```

### **b) Using `.catch()` with Promises**
```javascript
fetch('https://invalid-url.com')
  .then(response => response.json())
  .catch(error => console.log("Error:", error.message));
```

---

## **6. Global Error Handling**

### **a) `window.onerror` (For Browsers)**
```javascript
window.onerror = function(message, source, lineno, colno, error) {
  console.log("Global Error:", message);
};
```

### **b) `process.on('uncaughtException')` (For Node.js)**
```javascript
process.on('uncaughtException', (error) => {
  console.log("Unhandled Exception:", error.message);
});
```

---

## **7. Best Practices for Error Handling**
✅ Use `try...catch` for predictable errors.  
✅ Provide meaningful error messages.  
✅ Use `finally` for cleanup (e.g., closing database connections).  
✅ Handle async errors with `.catch()` or `try...catch`.  
✅ Log errors properly for debugging.  
✅ Use `throw` to create custom errors.  
✅ Avoid `eval()` to prevent `EvalError`.  

---

## **Final Summary**
| Concept | Purpose |
|--------------------|---------|
| `try...catch` | Catches errors and prevents crashes |
| `finally` | Executes code regardless of errors |
| `throw` | Manually throws an error |
| `async/await` + `try...catch` | Handles errors in asynchronous code |
| `.catch()` | Catches promise rejections |
| `window.onerror` | Catches all errors globally in browsers |
| `process.on('uncaughtException')` | Catches unhandled exceptions in Node.js |

---

