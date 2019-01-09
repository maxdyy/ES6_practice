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

// Arrays now haw .find() method

const posts = [
  {
    code: "a",
    title: "Post a",
    text: "Text a"
  },
  {
    code: "b",
    title: "Post b",
    text: "Text b"
  }
];

// the find method takes a function that returns true or false

const post = posts.find(post => {
  if (post.code === "b") {
    return true;
  } else {
    return false;
  }
});

// More succinct way to write it

const code = "b"
const post = posts.find(post => post.code === code);

// We also have a .findIndex(), which is also a new method

const postIndex = posts.findIndex(post => post.code === code);

// This will give us the index of the post with code "b"

// There are other methods that are not in ES6 but are not 
// commonly used: .some() and .every()

const ages = [32, 1, 99, 10, 18, 21, 55];

// Is there at least one adult?

const adultPresent = ages.some(age => age >= 18);

// adultPresent is true

// Is everybody is old enough to drink?

const allOldEnough = ages.every(age => age >= 18);

// allOlderEnough is false

