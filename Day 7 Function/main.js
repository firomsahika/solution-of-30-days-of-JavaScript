// ########### Givens ###########

// ########### Exercises: Level 1 ###########

// ########### Exercises: Level 2 ###########

//  1
function solveLinEquation(a, b, c, x) {
  const y = (-a * x - c) / b;
  return {
    x: x,
    y: y,
  };
}
console.log(solveLinEquation(2, 3, -4, 5));

//  2
function solveQuadratic(a = 1, b = 0, c = 0) {
  if (b == 0 && c == 0) {
    console.log(0);
  } else {
    x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    if (x1 == x2) {
      console.log({ x1 });
    } else {
      console.log({ x1, x2 });
    }
  }
}
solveQuadratic()

//  3
function printArray() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printArray(1, 2, 3, 4);

//  4
function showDateTime() {
  const date = new Date();
  console.log(
    date.getDay() +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes()
  );
}

// or

function showDateTime() {
  const current_date = new Date();
  const date = current_date.toLocaleDateString();
  const time = current_date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date_time = `${date} ${time}`;
  console.log(date_time)
}
showDateTime();

//  5
function swapValues(x, y) {
  let temp = x + y;
  x = temp - x;
  y = temp - x;
  console.log(x, y);
}
swapValues(3, 4);

//  6
function reverseArray(array) {
  const array_reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    array_reversed.push(array[i]);
  }
  console.log(array_reversed);
}
reverseArray([1, 2, 3, 4, 5]);

//  7
function capitalizeArray(array){
  let uppercae_array = []
  for (let i = 0; i < array.length; i++) {
      uppercae_array.push(array[i].toUpperCase());
  }
  console.log(uppercae_array)
}

capitalizeArray(['a'])

//  8
function addItem(array){
  let sum = 0;
  for(const item of array){
    sum += item
  }
  console.log(sum)
}
addItem([1, 2, 3])

//  9
function removeItem(array, index) {
  array.splice(index, 1);
  console.log(array);
}
removeItem([1, 2, 3, 4, 5, 6, 7], 1);

//  10
function sumOfNumbers(number){
  let sum = 0;
  for(let i = 1; i <= number; i++){
      sum += i
  }
  console.log(sum)
}
sumOfNumbers(4)

//  11
function sumOfOdds(number){
  let sum = 0;
  for(let i = 1; i <= number; i++){
      if(i%2 == 1){
          sum += i
      }
  }
  console.log(sum)
}
sumOfOdds(4)

//  12
function sumOfEven(number){
  let sum = 0;
  for(let i = 1; i <= number; i++){
      if(i%2 == 0){
          sum += i
      }
  }
  console.log(sum)
}
sumOfEven(4)

// 13
function evensAndOdds(number) {
  let even = 0,
    odd = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(
    `The number of odds are ${odd} \nThe number of evens are ${even}.`
  );
}
evensAndOdds(100);

// 14
const sum = (...args) => {
  let total = 0
  for(const number of args){
    total +=number
  }
  return total
}

console.log(sum(1, 2, 3))

//  15


