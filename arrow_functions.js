// arrow functions are more concise, have implicit return
// and don't rebind the value of this when using arrow function
// inside of another function

const names = ['max', 'alex', 'tim']

const sayMyName = names.map(name => `Your name is ${name}`);

// arrow functions don't have a name, 
// but we can put them in a variable

const name = 'max';
const seyHello = name => {alert(`Hello ${name}!`)};

seyHello();

// mapping an array for returning an object
const race = '100m Dash';
const winners = ['max', 'alex', 'tim'];

// parenthesis around curly braces ({ }) means that we are 
// returning an object
const win = winners.map((winner, i) => ({
  name: winner,
  race: race,
  place: i + 1 // so it doesn't start at 0
}))

// we still will need to use regular functions, for example we would
// need to use EventListeners like click and the keyword this

const body = document.querySelector('body');

// here if we would use => function, this would be bound to window
body.addEventListener('click', function() {
  this.classList.toggle('hello');
  // will be the parent, if we would use another function
  // this would be window because that function is not bound
  // to anything 
  setTimeout(() => {
    this.classList.toggle('hi');
  }, 1000)
})