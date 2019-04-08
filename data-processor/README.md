# Data Processor

## Purpose

_Data Processor_ projects are any web apps that simply:

- Take in user input data
- Process that input data (perhaps by running a calculation)
- Display the results of the processing (calculation) in some output

## Examples

Some data processor projects might be:

- Math calculators
  - Tip calculator
  - Age calculator
  - Measurement convertors
- API processors
  - Car info from VIN
  - Nutritional data from foods or recipes
  - Sports game scores
- Simple games
  - Guessing game
  - Rock, paper, scissors
  - Text adventure

## Interface

Typically data processing apps have:

- Introductory text to explain how to use the app
- A single "form"
  - `label`(s) and `input`(s)
    - (Sometimes input validation error messages)
  - A `button` to "submit" the input data to be processed (AKA run the calculation)
- An output element (or several)

## Interaction

The user will be able to interact with data processing apps by:

- Entering in input data into the form `input` element(s)
- Clicking the `button` to "submit" the input data and process the data (run the calculation)

## Outline

1. What is the purpose of the app? What is the experience?
1. What are the inputs and outputs of this app?
1. What are the essential parts of the interface?
1. What are the primary interactions of the interface?
   1. What are the key events to listen for?
   1. How will those events be handled?
1. How will the input data be entered and submitted?
   1. What will the data type of the input values be initially?
   1. Do any of the input values need to be converted to a different data type?
   1. Will there need to be any input validation?
      1. How should input validation errors be displayed? What will it look like?
      1. Which element(s) should be used to display the errors?
1. How will the output be displayed? What will it look like?
   1. Which element(s) should be used to display the output?

## Checklist

### HTML (`index.html`)

1. Is the title correct in the `<head>`?
1. (Optional) Is the CSS `<link>` in the `<head>`?
1. (Optional) Is the title correct in the `<h1>` (or similar header element)?
1. (Optional) Is there some introductory text in a `<p>` element (or similar text element) that explains how to use the app?
1. For every necessary input, is there a respective `<label>` and `<input>` (or similar form element[s])?
   1. Does each `<input>` have an `id`?
   1. (Optional) Does each `<label>` have a `for` that references the respective `<input>`'s `id`?
   1. Does each `<label>` accurately describe its respective `<input>`?
   1. Does each `<input>` have the proper `type` for data type validation?
   1. (Optional) Does each `<input>` have a `placeholder` and initial `value`?
   1. (Optional) Does each `<input>` that requires input data validation have an element, such as a `<p>`, to display validation errors?
      1. Does each validation error element share the same `class`?
   1. (Optional) Does each `<input>` utilize other useful attributes?
1. (Optional) Does the first `<input>` have `autofocus`?
1. (Optional) Is each `<label>` and `<input>` pairing wrapped in a "form group" container element, such as a `<div>` or `<p>`, for styling purposes?
   1. Does each "form group" container element share the same `class`?
1. Is there a `<button>` (or similar) to "submit" the input data to be processed?
   1. Does the `<button>` have an `id`?
   1. Is the button properly labeled?
1. Is there an element (or several), such as a `<p>` or a `<span>` within a `<p>`, reserved for the output?
   1. Does the output element have an `id`?
1. Is the JS file included in a `<script>` just before the closing `</body>` tag?

### CSS (`index.css`)

1. Does the `body` have the correct font, background color, margin, and padding necessary?
1. Do the form elements, such as `label` and `input`, have the appropriate styles?
1. Do the "form group" container elements, such as `div`, `p`, or `.form-group`, have the proper styles?
1. Is the submission `button` styled correctly?
1. Do the output elements (`p`, `span`, or whichever were chosen) have the proper styles?

### JavaScript (`index.js`)

#### Helper functions

(Optional) Create any necessary helper functions at the top, such as `$()` for getting elements by `id`.

**Example**

```js
function $(id) {
  return document.getElementById(id);
}
```

#### Event handler functions

##### Step 1: Initialize

Create any necessary event handler functions, such as `handleClick()` for handling the onClick event of the primary submission button.

**Example**

```js
function handleClick() {
  // Handle the click event of the submission button
  console.log("Button clicked");
}
```

##### Step 2: Assign

Assign the event handler functions to their respective DOM elements.

**Example**

```js
$("calculate").onclick = handleClick;
```

##### Test

Run the application, open the console, and click the button. You should see something in the logs if everything was done correctly by this point. (Repeat for any additional handled events besides the primary submission button click event.)

##### Step 3: Gather input

Get the user's input data from the HTML inputs (or similar) from within the primary submission handler function.

**Example**

