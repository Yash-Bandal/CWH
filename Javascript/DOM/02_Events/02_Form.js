//HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Events Example</title>
  <style>
    form {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      max-width: 400px;
    }
    input, select, textarea, button {
      display: block;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    #output {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Form Events Example</h1>

  <form id="myForm">
    <label for="textInput">Text Input:</label>
    <input type="text" id="textInput" placeholder="Type something...">

    <label for="selectBox">Select Box:</label>
    <select id="selectBox">
      <option value="">Choose an option</option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>

    <label for="textarea">Text Area:</label>
    <textarea id="textarea" rows="4" placeholder="Write something..."></textarea>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>

  </form>

  <p id="output">Interact with the form to see the events in action.</p>

  <script src="Form.js"></script>
</body>
</html>

//==============================  Form.js ==================================
const output = document.getElementById("output");
const form = document.getElementById("myForm");
const textInput = document.getElementById("textInput"); //points input of form
const selectBox = document.getElementById("selectBox");
const textarea = document.getElementById("textarea");

// Event: input (triggered when the value of an input or textarea changes)
// Expected Output: Updates dynamically as you type.
textInput.addEventListener("input", () => {
  output.textContent = `Text Input: ${textInput.value}`;
});

// Event: focus (triggered when an element gains focus)
// Expected Output: "Text input is focused!"
textInput.addEventListener("focus", () => {
  output.textContent = "Text input is focused!";
});

// Event: blur (triggered when an element loses focus)
// Expected Output: "Text input lost focus!"
textInput.addEventListener("blur", () => {
  output.textContent = "Text input lost focus!";
});

// Event: change (triggered when a select element's value changes)
// Expected Output: "Selected option: Option X"
selectBox.addEventListener("change", () => {
  output.textContent = `Selected option: ${selectBox.value}`;
});

// Event: input (triggered as text is typed in a textarea)
// Expected Output: "Textarea input: Your text..."
textarea.addEventListener("input", () => {
  output.textContent = `Textarea input: ${textarea.value}`;
});

// Event: submit (triggered when the form is submitted)
// Expected Output: "Form submitted!"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the page from reloading
  output.textContent = "Form submitted!";
});


// Event: reset (triggered when the form is reset)
// Expected Output: "Form reset!"
document.getElementById("myForm").addEventListener("reset", () => {
    output.textContent = "Form reset!";
  });
  
