# 📌 Chapter 4: Manipulating the DOM with jQuery

## 🚀 Introduction
jQuery makes it easy to manipulate the **Document Object Model (DOM)** by allowing us to modify elements, attributes, and CSS styles dynamically. This chapter covers different ways to update content, add or remove elements, and manipulate attributes efficiently.

---

## 📖 Topics Covered

### 🔹 1. Changing Content / Get Content - text(), html(), and val()
jQuery provides methods to update text, HTML, and form values dynamically.

- **Example:**
  ```javascript
  $("#text").text("Updated Text");
  $("#content").html("<b>Bold HTML Content</b>");
  $("#inputField").val("New Value");
  ```
  **Methods:**
  - `text()` – Change text content (ignores HTML) / Sets or returns the text content of selected elements
  - `html()` – Change inner HTML (renders HTML tags) /  Sets or returns the content of selected elements (including HTML markup)
  - `val()` – Change input values / Sets or returns the value of form fields

---
 
## JavaScript Alternatives for jQuery DOM Manipulation
vanilla js -  plain or basic JavaScript code, written without the use of any external libraries or frameworks like jQuery, React, or Angular

In **vanilla JavaScript**, you can achieve the same functionality as jQuery's `.text()`, `.html()`, and `.val()` using built-in properties.  

---

## 1️⃣ `.text()` Alternative to element.textContent 
**Usage:** Sets or returns the text content of selected elements (ignores HTML).  

#### jQuery:
```javascript
console.log($('#myElement').text()); // Get text content
$('#myElement').text('New Text'); // Set text content
```

#### Vanilla JavaScript:
```javascript
console.log(document.getElementById('myElement').textContent); // Get text content
document.getElementById('myElement').textContent = 'New Text'; // Set text content
```

🔹 **`textContent`** is the recommended alternative as it **preserves only the text, without HTML formatting**.  

---

## 2️⃣ `.html()` Alternative to element.innerHTML
**Usage:** Sets or returns the content of selected elements (including HTML markup).  

#### jQuery:
```javascript
console.log($('#myElement').html()); // Get inner HTML
$('#myElement').html('<b>Bold Text</b>'); // Set inner HTML
```

#### Vanilla JavaScript:
```javascript
console.log(document.getElementById('myElement').innerHTML); // Get inner HTML
document.getElementById('myElement').innerHTML = '<b>Bold Text</b>'; // Set inner HTML
```

🔹 **`innerHTML`** allows **both getting and setting content, including HTML tags**.  

---

## 3️⃣ `.val()` Alternative to element.value 
**Usage:** Sets or returns the value of form fields (`<input>`, `<textarea>`, `<select>`).  

#### jQuery:
```javascript
console.log($('#myInput').val()); // Get input value
$('#myInput').val('New Value'); // Set input value
```

#### Vanilla JavaScript:
```javascript
console.log(document.getElementById('myInput').value); // Get input value
document.getElementById('myInput').value = 'New Value'; // Set input value
```

🔹 **`value`** is used for form elements like **inputs, textareas, and dropdowns**.

---

##  Key Differences  

| Function | jQuery | JavaScript Equivalent |
|----------|--------|-----------------------|
| `.text()` | `$('selector').text()` | `element.textContent` |
| `.html()` | `$('selector').html()` | `element.innerHTML` |
| `.val()` | `$('selector').val()` | `element.value` |



### 🔹 2. Modifying Attributes
We can use `attr()` and `prop()` to modify element attributes dynamically.
- **Example:**
  ```javascript
  $("#link").attr("href", "https://example.com");
  $("#checkbox").prop("checked", true);
  ```
  **Methods:**
  - `attr()` – Get or set attributes (e.g., `href`, `src`, `alt`)
  - `prop()` – Modify boolean properties (e.g., `checked`, `disabled`)

### 🔹 3. Adding and Removing Elements
We can insert or delete elements dynamically using jQuery.
- **Example:**
  ```javascript
  $("#list").append("<li>New Item</li>");
  $("#list").prepend("<li>First Item</li>");
  $("#element").remove();
  ```
  **Methods:**
  - `append()` – Adds content at the end of an element
  - `prepend()` – Adds content at the beginning
  - `remove()` – Removes an element completely

### 🔹 4. Modifying CSS and Classes
We can dynamically modify styles and classes using jQuery.
- **Example:**
  ```javascript
  $("#box").css("background-color", "blue");
  $("#text").addClass("highlight");
  $("#text").removeClass("highlight");
  $("#button").toggleClass("active");
  ```
  **Methods:**
  - `css()` – Modify inline styles
  - `addClass()` – Add a CSS class
  - `removeClass()` – Remove a CSS class
  - `toggleClass()` – Toggle a class on/off

---

## 🎯 Real-World Applications
- **Dynamic content loading:** Change website text without refreshing the page.
- **Interactive forms:** Update form fields dynamically based on user input.
- **Theming and UI changes:** Apply dark/light mode using class toggles.

---

📌 **Next Chapter:** [Effects and Animations →](./5_Effects_Animations.md)

