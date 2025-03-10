# 📌 Chapter 4: Manipulating the DOM with jQuery

## 🚀 Introduction
jQuery makes it easy to manipulate the **Document Object Model (DOM)** by allowing us to modify elements, attributes, and CSS styles dynamically. This chapter covers different ways to update content, add or remove elements, and manipulate attributes efficiently.

---

## 📖 Topics Covered

### 🔹 1. Changing Content
jQuery provides methods to update text, HTML, and form values dynamically.
- **Example:**
  ```javascript
  $("#text").text("Updated Text");
  $("#content").html("<b>Bold HTML Content</b>");
  $("#inputField").val("New Value");
  ```
  **Methods:**
  - `text()` – Change text content (ignores HTML)
  - `html()` – Change inner HTML (renders HTML tags)
  - `val()` – Change input values

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

