console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.map((animal) =>
  animal.name.startsWith("g")
);
console.log(firstAnimalStartingWithLetterG);

const indexOfAnimalWithNameLongerFive = animals.findIndex(
  (animal) => animal.name.length > 5
);

console.log(indexOfAnimalWithNameLongerFive);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy (and the tests work).

const animalsSortedAlphabetically = animals.slice().sort((a, b) => {
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1;
  } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
});
console.log(animalsSortedAlphabetically);

const animalsSortedByWeightStartingWithLowest = animals
  .slice()
  .sort((a, b) => a.weight - b.weight);

const animalsSortedByWeightReversed = animals
  .slice()
  .sort((a, b) => a.weight - b.weight)
  .reverse();

const animalWithWeightMoreThanFivehundredExists = animals.some(
  (animal) => animal.weight > 500
); //some
console.log(animalWithWeightMoreThanFivehundredExists);

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred = animals.every(
  (animal) => animal.continents.includes("Europe") && animal.weight < 100
); //filter
console.log("all animals in europe", allAnimalsInEuropeWeighLessThanOnehundred);
// Hint: filter + map + reduce
const weightOfAllAnimalsInAfrica = animals
  .filter((animal) => animal.continents.includes("Africa"))
  .map((animal) => animal.weight)
  .reduce((acc, cur) => acc + cur);
console.log(weightOfAllAnimalsInAfrica);
// Hint: As above, but divided by the number of animals in Africa.
const averageWeightOfAllAnimalsInAfrica =
  weightOfAllAnimalsInAfrica /
  animals.filter((animal) => animal.continents.includes("Africa")).length;
console.log(averageWeightOfAllAnimalsInAfrica);
export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
