// ES6 introduced a lot of new array methods

// Array.from() and Array.of()

// Array.from() will create an array from something that is
// similar to an array

const divs = document.querySelectorAll('div');

// now our divs const is not an array, but a NodeList
// we can use the map method on it

// we can create an array ot of our NodeList of divs by using
// the Array.from() method

const divsArray = Array.from(divs);

// Array.from() also takes a second argument that allows us
// to modify the data while creating the array

const divsContentArray = Array.from(divs, div => {
  return div.textContent;
})

// we can use the Array.from() on arguments object

function summAll() {
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}

// Array.of() will create and array of every argument you pass in

const things = Array.of("map", 3, ["hello", 9], "phone");

// things -> ["map", 3, ["hello", 9], "phone"]