// The one thing that we are not able to iterate with for of loops
// are regular plain objects, which are not iterable

const car = {
  brand: "Mercedes",
  model: "A200",
  year: 2019
}

// we can get the keys of the object by using Object.keys()

Object.keys(car)

// this will give us an array of keys as strings
// ["brand", "model", "year"]

// in ES6 we can use the for in loop

for (const key in car) {
  const value = car[key];
  console.log(value);
}

// this will log the value iterated by each key
