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

#### High-level review

1. Are all the necessary helper functions defined at the top, such as `$()` for getting elements by `id`?
1. Are all the necessary global variables defined just below that, such as constants or persisting values?
1. Are all the necessary processing and calculation functions defined after that, such as the primary button click event handler function?
1. Is the primary click event handler function assigned to the `onclick` of the submission button?

#### Low-level breakdown

// TODO
