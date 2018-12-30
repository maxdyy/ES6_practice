const person = {
  first: 'Maksym',
  last: 'Dmukhovskyy',
  country: 'Italy',
  city: 'Brescia',
  age: 24
}

// ES6 destructuring allows us to extract data
// from objects and make them their own variables

// before we used to make repetitive variables
const first = person.first;
const last = person.last;

// now we can use the destructuring syntax { }
const { country, city } = person;
// this will take the country and city from the object
// person and make them separate variables

// this is very useful if we have a very nested object
const car = {
  brand: 'BMW',
  model: {
    series: 300,
    type: 320,
    fuel: 'Diesel'
  }
}

const {series, type, fuel} = car.model;

// we can also rename the variables during deconstruction
// using : to set new name
const { series:model } = car.model; // stores car.model.series in a model const

// we can also set a default value on destructuring
// for when there is no value in the object
const {series, type, fuel, color = 'blue'} = car.model;

// we can use both
const {series:model = 500, fuel = 'gas', color:paint = 'red'};


// destructuring works also on arrays with [ ]
const details = ['BMW', 320, 'Diesel'];

// gets the value ordered by index
const [ brand, model, fuel ] = details;

// destructuring string with some separators 
// using .split()
const data = 'BMW,320,Diesel';
const [ brand, model, fuel ] = data.split(',');

// we can also use the rest operator ...
// to include rest data
const data = ['BMW', 320, 'Diesel', 'Blue', '2017', 'M sport'];
const [ brand, model, fuel, ...info] = data;

// we can also swap values between variables
let currentCar = 'BMW 320';
let newCar = 'Mercedes C 350';

[currentCar, newCar] = [newCar, currentCar];

// we can destructor the result of a function right away
function convertCurrency(amount) {
  const converted = {
    EUR: amount * 0.9,
    GBP: amount * 0.83,
    CAD: amount * 1.4,
  }

  return converted;
};

const { EUR, GBP, CAD } = convertCurrency(100);

// we can destructor function arguments if an object 
// is being passed in
function taxCalc({ price, tax = 0.1 }) {
  return price + (price * tax);
}

const total = taxCalc({price: 550, tax: "0.13"})