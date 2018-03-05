
// vars are function scoped, means they are available inside the function 
// they are created or if not in function they are globally scoped
var width = 100;

// let and cons is scoped to a block (like if conditional) 
// and is not going to be leaked to global 
// Let & const cannot be re-declared in the same scope
let height = 200;

// we cannot update const variables, but properties like in a const object can be changed 
const key = "abcd";