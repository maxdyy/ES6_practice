// In JavaScript we have Prototypal inheritance

function Person(name, age) {
  this.name = name;
  this.age = age; 
}

const max = new Person("Max", 25);

// Prototypal inheritance is when we put a method in the
// original constructor (Person, a function with capital letter
// usually is considered a constructor), it will be inherited 
// by the rest of them.

const cats = ["fluffy", "johnny"];

// Now if we do cats.pop(), this method .pop() comes from
// the parent Array (again with capital letter), and this 
// Array has many prototype methods.

// And this means that when we create a new array like cats from
// Array, the new array will inherit all the prototype methods

Person.prototype.hi = function() {
  console.log(
    `Hi, my name is ${this.name}, I'm ${this.age} years old.`
  );
}

// This way the Person received a new method and via Prototypal
// inheritance our person max got it too, so we can use max.hi()
// and we will get --> Hi, my name is Max, I'm 25 years old.



