console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.querySelector("#number-a");
const numberB = document.querySelector("#number-b");
const addition = document.querySelector("#addition");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  let a = parseInt(numberA.value);
  let b = parseInt(numberB.value);
  console.log(a);
  // --v-- write your code here --v--
  if (addition.checked === true) {
    result = add(a, b);
  } else if (subtraction.checked === true) {
    result = subtract(a, b);
  } else if (multiplication.checked === true) {
    result = multiply(a, b);
  } else result = divide(a, b);
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