```js
function handleClick() {
  // Handle the click event of the submission button
  console.log("Button clicked");
  // Example of getting a number from a number input
  var numberInput = $("numberInput").valueAsNumber;
  console.log("The value of the input 'numberInput' is: " + numberInput);
  // Example of getting a string from a text input
  var stringInput = $("textInput").value;
  console.log("The value of the input 'textInput' is: " + stringInput);
  // Example of getting a array of strings from a group of inputs with a shared class name
  var inputGroup = document.getElementsByClassName("input-group");
  var inputValues = [];
  for (var i = 0; i < inputGroup.length; i++) {
    inputValues.push(inputGroup[i].value);
  }
  console.log(inputValues);
}
```

##### Test

Run the application, input data into the input elements, open the console, and click the button. You should see your input data in the logs if everything was done correctly by this point. (Repeat for any additional handled events besides the primary submission button click event.)

##### (Optional) Step 3.5: Validate

If it is necessary to validate the input data via JavaScript, then now is the time to do so. Create the appropriate conditional checks to ensure the input data is valid. If the input data is invalid, inform the user of the error.

**Example 1**

```js
function handleClick() {
  // Handle the click event of the submission button
  console.log("Button clicked");
  // Example of getting a number from a number input
  var numberInput = $("numberInput").valueAsNumber;
  console.log("The value of the input 'numberInput' is: " + numberInput);
  // Validate the input and ensure it is a number.
  if (isNaN(numberInput)) {
    // numberInput is not a number. Inform the user of the error.
    $("input-error").innerText = "Please enter a number.";
    return;
  } else {
    // numberInput is a number. Ensure the error text is cleared.
    $("input-error").innerText = "";
  }
}
```

**Example 2**

```js
function handleClick() {
  var birthdayInput = $("birthday").value;
  if (isNaN(Date.parse(birthdayInput))) {
    $("input-error").innerText = "Please enter a number.";
    return;
  } else {
    $("input-error").innerText = "";
  }
}
```

**Test**

Run the application, input invalid data into the input elements, and click the button. You should see your input error messages if everything was done correctly by this point.

##### Step 4: Mock output

Create "dummy data" placeholder examples for the output.

**Example 1**

```js
function handleClick() {
  // Example of getting a number from a number input
  var numberInput = $("numberInput").valueAsNumber;
  console.log("The value of the input 'numberInput' is: " + numberInput);
  // FIXME: Define the results with mock data.
  var results = 7;
  // Output the results
  $("output").innerText = result.toFixed(2);
}
```

**Example 2**

```js
function handleClick() {
  /* ... */
  // FIXME: Define the results with mock data.
  var results = ["Red", "Blue", "Green"];
  // First, clear the output list
  $("output-list").innerHTML = "";
  // Then output the results as individual list items
  for (var i = 0; i < results.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(results[i]));
    $("output-list").appendChild(li);
  }
}
```

##### Test

Run the application and click the submission button. You should see your mock data output into your output element(s) if everything was done correctly by this point. (Repeat for any additional output.)

##### Step 5: Process data

This is where the real magic happens. How the input data is processed will vary entirely depending on the application. However, no matter what the processing is, it needs to happen after gathering and validating the input and before generating the output. This step will replace the mock output data in the previous step.

**Example 1: Tip calculator**

```js
function handleClick() {
  // Example of getting a number from a number input
  var numberInput = $("numberInput").valueAsNumber;
  console.log("The value of the input 'numberInput' is: " + numberInput);
  // Example of calculating a 20% tip
  var results = numberInput * 0.2;
  // Output the results
  $("output").innerText = result.toFixed(2);
}
```

If the data processing logic is lengthy and complex, break it out into a separate function. (That separate function can then be used to easily test the processing logic.)

**Example 2: Age calculator**

```js
function calculateAge(birthday) {
  var date = new Date(Date.now() - birthday);
  return Math.abs(date.getUTCFullYear() - 1970);
}
function handleClick() {
  var birthdayInput = $("birthday").value;
  var birthday = Date.parse(birthdayInput);
  if (isNaN(birthday)) {
    $("input-error").innerText = "Please enter a number.";
    return;
  } else {
    $("input-error").innerText = "";
  }
  var result = calculateAge(birthday);
  $("output").innerText = result;
}
```

#### High-level overview

1. Are all the necessary helper functions defined at the top, such as `$()` for getting elements by `id`?
1. Are all the necessary global variables defined just below that, such as constants or persisting values?
1. Are all the necessary processing and calculation functions defined after that, such as the primary button click event handler function?
1. Is the primary click event handler function assigned to the `onclick` of the submission button?
