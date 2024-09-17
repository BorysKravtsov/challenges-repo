console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (filledStars > 0) {
      img.setAttribute("src", "./assets/star-filled.svg");
    } else {
      img.setAttribute("src", "./assets/star-empty.svg");
    }
    filledStars--;
    img.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(img);
  }

  //--^-- your code here --^--
}

renderStars();
