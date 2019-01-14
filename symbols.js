// There is a seventh primitive type been added to JS.
// Other 6 primitives are: 
// number, string, object, boolean, null and undefined
// Now we have the seventh, which is the symbol.

// Symbols are unique and help us avoiding naming collisions.
// Anytime we want to create a property in a unique way,
// we can use a Symbol.

const max = Symbol("Max");

// This Symbol takes a descriptor (not a value).

const person = Symbol("Max");

// Despite we have the same descriptor, these two
// constants are not the same, both double and triple
// equality (== && ===) will be false

const patients = {
  [Symbol("Andrea")]: {age: 22, gender: 'female'},
  [Symbol("John")]: {age: 9, gender: 'male'},
  [Symbol("Andrea")]: {age: 37, gender: 'male'},
}

// Symbols are enumerable, therefore we can't use for
// loops on them.

// But if we want to access the data, we need to use
// Object.getOwnPropertySymbols()

const patientSymbols = Object.getOwnPropertySymbols(patients);
const patientData = patientSymbols.map(patient => patients[patient]);

// This gives us an array of symbols in patientSymbols
// and then we can access the data over a simple map.