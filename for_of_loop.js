const cars = ['ferrari', 'lamborghini', 'mercedes', 'aston martin'];

// we can iterate through this array with a for of loop
for (const car of cars) {
  console.log(car);
}

// but in this way we cant access easily the index of each car
// we can use .entries() on and array to fix this

for (const car of cars.entries()) {
  console.log(car);
}

// this will log an array with the index and the iterated item
// and then we can destructor the given array

for (const [i, car] of cars.entries()) {
  console.log(i, car)
}

// lets say you have to make a function that takes an nth number
// of arguments (numbers), and adds them up

function addNumbers() {

  // since we don't know how many arguments we have
  // we can use the arguments word inside out function

  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return total;

}

addNumbers(1,2,3,4,5,6,7,8,9,10,11,12)

// we can also use the for of loop on strings, which will
// get us each string character

for (const letter of "hello") {
  console.log(letter);
}

// we can also iterate through node lists of DOM elements

const divs = document.querySelectorAll('div');

for (const div of divs) {
  console.log(div); 
}

// We can use this for of loops on data types that are not arrays
// as long as they are iterables like a DOM collection, arguments, string,
// map or set
