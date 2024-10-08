console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const timeDay = new Date().getHours();
  if (timeDay >= 5 && timeDay <= 11) return "Good Morning";
  else if (timeDay > 11 && timeDay <= 18) return "Good Afternoon";
  else if (timeDay > 18 && timeDay <= 22) return "Good Evening";
  return "Good Night";
}

function getDayColor() {
  // Code here

  const dayWeek = new Date().getDay();
  if (dayWeek < 5 && dayWeek > 0) return "lightblue";
  else if (dayWeek === 0) return "darkgray";
  return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
