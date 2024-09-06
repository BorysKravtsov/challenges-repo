console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const buttonLight = document.querySelector('[data-js="light-mode-button"]');
const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

buttonDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
