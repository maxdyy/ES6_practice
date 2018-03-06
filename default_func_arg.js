// in ES6 we can set up default values for function arguments

let name = `tim`;
let food = `toast`;

// here if food or name is not defined we have default values

const foodIsReady = (name = `max`, food = `pizza`) => {
  console.log(`${name}, your ${food} is ready!`)
}

foodIsReady(name);
// will return 'tim, your pizza is ready!'