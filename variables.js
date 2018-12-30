
// vars are function scoped, means they are available inside the function 
// they are created or if not in a function, they are globally scoped
var width = 100;

// let and cons is scoped to a block (like if conditional) 
// and are not going to be leaked to global scope
// let & const cannot be re-declared in the same scope
let height = 200;

// we cannot update const variables, but properties, like in a 
// const object, can be changed
const key = "abcd";


// here the idea is to have i logged every 1 sec and it should be 1, 2, 3
// and so on
for(var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000)
}

// however the result is going to be all console log of i = 10 after 1 sec
// because the loop goes though and the var i is being overwritten to 10
// to fix this, we can change var to let

for(let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000)
}

// so, since let is bloke scoped after a sec we will have a console log
// of each i from 0 to 10


// Temporal dead zone
console.log(pizza)
//
// this is the temporal dead zone
// you cannot call pizza before it is defined
//
const pizza = '🍕';

/* 
--- ES6 rules:
- Use const by default.
- Only use let if rebinding is needed.
- No real need to use var in ES6
*/
