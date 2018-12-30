const name = 'max';
const flightNum = 'VS003';
const accountNum = '01924UA4231ZA'

// .startsWith() is not case sensitive
name.startsWith('m'); // returns true

// we can add second argument to set
// how many characters we want to skip
flightNum.startsWith('0', 2) // returns true

// .endsWith() is quite similar
name.endsWith('x') // returns true

// we can use the second argument to set
// the num of characters to check on
accountNum.endsWith('UA', 7) // returns true

// includes checks the given string contains
// the argument string
accountNum.includes('UA') // returns true

// .repeat() returns a string with a repeated
// givens string num times

name.repeat(10) // returns 'maxmaxmaxmaxmaxmaxmaxmaxmaxmax'