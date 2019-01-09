// The ... is also a rest param, which does the opposite of
// the spread operator. It takes multiple things and packs them
// into a single array.

function convertCurrency (rate, ...amounts) {
  // rate is just the value we pass in
  // amounts is an array of passed in value
  // after the first one (rate)

  return amounts.map(amount => amount * rate);

}

convertCurrency(0.8, 100, 23, 9, 53);

// We can use the rest operator for destructuring data

const garage = ["Max", "New York", "BMW 330", "Mercedes C220", "Honda Civic"];

const [name, id, ...cars];

// name = Max; id = New York; cars = ["BMW 330", "Mercedes C220", "Honda Civic"];