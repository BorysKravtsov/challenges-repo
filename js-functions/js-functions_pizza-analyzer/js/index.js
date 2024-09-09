console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = +pizzaInput1.value;
  let pizzaSize2 = +pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = +pizzaInput1.value;
  let pizzaSize2 = +pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});
// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  let area1 = Math.PI * Math.pow(diameter1 / 2, 2);
  let area2 = Math.PI * Math.pow(diameter2 / 2, 2);
  console.log(area1);
  let gain = ((area2 - area1) / area1) * 100;
  console.log(gain);
  output.textContent = Math.round(gain);
}
// define the function calculatePizzaGain here

// Task 2
function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}
// define the function updatePizzaDisplay here

// Task 3
function updateOutputColor(size1, size2) {
  if (size1 < 10 || size2 < 10) {
    outputSection.style.backgroundColor = "var(--red)";
  } else outputSection.style.backgroundColor = "var(--green)";
}
// define the function updateOutputColor here
