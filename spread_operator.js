// The spread operator takes every single item from an iterable
// (everything you can loop with a for of loop)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ["a", "b", "c", "d", "e", "f", "g"];

// If we want to have a new array with bot arrays, 
// we can use the spread operator

const alpha_numbers = [...letters, ...numbers];

// It is also simple to add a new item right in the middle

const alpha_numbers = [...letters, "X99", ...numbers];

// It is also simpler to copy our new array 
// before we used to concatenate like 
// const arrayCopy = [].concat(alpha_numbers);
// because arrayCopy = alpha_numbers is just a reference
// and if we will change arrayCopy, we will also change alpha_numbers

const arrayCopy = [...alpha_numbers];

// We can also use spread operators to transform Node List into
// arrays, without using the Array.form() method

const divs = [...document.querySelectorAll("div")];

// But Array.from() may be a bit more readable

// We can also delete an item in an array with the spread operator

const items = [
  {id: "a001", text: "hello"},
  {id: "a002", text: "hi"},
  {id: "a003", text: "ciao"},
  {id: "a004", text: "yo"}
];

const id = "a003";
const itemIndex = items.findIndex(item => item.id === id);

// Now we will remove the item with id "a003"

const newItems = [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];

// Result of newItems 
// [
//   { id: "a001", text: "hello" },
//   { id: "a002", text: "hi" },
//   { id: "a004", text: "yo" }
// ]

// We can spread into a function like
const items = ["car", "ball", "mirror"];
const newItems = ["phone", "gum", "key"];

items.push(...newItems);
