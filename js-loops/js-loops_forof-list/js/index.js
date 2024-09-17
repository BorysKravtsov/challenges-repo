console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const lang of programmingLanguages) {
  const liItem = document.createElement("li");
  liItem.textContent = lang;
  ol.append(liItem);
}

// --v-- write/change code here --v--

// --^-- write/change code here --^--
