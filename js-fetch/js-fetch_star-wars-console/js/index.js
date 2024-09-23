console.clear();

const url = "https://swapi.py4e.com/api/people";
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API Error: " + response.status);
    }

    const eyeColor = await response.json();
    const characters = eyeColor.results;
    const r2d2 = characters.find((character) => character.name === "R2-D2");
    console.log(r2d2.eye_color);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
