let mealCost = prompt("Enter your meal cost:");
mealCost = Number(mealCost);
const tip = 0.1;
let totalCost = mealCost * tip + mealCost;
alert("The total cost of your bill is: " + totalCost);
