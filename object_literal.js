// Object literals also got an update in ES6

const greeting = "hello";
const title = "Mr.";
const name = "Max";

// As long as the variable and the object key
// have the same name, we can use this syntax sugar

const login = {
  greeting,
  title,
  name,
}

// This will give us the following object
// const login = {
//   greeting: "hello", 
//   title: "Mr.",
//   name: "Max",
// }


const greetings = {
  getData() {
    // stuff
  },
  sayHello() {
    // stuff
  },
  sayBuy() {
    // stuff
  },
}

// This is also a syntax shortcut for the old way of
// defining methods in our object:
// sayHello: function() { // stuff }

const key = "color";
const value = "#000";

// We can use our const in the object keys

const colorful = {
  [key]: value,
  [`${ket}Opposite`]: invertColor(value),
}

// This way we can compute a property key

const keys = ["name", "age", "gender"];
const values = ["John", "28", "male"];

// We can use methods and functions in objects 
// to create keys and values

const person = {
  [key.shift()]: values.shift(),
  [key.shift()]: values.shift(),
  [key.shift()]: values.shift(),
}
