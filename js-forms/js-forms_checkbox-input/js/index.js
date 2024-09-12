console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}
hideTosError();
tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked === true) {
    return hideTosError();
  } else return showTosError();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (tosCheckbox.checked === false) {
    return alert("aplly agreement");
  } else return alert("Form submitted");
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
