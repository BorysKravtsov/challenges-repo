function myMap(numbers, double) {
  let i = 0;
  let newArr = [];
  for (const number of numbers) {
    newArr[i] = double(number);
    i++;
  }
  return newArr;
}

function double(number) {
  return number * 2;
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = myMap(numbers, double);
console.log(doubledNumbers);
