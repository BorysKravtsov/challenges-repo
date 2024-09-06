const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age <= 17 && age > 12) {
    alert("You are a teen");
  } else if (age >= 18 && age < 125) {
    alert("You are an adult");
  } else {
    alert("Wrong age");
  }
  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the console.
});
