// Create a shortcut function to keep the code cleaner and shorter in length.
function $(id) {
  return document.getElementById(id);
}

// Create a function to handle the click event for the calculate button.
function handleClick() {
  console.log("Calculate button clicked. Beginning calculation.");

  // Get the user's input.
  // NOTE: This example gets the input values as numbers.
  var input1 = $("input1").valueAsNumber;
  console.log("The value of the input 'input1' is: " + input1);
  var input2 = $("input2").valueAsNumber;
  console.log("The value of the input 'input2' is: " + input2);

  /*
  // NOTE: It is unnecessary to validate the number input as this is already handled by the HTML input elements.
  // This example is merely for reference.
  // Validate the inputs and ensure they are numbers.
  if (isNaN(input1)) {
    // input1 is not a number. Inform the user of the error.
    $("input1-error").innerText = "Please enter a number for input1";
  } else {
    // input1 is a number. Ensure the error text is cleared.
    $("input1-error").innerText = "";
  }
  if (isNaN(input2)) {
    // input2 is not a number. Inform the user of the error.
    $("input2-error").innerText = "Please enter a number for input2";
  } else {
    // input2 is a number. Ensure the error text is cleared.
    $("input2-error").innerText = "";
  }
  // NOTE: The previous if else statements could be written in one line with a ternary.
  // $("input2-error").innerText = isNaN(input2) ? "Please enter a number for input2" : "";
  // Stop the function if any of the input is invalid.
  // NOTE: It is inefficient to check the same conditions twice. Can this be improved?
  if (isNaN(input1) || isNaN(input2)) {
    return;
  }
  */

  // Run the actual calculation.
  // NOTE: This example is short enough to be a single line of code but could be broken out.
  // If the calculation code is lengthy, please create a separate function for it.
  var result = input1 * (input2 / 100);
  console.log("The calculated result is: " + result);

  // Give the user the result by displaying it in the output element.
  // NOTE: This example displays the number with 2 decimal places.
  $("output").innerText = result.toFixed(2);
}

// Assign the onclick event of the calculate button to the calculateSomething function.
$("calculate").onclick = handleClick;
