// ES6 introduced Classes, and we have two ways to create Classes.

class Person {

};

const Person = class {

};

// We are going to use the first one.

class Person {

  // Inside our class we dont need to declare function
  // with the function key word, the same as in new object
  // literals. The constructor gets called when we make
  // a new class --> new Person()

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Inside ES6 classes we don't use commas to separate
  // different methods

  hi() {
    console.log(
      `Hi, my name is ${this.name} and I'm ${this.age} years old!`
    )
  }

  static info() {
    console.log("This is a Person!");
  }

  get description() {
    return `${this.name} is ${this.age} years old`;
  }

  set personGender(gender) {
    this.gender = gender;
  }

  get personGender() {
    return this.gender;
  }
}

const max = new Person("Max", 25);
const tomas = new Person("Tomas", 38);

// Now both max and tomas are classes with the given data
// and both inherited the hi() method
 
// Some of the default methods are not inheritable
// like Array.of(), these are static methods

// Static methods can be called directly on the class like Person
// and not on instances of the class like max or tomas
// tomas.info() --> is not a function
// Person.info() --> This is a Person!

// In classes we have getters and setters, those are not methods 
// but more like a property that is computed when you pull it
// max.description --> "Max is 25 years old"

// We can use setters to set new gender like max.personGender = "male"
// and then use the getter method to access it max.personGender
