console.clear();
const buttonBuy = document.querySelector("button");
const fishName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const categories = ["Freshwater", "Large aquarium", "Plankton Diet"];
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const changeName = document.querySelector("h2");
changeName.textContent = fishName;

const changeDescription = document.querySelector("p");
changeDescription.textContent = description;

const changeCategory = document.querySelectorAll(".product__category");
changeCategory.forEach((item, i) => {
  if (categories[i]) {
    item.textContent = categories[i];
  }
});

const changePrice = document.querySelector("span");
changePrice.textContent = price;

const changeImage = document.querySelector("img");
changeImage.src = imageSrc;

buttonBuy.addEventListener("click", () => {
  console.log(fishName, price);
});
